/**
 * neyn 07.04.2025
 * 
 * @param {int[][]} array2D 
 * @returns 
 */
const getMapString = function(array2D) {
	const str = [];

	for(let i = 0; i < array2D.length; i++) {
		str.push(`[${array2D[i]}]`);
	}

	return str;
}

/**
 * neyn 07.04.2025
 * 
 * @returns {string[]}
 */
const getLocalizationString = function() {
	const str = [];

	for(let i = 0; i < Localization.length; i++) {
		str.push(`{"X": ${Localization[i].X-1}, "Y": ${Localization[i].Y-1}, "name": "${Localization[i].name}", "Description": "${Localization[i].description}"}`);
	}

	return str;
}

function RetrieveAllMapData() {
	let GeneralsList=[Nobody,WhiteGeneral,BlackGeneral,GreyGeneral,IndigoGeneral,GreenGeneral,GrayGeneral,YellowGeneral,BrownGeneral,RedGeneral,BlueGeneral];
	let GeneralsListAlter=["Nobody","WhiteGeneral","BlackGeneral","GreyGeneral","IndigoGeneral","GreenGeneral","GrayGeneral","YellowGeneral","BrownGeneral","RedGeneral","BlueGeneral"];
	let CommanderList=[Nobody, GeneralsList[EditationColor]];

	const roster = [];

	roster.push(`{ "index": 0, "id": null, "faction": null, "direction": null, "x": null, "y": null, "morale": 0, "hpModifier": 0, "defaultX": 0, "defaultY": 0 }`);

	for(let i = 0; i < x; i++) {
		for(let j = 0; j < y; j++) {
			if(EditorEntityMap[i][j] != 0) {
				let UnitEntry = `{ "id": ${EditorEntityMap[i][j].id}, "faction": ${EditorEntityMap[i][j].faction}, "direction": ${EditorEntityMap[i][j].direction}, "x": ${EditorEntityMap[i][j].x}, "y": ${EditorEntityMap[i][j].y}, "morale": ${Math.min(2,Math.max(-4,EditorEntityMap[i][j].morale??0))}, "hpModifier": ${Math.min(4,Math.max(-0.99, EditorEntityMap[i][j].HPI??0))}`;
				//let hek=typeof(JSON.parse(EditorEntityMap[i][j].CustomName));
				//alert(hek);
				let canAdd=true;
				for(let k=1; k<CommanderList.length; k++){if(EditorEntityMap[i][j].faction==CommanderList[k].Allegiance){canAdd=false}};
				if(canAdd){CommanderList[CommanderList.length]=GeneralsList[EditorEntityMap[i][j].faction]};

				NumeSpecial=false;
				DescriereSpeciala=false;
				if((EditorEntityMap[i][j].CustomName??[false])[0]=='#'){NumeSpecial=true};
				if((EditorEntityMap[i][j].CustomDescription??[false])[0]=='#'){DescriereSpeciala=true};
				if(EditorEntityMap[i][j].CustomName??0 !=0) {
					if(!NumeSpecial) {
						UnitEntry += `, "CustomName": "${EditorEntityMap[i][j].CustomName}"`;
					} else {
						let CheieNume=EditorEntityMap[i][j].CustomName;
						CheieNume=CheieNume.substring(1);
						//CheieNume=JSON.parse(CheieNume);
						//alert(CheieNume);
						//alert(Language.UnitSpecialNames[CheieNume]);
						UnitEntry += `, "SpecialName": "${JSON.parse(CheieNume)}"`;
					}
				};

				if(EditorEntityMap[i][j].CustomDescription??0 !=0) {
					if(!DescriereSpeciala) {
						UnitEntry += `, "CustomDescription": "${EditorEntityMap[i][j].CustomDescription}"`;
					} else {
						let CheieDescriere=EditorEntityMap[i][j].CustomName;
						CheieDescriere=CheieDescriere.substring(1);
						UnitEntry += `, "SpecialDescription": "${JSON.parse(CheieDescriere)}"`;
					}
				}

				UnitEntry += ` }`;

				roster.push(UnitEntry);
			}
		}
	}

	const DEFAULT_TIME = 77777;
	const SurviveTimer = parseInt(document.getElementById("SurviveInput").value ?? DEFAULT_TIME) ?? DEFAULT_TIME;
	const TimeLimit = parseInt(document.getElementById("TimeLimitInput").value ?? DEFAULT_TIME) ?? DEFAULT_TIME;
	const commanderList = [];

	for(let i = 0; i < CommanderList.length; i++) {
		commanderList.push(GeneralsListAlter[i]);
	}

	const file = new InefficientJSONExporter(4)
	.open()
	.writeLine("Name", 1, "")
	.writeLine("Desc", 1, "")
	.writeLine("Width", 1, EditorMap[0].length)
	.writeLine("Height", 1, EditorMap.length)
	.writeList("Map", 1, getMapString(EditorMap), InefficientJSONExporter.LIST_TYPE.ARRAY)
	.writeList("BiomeMap", 1, getMapString(EditorBiomeMap), InefficientJSONExporter.LIST_TYPE.ARRAY)
	.writeList("ControlMap", 1, getMapString(EditorControlMap), InefficientJSONExporter.LIST_TYPE.ARRAY)
	.writeList("RegionMap", 1, getMapString(EditorRegionMap), InefficientJSONExporter.LIST_TYPE.ARRAY)
	.writeList("Roster", 1, roster, InefficientJSONExporter.LIST_TYPE.ARRAY)
	.openList("Constants", 1, InefficientJSONExporter.LIST_TYPE.OBJECT)
	.writeLine("YourFaction", 2, EditationColor)
	.writeLine("defaultX", 2, 0)
	.writeLine("defaultY", 2, 0)
	.writeLine("Survival", 2, SurviveTimer)
	.writeLine("TimeLimit", 2, TimeLimit)
	.writeLine("Capture", 2, [])
	.writeLine("Defend", 2, [])
	.writeLine("Defeat", 2, [])
	.writeLine("Protect", 2, [])
	.writeLine("Funds", 2, [0, 0, 0])
	.writeLine("Commanders", 2, commanderList)
	.closeList()
	.writeList("LocKey", 1, getLocalizationString(), InefficientJSONExporter.LIST_TYPE.ARRAY)
	.writeLine("Factions", 1, "GenericFactions")
	.close();

	file.download("new_map");

	console.log(file.jsonString);
}

