const ANALYSIS_TYPE = {
	TILE: "Tile",
	UNIT: "Unit",
	STRUCTURE: "Structure"
};

//Is a config object of type TerrainConfig or UnitConfig
var HighlightedEntity = null;

//Is the index in the BIOMES region.
var LocalBiome = -1;

const showTraits = function(config) {
	const TRAIT_TO_TAG = [
		"Trait1", "tag1",
		"Trait2", "tag2",
		"Trait3", "tag3",
		"Trait4", "tag4"
	];

	for(let i = 0; i < TRAIT_TO_TAG.length; i += 2) {
		const traitID = TRAIT_TO_TAG[i];
		const tagID = TRAIT_TO_TAG[i + 1];
		const iconSrc = getTraitIcon(config[tagID]);

		if(iconSrc) {
			document.getElementById(traitID).style.visibility = "visible";
			document.getElementById(traitID).src = iconSrc;
		} else {
			document.getElementById(traitID).style.visibility = "hidden";
		}
	}
}

const getTerrainType = function(index) {
	if(index < 0 || index >= TERRAIN.length) {
		return null;
	}

	return TERRAIN[index];
}

const analyzeTile = function(index, tileX, tileY) {
	const { language } = battalion;
	const terrainType = getTerrainType(index);

	LocalBiome = BiomeMap[tileY][tileX]; 

	if(LocalizationMap[tileY][tileX] == 0) {
		document.getElementById("DetBarName").innerHTML = language.get(terrainType.$name);
		document.getElementById("DetBarDescription").innerHTML = language.get(terrainType.desc);
	} else {
		document.getElementById("DetBarName").innerHTML = LocalizationMap[tileY][tileX].name;
		document.getElementById("DetBarDescription").innerHTML = LocalizationMap[tileY][tileX].description;
	}

	document.getElementById("DetBar").src="Assets/Miscellaneous/TerrainDetailBar.png";
	document.getElementById("DetBarDescription").style.width="350px";
	document.getElementById("Icon").style.visibility="inherit";
	document.getElementById("IconMesh").style.visibility="hidden";
	document.getElementById("Icon").src="Assets/Tiles/"+Terrain[index].name+".png";
	document.getElementById("Icon").style.filter="hue-rotate(0deg) saturate(100%) brightness(100%)";

	if(Terrain[index].Urbanistics >= 2) {
		document.getElementById("Icon").style.filter=Factions[ControlMap[tileY][tileX]].ChromaCode;
	}

	document.getElementById("Health").style.visibility="hidden";
	document.getElementById("Damage").style.visibility="hidden";
	document.getElementById("Movement").style.visibility="hidden";
	document.getElementById("Biome").style.visibility="inherit";
	document.getElementById("Biome").src=BIOMES[LocalBiome].icon;

	if(LocalBiome == 1) {
		document.getElementById("Biome").src="Assets/Traits/Temperate.png"
	}

	showTraits(Terrain[index]);
}

