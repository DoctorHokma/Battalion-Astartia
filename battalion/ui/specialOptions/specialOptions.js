var IsStork = false;
var IsConvoy = false;
var BizzareMoneyPointer = 0;

const SpecialOptions = function() {
    GenericMenu.call(this, "SpecialActionPanel");

    this.tileX = -1;
    this.tileY = -1;
    this.transportType = SpecialOptions.TRANSPORT_TYPE.NONE;
}

SpecialOptions.COST = {
    NAVAL: 100,
    AIR: 150,
    DEPOT: 1300,
    MINES: 200
};

SpecialOptions.TRANSPORT_TYPE = {
    NONE: 0,
    NAVAL: 1,
    AIR: 2
};

SpecialOptions.prototype = Object.create(GenericMenu.prototype);
SpecialOptions.prototype.constructor = SpecialOptions;

SpecialOptions.prototype.open = function(x, y) {
    this.tileX = x;
    this.tileY = y;

	//alert(YourMoney>=Units[rostermap[X][Y].unitType].Cost/2);
	IsStork = false;
	IsConvoy = false;

	let isInFriendlyTerritory = false;
	document.getElementById("BuildStructureMask").style.visibility="inherit";

	let X = x;
	let Y = y;

    this.show();
	this.element.style.left=Math.max(Math.min(-28+y*56,Map[0].length*56-115),0)+"px";
	this.element.style.top=Math.max(Math.min(-15+x*56,Map.length*56-77),0)+"px";
	document.getElementById("AirTransportPickupMask").src="Assets/Miscellaneous/StorkPickupMask.png";
	document.getElementById("NavalTransportPickupMask").src="Assets/Miscellaneous/ConvoyPickupMask.png";

    const unit = rostermap[x][y];

    if(unit) {
        if(unit.hasTrait(Entity.TRAIT.AIR_TRANSPORT)) {
            IsStork = true;
            IsConvoy = false;
        }

        if(unit.hasTrait(Entity.TRAIT.NAVAL_TRANSPORT)) {
            IsStork = false;
            IsConvoy = true;
        }
    }

	if(IsStork) {
        document.getElementById("AirTransportPickupMask").src = "Assets/Miscellaneous/UnitDisembarkMask.png";
        document.getElementById("AirTransportPickup").src = "Assets/Miscellaneous/UnitDisembark.png";
    } else {
        document.getElementById("AirTransportPickupMask").src = "Assets/Miscellaneous/StorkPickupMask.png";
        document.getElementById("AirTransportPickup").src = "Assets/Miscellaneous/StorkPickup.png";
    }

	if(IsConvoy) {
        document.getElementById("NavalTransportPickupMask").src = "Assets/Miscellaneous/UnitDisembarkMask.png";
        document.getElementById("NavalTransportPickup").src = "Assets/Miscellaneous/UnitDisembark.png"
    } else {
        document.getElementById("NavalTransportPickupMask").src = "Assets/Miscellaneous/ConvoyPickupMask.png";
        document.getElementById("NavalTransportPickup").src = "Assets/Miscellaneous/ConvoyPickup.png";
    }

	if(YourMoney >= SpecialOptions.COST.AIR && rostermap[X][Y] != 0 && hasCertainTrait(rostermap[X][Y].unitType, "Airborne") && rostermap[X][Y].faction == PlayerChoiceFaction && !IsConvoy) {
        document.getElementById("AirTransportPickupMask").style.visibility = "hidden";
    } else {
        document.getElementById("AirTransportPickupMask").style.visibility = "inherit";
    }

	if(YourMoney >= SpecialOptions.COST.NAVAL && rostermap[X][Y] != 0 && Terrain[Map[X][Y]].tag1 == "Shallow" && rostermap[X][Y].faction == PlayerChoiceFaction && !IsStork) {
        document.getElementById("NavalTransportPickupMask").style.visibility = "hidden";
    } else {
        document.getElementById("NavalTransportPickupMask").style.visibility = "inherit";
    }

	if(IsStork && Terrain[Map[X][Y]].WalkThrough < 4) {
        document.getElementById("AirTransportPickupMask").style.visibility = "hidden";
    }

	if(IsConvoy && (Terrain[Map[X][Y]].tag1 == "Shallow" || Terrain[Map[X][Y]].tag2 == "Shallow" || Terrain[Map[X][Y]].tag3 == "Shallow" || Terrain[Map[X][Y]].tag4 == "Shallow")) {
        document.getElementById("NavalTransportPickupMask").style.visibility = "hidden";
    }

	if(rostermap[X][Y] != 0 && rostermap[X][Y].life < Units[rostermap[X][Y].unitType].HP && Factions[rostermap[X][Y].faction].faction == Factions[PlayerChoiceFaction].faction && YourMoney >= Units[rostermap[X][Y].unitType].Cost / 2) {
        this.setCost(Math.round(Units[rostermap[X][Y].unitType].Cost / 2));
        
        document.getElementById("RepairUnitMask").style.visibility = "hidden";
    } else {
        document.getElementById("RepairUnitMask").style.visibility = "inherit";
    }

	if(rostermap[X][Y] == 0 && Terrain[Map[X][Y]].Constructible) {
		if(X > 0) {
            if(rostermap[X - 1][Y].faction == PlayerChoiceFaction && rostermap[X - 1][Y].speed > 0) {
                isInFriendlyTerritory = true;
            }
        }

		if(X < Map.length - 1) {
            if(rostermap[X + 1][Y].faction == PlayerChoiceFaction && rostermap[X + 1][Y].speed > 0) {
                isInFriendlyTerritory = true;
            }
        }

		if(Y > 0) {
            if(rostermap[X][Y - 1].faction == PlayerChoiceFaction && rostermap[X][Y - 1].speed > 0) {
                isInFriendlyTerritory = true;
            }
        }

		if(Y < Map[0].length - 1) {
            if(rostermap[X][Y + 1].faction == PlayerChoiceFaction && rostermap[X][Y + 1].speed > 0) {
                isInFriendlyTerritory = true;
            }
        }

		if(!isInFriendlyTerritory && (ControlMap ?? 0) != 0) {
            const startX = Math.max(0, X - 3);
            const endX = Math.min(Map.length - 1, X + 3);
            const startY = Math.max(0, Y - 3);
            const endY = Math.min(Map[0].length - 1, Y + 3);

			for(let i = startX; i <= endX; i++) {
                for(let j = startY; j <= endY; j++) {
                    if(Terrain[Map[i][j]].Urbanistics > 1 && ControlMap[i][j] == PlayerChoiceFaction) {
                        isInFriendlyTerritory = true;
                    }
                }
            }
		}

		if(isInFriendlyTerritory) {
		    document.getElementById("BuildStructureMask").style.visibility = "hidden";
        }
    } else {
        document.getElementById("BuildStructureMask").style.visibility = "inherit";
    }

	//Screw landmines, we ain"t implementing them until RetrofitD has been done
	document.getElementById("LayMinesMask").style.visibility = "inherit";
} 