function RetrieveControlCode() {
	let ControlKey="[";
	for(let i=0;i<x;i++){ControlKey+="["+EditorControlMap[i]+"]";
	if(i<x-1){ControlKey+=",\n";};};
	ControlKey+="]";
	alert(ControlKey);
}

function RetrieveLocalization() {
	let LocKey="[";
	for(let i=0;i<Localization.length;i++){
		let LK="{X:"+(Localization[i].X-1)+",Y:"+(Localization[i].Y-1)+",name:'"+Localization[i].name+"',Description:'"+Localization[i].description+"'}, \n";
	LocKey+=LK;
	};
	//LocKey.pop();
	LocKey+="],";
	alert(LocKey);
}

function RetrieveMapCode() {
	let MapKey="[";
	for(let i=0;i<x;i++){MapKey+="["+EditorMap[i]+"]";
	if(i<x-1){MapKey+=",\n";};};
	MapKey+="]";
	console.log(MapKey);
}

function RetrieveRegionCode() {
	let RegionKey="[";
	for(let i=0;i<x;i++){RegionKey+="["+EditorRegionMap[i]+"]";
	if(i<x-1){RegionKey+=",\n";};};
	RegionKey+="]";

	let NodeKey="[";
	//for(let i=0;i<x;i++){NodeKey+="["+CapitolNodeRegistry[i]+"]";
	//if(i<x-1){NodeKey+=",\n";};};
	for(let i=0;i<x;i++){for(j=0;j<y;j++){
		if(CapitolNodeRegistry[i][j]!=1){
		NodeEntry='{Owner:'+CapitolNodeRegistry[i][j].Owner+',Capitol:"'+CapitolNodeRegistry[i][j].Capitol+'",CapitolX:'+CapitolNodeRegistry[i][j].CapitolX+',CapitolY:'+CapitolNodeRegistry[i][j].CapitolY+',Name:'+CapitolNodeRegistry[i][j].Name+'},\n';
		NodeKey+=NodeEntry;
		};
	}}
	NodeKey+="]";
	console.log(RegionKey);
	alert(NodeKey)
}

function RetrieveRosterCode(){
	let RosterKey='[{index:0, id:"null", faction:"null", direction:"null", x:"null", y:"null", morale:0, hpModifier:0, defaultX:0,defaultY:0},\n';

	for(let i=0; i<x;i++){for(let j=0; j<y;j++){
		if(EditorEntityMap[i][j]!=0){
			UnitEntry='{id:'+EditorEntityMap[i][j].id+' , faction:'+EditorEntityMap[i][j].faction+' , direction:'+EditorEntityMap[i][j].direction+', x:'+EditorEntityMap[i][j].x+', y:'+EditorEntityMap[i][j].y+', morale:'+Math.min(2,Math.max(-4,EditorEntityMap[i][j].morale??0))+', hpModifier:'+Math.min(4,Math.max(-0.99, EditorEntityMap[i][j].HPI??0));
			//let hek=typeof(JSON.parse(EditorEntityMap[i][j].CustomName));
			//alert(hek);
			NumeSpecial=false;
			DescriereSpeciala=false;
			if((EditorEntityMap[i][j].CustomName??[false])[0]=='#'){NumeSpecial=true};
			if((EditorEntityMap[i][j].CustomDescription??[false])[0]=='#'){DescriereSpeciala=true};
			if(EditorEntityMap[i][j].CustomName??0 !=0){if(!NumeSpecial){UnitEntry+=', CustomName:'+"'"+EditorEntityMap[i][j].CustomName+"'"}else{
				let CheieNume=EditorEntityMap[i][j].CustomName;
				CheieNume=CheieNume.substring(1);
				//CheieNume=JSON.parse(CheieNume);
				//alert(CheieNume);
				//alert(Language.UnitSpecialNames[CheieNume]);
				UnitEntry+=', SpecialName:'+JSON.parse(CheieNume);
			}};

			if(EditorEntityMap[i][j].CustomDescription??0 !=0){if(!DescriereSpeciala){UnitEntry+=', CustomDescription:'+"'"+EditorEntityMap[i][j].CustomDescription+"'"}else{
				let CheieDescriere=EditorEntityMap[i][j].CustomName;
				CheieDescriere=CheieDescriere.substring(1);
				UnitEntry+=', SpecialDescription:'+JSON.parse(CheieDescriere);
			}};
			UnitEntry+='},\n';
			RosterKey+=UnitEntry;
		};
	}};
	alert(RosterKey);
}