const analyzeUnit = function(unit) {
	var armorindex=0;
	if(unit.armor=="Light"){armorindex=1}else if(unit.armor=="Medium"){armorindex=2}else if(unit.armor=="Heavy"){armorindex=3};
	var weaponindex=0;
	if(unit.damageType=="Light"){weaponindex=1;}else if(unit.damageType=="Medium"){weaponindex=2;}else if(unit.damageType=="Heavy"){weaponindex=3;}else{weaponindex=4;};
	var movementindex=0;
	if(unit.movementType=="Stationary"){movementindex=1;}else if(unit.movementType=="Foot"){movementindex=2;}else if(unit.movementType=="Wheeled"){movementindex=3;}else if(unit.movementType=="Tracked"){movementindex=4;}else if(unit.movementType=="Flight"){movementindex=5;}else if(unit.movementType=="Rudder"){movementindex=6;}else if(unit.movementType=="Heavy Rudder"){movementindex=7;}else if(unit.movementType=="Amphibious"){movementindex=8;};
	
	//alert(movementindex);
	document.getElementById("Icon").style.visibility="inherit";
	document.getElementById("IconMesh").style.visibility="inherit";
	document.getElementById("Icon").src="Assets/Units/Static/"+Units[unit.unitType].shortname+"2.png";
	document.getElementById("Icon").style.filter=Factions[unit.faction].ChromaCode;
	if(!Units[unit.unitType].MLPR??false){document.getElementById("IconMesh").src="Assets/Units/StaticMeshes/"+Units[unit.unitType].shortname+"Mesh2.png"}else{document.getElementById("IconMesh").src="Assets/Miscellaneous/Nothing.png"};

	document.getElementById("HPHeader").innerHTML=Language.SystemTerms[44];
	document.getElementById("DamageHeader").innerHTML=Language.SystemTerms[45];
	document.getElementById("MovementHeader").innerHTML=Language.SystemTerms[46];

	document.getElementById("DetBarName").innerHTML=unit.getName(battalion);
	document.getElementById("DetBarDescription").style.width="210px";
	document.getElementById("DetBarDescription").innerHTML=unit.getDescription(battalion);
	document.getElementById("DetBar").src="Assets/Miscellaneous/UnitDetailBar.png";

	document.getElementById("Health").style.visibility="inherit";
	document.getElementById("ArmorType").style.left=273-20*(armorindex-1)+"px";
	document.getElementById("ArmorType").style.clip="rect(0px,"+armorindex*20+"px,20px,"+(armorindex-1)*20+"px)";
	document.getElementById("HP").innerHTML=unit.life+"/"+Units[unit.unitType].HP;
	document.getElementById("HPbar").style.width=(40*unit.life/Units[unit.unitType].HP)+"px";
	document.getElementById("HPbar").style.filter="brightness("+(unit.life/Units[unit.unitType].HP)+")";
	ArmorShowcase=unit.armor;

	document.getElementById("Damage").style.visibility="inherit";
	document.getElementById("DamageType").style.left=350-20*(weaponindex-1)+"px";
	document.getElementById("DamageType").style.clip="rect(0px,"+weaponindex*20+"px,20px,"+(weaponindex-1)*20+"px)";
	document.getElementById("DamageValue").innerHTML=unit.damage+"("+Units[unit.unitType].MinRange+"-"+Units[unit.unitType].MaxRange+")";
	WeaponShowcase=unit.damageType;

	document.getElementById("Movement").style.visibility="inherit";
	document.getElementById("MovementType").style.left=427-20*(movementindex-1)+"px";
	document.getElementById("MovementType").style.clip="rect(0px,"+movementindex*20+"px,20px,"+(movementindex-1)*20+"px)";
	document.getElementById("Speed").innerHTML=unit.speed+"";
	MovementShowcase=unit.movementType;

	document.getElementById("Biome").style.visibility="hidden";
	
	showTraits(unit.config);
}

const analyzeStructure = function(tileX, tileY) {}

function AnalyzeSquare(analysisType, tileY, tileX){
	switch(analysisType) {
		case ANALYSIS_TYPE.TILE: {
			const tileID = Map[tileY][tileX];

			HighlightedEntity = Terrain[tileID];

			analyzeTile(tileID, tileX, tileY);
			break;
		}
		case ANALYSIS_TYPE.UNIT: {
			const unit = rostermap[tileY][tileX];

			HighlightedEntity = Units[unit.unitType];

			analyzeUnit(unit);
			break;
		}
		case ANALYSIS_TYPE.STRUCTURE: {
			analyzeStructure(tileX, tileY);
			break;
		}
		default: {
			console.warn(`AnalysisType ${analysisType} is invalid!`);
			break;
		}
	}
}

function AnalyzeSpecification(Index) {
	const { story } = battalion;
	const mission = story.getCurrentNode(StoryHandler.TYPE.MISSION);

	if(!mission) {
		return;
	}

	const { data } = mission;
	const { Constants } = data;

	if(!Constants) {
		return;
	}

	document.getElementById("SpecificationText").innerHTML=Language.SystemTerms[83+Index];

	if(Index==1){document.getElementById("SpecificationText").innerHTML+=((Constants.Funds??[0,0])[1]+" "+Language.SystemTerms[92])};
	if(Index==2){document.getElementById("SpecificationText").innerHTML+=(Constants.Survival+" "+Language.SystemTerms[93])};
	if(Index==3){document.getElementById("SpecificationText").innerHTML+=(Constants.TimeLimit+" "+Language.SystemTerms[93])}
}