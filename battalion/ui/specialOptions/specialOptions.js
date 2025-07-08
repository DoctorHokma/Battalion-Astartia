var IsStork = false;
var IsConvoy = false;
var BizzareMoneyPointer = 0;

const SpecialOptions = function() {
    this.tileX = -1;
    this.tileY = -1;
    this.transportType = SpecialOptions.TRANSPORT_TYPE.NONE;
    this.element = document.getElementById("SpecialActionPanel");
}

SpecialOptions.TRANSPORT_TYPE = {
    NONE: 0,
    NAVAL: 2,
    AIR: 2
};

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
	document.getElementById("SpecialActionPanel").style.left=Math.max(Math.min(-28+y*56,Map[0].length*56-115),0)+"px";
	document.getElementById("SpecialActionPanel").style.top=Math.max(Math.min(-15+x*56,Map.length*56-77),0)+"px";
	document.getElementById("AirTransportPickupMask").src="Assets/Miscellaneous/StorkPickupMask.png";
	document.getElementById("NavalTransportPickupMask").src="Assets/Miscellaneous/ConvoyPickupMask.png";

	if(rostermap[X][Y]!=0 && hasCertainTrait(rostermap[X][Y].unitType, "Air Transport")){ IsStork=true; IsConvoy=false;};
	if(rostermap[X][Y]!=0 && hasCertainTrait(rostermap[X][Y].unitType, "Naval Transport")){ IsStork=false; IsConvoy=true;};
	if(IsStork){document.getElementById("AirTransportPickupMask").src="Assets/Miscellaneous/UnitDisembarkMask.png";document.getElementById("AirTransportPickup").src="Assets/Miscellaneous/UnitDisembark.png"}
	else{document.getElementById("AirTransportPickupMask").src="Assets/Miscellaneous/StorkPickupMask.png";document.getElementById("AirTransportPickup").src="Assets/Miscellaneous/StorkPickup.png"};
	if(IsConvoy){document.getElementById("NavalTransportPickupMask").src="Assets/Miscellaneous/UnitDisembarkMask.png";document.getElementById("NavalTransportPickup").src="Assets/Miscellaneous/UnitDisembark.png"}
	else{document.getElementById("NavalTransportPickupMask").src="Assets/Miscellaneous/ConvoyPickupMask.png";document.getElementById("NavalTransportPickup").src="Assets/Miscellaneous/ConvoyPickup.png"};

	

	if(YourMoney>=150 && rostermap[X][Y]!=0 && hasCertainTrait(rostermap[X][Y].unitType,"Airborne") && rostermap[X][Y].faction==PlayerChoiceFaction && !IsConvoy){document.getElementById("AirTransportPickupMask").style.visibility="hidden"}else{document.getElementById("AirTransportPickupMask").style.visibility="inherit"};
	if(YourMoney>=100 && rostermap[X][Y]!=0 && Terrain[Map[X][Y]].tag1=="Shallow" && rostermap[X][Y].faction==PlayerChoiceFaction && !IsStork){document.getElementById("NavalTransportPickupMask").style.visibility="hidden"}else{document.getElementById("NavalTransportPickupMask").style.visibility="inherit"};

	if(IsStork && Terrain[Map[X][Y]].WalkThrough<4){document.getElementById("AirTransportPickupMask").style.visibility="hidden"}else{};
	if(IsConvoy && (Terrain[Map[X][Y]].tag1=="Shallow" || Terrain[Map[X][Y]].tag2=="Shallow" || Terrain[Map[X][Y]].tag3=="Shallow" || Terrain[Map[X][Y]].tag4=="Shallow")){document.getElementById("NavalTransportPickupMask").style.visibility="hidden"}else{};

	if(rostermap[X][Y]!=0 && rostermap[X][Y].life<Units[rostermap[X][Y].unitType].HP && Factions[rostermap[X][Y].faction].faction==Factions[PlayerChoiceFaction].faction && YourMoney>=Units[rostermap[X][Y].unitType].Cost/2){document.getElementById("RepairUnitMask").style.visibility="hidden";document.getElementById("SpecialOptionCost").innerHTML="£"+Math.round(Units[rostermap[X][Y].unitType].Cost/2)}else{document.getElementById("RepairUnitMask").style.visibility="inherit"};

	if(rostermap[X][Y]==0 && Terrain[Map[X][Y]].Constructible){
		if(X>0){if(rostermap[X-1][Y].faction==PlayerChoiceFaction && rostermap[X-1][Y].speed>0){isInFriendlyTerritory=true}};
		if(X<Map.length-1){if(rostermap[X+1][Y].faction==PlayerChoiceFaction && rostermap[X+1][Y].speed>0){isInFriendlyTerritory=true}};
		if(Y>0){if(rostermap[X][Y-1].faction==PlayerChoiceFaction && rostermap[X][Y-1].speed>0){isInFriendlyTerritory=true}};
		if(Y<Map[0].length-1){if(rostermap[X][Y+1].faction==PlayerChoiceFaction && rostermap[X][Y+1].speed>0){isInFriendlyTerritory=true}};
		if(!isInFriendlyTerritory && (ControlMap??0)!=0){
			for(let i=Math.max(0,X-3);i<=Math.min(Map.length-1,X+3);i++){for(let j=Math.max(0,Y-3);j<=Math.min(Map[0].length-1,Y+3);j++){if(Terrain[Map[i][j]].Urbanistics>1 && ControlMap[i][j]==PlayerChoiceFaction){isInFriendlyTerritory=true}}}

		};

		if(isInFriendlyTerritory) {
		    document.getElementById("BuildStructureMask").style.visibility="hidden";
        }
    } else {
        document.getElementById("BuildStructureMask").style.visibility="inherit";
    }

	//Screw landmines, we ain"t implementing them until RetrofitD has been done
	document.getElementById("LayMinesMask").style.visibility="inherit";
} 