SpecialOptions.prototype.setCost = function(value) {
    document.getElementById("SpecialOptionCost").innerHTML = `£${value}`;
}

SpecialOptions.prototype.clearCost = function() {
    document.getElementById("SpecialOptionCost").innerHTML = "";
}

SpecialOptions.prototype.init = function(battalion) {
    const AirTransportPickup = document.getElementById("AirTransportPickup");
    const AirTransportPickupMask = document.getElementById("AirTransportPickupMask");
    const NavalTransportPickup = document.getElementById("NavalTransportPickup");
    const NavalTransportPickupMask = document.getElementById("NavalTransportPickupMask");
    const RepairUnit = document.getElementById("RepairUnit");
    const RepairUnitMask = document.getElementById("RepairUnitMask");
    const BuildStructure = document.getElementById("BuildStructure");
    const BuildStructureMask = document.getElementById("BuildStructureMask");
    const SupplyDepot = document.getElementById("SupplyDepot");
    const SupplyDepotMask = document.getElementById("SupplyDepotMask");
    const LayMines = document.getElementById("LayMines");
    const LayMinesMask = document.getElementById("LayMinesMask");

    AirTransportPickup.onmouseover = () => {
        this.setCost(SpecialOptions.COST.AIR);
        
        if(IsStork) {
            AirTransportPickup.src = "Assets/Miscellaneous/UnitDisembarkHighlighted.png";
        } else {
            AirTransportPickup.src = "Assets/Miscellaneous/StorkPickupHighlighted.png";
        }
    }

    AirTransportPickup.onmouseout = () => {
        if(IsStork) {
            AirTransportPickup.src="Assets/Miscellaneous/UnitDisembark.png";
        } else {
            AirTransportPickup.src="Assets/Miscellaneous/StorkPickup.png";
        }
    }

    AirTransportPickup.onclick = () => {
        this.hide();

        if(IsStork) {
            StorkDrop(this.tileX, this.tileY);
        } else {
            StorkPickup(this.tileX, this.tileY);
        }
    }

    AirTransportPickupMask.onmouseover = () => {
        this.setCost(SpecialOptions.COST.AIR);
    }

    NavalTransportPickup.onmouseover = () => {
        this.setCost(SpecialOptions.COST.NAVAL);
        
        if(IsConvoy) { 
            NavalTransportPickup.src="Assets/Miscellaneous/UnitDisembarkHighlighted.png";
        } else {
            NavalTransportPickup.src="Assets/Miscellaneous/ConvoyPickupHighlighted.png";
        }
    }

    NavalTransportPickup.onmouseout = () => {
        if(IsConvoy) {
            NavalTransportPickup.src="Assets/Miscellaneous/UnitDisembark.png";
        } else {
            NavalTransportPickup.src="Assets/Miscellaneous/ConvoyPickup.png";
        }
    }

    NavalTransportPickup.onclick = () => {
        this.hide();

        if(IsConvoy) {
            ConvoyDrop(this.tileX, this.tileY);
        } else {
            ConvoyPickup(this.tileX, this.tileY);
        }
    }

    NavalTransportPickupMask.onmouseover = () => {
        this.setCost(SpecialOptions.COST.NAVAL);
    }

    RepairUnit.onmouseover = () => {
        this.setCost(BizzareMoneyPointer);

        RepairUnit.src = "Assets/Miscellaneous/UnitRepairHighlighted.png";
    }

    RepairUnit.onmouseout = () => {
        RepairUnit.src = "Assets/Miscellaneous/UnitRepair.png";
    }

    RepairUnit.onclick = () => {
        this.hide();

        YourMoney -= Math.round(Units[rostermap[this.tileX][this.tileY].unitType].Cost/2);
        rostermap[this.tileX][this.tileY].life = Units[rostermap[this.tileX][this.tileY].unitType].HP;
        
        document.getElementById("HPbar").style.filter = "";
        document.getElementById("HPbar").style.width = "39px";
        document.getElementById("HP").innerHTML = Units[rostermap[this.tileX][this.tileY].unitType].HP + "/" + Units[rostermap[this.tileX][this.tileY].unitType].HP;
    }

    RepairUnitMask.onmouseover = () => {
        this.clearCost();
    }

    BuildStructure.onmouseover = () => {
        this.clearCost();

        BuildStructure.src = "Assets/Miscellaneous/StructureConstructionHighlighted.png";
    }

    BuildStructure.onmouseout = () => {
        BuildStructure.src = "Assets/Miscellaneous/StructureConstruction.png";
    }

    BuildStructure.onclick = () => {
        this.hide();

        LaunchConstructorPanel(this.tileX, this.tileY);
    }

    BuildStructureMask.onmouseover = () => {
        this.clearCost();
    }

    SupplyDepot.onmouseover = () => {
        this.setCost(SpecialOptions.COST.DEPOT);

        SupplyDepot.src = "Assets/Miscellaneous/DepotHighlighted.png";
    }

    SupplyDepot.onmouseout = () => {
        SupplyDepot.src = "Assets/Miscellaneous/Depot.png";
    }

    SupplyDepotMask.onmouseover = () => {
        this.setCost(SpecialOptions.COST.DEPOT);
    }

    LayMines.onmouseover = () => {
        this.setCost(SpecialOptions.COST.MINES);

        LayMines.src = "Assets/Miscellaneous/MinefieldHighlighted.png";
    }

    LayMinesMask.onmouseover = () => {
        this.setCost(SpecialOptions.COST.MINES);
    }
}