SpecialOptions.prototype.show = function() {
    this.element.style.visibility = "visible";
}

SpecialOptions.prototype.close = function() {
    this.element.style.visibility = "hidden";
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
        this.setCost(150);
        
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
        this.close();
        //this.x and this.y is meant!
        StorkPickup(this.tileX, this.tileY);
    }

    AirTransportPickupMask.onmouseover = () => {
        this.setCost(150);
    }

    NavalTransportPickup.onmouseover = () => {
        this.setCost(100);
        
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
        this.close();

        ConvoyPickup(this.tileX, this.tileY);
    }

    NavalTransportPickupMask.onmouseover = () => {
        this.setCost(100);
    }

    RepairUnit.onmouseover = () => {
        this.setCost(BizzareMoneyPointer);

        RepairUnit.src = "Assets/Miscellaneous/UnitRepairHighlighted.png";
    }

    RepairUnit.onmouseout = () => {
        RepairUnit.src = "Assets/Miscellaneous/UnitRepair.png";
    }

    RepairUnit.onclick = () => {
        this.close();

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
        this.close();

        LaunchConstructorPanel(this.tileX, this.tileY);
    }

    BuildStructureMask.onmouseover = () => {
        this.clearCost();
    }

    SupplyDepot.onmouseover = () => {
        this.setCost(1300);

        SupplyDepot.src = "Assets/Miscellaneous/DepotHighlighted.png";
    }

    SupplyDepot.onmouseout = () => {
        SupplyDepot.src = "Assets/Miscellaneous/Depot.png";
    }

    SupplyDepotMask.onmouseover = () => {
        this.setCost(1300);
    }

    LayMines.onmouseover = () => {
        this.setCost(200);

        LayMines.src = "Assets/Miscellaneous/MinefieldHighlighted.png";
    }

    LayMinesMask.onmouseover = () => {
        this.setCost(200);
    }
}