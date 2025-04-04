const OPENING_TRACK = "RiversOfSteel";
const battalion = new Battalion();

ResolutionXFactor=1;
ResolutionYFactor=1;
BattleEnd=false;
ChosenNation=1;
ChosenChapter=1;
ChosenMission=1;
TutorialLevel=0;
StandardX=0;
StandardY=0;
ChosenMap=0;
GlobalDelayerConstant=0;
LastMove={ID:0, X:0, Y:0, HP:0, MOR:0, EID:0, EX:0, EY:0, EHP:0, EMOR:0, GRV:0};
FlagsToggled=false;
BadgesToggled=false;
BarsToggled=false;
CargoToggled=false;
RegionsToggled=false;
//UnlockedLevels=[true,false,false,false,false];

FieldMode="Null";

ChosenTerrain=1;
EditorUnitClass=1;
ChosenUnit={definite:false};
EditationToggle='Tile';
EditationColor=1;
EditationDirection=1;
SelectedNode=0;
EditorStandardX=0;
EditorStandardY=0;
EditorNationBatch=0;
RegionalToggle=false;
NivelElectiv=0;
MemoryX=1;
MemoryY=1;


Language=ENG;
LevelMap=Palawan;
LevelRoster=PalawanRoster;
Panel=0;
Difficulty=2;
Playlists=[];
InterlogueBST=[[],[],[],[],[],[],[],[],[],[],[]];


Campaigns=[
	[	[{Map:Presus,Roster:PresusRoster,Constants:PresusConstants,Finished:true,Localization:PresusLocalization},{Map:RockyMountainsCentra,Roster:RockyMountainsCentraRoster,Constants:RockyMountainsCentraConstants,Finished:true},{Map:Moh,Roster:MohRoster,ControlMap:MohControl,Constants:MohConstants,Finished:true},{Map:Patna,Roster:PatnaRoster,ControlMap:PatnaControl,Constants:PatnaConstants,Finished:true,Funds:[0,500,500]},{Map:Kaula,Roster:KaulaRoster,ControlMap:KaulaControl,Constants:KaulaConstants,Finished:true}],
		[{Map:Interriverana,Roster:InterriveranaRoster,Constants:InterriveranaConstants,ControlMap:InterriveranaControl,Finished:true},{Map:SouthMolda,Roster:SouthMoldaRoster,Constants:SouthMoldaConstants,Finished:true},{Map:HevanSea,Constants:HevanSeaConstants,Roster:HevanSeaRoster,Finished:true},{Map:WestMazowia,Roster:WestMazowiaRoster,Constants:WestMazowiaConstants,Finished:true},{Map:Patna,Roster:PatnaRoster2,ControlMap:PatnaControl2,Constants:PatnaConstants2,Finished:true}],
		[{Map:Kielbasa.Map,Roster:KielbasaRoster,Constants:KielbasaConstants,Finished:true},{Map:ValeriaIsland,Roster:ValeriaIslandRoster,Constants:ValeriaIslandConstants,Finished:true},{Map:NorthCoast,Roster:NorthCoastRoster2,Constants:NorthCoastConstants2,Finished:true},{Map:Holelandia,Roster:HolelandiaRoster,Constants:HolelandiaConstants,ControlMap:HolelandiaControl,Finished:true},{Map:Ursa,Roster:UrsaRoster,Constants:UrsaConstants,Finished:false}],
		[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}],
		[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}],
		[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}],
		[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}]],
	[	[{Map:RockyMountainsCentra,Roster:RockyMountainsCentraRoster,Constants:RockyMountainsCentraConstantsReverse,Finished:true},{Map:Presus,Roster:PresusRoster,Constants:PresusConstantsReverse,Finished:true},{Map:Panere,Roster:PanereRoster,Constants:PanereConstants,Finished:true},{Map:Mica,Roster:MicaRoster2,Constants:MicaConstants2,Finished:true},{Map:Patna,Roster:PatnaRoster,ControlMap:PatnaControl,Constants:PatnaConstantsAlter,Finished:true}],
		[{Map:Patna,Roster:PatnaRosterPara,ControlMap:PatnaControlPara,Constants:PatnaConstantsPara,Finished:true},{Map:Posun,Roster:PosunRoster,Constants:PosunConstants,Finished:true},{Map:Posun,Roster:PosunRoster2,Constants:PosunConstants2,Finished:true},{Map:WestMazowia,Roster:WestMazowiaRoster,Constants:WestMazowiaConstants2,Finished:true},{Map:Kaula,Roster:KaulaRoster,ControlMap:KaulaControl,Constants:KaulaConstantsAlter,Finished:true}],
		[{Map:Dambova,Roster:DambovaRoster,Constants:DambovaConstants,Finished:true},{Map:Kaula,Roster:KaulaRosterAlter,Constants:KaulaConstantsAlter2,ControlMap:KaulaControlAlter,Finished:true},{Map:SomertinNE,Roster:SomertinNERoster,Constants:SomertinNEConstants,ControlMap:SomertinNEControl,Finished:true},{Map:InterriveranaAir,Roster:InterriveranaAirRoster,Constants:InterriveranaAirConstants,Finished:true},{Map:SomertinSE,Roster:SomertinSERoster,Constants:SomertinSEConstants,ControlMap:SomertinSEControl,Finished:false},],
		[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}],
		[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}],
		[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}],
		[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}]],
	[	[{Map:SvelgeCoast, Roster: SvelgeCoastRoster, Constants:SvelgeCoastConstants, BiomeMap:BorealMap10X10, Finished:true},{Map:JyllaCoast, Roster:JyllaCoastRoster, Constants:JyllaCoastConstants, BiomeMap:BorealMap10X10, Finished:true},{Map:SvelgeCoast, Roster: SvelgeCoastRoster2, Constants:SvelgeCoastConstants2, BiomeMap:BorealMap10X10, Finished:true},{Map:JyllaCoast, Roster:JyllaCoastRoster2, Constants:JyllaCoastConstants2, BiomeMap:BorealMap10X10, Finished:true},{Map:Palace,Roster:PalaceRoster,ControlMap:PalaceControl,Constants:PalaceConstants, BiomeMap:BorealMap10X10,Finished:true}],
		[{Map:SWBurluk,Constants:SWBurlukConstants,Roster:SWBurlukRoster,Finished:true},{Map:SouthMolda,Constants:SouthMoldaConstantsPara,Roster:SouthMoldaRoster,Finished:true},{Map:ElamGulf,Constants:ElamGulfConstants,Roster:ElamGulfRoster,Finished:true},{Map:Kaula,Constants:KaulaConstantsPara,Roster:KaulaRoster,ControlMap:KaulaControl,Finished:true},{Map:KaulaPocket,Constants:KaulaPocketConstants,Roster:KaulaPocketRoster,Finished:true}],
		[{Map:Kcirokaster,Roster:KcirokasterRoster,Constants:KcirokasterConstants,Finished:true},{Map:AirExercise,Roster:AirExerciseRoster,Constants:AirExerciseConstants,Finished:true},{Map:Patna,Roster:PatnaRosterAntistasi,Constants:PatnaConstantsAntistasi,ControlMap:PatnaControlAntistasi,Finished:true},{Map:BlachiaSouth,Roster:BlachiaSouthRoster,Constants:BlachiaSouthConstants,Finished:true},{Map:SouthReginate,Roster:SouthReginateRoster,Constants:SouthReginateConstants,Localization:SouthReginateLocalization, BiomeMap:BorealMap10X10,Finished:false}],
		[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}],
		[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}]],
	[	[{Map:ToraToraTora,Roster:ToraToraToraRoster,Constants:ToraToraToraConstants,Finished:true},{Map:NorthCoast,Roster:NorthCoastRoster,Constants:NorthCoastConstants,Finished:true},{Map:Moh,Roster:MohRoster,ControlMap:MohControl,Constants:MohConstants2,Finished:true},{Map:Moh2,Roster:Moh2Roster,ControlMap:Moh2Control,Constants:Moh2Constants,Finished:true},{Map:Golubuju,Roster:GolubujuRoster,Constants:GolubujuConstants,Finished:true}],
		[{Map:SvelgianSea,Roster:SvelgianSeaRoster,Constants:SvelgianSeaConstants,Finished:true},{Map:SvelgeCoast,Roster:SvelgeCoastRoster,Constants:SvelgeCoastConstantsAlter, BiomeMap:BorealMap10X10,Finished:true},{Map:JarviCoast,Roster:JarviCoastRoster,Constants:JarviCoastConstants, BiomeMap:JarviBiomeMap,Finished:true},{Map:SvelgeInlands,Roster:SvelgeInlandsRoster,Constants:SvelgeInlandsConstants,ControlMap:SvelgeInlandsControl, BiomeMap:BorealMap10X10,Finished:true},{Map:SvelgeInlands,Roster:SvelgeInlandsRoster2,Constants:SvelgeInlandsConstants2,ControlMap:SvelgeInlandsControl2, BiomeMap:BorealMap10X10,Finished:true}],
		[{Map:Moh2,ControlMap:Moh2Control2,Constants:Moh2ConstantsAir,Roster:Moh2RosterAir,Finished:true},{Map:Moh2,ControlMap:Moh2Control2,Constants:Moh2Constants2,Roster:Moh2Roster2,Finished:true},{Map:HevanSea,Constants:HevanSeaConstants2,Roster:HevanSeaRoster2,Finished:true},{Map:SvelgeCoast,Constants:SvelgeCoastConstants3,Roster:SvelgeCoastRoster3, BiomeMap:BorealMap10X10,Finished:true},{Map:NorthCoast,Roster:NorthCoastRoster2,Constants:NorthCoastConstants2Para,Finished:false}],
		[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}],
		[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}]],
	[	[{Map:Mica,Roster:MicaRoster,Constants:MicaConstants,Finished:true},{Map:Kandahar,Roster:KandaharRoster,Constants:KandaharConstants,Finished:true},{Map:Shahar,Roster:ShaharRoster,Constants:ShaharConstants,Finished:true},{Map:Sassafras,Roster:SassafrasRoster,Constants:SassafrasConstants,Finished:true},{Map:Mica2,Roster:Mica2Roster,Constants:Mica2Constants,Finished:true}],
		[{Map:Mica2,Roster:Mica2Roster2,Constants:Mica2Constants,Finished:true},{Map:JyllaCoast,Roster:JyllaCoastRoster,Constants:JyllaCoastConstantsPara, BiomeMap:BorealMap10X10,Finished:true},{Map:SouthDacia,Roster:SouthDaciaRoster,Constants:SouthDaciaConstants,Finished:true},{Map:JyllaCoast,Roster:JyllaCoastRoster3,Constants:JyllaCoastConstants3, BiomeMap:BorealMap10X10,Finished:true},{Map:JyllaCoast,Roster:JyllaCoastRoster4,Constants:JyllaCoastConstants4, BiomeMap:BorealMap10X10,Finished:true},],
		[{Map:SouthDacia,Roster:SouthDaciaRoster2,Constants:SouthDaciaConstants2,Finished:true},{Map:Kandahar,Roster:KandaharRoster2,Constants:KandaharConstants2,Finished:true},{Map:JyllaCoast,Roster:JyllaCoastRoster5,Constants:JyllaCoastConstants5, BiomeMap:BorealMap10X10,Finished:true},{Map:ElamGulf,Constants:ElamGulfConstantsAlter,Roster:ElamGulfRoster,Finished:true},{Map:ShaharExtended,Roster:ShaharExtendedRoster,Constants:ShaharExtendedConstants,Finished:false}],
		[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}],
		[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}]],
	
	[	[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}],
		[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}]],
	[	[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}],
		[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}]],
	[	[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}],
		[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}]],
	[	[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}],
		[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}]],
	[	[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}],
		[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}]],
	[[{Finished:false},{Finished:false},{Finished:false},{Finished:false},{Finished:false}]],
];
Units=CampaignUnits;
Factions=CampaignFactions;
Terrain=CampaignTerrain;
TNOFactions=[
	{name:"Null", faction:"Idk, man. Neutrals maybe?", color:"ShitBrown"},
	{name:"West Russian Revolutionary Front", faction:"SocIntern", color:"Red", ChromaCode:""},
	{name:"Russian Liberation Army", faction:"Vlasovtsy", color:"Dark Grey", ChromaCode:""},
	{name:"Principality of Vyatka", faction:"Kirilovtsy", color:"Yellow", ChromaCode:""},
	{name:"Trans-Ural Confederation", faction:"Neutral", color:"Silver", ChromaCode:""},
	{name:"Ural Military District", faction:"Democratic League", color:"Blue", ChromaCode:""},
	{name:"Russian National Reclamation Front", faction:"Black League", color:"Black", ChromaCode:""},
	{name:"Republic of Tomsk", faction:"Yuvachovtsy", color:"Purple", ChromaCode:""},
	{name:"Republic of Novosibirsk", faction:"Democratic League", color:"Green", ChromaCode:""},
	{name:"Siberian Black Army", faction:"Anarkhia Mama", color:"Brown", ChromaCode:""},
	{name:"Sablin", faction:"SocIntern", color:"Orange", ChromaCode:""},
	{name:"Russian Republic of Magadan", faction:"Matkovtsy", color:"Grey", ChromaCode:""},
	{name:"Divine Mandate of Siberia", faction:"DEUS VULT!", color:"White", ChromaCode:""},
	{name:"Kazembek's Secret Lair in Yurlinsky", faction:"HARDCORE", color:"Dark Blue", ChromaCode:""}];

	//Fuck Dragnea
MemeFactions=[];

window.addEventListener("mousedown", () => battalion.musicPlayer.playTrack(OPENING_TRACK), { once: true });

window.addEventListener('keydown',(event) => {
	if(event.key=="f" && FieldMode!="MapEditor"){ToggleBattleflags()};
	//if(event.key=="g" && FieldMode!="MapEditor"){ToggleMoraleBadges()};
	//if(event.key=="h" && FieldMode!="MapEditor"){ToggleHealthBars()};
	if(event.key=="|"){DisplayRegions()};
	if(event.key=="="){document.getElementById("TileContainer").style.scale="10%";document.getElementById("TileContainer").style.overflow="visible";document.getElementById("TileContainer").style.top="-250px";document.getElementById("TileContainer").style.left="-700px";document.getElementById("TileContainer").style.zIndex="10"};
	//if(event.key=="l"){alert(LastMove.X+" "+LastMove.Y)};
	//if(event.key=="c"){alert('Press F to see which tiles need to be captured, which enemies assassinated and so on and so forth. Press F again to cancel');
	//alert('You can also press tab to see the region map mode, but that does not do much at the moment; it will glitch the entire level. Except Samara, it works for that map ')};
	if(event.key=="Shift" && FieldMode=="MapEditor"){TrackFillSwitch=true};

	/*
	if(event.key=="ArrowUp" || event.key=="w" || event.key=="W"){if(FieldMode=="MapEditor"){RollMapEditor(1)}else{RollMap(1);if(FlagsToggled){ToggleBattleflags();ToggleBattleflags()};if(BadgesToggled){ToggleMoraleBadges();ToggleMoraleBadges()};if(BarsToggled){ToggleHealthBars();ToggleHealthBars()};if(RegionsToggled){DisplayRegions();DisplayRegions()}}};
	if(event.key=="ArrowRight" || event.key=="d" || event.key=="D"){if(FieldMode=="MapEditor"){RollMapEditor(2)}else{RollMap(2);if(FlagsToggled){ToggleBattleflags();ToggleBattleflags()};if(BadgesToggled){ToggleMoraleBadges();ToggleMoraleBadges()};if(BarsToggled){ToggleHealthBars();ToggleHealthBars()};if(RegionsToggled){DisplayRegions();DisplayRegions()}}};
	if(event.key=="ArrowDown" || event.key=="s" || event.key=="S"){if(FieldMode=="MapEditor"){RollMapEditor(3)}else{RollMap(3);if(FlagsToggled){ToggleBattleflags();ToggleBattleflags()};if(BadgesToggled){ToggleMoraleBadges();ToggleMoraleBadges()};if(BarsToggled){ToggleHealthBars();ToggleHealthBars()};if(RegionsToggled){DisplayRegions();DisplayRegions()}}};
	if(event.key=="ArrowLeft" || event.key=="a" || event.key=="A"){if(FieldMode=="MapEditor"){RollMapEditor(4)}else{RollMap(4);if(FlagsToggled){ToggleBattleflags();ToggleBattleflags()};if(BadgesToggled){ToggleMoraleBadges();ToggleMoraleBadges()};if(BarsToggled){ToggleHealthBars();ToggleHealthBars()};if(RegionsToggled){DisplayRegions();DisplayRegions()}}};
	*/

	let keyArray=[false,false,false,false];
	/*
	//This code block is considered obsolete, replaced by a code block that is equally useless
	if(event.key=="ArrowUp" || event.key=="w" || event.key=="W"){document.getElementById('RegionMap').scrollBy(0,-280);document.getElementById('regionMap').scrollBy(0,-280);if(FieldMode=="MapEditor"){RollMapEditor(1)}else{document.getElementById('TopScrollBar').click()}};
	if(event.key=="ArrowRight" || event.key=="d" || event.key=="D"){document.getElementById('RegionMap').scrollBy(280,0);document.getElementById('regionMap').scrollBy(280,0);if(FieldMode=="MapEditor"){RollMapEditor(2)}else{document.getElementById('RightScrollBar').click()}};
	if(event.key=="ArrowDown" || event.key=="s" || event.key=="S"){document.getElementById('RegionMap').scrollBy(0,280);document.getElementById('regionMap').scrollBy(0,280);if(FieldMode=="MapEditor"){RollMapEditor(3)}else{document.getElementById('BottomScrollBar').click()}};
	if(event.key=="ArrowLeft" || event.key=="a" || event.key=="A"){document.getElementById('RegionMap').scrollBy(-280,0);document.getElementById('regionMap').scrollBy(-280,0);if(FieldMode=="MapEditor"){RollMapEditor(4)}else{document.getElementById('LeftScrollBar').click()}};*/


	if(event.key=="ArrowUp" || event.key=="w" || event.key=="W"){keyArray[0]=true};
	if(event.key=="ArrowRight" || event.key=="d" || event.key=="D"){keyArray[1]=true};
	if(event.key=="ArrowDown" || event.key=="s" || event.key=="S"){keyArray[2]=true};
	if(event.key=="ArrowLeft" || event.key=="a" || event.key=="A"){keyArray[3]=true};
	//console.log(keyArray);
	//if(keyArray[1]&&keyArray[2]){document.getElementById('RegionMap').scrollBy(280,280);document.getElementById('regionMap').scrollBy(280,280);if(FieldMode=="MapEditor"){RollMapEditor(2)}else{document.getElementById('RightScrollBar').click();document.getElementById('BottomScrollBar').click()}};
	if(keyArray[0]){document.getElementById('RegionMap').scrollBy(0,-280);document.getElementById('regionMap').scrollBy(0,-280);if(FieldMode=="MapEditor"){RollMapEditor(1)}else{document.getElementById('TopScrollBar').click()}};
	if(keyArray[1]){document.getElementById('RegionMap').scrollBy(280,0);document.getElementById('regionMap').scrollBy(280,0);if(FieldMode=="MapEditor"){RollMapEditor(2)}else{document.getElementById('RightScrollBar').click()}};
	if(keyArray[2]){document.getElementById('RegionMap').scrollBy(0,280);document.getElementById('regionMap').scrollBy(0,280);if(FieldMode=="MapEditor"){RollMapEditor(3)}else{document.getElementById('BottomScrollBar').click()}};
	if(keyArray[3]){document.getElementById('RegionMap').scrollBy(-280,0);document.getElementById('regionMap').scrollBy(-280,0);if(FieldMode=="MapEditor"){RollMapEditor(4)}else{document.getElementById('LeftScrollBar').click()}};

	});
window.addEventListener('keyup',(event) => {

	if(event.key=="Shift" && FieldMode=="MapEditor"){TrackFillSwitch=false};
	});


//Useful note:
//Z-Index 0 is for divs with no specific priority
//Z-Index 1 is for the tile slots
//Z-Index 2 is for the tile aspects themselves
//Z-Index 2.5 is for edges/accessories
//Z-Index 3 is for units
//Z-index 4 is for blep/ctep
//Z-index 5 is for spep

//EDIT: Fuck the note, I didn't follow it anyways :P
//EDIT to EDIT: Fuck me, there was an annoying bug because I didn't follow it.
//Note to self: Wine really helps write more code 8)

function AddRegionalNode(){
	let X=parseInt(document.getElementById("RegionNodeX").value);
	let Y=parseInt(document.getElementById("RegionNodeY").value);
	let Owner=document.getElementById("RegionNodeOwner").value;
	let Capitol=document.getElementById("RegionNodeCapitol").value;
	let Region=document.getElementById("RegionNodeName").value;
	//document.getElementById("regional Tile "+X+" "+Y).style.background=Factions[Owner].color;
	document.getElementById("regional Color "+X+" "+Y).style.background=Factions[Owner].color;
	document.getElementById("regional Nexus "+X+" "+Y).style.visibility='inherit';
	document.getElementById("regional Name "+X+" "+Y).innerHTML=Region;
	document.getElementById("regional Name "+X+" "+Y).style.visibility='inherit';
	document.getElementById("regional Capital "+X+" "+Y).innerHTML=Capitol;
	document.getElementById("regional Capital "+X+" "+Y).style.visibility='inherit';
	//alert((Y+EditorStandardX)+" "+(X+EditorStandardY));
	let adr=EditorMap[Y+EditorStandardX][X+EditorStandardY];
	if(adr==13 || adr==14 || adr==30){CapitolNodeRegistry[Y+EditorStandardX][X+EditorStandardY]={Owner:Owner,Capitol:Capitol,CapitolX:X+EditorStandardY,CapitolY:Y+EditorStandardX,Name:Region};};};
function AI_Act(i){
	let InternalDelayerFactor=0;
	ActionRegister={Movement:0,Attack:0,Counter:0,Liquidate:0};
	//console.log(i);

	//let Funds=Constants.Funds[];
	//alert(Funds);
	

	//console.log(GlobalDelayerConstant);
	
	//console.log(i+"|"+MAXI);
	if(i<MAXI){
		//alert(Units[ActiveRoster[i].unitType].Cost/2);
		
			//alert(Constants.Funds[AttackOrder[(Turn-1)%SubRosters.length]]);
		if(Funds>Units[ActiveRoster[i].unitType].Cost/2 && ActiveRoster[i].life/Units[ActiveRoster[i].unitType].HP<0.2*Difficulty){let randomizer=Math.ceil(Math.random()*10);
			if(randomizer<=Difficulty*3+1){ActiveRoster[i].life=Units[ActiveRoster[i].unitType].HP;Funds-=Math.round(Units[ActiveRoster[i].unitType].Cost/2);
			Constants.Funds[AttackOrder[(Turn-1)%SubRosters.length]]=Funds};
			};
		//setTimeout(AI_Scouter, 100*i, ActiveRoster[i], Map);
		AI_Scouter(ActiveRoster[i], Map);
		//function RemainingAct(){
		InternalDelayerFactor+=200;
		if(ActionRegister.Movement!=0){setTimeout(MoveUnit,InternalDelayerFactor,ActiveRoster[i].index,ActionRegister.Movement);InternalDelayerFactor+=800};
		if(ActionRegister.Attack!=0 && ActionRegister.Movement==0){setTimeout(Attack,InternalDelayerFactor,ActiveRoster[i].index,ActionRegister.Attack);
			InternalDelayerFactor+=400;
			AttackEstimate(ActiveRoster[i].index,ActionRegister.Attack)};
		if(ActionRegister.Attack!=0 && ActionRegister.Movement!=0){setTimeout(Attack,InternalDelayerFactor+400,ActiveRoster[i].index,ActionRegister.Attack);
			InternalDelayerFactor+=400;
			AttackEstimate(ActiveRoster[i].index,ActionRegister.Attack)};

		if(ActionRegister.Counter!=0 || ActionRegister.Liquidate!=0){InternalDelayerFactor+=1000};
		
		//setTimeout(RemainingAct,0);

		//console.log(InternalDelayerFactor);
		GlobalDelayerConstant=InternalDelayerFactor;

		setTimeout(AI_Act,InternalDelayerFactor+100,i+1)};
	if(i==MAXI){
		//console.log(i+"|"+MAXI);
		//console.log(Turn+"|"+SubRosters.length);
		setTimeout(EndTurn,GlobalDelayerConstant,SubRosters,Map,Constants,Roster);
		if((Turn)%SubRosters.length==1){
			function DeactivateAIMarker(){document.getElementById('AITurnIndicator').style.visibility='hidden'; isAITurn=false;};
			setTimeout(DeactivateAIMarker,GlobalDelayerConstant);
			//setTimeout(EndTurn,GlobalDelayerConstant,SubRosters,Map,Constants,Roster);
			//DeactvateAIMarker();
		}};
	};
function AI_Scouter(Unit,Map){
	//Prerequisites
	var Speed=Unit.speed;
	var Type=Unit.movementType;
	var Faction=Unit.faction;
	var Coallition=Unit.coallition;
	var Lat=Unit.x;
	var Long=Unit.y;
	var SPD=Unit.speed;
	var X=Lat;
	var Y=Long;
	let unitIndex=Unit.index;
	Path=[1];
	Pizdamatii=[];
	MapClone=JSON.parse(JSON.stringify(Map));
	//alert(Map[0][0]);
	let mapWidth=Map[0].length;
	let mapHeight=Map.length;
	var Stepmap=JSON.parse(JSON.stringify(Map));
	var Targetmap=JSON.parse(JSON.stringify(Map));

	//Here it pans the camera
	PanX=Math.min(Math.max(X-5,0),Map.length)*56;
	PanY=Math.min(Math.max(Y-5,0),Map[0].length)*56;
	//console.log(PanX+" "+PanY);
	//console.log(document.getElementById("UnitMap").style.overflowX+" "+document.getElementById("UnitMap").style.overflowY);
	//let cmx=document.getElementById("UnitMap").scrollX;
	//let cmy=document.getElementById("UnitMap").style.offsetY;
	//alert(cmx);
	//document.getElementById("UnitMap").scrollBy(-Map.length*56,-Map[0].length*56+PanX);
	//document.getElementById("UnitMap").scrollBy(PanY,PanX);
	document.getElementById("UnitMap").scroll(PanY,PanX);
	

	
	//Here lies the switch to get the stepmap.	
	switch(Type){
		case "Foot":
		for(let P=0;P<mapHeight;P++){for(Q=0;Q<mapWidth;Q++){Stepmap[P][Q]=Terrain[MapClone[P][Q]].WalkThrough;}};
		break;

		case "Wheeled":
		for(let P=0;P<mapHeight;P++){for(Q=0;Q<mapWidth;Q++){Stepmap[P][Q]=Terrain[MapClone[P][Q]].DriveThrough}};
		break;

		case "Tracked":
		for(let P=0;P<mapHeight;P++){for(Q=0;Q<mapWidth;Q++){Stepmap[P][Q]=Terrain[MapClone[P][Q]].RollThrough}};
		break;

		case "Amphibious":
		for(let P=0;P<mapHeight;P++){for(Q=0;Q<mapWidth;Q++){Stepmap[P][Q]=Terrain[MapClone[P][Q]].WadeThrough}};
		break;

		case "Flight":
		for(let P=0;P<mapHeight;P++){for(Q=0;Q<mapWidth;Q++){Stepmap[P][Q]=Terrain[MapClone[P][Q]].FlyThrough}};
		break;

		case "Rudder":
		for(let P=0;P<mapHeight;P++){for(Q=0;Q<mapWidth;Q++){Stepmap[P][Q]=Terrain[MapClone[P][Q]].SailThrough}};
		break;

		case "Heavy Rudder":
		for(let P=0;P<mapHeight;P++){for(Q=0;Q<mapWidth;Q++){Stepmap[P][Q]=Terrain[MapClone[P][Q]].DeepSailThrough}};
		break;

		};
		

	//Standard-Issue Pathing Loop
	while(Path.length>0){
			CollisionCheck=false;
			let x=(Path[Path.length-1]-2)*(Path[Path.length-1])%2;
			let y=(3-Path[Path.length-1])*(Path[Path.length-1]-1)%2;

		if(X+x<0 || Y+y<0){Path[Path.length-1]+=1};
		if(X+x>=Map.length || Y+y>=Map[0].length){Path[Path.length-1]++;};
		if(X+x<Map.length && X+x>=0 && Y+y<Map[0].length && Y+y>=0){
		if(rostermap[X+x][Y+y].coallition!=Coallition && rostermap[X+x][Y+y]!=0){CollisionCheck=true};};

	//The block that checks whether advancing is possible and advances


		if(SPD>0 && Path[Path.length-1]<5 && X+x<Map.length && Y+y<Map[0].length){
			let x=(Path[Path.length-1]-2)*(Path[Path.length-1])%2;
			let y=(3-Path[Path.length-1])*(Path[Path.length-1]-1)%2;

			//alert(Stepmap[X][Y]);
			if(SPD>=Stepmap[X+x][Y+y] && CollisionCheck==false){
			X=X+x;
			Y=Y+y;
			//alert(Path);
			Pizdamatii[Pizdamatii.length]={x:X,y:Y,z:[],F:0};
			Path[Path.length]=1;
			for(let p=0;p<Path.length;p++){
				Pizdamatii[Pizdamatii.length-1].z[p]=Path[p];
				if(p>0){if(Path[p]%2==Path[p-1]%2 && Path[p]!=Path[p-1]){Pizdamatii[Pizdamatii.length-1].F-=10}};
				//MedianUnit as defined here shall be purged once a proper equation has been established from the outside
				//MedianUnit={X:0,Y:0}; 
				//if(MedianUnit??0==0){MedianUnit={X:0,Y:0}};	
				};
				let XDev=Math.min(MedianUnit.X-X, X-MedianUnit.X);
				let YDev=Math.min(MedianUnit.Y-Y, Y-MedianUnit.Y);
				Pizdamatii[Pizdamatii.length-1].F+=XDev;
				Pizdamatii[Pizdamatii.length-1].F+=YDev;
				if(Difficulty>1 && TileFlagMap[Pizdamatii[Pizdamatii.length-1].x][Pizdamatii[Pizdamatii.length-1].y]>1){Pizdamatii[Pizdamatii.length-1].F+=100};
				Pizdamatii[Pizdamatii.length-1].F+=5*Pizdamatii[Pizdamatii.length-1].z.length;
			//Pizdamatii[Pizdamatii.length-1].z=Path;
			
			SPD=SPD-Stepmap[X][Y];}else{Path[Path.length-1]+=1;};
			}
	//The block that checks if backtracking is needed and does so

		else if(SPD==0 || Path[Path.length-1]>=5){
			//alert(Path[Path.length-1]);
			if(Path.length>=2){reverse=Path[Path.length-2];}else{break;};
			SPD=SPD+Stepmap[X][Y];

			X=X-(reverse-2)*(reverse%2);
			Y=Y-(3-reverse)*(reverse-1)%2;

			

			Path.length-=1;
			Path[Path.length-1]+=1;

			
			}
			//else if(Path[Path.length-1]>=5){alert("Please don't fuck up the script")};
		//alert("Path length: "+Path.length+ "; SPD= "+SPD+ "; X= "+X+"; Y= "+Y+"; direction: "+Path[Path.length-1]+" Path: "+Path+ "CollChek: "+ CollisionCheck);
		
		};
	AddressMap=[];
	AddressMapLine=[];
	for(let i=0;i<Map[0].length;i++){AddressMapLine[AddressMapLine.length]=0};
	for(let j=0;j<Map.length;j++){AddressMap[AddressMap.length]=AddressMapLine};
	Thing=JSON.parse(JSON.stringify(AddressMap));
	//AddressMap=[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];
	
	TargetList=[];


	//This does the ctep pathing

	//alert(Pizdamatii[Pizdamatii.length-1].x);

	for(let h=0;h<Pizdamatii.length;h++){
		
		Thing[Pizdamatii[h].x][Pizdamatii[h].y]=0;
		
		if(Thing[Pizdamatii[h].x][Pizdamatii[h].y]==1000){
			pathway=Pizdamatii[h].z.pop;
			alt=AddressMap[Pizdamatii[h].x][Pizdamatii[h].y];
			if(alt!=0 && alt.length<pathway.length){pathway=alt;};
			AddressMap[Pizdamatii[h].x][Pizdamatii[h].y]=pathway;


			//if(Pizdamatii[h].x>0){if(rostermap[Pizdamatii[h].x-1][Pizdamatii[h].y]!=0){TargetList[TargetList.length]=pathway}};
			//if(Pizdamatii[h].x<Map.length-1){if(rostermap[Pizdamatii[h].x+1][Pizdamatii[h].y]!=0){TargetList[TargetList.length]=pathway}};
			//if(Pizdamatii[h].y>0){if(rostermap[Pizdamatii[h].x][Pizdamatii[h].y-1]!=0){TargetList[TargetList.length]=pathway}};
			//if(Pizdamatii[h].y<Map.length[0]-1){if(rostermap[Pizdamatii[h].x][Pizdamatii[h].y+1]!=0){TargetList[TargetList.length]=pathway}};
		//if(rostermap[Pizdamatii[h].x][Pizdamatii[h].y]!=0){TargetList[TargetList.length]=pathway};

		};};
		//alert(TargetList[0]);
		//alert(X+" "+Y);

		if(Units[Unit.unitType].MaxRange==1){attackType="Contact"}else{attackType="Ranged"};
		//alert(attackType);



	if(attackType=="Contact"){


		for(let h=0;h<Pizdamatii.length;h++){
			let pathway=Pizdamatii[h].z;
			pathway.pop();
			let valableTarget=false;

			if(Pizdamatii[h].x>0){if(rostermap[Pizdamatii[h].x-1][Pizdamatii[h].y]!=0){//TargetList[TargetList.length]=pathway;
				//alert(rostermap[Pizdamatii[h].x-1][Pizdamatii[h].y].x + " " + rostermap[Pizdamatii[h].x-1][Pizdamatii[h].y].y + " " + pathway);
				if(rostermap[Pizdamatii[h].x-1][Pizdamatii[h].y].coallition!=Coallition){valableTarget=true;};
			}};
			if(Pizdamatii[h].x<Map.length-1){if(rostermap[Pizdamatii[h].x+1][Pizdamatii[h].y]!=0){//TargetList[TargetList.length]=pathway;
				if(rostermap[Pizdamatii[h].x+1][Pizdamatii[h].y].coallition!=Coallition){valableTarget=true;};
			}};
			if(Pizdamatii[h].y>0){if(rostermap[Pizdamatii[h].x][Pizdamatii[h].y-1]!=0){//TargetList[TargetList.length]=pathway;
				if(rostermap[Pizdamatii[h].x][Pizdamatii[h].y-1].coallition!=Coallition){valableTarget=true;};
			}};
			if(Pizdamatii[h].y<Map.length[0]-1){if(rostermap[Pizdamatii[h].x][Pizdamatii[h].y+1]!=0){//TargetList[TargetList.length]=pathway;
				if(rostermap[Pizdamatii[h].x][Pizdamatii[h].y+1].coallition!=Coallition){valableTarget=true;};
			}};

			//alert(X + " " + Y);
			if(Pizdamatii[h].x == X && Pizdamatii[h].y == Y){valableTarget=false;};
			//if(rostermap[Pizdamatii[h].x][Pizdamatii[h].y]!=0){
				//alert(Pizdamatii[h].x +" "+Pizdamatii[h].y);
			//};
			if(valableTarget){TargetList[TargetList.length]=pathway;};


		};
		//alert(TargetList[0]);

		ContactTargetList=[];



		for(let mu=0;mu<TargetList.length;mu++){
		let OX=X;
		let OY=Y;
		let ics=JSON.parse(JSON.stringify(X));
		let igrec=JSON.parse(JSON.stringify(Y));
		//alert(ics+" "+igrec);
			for(let nu=0;nu<TargetList[mu].length;nu++){
		if(TargetList[mu][nu]==1){ics-=1};
		if(TargetList[mu][nu]==2){igrec+=1};
		if(TargetList[mu][nu]==3){ics+=1};
		if(TargetList[mu][nu]==4){igrec-=1};
		//alert(MapClone[ics][igrec]);
		//if(MapClone[ics][igrec]>SPD){alert("River")};
		//alert(ics+" "+igrec);
		};

		
		if(ics>0){if(rostermap[ics-1][igrec].coallition!=Coallition){ContactTargetList[ContactTargetList.length]={path:TargetList[mu],X:ics,Y:igrec,TX:-1,TY:0,F:0};}};
		if(ics<Map.length-1){if(rostermap[ics+1][igrec].coallition!=Coallition){ContactTargetList[ContactTargetList.length]={path:TargetList[mu],X:ics,Y:igrec,TX:1,TY:0,F:0};}};
		if(igrec>0){if(rostermap[ics][igrec-1].coallition!=Coallition){ContactTargetList[ContactTargetList.length]={path:TargetList[mu],X:ics,Y:igrec,TX:0,TY:-1,F:0};}};
		if(igrec<Map[0].length-1){if(rostermap[ics][igrec+1].coallition!=Coallition){ContactTargetList[ContactTargetList.length]={path:TargetList[mu],X:ics,Y:igrec,TX:0,TY:1,F:0};}};
		//while((ContactTargetList[ContactTargetList.length-1].X+ContactTargetList[ContactTargetList.length-1].TX == OX) && (ContactTargetList[ContactTargetList.length-1].Y+ContactTargetList[ContactTargetList.length-1].TY == OY)){ContactTargetList.pop()};

		};

		if(X>0){if(rostermap[X-1][Y]!=0){if(rostermap[X-1][Y].coallition!=Coallition){ContactTargetList[ContactTargetList.length]={path:[],X:X,Y:Y,TX:-1,TY:0,F:0}}}};
		if(X<Map.length-1){if(rostermap[X+1][Y]!=0){if(rostermap[X+1][Y].coallition!=Coallition){ContactTargetList[ContactTargetList.length]={path:[],X:X,Y:Y,TX:1,TY:0,F:0}}}};
		if(Y>0){if(rostermap[X][Y-1]!=0){if(rostermap[X][Y-1].coallition!=Coallition){ContactTargetList[ContactTargetList.length]={path:[],X:X,Y:Y,TX:0,TY:-1,F:0}}}};
		if(Y<Map[0].length-1){if(rostermap[X][Y+1]!=0){if(rostermap[X][Y+1].coallition!=Coallition){ContactTargetList[ContactTargetList.length]={path:[],X:X,Y:Y,TX:0,TY:1,F:0}}}};

		BackupTargetList=[];
		//if(X>0){if(rostermap[X-1][Y]!=0 && rostermap[X-1][Y].coallition!=Coallition){BackupTargetList[BackupTargetList.length]={path:[],X:X,Y:Y,TX:-1,TY:0}}};
		//if(X<Map.length-1){if(rostermap[X+1][Y]!=0 && rostermap[X+1][Y].coallition!=Coallition){BackupTargetList[BackupTargetList.length]={path:[],X:X,Y:Y,TX:1,TY:0}}};
		//if(Y>0){if(rostermap[X][Y-1]!=0 && rostermap[X][Y-1].coallition!=Coallition){BackupTargetList[BackupTargetList.length]={path:[],X:X,Y:Y,TX:0,TY:-1}}};
		//if(Y<Map[0].length-1){if(rostermap[X][Y+1]!=0 && rostermap[X][Y+1].coallition!=Coallition){BackupTargetList[BackupTargetList.length]={path:[],X:X,Y:Y,TX:0,TY:1}}};



		for(let h=0;h<ContactTargetList.length;h++){
			//alert(ContactTargetList[h].path);
			let CUS=ContactTargetList[h];
			let CanAttack=true;
			let TargetChecker=rostermap[CUS.X+CUS.TX][CUS.Y+CUS.TY];
			//alert(hasCertainTrait(Unit.unitType,"Skysweeper"));
			//alert(TargetChecker);
			//if(hasCertainTrait(Unit.unitType,"Seabound") && TargetChecker.movementType!="Rudder" && TargetChecker.movementType!="Heavy Rudder"){CanAttack=false};
			if(!hasCertainTrait(Unit.unitType,"Skysweeper") && TargetChecker.movementType=="Flight"){CanAttack=false};
			if(!hasCertainTrait(Unit.unitType,"Depth Strike") && hasCertainTrait(TargetChecker.unitType??1,"Submerged")){CanAttack=false};
			//alert(CanAttack);
			//alert(TargetChecker+" "+CanAttack);
			/*
			let ix=Lat; let iy=Long;
			for(let i=0; i<CUS.path.length-1;i++){let crk=CUS.path[i];
				if(crk==1){iy-=1};
				if(crk==2){ix+=1};
				if(crk==3){iy+=1};
				if(crk==4){ix-=1};
				//if(rostermap[iy][ix]!=0){CanAttack=false};
				};*/




			//This is where we calculate attack priority indices
			//ContactTargetList[h].F=0;
			//let Atk=rostermap[ContactTargetList[h].X][ContactTargetList[h].Y];
			let Atk=rostermap[Unit.x][Unit.y];
			//console.log(ContactTargetList[h].X+" "+ContactTargetList[h].Y + " "+rostermap[2][9]+Atk);
			//console.log(ContactTargetList[h].X+"|"+ContactTargetList[h].Y);
			//if(ContactTargetList[h].X==6 && ContactTargetList[h].Y==7){console.log("null")};
			let Def=rostermap[ContactTargetList[h].X+ContactTargetList[h].TX][ContactTargetList[h].Y+ContactTargetList[h].TY];
				//console.log(Atk+" "+Def);

			if(Atk!=0 && Def!=0 && Difficulty>1){
				//console.log(Atk+" "+Def);

				let Riposte=true;
				let Intercept=false;
				let Dmg=Atk.damage;
				let TargetTerrain=Map[ContactTargetList[h].X+ContactTargetList[h].TX][ContactTargetList[h].Y+ContactTargetList[h].TY];
				Dmg*=Terrain[TargetTerrain].protectionFactor;
				if(Terrain[TargetTerrain].protectionFactor<1 && hasCertainTrait(Atk.unitType,"Commando")){Dmg*=1.25};
				Dmg*=BiomeRegistry[BiomeMap[ContactTargetList[h].X][ContactTargetList[h].Y]].LogisticIndex;
				if(!hasCertainTrait(Atk.unitType,"Indomitable")){Dmg*=Atk.life/Units[Atk.unitType].HP};
				if(Atk.damageType==Def.armor && Atk.damageType!="Medium"){Dmg*=1.5};
				if(Atk.damageType=="Light"&&Def.armor=="Heavy"){Dmg*=0.5};
				if(Atk.damageType=="Heavy"&&Def.armor=="Light"){Dmg*=0.5};
				if(Def.movementType=="Foot"&&hasCertainTrait(Atk.unitType,"Anti-Infantry")){Dmg*=3};
				if((Def.movementType=="Foot" || Def.unitType<12)&&hasCertainTrait(Atk.unitType,"Schwerpunkt")){Dmg*=1.4};
				if(Def.movementType=="Flight"&&hasCertainTrait(Atk.unitType,"Anti-Air")){Dmg*=3};
				if(Def.movementType=="Rudder"&&hasCertainTrait(Atk.unitType,"Anti-Ship")){Dmg*=3};
				if(Def.movementType=="Heavy Rudder"&&hasCertainTrait(Atk.unitType,"Anti-Ship")){Dmg*=3};
				if(Def.movementType=="Static"&&hasCertainTrait(Atk.unitType,"Anti-Structure")){Dmg*=2};
				if(Def.movementType=="Tracked"&&hasCertainTrait(Atk.unitType,"Anti-Tank")&&!hasCertainTrait(Def.unitType,"Anti-Tank")&&!hasCertainTrait(Atk.unitType,"Tank-Hunter")){Riposte=false};
				if(hasCertainTrait(Atk.unitType,"Mobile Battery")&&Def.maxR>1&&!hasCertainTrait(Def.unitType,"Mobile Battery")){Riposte=false};
				if(hasCertainTrait(Atk.unitType,"Submerged")&&!hasCertainTrait(Def.unitType,"Depth Charge")){Riposte=false};
				if(Atk.movementType=="Flight"&&!hasCertainTrait(Def.unitType,"Skysweeper")){Riposte=false};
				if(hasCertainTrait(Def.unitType,"Seabound")&&Atk.movementType!="Rudder"&&Atk.movementType!="Heavy Rudder"){Riposte=false};
				if(hasCertainTrait(Def.unitType,"Steer")&&(Atk.movementType=="Rudder" || Atk.movementType=="Heavy Rudder")){Dmg*=Math.min(1,Math.max(0.4,Atk.speed-Atk.speed))};
				if(hasCertainTrait(Def.unitType,"Tank-Hunter")&&!hasCertainTrait(Atk.unitType,"Tank-Hunter")&&Atk.movementType=="Tracked"){Intercept=true};
				if(hasCertainTrait(Atk.unitType,"Submerged")&&hasCertainTrait(Def.unitType,"Sonar")){Intercept=true};
				if(hasCertainTrait(Atk.unitType,"Stealth")){Dmg*=2};
				if(hasCertainTrait(Atk.unitType,"Supply Distribution")){Dmg*=-1};
				if(hasCertainTrait(Atk.unitType,"Bewegungskrieg")){Dmg*=1};//Bewegungskrieg not yet considered
				Dmg*=Math.min(2,Math.max(0.2,1+Atk.morale/5));
				if(hasCertainTrait(Def.unitType,"Cemented Steel Armor")&&!hasCertainTrait(Atk.unitType,"Cavitation Explosion")){Dmg=Math.max(0,Dmg-20)};
				if(Dmg>Def.life){Riposte=false};

				if(Riposte){let Ctk=Def.damage;
				if(!hasCertainTrait(Def.unitType,"Indomitable")){Ctk*=Def.life/Units[Def.unitType].HP};
					Ctk*=Terrain[(Map[X][Y]??1)].protectionFactor??1;
					//console.log(X);
					Ctk*=BiomeRegistry[(BiomeMap[Math.max(0,X)][Math.max(0,Y)]??1)].logisticIndex??1;
					if(Terrain[Map[X][Y]].protectionFactor<1 && hasCertainTrait(Def.unitType,"Commando")){Ctk*=1.25};
					if(hasCertainTrait(Atk.unitType,"Cemented Steel Armor") && !hasCertainTrait(Def.unitType,"Cavitation Explosion")){Ctk-=20};
					if(Atk.damageType==Atk.armor && Def.damageType!="Medium"){Ctk*=1.5};
					if(Atk.damageType=="Light"&&Def.armor=="Heavy"){Ctk*=0.5};
					if(Atk.damageType=="Heavy"&&Def.armor=="Light"){Ctk*=0.5};

					if(Atk.movementType=="Foot"&&hasCertainTrait(Def.unitType,"Anti-Infantry")){Ctk*=3};
					if(Atk.movementType=="Foot"&&hasCertainTrait(Def.unitType,"Schwerpunkt")){Ctk*=1.4};
					if(Atk.movementType=="Flight"&&hasCertainTrait(Def.unitType,"Anti-Air")){Ctk*=3};
					if(Atk.movementType=="Rudder"&&hasCertainTrait(Def.unitType,"Anti-Ship")){Ctk*=3};
					if(Atk.movementType=="Heavy Rudder"&&hasCertainTrait(Def.unitType,"Anti-Ship")){Ctk*=3};
					if(Atk.movementType=="Static"&&hasCertainTrait(Def.unitType,"Anti-Structure")){Ctk*=2};
					if(hasCertainTrait(Atk.unitType,"Steer")&&(Def.movementType=="Rudder" || Def.movementType=="Heavy Rudder")){Ctk*=Math.min(1,Math.max(0.4,Def.speed-Def.speed))};
					Ctk*=Math.min(2,Math.max(0.2,1+Def.morale/5));


				//console.log(Dmg+" "+Ctk/2);
				Dmg-=Ctk/2};


				//if(ContactTargetList[h].X==6 && ContactTargetList[h].Y==7){console.log("fuck")};


				ContactTargetList[h].F+=Dmg;
				//console.log(ContactTargetList[h].F);
				
				//console.log(ContactTargetList[h].X+"|"+ContactTargetList[h].Y+" "+ContactTargetList[h].TX+"|"+ContactTargetList[h].TY+" "+ContactTargetList[h].F);
				};

			
			//console.log(ContactTargetList[h].F);
			if(TargetChecker!=0 && CanAttack){BackupTargetList[BackupTargetList.length]=ContactTargetList[h]};
			};
			ContactTargetList=BackupTargetList;


			//if((ContactTargetList[h].X+ContactTargetList[h].TX != X) || (ContactTargetList[h].Y+ContactTargetList[h].TY != Y)){BackupTargetList[BackupTargetList.length]=ContactTargetList[h];}
	//alert(ContactTargetList[0]);
		//for(let h=0;h<ContactTargetList.length;h++){alert((ContactTargetList[h].X+ContactTargetList[h].TX)+" "+(ContactTargetList[h].Y+ContactTargetList[h].TY))};

			};	



	if(attackType=="Ranged"){
		//alert("Chuchu!");
		RangedTargetList=[];
		let OX=Math.max(X-10,0);
		let OY=Math.max(Y-10,0);
		let FX=Math.min(10,X+10);
		let FY=Math.min(10,Y+10);
		let RealRange=Units[Unit.unitType].MaxRange;
		let TerrainChecker=Terrain[Map[X][Y]];
		if(TerrainChecker.tag1=="Vantage" || TerrainChecker.tag2=="Vantage" || TerrainChecker.tag3=="Vantage" || TerrainChecker.tag4=="Vantage"){RealRange+=1};

		for(let ics=OX;ics<FX;ics++){for(let igrec=OY;igrec<FY;igrec++){
			CanAttack=true;
			distance=Math.sqrt((X-ics)*(X-ics)+(Y-igrec)*(Y-igrec));
			if(distance<=RealRange && distance>=Units[Unit.unitType].MinRange){
				//alert(ics+" "+igrec);
				let TargetChecker=rostermap[ics][igrec];
				//alert(TargetChecker.movementType);
			if(hasCertainTrait(Unit.unitType,"Seabound") && TargetChecker.movementType!="Rudder" && TargetChecker.movementType!="Heavy Rudder"){CanAttack=false};
			if(!hasCertainTrait(Unit.unitType,"Skysweeper") && TargetChecker.movementType=="Flight"){CanAttack=false};
			if(!hasCertainTrait(Unit.unitType,"Depth Strike") && hasCertainTrait(TargetChecker.unitType??1,"Submerged")){CanAttack=false};
				if(rostermap[ics][igrec]!=0 && rostermap[ics][igrec].coallition!=Coallition && CanAttack){
					//alert(rostermap[ics][igrec]);
					//alert(ics+" "+igrec);
					let Riposte=true;
					let Intercept=false;
					let Atk=rostermap[X][Y];
					let Def=rostermap[ics][igrec];
					let DMG=Atk.damage;
					DMG*=Terrain[Map[ics][igrec]].protectionFactor??1;
					DMG*=Terrain[Map[X][Y]].logisticFactor??1;
					if(Terrain[Map[ics][igrec]].protectionFactor<1 && hasCertainTrait(Atk.unitType,"Commando")){DMG*=1.25};
					if(!hasCertainTrait(Atk.unitType,"Indomitable")){DMG*=Atk.life/Units[Atk.unitType].HP};
					if(hasCertainTrait(Def.unitType,"Cemented Steel Armor") && !hasCertainTrait(Atk.unitType,"Cavitation Explosion")){DMG-=20};
					if(Atk.damageType==Def.armor && Atk.damageType!="Medium"){DMG*=1.5};
					if(Atk.damageType=="Light"&&Def.armor=="Heavy"){DMG*=0.5};
					if(Atk.damageType=="Heavy"&&Def.armor=="Light"){DMG*=0.5};

					if(Def.movementType=="Foot"&&hasCertainTrait(Atk.unitType,"Anti-Infantry")){DMG*=3};
					if(Def.movementType=="Foot"&&hasCertainTrait(Atk.unitType,"Schwerpunkt")){DMG*=1.4};
					if(Def.movementType=="Flight"&&hasCertainTrait(Atk.unitType,"Anti-Air")){DMG*=3};
					if(Def.movementType=="Rudder"&&hasCertainTrait(Atk.unitType,"Anti-Ship")){DMG*=3};
					if(Def.movementType=="Heavy Rudder"&&hasCertainTrait(Atk.unitType,"Anti-Ship")){DMG*=3};
					if(Def.movementType=="Static"&&hasCertainTrait(Atk.unitType,"Anti-Structure")){DMG*=2};
					if(Def.movementType=="Tracked"&&hasCertainTrait(Atk.unitType,"Anti-Tank")&&!hasCertainTrait(Def.unitType,"Anti-Tank")&&!hasCertainTrait(Atk.unitType,"Tank-Hunter")){Riposte=false};
				if(hasCertainTrait(Atk.unitType,"Mobile Battery")&&Def.maxR>1&&!hasCertainTrait(Def.unitType,"Mobile Battery")){Riposte=false};
				if(hasCertainTrait(Atk.unitType,"Submerged")&&!hasCertainTrait(Def.unitType,"Depth Charge")){Riposte=false};
				if(Atk.movementType=="Flight"&&!hasCertainTrait(Def.unitType,"Skysweeper")){Riposte=false};
				if(hasCertainTrait(Def.unitType,"Seabound")&&Atk.movementType!="Rudder"&&Atk.movementType!="Heavy Rudder"){Riposte=false};
				if(hasCertainTrait(Def.unitType,"Steer")&&(Atk.movementType=="Rudder" || Atk.movementType=="Heavy Rudder")){DMG*=Math.min(1,Math.max(0.4,Atk.speed-Atk.speed))};
				if(hasCertainTrait(Def.unitType,"Tank-Hunter")&&!hasCertainTrait(Atk.unitType,"Tank-Hunter")&&Atk.movementType=="Tracked"){Intercept=true};
				if(hasCertainTrait(Atk.unitType,"Submerged")&&hasCertainTrait(Def.unitType,"Sonar")){Intercept=true};
				if(hasCertainTrait(Atk.unitType,"Stealth")){DMG*=2};
				if(hasCertainTrait(Atk.unitType,"Supply Distribution")){DMG*=-1};
				if(hasCertainTrait(Def.unitType,"Supply Distribution")){Riposte=false};
				if(hasCertainTrait(Atk.unitType,"Bewegungskrieg")){DMG*=1};//Bewegungskrieg not yet considered
				DMG*=Math.min(2,Math.max(0.2,1+Atk.morale/5));
				if(hasCertainTrait(Atk.unitType,"Dispersion")){
					let targets=0;
					for(let x=Math.max(0,ics-2); x<Math.min(Map.length,ics+2);x++){for(let y=Math.max(0,igrec-2); y<Math.min(Map[0].length,igrec+2);y++){
						if((ics-x)*(ics-x)<=4 && (igrec-y)*(igrec-y)<=4 && rostermap[x][y]!=0){targets++};

						}};
						DMG*=targets;

					};
				//Do the same as Dispersion for Judgement, but with larger range

					
				if(DMG>Def.life){Riposte=false};

				if(Riposte){let Ctk=Def.damage;
				if(!hasCertainTrait(Def.unitType,"Indomitable")){Ctk*=Def.life/Units[Def.unitType].HP};
					Ctk*=Terrain[Map[X][Y]].protectionFactor??1;
					Ctk*=Terrain[Map[ics][igrec]].logisticFactor??1;
					if(Terrain[Map[X][Y]].protectionFactor<1 && hasCertainTrait(Def.unitType,"Commando")){Ctk*=1.25};
					if(hasCertainTrait(Atk.unitType,"Cemented Steel Armor") && !hasCertainTrait(Def.unitType,"Cavitation Explosion")){Ctk-=20};
					if(Atk.damageType==Atk.armor && Def.damageType!="Medium"){Ctk*=1.5};
					if(Atk.damageType=="Light"&&Def.armor=="Heavy"){Ctk*=0.5};
					if(Atk.damageType=="Heavy"&&Def.armor=="Light"){Ctk*=0.5};

					if(Atk.movementType=="Foot"&&hasCertainTrait(Def.unitType,"Anti-Infantry")){Ctk*=3};
					if(Atk.movementType=="Foot"&&hasCertainTrait(Def.unitType,"Schwerpunkt")){Ctk*=1.4};
					if(Atk.movementType=="Flight"&&hasCertainTrait(Def.unitType,"Anti-Air")){Ctk*=3};
					if(Atk.movementType=="Rudder"&&hasCertainTrait(Def.unitType,"Anti-Ship")){Ctk*=3};
					if(Atk.movementType=="Heavy Rudder"&&hasCertainTrait(Def.unitType,"Anti-Ship")){Ctk*=3};
					if(Atk.movementType=="Static"&&hasCertainTrait(Def.unitType,"Anti-Structure")){Ctk*=2};
					if(hasCertainTrait(Atk.unitType,"Steer")&&(Def.movementType=="Rudder" || Def.movementType=="Heavy Rudder")){Ctk*=Math.min(1,Math.max(0.4,Def.speed-Def.speed))};
					Ctk*=Math.min(2,Math.max(0.2,1+Def.morale/5));


				DMG-=Ctk/2};

				//console.log(DMG);
				RangedTargetList[RangedTargetList.length]={x:ics,y:igrec,F:DMG};
				//RangedTargetList[RangedTargetList.length-1].F+=DMG
				};
			};


		}};



		};

	if(attackType=="Contact"){
		//console.log(ContactTargetList.length);
		let cekA=true;
		if(ContactTargetList.length==0){cekA=false};
		if(cekA){
			
			if(Difficulty==1){DefaultAttack=ContactTargetList[Math.floor(Math.random()*ContactTargetList.length)]};
			if(Difficulty>1){

			let MAX=0;
			for(let jd=0; jd<ContactTargetList.length; jd++){if(ContactTargetList[jd].F>ContactTargetList[MAX].F){MAX=jd}};
			//console.log(ContactTargetList[MAX].F+" "+ContactTargetList.length);
			DefaultAttack=ContactTargetList[MAX];
			};
			//console.log(DefaultAttack);
			//alert(DefaultAttack.path);
			//alert(DefaultAttack);
			//alert(DefaultAttack.path);
			
			
			let ics=DefaultAttack.X;
			let igrec=DefaultAttack.Y;

			for(let w=0;w<DefaultAttack.path.length;w++){
				let v=DefaultAttack.path[w];
				if(v==1){ics-=1};
				if(v==2){igrec+=1};
				if(v==3){ics+=1};
				if(v==4){igrec-=1};
			};


			let canAttack=true;

			//if((rostermap[ics][igrec] ?? 0)!=0){};
			if((rostermap[DefaultAttack.X][DefaultAttack.Y] ?? 0)!=0){if(DefaultAttack.X!=X || DefaultAttack.Y!=Y){canAttack=false}};
			//alert(canAttack);
			if(DefaultAttack.path.length>0 && rostermap[DefaultAttack.X][DefaultAttack.Y]==0){
				ActionRegister.Movement=DefaultAttack.path;
				//MoveUnit(unitIndex,DefaultAttack.path);
				};

			//alert(DefaultAttack.X+" "+DefaultAttack.Y);
			//if(hasCertainTrait(Unit.unitType,"Seabound") && TargetChecker.movementType!="Rudder" && TargetChecker.movementType!="Heavy Rudder"){CanAttack=false};
			//if(!hasCertainTrait(Unit.unitType,"Skysweeper") && TargetChecker.movementType=="Flight"){CanAttack=false};
			//if(!hasCertainTrait(Unit.unitType,"Depth Strike") && hasCertainTrait(TargetChecker.unitType??1,"Submerged")){CanAttack=false};

			//alert((ics+DefaultAttack.TX)+" "+(igrec+DefaultAttack.TY)+"             "+ics+" "+igrec);
			//alert(rostermap[DefaultAttack.TX][DefaultAttack.TY]);
			//alert(rostermap[ics+DefaultAttack.TX][igrec+DefaultAttack.TY].index);
			if(canAttack){ActionRegister.Attack=rostermap[DefaultAttack.X+DefaultAttack.TX][DefaultAttack.Y+DefaultAttack.TY].index;
				//setTimeout(Attack,700,unitIndex,rostermap[DefaultAttack.X+DefaultAttack.TX][DefaultAttack.Y+DefaultAttack.TY].index);
				};
			//Attack(unitIndex,rostermap[ics+DefaultAttack.TX][igrec+DefaultAttack.TY].index);

		};

		if(!cekA){
			//console.log(Pizdamatii.length);
			let DefaultMovement=[];
			if(Difficulty==1 && Pizdamatii.length>0){DefaultMovement=Pizdamatii[Math.ceil(Math.random()*Pizdamatii.length)-1].z};
			if(Difficulty>1 && Pizdamatii.length>0){let MAX=0;
			for(let a=0; a<Pizdamatii.length; a++){if(Pizdamatii[a].F>Pizdamatii[MAX].F){MAX=a}};
			DefaultMovement=Pizdamatii[MAX].z};
		//DefaultMovement.pop();
		let DestinationValability=true;
		let ics=Lat;
		let igrec=Long;


		//console.log(DefaultMovement);
		for(let w=0;w<DefaultMovement.length;w++){ics+=(DefaultMovement[w]-2)*(DefaultMovement[w]%2);
		igrec+=(3-DefaultMovement[w])*((DefaultMovement[w]-1)%2);
		if(rostermap[ics][igrec]!=0){DestinationValability=false};}
		//alert(rostermap[ics][igrec]);
	
		if(DestinationValability){
			MoveUnit(unitIndex,DefaultMovement);
			};};

	};
	if(attackType=="Ranged"){
		let cekA=true;
		if(RangedTargetList.length==0){cekA=false};
		if(cekA){
			if(Difficulty==1){DefaultAttack=RangedTargetList[Math.floor(Math.random()*RangedTargetList.length)]};
			if(Difficulty>1){let MAX=0;
			for(let jd=0; jd<RangedTargetList.length; jd++){if(RangedTargetList[jd].F>RangedTargetList[MAX].F){MAX=jd}};
			//console.log(ContactTargetList[MAX].F+" "+ContactTargetList.length);
			DefaultAttack=RangedTargetList[MAX];
			};
			Target=rostermap[DefaultAttack.x][DefaultAttack.y].index;
			let Attacker=rostermap[X][Y].index;
			ActionRegister.Attack=Target;
			//Attack(Attacker,Target);
			//alert(Attacker);
		};
		if(!cekA){
			let DefaultMovement=[];
			if(Difficulty==1 && Pizdamatii.length>0){DefaultMovement=Pizdamatii[Math.ceil(Math.random()*Pizdamatii.length)-1].z};
			if(Difficulty>1 && Pizdamatii.length>0){let MAX=0;
			for(let a=0; a<Pizdamatii.length; a++){if(Pizdamatii[a].F>Pizdamatii[MAX].F){MAX=a}};
			DefaultMovement=Pizdamatii[MAX].z};
		//DefaultMovement.pop();
		let DestinationValability=true;
		let ics=Lat;
		let igrec=Long;

		for(let w=0;w<DefaultMovement.length;w++){ics+=(DefaultMovement[w]-2)*(DefaultMovement[w]%2);
		igrec+=(3-DefaultMovement[w])*((DefaultMovement[w]-1)%2);};
		if(rostermap[ics][igrec]!=0){DestinationValability=false};
	
		if(DestinationValability){
			ActionRegister.Movement=DefaultMovement;
			MoveUnit(unitIndex,DefaultMovement);
			};


			};};
			//console.log(DefaultMovement);
			};
function AITurn(Roster,Map,Constants){
	//Map=Campaigns[ChosenNation-1][ChosenChapter-1][ChosenMission-1].Map;
	if(!Resolution){document.getElementById("AITurnIndicator").style.visibility="visible"};
	isAITurn=true;
	//alert(document.getElementById("AITurnIndicator").style.visibility);
	//This one does not disable the markers for long enough
	for(let x=1;x<=10;x++){for(let y=1;y<=10;y++){if(document.getElementById("Marker "+x+"X"+y)??0!=0){document.getElementById("Marker "+x+"X"+y).style.visibility="hidden";}};};

	//Money=Constants.Funds[(Turn-1)%SubRosters.length+1];
	//alert(SubRosters.length);

	AIFaction=AttackOrder[(Turn-1)%SubRosters.length];
	Funds=Constants.Funds[AIFaction];
	if(Constants.Commanders??false){Commander=Constants.Commanders[(Turn-1)%SubRosters.length+1]};

	/*
	setTimeout(function(){
			//alert(Roster[0].faction);
		for(let a=1; a<=GlassPanels; a++){
			let dudeIndex=AttackOrder[(Turn+a-2)%AttackOrder.length];
			//let dudeIndex=Roster[0].faction;
			//alert(dudeIndex);
			document.getElementById("Glassplatecolor"+a).style.background=Factions[dudeIndex].color;
			document.getElementById("Glassplatename"+a).innerHTML=Factions[dudeIndex].name;
			if(document.getElementById("Glassplatecolor"+a).style.background!='black'){document.getElementById("Glassplatename"+a).style.color='black'}else{document.getElementById("Glassplatename"+a).style.color='indigo'};};
		},GlobalDelayerConstant);
		*/

	//alert(Constants.Funds[(Turn-1)%SubRosters.length+1]);
	//alert(AIFaction);


	//while(true){let x=};
	let MedianUnitSelector=SubRosters[0];
	let MUSS=0;
	//DO NOT USE A WHILE TRUE BEFORE ROSTER LISTING IS FIXED OR IT'LL FUCK UP THE WHOLE SCRIPT
	//while(true){};
	for(let t=0; t<MedianUnitSelector.length; t++){if(MedianUnitSelector[t].life>0){MUSS=t}};
		MedianUnit={X:MedianUnitSelector[MUSS].x,Y:MedianUnitSelector[MUSS].y};
	//console.log(MedianUnit.X+" "+MedianUnit.Y);


	for(let x=0;x<Map.length;x++){for(y=0;y<Map[0].length;y++){
		if( (ControlMap??0) !=0 && ControlMap[x][y]==AIFaction){Constants.Funds[(Turn-1)%SubRosters.length+1]+=GenerateRevenue(Terrain[Map[x][y]].revenue??0,x,y)};
		if(hasCertainTrait(rostermap[x][y].unitType??0,"Financial Center")&&rostermap[x][y].faction==AIFaction){Constants.Funds[(Turn-1)%SubRosters.length+1]+=GenerateRevenue(100,x,y)};

		}};




	ActiveRoster=[];
	for(let x=0;x<Roster.length;x++){if(Roster[x].life>0 && !hasCertainTrait(Roster[x].unitType,"Inertial")){ActiveRoster[ActiveRoster.length]=Roster[x]}};
		//alert(ActiveRoster.length);
	
	//alert(GlobalDelayerConstant);


		//Here is the code block that ensures dead factions are flushed out of the system. Or at least it was supposed to, until we found out just how freaking buggy it was
		let FactionIsAlive=true;
	if(ActiveRoster.length==0){let TurnRefactorer=(TurnIndex-1)%AttackOrder.length;
		//TurnIndex=0; 
		//AttackOrder.splice(AIFaction,1); 
		FactionIsAlive=false;
			};



			

	if(FactionIsAlive){setTimeout(InterphaseBanner,GlobalDelayerConstant,AttackOrder[CurrentTurn],Turn)};
	
	
		InternalDelayerFactor=0;

	MAXI=ActiveRoster.length;
	//console.log(MAXI);
	for(let i=0;i<ActiveRoster.length;i++){



		let Stealth=false;
		if(hasCertainTrait(Roster[i].unitType,"Stealth")){Stealth=true};


		if(Roster[i].x>0){
			if(Factions[rostermap[Roster[i].x-1][Roster[i].y].faction??0].faction!=Roster[i].coallition && Factions[rostermap[Roster[i].x-1][Roster[i].y].faction??0].faction!=Factions[0].faction)
				{Stealth=false};
		};
		if(Roster[i].x<Map.length-1){
			if(Factions[rostermap[Roster[i].x+1][Roster[i].y].faction??0].faction!=Roster[i].coallition && Factions[rostermap[Roster[i].x+1][Roster[i].y].faction??0].faction!=Factions[0].faction)
				{Stealth=false};
		};

		if(Roster[i].y>0){
			if(Factions[rostermap[Roster[i].x][Roster[i].y-1].faction??0].faction!=Roster[i].coallition && Factions[rostermap[Roster[i].x][Roster[i].y-1].faction??0].faction!=Factions[0].faction)
				{Stealth=false};
		};
		if(Roster[i].y<Map[0].length-1){
			if(Factions[rostermap[Roster[i].x][Roster[i].y+1].faction??0].faction!=Roster[i].coallition && Factions[rostermap[Roster[i].x][Roster[i].y+1].faction??0].faction!=Factions[0].faction)
				{Stealth=false};
		};
		

		if(Stealth){rostermap[Roster[i].x][Roster[i].y].isCloaked=Stealth};
		/*	
		if(Roster[i].x>=StandardX && Roster[i].y>=StandardY && Roster[i].x<StandardX+10 && Roster[i].y<StandardY+10){document.getElementById("Entity "+(Roster[i].x+StandardX+1)+"X"+(Roster[i].y+StandardY+1)).style.filter+=" opacity(50%)"};};*/
		refreshMap();

		if(i==0){setTimeout(AI_Act,0,i)};

			//This block makes a list of production units;
			//alert(ActiveRoster[0].faction);
	let Industry=[];

	if((ControlMap??0)!=0){
		//alert("plm");
		for(let a=0; a<Map.length; a++){for(b=0; b<Map[0].length; b++){
			if(ControlMap[a][b]==AIFaction && Map[a][b]==10 && rostermap[a][b]==0){Industry[Industry.length]={X:a,Y:b,T:1}};
			if(ControlMap[a][b]==AIFaction && Map[a][b]==11 && rostermap[a][b]==0){Industry[Industry.length]={X:a,Y:b,T:2}};
			if(ControlMap[a][b]==AIFaction && Map[a][b]==12 && rostermap[a][b]==0){Industry[Industry.length]={X:a,Y:b,T:3}};
			}};
		

	//This block constructs units in (hopefully) every production unit

			
	for(let I=0; I<Industry.length; I++){
		let UnitOptions=[];
		let UnitChoice=0;

		if(Industry[I].T==1){
			for(let c=1; c<=40; c++){if(Units[c].Cost<=Funds && (Units[c].FactionSpecificity??AIFaction)==AIFaction){UnitOptions[UnitOptions.length]={K:c,V:(Units[c].HP+Units[c].Attack)/1}}};
			};
		if(Industry[I].T==2){
			for(let c=42; c<=50; c++){if(Units[c].Cost<=Funds && (Units[c].FactionSpecificity??AIFaction)==AIFaction){UnitOptions[UnitOptions.length]={K:c,V:(Units[c].HP+Units[c].Attack)/1}}};
			};
		if(Industry[I].T==3){
			for(let c=52; c<=60; c++){if(Units[c].Cost<=Funds && (Units[c].FactionSpecificity??AIFaction)==AIFaction){UnitOptions[UnitOptions.length]={K:c,V:(Units[c].HP+Units[c].Attack)/1}}};
			};

		if(UnitOptions.length>0 && Difficulty==1){UnitChoice=UnitOptions[Math.floor(Math.random()*UnitOptions.length)]};
		if(UnitOptions.length>0 && Difficulty>1){let BestYet=0; for(let p=0; p<UnitOptions.length; p++){if(UnitOptions[p].V>UnitOptions[BestYet].V){BestYet=p}}; UnitChoice=UnitOptions[BestYet]};

		//This almost works, but not yet
		if(UnitChoice!=0){DeployUnit(Industry[I].X+1,Industry[I].Y+1,UnitChoice.K,AIFaction,1); let AssBackwardsRefund=Units[UnitChoice.K].Cost; YourMoney+=AssBackwardsRefund; Constants.Funds[AIFaction]-=AssBackwardsRefund};
		};

		};

		//Aaaaand here is the block for AI building turrets. Or rather will be

		if(Difficulty>2){};
		//alert(Campaigns[ChosenNation-1][ChosenChapter-1][ChosenMission-1].Map);
			//alert(InternalDelayerFactor);
			//setTimeout(AI_Scouter,InternalDelayerFactor,ActiveRoster[i],Map);
			//alert(ActiveRoster[i].index);
			

			//console.log(ActionRegister);
			//AI_Scouter(Roster[x],Campaigns[ChosenNation-1][ChosenChapter-1][ChosenMission-1].Map)
			//if(x==ActiveRoster.length-1){document.getElementById("AITurnIndicator").style.visibility="hidden";};








		
		};
		
		
		function DeactivateAIMarker(){document.getElementById('AITurnIndicator').style.visibility='hidden'; isAITurn=false;};
		let time=ActiveRoster.length*1400;
		GlobalDelayerConstant+=1400*ActiveRoster.length;


				

		


		//alert(SubRosters.length);
		//alert((Turn+1)%SubRosters.length);
		if((Turn+1)%SubRosters.length==1){setTimeout(DeactivateAIMarker,1400*ActiveRoster.length);}
		};
function Attack(Attacker,Defender){
	//alert(Defender);
	let Interceptor=Defender;
	let Atk=MapRoster[Attacker];
	let Def=MapRoster[Defender];
	//Map=Campaigns[ChosenNation-1][ChosenChapter-1][ChosenMission-1].Map;
	Map=Map;
	let AttackerTile=Terrain[Map[Atk.x][Atk.y]];
	let DefenderTile=Terrain[Map[Def.x][Def.y]];
	//if(Atk.direction<2.5){direction=Atk.direction+2}else{direction=Atk.direction-2};
	let DirSeed=Atk.direction;
	if(Atk.x>Def.x){direction=1};
	if(Atk.x<Def.x){direction=3};
	if(Atk.y<Def.y){direction=2};
	if(Atk.y>Def.y){direction=4};
	Atk.direction=direction;
	//if(Atk.x>=StandardX&&Atk.x<StandardX+10&&Atk.y>=StandardY&&Atk.y<StandardY+10){AttackingAnimation(Attacker)};
	
	let DamageModifier=1;
	let dist =((Atk.x-Def.x)*(Atk.x-Def.x)+(Atk.y-Def.y)*(Atk.y-Def.y));
	//alert(DamageModifier);
	if(hasCertainTrait(Atk.unitType,"Indomitable")){DamageModifier=1;};
	let LogisticFactor=BiomeRegistry[BiomeMap[Atk.x][Atk.y]].LogisticIndex;
	DamageModifier*=LogisticFactor;

	if(Atk.damageType==Def.armor&&Atk.damageType!="Medium"){DamageModifier=DamageModifier*1.5;};
	if(Atk.damageType=="Light"&&Def.armor=="Heavy"){DamageModifier=DamageModifier*0.5;};
	if(Atk.damageType=="Heavy"&&Def.armor=="Light"){DamageModifier=DamageModifier*0.5;};
	//alert(Atk.willAmbush);
	if(hasCertainTrait(Atk.unitType,"Stealth")){if(Atk.willAmbush??false){DamageModifier*=2; Atk.willAmbush=false}};
	//if(Atk.damageType=="Medium"){DamageModifier=1;};

	//alert(DamageModifier);
	DamageModifier=DamageModifier*DefenderTile.protectionFactor;
	if(hasCertainTrait(Atk.unitType,"Commando")&&DefenderTile.protectionFactor<1){DamageModifier*=1.25};
	if(hasCertainTrait(Def.unitType,"Commando")&&DefenderTile.protectionFactor<1){DamageModifier*=0.8};
	//if(ChosenUnit.isCloaked){DamageModifier*=2};
	DamageModifier*=(5+Atk.morale)/5;
	let canCounterattack=true;
	let isIntercepted=false;

	if(hasCertainTrait(Def.unitType,"Sonar") && hasCertainTrait(Atk.unitType,"Submerged")){isIntercepted=true};

	if(MapRoster[Attacker].movementType=="Flight"){
		InterceptorList=[];
		for(let a=Math.max(Atk.x-3,0); a<Math.min(Atk.x+3,Map.length); a++){for(let b=Math.max(Atk.y-3,0); b<Math.min(Atk.y+3,Map[0].length); b++){
			//alert(a+" "+b);
			let canIntercept=true;
			if(rostermap[a][b]==0){canIntercept=false}else{if(!hasCertainTrait(rostermap[a][b].unitType,"Anti-Air")){canIntercept=false;}};

			if((a-Atk.x)*(a-Atk.x)+(b-Atk.y)*(b-Atk.y)<=9 && canIntercept==true){InterceptorList[InterceptorList.length]={x:a,y:b}};
			}};
		OpportuneInterceptor=InterceptorList[Math.floor(Math.random()*InterceptorList.length)];
		if(InterceptorList.length>0){isIntercepted=true; Interceptor=rostermap[OpportuneInterceptor.x][OpportuneInterceptor.y].index};
		};
	if(hasCertainTrait(Atk.unitType,"Submerged") && !isIntercepted){
		InterceptorList=[];
		for(let a=Math.max(Atk.x-3,0); a<Math.min(Atk.x+3,Map.length); a++){for(let b=Math.max(Atk.y-3,0); b<Math.min(Atk.y+3,Map[0].length); b++){
			//alert(a+" "+b);
			let canIntercept=true;
			if(rostermap[a][b]==0){canIntercept=false}else{if(!hasCertainTrait(rostermap[a][b].unitType,"Sonar")){canIntercept=false;}};

			if((a-Atk.x)*(a-Atk.x)+(b-Atk.y)*(b-Atk.y)<=9 && canIntercept==true){InterceptorList[InterceptorList.length]={x:a,y:b}};
			}};
		OpportuneInterceptor=InterceptorList[Math.floor(Math.random()*InterceptorList.length)];
		if(InterceptorList.length>0){isIntercepted=true; Interceptor=rostermap[OpportuneInterceptor.x][OpportuneInterceptor.y].index};





		};


	if(MapRoster[Defender].unitType<12 && hasCertainTrait(MapRoster[Attacker].unitType,"Anti-Infantry")){DamageModifier*=3};
	if(MapRoster[Defender].unitType<12 && hasCertainTrait(MapRoster[Attacker].unitType,"Schwerpunkt")){DamageModifier*=1.4};
	if(MapRoster[Defender].movementType=="Tracked" && hasCertainTrait(MapRoster[Attacker].unitType,"Anti-Tank") && !hasCertainTrait(MapRoster[Defender].unitType,"Anti-Tank")){canCounterattack=false};
	if(MapRoster[Defender].movementType=="Flight" && hasCertainTrait(MapRoster[Attacker].unitType,"Anti-Air")){DamageModifier*=2};
		//alert(Units[Def.unitType].Movement=="Rudder" || Units[Def.unitType].Movement=="Heavy Rudder");
	if(hasCertainTrait(Atk.unitType,"Anti-Ship") && (Units[Def.unitType].Movement=="Rudder" || Units[Def.unitType].Movement=="Heavy Rudder")){DamageModifier*=3};
	//if(hasCertainTrait(MapRoster[Attacker].unitType,"Anti-Ship")){if(MapRoster[Defender].movementType!="Rudder" && MapRoster[Defender].movementType!="Heavy Rudder"){DamageModifier*=0;}};
	if(MapRoster[Defender].movementType=="Stationary" && hasCertainTrait(MapRoster[Attacker].unitType,"Anti-Structure")){DamageModifier*=2};

	if(hasCertainTrait(Def.unitType,"Steer")&&(Units[Def.unitType].Movement=="Rudder" || Units[Def.unitType].Movement=="Heavy Rudder")){DamageModifier*=1+(Math.max(Math.min(Atk.speed-Def.speed,0),-4)*0.15)};

	if(hasCertainTrait(Def.unitType,"Tank-Hunter") && MapRoster[Attacker].movementType=="Tracked"){isIntercepted=true};
	if(hasCertainTrait(Atk.unitType,"Tank-Hunter")){isIntercepted=false};
	if(hasCertainTrait(Def.unitType,"Self-Destruct")){isIntercepted=false};
	
	//alert(dist);
	//alert(Def.unitType);
	if(dist>(Units[Def.unitType].MaxRange*Units[Def.unitType].MaxRange)){canCounterattack=false; isIntercepted=false};
	if(Atk.movementType=="Flight" && !hasCertainTrait(Def.unitType,"Skysweeper")){canCounterattack=false};
	if(hasCertainTrait(Atk.unitType,"Submerged") && !hasCertainTrait(Def.unitType,"Depth Strike")){canCounterattack=false};
	if(hasCertainTrait(Def.unitType,"Seabound") && Units[Atk.unitType].Movement!="Rudder" && Units[Atk.unitType].Movement!="Heavy Rudder"){canCounterattack=false};
	//alert(Units[Def.unitType].MaxRange*Units[Def.unitType].MaxRange);
	

	if(isIntercepted){GhostAttack(Attacker,0,0,25,"Standard")};

	DamageModifier*=Atk.life/Units[Atk.unitType].HP

	let Damage=Math.ceil(Atk.damage*DamageModifier);
	//if(hasCertainTrait(Atk.unitType,"Tank-Hunter") && Def.armor!="Heavy"){Damage-=25};
	if(hasCertainTrait(Def.unitType,"Cemented Steel Armor") && !hasCertainTrait(Atk.unitType,"Supply Distribution") && !hasCertainTrait(Atk.unitType,"Cavitation Explosion")){Damage-=20};
	Damage=Math.max(Damage,0);
	if(MapRoster[Defender].movementType=="Flight" && !hasCertainTrait(MapRoster[Attacker].unitType,"Anti-Air")){if(Damage>25){Damage=25}};
	if(hasCertainTrait(MapRoster[Attacker].unitType,"Supply Distribution")){Damage*=-1; canCounterattack=false;};

	//Interceptor="UMF";
	/*
	if(MapRoster[Attacker].faction==PlayerChoiceFaction){
			LastMove.ID=Attacker;
			LastMove.X=Atk.x;
			LastMove.Y=Atk.y;
			LastMove.HP=Atk.life;
			};*/

	if(hasCertainTrait(Atk.unitType,"Terrifying")){if(Units[Def.unitType].Cost<1000&&Def.morale>-3){Def.morale-=1}};
	if(hasCertainTrait(Atk.unitType,"Inflaming")){if(Def.morale<3){Def.morale+=1}};

	





	if(Atk.life>0){
	MarkerMap[Atk.x][Atk.y]=0;
	document.getElementById("Marker "+(Atk.x+1-StandardX)+"X"+(Atk.y+1-StandardY)).style.visibility="hidden";
	let HitAnimStyle="Standard";
	if(hasCertainTrait(Atk.unitType,"Supply Distribution")){HitAnimStyle="Supply"};
	if(hasCertainTrait(Atk.unitType,"Dispersion")){HitAnimStyle="Gaswave"};
	if(hasCertainTrait(Atk.unitType,"Streamblast")){HitAnimStyle="Neutron Wave"};
	if(Atk.x>=StandardX&&Atk.x<StandardX+Map.length&&Atk.y>=StandardY&&Atk.y<StandardY+Map[0].length){if(!isIntercepted){AttackingAnimation(Attacker)}else{setTimeout(AttackingAnimation, 800, Attacker)}};
	if(Def.x>=StandardX&&Def.x<StandardX+Map.length&&Def.y>=StandardY&&Def.y<StandardY+Map[0].length){if(!isIntercepted){HitAnimation(Defender,HitAnimStyle)}else{setTimeout(HitAnimation, 800, Defender, HitAnimStyle)}};

	//alert(Damage);
	//alert(Atk.x+" "+Atk.y);
	if(!hasCertainTrait(Atk.unitType,"Dispersion") && !hasCertainTrait(Atk.unitType,"JUDGEMENT") && ((LastMove.ID??0)==0 || hasCertainTrait(Atk.unitType,"Bewegungskrieg") || (LastMove.hasEngaged??false))){

		LastMove.ID=Attacker;
		if((LastMove.DIR??0)==0){LastMove.DIR=DirSeed};
		//alert(LastMove.DIR);
		if((LastMove.X??0)==0){LastMove.X=Atk.x};
		if((LastMove.Y??0)==0){LastMove.Y=Atk.y}; 
		LastMove.HP=Atk.life;
		//LastMove.cloak=MapRoster[Attacker].isCloaked??false;
		if(MapRoster[Attacker].canEncore){LastMove.encore=MapRoster[Attacker].canEncore??false};

		if((LastMove.EID??0)==0){LastMove.EID=Defender; LastMove.EHP=Def.life; LastMove.EX=Def.x; LastMove.EY=Def.y; LastMove.GRV=Def}else{LastMove.E2ID=Defender; LastMove.E2HP=Def.life; LastMove.E2X=Def.x; LastMove.E2Y=Def.y; LastMove.GRV2=Def};

		}else if((LastMove.ID??0)!=0){
			//if((LastMove.DIR??0)==0){LastMove.DIR=DirSeed};
			//if((LastMove.X??0)==0){LastMove.X=Atk.x};
			//if((LastMove.Y??0)==0){LastMove.Y=Atk.y};
			//LastMove.HP=Atk.life;
		}else{LastMove.ID=0};

	//console.log(LastMove.X+" "+LastMove.Y);
	if(!hasCertainTrait(Atk.unitType,"Dispersion") && !hasCertainTrait(Atk.unitType,"JUDGEMENT") && Units[Atk.unitType].MaxRange>1){

		LastMove.ID=Attacker;
		LastMove.X=Atk.x;
		LastMove.Y=Atk.y;
		LastMove.HP=Atk.life;
		LastMove.DIR=DirSeed;
		LastMove.cloak=MapRoster[Attacker].isCloaked??false;
		if(MapRoster[Attacker].canEncore){LastMove.encore=MapRoster[Attacker].canEncore??false};
		if((LastMove.EID??0)==0){LastMove.EID=Defender; LastMove.EHP=Def.life; LastMove.EX=Def.x; LastMove.EY=Def.y; LastMove.GRV=Def}else{LastMove.E2ID=Defender; LastMove.E2HP=Def.life; LastMove.E2X=Def.x; LastMove.E2Y=Def.y; LastMove.GRV2=Def}
		};





	if(HitAnimStyle=="Standard" || HitAnimStyle=="Supply"){Def.life-=Damage;
	}else if(HitAnimStyle=="Gaswave"){
		for(let x=Math.max(0,Def.x-1); x<=Math.min(Map.length-1,Def.x+1);x++){for(let y=Math.max(0,Def.y-1); y<=Math.min(Map[0].length-1,Def.y+1); y++){
			SplashAttack(Atk,x,y);
		}};


	}else if(HitAnimStyle=="Neutron Wave"){
		LaserVar=0;
		if(Def.x<Atk.x){LaserVar=1;LaserConstX=-1;LaserConstY=0};
		if(Def.x>Atk.x){LaserVar=3;LaserConstX=1;LaserConstY=0};
		if(Def.y>Atk.y){LaserVar=2;LaserConstX=0;LaserConstY=1};
		if(Def.y<Atk.y){LaserVar=4;LaserConstX=0;LaserConstY=-1};

		//for(let l=1; l<=Units[Atk.unitType].MaxRange; l++){
			//SplashAttack(Atk,Atk.x+l*(1+1),Atk.y+l*(1+1))};

		//if(LaserVar%2!=0){LaserCap=Map.length; LaserMin=Math.max(Def.x-7,0); LaserMax=Math.min(Def.x,LaserCap-7)};
		//if(LaserVar%2==0){LaserCap=Map[0].length; LaserMin=Math.max(Def.y-7,0); LaserMax=Math.min(Def.y,LaserCap-7)};

		//let r=Units[Atk.unitType].MaxRange;
		for(let l=1; l<=7; l++){
			//SplashAttack(Atk,Atk.x+l*LaserConstX,Atk.y+l*LaserConstY);
			if(Atk.x+l*LaserConstX<Map.length && Atk.y+l*LaserConstY<Map[0].length && Atk.x+l*LaserConstX>=0 && Atk.y+l*LaserConstY>=0){SplashAttack(Atk,Atk.x+l*LaserConstX,Atk.y+l*LaserConstY)};
		};
			//if(Atk.x-7>=0);



	}else if(HitAnimStyle=="Antimatter"){};

		ScoutVicinity(Atk.x,Atk.y);
		LastMove.Uncloaked=AdjacentCloakers;
		if(!rostermap[Atk.x][Atk.y].isCloaked){document.getElementById("EntityCore "+(Atk.x+1)+"X"+(Atk.y+1)).style.filter=Factions[Atk.faction].ChromaCode;};
		for(let c=0;c<AdjacentCloakers.length;c++){
		if(AdjacentCloakers[c]==1){document.getElementById("EntityCore "+(Atk.x)+"X"+(Atk.y+1)).style.filter=Factions[rostermap[Atk.x-1][Atk.y].faction].ChromaCode};
		if(AdjacentCloakers[c]==2){document.getElementById("EntityCore "+(Atk.x+1)+"X"+(Atk.y+2)).style.filter=Factions[rostermap[Atk.x][Atk.y+1].faction].ChromaCode};		
		if(AdjacentCloakers[c]==3){document.getElementById("EntityCore "+(Atk.x+2)+"X"+(Atk.y+1)).style.filter=Factions[rostermap[Atk.x+1][Atk.y].faction].ChromaCode};
		if(AdjacentCloakers[c]==4){document.getElementById("EntityCore "+(Atk.x+1)+"X"+(Atk.y)).style.filter=Factions[rostermap[Atk.x][Atk.y-1].faction].ChromaCode};
			};

	//alert(Damage);

	if(hasCertainTrait(Atk.unitType,"Absorber")){let HealIndex=Math.min(Damage,Math.abs(Def.life),Units[Atk.unitType].HP-Atk.life); Atk.life+=HealIndex};
	if(Def.life>Units[Def.unitType].HP){Def.life=Units[Def.unitType].HP};
	};

	if(hasCertainTrait(Atk.unitType,"Self-Destruct")){Atk.life=0;canCounterattack=false};
	if(Atk.life<=0){setTimeout(UnitLost,700,Attacker);};
	
	if(Def.life<=0){
		KillingUnit=true;
		let canEncore=false;
		setTimeout(UnitLost,700,Defender);
		if(hasCertainTrait(Atk.unitType,"Bewegungskrieg")&&Atk.canEncore){canEncore=true;Atk.canEncore=false};
		//alert(Atk.x+" "+Atk.y);
		if(canEncore){MarkerMap[Atk.x][Atk.y]=true;
		document.getElementById("Marker "+(Atk.x+1-StandardX)+"X"+(Atk.y+1-StandardY)).style.visibility="visible";}
	}else{
		//Counterattack(Defender,Attacker)
		if(dist<Def.minR*Def.minR){canCounterattack=false};
		if(dist>Def.maxR*Def.maxR){canCounterattack=false};
		//alert(Atk.MaxRange);
		if(hasCertainTrait(Atk.unitType,"Mobile Battery") && Units[Atk.unitType].MaxRange>1 && !hasCertainTrait(Def.unitType,"Mobile Battery")){canCounterattack=false};
		if(hasCertainTrait(Def.unitType,"Self-Destruct")){canCounterattack=false};
		if(hasCertainTrait(Def.unitType,"Dispersion")){canCounterattack=false};
		if(hasCertainTrait(Def.unitType,"JUDGEMENT")){canCounterattack=false};
		if(Def.damageType=="None"){canCounterattack=false};
		if(isIntercepted){canCounterattack=false};
		//if(false){canCounterattack=false};
		if(canCounterattack){
		setTimeout(Counterattack, 800, Defender, Attacker);};

	};

	EvaluateDynamicEvent('Action','null');
	
	if(Atk.isVized){let ShouldProbablyCheck=false;
		for(let l=0; l<Constants.Defeat.length; l++){if(Constants.Defeat[l]==Defender && Def.life<=0){ShouldProbablyCheck=true}};
		for(let l=0; l<Constants.Protect.length; l++){if(Constants.Protect[l]==Attacker && Atk.life<=0){ShouldProbablyCheck=true}};
		if(Map.length*Map[0].length<=1000){ShouldProbablyCheck=true};
		if(ShouldProbablyCheck){Inspection(Turn,Constants,Roster);Atk.isVized=false}}};
function AttackEstimate(Attacker,Defender){
	let Interceptor=Defender;
	let Atk=MapRoster[Attacker];
	let Def=MapRoster[Defender];
	Map=Map;
	let AttackerTile=Terrain[Map[Atk.x][Atk.y]];
	let DefenderTile=Terrain[Map[Def.x][Def.y]];
	let DirSeed=Atk.direction;
	if(Atk.x>Def.x){direction=1};
	if(Atk.x<Def.x){direction=3};
	if(Atk.y<Def.y){direction=2};
	if(Atk.y>Def.y){direction=4};
	//Atk.direction=direction;
	let HypoLifeA=JSON.parse(JSON.stringify(Atk.life));
	let HypoLifeE=JSON.parse(JSON.stringify(Atk.life));
	
	let DamageModifier=1;
	let dist =((Atk.x-Def.x)*(Atk.x-Def.x)+(Atk.y-Def.y)*(Atk.y-Def.y));
	if(hasCertainTrait(Atk.unitType,"Indomitable")){DamageModifier=1;};
	DamageModifier*=(AttackerTile.logisticFactor??1);

	if(Atk.damageType==Def.armor&&Atk.damageType!="Medium"){DamageModifier=DamageModifier*1.5;};
	if(Atk.damageType=="Light"&&Def.armor=="Heavy"){DamageModifier=DamageModifier*0.5;};
	if(Atk.damageType=="Heavy"&&Def.armor=="Light"){DamageModifier=DamageModifier*0.5;};
	if(hasCertainTrait(Atk.unitType,"Stealth")){if(Atk.willAmbush??false){DamageModifier*=2; Atk.willAmbush=false}};

	DamageModifier=DamageModifier*DefenderTile.protectionFactor;
	if(hasCertainTrait(Atk.unitType,"Commando")&&DefenderTile.protectionFactor<1){DamageModifier*=1.25};
	if(hasCertainTrait(Def.unitType,"Commando")&&DefenderTile.protectionFactor<1){DamageModifier*=0.8};
	DamageModifier*=(5+Atk.morale)/5;
	let canCounterattack=true;
	let isIntercepted=false;

	if(hasCertainTrait(Def.unitType,"Sonar") && hasCertainTrait(Atk.unitType,"Submerged")){isIntercepted=true};

	if(MapRoster[Attacker].movementType=="Flight"){
		InterceptorList=[];
		for(let a=Math.max(Atk.x-3,0); a<Math.min(Atk.x+3,Map.length); a++){for(let b=Math.max(Atk.y-3,0); b<Math.min(Atk.y+3,Map[0].length); b++){
			let canIntercept=true;
			if(rostermap[a][b]==0){canIntercept=false}else{if(!hasCertainTrait(rostermap[a][b].unitType,"Skysweeper")){canIntercept=false;}};

			if((a-Atk.x)*(a-Atk.x)+(b-Atk.y)*(b-Atk.y)<=9 && canIntercept==true){InterceptorList[InterceptorList.length]={x:a,y:b}};
			}};
		OpportuneInterceptor=InterceptorList[Math.floor(Math.random()*InterceptorList.length)];
		if(InterceptorList.length>0){isIntercepted=true; Interceptor=rostermap[OpportuneInterceptor.x][OpportuneInterceptor.y].index};
		};
	if(hasCertainTrait(Atk.unitType,"Submerged") && !isIntercepted){
		InterceptorList=[];
		for(let a=Math.max(Atk.x-3,0); a<Math.min(Atk.x+3,Map.length); a++){for(let b=Math.max(Atk.y-3,0); b<Math.min(Atk.y+3,Map[0].length); b++){
			let canIntercept=true;
			if(rostermap[a][b]==0){canIntercept=false}else{if(!hasCertainTrait(rostermap[a][b].unitType,"Sonar")){canIntercept=false;}};

			if((a-Atk.x)*(a-Atk.x)+(b-Atk.y)*(b-Atk.y)<=9 && canIntercept==true){InterceptorList[InterceptorList.length]={x:a,y:b}};
			}};
		OpportuneInterceptor=InterceptorList[Math.floor(Math.random()*InterceptorList.length)];
		if(InterceptorList.length>0){isIntercepted=true; Interceptor=rostermap[OpportuneInterceptor.x][OpportuneInterceptor.y].index};





		};


	if(MapRoster[Defender].unitType<12 && hasCertainTrait(MapRoster[Attacker].unitType,"Anti-Infantry")){DamageModifier*=3};
	if(MapRoster[Defender].unitType<12 && hasCertainTrait(MapRoster[Attacker].unitType,"Schwerpunkt")){DamageModifier*=1.4};
	if(MapRoster[Defender].movementType=="Tracked" && hasCertainTrait(MapRoster[Attacker].unitType,"Anti-Tank") && !hasCertainTrait(MapRoster[Defender].unitType,"Anti-Tank")){canCounterattack=false};
	if(MapRoster[Defender].movementType=="Flight" && hasCertainTrait(MapRoster[Attacker].unitType,"Anti-Air")){DamageModifier*=2};
	if(hasCertainTrait(Atk.unitType,"Anti-Ship") && (Units[Def.unitType].Movement=="Rudder" || Units[Def.unitType].Movement=="Heavy Rudder")){DamageModifier*=3};
	if(MapRoster[Defender].movementType=="Stationary" && hasCertainTrait(MapRoster[Attacker].unitType,"Anti-Structure")){DamageModifier*=2};

	if(hasCertainTrait(Def.unitType,"Steer")&&(Units[Def.unitType].Movement=="Rudder" || Units[Def.unitType].Movement=="Heavy Rudder")){DamageModifier*=1+(Math.max(Math.min(Atk.speed-Def.speed,0),-4)*0.15)};

	if(hasCertainTrait(Def.unitType,"Tank-Hunter") && MapRoster[Attacker].movementType=="Tracked"){isIntercepted=true};
	if(hasCertainTrait(Atk.unitType,"Tank-Hunter")){isIntercepted=false};
	if(hasCertainTrait(Def.unitType,"Self-Destruct")){isIntercepted=false};
	
	if(dist>(Units[Def.unitType].MaxRange*Units[Def.unitType].MaxRange)){canCounterattack=false; isIntercepted=false};
	if(Atk.movementType=="Flight" && !hasCertainTrait(Def.unitType,"Skysweeper")){canCounterattack=false};
	if(hasCertainTrait(Atk.unitType,"Submerged") && !hasCertainTrait(Def.unitType,"Depth Strike")){canCounterattack=false};
	if(hasCertainTrait(Def.unitType,"Seabound") && Units[Atk.unitType].Movement!="Rudder" && Units[Atk.unitType].Movement!="Heavy Rudder"){canCounterattack=false};

	if(isIntercepted){HypoLifeA-=25};

	DamageModifier*=Atk.life/Units[Atk.unitType].HP

	let Damage=Math.ceil(Atk.damage*DamageModifier);
	if(hasCertainTrait(Def.unitType,"Cemented Steel Armor") && !hasCertainTrait(Atk.unitType,"Supply Distribution") && !hasCertainTrait(Atk.unitType,"Cavitation Explosion")){Damage-=20};
	Damage=Math.max(Damage,0);
	if(MapRoster[Defender].movementType=="Flight" && !hasCertainTrait(MapRoster[Attacker].unitType,"Anti-Air")){if(Damage>25){Damage=25}};
	if(hasCertainTrait(MapRoster[Attacker].unitType,"Supply Distribution")){Damage*=-1; canCounterattack=false;};

	if(hasCertainTrait(Atk.unitType,"Terrifying")){if(Units[Def.unitType].Cost<1000&&Def.morale>-3){Def.morale-=1}};
	if(hasCertainTrait(Atk.unitType,"Inflaming")){if(Def.morale<3){Def.morale+=1}};



	if(HypoLifeA>0){
	MarkerMap[Atk.x][Atk.y]=0;
	document.getElementById("Marker "+(Atk.x+1-StandardX)+"X"+(Atk.y+1-StandardY)).style.visibility="hidden";
	HitAnimStyle="Standard";
	if(hasCertainTrait(Atk.unitType,"Supply Distribution")){HitAnimStyle="Supply"};
	if(hasCertainTrait(Atk.unitType,"Dispersion")){HitAnimStyle="Gaswave"};
	if(hasCertainTrait(Atk.unitType,"Streamblast")){HitAnimStyle="Neutron Wave"};
	//if(Atk.x>=StandardX&&Atk.x<StandardX+Map.length&&Atk.y>=StandardY&&Atk.y<StandardY+Map[0].length){if(!isIntercepted){AttackingAnimation(Attacker)}else{setTimeout(AttackingAnimation, 800, Attacker)}};
	//if(Def.x>=StandardX&&Def.x<StandardX+Map.length&&Def.y>=StandardY&&Def.y<StandardY+Map[0].length){if(!isIntercepted){HitAnimation(Defender,HitAnimStyle)}else{setTimeout(HitAnimation, 800, Defender, HitAnimStyle)}};

	if(HitAnimStyle=="Standard" || HitAnimStyle=="Supply"){HypoLifeE-=Damage;
	}else if(HitAnimStyle=="Gaswave"){
		for(let x=Math.max(0,Def.x-1); x<=Math.min(Map.length-1,Def.x+1);x++){for(let y=Math.max(0,Def.y-1); y<=Math.min(Map[0].length-1,Def.y+1); y++){
			//SplashAttack(Atk,x,y);
		}};

	}else if(HitAnimStyle=="Neutron Wave"){
		LaserVar=0;
		if(Def.x<Atk.x){LaserVar=1;LaserConstX=-1;LaserConstY=0};
		if(Def.x>Atk.x){LaserVar=3;LaserConstX=1;LaserConstY=0};
		if(Def.y>Atk.y){LaserVar=2;LaserConstX=0;LaserConstY=1};
		if(Def.y<Atk.y){LaserVar=4;LaserConstX=0;LaserConstY=-1};
		for(let l=1; l<=7; l++){
			if(Atk.x+l*LaserConstX<Map.length && Atk.y+l*LaserConstY<Map[0].length && Atk.x+l*LaserConstX>=0 && Atk.y+l*LaserConstY>=0){//SplashAttack(Atk,Atk.x+l*LaserConstX,Atk.y+l*LaserConstY)
		};
		};

	}else if(HitAnimStyle=="Antimatter"){};

		//ScoutVicinity(Atk.x,Atk.y);
		/*LastMove.Uncloaked=AdjacentCloakers;
		if(!rostermap[Atk.x][Atk.y].isCloaked){document.getElementById("Entity "+(Atk.x+1)+"X"+(Atk.y+1)).style.filter=Factions[Atk.faction].ChromaCode;};
		for(let c=0;c<AdjacentCloakers.length;c++){
		if(AdjacentCloakers[c]==1){document.getElementById("Entity "+(Atk.x)+"X"+(Atk.y+1)).style.filter=Factions[rostermap[Atk.x-1][Atk.y].faction].ChromaCode};
		if(AdjacentCloakers[c]==2){document.getElementById("Entity "+(Atk.x+1)+"X"+(Atk.y+2)).style.filter=Factions[rostermap[Atk.x][Atk.y+1].faction].ChromaCode};		
		if(AdjacentCloakers[c]==3){document.getElementById("Entity "+(Atk.x+2)+"X"+(Atk.y+1)).style.filter=Factions[rostermap[Atk.x+1][Atk.y].faction].ChromaCode};
		if(AdjacentCloakers[c]==4){document.getElementById("Entity "+(Atk.x+1)+"X"+(Atk.y)).style.filter=Factions[rostermap[Atk.x][Atk.y-1].faction].ChromaCode};
			};*/

	//if(hasCertainTrait(Atk.unitType,"Absorber")){let HealIndex=Math.min(Damage,Math.abs(Def.life),Units[Atk.unitType].HP-Atk.life); Atk.life+=HealIndex};
	if(Def.life>Units[Def.unitType].HP){Def.life=Units[Def.unitType].HP};
	};

	if(hasCertainTrait(Atk.unitType,"Self-Destruct")){Atk.life=0;canCounterattack=false};
	if(HypoLifeA<=0){ActionRegister.Liquidate=Atk};
	
	if(HypoLifeE<=0){
		//let canEncore=false;
		ActionRegister.Liquidate=Def;
		//if(hasCertainTrait(Atk.unitType,"Bewegungskrieg")&&Atk.canEncore){canEncore=true;Atk.canEncore=false};
		//alert(Atk.x+" "+Atk.y);
		//if(canEncore){MarkerMap[Atk.x][Atk.y]=true;
		//document.getElementById("Marker "+(Atk.x+1-StandardX)+"X"+(Atk.y+1-StandardY)).style.visibility="visible";}
	}else{
		//Counterattack(Defender,Attacker)
		if(dist<Def.minR*Def.minR){canCounterattack=false};
		if(dist>Def.maxR*Def.maxR){canCounterattack=false};
		//alert(Atk.MaxRange);
		if(hasCertainTrait(Atk.unitType,"Mobile Battery") && Units[Atk.unitType].MaxRange>1 && !hasCertainTrait(Def.unitType,"Mobile Battery")){canCounterattack=false};
		if(hasCertainTrait(Def.unitType,"Self-Destruct")){canCounterattack=false};
		if(Def.damageType=="None"){canCounterattack=false};
		if(isIntercepted){canCounterattack=false};
		//if(false){canCounterattack=false};
		if(canCounterattack){
			ActionRegister.Counter=Def;
		//setTimeout(Counterattack, 800, Defender, Attacker);};

	}};

	//EvaluateDynamicEvent('Action','null');
	
	if(Atk.isVized){let ShouldProbablyCheck=false;
		for(let l=0; l<Constants.Defeat.length; l++){if(Constants.Defeat[l]==Defender && Def.life<=0){ShouldProbablyCheck=true}};
		for(let l=0; l<Constants.Protect.length; l++){if(Constants.Protect[l]==Attacker && Atk.life<=0){ShouldProbablyCheck=true}};
		if(Map.length*Map[0].length<=1000){ShouldProbablyCheck=true};
		ShouldProbablyCheck=false;
		if(ShouldProbablyCheck){Inspection(Turn,Constants,Roster);Atk.isVized=false}}



	};
function AnalyseSquare(entityType,X,Y){
	
	//index=23;
	if(entityType=="Tile"){
		index=Map[X][Y];
		//if(index>9 && index<13){ActiveIndustrialNode={X:X,Y:Y};LaunchRecruitmentPanel(index-9);};
		HighlightedEntity=Terrain[index];
		LocalBiome=BiomeMap[X][Y];
		if(LocalizationMap[X][Y]==0){document.getElementById("DetBarName").innerHTML=Language.TerrainName[index];document.getElementById("DetBarDescription").innerHTML=Language.TerrainDesc[index];}
		else{document.getElementById("DetBarName").innerHTML=LocalizationMap[X][Y].name;document.getElementById("DetBarDescription").innerHTML=LocalizationMap[X][Y].description;};
		document.getElementById("DetBar").src="Assets/Miscellaneous/TerrainDetailBar.PNG";
		document.getElementById("DetBarDescription").style.width="350px";
		document.getElementById("Icon").style.visibility="inherit";
		document.getElementById("IconMesh").style.visibility="hidden";
		document.getElementById("Icon").src="Assets/Tiles/"+Terrain[index].name+".PNG";
		document.getElementById("Icon").style.filter="hue-rotate(0deg) saturate(100%) brightness(100%)";
		if(Terrain[index].Urbanistics>=2){document.getElementById("Icon").style.filter=Factions[ControlMap[X][Y]].ChromaCode};
		document.getElementById("Health").style.visibility="hidden";
		document.getElementById("Damage").style.visibility="hidden";
		document.getElementById("Movement").style.visibility="hidden";
		document.getElementById("Biome").style.visibility="inherit";
		document.getElementById("Biome").src="Assets/Traits/"+BiomeRegistry[LocalBiome].Nominator+".PNG";
		if(LocalBiome==1){document.getElementById("Biome").src="Assets/Traits/Temperate.PNG"};
		if(Terrain[index].tag1==""){document.getElementById("Trait1").src=""}else{document.getElementById("Trait1").src="Assets/Traits/"+Terrain[index].tag1+".PNG";};
		if(Terrain[index].tag2==""){document.getElementById("Trait2").src=""}else{document.getElementById("Trait2").src="Assets/Traits/"+Terrain[index].tag2+".PNG";};		
		if(Terrain[index].tag3==""){document.getElementById("Trait3").src=""}else{document.getElementById("Trait3").src="Assets/Traits/"+Terrain[index].tag3+".PNG";};
		if(Terrain[index].tag4==""){document.getElementById("Trait4").src=""}else{document.getElementById("Trait4").src="Assets/Traits/"+Terrain[index].tag4+".PNG";};
		
	};

	if(entityType=="Unit"){
		//alert(X+" "+Y);
		index=rostermap[X][Y];
		var unit=index;
		HighlightedEntity=Units[unit.unitType];
		var armorindex=0;
		if(unit.armor=="Light"){armorindex=1}else if(unit.armor=="Medium"){armorindex=2}else if(unit.armor=="Heavy"){armorindex=3};
		var weaponindex=0;
		if(unit.damageType=="Light"){weaponindex=1;}else if(unit.damageType=="Medium"){weaponindex=2;}else if(unit.damageType=="Heavy"){weaponindex=3;}else{weaponindex=4;};
		var movementindex=0;
		if(unit.movementType=="Stationary"){movementindex=1;}else if(unit.movementType=="Foot"){movementindex=2;}else if(unit.movementType=="Wheeled"){movementindex=3;}else if(unit.movementType=="Tracked"){movementindex=4;}else if(unit.movementType=="Flight"){movementindex=5;}else if(unit.movementType=="Rudder"){movementindex=6;}else if(unit.movementType=="Heavy Rudder"){movementindex=7;}else if(unit.movementType=="Amphibious"){movementindex=8;};
		
		//alert(movementindex);
		document.getElementById("Icon").style.visibility="inherit";
		document.getElementById("IconMesh").style.visibility="inherit";
		document.getElementById("Icon").src="Assets/Units/Static/"+Units[unit.unitType].shortname+"2.PNG";
		document.getElementById("Icon").style.filter=Factions[unit.faction].ChromaCode;
		if(!Units[unit.unitType].MLPR??false){document.getElementById("IconMesh").src="Assets/Units/StaticMeshes/"+Units[unit.unitType].shortname+"Mesh2.PNG"}else{document.getElementById("IconMesh").src="Assets/Miscellaneous/Nothing.PNG"};

		document.getElementById("HPHeader").innerHTML=Language.SystemTerms[44];
		document.getElementById("DamageHeader").innerHTML=Language.SystemTerms[45];
		document.getElementById("MovementHeader").innerHTML=Language.SystemTerms[46];

		//document.getElementById("DetBarName").innerHTML=Units[unit.unitType].name;
		//alert(Language.LanguageComment);
		let Name=Language.UnitNames[unit.unitType];
		if(unit.hasSpecialName??0!=0){Name=Language.UnitSpecialNames[unit.hasSpecialName]};
		if(unit.hasCustomName??0!=0){Name=unit.hasCustomName};
		Name=rostermap[X][Y].name;
		//alert(Name);
		let Desc=Language.UnitDesc[unit.unitType];
		if(unit.hasSpecialDesc??0!=0){Desc=Language.UnitSpecialDesc[unit.hasSpecialDesc]};
		if(unit.hasCustomDesc??0!=0){Desc=unit.hasCustomDesc};
		Desc=rostermap[X][Y].description;
		document.getElementById("DetBarName").innerHTML=Name;
		document.getElementById("DetBarDescription").style.width="210px";
		document.getElementById("DetBarDescription").innerHTML=Desc;
		document.getElementById("DetBar").src="Assets/Miscellaneous/UnitDetailBar.PNG";

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
		
		if(Units[unit.unitType].tag1==""){document.getElementById("Trait1").src=""}else{document.getElementById("Trait1").src="Assets/Traits/"+Units[unit.unitType].tag1+".PNG";};
		if(Units[unit.unitType].tag2==""){document.getElementById("Trait2").src=""}else{document.getElementById("Trait2").src="Assets/Traits/"+Units[unit.unitType].tag2+".PNG";};		
		if(Units[unit.unitType].tag3==""){document.getElementById("Trait3").src=""}else{document.getElementById("Trait3").src="Assets/Traits/"+Units[unit.unitType].tag3+".PNG";};
		if(Units[unit.unitType].tag4==""){document.getElementById("Trait4").src=""}else{document.getElementById("Trait4").src="Assets/Traits/"+Units[unit.unitType].tag4+".PNG";};


	};

	if(entityType=="Structure"){};};
function AnalyzeSpecification(Index) {
		document.getElementById("SpecificationText").innerHTML=Language.SystemTerms[83+Index];
	if(Index==1){document.getElementById("SpecificationText").innerHTML+=((Campaigns[ChosenNation-1][ChosenChapter-1][ChosenMission-1].Constants.Funds??[0,0])[1]+" "+Language.SystemTerms[92])};
	if(Index==2){document.getElementById("SpecificationText").innerHTML+=(Campaigns[ChosenNation-1][ChosenChapter-1][ChosenMission-1].Constants.Survival+" "+Language.SystemTerms[93])};
	if(Index==3){document.getElementById("SpecificationText").innerHTML+=(Campaigns[ChosenNation-1][ChosenChapter-1][ChosenMission-1].Constants.TimeLimit+" "+Language.SystemTerms[93])};};
function AttackAnimation(Unit){
	
	let unit=MapRoster[Unit];
	//alert(unit.unitType);
	//alert(unit.direction);
	battalion.soundPlayer.playSound(Units[unit.unitType].shortname + "Attack");

	let cellX=Units[unit.unitType].AttackBoxX ?? 56;
	let cellY=Units[unit.unitType].AttackBoxY ?? 56;
	//alert(cellX + " " + cellY);
	let lat=unit.x;
	let long=unit.y;
	let direction=unit.direction;
	//alert(direction);
	document.getElementById("Entity "+(unit.x+1-StandardX)+"X"+(unit.y+1-StandardY)).src="Assets/Units/Static/"+Units[unit.unitType].shortname+direction+".PNG";
	castTime=setInterval(Act,100);
	frame=0;

	function Act(){
	frame++;
		
	for(var candy=1; candy<=8; candy++){
	
	var top=(frame-2)*cellY+"px";
	var right=(direction)*cellX+"px";
	var bottom=(frame-1)*cellY+"px";
	var left=(direction-1)*cellX+"px";
	var offsetlat=-cellY*(frame-2)+"px";
	var offsetlong=(direction-1)*-cellX+(Units[unit.unitType].AttackOffsetX ?? [0,0,0,0,0])[direction]+"px";
	//alert(Units[unit.unitType].AttackSpriteOffset[direction] ?? 0);
	coord="rect("+top+","+right+","+bottom+","+left+")";

	//dynamic unit registry needed, else the function crashes
	document.getElementById("Entity "+(unit.x+1-StandardX)+"X"+(unit.y+1-StandardY)).src="Assets/Units/Attack/"+Units[unit.unitType].shortname+"Attack.PNG";
	document.getElementById("Entity "+(unit.x+1-StandardX)+"X"+(unit.y+1-StandardY)).style.clip=coord;
	document.getElementById("Entity "+(unit.x+1-StandardX)+"X"+(unit.y+1-StandardY)).style.top=offsetlat;
	document.getElementById("Entity "+(unit.x+1-StandardX)+"X"+(unit.y+1-StandardY)).style.left=offsetlong;
	

	};

	if(frame==9){clearInterval(castTime);
	document.getElementById("Entity "+(unit.x+1-StandardX)+"X"+(unit.y+1-StandardY)).src="Assets/Units/Static/"+Units[unit.unitType].shortname+direction+".PNG";
	document.getElementById("Entity "+(unit.x+1-StandardX)+"X"+(unit.y+1-StandardY)).style.top=0+"px";	
	document.getElementById("Entity "+(unit.x+1-StandardX)+"X"+(unit.y+1-StandardY)).style.left=0+"px";
	document.getElementById("Entity "+(unit.x+1-StandardX)+"X"+(unit.y+1-StandardY)).style.clip="auto";

	};
	};};
function AttackingAnimation(Unit){
	let unit=MapRoster[Unit];
	let direction=unit.direction;

	battalion.soundPlayer.playSound(Units[unit.unitType].shortname + "Attack");

	//console.log(unit.faction);
	document.getElementById("EntityCore "+(unit.x+1)+"X"+(unit.y+1)).src="Assets/Units/Attack/"+Units[unit.unitType].shortname+"Attack"+direction+".GIF";
	if(!Units[unit.unitType].MLPR??false){document.getElementById("EntityMesh "+(unit.x+1)+"X"+(unit.y+1)).src="Assets/Units/AttackMeshes/"+Units[unit.unitType].shortname+"Attack"+"Mesh"+direction+".GIF";}else{document.getElementById("EntityMesh "+(unit.x+1)+"X"+(unit.y+1)).style.visibility="hidden"};
	document.getElementById("Entity "+(unit.x+1)+"X"+(unit.y+1)).style.left=(Units[unit.unitType].AttackOffsetX ?? [0,0,0,0,0])[unit.direction]+"px";
	document.getElementById("Entity "+(unit.x+1)+"X"+(unit.y+1)).style.top=(Units[unit.unitType].AttackOffsetY ?? [0,0,0,0,0])[unit.direction]+"px";
	document.getElementById("Entity "+(unit.x+1)+"X"+(unit.y+1)).style.zIndex=5;

	let castTime=setInterval(Act,35);
	let frame=0;

	function Act(){
	frame++;

	if(frame==17){clearInterval(castTime);
	document.getElementById("EntityCore "+(unit.x+1)+"X"+(unit.y+1)).src="Assets/Units/Static/"+Units[unit.unitType].shortname+direction+".PNG";
	if(!Units[unit.unitType].MLPR??false){document.getElementById("EntityMesh "+(unit.x+1)+"X"+(unit.y+1)).src="Assets/Units/StaticMeshes/"+Units[unit.unitType].shortname+"Mesh"+direction+".PNG";}else{document.getElementById("EntityMesh "+(unit.x+1)+"X"+(unit.y+1)).style.visibility="hidden"};
	document.getElementById("Entity "+(unit.x+1)+"X"+(unit.y+1)).style.left=(Units[unit.unitType].StaticOffsetX ?? [0,0,0,0,0])[unit.direction]+"px";
	document.getElementById("Entity "+(unit.x+1)+"X"+(unit.y+1)).style.top=(Units[unit.unitType].StaticOffsetY ?? [0,0,0,0,0])[unit.direction]+"px";
	document.getElementById("Entity "+(unit.x+1)+"X"+(unit.y+1)).style.zIndex=4;
		};

	};};
function Battle_Lost(){
	//BattleEnd=true;
	Resolution=true;
	Victory=false;
	//alert(Language.DefeatInterjections[3].length);
	if(BattleEnd){if(DialogueChoice){launchDialogueBloc(Interjection,0);}else{setTimeout(EndBattle,1000)};};
	BattleEnd=false;

	document.getElementById("EndBattleTitle").innerHTML=Language.SystemTerms[124];	};
function Battle_Won(){
	//BattleEnd=true;
	Resolution=true;
	Victory=true;
	
	if(BattleEnd){if(DialogueChoice){launchDialogueBloc(Postlogue,0);}else{setTimeout(EndBattle,1000)};};
	BattleEnd=false;

	document.getElementById("EndBattleTitle").innerHTML=Language.SystemTerms[123];};
function Build(Structure){
	//alert(hasCertainTrait(Structure,"Seabound"));
	if(YourMoney<Units[Structure].Cost || (!CanBuildCoastal&&hasCertainTrait(Structure,"Seabound"))){alert("Cannot build");
	}else{
		YourMoney-=Units[Structure].Cost;
		document.getElementById('BuildingConstructionPanel').style.visibility="hidden";

		battalion.soundPlayer.playSound("Thud");

		let X=UnitIcs;
		let Y=UnitIgrec;
		let Santier={
			name: Units[0].name,
			description: Language.UnitDesc[0],
			ID:"Unit "+MapRoster.length,
			index:MapRoster.length-1,
			x:X, 
			y:Y, 
			unitType:0,
			faction:PlayerChoiceFaction,
			coallition:Factions[PlayerChoiceFaction].faction,
			damage:Units[0].Attack, 
			damageType:Units[0].Weapon,
			minR:Units[0].MinRange,
			maxR:Units[0].MaxRange, 
			life:Units[0].HP, 
			armor:Units[0].Armor, 
			speed:Units[0].Speed, 
			movementType:Units[0].Movement, 
			morale:0,
			direction:3,
			building:Structure,
			constructionTime:Units[Structure].Timer
			};

			MapRoster[MapRoster.length]=Santier;
			rostermap[X][Y]=Santier;
			document.getElementById('Entity '+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.visibility="visible";
			document.getElementById('EntityCore '+(X+1-StandardX)+"X"+(Y+1-StandardY)).src="Assets/Units/Static/Skele3.PNG";

	}};
function BuildingComplete(Index){
	let type=MapRoster[Index].building;
	let Building={
			name: Units[type].name,
			description: Language.UnitDesc[type],
			ID:"Unit "+MapRoster.length,
			index:Index,
			x:MapRoster[Index].x, 
			y:MapRoster[Index].y, 
			unitType:type,
			faction:PlayerChoiceFaction,
			coallition:Factions[PlayerChoiceFaction].faction,
			damage:Units[type].Attack, 
			damageType:Units[type].Weapon,
			minR:Units[type].MinRange,
			maxR:Units[type].MaxRange, 
			life:Units[type].HP, 
			armor:Units[type].Armor, 
			speed:Units[type].Speed, 
			movementType:Units[type].Movement, 
			morale:0,
			direction:3
		};
		//alert(Building.x+" "+Building.y);
		MapRoster[Index]=Building;
		rostermap[Building.x][Building.y]=Building;

		if(Building.x>=StandardX && Building.x<StandardX+10 && Building.y>=StandardY && Building.y<StandardY+10){document.getElementById("EntityCore "+(Building.x+2-StandardX)+"X"+(Building.y+2-StandardY)).src="Assets/Units/Static/"+Units[Building.unitType].shortname+"3.PNG";
			document.getElementById("EntityCore "+(Building.x+2-StandardX)+"X"+(Building.y+2-StandardY)).style.filter=Factions[PlayerChoiceFaction].ChromaCode;

	};

	SubRosters[0][SubRosters[0].length]=Building;};
function Buttsecks(){document.getElementById('Disclaimer').style.visibility='hidden';};
function CallCampaignScreen(){

	Emblem="Assets/Emblems/Emblem"+Factions[ChosenNation].Preffix+".PNG";
	NonEmblem="Assets/Emblems/NONEmblem"+Factions[ChosenNation].Preffix+".PNG";
	ChosenMission=1;
	ChooseChapter(1);
	let UnlockedLevels=[true,false,false,false,false];
	for(let j=0;j<=3;j++){let littledicky= Campaigns[ChosenNation-1][ChosenChapter-1][j].Finished??false;
	UnlockedLevels[j+2]=littledicky;
	if(littledicky){document.getElementById("Emblem"+(j+2)).src=Emblem;
	//document.getElementById("Emblem"+(j+2)).onClick="alert('Hooray!')";
	}else{document.getElementById("Emblem"+(j+2)).src=NonEmblem;};};
	document.getElementById("EmblemSlot").style.left="0px";
	document.getElementById("ChapterPanelPointer").style.top="-6px";
	document.getElementById("CampaignSelectionScreen").style.visibility="hidden";
	document.getElementById("NationDetails").style.visibility="hidden";
	document.getElementById("CampaignScreen").style.visibility="visible";
	document.getElementById('CampaignName').innerHTML=Language.ChapterName[ChosenNation-1][0];
	document.getElementById("Chp1plaque").src="Assets/Miscellaneous/Plaque.PNG";
	document.getElementById("Emblem1").src=Emblem;
	document.getElementById('MissionDescription').innerHTML=Language.MissionDesc[ChosenNation][ChosenChapter-1][0];
	document.getElementById('MissionName').innerHTML=Language.MissionName[ChosenNation-1][ChosenChapter-1][0];
	document.getElementById("LevelStartButton").innerHTML=Language.StartButtonTexts[ChosenNation-1];
	for(let i=1; i<8; i++){
	document.getElementById("Chapter "+i).style.visibility="hidden";
	if(i<=Campaigns[ChosenNation-1].length){document.getElementById("Chapter "+i).style.visibility="inherit";
		//if(i>1){document.getElementById("Chapter "+i).src="Assets/Miscellaneous/NonPlaque.PNG"};
		if(Campaigns[ChosenNation-1][i-1][4].Finished==true && i<7){
			document.getElementById("Chp"+(i+1)+"plaque").src="Assets/Miscellaneous/Plaque.PNG";}
			else if(i<Campaigns[ChosenNation-1].length){document.getElementById("Chp"+(i+1)+"plaque").src="Assets/Miscellaneous/NonPlaque.PNG";};
		};
	};


	document.getElementById("SpecificationText").innerHTML=Language.SystemTerms[91];
	if((Campaigns[ChosenNation-1][ChosenChapter-1][ChosenMission-1].Constants.Funds??[0,0])[1]>0){document.getElementById("CampaignSpecification1").style.visibility="inherit"}else{document.getElementById("CampaignSpecification1").style.visibility="hidden"};
	if(Campaigns[ChosenNation-1][ChosenChapter-1][ChosenMission-1].Constants.Survival<77777){document.getElementById("CampaignSpecification2").style.visibility="inherit"}else{document.getElementById("CampaignSpecification2").style.visibility="hidden"};
	if(Campaigns[ChosenNation-1][ChosenChapter-1][ChosenMission-1].Constants.TimeLimit<77777){document.getElementById("CampaignSpecification3").style.visibility="inherit"}else{document.getElementById("CampaignSpecification3").style.visibility="hidden"};
	if(Campaigns[ChosenNation-1][ChosenChapter-1][ChosenMission-1].Constants.Defend.length>0){document.getElementById("CampaignSpecification4").style.visibility="inherit"}else{document.getElementById("CampaignSpecification4").style.visibility="hidden"};
	if(Campaigns[ChosenNation-1][ChosenChapter-1][ChosenMission-1].Constants.Capture.length>0){document.getElementById("CampaignSpecification5").style.visibility="inherit"}else{document.getElementById("CampaignSpecification5").style.visibility="hidden"};
	if(Campaigns[ChosenNation-1][ChosenChapter-1][ChosenMission-1].Constants.Protect.length>0){document.getElementById("CampaignSpecification6").style.visibility="inherit"}else{document.getElementById("CampaignSpecification6").style.visibility="hidden"};
	if(Campaigns[ChosenNation-1][ChosenChapter-1][ChosenMission-1].Constants.Defeat.length>0){document.getElementById("CampaignSpecification7").style.visibility="inherit"}else{document.getElementById("CampaignSpecification7").style.visibility="hidden"};};
function CallInterlogue(){
	document.getElementById("InterlogueScreen").style.visibility="visible";
	document.getElementById("InterlogueText").innerHTML=Language.Interlogues[ChosenNation-1][ChosenChapter-1];
	document.getElementById("InterlogueImage").src="Assets/Paralogues/"+ChosenNation+"X"+ChosenChapter+".JPG";};
function CallPreloader(){
	document.getElementById("Disclaimer2").style.visibility="visible";
	Aphorism=Math.ceil(21*Math.random());
	//Aphorism=14;
	document.getElementById("AphorismIllustration").src="Assets/Aphorisms/Aphorism"+Aphorism+".PNG";
	document.getElementById("AphorismText").innerHTML='"'+Language.InitializerAphorisms[Aphorism*2]+'"'+"<br><br>"+Language.InitializerAphorisms[Aphorism*2+1];
	document.getElementById("PreloaderSplash").innerHTML=Language.LoaderSoundbites[Math.floor(Math.random()*Language.LoaderSoundbites.length)];

	let PreloaderFrame=0;
	let Loader=window.setInterval(Preload,50);

	function Preload(){if(PreloaderFrame<35){PreloaderFrame++};
	if(PreloaderFrame%7==0){document.getElementById("PreloaderSplash").innerHTML=Language.LoaderSoundbites[Math.floor(Math.random()*Language.LoaderSoundbites.length)]};
	document.getElementById("PreloaderBar").style.width=PreloaderFrame*20+"px";

	if(PreloaderFrame==35){clearInterval(Loader)}};};
function castMap(){
	//CallPreloader();
	for(let i=1;i<=Map.length;i++){
		for(let j=1;j<=Map[0].length;j++){
			var Slot=document.createElement("div");
			var Tile=document.createElement("img");
			var Entity=document.createElement("div");
			var EntityCore=document.createElement("img");
			var EntityMesh=document.createElement("img");
			var Structure=document.createElement("img");
			var Marker=document.createElement("img");
			var Canceler=document.createElement("img");
			var Flag=document.createElement("img");
			var Badge=document.createElement("img");
			var Cargo=document.createElement("img");
			var HealthBar=document.createElement("img");
			var HealthBarContainer=document.createElement("img");
			var EdgeA=document.createElement("img");
			var EdgeB=document.createElement("img");
			var EdgeC=document.createElement("img");
			var EdgeD=document.createElement("img");
			var BLARG=document.createElement("img");

			Slot.id="Slot "+i+"X"+j;
			Tile.id="Tile "+i+"X"+j;
			Entity.id="Entity "+i+"X"+j;
			EntityCore.id="EntityCore "+i+"X"+j;
			EntityMesh.id="EntityMesh "+i+"X"+j;
			Structure.id="Structure "+i+"X"+j;
			Marker.id="Marker "+i+"X"+j;
			Canceler.id="Canceler "+i+"X"+j;
			Flag.id="Flag "+i+"X"+j;
			Badge.id="Badge "+i+"X"+j;
			Cargo.id="Cargo "+i+"X"+j;
			HealthBar.id="HPBar "+i+"X"+j;
			HealthBarContainer.id="HPContainer "+i+"X"+j;
			EdgeA.id="A "+i+"X"+j;
			EdgeB.id="B "+i+"X"+j;
			EdgeC.id="C "+i+"X"+j;
			EdgeD.id="D "+i+"X"+j;
			BLARG.id="BLARG "+i+"X"+j;
			Slot.style.position="absolute";
			Slot.style.top=(i-1)*56+"px";
			Slot.style.left=(j-1)*56+"px";
			Slot.style.width="56px";
			Slot.style.height="56px";
			Slot.style.cursor="url('Assets/Miscellaneous/Cursor.png') 0 0, auto";
			//Slot.style.zIndex=1;
			Tile.style.zIndex=3;
			Entity.style.zIndex=5;
			EntityCore.style.zIndex=3;
			EntityMesh.style.zIndex=3;
			Structure.style.zIndex=4;
			Marker.style.zIndex=5;
			Canceler.style.zIndex=5;
			Flag.style.zIndex=3;
			Badge.style.zIndex=5;
			Cargo.style.zIndex=5;
			HealthBar.style.zIndex=5;
			HealthBarContainer.style.zIndex=5;
			EdgeA.style.zIndex=3;
			EdgeB.style.zIndex=3;
			EdgeC.style.zIndex=3;
			EdgeD.style.zIndex=3;
			BLARG.style.zIndex=5;
			Tile.style.position="absolute";
			Entity.style.position="absolute";
			EntityCore.style.position="absolute";
			EntityMesh.style.position="absolute";
			Structure.style.position="absolute";
			Marker.style.position="absolute";
			Canceler.style.position="absolute";
			Flag.style.position="absolute";
			Badge.style.position="absolute";
			Cargo.style.position="absolute";
			HealthBar.style.position="absolute";
			HealthBarContainer.style.position="absolute";
			EdgeA.style.position="absolute";
			EdgeB.style.position="absolute";
			EdgeC.style.position="absolute";
			EdgeD.style.position="absolute";
			BLARG.style.position="absolute";
			Entity.style.visibility="hidden";
			EntityCore.style.visibility="inherit";
			EntityMesh.style.visibility="inherit";
			Marker.style.visibility="hidden";
			Canceler.style.visibility="hidden";
			Badge.style.visibility="hidden";
			Cargo.style.visibility="hidden";
			HealthBar.style.visibility="hidden";
			HealthBarContainer.style.visibility="hidden";
			EdgeA.style.visibility="hidden";
			EdgeB.style.visibility="hidden";
			EdgeC.style.visibility="hidden";
			EdgeD.style.visibility="hidden";
			Badge.src="Assets/Traits/Morale0.PNG";
			HealthBar.src="Assets/Miscellaneous/HealthBarFiller.png";
			HealthBarContainer.src="Assets/Miscellaneous/HealthBarFrame.png";
			EdgeA.src="Assets/Tiles/EdgeA.PNG";
			EdgeB.src="Assets/Tiles/EdgeB.PNG";
			EdgeC.src="Assets/Tiles/EdgeC.PNG";
			EdgeD.src="Assets/Tiles/EdgeD.PNG";
			Entity.style.left="0px";
			EntityCore.style.left="0px";
			EntityMesh.style.left="0px";
			Entity.style.filter="opacity(100%)";
			Structure.style.left="0px";
			Canceler.style.left="8px";
			Flag.style.left="0px";
			Badge.style.left="18px";
			Cargo.style.left="14px";
			HealthBar.style.left="8px";
			HealthBarContainer.style.left="8px";
			EdgeA.style.left="0px";
			EdgeB.style.left="39px";
			EdgeC.style.left="0px";
			EdgeD.style.left="42px";
			Entity.style.top="0px";
			EntityCore.style.top="0px";
			EntityMesh.style.top="0px";
			Structure.style.top="0px";
			Canceler.style.top="8px";
			Flag.style.top="0px";
			Badge.style.top="-10px";
			Cargo.style.top="14px";
			Cargo.style.width="28px";
			Cargo.style.height="28px";
			HealthBar.style.top="42px";
			HealthBarContainer.style.top="42px";
			EdgeA.style.top="0px";
			EdgeB.style.top="0px";
			EdgeC.style.top="49px";
			EdgeD.style.top="51px";
			Marker.src="Assets/Miscellaneous/Marker.PNG";
			Canceler.src="Assets/Miscellaneous/SelectionCanceller.PNG";

			Slot.addEventListener("click", function(){
				document.getElementById("SpecialActionPanel").style.visibility="hidden";

			});

			Slot.addEventListener("contextmenu", function(){
				let index=Map[i-1][j-1];
				let owner=0;
				
				//alert(ControlMap);
				if(ControlMap!=0){owner=ControlMap[i-1][j-1];}else{owner=0};
				
				let entity=rostermap[i-1][j-1];
				let isWarmachine=false;
				if(entity!=0){BizzareMoneyPointer=Math.round(Units[rostermap[i-1][j-1].unitType].Cost/2)};
				if(entity.faction==PlayerChoiceFaction && hasCertainTrait(entity.unitType,"Tank Pooper")){isWarmachine=true;index=10};

				if((index<10 || index>12 || owner!=PlayerChoiceFaction)&&!isWarmachine){LaunchSpecialOptionPanel(i-1,j-1)}else{ActiveIndustrialNode={X:i-1,Y:j-1};
				LaunchRecruitmentPanel(index-9);};
				
			});

			Tile.addEventListener("click", function(){
				//alert("{id:2, faction:5, direction:1, x:"+(i-1) + ", y:" + (j-1)+", morale:0, hpModifier:0},");
								AnalyseSquare('Tile',i-1,j-1)});

			Entity.addEventListener("mouseover", function(){ToggleHealthBar(i,j); ToggleMoraleBadge(i,j)});
			Entity.addEventListener("mouseout", function(){document.getElementById("HPContainer "+i+"X"+j).style.visibility="hidden";document.getElementById("HPBar "+i+"X"+j).style.visibility="hidden";document.getElementById("Badge "+i+"X"+j).style.visibility='hidden'; document.getElementById("Cargo "+i+"X"+j).style.visibility='hidden';});			
			Entity.addEventListener("click", function(){AnalyseSquare('Unit',i-1,j-1)});
			Structure.addEventListener("click", function(){AnalyseSquare('Tile',i-1,j-1)});
			Marker.addEventListener("click", function(){if(!isAITurn){

				if(ChosenUnit.definite){RemoveKebabIMeanBlep();
				document.getElementById("Marker "+ChosenUnit.ics+"X"+ChosenUnit.igrec).style.visibility="visible";
				document.getElementById("Canceler "+ChosenUnit.ics+"X"+ChosenUnit.igrec).style.visibility="hidden";
				};
				
				AnalyseSquare('Unit',i-1,j-1);
				//alert((i+StandardX-1)+" "+(j+StandardY-1));
				document.getElementById("Marker "+i+"X"+j).style.visibility="hidden";
				document.getElementById("Canceler "+i+"X"+j).style.visibility="visible";
				ChosenUnit={ics:i,igrec:j,definite:true};
				if(rostermap[i-1+StandardX][j-1+StandardY].isCloaked??false){ChosenUnit.isCloaked=true}else{ChosenUnit.isCloaked=false};
				PI_Scouter(rostermap[i+StandardX-1][j+StandardY-1],Map);
			}});
			Marker.addEventListener("mouseover", function(){ToggleHealthBar(i,j); ToggleMoraleBadge(i,j)});
			Marker.addEventListener("mouseout", function(){document.getElementById("HPContainer "+i+"X"+j).style.visibility="hidden";document.getElementById("HPBar "+i+"X"+j).style.visibility="hidden";document.getElementById("Badge "+i+"X"+j).style.visibility='hidden'; document.getElementById("Cargo "+i+"X"+j).style.visibility='hidden'});
			Canceler.addEventListener("click", function(){
			document.getElementById("Marker "+i+"X"+j).style.visibility="visible";
			document.getElementById("Canceler "+i+"X"+j).style.visibility="hidden";
			RemoveKebabIMeanBlep();
			});


			Flag.addEventListener("click", function(){AnalyseSquare("Tile",i-1,j-1)});


			BLARG.addEventListener("mouseover",function(){
				let Blargcheck=true;
				//if(false){Blargcheck=false}
				if(Blargcheck){WBLARG(i,j)};

			});

			BLARG.addEventListener("click",function (){
				ChosenUnit.definite=false;

				document.getElementById('Canceler '+ChosenUnit.ics+"X"+ChosenUnit.igrec).style.visibility="hidden";
				//console.log(BLARG.length);
				let canAttack=false;
				if(rostermap[i+StandardX-1][j+StandardY-1]!=0){canAttack=true;
				if(Factions[rostermap[i+StandardX-1][j+StandardY-1].faction].faction==Factions[PlayerChoiceFaction].faction){canAttack=false};};
				

				MoveUnit(rostermap[ChosenUnit.ics-1+StandardX][ChosenUnit.igrec-1+StandardY].index , [i,j]);
				if(canAttack){document.getElementById("Ctep-"+(i-1)+"-"+(j-1)).click()};


				RemoveKebabIMeanBlep();
				//alert(rostermap[i+StandardX-1][j+StandardY-1].life);
				//if(rostermap[i+StandardX-1][j+StandardY-1]!=0){alert(i+" X "+j)};
			})

			document.getElementById("UnitMap").appendChild(Slot);
			document.getElementById(Slot.id).appendChild(Tile);
			document.getElementById(Slot.id).appendChild(Structure);
			document.getElementById(Slot.id).appendChild(Entity);
			document.getElementById(Entity.id).appendChild(EntityCore);
			document.getElementById(Entity.id).appendChild(EntityMesh);
			document.getElementById(Slot.id).appendChild(Marker);
			document.getElementById(Slot.id).appendChild(Canceler)
			document.getElementById(Slot.id).appendChild(Flag);
			document.getElementById(Slot.id).appendChild(Badge);
			document.getElementById(Slot.id).appendChild(Cargo);
			document.getElementById(Slot.id).appendChild(HealthBar);
			document.getElementById(Slot.id).appendChild(HealthBarContainer);
			document.getElementById(Slot.id).appendChild(EdgeA);
			document.getElementById(Slot.id).appendChild(EdgeB);
			document.getElementById(Slot.id).appendChild(EdgeC);
			document.getElementById(Slot.id).appendChild(EdgeD);
			document.getElementById(Slot.id).appendChild(BLARG);


			var RegionTile=document.createElement("div");
			var RegionColor=document.createElement("div");
			var RegionNexus=document.createElement("img");
			var RegionName=document.createElement("p");
			var RegionCapital=document.createElement("p");
			var BorderN=document.createElement("img");
			var BorderE=document.createElement("img");
			var BorderS=document.createElement("img");
			var BorderW=document.createElement("img");

			RegionTile.id="Regional Tile "+j+" "+i;
			RegionTile.style.position="absolute";
			RegionTile.style.zIndex=7;
			RegionTile.style.left=j*56-56+"px";
			RegionTile.style.top=i*56-56+"px";
			RegionTile.style.height="56px";
			RegionTile.style.width="56px";
			RegionTile.style.textAlign="center";

			RegionColor.id="Regional Color "+j+" "+i;
			RegionColor.style.position="absolute";
			RegionColor.style.height="56px";
			RegionColor.style.width="56px";
			RegionColor.style.top="0px";
			RegionColor.style.filter="opacity(35%)";

			RegionNexus.id="Regional Nexus "+j+" "+i;
			RegionNexus.style.position="absolute";
			RegionNexus.src="Assets/Miscellaneous/Region.PNG";
			RegionNexus.style.left="-4px";
			RegionNexus.style.top="-7px";
			RegionNexus.style.visibility="hidden";

			RegionName.id="Regional Name "+j+" "+i;
			RegionName.style.position="absolute";
			RegionName.style.visibility="hidden";
			RegionName.style.fontSize="10px";
			RegionName.style.color="red";
			RegionName.style.width="56px";
			RegionName.style.top="5px";
			RegionName.innerHTML="Name";

			RegionCapital.id="Regional Capital "+j+" "+i;
			RegionCapital.style.position="absolute";
			RegionCapital.style.visibility="hidden";
			RegionCapital.style.fontSize="10px";
			RegionCapital.style.color="red";
			RegionCapital.style.width="56px";
			RegionCapital.style.top="20px";
			RegionCapital.innerHTML="Capital";
			

			BorderN.src="Assets/Miscellaneous/RegionBorderN.PNG";
			BorderE.src="Assets/Miscellaneous/RegionBorderE.PNG";
			BorderS.src="Assets/Miscellaneous/RegionBorderS.PNG";
			BorderW.src="Assets/Miscellaneous/RegionBorderW.PNG";

			BorderN.id="NBorder "+j+"X"+i;
			BorderE.id="EBorder "+j+"X"+i;
			BorderS.id="SBorder "+j+"X"+i;
			BorderW.id="WBorder "+j+"X"+i;

			BorderN.style.position="absolute";
			BorderE.style.position="absolute";
			BorderS.style.position="absolute";
			BorderW.style.position="absolute";

			BorderN.style.left="0px";
			BorderE.style.left="0px";
			BorderS.style.left="0px";
			BorderW.style.left="0px";

			document.getElementById("RegionMap").appendChild(RegionTile);
			document.getElementById(RegionTile.id).appendChild(RegionColor);
			document.getElementById(RegionTile.id).appendChild(RegionNexus);
			document.getElementById(RegionTile.id).appendChild(RegionName);
			document.getElementById(RegionTile.id).appendChild(RegionCapital);
			document.getElementById(RegionTile.id).appendChild(BorderN);
			document.getElementById(RegionTile.id).appendChild(BorderE);
			document.getElementById(RegionTile.id).appendChild(BorderS);
			document.getElementById(RegionTile.id).appendChild(BorderW);








			};};};
function castMapMaker(){
	Factions=GenericFactions;
	document.getElementById("EditorMap").style.visibility="visible";
	document.getElementById("MapMold").style.visibility="hidden";
	document.getElementById("Main Menu").style.visibility="hidden";
	x=parseInt(document.getElementById("heigthinput").value);
	if(x>100){x=100};
	y=parseInt(document.getElementById("widthinput").value);
	if(y>100){y=100};
	x=Math.max(x,10);
	y=Math.max(y,10);

	document.getElementById("EditorWiPointer").innerHTML=y;
	document.getElementById("EditorHePointer").innerHTML=x;
	document.getElementById("TileContainer").style.height="560px";
	document.getElementById("TileContainer").style.width="560px";

	TerrainLedger=0;
	TerrainLedger_Biomes=[];
	TerrainLedger_LandFeatures=[];
	TerrainLedger_UrbanFeatures=[];
	TerrainLedger_WaterFeatures=[];
	TerrainLedger_Structures=[];
	TerrainLedger_Connectors=[];
	TerrainLedger_Other=[];

	for(let t=1; t<Terrain.length; t++){
		if(Terrain[t].BiomeIndex??false){TerrainLedger_Biomes[TerrainLedger_Biomes.length]=t};
		if(Terrain[t].Class=="LF" && Terrain[t].Urbanistics==0 && !(Terrain[t].BiomeIndex??false)){TerrainLedger_LandFeatures[TerrainLedger_LandFeatures.length]=t};
		if(Terrain[t].Urbanistics>0 && Terrain[t].Class!="S" && Terrain[t].Class!="MC" && Terrain[t].Class!="LA" && Terrain[t].Class!="WS"){TerrainLedger_UrbanFeatures[TerrainLedger_UrbanFeatures.length]=t};
		if(Terrain[t].Class=="WF" || Terrain[t].Class=="WE"){TerrainLedger_WaterFeatures[TerrainLedger_WaterFeatures.length]=t};
		if(Terrain[t].Class=="S" || Terrain[t].Class=="WS"){TerrainLedger_Structures[TerrainLedger_Structures.length]=t};
		if(Terrain[t].Class=="LA" || Terrain[t].Class=="B" || Terrain[t].Class=="WA" || Terrain[t].Class=="MC"){TerrainLedger_Connectors[TerrainLedger_Connectors.length]=t}
		};

	ToggleTileBlock(1);
		//alert(TerrainLedger)

	//EditorMapHandler
	EditorMap=[];
	EditorEntityMap=[];
	EditorBiomeMap=[];
	EditorControlMap=[];
	EditorRegionMap=[];
	Localization=[];

	TrackFillSwitch=false;

	for(let h=1;h<=10;h++){document.getElementById("EditorColorPicker"+h).style.filter=Factions[h].ChromaCode};

	for(let k=0; k<x; k++){
		for(j=0; j<y; j++){
		if(j==0){EditorMap[k]=[];
			EditorEntityMap[k]=[];
			EditorControlMap[k]=[];
			EditorRegionMap[k]=[]};
		EditorMap[k][j]=1;
		EditorEntityMap[k][j]=0;
		EditorControlMap[k][j]=0
		EditorRegionMap[k][j]=1};};
		//alert(EditorRegionMap);
	EditorRegionMap=JSON.parse(JSON.stringify(EditorRegionMap));
	CapitolNodeRegistry=JSON.parse(JSON.stringify(EditorRegionMap));

	EditorBiomeMap=JSON.parse(JSON.stringify(EditorMap));



	for(let i=0;i<x;i++){
		for(let j=0;j<y;j++){
			//MapMold[i][j]=ChosenTerrain;
			let Slot=document.createElement("div");
			let Tile=document.createElement("img");
			let Entity=document.createElement("div");
			let EntityCore=document.createElement("img");
			let EntityMesh=document.createElement("img");
			let Structure=document.createElement("img");
			let A=document.createElement("img");
			let B=document.createElement("img");
			let C=document.createElement("img");
			let D=document.createElement("img");
			Slot.id="Slot "+(i+1)+" X "+(j+1);
			Tile.id="Tile "+(i+1)+" X "+(j+1);
			Entity.id="Entity "+(i+1)+" X "+(j+1);
			EntityCore.id="EntityCore "+(i+1)+" X "+(j+1);
			EntityMesh.id="EntityMesh "+(i+1)+" X "+(j+1);
			Structure.id="Structure "+(i+1)+" X "+(j+1);
			A.id="a "+(i+1)+" X "+(j+1);
			B.id="b "+(i+1)+" X "+(j+1);
			C.id="c "+(i+1)+" X "+(j+1);
			D.id="d "+(i+1)+" X "+(j+1);
			Slot.style.position="absolute";
			Slot.style.top=i*56+"px";
			Slot.style.left=j*56+"px";
			//Slot.style.zIndex=1;
			Tile.src="Assets/Tiles/Plains.PNG";
			Tile.style.position="absolute";
			Tile.style.zIndex=2;
			//Tile.style.width="56px";
			//Tile.style.height="56px";
			Entity.style.position="absolute";
			Entity.style.zIndex=4;
			EntityCore.style.position="absolute";
			EntityMesh.style.position="absolute";
			Structure.style.position="absolute";
			Structure.style.zIndex=3;
			Structure.style.visibility="hidden";
			Slot.addEventListener("mouseover",function(){if(TrackFillSwitch){RefreshTile(i+1,j+1);FocalEditorRefresh(i+1,j+1)}});
			Slot.addEventListener("click", function(){RefreshTile(i+1,j+1);FocalEditorRefresh(i+1,j+1)});
			Slot.addEventListener("contextmenu", function(){document.getElementById('EditorDetailPanel').style.visibility='inherit'; EditorCustoTileX=i+EditorStandardX; EditorCustoTileY=j+EditorStandardY;});
			A.src="Assets/Tiles/EdgeA.PNG";
			B.src="Assets/Tiles/EdgeB.PNG";
			C.src="Assets/Tiles/EdgeC.PNG";
			D.src="Assets/Tiles/EdgeD.PNG";
			A.style.zIndex=2;
			B.style.zIndex=2;
			C.style.zIndex=2;
			D.style.zIndex=2;
			A.style.visibility="hidden";
			B.style.visibility="hidden";
			C.style.visibility="hidden";
			D.style.visibility="hidden";
			A.style.position="absolute";
			A.style.top="0px";
			A.style.left="0px";
			B.style.position="absolute";
			B.style.top="0px";
			B.style.left="39px";
			C.style.position="absolute";
			C.style.top="49px";
			C.style.left="0px";
			D.style.position="absolute";
			D.style.top="51px";
			D.style.left="43px";
			document.getElementById("TileContainer").appendChild(Slot);
			document.getElementById(Slot.id).appendChild(Tile);
			document.getElementById(Slot.id).appendChild(Entity);
			document.getElementById(Entity.id).appendChild(EntityCore);
			document.getElementById(Entity.id).appendChild(EntityMesh);
			document.getElementById(Slot.id).appendChild(Structure);
			document.getElementById(Slot.id).appendChild(A);
			document.getElementById(Slot.id).appendChild(B);
			document.getElementById(Slot.id).appendChild(C);
			document.getElementById(Slot.id).appendChild(D);

			var regionTile=document.createElement("div");
			var regionColor=document.createElement("div");
			var regionNexus=document.createElement("img");
			var regionName=document.createElement("p");
			var regionCapital=document.createElement("p");
			var borderN=document.createElement("img");
			var borderE=document.createElement("img");
			var borderS=document.createElement("img");
			var borderW=document.createElement("img");

			regionTile.id="regional Tile "+i+" "+j;
			regionTile.style.position="absolute";
			regionTile.style.zIndex=5;
			regionTile.style.left=i*56+"px";
			regionTile.style.top=j*56+"px";
			regionTile.style.height="56px";
			regionTile.style.width="56px";
			regionTile.addEventListener("click",function(){RegionalizeTile(i,j)});
			regionTile.addEventListener("contextmenu",function(){document.getElementById('Backpanel').style.visibility='inherit';
			document.getElementById('RegionNodeX').value=i;
			document.getElementById('RegionNodeY').value=j;

				});

			regionColor.id="regional Color "+i+" "+j;
			regionColor.style.position="absolute";
			regionColor.style.height="56px";
			regionColor.style.width="56px";
			regionColor.style.top="0px";
			regionColor.style.filter="opacity(35%)";
			regionColor.style.background="grey";

			regionNexus.id="regional Nexus "+i+" "+j;
			regionNexus.style.position="absolute";
			regionNexus.style.visibility="hidden";
			regionNexus.style.left="-3px";
			regionNexus.style.top="-4px";
			regionNexus.src="Assets/Miscellaneous/Region.PNG";

			regionName.id="regional Name "+i+" "+j;
			regionName.style.color="beige";
			regionName.style.fontSize="12px";
			regionName.style.textAlign="center";
			regionName.style.visibility="hidden";
			regionName.style.position="absolute";
			regionName.style.width="56px";
			regionName.style.left="0px";
			regionName.style.top="-13px";
			regionName.innerHTML="Region";

			regionCapital.id="regional Capital "+i+" "+j;
			regionCapital.style.color="beige";
			regionCapital.style.fontSize="12px";
			regionCapital.style.textAlign="center";
			regionCapital.style.visibility="hidden";
			regionCapital.style.position="absolute";
			regionCapital.style.width="56px";
			regionCapital.style.left="0px";
			regionCapital.style.top="28px";
			regionCapital.innerHTML="Center";

			borderN.src="Assets/Miscellaneous/RegionBorderN.PNG";
			borderE.src="Assets/Miscellaneous/RegionBorderE.PNG";
			borderS.src="Assets/Miscellaneous/RegionBorderS.PNG";
			borderW.src="Assets/Miscellaneous/RegionBorderW.PNG";
			borderN.id="Nborder "+i+" "+j;
			borderE.id="Eborder "+i+" "+j;
			borderS.id="Sborder "+i+" "+j;
			borderW.id="Wborder "+i+" "+j;
			borderN.style.position="Absolute";
			borderE.style.position="Absolute";
			borderS.style.position="Absolute";
			borderW.style.position="Absolute";
			borderN.style.visibility="hidden";
			borderE.style.visibility="hidden";
			borderS.style.visibility="hidden";
			borderW.style.visibility="hidden";

			document.getElementById("regionMap").appendChild(regionTile);
			document.getElementById(regionTile.id).appendChild(regionColor);
			document.getElementById(regionTile.id).appendChild(regionNexus);
			document.getElementById(regionTile.id).appendChild(regionName);
			document.getElementById(regionTile.id).appendChild(regionCapital);
			document.getElementById(regionTile.id).appendChild(borderN);
			document.getElementById(regionTile.id).appendChild(borderE);
			document.getElementById(regionTile.id).appendChild(borderS);
			document.getElementById(regionTile.id).appendChild(borderW);




		};};
		RefreshMapEditor();};
function CastEntityMap(Map, Roster){
	map=Map;
	var mapWidth=map[0].length;
	var mapHeight=map.length;
	rostermap=[];
	var line=[];
	var index=Roster.length;
	MapRoster=[0];
	for(i=0;i<mapWidth;i++){line[i]=0;};
		line=JSON.parse(JSON.stringify(line));
	for(j=0;j<mapHeight;j++){rostermap[j]=line};
		rostermap=JSON.parse(JSON.stringify(rostermap));

	//alert(rostermap.length);
	for(var k=1; k<index; k++){
		//alert(Roster[k].hpModifier);
		unit={name: Language.UnitSpecialNames[Roster[k].SpecialName] ?? Language.UnitNames[Roster[k].id],
			description: Language.UnitSpecialDesc[Roster[k].SpecialDescription] ?? Language.UnitDesc[Roster[k].id],
			ID:"Unit "+k,
			index:k,
			x:Roster[k].x, 
			y:Roster[k].y, 
			unitType:Roster[k].id,
			faction:Roster[k].faction,
			coallition:Factions[Roster[k].faction].faction, 
			damage:Units[Roster[k].id].Attack, 	
			damageType:Units[Roster[k].id].Weapon,
			minR:Units[Roster[k].id].MinRange,
			maxR:Units[Roster[k].id].MaxRange, 
			life:Math.round(Units[Roster[k].id].HP*(1+Roster[k].hpModifier)), 
			armor:Units[Roster[k].id].Armor, 
			speed:Units[Roster[k].id].Speed, 
			movementType:Units[Roster[k].id].Movement, 
			morale:Roster[k].morale,
			direction:Roster[k].direction,
			cargo:Roster[k].cargo??0,
			isCloaked:rostermap[Roster[k].x][Roster[k].y].isCloaked??false,
			hasSpecialName:Roster[k].SpecialName??0,
			hasSpecialDesc:Roster[k].SpecialDescription??0,
			hasCustomName:Roster[k].CustomName??0,
			hasCustomDesc:Roster[k].CustomDescription??0
		};
		unit.name=Roster[k].CustomName??unit.name;
		unit.description=Roster[k].CustomDescription??unit.description;
		//alert(unit.faction);
		
	let Stealth=Cloak(Roster[k].x,Roster[k].y,Roster[k].id,Factions[Roster[k].faction].faction);
	unit.isCloaked=Stealth;
	


	rostermap[Roster[k].x][Roster[k].y]=unit;	
	MapRoster[k]=unit;
	let ics=Roster[k].x;
	let igrec=Roster[k].y;
	//if(ics>=StandardX && ics<StandardX+10 && igrec>=StandardY && igrec <StandardY+10){
	if(true){
	document.getElementById("EntityCore "+(ics+1)+"X"+(igrec+1)).style.visibility="inherit";
	document.getElementById("Entity "+(ics+1)+"X"+(igrec+1)).style.top=(Units[MapRoster[k].unitType].StaticOffsetY ?? [0,0,0,0,0])[MapRoster[k].direction] + "px";
	document.getElementById("Entity "+(ics+1)+"X"+(igrec+1)).style.left=(Units[MapRoster[k].unitType].StaticOffsetX ?? [0,0,0,0,0])[MapRoster[k].direction] + "px";
	document.getElementById("EntityCore "+(ics+1)+"X"+(igrec+1)).src="Assets/Units/Static/"+Units[MapRoster[k].unitType].shortname+MapRoster[k].direction+".PNG";

	if(!Units[MapRoster[k].unitType].MLPR??false){
	document.getElementById("EntityMesh "+(ics+1)+"X"+(igrec+1)).style.visibility="inherit";
	document.getElementById("EntityMesh "+(ics+1)+"X"+(igrec+1)).src="Assets/Units/StaticMeshes/"+Units[MapRoster[k].unitType].shortname+"Mesh"+MapRoster[k].direction+".PNG";
	};
	//alert(Factions);
	let Filter=Factions[MapRoster[k].faction].ChromaCode;


	//alert(rostermap[unit.x][unit.y].isCloaked);
	if(rostermap[unit.x][unit.y].isCloaked??false){document.getElementById("Entity "+(ics+1)+"X"+(igrec+1)).style.filter="opacity(0%)"};
	document.getElementById("EntityCore "+(ics+1)+"X"+(igrec+1)).style.filter=Filter;};

	//drawUnit(Map, Roster[k].id, Roster[k].direction, Roster[k].x, Roster[k].y, k, rostermap);
	//alert(MapRoster[k].x+" "+MapRoster[k].y);
	//for(let i=0; i<0+10; i++){for(let j=0; j<0+10; j++){}};
	};};
function CaptureProperty(ControlMap,Faction){
	for(let X=0;X<ControlMap.length;X++){for(let Y=0;Y<ControlMap[0].length;Y++){
		if(rostermap[X][Y]!=0 && rostermap[X][Y].life>0 && hasCertainTrait(rostermap[X][Y].unitType,"Conqueror") && rostermap[X][Y].coallition!=Factions[ControlMap[X][Y]].faction){ControlMap[X][Y]=Faction;FocalTileRefresh(X,Y)};

		//FocalTileRefresh(X,Y);
		}};
	};
function CBLARG(r,t){

					let CLARG=JSON.parse(JSON.stringify(BLARG));
					let NeoPath=[];
					let Differential=Math.abs(BLARG[BLARG.length-1].X-r)+Math.abs(BLARG[BLARG.length-1].Y-t);
					//if(Differential>0){console.log(Differential)};
					//This bloc fixes ctep-ctep disjunctions
					if(Differential==1){NeoPath=AddressMap[BLARG[BLARG.length-1].X][BLARG[BLARG.length-1].Y]};
					if(Differential>1){
					let AdjacArray=[];
					let Paradjac=[];
					let N=document.getElementById("Blep-"+(r-1)+"-"+t)??0;
					//console.log(rostermap[r-1][t]);
					//console.log(AddressMap[r-1][t])
					if((N!=0 && r>0 && rostermap[r-1][t]==0) || (r-1==ChosenUnit.ics-1 && t==ChosenUnit.igrec-1)){AdjacArray[AdjacArray.length]="N";Paradjac[Paradjac.length]=AddressMap[r-1][t].length??0};
					let S=document.getElementById("Blep-"+(r+1)+"-"+t)??0;
					if((S!=0 && r<Map.length-1 && rostermap[r+1][t]==0) || (r+1==ChosenUnit.ics-1 && t==ChosenUnit.igrec-1)){AdjacArray[AdjacArray.length]="S";Paradjac[Paradjac.length]=AddressMap[r+1][t].length??0};
					let E=document.getElementById("Blep-"+r+"-"+(t+1))??0;
					if((E!=0 && r<Map[0].length-1 && rostermap[r][t+1]==0) || (r==ChosenUnit.ics-1 && t+1==ChosenUnit.igrec-1)){AdjacArray[AdjacArray.length]="E";Paradjac[Paradjac.length]=AddressMap[r][t+1].length??0};
					let W=document.getElementById("Blep-"+r+"-"+(t-1))??0;
					if((W!=0 && t>0 && rostermap[r][t-1]==0) || (r==ChosenUnit.ics-1 && t-1==ChosenUnit.igrec-1)){AdjacArray[AdjacArray.length]="W";Paradjac[Paradjac.length]=AddressMap[r][t-1].length??0};
					let BestPath=0;
					let SelectedAdjac=0;
					if(AdjacArray.length>0){
					for(let j=0;j<Paradjac.length;j++){if(Paradjac[j]<Paradjac[BestPath]){BestPath=j}};
					SelectedAdjac=AdjacArray[BestPath]};
					//console.log(SelectedAdjac);
					
					let clac= new Event('mouseover');
					//SelectedAdjac=0;
					//let pip=AddressMap[r-1][t]??[0,0];
					//console.log(r+" "+t+" "+BLARG);

					if(SelectedAdjac=="N"){
						//let container=document.getElementById("Blep-"+(r-1)+"-"+t);
						//let altcontainer=document.getElementById("Ctep-"+r+"-"+t);
						//let paracontainter=document.getElementById("BLARG "+(r-1)+"X"+t);
						//container.dispatchEvent(clac);
						//paracontainter.dispatchEvent(clac);
						NeoPath=AddressMap[r-1][t];
						};
					if(SelectedAdjac=="S"){
						//let container=document.getElementById("Blep-"+(r+1)+"-"+t);
						//let altcontainer=document.getElementById("Ctep-"+r+"-"+t);
						//let paracontainter=document.getElementById("BLARG "+(r+1)+"X"+t);
						//container.dispatchEvent(clac);
						//altcontainer.dispatchEvent(clac);
						//paracontainter.dispatchEvent(clac);
						//BLARG[BLARG.length]={X:r+1,Y:t};
						//BLARG.pop();
						NeoPath=AddressMap[r+1][t];
						};
					if(SelectedAdjac=="E"){
						//let container=document.getElementById("Blep-"+r+"-"+(t+1));
						//let altcontainer=document.getElementById("Ctep-"+r+"-"+t);
						//let paracontainter=document.getElementById("BLARG "+r+"X"+(t+1));
						//container.dispatchEvent(clac);
						//paracontainter.dispatchEvent(clac);
						NeoPath=AddressMap[r][t+1];
						};
						
					if(SelectedAdjac=="W"){
						//let container=document.getElementById("Blep-"+r+"-"+(t-1));
						//let altcontainer=document.getElementById("Ctep-"+r+"-"+t);
						//let paracontainter=document.getElementById("BLARG "+r+"X"+(t-1));
						//container.dispatchEvent(clac);
						//paracontainter.dispatchEvent(clac);
						NeoPath=AddressMap[r][t-1];
					};
					//console.log(SelectedAdjac+" "+r+t);
					//console.log(AdjacArray);
					};

					

					//console.log(BLARG[BLARG.length-1].X+""+BLARG[BLARG.length-1].Y+" "+r+t+" "+dir);


					
					//alert(xdif+" "+ydif);


					
					//if(dir+or==3){document.getElementById('BLARG '+(BLARG[BLARG.length-1].X+1)+"X"+(BLARG[BLARG.length-1].Y+1)).src="Assets/BLARG/ElbowB.PNG"};
					//if(dir+or==7){document.getElementById('BLARG '+(BLARG[BLARG.length-1].X+1)+"X"+(BLARG[BLARG.length-1].Y+1)).src="Assets/BLARG/ElbowC.PNG"};
					//if(dir+or==5 && (dir-or==1 || or-dir==1)){document.getElementById('BLARG '+(BLARG[BLARG.length-1].X+1)+"X"+(BLARG[BLARG.length-1].Y+1)).src="Assets/BLARG/ElbowA.PNG"};
					//if(dir+or==5 && (dir-or==3 || or-dir==3)){document.getElementById('BLARG '+(BLARG[BLARG.length-1].X+1)+"X"+(BLARG[BLARG.length-1].Y+1)).src="Assets/BLARG/ElbowD.PNG"};


					//Wipes the BLARG path and repaths the arrow
					let BX=ChosenUnit.ics;
					let BY=ChosenUnit.igrec;
					let ParaPath=[{X:ChosenUnit.ics,Y:ChosenUnit.igrec}];
					for(let B=1; B<BLARG.length; B++){document.getElementById("BLARG "+(BLARG[B].X+1)+"X"+(BLARG[B].Y+1)).src="Assets/Miscellaneous/Nothing.PNG"};

					for(let BL=0; BL<NeoPath.length-1; BL++){

						if(NeoPath[BL]==1){BX--;ParaPath[ParaPath.length]={X:JSON.parse(JSON.stringify(BX)),Y:JSON.parse(JSON.stringify(BY))}};
						if(NeoPath[BL]==2){BY++;ParaPath[ParaPath.length]={X:JSON.parse(JSON.stringify(BX)),Y:JSON.parse(JSON.stringify(BY))}};
						if(NeoPath[BL]==3){BX++;ParaPath[ParaPath.length]={X:JSON.parse(JSON.stringify(BX)),Y:JSON.parse(JSON.stringify(BY))}};
						if(NeoPath[BL]==4){BY--;ParaPath[ParaPath.length]={X:JSON.parse(JSON.stringify(BX)),Y:JSON.parse(JSON.stringify(BY))}};



						//document.getElementById("BLARG "+(ParaPath[BL].X)+"X"+(ParaPath[BL].Y)).src="Assets/Miscellaneous/Nothing.PNG";


						//if(Case==0){document.getElementById('BLARG '+(ParaPath[BL].X)+"X"+(ParaPath[BL].Y)).src="Assets/BLARG/StreakH.PNG";}
						//else{document.getElementById('BLARG '+(ParaPath[BL].X)+"X"+(ParaPath[BL].Y)).src="Assets/BLARG/Elbow"+Case+".PNG"};


							};

						
						

					

					//Builds the new arrow | body section
					if(true){for(let q=1; q<ParaPath.length; q++){

						let or=0;
						let dir=0;
						let Case=0;
						if(q>0){
						if(ParaPath[q].X<ParaPath[q-1].X){or=1};
						if(ParaPath[q].Y<ParaPath[q-1].Y){or=4};
						if(ParaPath[q].X>ParaPath[q-1].X){or=3};
						if(ParaPath[q].Y>ParaPath[q-1].Y){or=2};};
						//if(dir==0){BLARG.pop()};
						//if(q==1){document.getElementById('BLARG '+(ChosenUnit.X+1)+"X"+(ChosenUnit.Y+1)).src="Assets/Emission/"+or+".PNG"};

						if(q<ParaPath.length-1){
						if(ParaPath[q+1].X>ParaPath[q].X){dir=3};
						if(ParaPath[q+1].Y<ParaPath[q].Y){dir=4};
						if(ParaPath[q+1].X<ParaPath[q].X){dir=1};
						if(ParaPath[q+1].Y>ParaPath[q].Y){dir=2};};

						if(q==ParaPath.length-1){
						if(r+1>ParaPath[q].X){dir=3};
						if(t+1<ParaPath[q].Y){dir=4};
						if(r+1<ParaPath[q].X){dir=1};
						if(t+1>ParaPath[q].Y){dir=2};};

						if(or==1&&dir==2){Case="B"};
						if(or==1&&dir==4){Case="C"};
						if(or==2&&dir==1){Case="D"};
						if(or==2&&dir==3){Case="C"};
						if(or==3&&dir==2){Case="A"};
						if(or==3&&dir==4){Case="D"};
						if(or==4&&dir==1){Case="A"};
						if(or==4&&dir==3){Case="B"};

						//let Message="";for(let i=0; i<ParaPath.length;i++){Message+=ParaPath[i].X; Message+="|";Message+=ParaPath[i].Y;Message+=" "};console.log(Message+" "+or+" "+dir+" "+Case);
						//console.log();
						//console.log(ParaPath[q].X+""+ParaPath[q].Y+" "+ParaPath[q-1].X+""+ParaPath[q-1].Y+" "+or);


						if(Case!=0){
							document.getElementById('BLARG '+(ParaPath[q].X)+"X"+(ParaPath[q].Y)).src="Assets/BLARG/Elbow"+Case+".PNG";


						};
						if(Case==0 && or%2==1){document.getElementById('BLARG '+(ParaPath[q].X)+"X"+(ParaPath[q].Y)).src="Assets/BLARG/StreakV.PNG";};
						if(Case==0 && or%2==0){document.getElementById('BLARG '+(ParaPath[q].X)+"X"+(ParaPath[q].Y)).src="Assets/BLARG/StreakH.PNG";};



					}};

					BLARG=[];for(let z=0;z<ParaPath.length;z++){BLARG[BLARG.length]={X:ParaPath[z].X-1,Y:ParaPath[z].Y-1}};

					//Builds the new arrow | head section
					let or=0;
					let dir=0;
					let Case=0;
					if(BLARG[BLARG.length-1].X>r){dir=1};
					if(BLARG[BLARG.length-1].Y<t){dir=2};
					if(BLARG[BLARG.length-1].X<r){dir=3};
					if(BLARG[BLARG.length-1].Y>t){dir=4};
					if(dir==0){BLARG.pop()};

					if(BLARG.length>1){
					if(BLARG[BLARG.length-2].X>BLARG[BLARG.length-1].X){or=1};
					if(BLARG[BLARG.length-2].Y<BLARG[BLARG.length-1].Y){or=2};
					if(BLARG[BLARG.length-2].X<BLARG[BLARG.length-1].X){or=3};
					if(BLARG[BLARG.length-2].Y>BLARG[BLARG.length-1].Y){or=4};};
					
					let canBlarg=false;
					let xdif=Math.abs(r-BLARG[BLARG.length-1].X);
					let ydif=Math.abs(t-BLARG[BLARG.length-1].Y);
					if(xdif+ydif==1){canBlarg=true};
					if(canBlarg){document.getElementById("Ctep-"+r+"-"+t).src="Assets/BLARG/Ctep"+dir+".PNG"};

					//Builds the new arrow | tail section
					//alert("Ctep-"+(ChosenUnit.ics)+"-"+(ChosenUnit.igrec));
					if(BLARG.length>1){
					if(ChosenUnit.ics-1>BLARG[1].X){document.getElementById("BLARG "+(ChosenUnit.ics)+"X"+(ChosenUnit.igrec)).src="Assets/BLARG/Emission1.PNG"};
					if(ChosenUnit.igrec-1<BLARG[1].Y){document.getElementById("BLARG "+(ChosenUnit.ics)+"X"+(ChosenUnit.igrec)).src="Assets/BLARG/Emission2.PNG"};
					if(ChosenUnit.ics-1<BLARG[1].X){document.getElementById("BLARG "+(ChosenUnit.ics)+"X"+(ChosenUnit.igrec)).src="Assets/BLARG/Emission3.PNG"};
					if(ChosenUnit.igrec-1>BLARG[1].Y){document.getElementById("BLARG "+(ChosenUnit.ics)+"X"+(ChosenUnit.igrec)).src="Assets/BLARG/Emission4.PNG"}};
					if(BLARG.length==1){
					if(ChosenUnit.ics-1>r){document.getElementById("BLARG "+(ChosenUnit.ics)+"X"+(ChosenUnit.igrec)).src="Assets/BLARG/Emission1.PNG"};
					if(ChosenUnit.igrec-1<t){document.getElementById("BLARG "+(ChosenUnit.ics)+"X"+(ChosenUnit.igrec)).src="Assets/BLARG/Emission2.PNG"};
					if(ChosenUnit.ics-1<r){document.getElementById("BLARG "+(ChosenUnit.ics)+"X"+(ChosenUnit.igrec)).src="Assets/BLARG/Emission3.PNG"};
					if(ChosenUnit.igrec-1>t){document.getElementById("BLARG "+(ChosenUnit.ics)+"X"+(ChosenUnit.igrec)).src="Assets/BLARG/Emission4.PNG"}};
					



					//console.log(ChosenUnit.ics+""+ChosenUnit.igrec+" "+BLARG[1].X+BLARG[1].Y);

					//Handles the end-tile and second-last tile
					/*
					if(or==1&&dir==2){Case="B"};
					if(or==1&&dir==4){Case="C"};
					if(or==2&&dir==1){Case="D"};
					if(or==2&&dir==3){Case="C"};
					if(or==3&&dir==2){Case="A"};
					if(or==3&&dir==4){Case="D"};
					if(or==4&&dir==1){Case="A"};
					if(or==4&&dir==3){Case="B"};*/

					//alert(dir+" "+or+"     "+dir%2+" "+or%2);
					//if((dir%2==0)&&(or%2==0)){document.getElementById('BLARG '+(BLARG[BLARG.length-1].X+1)+"X"+(BLARG[BLARG.length-1].Y+1)).src="Assets/BLARG/StreakH.PNG"}
					//else if((dir%2==1)&&(or%2==1)){document.getElementById('BLARG '+(BLARG[BLARG.length-1].X+1)+"X"+(BLARG[BLARG.length-1].Y+1)).src="Assets/BLARG/StreakV.PNG"}
					//else{document.getElementById('BLARG '+(BLARG[BLARG.length-1].X)+"X"+(BLARG[BLARG.length-1].Y)).src="Assets/BLARG/Elbow"+Case+".PNG"};


					/*}else{document.getElementById('BLARG '+(BLARG[0].X+1)+"X"+(BLARG[0].Y+1)).src="Assets/BLARG/Emission"+dir+".PNG";
					let Xer=BLARG[0].X;
					let Yer=BLARG[0].Y;
					if(dir==1){Xer-=1};
					if(dir==2){Yer+=1};
					if(dir==3){Xer+=1};
					if(dir==4){Yer-=1};
					document.getElementById('Ctep-'+Xer+"-"+Yer).src="Assets/BLARG/Ctep"+dir+".PNG"};*/





		};
function ChooseChapter(Chapter){
	

	let checker=false;
	if(Chapter==1){checker=true};
	if(Chapter>1&&Campaigns[ChosenNation-1][Chapter-2][4].Finished==true){checker=true};
	if(checker){
		ChosenChapter=Chapter;
	document.getElementById('CampaignName').innerHTML=Language.ChapterName[ChosenNation-1][Chapter-1];
	document.getElementById('MissionName').innerHTML=Language.MissionName[ChosenNation-1][Chapter-1][0];
	document.getElementById('MissionDescription').innerHTML=Language.MissionDesc[ChosenNation][Chapter-1][0];
	document.getElementById("Emblem1").src="Assets/Emblems/Emblem"+Factions[ChosenNation].Preffix+".PNG";
	document.getElementById('EmblemSlot').style.left='0px';
	document.getElementById("ChapterIllustration").src="Assets/Paralogues/"+ChosenNation+"-"+ChosenChapter+".JPG";
	ChooseMission(1);
	document.getElementById("ChapterPanelPointer").style.top=(Chapter-1)*33-6+"px";
	for(let i=0;i<=3;i++){
	if(Campaigns[ChosenNation-1][ChosenChapter-1][i].Finished??false){document.getElementById('Emblem'+ (i+2)).src="Assets/Emblems/Emblem"+Factions[ChosenNation].Preffix+".PNG"}
	else{document.getElementById('Emblem'+ (i+2)).src="Assets/Emblems/NONEmblem"+Factions[ChosenNation].Preffix+".PNG"};
	};
	};};
function ChooseMission(Mission){
	let checker=false;
	if(Mission==1){checker=true};
	if(Mission>1){if(Campaigns[ChosenNation-1][ChosenChapter-1][Mission-2].Finished==true ?? false){checker=true};};
	if(checker){
		ChosenMission=Mission;
	document.getElementById('MissionName').innerHTML=Language.MissionName[ChosenNation-1][ChosenChapter-1][Mission-1];
	document.getElementById('MissionDescription').innerHTML=Language.MissionDesc[ChosenNation][ChosenChapter-1][Mission-1];
	document.getElementById('EmblemSlot').style.left=(Mission-1)*85+'px';
	//alert(Campaigns[ChosenNation-1][ChosenChapter-1][Mission-1].Constants.Funds[1]);
	document.getElementById("SpecificationText").innerHTML=Language.SystemTerms[91];
	if((Campaigns[ChosenNation-1][ChosenChapter-1][Mission-1].Constants.Funds??[0,0])[1]>0){document.getElementById("CampaignSpecification1").style.visibility="inherit"}else{document.getElementById("CampaignSpecification1").style.visibility="hidden"};
	if(Campaigns[ChosenNation-1][ChosenChapter-1][Mission-1].Constants.Survival<77777){document.getElementById("CampaignSpecification2").style.visibility="inherit"}else{document.getElementById("CampaignSpecification2").style.visibility="hidden"};
	if(Campaigns[ChosenNation-1][ChosenChapter-1][Mission-1].Constants.TimeLimit<77777){document.getElementById("CampaignSpecification3").style.visibility="inherit"}else{document.getElementById("CampaignSpecification3").style.visibility="hidden"};
	if(Campaigns[ChosenNation-1][ChosenChapter-1][Mission-1].Constants.Defend.length>0){document.getElementById("CampaignSpecification4").style.visibility="inherit"}else{document.getElementById("CampaignSpecification4").style.visibility="hidden"};
	if(Campaigns[ChosenNation-1][ChosenChapter-1][Mission-1].Constants.Capture.length>0){document.getElementById("CampaignSpecification5").style.visibility="inherit"}else{document.getElementById("CampaignSpecification5").style.visibility="hidden"};
	if(Campaigns[ChosenNation-1][ChosenChapter-1][Mission-1].Constants.Protect.length>0){document.getElementById("CampaignSpecification6").style.visibility="inherit"}else{document.getElementById("CampaignSpecification6").style.visibility="hidden"};
	if(Campaigns[ChosenNation-1][ChosenChapter-1][Mission-1].Constants.Defeat.length>0){document.getElementById("CampaignSpecification7").style.visibility="inherit"}else{document.getElementById("CampaignSpecification7").style.visibility="hidden"};

	};};
function ClassTraitDetail(Slot,UnitCase){
	index=0;
	if(UnitCase=='Details'){
		if(Slot=="ArmorType"){indexer=ArmorShowcase; document.getElementById("TraitTooltip").style.left="200px"; document.getElementById("TraitTooltip").style.top="-35px"};
		if(Slot=="DamageType"){indexer=WeaponShowcase; index=3; document.getElementById("TraitTooltip").style.left="280px"; document.getElementById("TraitTooltip").style.top="-35px"};
		if(Slot=="MovementType"){indexer=MovementShowcase; document.getElementById("TraitTooltip").style.left="357px"; document.getElementById("TraitTooltip").style.top="-35px"};
		if(Slot=="Biome"){indexer=BiomeRegistry[LocalBiome].Nominator;if(LocalBiome==1){indexer="Temperate"};document.getElementById("TraitTooltip").style.left="357px"; document.getElementById("TraitTooltip").style.top="-35px"}
		};
	if(UnitCase=='Constructor'){
		ArmorShowcase=HighlightedEntity.Armor;
		WeaponShowcase=HighlightedEntity.Weapon;
		MovementShowcase=HighlightedEntity.Movement;
		if(Slot=="ArmorType"){indexer=ArmorShowcase; document.getElementById("TraitTooltip").style.left="-70px"; document.getElementById("TraitTooltip").style.top="-525px"};
		if(Slot=="DamageType"){indexer=WeaponShowcase; index=3; document.getElementById("TraitTooltip").style.left="0px"; document.getElementById("TraitTooltip").style.top="-525px"};
		if(Slot=="MovementType"){indexer=MovementShowcase; document.getElementById("TraitTooltip").style.left="70px"; document.getElementById("TraitTooltip").style.top="-525px"}
		};
	//alert(indexer);

	switch(indexer){
		case "Light":
		index+=1;
		break;

		case "Medium":
		index+=2;
		break;

		case "Heavy":
		index+=3;
		break;		

		case "None":
		index+=4;
		break;

		case "Stationary":
		index=8;
		break;

		case "Foot":
		index=9;
		break;

		case "Wheeled":
		index=10;
		break;

		case "Tracked":
		index=11;
		break;

		case "Flight":
		index=12;
		break;

		case "Rudder":
		index=13;
		break;

		case "Heavy Rudder":
		index=14;
		break;

		case "Amphibious":
		index=15;
		break;

		case "Temperate":
		index=16;
		break;

		case "Arid":
		index=17;
		break;

		case "Boreal":
		index=18;
		break;

		case "Barren":
		index=19;
		break;

		case "Arctic":
		index=20;
		break;

		case "Lunar":
		index=21;
		break;

		case "Martian":
		index=22;
		break;

		default:
		index=0;
	};
	document.getElementById("TraitTooltip").style.visibility="visible";
	if(Language.ClassTraitDesc[index].length>65){document.getElementById("TraitTooltipImage").src="Assets/Miscellaneous/TraitTooltipPlus.PNG"}else{document.getElementById("TraitTooltipImage").src="Assets/Miscellaneous/TraitTooltip.PNG"};
	document.getElementById("TraitName").innerHTML=Language.ClassTraitName[index];
	document.getElementById("TraitDescription").innerHTML=Language.ClassTraitDesc[index];};
function Cloak(X,Y,type,faction){
		let Stealth=false;
		if(hasCertainTrait(type,"Stealth")){Stealth=true};

		if(X>1){
			if(Factions[rostermap[Math.max(X-1,0)][Y].faction??0].faction!=faction && Factions[rostermap[Math.max(X-1,0)][Y].faction??0].faction!=Factions[0].faction){Stealth=false};
		};
		if(X<Map.length-1){
 			if(Factions[rostermap[X+1][Y].faction??0].faction!=faction && Factions[rostermap[X+1][Y].faction??0].faction!=Factions[0].faction){Stealth=false};
		};
		if(Y>1){
			if(Factions[rostermap[Math.max(X,0)][Math.max(Y-1,0)].faction??0].faction!=faction && Factions[rostermap[Math.max(X,0)][Math.max(Y-1,0)].faction??0].faction!=Factions[0].faction){Stealth=false};
		};
		if(Y<Map[0].length-1){
			if(Factions[rostermap[Math.max(X,0)][Y+1].faction??0].faction!=faction && Factions[rostermap[Math.max(X,0)][Y+1].faction??0].faction!=Factions[0].faction){Stealth=false};
		};

		//alert(Stealth);
		return Stealth;};
function Counterattack(Attacker,Defender){

	let Atk=MapRoster[Attacker];
	let Def=MapRoster[Defender];
	//Map=Campaigns[ChosenNation-1][ChosenChapter-1][ChosenMission-1].Map;
	Map=Map;
	let AttackerTile=Terrain[Map[Atk.x][Atk.y]];
	let DefenderTile=Terrain[Map[Def.x][Def.y]];
	//alert(Def.direction);
	if(Def.direction<2.5){let Dir=Def.direction+2;Atk.direction=Dir}else{let Dir=Def.direction-2;Atk.direction=Dir};
	//alert(Dir);
	
	//alert(Atk.direction);
	if(true){AttackingAnimation(Attacker);};
	HitAnimStyle="Standard";
	if(true){setTimeout(HitAnimation,200,Defender,HitAnimStyle)};

	DamageModifier=Atk.life/Units[Atk.unitType].HP;
	DamageModifier*=(5+Atk.morale)/5;
	if(hasCertainTrait(Atk.unitType,"Indomitable")){DamageModifier=1;};
	let LogisticFactor=BiomeRegistry[BiomeMap[Atk.x][Atk.y]].LogisticIndex;
	DamageModifier*=LogisticFactor;

	if(Atk.damageType==Def.armor&&Atk.damageType!="Medium"){DamageModifier=DamageModifier*1.5;};
	if(Atk.damageType=="Light"&&Def.armor=="Heavy"){DamageModifier=DamageModifier*0.5;};
	if(Atk.damageType=="Heavy"&&Def.armor=="Light"){DamageModifier=DamageModifier*0.5;};

	if(MapRoster[Defender].unitType<9 && hasCertainTrait(MapRoster[Attacker].unitType,"Anti-Infantry")){DamageModifier*=3};
	if(MapRoster[Defender].movementType=="Flight" && hasCertainTrait(MapRoster[Attacker].unitType,"Anti-Air")){DamageModifier*=2};
	if(hasCertainTrait(Atk.unitType,"Anti-Ship") && (Units[Def.unitType].Movement=="Rudder" || Units[Def.unitType].Movement=="Heavy Rudder")){DamageModifier*=3};
	if(MapRoster[Defender].movementType=="Stationary" && hasCertainTrait(MapRoster[Attacker].unitType,"Anti-Structure")){DamageModifier*=2};

	if(hasCertainTrait(Def.unitType,"Steer")&&(Units[Def.unitType].Movement=="Rudder" || Units[Def.unitType].Movement=="Heavy Rudder")){DamageModifier*=1+(Math.max(Math.min(Atk.speed-Def.speed,0),-4)*0.15)};



	DamageModifier=DamageModifier*DefenderTile.protectionFactor;
	if(hasCertainTrait(Atk.unitType,"Commando")&&DefenderTile.protectionFactor<1){DamageModifier*=1.25};
	if(hasCertainTrait(Def.unitType,"Commando")&&DefenderTile.protectionFactor<1){DamageModifier*=0.8};
	let Damage=Math.ceil(Atk.damage*DamageModifier);
	//if(hasCertainTrait(Atk.unitType,"Tank-Hunter") && Def.armor!="Heavy"){Damage-=25};
	if(hasCertainTrait(Def.unitType,"Cemented Steel Armor") && !hasCertainTrait(Atk.unitType,"Cavitation Explosion")){Damage-=20};
	if(MapRoster[Defender].movementType=="Flight" && !hasCertainTrait(MapRoster[Attacker].unitType,"Anti-Air")){Damage=25};
	if(hasCertainTrait(Atk.unitType,"Terrifying")){if(Units[Def.unitType].Cost<1000&&Def.morale>-3){Def.morale-=1}};
	if(hasCertainTrait(Atk.unitType,"Inflaming")){if(Def.morale<3){Def.morale+=1}};
	Damage=Math.max(Damage,0);
	if(hasCertainTrait(Atk.unitType,"Absorber")){let HealIndex=Math.min(Damage,Math.abs(Def.life),Units[Atk.unitType].HP-Atk.life); Atk.life+=HealIndex};
	Def.life-=Damage;
	if(Def.life<=0){setTimeout(UnitLost,1000,Defender);};
	EvaluateDynamicEvent('Action','null');};
function ConvoyPickup(Unit){
	if(IsConvoy){
		let HPIndex=rostermap[Unit.x][Unit.y].life/100;
		let Cargo=rostermap[Unit.x][Unit.y].cargo;
		MapRoster[Unit.index].id=Cargo;
		rostermap[Unit.x][Unit.y].cargo=0;
		rostermap[Unit.x][Unit.y].unitType=Cargo;
		rostermap[Unit.x][Unit.y].life=Math.round(Units[Cargo].HP*HPIndex);
		rostermap[Unit.x][Unit.y].armor=Units[Cargo].Armor;
		rostermap[Unit.x][Unit.y].damage=Units[Cargo].Attack;
		rostermap[Unit.x][Unit.y].damageType=Units[Cargo].Weapon;
		rostermap[Unit.x][Unit.y].minR=Units[Cargo].MinRange;
		rostermap[Unit.x][Unit.y].maxR=Units[Cargo].MaxRange;
		rostermap[Unit.x][Unit.y].speed=Units[Cargo].Speed;
		rostermap[Unit.x][Unit.y].movementType=Units[Cargo].Movement;
		if((MapRoster[Unit.index].CustomName ?? true) || (MapRoster[Unit.index].SpecialName ?? true)){rostermap[Unit.x][Unit.y].name=Language.UnitNames[Cargo];};
		if((MapRoster[Unit.index].CustomDescription ?? true) || (MapRoster[Unit.index].SpecialDescription ?? true)){rostermap[Unit.x][Unit.y].description=Language.UnitDesc[Cargo];};
		document.getElementById("Entity "+(Unit.x+1)+"X"+(Unit.y+1)).src="Assets/Units/Static/"+Units[Cargo].shortname+rostermap[Unit.x][Unit.y].direction+".PNG";
		document.getElementById("Entity "+(Unit.x+1)+"X"+(Unit.y+1)).style.left=(Units[Cargo].StaticOffsetX??[0,0,0,0,0])[rostermap[Unit.x][Unit.y].direction]+"px";
		document.getElementById("Entity "+(Unit.x+1)+"X"+(Unit.y+1)).style.top=(Units[Cargo].StaticOffsetY??[0,0,0,0,0])[rostermap[Unit.x][Unit.y].direction]+"px";

	}else{
		YourMoney-=100;
		//alert(Unit.index);
		//alert(rostermap[Unit.x][Unit.y].HP);
		//alert(HPIndex);
		let HPIndex=rostermap[Unit.x][Unit.y].life/Units[rostermap[Unit.x][Unit.y].unitType].HP;
		
		MapRoster[Unit.index].id=51;
		rostermap[Unit.x][Unit.y].cargo=rostermap[Unit.x][Unit.y].unitType;
		rostermap[Unit.x][Unit.y].unitType=51;
		rostermap[Unit.x][Unit.y].armor="Medium";
		rostermap[Unit.x][Unit.y].life=Math.round(100*HPIndex);
		rostermap[Unit.x][Unit.y].damage=0;
		rostermap[Unit.x][Unit.y].damageType="None";
		rostermap[Unit.x][Unit.y].minR=1;
		rostermap[Unit.x][Unit.y].maxR=1;
		rostermap[Unit.x][Unit.y].speed=5;
		rostermap[Unit.x][Unit.y].movementType="Rudder";
		if((MapRoster[Unit.index].CustomName ?? true) || (MapRoster[Unit.index].SpecialName ?? true)){rostermap[Unit.x][Unit.y].name=Language.UnitNames[51];};
		if((MapRoster[Unit.index].CustomDescription ?? true) || (MapRoster[Unit.index].SpecialDescription ?? true)){rostermap[Unit.x][Unit.y].description=Language.UnitDesc[51];};
		document.getElementById("Entity "+(Unit.x+1)+"X"+(Unit.y+1)).src="Assets/Units/Static/Convoy"+rostermap[Unit.x][Unit.y].direction+".PNG";





	};};	
function CustomizeTile(){
	//alert(EditorCustoTileX+" "+EditorCustoTileY);
	if(EditorEntityMap[EditorCustoTileX][EditorCustoTileY]==0){Localization[Localization.length]={X:EditorCustoTileX+1,Y:EditorCustoTileY+1, name:document.getElementById('EditorNameDenominator').value, description:document.getElementById('EditorDescDenominator').value}};
	if(EditorEntityMap[EditorCustoTileX][EditorCustoTileY]!=0){
		if(document.getElementById('EditorNameDenominator').value!=""){EditorEntityMap[EditorCustoTileX][EditorCustoTileY].CustomName=document.getElementById('EditorNameDenominator').value};
		if(document.getElementById('EditorDescDenominator').value!=""){EditorEntityMap[EditorCustoTileX][EditorCustoTileY].CustomDescription=document.getElementById('EditorDescDenominator').value};
		if(document.getElementById('EditorLifeDenominator').value!=""){EditorEntityMap[EditorCustoTileX][EditorCustoTileY].HPI=JSON.parse(document.getElementById('EditorLifeDenominator').value); EditorEntityMap[EditorCustoTileX][EditorCustoTileY].hpModifier=JSON.parse(document.getElementById('EditorLifeDenominator').value)};
		if(document.getElementById('EditorMoraleDenominator').value!=""){EditorEntityMap[EditorCustoTileX][EditorCustoTileY].morale=JSON.parse(document.getElementById('EditorMoraleDenominator').value)};
	};};
function DisplayLore(Document){
	
	document.getElementById('LoreName').innerHTML=Document.DocName;
	document.getElementById('LoreDesc').innerHTML=Document.DocDesc;
	document.getElementById('LorePanel').innerHTML="";
	for(ll=0;ll<Document.DocText.length;ll++){document.getElementById('LorePanel').innerHTML+=Document.DocText[ll]+"<br><br>";};
	if(Document.LengthIndex==1){document.getElementById('LoreLength').innerHTML="Very Short Document"}
	else if(Document.LengthIndex==2){document.getElementById('LoreLength').innerHTML="Short Document"}
	else if(Document.LengthIndex==3){document.getElementById('LoreLength').innerHTML="Document"}
	else if(Document.LengthIndex==4){document.getElementById('LoreLength').innerHTML="Long Document"}
	else if(Document.LengthIndex==5){document.getElementById('LoreLength').innerHTML="Very Long Document"};
	for(let cx=1;cx<=5;cx++){if(cx<=Document.LengthIndex){document.getElementById("LoreLengthIcon"+cx).src="Assets/Miscellaneous/DocIcon.PNG"}else{document.getElementById("LoreLengthIcon"+cx).src="Assets/Miscellaneous/DocShadow.PNG"}};};
function DisplayRegions(){
	if(FieldMode!="MapEditor" && RegionMap!=[0]&&NodeMap!=[0]){};
	

	if(FieldMode=="MapEditor"){Map=EditorMap;
	RegionMap=[];
	let RegionCell=[];
	NodeMap=[];
	for(let x=0;x<Map[0].length;x++){RegionCell[RegionCell.length]=0};
		for(let y=0;y<Map.length;y++){RegionMap[RegionMap.length]=RegionCell};
		RegionMap=JSON.parse(JSON.stringify(RegionMap));	
	};
	
	

	if(!RegionsToggled){

		if(FieldMode=="Battle"){document.getElementById("RegionMap").style.visibility="visible"}else{document.getElementById("regionMap").style.visibility="visible"};

		


		if(FieldMode!="MapEditor" && RegionMap!=[0] && NodeMap!=[0]){

			for(let i=1;i<Map[0].length;i++){for(let j=1;j<Map.length;j++){
			document.getElementById("NBorder "+i+"X"+j).style.visibility="hidden";
			document.getElementById("EBorder "+i+"X"+j).style.visibility="hidden";
			document.getElementById("SBorder "+i+"X"+j).style.visibility="hidden";	
			document.getElementById("WBorder "+i+"X"+j).style.visibility="hidden";
			}};




			for(let a=0; a<NodeMap.length; a++){
				document.getElementById("Regional Nexus "+(NodeMap[a].CapitolX+1)+" "+(NodeMap[a].CapitolY+1)).style.visibility="inherit";
				document.getElementById("Regional Name "+(NodeMap[a].CapitolX+1)+" "+(NodeMap[a].CapitolY+1)).style.visibility="inherit";
				document.getElementById("Regional Capital "+(NodeMap[a].CapitolX+1)+" "+(NodeMap[a].CapitolY+1)).style.visibility="inherit";
				document.getElementById("Regional Name "+(NodeMap[a].CapitolX+1)+" "+(NodeMap[a].CapitolY+1)).innerHTML=NodeMap[a].Name;
				document.getElementById("Regional Capital "+(NodeMap[a].CapitolX+1)+" "+(NodeMap[a].CapitolY+1)).innerHTML=NodeMap[a].Capitol;

				};


			for(let i=1;i<=Map.length;i++){for(let j=1;j<=Map[0].length;j++){
				X=0;
				for(let k=0;k<NodeMap.length;k++){if(RegionMap[i-1][j-1]==NodeMap[k].Name){X=NodeMap[k].Owner}};
					//alert(j+" "+i);
				document.getElementById("Regional Color "+j+" "+i).style.background=Factions[X].color;
				//document.getElementById("Regional Nexus "+(j-StandardY)+" "+(i-StandardX)).style.visibility="inherit";
				if( RegionMap[Math.max(0,i-2)][j-1]!=RegionMap[i-1][j-1] ){document.getElementById("NBorder "+(j)+"X"+(i)).style.visibility="inherit"}else{document.getElementById("NBorder "+(j)+"X"+(i)).style.visibility="hidden"};
				if( RegionMap[i-1][Math.min(Map.length-1,j)]!=RegionMap[i-1][j-1] ){document.getElementById("EBorder "+(j)+"X"+(i)).style.visibility="inherit"}else{document.getElementById("EBorder "+(j)+"X"+(i)).style.visibility="hidden"};
				if( RegionMap[Math.min(Map[0].length-2,i)][j-1]!=RegionMap[i-1][j-1] ){document.getElementById("SBorder "+(j)+"X"+(i)).style.visibility="inherit"}else{document.getElementById("SBorder "+(j)+"X"+(i)).style.visibility="hidden"};
				if( RegionMap[i-1][Math.max(0,j-2)]!=RegionMap[i-1][j-1] ){document.getElementById("WBorder "+(j)+"X"+(i)).style.visibility="inherit"}else{document.getElementById("WBorder "+(j)+"X"+(i)).style.visibility="hidden"};


			};};



		}else if(FieldMode=="MapEditor"){
			for(let i=1;i<=EditorMap.length;i++){for(let j=1;j<=EditorMap[0].length;j++){
				X=0;
				for(let k=1;k<=CapitolNodeRegistry.length;k++){for(let l=1;l<=CapitolNodeRegistry[0].length;l++){
					if(EditorRegionMap[i-1][j-1]==CapitolNodeRegistry[k-1][l-1].Name){X=CapitolNodeRegistry[k-1][l-1].Owner};
				}};
				
					//alert(X);
					//document.getElementById("regional Tile "+(j-EditorStandardY-1)+" "+(i-EditorStandardX-1)).style.background=Factions[X].color;
	
				if( EditorRegionMap[Math.max(0,i-2)][j-1]!=EditorRegionMap[i-1][j-1] ){document.getElementById("Nborder "+(j-EditorStandardY-1)+" "+(i-EditorStandardX-1)).style.visibility="inherit"}else{document.getElementById("Nborder "+(j-EditorStandardY-1)+" "+(i-EditorStandardX-1)).style.visibility="hidden"};
				if( EditorRegionMap[i-1][Math.min(9,j)]!=EditorRegionMap[i-1][j-1] ){document.getElementById("Eborder "+(j-EditorStandardY-1)+" "+(i-EditorStandardX-1)).style.visibility="inherit"}else{document.getElementById("Eborder "+(j-EditorStandardY-1)+" "+(i-EditorStandardX-1)).style.visibility="hidden"};
				if( EditorRegionMap[Math.min(9,i)][j-1]!=EditorRegionMap[i-1][j-1] ){document.getElementById("Sborder "+(j-EditorStandardY-1)+" "+(i-EditorStandardX-1)).style.visibility="inherit"}else{document.getElementById("Sborder "+(j-EditorStandardY-1)+" "+(i-EditorStandardX-1)).style.visibility="hidden"};
				if( EditorRegionMap[i-1][Math.max(0,j-2)]!=EditorRegionMap[i-1][j-1] ){document.getElementById("Wborder "+(j-EditorStandardY-1)+" "+(i-EditorStandardX-1)).style.visibility="inherit"}else{document.getElementById("Wborder "+(j-EditorStandardY-1)+" "+(i-EditorStandardX-1)).style.visibility="hidden"};
			

			}};

			};

		}


		


		else{
			document.getElementById("RegionMap").style.visibility="hidden";
			document.getElementById("regionMap").style.visibility="hidden";
			
		};
		RegionsToggled=!RegionsToggled;};
function DeployUnit(X,Y,Type,Faction,Direction,LifeIndex,Morale,CustomName,SpecialName,CustomDesc,SpecialDesc){
	//alert(Faction);
	let CostFactor=1;
	if(Speciation==-2){CostFactor=0.8};
	if(Speciation==-1){CostFactor=0.9};
	if(Speciation==1){CostFactor=1.4};
	if(Speciation==2){CostFactor=2};
	YourMoney-=Math.round(Units[Type].Cost*CostFactor);
	CustomName=document.getElementById("ParticularNameBox").value;
	if(CustomName==""){CustomName=null};
	//alert(Math.round(Units[Type].Cost));
	//alert(DaoLedger[PlayerChoiceFaction/2]);
	let MoraleIndex=0;
	MoraleIndex+=Math.min(5,Math.max(-4,DaoLedger[PlayerChoiceFaction]/2));
	MoraleIndex+=Speciation;
	let RosterData={index:MapRoster.length-1, id:Type, faction:Faction, direction:1, x:X-1, y:Y-1, morale:0, hpModifier:0};

	
	MapRoster[MapRoster.length]={index:MapRoster.length-1, id:Type, faction:Faction, direction:1, x:X-1, y:Y-1, morale:MoraleIndex, hpModifier:0};
	//alert((CustomName??SpecialName)??Units[Type].name);
	let UnitData={
			name: (CustomName??SpecialName)??Units[Type].name,
			description: (CustomDesc??SpecialDesc)??Language.UnitDesc[Type],
			ID:"Unit "+MapRoster.length,
			index:MapRoster.length-1,
			x:X-1, 
			y:Y-1, 
			unitType:Type,
			faction:Faction,
			coallition:Factions[Faction].faction, 
			damage:Units[Type].Attack, 
			damageType:Units[Type].Weapon,
			minR:Units[Type].MinRange,
			maxR:Units[Type].MaxRange, 
			life:Math.round(Units[Type].HP*(LifeIndex??1)), 
			armor:Units[Type].Armor, 
			speed:Units[Type].Speed, 
			movementType:Units[Type].Movement, 
			morale:Morale??MoraleIndex,
			direction:Direction??1
	};
	//alert(UnitData.direction??1);
	//alert(UnitData.x+" "+UnitData.y);
	rostermap[X-1][Y-1]=UnitData;
	MapRoster[MapRoster.length-1]=UnitData;
	//alert(UnitData.name);
	//alert(rostermap[UnitData.x][UnitData.y].index);
	let fAcTiOn=0;
	for(let i=0;i<SubRosters.length;i++){if(Faction==SubRosters[i][0].faction){fAcTiOn=i}};
	//alert(fAcTiOn);
		let RecruitmentSFX=0;
		if(Math.ceil(Type/10)==1){RecruitmentSFX="InfantryReady"};
		if(Math.ceil(Type/10)==2){RecruitmentSFX="VehicleReady"};
		if(Math.ceil(Type/10)==3){RecruitmentSFX="TankReady"};
		if(Math.ceil(Type/10)==4){RecruitmentSFX="ArtilleryReady"};
		if(Math.ceil(Type/10)==5){RecruitmentSFX="AircraftReady"};
		if(Math.ceil(Type/10)==6){RecruitmentSFX="ShipReady"};

		battalion.soundPlayer.playSound(RecruitmentSFX);

	SubRosters[fAcTiOn][SubRosters[fAcTiOn].length]=UnitData;
	//console.log(MapRoster);
	//console.log(SubRosters[fAcTiOn]);
	document.getElementById("EntityCore "+X+"X"+Y).src="Assets/Units/Static/"+Units[Type].shortname+UnitData.direction+".PNG";
	document.getElementById("Entity "+X+"X"+Y).style.visibility="visible";
	document.getElementById("Entity "+X+"X"+Y).style.left=(Units[Type].StaticOffsetX??[0,0,0,0,0])[1]+"px";
	document.getElementById("Entity "+X+"X"+Y).style.top=(Units[Type].StaticOffsetY??[0,0,0,0,0])[1]+"px";
	document.getElementById("EntityCore "+X+"X"+Y).style.filter=Factions[Faction].ChromaCode;};
function drawTile(host,image,x,y,terrain){
	var newPic=document.createElement("img");
	newPic.src=image;
	newPic.style.position="absolute";
	newPic.style.top=x+"px";
	newPic.style.left=y+"px";
	newPic.style.zIndex=2;
	newPic.addEventListener("click", function(){AnalyseSquare("Tile", terrain)});
	//if(image=="Blep.png"){newPic.style.zIndex=2;};
	document.getElementById(host).appendChild(newPic);};
function drawEditorTile(){

	//Superfluous

	var newPic=document.createElement("img");
	newPic.src=image;
	newPic.style.position="absolute";
	newPic.style.top=x+"px";
	newPic.style.left=y+"px";
	newPic.style.zIndex=2;
	newPic.addEventListener("click", function(){});
	//if(image=="Blep.png"){newPic.style.zIndex=2;};
	document.getElementById(host).appendChild(newPic);};
function drawUnit(Map, UnitType, direction, x, y, index, rostermap){
	//drawUnit seems to be a residual function
	var newPic=document.createElement("img");
	adjective="Assets/Units/Static/"+Units[UnitType].shortname+direction+".PNG";
	newPic.src=adjective;
	newPic.id=rostermap[x][y].ID;
	newPic.style.position="absolute";
	newPic.style.top=x*56+"px";
	newPic.style.left=y*56+(Units[UnitType].SpriteOffset ?? [0,0,0,0,0])[direction]+"px";
	newPic.style.zIndex=3;
	let Filter=Factions[MapRoster[index].faction].ChromaCode+" opacity(50%)";
	alert(Filter);
	newPic.style.filter=Filter;
	newPic.opacity="0.5";
	//newPic.style.opacity=0.5;
	document.getElementById("UnitMap").appendChild(newPic);
	//document.getElementById(rostermap[x][y].ID).addEventListener("click", function(){selectUnit(Map, unit, x, y);});
	document.getElementById(rostermap[x][y].ID).addEventListener("click", function(){AnalyseSquare('Unit', index)});};
function EndBattle(){
	//alert(Victory);
	battalion.musicPlayer.stop();
	
	document.getElementById("AITurnIndicator").style.visibility="hidden";
	RemoveKebabIMeanBlep();
	

	for(let i=1;i<=10;i++){for(let j=1;j<=10;j++){
	document.getElementById("Entity "+i+"X"+j).style.visibility="hidden";
	document.getElementById("Marker "+i+"X"+j).style.visibility="hidden";
	document.getElementById("Canceler "+i+"X"+j).style.visibility="hidden";
	document.getElementById("Structure "+i+"X"+j).style.visibility="hidden";
	}};

	for(let z=1;z<=4;z++){document.getElementById("Trait"+z).src=""};
	document.getElementById("DetBar").src="Assets/Miscellaneous/PlainDetailBar.PNG";
	document.getElementById("Icon").style.visibility="hidden";
	document.getElementById("DetBarName").innerHTML="";
	document.getElementById("DetBarDescription").innerHTML="";
	document.getElementById("Health").style.visibility="hidden";
	document.getElementById("Damage").style.visibility="hidden";
	document.getElementById("Movement").style.visibility="hidden";
	document.getElementById("Biome").style.visibility="hidden";


		let Preffix=Factions[Constants.Commanders[1].Allegiance].Preffix;
		let Quote=0;
		if(Factions!=CampaignFactions){Preffix="GEN"};

		if(Victory) {
			battalion.soundPlayer.playSound("Victory");
		} else {
			battalion.soundPlayer.playSound("Defeat");
		}

		if(Victory){document.getElementById("EndBattleImage").src="Assets/Paralogues/Victory"+Preffix+".PNG";
			Quote=Language.VictoryQuotes}else{
			document.getElementById("EndBattleImage").src="Assets/Paralogues/Defeat"+Preffix+".PNG";
			Quote=Language.DefeatQuotes

		};

		if(Factions!=CampaignFactions){Quote=Quote[0]}else{Quote=Quote[Constants.Commanders[1].Allegiance]};
		Quote=Quote[Math.floor(Math.random()*Quote.length)];
		document.getElementById("EndBattleQuote").innerHTML=Quote;
		document.getElementById("EndBattleQuote").style.color=Factions[Constants.Commanders[1].Allegiance].color;


	if(!Victory && Resolution){
		//alert("It's ok bro, we're not all Chuck Norris");
	Resolution=false;
	document.getElementById("Battlemap").style.visibility="hidden";
	document.getElementById("Main Menu").style.visibility="visible";
	rostermap=0;
	for(let i=1;i<=10;i++){for(let j=1;j<=10;j++){
	document.getElementById("Entity "+i+"X"+j).style.visibility="hidden";
	document.getElementById("Marker "+i+"X"+j).style.visibility="hidden";
	document.getElementById("Canceler "+i+"X"+j).style.visibility="hidden";
	document.getElementById("Structure "+i+"X"+j).style.visibility="hidden";
	}};
	};


	if(Victory && Resolution){
		//alert("GG bro! You won the level!");
	Victory=false;
	Resolution=false;
	document.getElementById("Battlemap").style.visibility="hidden";
	if(ChosenMission==5){CallInterlogue()};
	for(let i=1;i<=10;i++){for(let j=1;j<=10;j++){
	//alert(document.getElementById("Entity "+i+"X"+j).style.visibility);
	document.getElementById("Entity "+i+"X"+j).style.visibility="hidden";
	document.getElementById("Marker "+i+"X"+j).style.visibility="hidden";
	document.getElementById("Canceler "+i+"X"+j).style.visibility="hidden";
	document.getElementById("Structure "+i+"X"+j).style.visibility="hidden";
	if(ChosenNation!=0){Campaigns[ChosenNation-1][ChosenChapter-1][ChosenMission-1].Finished=true};
	}};
	};



	//This bloc calls the endbattle screen

	//wipeMap();
	function endbattlescreen(){document.getElementById('EndBattleScreen').style.visibility='visible'
	document.getElementById("Battlemap").style.visibility="hidden";



	};
	document.getElementById('EndBattleScreen').style.visibility='visible';
	//setTimeout(endbattlescreen,1000);

	let FactionsInvolved=[];
	for(let a=1;a<Constants.Commanders.length;a++){
		FactionsInvolved[a-1]=Factions[Constants.Commanders[a].Allegiance];
		
		};

	Coallitions=[];
	for(let c=0;c<FactionsInvolved.length;c++){
		let CoallitionCheck=true;
		for(let d=0; d<Coallitions.length; d++){if(Coallitions[d]==FactionsInvolved[c].faction){CoallitionCheck=false}};
		if(CoallitionCheck){Coallitions[Coallitions.length]=FactionsInvolved[c].faction};
		};

		//alert(Coallitions.length);

	for(let b=0; b<Coallitions.length; b++){
		let CoalTit=document.createElement("p");
		CoalTit.id='CoallitionTitle'+Coallitions[b];
		CoalTit.innerHTML=Coallitions[b];
		CoalTit.style.position="absolute";
		CoalTit.style.top=70+b*210+"px";
		document.getElementById("EndBattleScreen").appendChild(CoalTit);
		};

	let CoallitionMirror=[]
	for(let e=0;e<Coallitions.length;e++){CoallitionMirror[e]=0;};

	for(let f=0;f<FactionsInvolved.length;f++){

		let AnalBlock=document.createElement("div");
		AnalBlock.id="AnalysisBlock"+FactionsInvolved[f].Preffix;
		//AnalBlock.style.background="#c0c0c0";
		AnalBlock.style.background=FactionsInvolved[f].color;
		AnalBlock.style.position="absolute";
		AnalBlock.style.width="210px";
		AnalBlock.style.height="175px";
		AnalBlock.style.border="3px solid magenta";
		let x=0;
		let y=0;
		for(let g=0; g<=Coallitions.length; g++){
			if(Coallitions[g]!=FactionsInvolved[f].faction){y++}else{CoallitionMirror[g]++; x=CoallitionMirror[g]; g=Coallitions.length};
			};

		AnalBlock.style.top=105+y*210+"px";
		AnalBlock.style.left=-175+x*245+"px";	


		let UnitP=document.createElement("p");
		UnitP.style.position='absolute';
		UnitP.style.top='40px';
		UnitP.style.left='20px';
		//UnitP.innerHTML=Language.SystemTerms[135];
		UnitP.innerHTML='Units Alive:';
		UnitP.style.zIndex=1;
		UnitP.style.color='lime';
		UnitP.id="UnitCounterP"+FactionsInvolved[f].Preffix;

		let Bck=document.createElement('div');
		Bck.style.position="absolute";
		Bck.style.top="35px";
		Bck.style.left="0px";
		Bck.style.width='210px';
		Bck.style.height='140px';
		Bck.style.background='#b0b0b0';

		let Tit=document.createElement("p");
		Tit.style.position='absolute';
		Tit.style.width='200px';
		Tit.style.height='20px';
		Tit.style.top='0px';
		Tit.style.left='10px';
		Tit.style.textAlign='center';
		Tit.id="FactionTitle"+FactionsInvolved[f].Preffix;
		Tit.innerHTML='Chuchu';
		Tit.style.fontSize='12px';



		let StrucP=document.createElement("p");
		StrucP.style.position='absolute';
		StrucP.style.top='60px';
		StrucP.style.left='20px';
		//StrucP.innerHTML=Language.SystemTerms[135];
		StrucP.innerHTML='Structures:';
		StrucP.style.zIndex=1;
		StrucP.style.color='lime';
		StrucP.id="StructureCounterP"+FactionsInvolved[f].Preffix;

		let UnitQ=document.createElement("p");
		UnitQ.style.position='absolute';
		UnitQ.style.top='48px';
		UnitQ.style.left='125px';
		UnitQ.innerHTML='0/0';
		UnitQ.style.zIndex=1;
		UnitQ.style.color='lime';
		UnitQ.id="UnitCounter"+FactionsInvolved[f].Preffix;

		UnitQ.style.fontSize='12px';


		let StrucQ=document.createElement("p");
		StrucQ.style.position='absolute';
		StrucQ.style.top='68px';
		StrucQ.style.left='125px';
		StrucQ.innerHTML='0/0';
		StrucQ.style.zIndex=1;
		StrucQ.style.color='lime';
		StrucQ.id="StructureCounter"+FactionsInvolved[f].Preffix;

		StrucQ.style.fontSize='12px';


		document.getElementById("EndBattleScreen").appendChild(AnalBlock);
		document.getElementById("AnalysisBlock"+FactionsInvolved[f].Preffix).appendChild(Tit);
		document.getElementById("AnalysisBlock"+FactionsInvolved[f].Preffix).appendChild(Bck);
		document.getElementById("AnalysisBlock"+FactionsInvolved[f].Preffix).appendChild(UnitP);
		document.getElementById("AnalysisBlock"+FactionsInvolved[f].Preffix).appendChild(StrucP);
		document.getElementById("AnalysisBlock"+FactionsInvolved[f].Preffix).appendChild(UnitQ);
		document.getElementById("AnalysisBlock"+FactionsInvolved[f].Preffix).appendChild(StrucQ);		
		};

		let TotalStructures=0;
		for(let h=0; h<Map.length; h++){for(let i=0; i<Map[0].length; i++){if(Terrain[Map[h][i]].Urbanistics>1){TotalStructures++}}};
		for(let j=0; j<FactionsInvolved.length; j++){
			let OwnStructures=0;


			for(let k=0; k<Map.length; k++){
				for(let l=0; l<Map[0].length; l++){
					if(Terrain[Map[k][l]].Urbanistics>1 && ControlMap[k][l]==Constants.Commanders[j+1].Allegiance){OwnStructures++};
				};
			};

			let Rapport=Math.round(OwnStructures/TotalStructures*10000)/100;
			document.getElementById("StructureCounter"+FactionsInvolved[j].Preffix).innerHTML=(OwnStructures+"/"+TotalStructures+"("+Rapport+"%)");

			let TotalUnits=0;
			let AliveUnits=0;
			//let mapRoster=MapRoster;
			//alert(mapRoster.length);
			for(let m=1; m<MapRoster.length; m++){if(MapRoster[m].faction==Constants.Commanders[j+1].Allegiance){TotalUnits++; if(MapRoster[m].life>0){AliveUnits++} }};
			let UnitRapport=Math.round(AliveUnits/TotalUnits*10000)/100;
			document.getElementById("UnitCounter"+FactionsInvolved[j].Preffix).innerHTML=(AliveUnits+"/"+TotalUnits+"("+UnitRapport+"%)");

			document.getElementById("FactionTitle"+FactionsInvolved[j].Preffix).innerHTML=Factions[Constants.Commanders[j+1].Allegiance].name;
			if(Factions[Constants.Commanders[j+1].Allegiance].color=="Black"){document.getElementById("FactionTitle"+FactionsInvolved[j].Preffix).style.color='indigo'};
			document.getElementById("StructureCounter"+FactionsInvolved[j].Preffix).style.color=FactionsInvolved[j].color;
			document.getElementById("UnitCounter"+FactionsInvolved[j].Preffix).style.color=FactionsInvolved[j].color;
			document.getElementById("StructureCounterP"+FactionsInvolved[j].Preffix).style.color=FactionsInvolved[j].color;
			document.getElementById("UnitCounterP"+FactionsInvolved[j].Preffix).style.color=FactionsInvolved[j].color;
			};

			if(ChosenMission==5){
				if(ChosenChapter==5 && ChosenNation==1){alert("We have forgiven the traitorous Vladov, for he too has suffered greatly. Despite all, he eventually repented and earned his redemption through fire and steel. If you want to, you can put yourself in his shoes and play his campaign")};
				if(ChosenChapter==5 && ChosenNation==2){alert("For so long, the subhuman slaves have refused to bow down and accept their fate. Every second they squirm around in mud trying to subvert our glorious empire in any way they can. If you wish, you can play their campaign now")};
				if(ChosenChapter==3 && ChosenNation==3){alert("And so, Shmelev cast down his mask. He will fight to preserve matriarchy, and his own personal interests while at that. If you wish to observe his antics you may now play Shmelev's campaign")};
				if(ChosenChapter==5 && ChosenNation==4){alert("If you so wish, you can go fight for the Syndicalist cause. It will not change their fate, but might allow you to observe their workings and conflicts")};
				if(ChosenChapter==5 && ChosenNation==5){alert("The curtain has fallen over Elam. The collaborators have established a sock puppet regime and Elam shall never again rise. There are, however, a few who refuse to give up the fight. If you want to witness their final struggle, you may now play their campaign.")};

			};

	for(let eth=0; eth<MapRoster.length; eth++){MapRoster[eth].life=-1};};
function EndTurn(SubRosters,Map,Constants,Roster){
	//Map=Campaigns[ChosenNation-1][ChosenChapter-1][ChosenMission-1].Map;
	//alert(Roster);
	//alert(Constants);

	Turn++;
	//alert(Turn);


	
	CurrentTurn=(Turn-1)%AttackOrder.length;

	//console.log(Roster);
	Inspection(Turn,Constants,Roster);

	for(let a=1; a<=GlassPanels; a++){
		let dudeIndex=SubRosters[(Turn-1+a)%AttackOrder.length][0].faction;
		//alert(Turn);
		//alert(dudeIndex);
		document.getElementById("Glassplatecolor"+a).style.background=Factions[dudeIndex].color;
		//if(Factions==CampaignFactions){document.getElementById("GlassplateCrest"+a).src="Assets/Emblems/Crest"+Factions[dudeIndex].Preffix+".PNG"}else{document.getElementById("GlassplateCrest"+a).src="Assets/Emblems/CrestNON.PNG"};
		document.getElementById("Glassplatename"+a).innerHTML=Factions[dudeIndex].name;
		if(document.getElementById("Glassplatecolor"+a).style.background!='black'){document.getElementById("Glassplatename"+a).style.color='black'}else{document.getElementById("Glassplatename"+a).style.color='indigo'};};


	
	TurnIndex++;



	//alert(AttackOrder[CurrentTurn]);
	if(AttackOrder[CurrentTurn]==PlayerChoiceFaction){
		//alert(SubRosters)
		PITurn(SubRosters[CurrentTurn],Map,Constants);
		//alert("PI");
	}else{
		//alert(CurrentTurn);

		if(!Resolution){AITurn(SubRosters[CurrentTurn],Map,Constants);
		//alert("AI");

		//EndTurn(SubRosters,Map,Constants,Roster)
		};
		//InterphaseBanner(AttackOrder[CurrentTurn],Turn)

	};};
function EvaluateDynamicEvent(Comutator,LastUnit){
	let TriggerKey=false;
	if(Comutator=='Locomotion'){
		//for(let a=0; a<DynamicEvents.length; a++){if()};
		for(let b=0; b<DynamicEvents.length; b++){
			if(DynamicEvents[b].Turn!=0){if(Turn==DynamicEvents[b].Turn){TriggerKey=true}};
			if(DynamicEvents[b].TilesCaptured.length>0){
				let CaptureKey=true;
				for(let c=0; c<DynamicEvents[b].TilesCaptured.length; c++){
					let indexer=DynamicEvents[b].TilesCaptured[c];
					if(rostermap[indexer.x][indexer.y]==0 || rostermap[indexer.x][indexer.y].coallition!=Factions[PlayerChoiceFaction].faction){CaptureKey=false};
				};
				//alert(CaptureKey);
				if(CaptureKey){TriggerKey=true};
			};

			if(DynamicEvents[b].LineCrossed!=null){
				let Line=DynamicEvents[b].LineCrossed;

				if(Line.gyro=='West'){if(LastUnit[1]<Line.Y){TriggerKey=true}};
				if(Line.gyro=='East'){if(LastUnit[1]>Line.Y){TriggerKey=true}};
				if(Line.gyro=='North'){if(LastUnit[0]<Line.X){TriggerKey=true}};
				if(Line.gyro=='South'){if(LastUnit[0]>Line.X){TriggerKey=true}};





				};






				if(TriggerKey&&DynamicEvents[b].selfswitch){DynamicEvents[b].selfswitch=false; RunEvent(DynamicEvents[b].Event)};
			};



	}else if(Comutator=='Action'){
		TriggerKey=false;

		for(let d=0; d<DynamicEvents.length;d++){
			if(DynamicEvents[d].Turn!=0){if(Turn==DynamicEvents[d].Turn){TriggerKey=true}};
			if(DynamicEvents[d].UnitsDead.length>0){
				let UnitKey=true;
				for(let e=0; e<DynamicEvents[d].UnitsDead.length;e++){
					let unit=DynamicEvents[d].UnitsDead[e];
					if(MapRoster[unit].life>0){UnitKey=false};
				}; 
				if(UnitKey){TriggerKey=true};
			};

			if(DynamicEvents[d].FactionDead!=0){
			let FactionKey=true;
				for(let e=0; e<MapRoster.length; e++){if(MapRoster[e].faction==DynamicEvents[d].FactionDead && MapRoster[e].life>0){FactionKey=false}};
				if(FactionKey){TriggerKey=true};

			};




		if(TriggerKey&&DynamicEvents[d].selfswitch){DynamicEvents[d].selfswitch=false; RunEvent(DynamicEvents[d].Event)};};
	}else{}};
function ExecuteSpeciation(Speciator){
	//CostFactor=1;
	if(Speciator==-2){CostFactor=0.8};
	if(Speciator==-1){CostFactor=0.9};
	if(Speciator==-0){CostFactor=1};
	if(Speciator==1){CostFactor=1.4};
	if(Speciator==2){CostFactor=2};
	Speciation=Speciator;
	for(let i=-2; i<3;i++){document.getElementById('MoraleParticulator'+i).src='Assets/Traits/Morale0.PNG'};
	document.getElementById('MoraleParticulator'+Speciator).src='Assets/Traits/Morale'+Speciator+'.PNG';
	let IndustrialLimit=40; 
	if(IndustrialBranchBrowsed!=1){IndustrialLimit=10};
	for(let m=1;m<=IndustrialLimit;m++){document.getElementById('PriceTag'+m).innerHTML='₤'+Math.round(Units[MontreIndexBasis+m].Cost*CostFactor); if(YourMoney<Math.round(Units[MontreIndexBasis+m].Cost*CostFactor)){document.getElementById("UnitFrame"+m).src="Assets/Miscellaneous/UnitUnavailableFrame.PNG"}else{document.getElementById("UnitFrame"+m).src="Assets/Miscellaneous/UnitAvailableFrame.PNG"}}


	};
function FactionInformations(Ordinal){

	//alert(AttackOrder);
	let index=AttackOrder[(Ordinal+TurnIndex-2)%AttackOrder.length];
	//alert(Turn);
	document.getElementById("FactionDetailsName").innerHTML=Factions[index].name;
	document.getElementById("FactionDetailsName").style.color=Factions[index].color;

	let RelationType="Ally";
	//alert(AttackOrder);
	if(PlayerChoiceFaction==index){RelationType="Same"};
	if(Factions[PlayerChoiceFaction].faction!=Factions[index].faction){RelationType="Enemy"};
	if(RelationType=="Same"){document.getElementById("FactionDetailsRelation").innerHTML=Language.SystemTerms[125]+": "+Language.SystemTerms[126]; document.getElementById("FactionDetailsRelation").style.color='yellow'};
	if(RelationType=="Ally"){document.getElementById("FactionDetailsRelation").innerHTML=Language.SystemTerms[125]+": "+Language.SystemTerms[127]; document.getElementById("FactionDetailsRelation").style.color='blue'};
	if(RelationType=="Enemy"){document.getElementById("FactionDetailsRelation").innerHTML=Language.SystemTerms[125]+": "+Language.SystemTerms[128]; document.getElementById("FactionDetailsRelation").style.color='orange'};
	document.getElementById("FactionDetailsLeader").innerHTML=Language.SystemTerms[138]+": "+Constants.Commanders[AttackOrder.indexOf(index,0)+1].Fullname;
	document.getElementById("FactionDetailsDao").innerHTML=Language.SystemTerms[131]+":0";
	//alert(Constants.Funds);
	document.getElementById("FactionDetailsFunds").innerHTML=Language.SystemTerms[133]+Constants.Funds[AttackOrder.indexOf(index,0)+1];
	if(index==1){document.getElementById("FactionDetailsFunds").innerHTML=Language.SystemTerms[133]+YourMoney};

	for(let a=1; a<=5; a++){
		//alert(Factions[index].SpecialInfantry);
		if(!Factions[index].SpecialInfantry[a-1]){document.getElementById("SpecInf"+a).src="Assets/Traits/SpecInf0.PNG"}else{document.getElementById("SpecInf"+a).src="Assets/Traits/SpecInf"+a+".PNG"};
		if(!Factions[index].SpecialVehicles[a-1]){document.getElementById("SpecTank"+a).src="Assets/Traits/SpecTank0.PNG"}else{document.getElementById("SpecTank"+a).src="Assets/Traits/SpecTank"+a+".PNG"};


		};

	document.getElementById("FactionDetails").style.visibility="inherit"};
//fillMap() is deprecated and has been replaced by FillMap()
function fillMap(Map){

	for(let X=StandardX;X<StandardX+Map.length;X++){
	for(let Y=StandardY;Y<StandardY+Map[0].length;Y++){
		let Tile=Map[X][Y];
		let Address="Tile "+(X+1)+"X"+(Y+1);
		let Strucdress="Structure "+(X+1)+"X"+(Y+1);

		document.getElementById(Strucdress).style.visibility="hidden";
		document.getElementById(Strucdress).style.filter="";
		/*
		let EdgeA=document.getElementById("A "+(X+1-StdX)+ " X " +(Y+1-StdY));
		let EdgeB=document.getElementById("B "+(X+1-StdX)+ " X " +(Y+1-StdY));
		let EdgeC=document.getElementById("C "+(X+1-StdX)+ " X " +(Y+1-StdY));
		let EdgeD=document.getElementById("D "+(X+1-StdX)+ " X " +(Y+1-StdY));
		if(EdgeA!=null){EdgeA.remove()};
		if(EdgeB!=null){EdgeB.remove()};
		if(EdgeC!=null){EdgeC.remove()};
		if(EdgeD!=null){EdgeD.remove()};
		*/

		document.getElementById("A "+(X+1)+"X"+(Y+1)).style.visibility="hidden";
		document.getElementById("B "+(X+1)+"X"+(Y+1)).style.visibility="hidden";
		document.getElementById("C "+(X+1)+"X"+(Y+1)).style.visibility="hidden";
		document.getElementById("D "+(X+1)+"X"+(Y+1)).style.visibility="hidden";



		switch(Tile){

		case 1:
			var type= Math.ceil(Math.random()*8);
			var offset=0;
			variant= "Assets/Tiles/Plains"+type+".PNG";
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src=variant;
			break;

		case 2:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			if(type==2){offset=-4};
			if(type==3){offset=-3};
			if(type==4){offset=-12}
			variant= "Assets/Tiles/Forest"+type+".PNG";
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src=variant;
			break;

		case 3:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			if(type==3){offset=-4};
			if(type==4){offset=-5};
			variant= "Assets/Tiles/Hills"+type+".PNG";
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src=variant;
			break;

		case 4:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			if(type==2){offset=-4};
			if(type==3){offset=-9};
			if(type==4){offset=-10};
			variant= "Assets/Tiles/Mountains"+type+".PNG";
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src=variant;
			break;

		case 5:
			var offset=-8;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Volcano.PNG";
			break;

		case 6:
			var offset=0;
			var variant=0;
			
			if(X>0){if(Terrain[Map[X-1][Y]].Urbanistics > 0){variant+=1}};
			if(Y+1<Map[0].length){if(Terrain[Map[X][Y+1]].Urbanistics>0){variant+=2}};
			if(X+1<Map.length){if(Terrain[Map[X+1][Y]].Urbanistics>0){variant+=4}};
			if(Y>0){if(Terrain[Map[X][Y-1]].Urbanistics > 0){variant+=8}};
			//if(X>0){if((Map[X-1][Y]>5 && Map[X-1][Y]<15) || (Map[X-1][Y]>20 && (Map[X-1][Y]<23))){variant+=1}};
			//if(Y<Map[0].length){if((Map[X][Y+1]>5 && Map[X][Y+1]<15) || (Map[X][Y+1]>20 && (Map[X][Y+1]<23))){variant+=2}};
			//if(X<Map.length){if((Map[X+1][Y]>5 && Map[X+1][Y]<15) || (Map[X+1][Y]>20 && (Map[X+1][Y]<23))){variant+=4}};
			//if(Y>0){if((Map[X][Y-1]>5 && Map[X][Y-1]<15) || (Map[X][Y-1]>20 && (Map[X][Y-1]<23))){variant+=2}};
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src="Assets/Tiles/Road"+variant+".PNG";
			break;

		case 7:
			var offset=-14;
			var type= Math.ceil(Math.random()*2);
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Ruins"+type+".PNG";
			break;

		case 8:
			var offset=-14;
			var type= Math.ceil(Math.random()*4);
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Urban District"+type+".PNG";
			break;

		case 9:
			var offset=-10;
			document.getElementById(Address).style.top="0px";
			document.getElementById(Address).src="Assets/Tiles/Plains.PNG";
			document.getElementById(Strucdress).style.visibility="visible";
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src= "Assets/Tiles/Industrial District.PNG";
			document.getElementById(Strucdress).style.filter=Factions[ControlMap[X][Y]].ChromaCode;
			break;

		case 10:
			var offset=-8;
			document.getElementById(Address).style.top="0px";
			document.getElementById(Address).src="Assets/Tiles/Plains.PNG";
			document.getElementById(Strucdress).style.visibility="visible";
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src= "Assets/Tiles/Military-Industrial Complex.PNG";
			document.getElementById(Strucdress).style.filter=Factions[ControlMap[X][Y]].ChromaCode;
			break;

		case 11:
			var offset=-14;
			document.getElementById(Address).style.top="0px";
			document.getElementById(Address).src="Assets/Tiles/Plains.PNG";
			document.getElementById(Strucdress).style.visibility="visible";
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src= "Assets/Tiles/Aviation Industrial Facility.PNG";
			document.getElementById(Strucdress).style.filter=Factions[ControlMap[X][Y]].ChromaCode;
			break;

		case 12:
			var offset=-14;
			document.getElementById(Address).style.top="0px";
			document.getElementById(Address).src="Assets/Tiles/Plains.PNG";
			document.getElementById(Strucdress).style.visibility="visible";
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src= "Assets/Tiles/Shipbuilding Facility.PNG";
			document.getElementById(Strucdress).style.filter=Factions[ControlMap[X][Y]].ChromaCode;
			break;

		case 13:
			var offset=0;
			document.getElementById(Address).style.top="0px";
			document.getElementById(Address).src="Assets/Tiles/Plains.PNG";
			document.getElementById(Strucdress).style.visibility="visible";
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src= "Assets/Tiles/Headquarters.PNG";
			document.getElementById(Strucdress).style.filter=Factions[ControlMap[X][Y]].ChromaCode;
			break;

		case 14:
			var offset=-18;
			document.getElementById(Address).style.top="0px";
			document.getElementById(Address).src="Assets/Tiles/Plains.PNG";
			document.getElementById(Strucdress).style.visibility="visible";
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src= "Assets/Tiles/Command Center.PNG";
			document.getElementById(Strucdress).style.filter=Factions[ControlMap[X][Y]].ChromaCode;
			break;

		case 15:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			if(type==2){offset=-4};
			if(type==3){offset=-3};
			if(type==4){offset=-12}
			variant= "Assets/Tiles/Taiga"+type+".PNG";
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src=variant;
			break;

		case 16:
			var type= Math.ceil(Math.random()*3);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Desert"+type+".PNG";
			break;

		case 17:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			variant= "Assets/Tiles/Tundra"+type+".PNG";
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src=variant;
			break;

		case 18:
			var type= Math.ceil(Math.random()*3);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Extreme Desert"+type+".PNG";
			break;

		case 19:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Arctic Hellhole"+type+".PNG";
			break;

		case 20:
			var offset=0;
			var axis="V";
			var variant=0;
			if(X>0){if(Terrain[Map[X-1][Y]].SailThrough<100){axis="H"}};
			if(Y<Map[0].length-1){if(Terrain[Map[X][Y+1]].SailThrough<100){axis="V"}};
			if(X<Map.length-1){if(Terrain[Map[X+1][Y]].SailThrough<100){axis="H"}};
			if(Y>0){if(Terrain[Map[X][Y-1]].SailThrough<100){axis="V"}};
			if(X>0){if(Map[X-1][Y]==20 || Map[X-1][Y]==21){axis="V"}};
			if(Y<Map[0].length-1){if(Map[X][Y+1]==20 || Map[X][Y+1]==21){axis="H"}};
			if(X<Map.length-1){if(Map[X+1][Y]==20 || Map[X+1][Y]==21){axis="V"}};
			if(Y>0){if(Map[X][Y-1]==20 || Map[X][Y-1]==21){axis="H"}};

			if(axis=="V"){
			if(X>0){if(Terrain[Map[X-1][Y]].WalkThrough<100){variant+=1;}};
			if(X<Map.length-1){if(Terrain[Map[X+1][Y]].WalkThrough<100){variant+=2;}};};
			if(axis=="H"){if(Y>0){if(Terrain[Map[X][Y-1]].WalkThrough<100){variant+=1;}};
			if(Y<Map[0].length-1){if(Terrain[Map[X][Y+1]].WalkThrough<100){variant+=2;}};};

			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Bridge"+axis+variant+".PNG";
			break;

		case 21:
			var offset=0;
			var axis="V";
			var variant=0;
			if(X>0){if(Terrain[Map[X-1][Y]].SailThrough<100){axis="H"}};
			if(Y<Map[0].length-1){if(Terrain[Map[X][Y+1]].SailThrough<100){axis="V"}};
			if(X<Map.length-1){if(Terrain[Map[X+1][Y]].SailThrough<100){axis="H"}};
			if(Y>0){if(Terrain[Map[X][Y-1]].SailThrough<100){axis="V"}};
			if(X>0){if(Map[X-1][Y]==20 || Map[X-1][Y]==21){axis="V"}};
			if(Y<Map[0].length-1){if(Map[X][Y+1]==20 || Map[X][Y+1]==21){axis="H"}};
			if(X<Map.length-1){if(Map[X+1][Y]==20 || Map[X+1][Y]==21){axis="V"}};
			if(Y>0){if(Map[X][Y-1]==20 || Map[X][Y-1]==21){axis="H"}};

			if(axis=="V"){
			if(X>0){if(Terrain[Map[X-1][Y]].WalkThrough<100){variant+=1;}};
			if(X<Map.length-1){if(Terrain[Map[X+1][Y]].WalkThrough<100){variant+=2;}};};
			if(axis=="H"){if(Y>0){if(Terrain[Map[X][Y-1]].WalkThrough<100){variant+=1;}};
			if(Y<Map[0].length-1){if(Terrain[Map[X][Y+1]].WalkThrough<100){variant+=2;}};};

			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/HighBridge"+axis+variant+".PNG";
			break;

		case 22:
			var offset=0;
			var variant=0;

			if(X>0){if(Terrain[Map[X-1][Y]].SailThrough<100){variant+=1;}};
			if(Y<Map[0].length-1){if(Terrain[Map[X][Y+1]].SailThrough<100){variant+=2;}};
			if(X<Map.length-1){if(Terrain[Map[X+1][Y]].SailThrough<100){variant+=4;}};
			if(Y>0){if(Terrain[Map[X][Y-1]].SailThrough<100){variant+=8;}};

			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/River"+variant+".PNG";
			break;

		case 23:
			var offset=0;
			var variant=0;
			//alert(Y);
			if(X>0){if(Terrain[Map[X-1][Y]].SailThrough<100){variant+=1;}};
			if(Y<Map[0].length-1){if(Terrain[Map[X][Y+1]].SailThrough<100){variant+=2;}};
			if(X<Map.length-1){if(Terrain[Map[X+1][Y]].SailThrough<100){variant+=4;}};
			if(Y>0){if(Terrain[Map[X][Y-1]].SailThrough<100){variant+=8;}};
			if(X==0){variant+=1};
			if(Y==Map[0].length-1){variant+=2};
			if(X==Map.length-1){variant+=4};
			if(Y==0){variant+=8};

			if(X>0 && Y>0){if(Terrain[Map[X-1][Y-1]].SailThrough==100 && (variant==15 || variant==11 || variant==13)){document.getElementById("A "+(X+1)+"X"+(Y+1)).style.visibility="visible"}};
			if(X>0 && Y<Map[0].length-1){if(Terrain[Map[X-1][Y+1]].SailThrough==100 && (variant==15 || variant==7 || variant==11)){document.getElementById("B "+(X+1)+"X"+(Y+1)).style.visibility="visible"}};
			if(X<Map.length-1 && Y>0){if(Terrain[Map[X+1][Y-1]].SailThrough==100 && (variant==15 || variant==13 || variant==14)){document.getElementById("C "+(X+1)+"X"+(Y+1)).style.visibility="visible"}};
			if(X<Map.length-1 && Y<Map[0].length-1){if(Terrain[Map[X+1][Y+1]].SailThrough==100 && (variant==15 || variant==7 || variant==14)){document.getElementById("D "+(X+1)+"X"+(Y+1)).style.visibility="visible"}};

			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Sea"+variant+".PNG";
			break;

		case 24:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Reef"+type+".PNG";
			break;

		case 25:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Floes"+type+".PNG";
			break;	

		case 26:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Archipelago"+type+".PNG";
			break;	

		case 27:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Rocks"+type+".PNG";
			break;	

		case 28:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Icebergs"+type+".PNG";
			break;	

		case 29:
			var offset=0;
			var variant=0;

			if(X>0){if(Terrain[Map[X-1][Y]].SailThrough==100){variant+=1;}};
			if(Y<Map[0].length-1){if(Terrain[Map[X][Y+1]].SailThrough==100){variant+=2;}};
			if(X<Map.length-1){if(Terrain[Map[X+1][Y]].SailThrough==100){variant+=4;}};
			if(Y>0){if(Terrain[Map[X][Y-1]].SailThrough==100){variant+=8;}};

			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Shore"+variant+".PNG";
			break;

		case 30:
			var offset=-9;
			document.getElementById(Address).src="Assets/Tiles/Sea.PNG";
			document.getElementById(Strucdress).style.visibility="visible";
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src= "Assets/Tiles/Oil Rig.PNG";
			document.getElementById(Strucdress).style.filter=Factions[ControlMap[X][Y]].ChromaCode;
			break;		

		};

	};};};
function FillMap(Map){
	//At last, I've been waiting for this moment for so long. No more provisional map generators and stopgap measures. This time it's for real.
	//-Good, because now it's personal.
	//You don't think this is personal for me too!? I'll start at 80% of my power!

	//alert("a");
	for(let a=0;a<Map.length;a++){
	for(let b=0; b<Map[0].length; b++){
	let D1=0;
	let D2=0;
	let D3=0;
	let D4=0;

	let Biome=BiomeMap[a][b];
		if((Terrain[Map[a][b]].BiomeIndex??0)!=0){Biome=1};
		if(Biome==1){Biome=""};
		if(Biome==2){Biome="Arid"};
		if(Biome==3){Biome="Boreal"};
		if(Biome==4){Biome="Barren"};
		if(Biome==5){Biome="Arctic"};
		if(Biome==6){Biome="Lunar"};
		if(Biome==7){Biome="Martian"};

	if(a>0){D1=Map[a-1][b]};
	if(b<Map[0].length-1){D2=Map[a][b+1]};
	if(a<Map.length-1){D3=Map[a+1][b]};
	if(b>0){D4=Map[a][b-1]};

	let Class=Terrain[Map[a][b]].Class;
	let TileAdress="Tile "+(a+1)+"X"+(b+1);
	let Strucdress="Structure "+(a+1)+"X"+(b+1);
	document.getElementById(Strucdress).style.visibility="hidden";

	switch(Class){

		case "LF":
			var type= Math.ceil(Math.random()*Terrain[Map[a][b]].Variants);
			var offset=Terrain[Map[a][b]].Offsets[type-1];
			var variant="Assets/Tiles/"+Terrain[Map[a][b]].name+type+Biome+".PNG";
			document.getElementById(TileAdress).style.top=offset+"px";
			document.getElementById(TileAdress).src=variant;
			break;

		case "LA":
			var type=0;

			if(Terrain[D1].Class=="LA" || Terrain[D1].Class=="MC" || Terrain[D1].Class=="S"){type+=1};
			if(Terrain[D2].Class=="LA" || Terrain[D2].Class=="MC" || Terrain[D2].Class=="S"){type+=2};
			if(Terrain[D3].Class=="LA" || Terrain[D3].Class=="MC" || Terrain[D3].Class=="S"){type+=4};
			if(Terrain[D4].Class=="LA" || Terrain[D4].Class=="MC" || Terrain[D4].Class=="S"){type+=8};

			var Var="Assets/Tiles/"+Terrain[Map[a][b]].name+type+Biome+".PNG";
			document.getElementById(TileAdress).style.top="0px";
			document.getElementById(TileAdress).src=Var;
			break;

		case "WE":
			var type=0;

			if(Terrain[D1].Class=="WF" || Terrain[D1].Class=="WA" || Terrain[D1].Class=="WE" || Terrain[D1].Class=="WS" || Terrain[D1].Class=="MC" || Terrain[D1].Class=="B" || a==0){type+=1};
			if(Terrain[D2].Class=="WF" || Terrain[D2].Class=="WA" || Terrain[D2].Class=="WE" || Terrain[D2].Class=="WS" || Terrain[D2].Class=="MC" || Terrain[D2].Class=="B" || b==Map[0].length-1){type+=2};
			if(Terrain[D3].Class=="WF" || Terrain[D3].Class=="WA" || Terrain[D3].Class=="WE" || Terrain[D3].Class=="WS" || Terrain[D3].Class=="MC" || Terrain[D3].Class=="B" || a==Map.length-1){type+=4};
			if(Terrain[D4].Class=="WF" || Terrain[D4].Class=="WA" || Terrain[D4].Class=="WE" || Terrain[D4].Class=="WS" || Terrain[D4].Class=="MC" || Terrain[D4].Class=="B" || b==0){type+=8};

			if(a>=1 && b>=1){if(Terrain[Map[a-1][b-1]].SailThrough>=100 && Terrain[D4].SailThrough<100 && Terrain[D1].SailThrough<100){document.getElementById("A "+(a+1)+"X"+(b+1)).style.visibility="visible";document.getElementById("A "+(a+1)+"X"+(b+1)).src="Assets/Tiles/EdgeA"+BiomeRegistry[BiomeMap[a-1][b-1]].Nominator+".PNG"}};
			if(a>=1 && b<Map[0].length-1){if(Terrain[Map[a-1][b+1]].SailThrough>=100 && Terrain[D1].SailThrough<100 && Terrain[D2].SailThrough<100){document.getElementById("B "+(a+1)+"X"+(b+1)).style.visibility="visible";document.getElementById("B "+(a+1)+"X"+(b+1)).src="Assets/Tiles/EdgeB"+BiomeRegistry[BiomeMap[a-1][b+1]].Nominator+".PNG"}};
			if(a<Map.length-1 && b>=1){if(Terrain[Map[a+1][b-1]].SailThrough>=100 && Terrain[D4].SailThrough<100 && Terrain[D3].SailThrough<100){document.getElementById("C "+(a+1)+"X"+(b+1)).style.visibility="visible";document.getElementById("C "+(a+1)+"X"+(b+1)).src="Assets/Tiles/EdgeC"+BiomeRegistry[BiomeMap[a+1][b-1]].Nominator+".PNG"}};
			if(a<Map.length-1 && b<Map[0].length-1){if(Terrain[Map[a+1][b+1]].SailThrough>=100 && Terrain[D3].SailThrough<100 && Terrain[D2].SailThrough<100){document.getElementById("D "+(a+1)+"X"+(b+1)).style.visibility="visible";document.getElementById("D "+(a+1)+"X"+(b+1)).src="Assets/Tiles/EdgeD"+BiomeRegistry[BiomeMap[a+1][b+1]].Nominator+".PNG"}};

			var Var="Assets/Tiles/"+Terrain[Map[a][b]].name+type+Biome+".PNG";
			document.getElementById(TileAdress).style.top="0px";
			document.getElementById(TileAdress).src=Var;



			break;

		case "WA":
			var type=0;

			if(Terrain[D1].Class=="WA" || Terrain[D1].Class=="MC" || Terrain[D1].Class=="WF" || Terrain[D1].Class=="WE" || Terrain[D1].Class=="B"){type+=1};
			if(Terrain[D2].Class=="WA" || Terrain[D2].Class=="MC" || Terrain[D2].Class=="WF" || Terrain[D2].Class=="WE" || Terrain[D2].Class=="B"){type+=2};
			if(Terrain[D3].Class=="WA" || Terrain[D3].Class=="MC" || Terrain[D3].Class=="WF" || Terrain[D3].Class=="WE" || Terrain[D3].Class=="B"){type+=4};
			if(Terrain[D4].Class=="WA" || Terrain[D4].Class=="MC" || Terrain[D4].Class=="WF" || Terrain[D4].Class=="WE" || Terrain[D4].Class=="B"){type+=8};

			var Var="Assets/Tiles/"+Terrain[Map[a][b]].name+type+Biome+".PNG";
			document.getElementById(TileAdress).style.top="0px";
			document.getElementById(TileAdress).src=Var;

			break;

		case "WF":
			var type= Math.ceil(Math.random()*Terrain[Map[a][b]].Variants);
			var offset=Terrain[Map[a][b]].Offsets[type-1];
			var variant="Assets/Tiles/"+Terrain[Map[a][b]].name+type+".PNG";
			document.getElementById(TileAdress).style.top=offset+"px";
			document.getElementById(TileAdress).src=variant;

			break;

		case "WS":
			var underType=0;
			if(Terrain[D1].SailThrough<100){underType+=1};
			if(Terrain[D2].SailThrough<100){underType+=2};
			if(Terrain[D3].SailThrough<100){underType+=4};
			if(Terrain[D4].SailThrough<100){underType+=8};

			if(a>=1 && b>=1){if(Terrain[Map[a-1][b-1]].SailThrough>=100 && Terrain[D4].SailThrough<100 && Terrain[D1].SailThrough<100){document.getElementById("A "+(a+1)+"X"+(b+1)).style.visibility="visible";document.getElementById("A "+(a+1)+"X"+(b+1)).src="Assets/Tiles/EdgeA"+BiomeRegistry[BiomeMap[a-1][b-1]].Nominator+".PNG"}};
			if(a>=1 && b<Map[0].length-1){if(Terrain[Map[a-1][b+1]].SailThrough>=100 && Terrain[D1].SailThrough<100 && Terrain[D2].SailThrough<100){document.getElementById("B "+(a+1)+"X"+(b+1)).style.visibility="visible";document.getElementById("B "+(a+1)+"X"+(b+1)).src="Assets/Tiles/EdgeB"+BiomeRegistry[BiomeMap[a-1][b+1]].Nominator+".PNG"}};
			if(a<Map.length-1 && b>=1){if(Terrain[Map[a+1][b-1]].SailThrough>=100 && Terrain[D4].SailThrough<100 && Terrain[D3].SailThrough<100){document.getElementById("C "+(a+1)+"X"+(b+1)).style.visibility="visible";document.getElementById("C "+(a+1)+"X"+(b+1)).src="Assets/Tiles/EdgeC"+BiomeRegistry[BiomeMap[a+1][b-1]].Nominator+".PNG"}};
			if(a<Map.length-1 && b<Map[0].length-1){if(Terrain[Map[a+1][b+1]].SailThrough>=100 && Terrain[D3].SailThrough<100 && Terrain[D2].SailThrough<100){document.getElementById("D "+(a+1)+"X"+(b+1)).style.visibility="visible";document.getElementById("D "+(a+1)+"X"+(b+1)).src="Assets/Tiles/EdgeD"+BiomeRegistry[BiomeMap[a+1][b+1]].Nominator+".PNG"}};


			//EditorControlMap[a][b]=EditationColor;
			var offset=Terrain[Map[a][b]].Offset;
			var variant="Assets/Tiles/"+Terrain[Map[a][b]].name+".PNG";
			var undervar="Assets/Tiles/Sea"+underType+".PNG";
			document.getElementById(Strucdress).style.visibility="inherit";
			document.getElementById(Strucdress).style.filter=Factions[ControlMap[a][b]].ChromaCode;
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src=variant;
			document.getElementById(TileAdress).src=undervar;


			break;

		case "MC":
			var type=0;
			var axis="H";
			var alttype=0;

			if(Terrain[D1].Class=="LA" || Terrain[D1].Class=="LF" || Terrain[D1].Class=="S" || Terrain[D1].Class=="MC"){axis="V"};
			if(Terrain[D2].Class=="LA" || Terrain[D2].Class=="LF" || Terrain[D2].Class=="S" || Terrain[D2].Class=="MC"){axis="H"};
			if(Terrain[D3].Class=="LA" || Terrain[D3].Class=="LF" || Terrain[D3].Class=="S" || Terrain[D3].Class=="MC"){axis="V"};
			if(Terrain[D4].Class=="LA" || Terrain[D4].Class=="LF" || Terrain[D4].Class=="S" || Terrain[D4].Class=="MC"){axis="H"};

			if((Terrain[D2].Class=="LA" || Terrain[D2].Class=="LF" || Terrain[D2].Class=="S")&&(Terrain[D4].Class=="LA" || Terrain[D4].Class=="LF" || Terrain[D4].Class=="S")){axis="H"};
			if((Terrain[D1].Class=="LA" || Terrain[D1].Class=="LF" || Terrain[D1].Class=="S")&&(Terrain[D3].Class=="LA" || Terrain[D3].Class=="LF" || Terrain[D3].Class=="S")){axis="V"};

			if(Terrain[D1].Class=="MC"){axis="V"};
			if(Terrain[D2].Class=="MC"){axis="H"};
			if(Terrain[D3].Class=="MC"){axis="V"};
			if(Terrain[D4].Class=="MC"){axis="H"};

			if(Terrain[D1].Class=="MC"){alttype+=1};
			if(Terrain[D2].Class=="MC"){alttype+=2};
			if(Terrain[D3].Class=="MC"){alttype+=4};
			if(Terrain[D4].Class=="MC"){alttype+=8};
	
			for(let c=0; c<4; c++){if(alttype==15-Math.pow(2,c)){axis="T"}};
			if(alttype==15){axis="O"};

			if(axis=="H"){

			if(Terrain[D4].Class=="LA" || Terrain[D4].Class=="LF" || Terrain[D4].Class=="S"){type+=1};
			if(Terrain[D2].Class=="LA" || Terrain[D2].Class=="LF" || Terrain[D2].Class=="S"){type+=2};
			if(type>0){type+=Biome};


			}else if(axis=="V"){

			if(Terrain[D1].Class=="LA" || Terrain[D1].Class=="LF" || Terrain[D1].Class=="S"){type+=1};
			if(Terrain[D3].Class=="LA" || Terrain[D3].Class=="LF" || Terrain[D3].Class=="S"){type+=2};
			if(type>0){type+=Biome};

			}else if(axis=="T"){
				type="";
				if(alttype==14){type="A"};
				if(alttype==13){type="B"};
				if(alttype==11){type="C"};
				if(alttype==7){type="D"};


			}else if(axis=="O"){
				type="";

			};

			var Var="Assets/Tiles/"+Terrain[Map[a][b]].name+axis+type+".PNG";
			document.getElementById(TileAdress).style.top=Terrain[Map[a][b]].Offset+"px";
			document.getElementById(TileAdress).src=Var;

			break;

		case "B":
			var type=0;

			/*if(Terrain[D1].Class=="LF" || Terrain[D1].Class=="LA" || Terrain[D1].Class=="MC" || a==0){type+=1};
			if(Terrain[D2].Class=="LF" || Terrain[D2].Class=="LA" || Terrain[D2].Class=="MC" || b==Map[0].length-1){type+=2};
			if(Terrain[D3].Class=="LF" || Terrain[D3].Class=="LA" || Terrain[D3].Class=="MC" || a==Map.length-1){type+=4};
			if(Terrain[D4].Class=="LF" || Terrain[D4].Class=="LA" || Terrain[D4].Class=="MC" || b==0){type+=8};*/

			if(Terrain[D1].Class=="LF" || Terrain[D1].Class=="LA" || Terrain[D1].Class=="MC" || Terrain[D1].Class=="S"){type+=1};
			if(Terrain[D2].Class=="LF" || Terrain[D2].Class=="LA" || Terrain[D2].Class=="MC" || Terrain[D2].Class=="S"){type+=2};
			if(Terrain[D3].Class=="LF" || Terrain[D3].Class=="LA" || Terrain[D3].Class=="MC" || Terrain[D3].Class=="S"){type+=4};
			if(Terrain[D4].Class=="LF" || Terrain[D4].Class=="LA" || Terrain[D4].Class=="MC" || Terrain[D4].Class=="S"){type+=8};

			if(a>1 && b>1){if(Terrain[Map[a-1][b-1]].SailThrough>=100 && Terrain[D4].SailThrough<100 && Terrain[D1].SailThrough<100){document.getElementById("A "+(a+1)+"X"+(b+1)).style.visibility="visible";document.getElementById("A "+(a+1)+"X"+(b+1)).src="Assets/Tiles/EdgeA"+BiomeRegistry[BiomeMap[a-1][b-1]].Nominator+".PNG"}};
			if(a>1 && b<Map[0].length-1){if(Terrain[Map[a-1][b+1]].SailThrough>=100 && Terrain[D1].SailThrough<100 && Terrain[D2].SailThrough<100){document.getElementById("B "+(a+1)+"X"+(b+1)).style.visibility="visible";document.getElementById("B "+(a+1)+"X"+(b+1)).src="Assets/Tiles/EdgeB"+BiomeRegistry[BiomeMap[a-1][b+1]].Nominator+".PNG"}};
			if(a<Map.length-1 && b>1){if(Terrain[Map[a+1][b-1]].SailThrough>=100 && Terrain[D2].SailThrough<100 && Terrain[D3].SailThrough<100){document.getElementById("C "+(a+1)+"X"+(b+1)).style.visibility="visible";document.getElementById("C "+(a+1)+"X"+(b+1)).src="Assets/Tiles/EdgeC"+BiomeRegistry[BiomeMap[a+1][b-1]].Nominator+".PNG"}};
			if(a<Map.length-1 && b<Map[0].length-1){if(Terrain[Map[a+1][b+1]].SailThrough>=100 && Terrain[D3].SailThrough<100 && Terrain[D4].SailThrough<100){document.getElementById("D "+(a+1)+"X"+(b+1)).style.visibility="visible";document.getElementById("D "+(a+1)+"X"+(b+1)).src="Assets/Tiles/EdgeD"+BiomeRegistry[BiomeMap[a+1][b+1]].Nominator+".PNG"}};

			var Var="Assets/Tiles/"+Terrain[Map[a][b]].name+type+Biome+".PNG";
			document.getElementById(TileAdress).style.top="0px";
			document.getElementById(TileAdress).src=Var;

			break;

		case "S":
			//To do: Manipulate underlying terrain to be a proper road, not a grass tile
			let undertype=0;
			if(Terrain[D1].Class=="LA" || Terrain[D1].Class=="MC" || Terrain[D1].Class=="S"){undertype+=1};
			if(Terrain[D2].Class=="LA" || Terrain[D2].Class=="MC" || Terrain[D2].Class=="S"){undertype+=2};
			if(Terrain[D3].Class=="LA" || Terrain[D3].Class=="MC" || Terrain[D3].Class=="S"){undertype+=4};
			if(Terrain[D4].Class=="LA" || Terrain[D4].Class=="MC" || Terrain[D4].Class=="S"){undertype+=8};



			var offset=Terrain[Map[a][b]].Offset;
			var variant="Assets/Tiles/"+Terrain[Map[a][b]].name+".PNG";
			var undervar="Assets/Tiles/Road"+undertype+Biome+".PNG";
			document.getElementById(Strucdress).style.visibility="visible";
			document.getElementById(Strucdress).style.filter=Factions[ControlMap[a][b]].ChromaCode;
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src=variant;
			document.getElementById(TileAdress).src=undervar;

			break;}














	}};};
function FillMapEditor(Tile){
	let a=Math.floor(document.getElementById("TileContainer").scrollTop/56);
	//alert(document.getElementById("TileContainer").scrollLeft-1);
	let b=Math.floor(document.getElementById("TileContainer").scrollLeft/56);
	for(let c=a; c<a+10; c++){for(let d=b; d<b+10; d++){
		EditorMap[c][d]=Tile;
		EditorEntityMap[c][d]=0;



		}};
	RefreshMapEditor();};
function FocalEditorRefresh(X,Y){
	if(EditationToggle=="Tile"){
		document.getElementById("EntityCore "+X+" X "+Y).src="";
		EditorEntityMap[X+EditorStandardX-1][Y+EditorStandardY-1]=0;
	EditorMap[X+EditorStandardX-1][Y+EditorStandardY-1]=ChosenTerrain;
	EditorControlMap[X-1][Y-1]=EditationColor;
	RefreshTile(X,Y);
	if(X>1){if(Terrain[EditorMap[X-2][Y-1]].Class!="LF" && Terrain[EditorMap[X-2][Y-1]].Class!="LE"){RefreshTile(X-1,Y)}};
	if(X<EditorMap.length){if(Terrain[EditorMap[X][Y-1]].Class!="LF" && Terrain[EditorMap[X][Y-1]].Class!="LE"){RefreshTile(X+1,Y)}};
	if(Y>1){if(Terrain[EditorMap[X-1][Y-2]].Class!="LF" && Terrain[EditorMap[X-1][Y-2]].Class!="LE"){RefreshTile(X,Y-1)}};
	if(Y<EditorMap[0].length){if(Terrain[EditorMap[X-1][Y]].Class!="LF" && Terrain[EditorMap[X-1][Y]].Class!="LE"){RefreshTile(X,Y+1)}};
	if(X>1&&Y>1){if(Terrain[EditorMap[X-2][Y-2]].Class!="LF" && Terrain[EditorMap[X-2][Y-2]].Class!="LE"){RefreshTile(X-1,Y-1)}};
	if(X<EditorMap.length&&Y>1){if(Terrain[EditorMap[X][Y-2]].Class!="LF" && Terrain[EditorMap[X][Y-2]].Class!="LE"){RefreshTile(X+1,Y-1)}};
	if(X>1&&Y<EditorMap[0].length){if(Terrain[EditorMap[X-2][Y]].Class!="LF" && Terrain[EditorMap[X-2][Y]].Class!="LE"){RefreshTile(X-1,Y+1)}};
	if(X<EditorMap.length&&Y<EditorMap[0].length){if(Terrain[EditorMap[X][Y]].Class!="LF" && Terrain[EditorMap[X][Y]].Class!="LE"){RefreshTile(X+1,Y+1)}};

	}else{
	let Chosenunit=ChosenUnit-10+10*EditorUnitClass;
	let choka=Units[Chosenunit].Movement;
	let boka=Terrain[EditorMap[X+EditorStandardX-1][Y+EditorStandardY-1]];
	if(choka=="Foot"){boka=boka.WalkThrough}else if(choka=="Wheeled"){boka=boka.DriveThrough}else if(choka=="Tracked"){boka=boka.RollThrough}else if(choka=="Amphibious"){boka=boka.WadeThrough}else if(choka=="Flight"){boka=boka.FlyThrough}else if(choka=="Rudder"){boka=boka.SailThrough}else if(choka=="Heavy Rudder"){boka=boka.DeepSailThrough}else if(choka=="Stationary"){boka=boka.SailThrough-1}

	if(100>boka){
		if(MemoryX==X && MemoryY==Y){EditationDirection++}else{EditationDirection=1};
		if(EditationDirection>4){EditationDirection-=4};
		MemoryX=X;
		MemoryY=Y;
		document.getElementById("EntityCore "+X+" X "+Y).src="Assets/Units/Static/"+Units[Chosenunit].shortname+EditationDirection+".PNG";
		if(Units[Chosenunit].MLPR??false){document.getElementById("EntityMesh "+X+" X "+Y).src="Assets/Miscellaneous/Nothing.PNG"}else{document.getElementById("EntityMesh "+X+" X "+Y).src="Assets/Units/StaticMeshes/"+Units[Chosenunit].shortname+"Mesh"+EditationDirection+".PNG";};
		document.getElementById("Entity "+X+" X "+Y).style.visibility="inherit";
		document.getElementById("EntityCore "+X+" X "+Y).style.filter=Factions[EditationColor].ChromaCode;
		document.getElementById("Entity "+X+" X "+Y).style.left=(Units[Chosenunit].StaticOffsetX ?? [0,0,0,0,0])[EditationDirection]+"px";
		document.getElementById("Entity "+X+" X "+Y).style.top=(Units[Chosenunit].StaticOffsetY ?? [0,0,0,0,0])[EditationDirection]+"px";
		EditorEntityMap[X+EditorStandardX-1][Y+EditorStandardY-1]={id:Chosenunit, faction:EditationColor, direction:EditationDirection, x:X+EditorStandardX-1, y:Y+EditorStandardY-1,hpModifier:0,morale:0};	
	}}};
function FocalMapRefresh(X,Y){




	};
function FocalTileRefresh(X,Y){
		//let Map=Map;
		let ics=X+1;
		let igrec=Y+1;
		let TileAdress="Tile "+ics+"X"+igrec;
		let Altdress="Entity "+ics+"X"+igrec;
		let AltCoreDress="EntityCore "+ics+"X"+igrec;
		let Strucdress="Structure "+ics+"X"+igrec;
		document.getElementById(TileAdress).style.top="0px";
		let unit=rostermap[ics-1][igrec-1];
		let Biome=CampaignTerrain[Map[ics-1][igrec-1]].BiomeIndex??BiomeMap[ics-1][igrec-1];
		if(Biome!=undefined){BiomeMap[ics-1][igrec-1]=Biome;};
		if(Biome==1){Biome=""};
		if(Biome==2){Biome="Arid"};
		if(Biome==3){Biome="Boreal"};
		if(Biome==4){Biome="Barren"};
		if(Biome==5){Biome="Arctic"};
		if(Biome==6){Biome="Lunar"};
		if(Biome==7){Biome="Martian"};
		if((CampaignTerrain[Map[ics-1][igrec-1]].BiomeIndex??0)!=0){Biome=""};

		document.getElementById(Strucdress).style.visibility="hidden";
		document.getElementById("A "+(ics)+"X"+(igrec)).style.visibility="hidden";
		document.getElementById("B "+(ics)+"X"+(igrec)).style.visibility="hidden";
		document.getElementById("C "+(ics)+"X"+(igrec)).style.visibility="hidden";
		document.getElementById("D "+(ics)+"X"+(igrec)).style.visibility="hidden";

		if(rostermap[ics-1][igrec-1]!=0){
			document.getElementById(Altdress).style.visibility="inherit";
			document.getElementById(AltCoreDress).style.filter=Factions[rostermap[ics-1][igrec-1].faction].ChromaCode;
			document.getElementById(Altdress).style.top=(Units[unit.unitType].StaticOffsetY ?? [0,0,0,0,0])[unit.direction]+"px";
			document.getElementById(Altdress).style.left=(Units[unit.unitType].StaticOffsetX ?? [0,0,0,0,0])[unit.direction]+"px";

			document.getElementById(Altdress).src="Assets/Units/Static/"+Units[rostermap[ics-1][igrec-1].unitType].shortname+rostermap[ics-1][igrec-1].direction+".PNG";
		}else{document.getElementById(Altdress).style.visibility="hidden";};


		let Class=CampaignTerrain[Map[ics-1][igrec-1]].Class;
		let a=X;
		let b=Y;
		let D1=0;
		let D2=0;
		let D3=0;
		let D4=0;

		if(a>0){D1=Map[a-1][b]};
		if(b<Map[0].length-1){D2=Map[a][b+1]};
		if(a<Map.length-1){D3=Map[a+1][b]};
		if(b>0){D4=Map[a][b-1]};
		
		document.getElementById(Strucdress).style.visibility="hidden";


	switch(Class){

		case "LF":
			var type= Math.ceil(Math.random()*Terrain[Map[a][b]].Variants);
			var offset=Terrain[Map[a][b]].Offsets[type-1];
			var variant="Assets/Tiles/"+Terrain[Map[a][b]].name+type+Biome+".PNG";
			document.getElementById(TileAdress).style.top=offset+"px";
			document.getElementById(TileAdress).src=variant;
			break;

		case "LA":
			var type=0;

			if(Terrain[D1].Class=="LA" || Terrain[D1].Class=="MC" || Terrain[D1].Class=="S"){type+=1};
			if(Terrain[D2].Class=="LA" || Terrain[D2].Class=="MC" || Terrain[D2].Class=="S"){type+=2};
			if(Terrain[D3].Class=="LA" || Terrain[D3].Class=="MC" || Terrain[D3].Class=="S"){type+=4};
			if(Terrain[D4].Class=="LA" || Terrain[D4].Class=="MC" || Terrain[D4].Class=="S"){type+=8};

			//console.log(CampaignTerrain[EditorMap[ics-1][igrec-1]].BiomeIndex);
			var Var="Assets/Tiles/"+Terrain[Map[a][b]].name+type+Biome+".PNG";
			document.getElementById(TileAdress).style.top="0px";
			document.getElementById(TileAdress).src=Var;
			break;

		case "WE":
			var type=0;

			if(Terrain[D1].Class=="WF" || Terrain[D1].Class=="WA" || Terrain[D1].Class=="WE" || Terrain[D1].Class=="MC" || Terrain[D1].Class=="B" || Terrain[D1].Class=="WS" || a==0){type+=1};
			if(Terrain[D2].Class=="WF" || Terrain[D2].Class=="WA" || Terrain[D2].Class=="WE" || Terrain[D2].Class=="MC" || Terrain[D2].Class=="B" || Terrain[D2].Class=="WS"|| b==Map[0].length-1){type+=2};
			if(Terrain[D3].Class=="WF" || Terrain[D3].Class=="WA" || Terrain[D3].Class=="WE" || Terrain[D3].Class=="MC" || Terrain[D3].Class=="B" || Terrain[D3].Class=="WS"|| a==Map.length-1){type+=4};
			if(Terrain[D4].Class=="WF" || Terrain[D4].Class=="WA" || Terrain[D4].Class=="WE" || Terrain[D4].Class=="MC" || Terrain[D4].Class=="B" || Terrain[D4].Class=="WS"|| b==0){type+=8};

			if(a>=1 && b>=1){if(Terrain[Map[a-1][b-1]].SailThrough>=100 && Terrain[D4].SailThrough<100 && Terrain[D1].SailThrough<100){document.getElementById("a "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("a "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeA"+BiomeRegistry[EditorBiomeMap[a-1][b-1]].Nominator+".PNG"}};
			if(a>=1 && b<Map[0].length-1){if(Terrain[Map[a-1][b+1]].SailThrough>=100 && Terrain[D1].SailThrough<100 && Terrain[D2].SailThrough<100){document.getElementById("b "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("b "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeB"+BiomeRegistry[EditorBiomeMap[a-1][b+1]].Nominator+".PNG"}};
			if(a<Map.length-1 && b>=1){if(Terrain[Map[a+1][b-1]].SailThrough>=100 && Terrain[D4].SailThrough<100 && Terrain[D3].SailThrough<100){document.getElementById("c "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("c "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeC"+BiomeRegistry[EditorBiomeMap[a+1][b-1]].Nominator+".PNG"}};
			if(a<Map.length-1 && b<Map[0].length-1){if(Terrain[Map[a+1][b+1]].SailThrough>=100 && Terrain[D3].SailThrough<100 && Terrain[D2].SailThrough<100){document.getElementById("d "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("d "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeD"+BiomeRegistry[EditorBiomeMap[a+1][b+1]].Nominator+".PNG"}};

			var Var="Assets/Tiles/"+Terrain[Map[a][b]].name+type+Biome+".PNG";
			document.getElementById(TileAdress).style.top="0px";
			document.getElementById(TileAdress).src=Var;



			break;

		case "WA":
			var type=0;

			if(Terrain[D1].Class=="WA" || Terrain[D1].Class=="MC" || Terrain[D1].Class=="WF" || Terrain[D1].Class=="WE" || Terrain[D1].Class=="B"){type+=1};
			if(Terrain[D2].Class=="WA" || Terrain[D2].Class=="MC" || Terrain[D2].Class=="WF" || Terrain[D2].Class=="WE" || Terrain[D2].Class=="B"){type+=2};
			if(Terrain[D3].Class=="WA" || Terrain[D3].Class=="MC" || Terrain[D3].Class=="WF" || Terrain[D3].Class=="WE" || Terrain[D3].Class=="B"){type+=4};
			if(Terrain[D4].Class=="WA" || Terrain[D4].Class=="MC" || Terrain[D4].Class=="WF" || Terrain[D4].Class=="WE" || Terrain[D4].Class=="B"){type+=8};

			var Var="Assets/Tiles/"+Terrain[Map[a][b]].name+type+Biome+".PNG";
			document.getElementById(TileAdress).style.top="0px";
			document.getElementById(TileAdress).src=Var;

			break;

		case "WF":
			var type= Math.ceil(Math.random()*Terrain[Map[a][b]].Variants);
			var offset=Terrain[Map[a][b]].Offsets[type-1];
			var variant="Assets/Tiles/"+Terrain[Map[a][b]].name+type+".PNG";
			document.getElementById(TileAdress).style.top=offset+"px";
			document.getElementById(TileAdress).src=variant;

			break;

		case "WS":
			var underType=0;
			if(Terrain[D1].SailThrough<100){underType+=1};
			if(Terrain[D2].SailThrough<100){underType+=2};
			if(Terrain[D3].SailThrough<100){underType+=4};
			if(Terrain[D4].SailThrough<100){underType+=8};

			if(a>=1 && b>=1){if(Terrain[Map[a-1][b-1]].SailThrough>=100 && Terrain[D4].SailThrough<100 && Terrain[D1].SailThrough<100){document.getElementById("a "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("a "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeA"+BiomeRegistry[EditorBiomeMap[a-1][b-1]].Nominator+".PNG"}};
			if(a>=1 && b<Map[0].length-1){if(Terrain[Map[a-1][b+1]].SailThrough>=100 && Terrain[D1].SailThrough<100 && Terrain[D2].SailThrough<100){document.getElementById("b "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("b "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeB"+BiomeRegistry[EditorBiomeMap[a-1][b+1]].Nominator+".PNG"}};
			if(a<Map.length-1 && b>=1){if(Terrain[Map[a+1][b-1]].SailThrough>=100 && Terrain[D4].SailThrough<100 && Terrain[D3].SailThrough<100){document.getElementById("c "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("c "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeC"+BiomeRegistry[EditorBiomeMap[a+1][b-1]].Nominator+".PNG"}};
			if(a<Map.length-1 && b<Map[0].length-1){if(Terrain[Map[a+1][b+1]].SailThrough>=100 && Terrain[D3].SailThrough<100 && Terrain[D2].SailThrough<100){document.getElementById("d "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("d "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeD"+BiomeRegistry[EditorBiomeMap[a+1][b+1]].Nominator+".PNG"}};


			//EditorControlMap[a][b]=EditationColor;
			var offset=Terrain[Map[a][b]].Offset;
			var variant="Assets/Tiles/"+Terrain[Map[a][b]].name+".PNG";
			var undervar="Assets/Tiles/Sea"+underType+".PNG";
			document.getElementById(Strucdress).style.visibility="inherit";
			document.getElementById(Strucdress).style.filter=Factions[EditorControlMap[a][b]].ChromaCode;
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src=variant;
			document.getElementById(TileAdress).src=undervar;


			break;

		case "MC":
			var type=0;
			var axis="H";
			var alttype=0;

			if(Terrain[D1].Class=="LA" || Terrain[D1].Class=="LF" || Terrain[D1].Class=="S" || Terrain[D1].Class=="MC"){axis="V"};
			if(Terrain[D2].Class=="LA" || Terrain[D2].Class=="LF" || Terrain[D2].Class=="S" || Terrain[D2].Class=="MC"){axis="H"};
			if(Terrain[D3].Class=="LA" || Terrain[D3].Class=="LF" || Terrain[D3].Class=="S" || Terrain[D3].Class=="MC"){axis="V"};
			if(Terrain[D4].Class=="LA" || Terrain[D4].Class=="LF" || Terrain[D4].Class=="S" || Terrain[D4].Class=="MC"){axis="H"};

			if((Terrain[D2].Class=="LA" || Terrain[D2].Class=="LF" || Terrain[D2].Class=="S")&&(Terrain[D4].Class=="LA" || Terrain[D4].Class=="LF" || Terrain[D4].Class=="S")){axis="H"};
			if((Terrain[D1].Class=="LA" || Terrain[D1].Class=="LF" || Terrain[D1].Class=="S")&&(Terrain[D3].Class=="LA" || Terrain[D3].Class=="LF" || Terrain[D3].Class=="S")){axis="V"};

			if(Terrain[D1].Class=="MC"){axis="V"};
			if(Terrain[D2].Class=="MC"){axis="H"};
			if(Terrain[D3].Class=="MC"){axis="V"};
			if(Terrain[D4].Class=="MC"){axis="H"};

			if(Terrain[D1].Class=="MC"){alttype+=1};
			if(Terrain[D2].Class=="MC"){alttype+=2};
			if(Terrain[D3].Class=="MC"){alttype+=4};
			if(Terrain[D4].Class=="MC"){alttype+=8};
	
			for(let c=0; c<4; c++){if(alttype==15-Math.pow(2,c)){axis="T"}};
			if(alttype==15){axis="O"};

			if(axis=="H"){

			if(Terrain[D4].Class=="LA" || Terrain[D4].Class=="LF" || Terrain[D4].Class=="S"){type+=1};
			if(Terrain[D2].Class=="LA" || Terrain[D2].Class=="LF" || Terrain[D2].Class=="S"){type+=2};
			if(type>0){type+=Biome};


			}else if(axis=="V"){

			if(Terrain[D1].Class=="LA" || Terrain[D1].Class=="LF" || Terrain[D1].Class=="S"){type+=1};
			if(Terrain[D3].Class=="LA" || Terrain[D3].Class=="LF" || Terrain[D3].Class=="S"){type+=2};
			if(type>0){type+=Biome};

			}else if(axis=="T"){
				type="";
				if(alttype==14){type="A"};
				if(alttype==13){type="B"};
				if(alttype==11){type="C"};
				if(alttype==7){type="D"};


			}else if(axis=="O"){
				type="";

			};

			var Var="Assets/Tiles/"+Terrain[Map[a][b]].name+axis+type+".PNG";
			document.getElementById(TileAdress).style.top=Terrain[Map[a][b]].Offset+"px";
			document.getElementById(TileAdress).src=Var;

			break;

		case "B":
			var type=0;
			
			/*if(Terrain[D1].Class=="LF" || Terrain[D1].Class=="LA" || Terrain[D1].Class=="MC" || a==0){type+=1};
			if(Terrain[D2].Class=="LF" || Terrain[D2].Class=="LA" || Terrain[D2].Class=="MC" || b==Map[0].length-1){type+=2};
			if(Terrain[D3].Class=="LF" || Terrain[D3].Class=="LA" || Terrain[D3].Class=="MC" || a==Map.length-1){type+=4};
			if(Terrain[D4].Class=="LF" || Terrain[D4].Class=="LA" || Terrain[D4].Class=="MC" || b==0){type+=8};*/

			if(Terrain[D1].Class=="LF" || Terrain[D1].Class=="LA" || Terrain[D1].Class=="MC" || Terrain[D1].Class=="S"){type+=1};
			if(Terrain[D2].Class=="LF" || Terrain[D2].Class=="LA" || Terrain[D2].Class=="MC" || Terrain[D2].Class=="S"){type+=2};
			if(Terrain[D3].Class=="LF" || Terrain[D3].Class=="LA" || Terrain[D3].Class=="MC" || Terrain[D3].Class=="S"){type+=4};
			if(Terrain[D4].Class=="LF" || Terrain[D4].Class=="LA" || Terrain[D4].Class=="MC" || Terrain[D4].Class=="S"){type+=8};

			if(a>1 && b>1){if(Terrain[Map[a-1][b-1]].SailThrough>=100 && Terrain[D4].SailThrough<100 && Terrain[D1].SailThrough<100){document.getElementById("a "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("a "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeA"+BiomeRegistry[EditorBiomeMap[a-1][b-1]].Nominator+".PNG"}};
			if(a>1 && b<Map[0].length-1){if(Terrain[Map[a-1][b+1]].SailThrough>=100 && Terrain[D1].SailThrough<100 && Terrain[D2].SailThrough<100){document.getElementById("b "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("b "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeB"+BiomeRegistry[EditorBiomeMap[a-1][b+1]].Nominator+".PNG"}};
			if(a<Map.length-1 && b>1){if(Terrain[Map[a+1][b-1]].SailThrough>=100 && Terrain[D2].SailThrough<100 && Terrain[D3].SailThrough<100){document.getElementById("c "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("c "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeC"+BiomeRegistry[EditorBiomeMap[a+1][b-1]].Nominator+".PNG"}};
			if(a<Map.length-1 && b<Map[0].length-1){if(Terrain[Map[a+1][b+1]].SailThrough>=100 && Terrain[D3].SailThrough<100 && Terrain[D4].SailThrough<100){document.getElementById("d "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("d "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeD"+BiomeRegistry[EditorBiomeMap[a+1][b+1]].Nominator+".PNG"}};

			var Var="Assets/Tiles/"+Terrain[Map[a][b]].name+type+Biome+".PNG";
			document.getElementById(TileAdress).style.top="0px";
			document.getElementById(TileAdress).src=Var;

			break;

		case "S":
			//To do: Manipulate underlying terrain to be a proper road, not a grass tile
			let undertype=0;
			if(Terrain[D1].Class=="LA" || Terrain[D1].Class=="MC" || Terrain[D1].Class=="S"){undertype+=1};
			if(Terrain[D2].Class=="LA" || Terrain[D2].Class=="MC" || Terrain[D2].Class=="S"){undertype+=2};
			if(Terrain[D3].Class=="LA" || Terrain[D3].Class=="MC" || Terrain[D3].Class=="S"){undertype+=4};
			if(Terrain[D4].Class=="LA" || Terrain[D4].Class=="MC" || Terrain[D4].Class=="S"){undertype+=8};


			//EditorControlMap[a][b]=EditationColor;
			var offset=Terrain[Map[a][b]].Offset;
			var variant="Assets/Tiles/"+Terrain[Map[a][b]].name+".PNG";
			var undervar="Assets/Tiles/Road"+undertype+Biome+".PNG";
			document.getElementById(Strucdress).style.visibility="inherit";
			//console.log(Factions[ControlMap[a][b]].ChromaCode);
			document.getElementById(Strucdress).style.filter=Factions[ControlMap[a][b]].ChromaCode;
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src=variant;
			document.getElementById(TileAdress).src=undervar;

			break;
		}


	};
function GhostAttack(TargetInd,TargetX,TargetY,DMG,Anim){

	if((TargetInd??0)!=0){
		//alert(DMG);
		rostermap[MapRoster[TargetInd].x][MapRoster[TargetInd].y].life-=DMG;
		AttackingAnimation(Interceptor);
		HitAnimation(TargetInd,Anim);
		if(rostermap[MapRoster[TargetInd].x][MapRoster[TargetInd].y].life<=0){UnitLost(TargetInd)};

		}else{

		if(rostermap[TargetX][TargetY]!=0){
			rostermap[TargetX][TargetY].life-=DMG;
			//alert(rostermap[TargetX][TargetY].index);
			HitAnimation(rostermap[TargetX][TargetY].index,Anim);
			if(rostermap[TargetX][TargetY].life<=0){UnitLost(rostermap[TargetX][TargetY].index)};

		}else{
			HitAnimation({stt:"Temporary",x:TargetX??0,y:TargetY??0},Anim);

		};
	};};
function GeneralInitializer(){


	//This does the scaling
	let ScreenRatio=Math.round(window.innerHeight/7);
	//alert(ScreenRatio);
	//document.getElementById("BODY").style.scale=Math.round(ScreenRatio/25)/5;
	//document.getElementById("BODY").style.scale=0.8;
	document.getElementById("BODY").style.left=(window.innerHeight-700)/2+"px";

	//if(Language!=ENG){LanguageCorrecter(Language)};

	//for(let o=1; o<=70; o++){CampaignUnits[o].name=Language.UnitNames[o]};
	document.getElementById("AphorismText").innerHTML='"'+Language.InitializerAphorisms[Aphorism*2]+'"'+"<br><br>"+Language.InitializerAphorisms[Aphorism*2+1];
	document.getElementById("PreloaderSplash").innerHTML=Language.LoaderSoundbites[Math.floor(Math.random()*Language.LoaderSoundbites.length)];
 	//This pretranslates the strings
	document.getElementById("CampaignButtonP").innerHTML=Language.SystemTerms[6];
	document.getElementById("BootCampButtonP").innerHTML=Language.SystemTerms[7];
	document.getElementById("ContinueButtonP").innerHTML=Language.SystemTerms[8];
	document.getElementById("OptionsButtonP").innerHTML=Language.SystemTerms[9];
	document.getElementById("CreditsButtonP").innerHTML=Language.SystemTerms[10];
	document.getElementById("BonusLevelsButtonP").innerHTML=Language.SystemTerms[11];
	document.getElementById("ConquestButtonP").innerHTML=Language.SystemTerms[12];
	document.getElementById("LevelEditorButtonP").innerHTML=Language.SystemTerms[13];
	document.getElementById("CodexButtonP").innerHTML=Language.SystemTerms[14];

	for(let g=1; g<=10; g++){document.getElementById('Tutorial'+g+"P").innerHTML=Language.SystemTerms[53+g]};
	document.getElementById("PlayTutorialP").innerHTML=Language.SystemTerms[17];
	for(let h=1;h<=7;h++){document.getElementById("BonusP"+h).innerHTML=Language.SystemTerms[93+h]};
	document.getElementById("PlayBonusP").innerHTML=Language.SystemTerms[17];	
	document.getElementById("Special Level Name").innerHTML=Language.SystemTerms[75];
	document.getElementById("Special Level Description").innerHTML=Language.SystemTerms[76];

	document.getElementById("GenerateEditorMap").innerHTML=Language.SystemTerms[64];
	document.getElementById("TestMapP").innerHTML=Language.SystemTerms[73];
	for(let i=1;i<=8;i++){document.getElementById("EditorP"+i).innerHTML=Language.SystemTerms[64+i]};
	document.getElementById("RegionNodeOwnerP").innerHTML=Language.SystemTerms[79];
	document.getElementById("RegionNodeCapitolP").innerHTML=Language.SystemTerms[80];
	document.getElementById("RegionNodeNameP").innerHTML=Language.SystemTerms[81];
	document.getElementById("RegionApplyP").innerHTML=Language.SystemTerms[83];	
	document.getElementById("MetadataNameP").innerHTML=Language.SystemTerms[75];
	document.getElementById("MetadataDescP").innerHTML=Language.SystemTerms[76];
	document.getElementById("MetadataHealthP").innerHTML=Language.SystemTerms[77];
	document.getElementById("MetadataMoraleP").innerHTML=Language.SystemTerms[78];
	document.getElementById("MetadataApplyP").innerHTML=Language.SystemTerms[82];

	document.getElementById("NationName").innerHTML=Language.SystemTerms[30];
	document.getElementById("FactionName").innerHTML=Language.SystemTerms[31];
	document.getElementById("NationStatusName").innerHTML=Language.SystemTerms[18];
	document.getElementById("NationSynopsis").innerHTML=Language.SystemTerms[32];
	document.getElementById("CampaignSelectedText").innerHTML=Language.SystemTerms[16];

	document.getElementById("CampaignDifficultyP").innerHTML=Language.SystemTerms[40];
	for(let j=1;j<=7;j++){document.getElementById("Chp"+j+"text").innerHTML=Language.SystemTerms[32+j]};
	document.getElementById("Diff1Text").innerHTML=Language.SystemTerms[141];
	document.getElementById("Diff2Text").innerHTML=Language.SystemTerms[142];
	document.getElementById("Diff3Text").innerHTML=Language.SystemTerms[143];
	document.getElementById("BtnSuperscript").innerHTML=Language.SystemTerms[137];

	document.getElementById("HPHeader").innerHTML=Language.SystemTerms[44];
	document.getElementById("DamageHeader").innerHTML=Language.SystemTerms[45];
	document.getElementById("MovementHeader").innerHTML=Language.SystemTerms[46];
	document.getElementById("DialogueSkipP").innerHTML=Language.SystemTerms[22];

	document.getElementById("MontreArmorP").innerHTML=Language.SystemTerms[44];
	document.getElementById("MontreDamageP").innerHTML=Language.SystemTerms[45];
	document.getElementById("MontreMovementP").innerHTML=Language.SystemTerms[46];

	document.getElementById("UnitType2").innerHTML=Language.SystemTerms[117];
	document.getElementById("UnitType3").innerHTML=Language.SystemTerms[118];
	document.getElementById("UnitType4").innerHTML=Language.SystemTerms[119];

	for(let k=1;k<=5;k++){CampaignFactions[k].name=Language.NationNames[k]};};
function GenerateRevenue(Value,X,Y){
	let moola=setInterval(flashcard,20);
	let phase=0;
	let floater=document.createElement("p");
	floater.style.position="absolute";
	floater.id="Floater"+X+"X"+Y;
	floater.style.top=56*X+"px";
	floater.style.left=56*Y+"px";
	floater.style.width="56px";
	floater.style.textAlign="center";
	floater.style.color="gold";
	floater.style.zIndex=6;
	floater.style.textShadow="3px 3px 3px gold";
	//floater.style.borderStyle="groove";
	//floater.style.borderColor="blue";
	if(Value>0){floater.innerHTML="£"+Value};
	function flashcard(){phase++;
	if(phase==1){ 
		document.getElementById("UnitMap").appendChild(floater);

	};
	floater.style.top=56*X-2*phase+"px";


	if(phase==20){
		document.getElementById("UnitMap").removeChild(floater);
	clearInterval(moola);};
	};

	return Value};
function hasCertainTrait(UnitType,necessaryTrait){
	glossary=Units[UnitType]??Units[63];
	//if((glossary??0)==0){return false};
	if(glossary.tag1==necessaryTrait){return true};
	if(glossary.tag2==necessaryTrait){return true};
	if(glossary.tag3==necessaryTrait){return true};
	if(glossary.tag4==necessaryTrait){return true};

	return false;};
function HitAnimation(Target,Variant){
	let ics=0;
	let igrec=0;
	if((Target.stt??"Definitive")=="Temporary"){ics=Target.x; igrec=Target.y}else{ics=MapRoster[Target].x-StandardX;igrec=MapRoster[Target].y-StandardY;};
	if(Variant=="Standard"){src="StandardHitAnim"};
	if(Variant=="Supply"){src="SupplyHitAnim"};
	if(Variant=="Gaswave"){src="GasHitAnim"};
	if(Variant=="Neutron Wave"){src="NeutronHitAnim"};

	//alert(ics+" "+igrec);

	let HitAnim=document.createElement("img");
	HitAnim.src="Assets/Units/"+src+".gif";
	HitAnim.id="HitAnimationGFX";
	HitAnim.style.position="absolute";
	HitAnim.style.visibility="visible";
	HitAnim.style.zIndex=5;
	HitAnim.style.width="56px";
	HitAnim.style.height="56px";
	HitAnim.style.top=ics*56+"px";
	HitAnim.style.left=igrec*56+"px";
	if(Variant=="Gaswave"){
	HitAnim.style.width="168px";
	HitAnim.style.height="168px";
	HitAnim.style.top=ics*56-56+"px";
	HitAnim.style.left=igrec*56-56+"px";
	};

	let castTimee=setInterval(HitAnima,500);
	let frame=0;
	function HitAnima(){
		frame++;
		if(frame==1){document.getElementById("UnitMap").appendChild(HitAnim);

		}

		if(frame==2){
			document.getElementById("UnitMap").removeChild(HitAnim);
			clearInterval(castTimee);
		}
		}};
function hideTraitDetail(){
	document.getElementById("TraitTooltip").style.visibility="hidden";};
function HoverBuilding(Phase,Building){
	let slot="BuildingMontre"+(Building-60);
	if(Phase=="on"){
		document.getElementById(slot).style.top=7+(Units[Building].AttackOffsetY ?? [0,0,0,0,0])[3]+"px";
		document.getElementById(slot).style.left=14+(Units[Building].AttackOffsetX ?? [0,0,0,0,0])[3]+"px";
		document.getElementById(slot).src="Assets/Units/Attack/"+Units[Building].shortname+"Attack3.GIF";

	}else{

		document.getElementById(slot).style.top=7+(Units[Building].StaticOffsetY ?? [0,0,0,0,0])[3]+"px";
		document.getElementById(slot).style.left=14+(Units[Building].StaticOffsetX ?? [0,0,0,0,0])[3]+"px";
		document.getElementById(slot).src="Assets/Units/Static/"+Units[Building].shortname+"3.PNG";

	};};
function initializeBattle(Faction,Chapter,Mission){
	//This block runs pre-functions characteristic to the specific level

	wipeMap();
	ChosenNation=Faction;
	ChosenChapter=Chapter;
	ChosenMission=Mission;
	isAITurn=false;
	BattleEnd=true;
	Resolution=false;
	FieldMode="Battle";
	Chuchu=0;

	Map=Campaigns[Faction-1][Chapter-1][Mission-1].Map;
	Roster=Campaigns[Faction-1][Chapter-1][Mission-1].Roster;
	Constants=Campaigns[Faction-1][Chapter-1][Mission-1].Constants;
	ControlMap=Campaigns[Faction-1][Chapter-1][Mission-1].ControlMap ?? [0];
	RegionMap=Campaigns[Faction-1][Chapter-1][Mission-1].RegionMap ?? [0];
	NodeMap=Campaigns[Faction-1][Chapter-1][Mission-1].NodeMap ?? [0];
	BiomeMap=Campaigns[Faction-1][Chapter-1][Mission-1].BiomeMap;

	//if(Map.length*Map[0].length>500){document.getElementById("Disclaimer2").style.visibility="visible"};

	if((BiomeMap??0)==0){BiomeMap=[]; let BiomeLine=[];for(let b=0; b<Map[0].length;b++){BiomeLine[BiomeLine.length]=1}; for(let a=0; a<Map.length;a++){BiomeMap[BiomeMap.length]=BiomeLine}};
	//alert(BiomeMap);
	sstandardX=Constants.defaultX;
	sstandardY=Constants.defaultY;
	DynamicEvents=[];
	ChosenMap=Map;
	Factions=CampaignFactions;
	YourMoney=(Campaigns[Faction-1][Chapter-1][Mission-1].Constants.Funds??[0,0])[1];
	//alert(Faction+" "+Chapter+" "+Mission);
	//alert(YourMoney);
	Prelogue=Language.Prelogues[ChosenNation][ChosenChapter-1][ChosenMission-1];
	Postlogue=Language.Postlogues[ChosenNation][ChosenChapter-1][ChosenMission-1];
	Interjection=Language.DefeatInterjections[ChosenNation][ChosenChapter-1][ChosenMission-1];


	castMap();

	KillingUnit=false;
	GlassPanels=2;
	document.getElementById('UnitMap').scrollBy(-Map.length*56,-Map[0].length*56);
	document.getElementById('UnitMap').scrollBy((sstandardX??0)*56,(sstandardY??0)*56);
	document.getElementById('Glassplate3').style.visibility='hidden';
	document.getElementById('Glassplate4').style.visibility='hidden';
	if(Constants.Commanders.length>3){GlassPanels++;document.getElementById('Glassplate3').style.visibility='inherit'};
	if(Constants.Commanders.length>4){GlassPanels++;document.getElementById('Glassplate4').style.visibility='inherit'};

	if(Map.length>10){
		document.getElementById('TopScrollBar').style.zIndex="5";
		document.getElementById('BottomScrollBar').style.zIndex="5";
		}else{
		document.getElementById('TopScrollBar').src="Assets/Miscellaneous/Nothing.PNG";
		document.getElementById('TopScrollBar').style.zIndex="0";
		document.getElementById('BottomScrollBar').src="Assets/Miscellaneous/Nothing.PNG";
		document.getElementById('BottomScrollBar').style.zIndex="0";
		};
	if(Map[0].length>10){
		document.getElementById('LeftScrollBar').style.zIndex="5";
		document.getElementById('RightScrollBar').style.zIndex="5";
		}else{
		document.getElementById('LeftScrollBar').src="Assets/Miscellaneous/Nothing.PNG";
		document.getElementById('LeftScrollBar').style.zIndex="0";
		document.getElementById('RightScrollBar').src="Assets/Miscellaneous/Nothing.PNG";
		document.getElementById('RightScrollBar').style.zIndex="0";
	};
	/*

	FlagMap=[];
	let FlagCell=[];
	for(let x=0;x<Map[0].length;x++){FlagCell[FlagCell.length]=0};
	for(let y=0;y<Map.length;y++){FlagMap[FlagMap.length]=FlagCell};
	FlagMap=JSON.parse(JSON.stringify(FlagMap));

	*/

	for(let i=1;i<=10;i++){for(let j=1;j<=10;j++){
	document.getElementById("Entity "+i+"X"+j).style.visibility="hidden";
	document.getElementById("Marker "+i+"X"+j).style.visibility="hidden";
	document.getElementById("Canceler "+i+"X"+j).style.visibility="hidden";
	document.getElementById("Structure "+i+"X"+j).style.visibility="hidden";
	}};

	document.getElementById("Battlemap").style.visibility="visible";
	FillMap(Map);
	//drawMap(Map);
	CastEntityMap(Map,Roster);
	/*
	for(let a=0;a<Constants.Capture.length;a++){FlagMap[Constants.Capture[a].x][Constants.Capture[a].y]=1};
	for(let a=0;a<Constants.Defend.length;a++){FlagMap[Constants.Defend[a].x][Constants.Defend[a].y]=2};
	for(let a=0;a<Constants.Defeat.length;a++){FlagMap[MapRoster[Constants.Defeat[a]].x][MapRoster[Constants.Defeat[a]].y]=3};
	for(let a=0;a<Constants.Protect.length;a++){FlagMap[MapRoster[Constants.Protect[a]].x][MapRoster[Constants.Protect[a]].y]=4};
		*/

	let OST=0;
	if(Mission==5){OST=1};
	if(Faction==1 && Mission!=5){OST=4};
	if(Faction==1 && Mission==5){OST=5};
	if(Faction==1 && Chapter>2){OST=6};
	if(Faction==1 && Chapter==3 && Mission==5){OST=3};
	if(Faction==2 && Mission!=5){OST=12};
	if(Faction==2 && Mission==5){OST=13};
	if(Faction==3){OST=18};
	if(Faction==3 && Chapter>1){OST=19};
	if(Faction==3 && Mission==5){OST=20};


	if(Faction==4){OST=23};
	if(Faction==4 && Chapter>1){OST=24};
	if(Faction==4 && Chapter==3 && Mission==5){OST=25};
	if(Faction==4 && Chapter>3){OST=26};
	if(Faction==4 && Chapter==4 && Mission==5){OST=27};
	if(Faction==4 && Chapter==5 && Mission==5){OST=28};
	if(Faction==5){OST=29};
	if(Faction==5 && Chapter>2){OST=30};
	if(Faction==5 && Chapter>2 && Mission==5){OST=31};
	if(Faction==5 && Chapter==5){OST=32};
	if(Faction==5 && Chapter==5 && Mission==5){OST=33};

	if((Constants.OST??0)!=0){OST=Constants.OST};

	PlayBGM(OST);
	
	if(DialogueChoice){launchDialogueBloc(Language.Prelogues[Faction][Chapter-1][Mission-1],0)};

	//This deals with the localization

	LocalizationMap=[];
	let LocLine=[];
	Localization=Campaigns[Faction-1][Chapter-1][Mission-1].Localization??{};
	for(let x=0;x<Map[0].length;x++){LocLine[LocLine.length]=0};
	for(let y=0;y<Map.length;y++){LocalizationMap[LocalizationMap.length]=JSON.parse(JSON.stringify(LocLine))};
	for(let z=0;z<Localization.length;z++){LocalizationMap[Localization[z].X][Localization[z].Y]=Localization[z]};


	//This block initializes the faction list
	PlayerChoiceFaction=Constants.YourFaction;
	//alert(PlayerChoiceFaction);
	AttackOrder=[PlayerChoiceFaction];
	SubRosters=[];
	for(let p=1;p<Roster.length;p++){
	let checker=1;
	for(let r=0;r<AttackOrder.length;r++){if(Roster[p].faction==AttackOrder[r]){checker=0;}};
	if(checker){AttackOrder[AttackOrder.length]=Roster[p].faction};};

	AliveFactionList=JSON.parse(JSON.stringify(AttackOrder));

	//alert(AttackOrder[3]);

	//This function builds up a list of subrosters
	for(x=0;x<AttackOrder.length;x++){
		SubRoster=[];
	for(y=1;y<MapRoster.length;y++){
		if(MapRoster[y].faction==AttackOrder[x]){SubRoster[SubRoster.length]=MapRoster[y]};};

	SubRosters[SubRosters.length]=SubRoster;};

	//alert(SubRosters[0]);

	//This code block generates battleflags

	let FlagMap=[];
	let FlagCell=[];
	for(let x=0;x<Map[0].length;x++){FlagCell[FlagCell.length]=0};
	for(let y=0;y<Map.length;y++){FlagMap[FlagMap.length]=FlagCell};
	TileFlagMap=JSON.parse(JSON.stringify(FlagMap));
	//let UnitFlagMap=JSON.parse(JSON.stringify(FlagMap));

	for(let a=0;a<Constants.Capture.length;a++){TileFlagMap[Constants.Capture[a].x][Constants.Capture[a].y]=1};
	for(let a=0;a<Constants.Defend.length;a++){TileFlagMap[Constants.Defend[a].x][Constants.Defend[a].y]=2};
	for(let a=0;a<Constants.Defeat.length;a++){//UnitFlagMap[MapRoster[Constants.Defeat[a]].x][MapRoster[Constants.Defeat[a]].y]=3;
		MapRoster[Constants.Defeat[a]].Defeat=true;rostermap[MapRoster[Constants.Defeat[a]].x][MapRoster[Constants.Defeat[a]].y].Defeat=true};
	for(let a=0;a<Constants.Protect.length;a++){//UnitFlagMap[MapRoster[Constants.Protect[a]].x][MapRoster[Constants.Protect[a]].y]=4;
		MapRoster[Constants.Protect[a]].Protect=true;rostermap[MapRoster[Constants.Protect[a]].x][MapRoster[Constants.Protect[a]].y].Protect=true};

		

	for (let dick=0; dick<Map.length; dick++){for(let cunt=0; cunt<Map[0].length; cunt++){
		if(TileFlagMap[dick][cunt]!=0){//alert("Chuchu");
		document.getElementById("Flag "+(dick+1)+"X"+(cunt+1)).style.visibility='inherit';
		if(TileFlagMap[dick][cunt]==1){document.getElementById("Flag "+(dick+1)+"X"+(cunt+1)).src="Assets/Miscellaneous/CaptureFlag.PNG"};
		if(TileFlagMap[dick][cunt]==2){document.getElementById("Flag "+(dick+1)+"X"+(cunt+1)).src="Assets/Miscellaneous/DefendFlag.PNG"};
		//if(UnitFlagMap[dick][cunt]==3){document.getElementById("Flag "+(dick+1)+"X"+(cunt+1)).src="Assets/Miscellaneous/DestroyFlag.PNG"};
		//if(UnitFlagMap[dick][cunt]==4){document.getElementById("Flag "+(dick+1)+"X"+(cunt+1)).src="Assets/Miscellaneous/ProtectFlag.PNG"};
	}

		}};

	Turn=0;
	TurnIndex=0;

	EndTurn(SubRosters,Map,Constants,Roster);};
function initializeSpecialBattle(Level){
	wipeMap();
	Map=Level.Map;
	Roster=Level.Roster;
	Constants=Level.Constants;
	ControlMap=Level.ControlMap ?? [0];
	RegionMap=Level.RegionMap;
	NodeMap=Level.NodeMap;
	Factions=Level.Factions;
	DynamicEvents=Level.DynamicEvents??[];
	sstandardX=Constants.defaultX;
	sstandardY=Constants.defaultY;
	ChosenMission=0;
	ChosenChapter=0;
	ChosenNation=0;
	ChosenMap=Map;
	isAITurn=false;
	BattleEnd=true;
	YourMoney=Constants.Funds[1];
	Resolution=false;
	Victory=false;
	PlayBGM(0);
	FieldMode="Battle";

	BiomeMap=Level.BiomeMap;
	if((BiomeMap??0)==0){BiomeMap=[]; let BiomeLine=[];for(let b=0; b<Map[0].length;b++){BiomeLine[BiomeLine.length]=1}; for(let a=0; a<Map.length;a++){BiomeMap[BiomeMap.length]=BiomeLine}};


	castMap();

	KillingUnit=false;
	GlassPanels=2;
	//alert(StandardX);
	//document.getElementById("UnitMap").scrollTop=(sstandardX??0)*56;
	//let Varza=0;
	//document.getElementById("UnitMap").scrollLeft=(sstandardY??0)*56;
	//alert(document.getElementById("UnitMap").scrollTop+" "+document.getElementById("UnitMap").scrollLeft+" "+sstandardX+" "+sstandardY);

	document.getElementById('UnitMap').scrollBy(-Map.length*56,-Map[0].length*56);
	document.getElementById('UnitMap').scrollBy((sstandardX??0)*56,(sstandardY??0)*56);
	document.getElementById('Glassplate3').style.visibility='hidden';
	document.getElementById('Glassplate4').style.visibility='hidden';
	if(Constants.Commanders.length>3){GlassPanels++;document.getElementById('Glassplate3').style.visibility='inherit'};
	if(Constants.Commanders.length>4){GlassPanels++;document.getElementById('Glassplate4').style.visibility='inherit'};
	//alert(Map.length+" "+Map[0].length);


	for(let i=1;i<=Map.length;i++){for(let j=1;j<=Map[0].length;j++){
	document.getElementById("Entity "+i+"X"+j).style.visibility="hidden";
	document.getElementById("Marker "+i+"X"+j).style.visibility="hidden";
	document.getElementById("Canceler "+i+"X"+j).style.visibility="hidden";
	document.getElementById("Structure "+i+"X"+j).style.visibility="hidden";
	}};

	if(Map.length>10){
		document.getElementById('TopScrollBar').style.zIndex="5";
		document.getElementById('BottomScrollBar').style.zIndex="5";
		}else{
		document.getElementById('TopScrollBar').src="Assets/Miscellaneous/Nothing.PNG";
		document.getElementById('TopScrollBar').style.zIndex="0";
		document.getElementById('BottomScrollBar').src="Assets/Miscellaneous/Nothing.PNG";
		document.getElementById('BottomScrollBar').style.zIndex="0";
		};
	if(Map[0].length>10){
		document.getElementById('LeftScrollBar').style.zIndex="5";
		document.getElementById('RightScrollBar').style.zIndex="5";
		}else{
		document.getElementById('LeftScrollBar').src="Assets/Miscellaneous/Nothing.PNG";
		document.getElementById('LeftScrollBar').style.zIndex="0";
		document.getElementById('RightScrollBar').src="Assets/Miscellaneous/Nothing.PNG";
		document.getElementById('RightScrollBar').style.zIndex="0";
	};

	//alert(Constants.YourFaction);

	Factions=Level.Factions;
	Units=Level.Units;
	Terrain=Level.Terrain;


	if((Constants.AttackerFaction??[]).length>0){
	DaoLedger=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(let a=0;a<Constants.Commanders.length;a++){Stance="Defender";
		for(let b=0;b<Constants.AttackerFaction.length;b++){if(Factions[Constants.Commanders[a].Allegiance].faction==Constants.AttackerFaction[b]){Stance="Attacker"}};
		Stance=="Defender"?DaoLedger[Constants.Commanders[a].Allegiance]=Constants.DefensiveDao[a]:DaoLedger[Constants.Commanders[a].Allegiance]=Constants.OffensiveDao[a]};

	for(let c=1;c<Roster.length;c++){Roster[c].morale=Math.min(Math.max(Roster[c].morale+Math.round(DaoLedger[Roster[c].faction]/2),-4),5)};};

	document.getElementById("Battlemap").style.visibility="visible";
	FillMap(Map);
	CastEntityMap(Map,Roster);



	//This deals with the localization

	LocalizationMap=[];
	let LocLine=[];
	Localization=Level.Localization??{};
	for(let x=0;x<Map[0].length;x++){LocLine[LocLine.length]=0};
	for(let y=0;y<Map.length;y++){LocalizationMap[LocalizationMap.length]=JSON.parse(JSON.stringify(LocLine))};
	for(let z=0;z<Localization.length;z++){LocalizationMap[Localization[z].X][Localization[z].Y]=Localization[z]};



	//if(DialogueChoice){launchDialogueBloc(Language.Prelogues[Faction][Chapter-1][Mission-1],0)};

	if(NivelElectiv??false){PlayerChoiceFaction=Level.Constants.Commanders[NivelElectiv].Allegiance}else{PlayerChoiceFaction=Constants.YourFaction};

	Prelogue=Level.Prelogue??"";
	Postlogue=Level.Postlogue??"";
	Interjection=Level.Interjection??"";
	if(DialogueChoice){launchDialogueBloc(Prelogue,0);};

	AttackOrder=[PlayerChoiceFaction];
	SubRosters=[];
	for(let p=1;p<Roster.length;p++){
	let checker=1;
	for(let r=0;r<AttackOrder.length;r++){if(Roster[p].faction==AttackOrder[r]){checker=0;}};
	if(checker){AttackOrder[AttackOrder.length]=Roster[p].faction};};

	AliveFactionList=JSON.parse(JSON.stringify(AttackOrder));

	for(x=0;x<AttackOrder.length;x++){
		SubRoster=[];
	for(y=1;y<MapRoster.length;y++){
		if(MapRoster[y].faction==AttackOrder[x]){SubRoster[SubRoster.length]=MapRoster[y]};};

	SubRosters[SubRosters.length]=SubRoster;};

	//alert(SubRosters[0][0].life);

	//This code block generates battleflags

	let FlagMap=[];
	let FlagCell=[];
	for(let x=0;x<Map[0].length;x++){FlagCell[FlagCell.length]=0};
	for(let y=0;y<Map.length;y++){FlagMap[FlagMap.length]=FlagCell};
	TileFlagMap=JSON.parse(JSON.stringify(FlagMap));
	//let UnitFlagMap=JSON.parse(JSON.stringify(FlagMap));

	for(let a=0;a<Constants.Capture.length;a++){TileFlagMap[Constants.Capture[a].x][Constants.Capture[a].y]=1};
	for(let a=0;a<Constants.Defend.length;a++){TileFlagMap[Constants.Defend[a].x][Constants.Defend[a].y]=2};
	for(let a=0;a<Constants.Defeat.length;a++){//UnitFlagMap[MapRoster[Constants.Defeat[a]].x][MapRoster[Constants.Defeat[a]].y]=3;
		MapRoster[Constants.Defeat[a]].Defeat=true;rostermap[MapRoster[Constants.Defeat[a]].x][MapRoster[Constants.Defeat[a]].y].Defeat=true};
	for(let a=0;a<Constants.Protect.length;a++){//UnitFlagMap[MapRoster[Constants.Protect[a]].x][MapRoster[Constants.Protect[a]].y]=4;
		MapRoster[Constants.Protect[a]].Protect=true;rostermap[MapRoster[Constants.Protect[a]].x][MapRoster[Constants.Protect[a]].y].Protect=true};

		

	for (let dick=0; dick<Map.length; dick++){for(let cunt=0; cunt<Map[0].length; cunt++){
		if(TileFlagMap[dick][cunt]!=0){//alert("Chuchu");
		document.getElementById("Flag "+(dick+1)+"X"+(cunt+1)).style.visibility='inherit';
		if(TileFlagMap[dick][cunt]==1){document.getElementById("Flag "+(dick+1)+"X"+(cunt+1)).src="Assets/Miscellaneous/CaptureFlag.PNG"};
		if(TileFlagMap[dick][cunt]==2){document.getElementById("Flag "+(dick+1)+"X"+(cunt+1)).src="Assets/Miscellaneous/DefendFlag.PNG"};
		//if(UnitFlagMap[dick][cunt]==3){document.getElementById("Flag "+(dick+1)+"X"+(cunt+1)).src="Assets/Miscellaneous/DestroyFlag.PNG"};
		//if(UnitFlagMap[dick][cunt]==4){document.getElementById("Flag "+(dick+1)+"X"+(cunt+1)).src="Assets/Miscellaneous/ProtectFlag.PNG"};
	}

		}};

	Turn=0;
	TurnIndex=0;

	EndTurn(SubRosters,Map,Constants,Roster);
	};
function Inspection(Turn,Constants,Roster){
	let Resolution=false;
	let Survive=Constants.Survival;
	let TimeLimit=Constants.TimeLimit;
	let Factiones=[];
	let AliveFactions=[];
	let Assassinated=Constants.Defeat.length;
	let YourFaction=Factions[Constants.YourFaction].faction;
	//let chuchu=Roster[1].faction;
	//alert(Factions[1].faction);
	//alert(Roster);
	Roster=MapRoster;
	Factiones[0]=Factions[Roster[1].faction].faction;
	//alert(Factiones[0]);
	if(Turn>=TimeLimit){Resolution=true; Victory=false;};
	if(Turn>=Survive){Resolution=true; Victory=true;};

	for(let i=2;i<Roster.length;i++){
		let FactionNotIncluded=true;
	for(let j=0;j<=Factiones.length;j++){
	if(Factiones[j]==(Factions[Roster[i].faction].faction)){FactionNotIncluded=false;};
	};
	if(FactionNotIncluded){
		Factiones[Factiones.length]=Factions[Roster[i].faction].faction};
	};

	//console.log(MapRoster);
	for(let i=1;i<=Factiones.length;i++){
		let FactionIsStillAlive=false;
		for(let j=1;j<Roster.length;j++){
			//alert(Roster.length);
			//alert(MapRoster[j-1].life);
		if(Factions[Roster[j].faction].faction == Factiones[i-1] && MapRoster[j].life>0 && !hasCertainTrait(MapRoster[j].unitType,"Inertial")){
			FactionIsStillAlive=true};
		};
		if(FactionIsStillAlive){AliveFactions[AliveFactions.length]=Factiones[i-1]};};

		//alert(AliveFactions[1]);
		if(AliveFactions.length==1){Resolution=true;
		if(AliveFactions[0]==YourFaction){Victory=true}else{Victory=false;}};


	for(let i=0;i<Constants.Capture.length;i++){
		if(rostermap[Constants.Capture[i].x][Constants.Capture[i].y]!=0 && Factions[rostermap[Constants.Capture[i].x][Constants.Capture[i].y].faction].faction==Factions[Constants.YourFaction].faction){Resolution=true; Victory=true};
		};

	for(let i=0;i<Constants.Defend.length;i++){
		if(rostermap[Constants.Defend[i].x][Constants.Defend[i].y]!=0 && Factions[rostermap[Constants.Defend[i].x][Constants.Defend[i].y].faction].faction!=Factions[Constants.YourFaction].faction){Resolution=true; Victory=false};
		};


	for(let i=0;i<Constants.Defeat.length;i++){
	if(MapRoster[Constants.Defeat[i]].life<=0){Assassinated-=1;};};
	if(Assassinated==0 && Constants.Defeat.length!=0){Resolution=true;Victory=true;};

	for(let i=0;i<Constants.Protect.length;i++){
	if(MapRoster[Constants.Protect[i]].life<=0){Resolution=true;Victory=false;};};

	//alert(Resolution);
	if(Resolution && BattleEnd){if(Victory){Battle_Won()}else{Battle_Lost()}};};
function InterphaseBanner(Faction,Turn){

	let banner=setInterval(flashcard,50);
	let phase=0;

	battalion.soundPlayer.playSound("Blurb");

	document.getElementById("InterphaseBanner").style.visibility="visible";
	//alert(Factions[Faction].color);
	document.getElementById("InterphaseBanner").style.borderColor=Factions[Faction].color;
	document.getElementById("InterphaseFaction").innerHTML=Factions[Faction].name;
	document.getElementById("InterphaseTurn").innerHTML="Turn:"+Turn;

	//alert(Faction);
	document.getElementById("CommanderPortrait").src="Assets/Portraits/"+Constants.Commanders[((Turn-1)%(Constants.Commanders.length-1))+1].Name+"Portrait.PNG";

	//FactionModuloIndex updating
	let FMI=JSON.parse(JSON.stringify(AliveFactionList.length));
	//if((FMI??0)!=0){alert(FMI)};


		for(let a=1; a<=4; a++){document.getElementById("Glassplate"+a).style.visibility='hidden'};
			AliveFactionList=[];

		for(let b=0; b<AttackOrder.length; b++){
			let AOC=false;


			for(c=0;c<SubRosters[b].length;c++){
				//alert(SubRosters[b][c].life!=0);
				if(SubRosters[b][c].life>0){AOC=true};
				//alert(SubRosters[AttackOrder[a]][b].life);



		}
			if(AOC){AliveFactionList[AliveFactionList.length]=AttackOrder[b]};


		};

		if(AliveFactionList.length<FMI.length){
			let TIP=TurnIndex%FMI.length;

			for(let a=0;a<AliveFactionList.length;a++){if(AliveFactionList[a]==FMI[TIP]){TurnIndex=a+1}};
			



			FMI=AliveFactionList;

			};


		//alert(AliveFactionList);

		GlassPanels=Math.min(4,AliveFactionList.length);


		//Turnindex++;
		for(let a=1; a<=GlassPanels; a++){

		document.getElementById("Glassplate"+a).style.visibility='inherit';
		//let dudeIndex=SubRosters[(Turn-2+a)%AttackOrder.length][0].faction;
		//alert(Turn);

		//This is the backup DudeIndex value
		//let dudeIndex=AliveFactionList[(TurnIndex-2+a)%AliveFactionList.length];

		let dudeIndex=AliveFactionList[(TurnIndex-2+a)%AliveFactionList.length];
		//alert(dudeIndex);

		//alert(Turn);
		//alert(dudeIndex);
		document.getElementById("Glassplatecolor"+a).style.background=Factions[dudeIndex].color;
		document.getElementById("Glassplatename"+a).innerHTML=Factions[dudeIndex].name;
		if(Factions==CampaignFactions){document.getElementById("GlassplateCrest"+a).src="Assets/Emblems/Crest"+Factions[dudeIndex].Preffix+".PNG"}else{document.getElementById("GlassplateCrest"+a).src="Assets/Emblems/CrestNON.PNG"};
		if(document.getElementById("Glassplatecolor"+a).style.background!='black'){document.getElementById("Glassplatename"+a).style.color='black'}else{document.getElementById("Glassplatename"+a).style.color='indigo'};};

		//alert(((Turn-1)%(Constants.Commanders.length-1))+1);
		
		let TurnIndexOperator=((TurnIndex-1)%(Constants.Commanders.length-1))+1;
		Commander=Constants.Commanders[TurnIndexOperator];
		//ShowCharacterBio();
		//document.getElementById("CommanderName").innerHTML=Constants.Commanders[Turnindex].Name;
		//document.getElementById("CommanderNickname").innerHTML=Constants.Commanders[Turnindex].Nickname;
		//document.getElementById("CommanderBiography").innerHTML=Constants.Commanders[Turnindex].Description;
		//document.getElementById("CommanderNickCommentary").innerHTML=Constants.Commanders[Turnindex].NicknameCommentary;


	function flashcard(){phase++;
		if(phase<5){
			document.getElementById("InterphaseField").style.height=phase*35+"px";
			document.getElementById("InterphaseField").style.marginTop=0-phase*17.5+"px";
			document.getElementById("InterphaseBanner").style.height=phase*35+"px";
			document.getElementById("InterphaseBanner").style.marginTop=-140-phase*-17.5+"px";
			document.getElementById("InterphaseFaction").style.top=-25+"px";
			document.getElementById("InterphaseTurn").style.top=0+17.5*phase+"px";
		}

		if(phase>12){
			document.getElementById("InterphaseField").style.height=(16-phase)*35+"px";
			document.getElementById("InterphaseField").style.marginTop=0-(16-phase)*17.5+"px";
			document.getElementById("InterphaseBanner").style.height=(16-phase)*35+"px";
			document.getElementById("InterphaseBanner").style.marginTop=(16-phase)*-35/2+"px";
			document.getElementById("InterphaseFaction").style.top=-25+"px";
			document.getElementById("InterphaseTurn").style.top=80-35*(phase-12)+"px";
		};

		if(phase==16){clearInterval(banner);document.getElementById("InterphaseBanner").style.visibility="hidden";};};
		//Turn=TurnIndex;

		//This bloc runs the static events
		if((Constants.Events??0)==0){
			//this is for campaign maps, from a centralized database of events
			let a=(Constants.StaticEvents??[]).length;

			for(let b=0; b<a;b++){
				let Event=Constants.StaticEvents[b];
				let TriggerEvent=false;
				if((Event.TurnTreshold??0) == Turn){TriggerEvent=true};

				if(TriggerEvent){RunEvent(Event)};

			};





		}else{
			//this is for autonomous maps, from a local database of events



		}};
function LanguageCorrecter(Language){

	if((Language.SystemTerms??[]).length==0){Language.SystemTerms=ENG.SystemTerms};
	if((Language.LoaderSoundbites??[]).length==0){Language.LoaderSoundbites=ENG.LoaderSoundbites};
	if((Language.InitializerAphorisms??[]).length==0){Language.InitializerAphorisms=ENG.InitializerAphorisms};
	if((Language.NationNames??[]).length==0){Language.NationNames=ENG.NationNames};
	if((Language.NationDesc??[]).length==0){Language.NationDesc=ENG.NationDesc};
	if((Language.StartButtonTexts??[]).length==0){Language.StartButtonTexts=ENG.StartButtonTexts};
	if((Language.UnitSpecialNames??[]).length==0){Language.UnitSpecialNames=ENG.UnitSpecialNames};
	if((Language.UnitSpecialDesc??[]).length==0){Language.UnitSpecialDesc=ENG.UnitSpecialDesc};
	if((Language.VictoryQuotes??[]).length==0){Language.VictoryQuotes=ENG.VictoryQuotes};
	if((Language.DefeatQuotes??[]).length==0){Language.DefeatQuotes=ENG.DefeatQuotes};

	if((Language.TerrainName??[]).length==0){Language.TerrainName=ENG.TerrainName};
	if((Language.TerrainDesc??[]).length==0){Language.TerrainDesc=ENG.TerrainDesc};
	if((Language.UnitNames??[]).length==0){Language.UnitNames=ENG.UnitNames};
	if((Language.UnitDesc??[]).length==0){Language.UnitDesc=ENG.UnitDesc};
	if((Language.TraitName??[]).length==0){Language.TraitName=ENG.TraitName};
	if((Language.TraitDesc??[]).length==0){Language.TraitDesc=ENG.TraitDesc};
	if((Language.ClassTraitName??[]).length==0){Language.ClassTraitName=ENG.ClassTraitName};
	if((Language.ClassTraitDesc??[]).length==0){Language.ClassTraitDesc=ENG.ClassTraitDesc};

	if((Language.ChapterName??[]).length==0){Language.ChapterName=ENG.ChapterName};
	if((Language.MissionName??[]).length==0){Language.MissionName=ENG.MissionName};
	if((Language.MissionDesc??[]).length==0){Language.MissionDesc=ENG.MissionDesc};
	if((Language.IntraeventTranscripts??[]).length==0){Language.IntraeventTranscripts=ENG.IntraeventTranscripts};
	if((Language.Interlogues??[]).length==0){Language.Interlogues=ENG.Interlogues};

	for(let a=1;a<=2;a++){for (let b=0; b<7;b++){for(let c=0;c<5;c++){
		if(Language.Prelogues[a][b][c].length==0){Language.Prelogues[a][b][c]=ENG.Prelogues[a][b][c]}
		if(Language.Postlogues[a][b][c].length==0){Language.Postlogues[a][b][c]=ENG.Postlogues[a][b][c]}
		if(Language.DefeatInterjections[a][b][c].length==0){Language.DefeatInterjections[a][b][c]=ENG.DefeatInterjections[a][b][c]}
	}}}

	for(let a=3;a<=5;a++){for (let b=0; b<5;b++){for(let c=0;c<5;c++){
		if(Language.Prelogues[a][b][c].length==0){Language.Prelogues[a][b][c]=ENG.Prelogues[a][b][c]}
		if(Language.Postlogues[a][b][c].length==0){Language.Postlogues[a][b][c]=ENG.Postlogues[a][b][c]}
		if(Language.DefeatInterjections[a][b][c].length==0){Language.DefeatInterjections[a][b][c]=ENG.DefeatInterjections[a][b][c]}
	}}}
	/* The underlying infrastructure insufficiently developed; need to handle that first. That, and to unfuck the fact that some underdeveloped languages might not tolerate this section at all
	for(let a=6;a<=10;a++){for (let b=0; b<1;b++){for(let c=0;c<5;c++){
		if(Language.Prelogues[a][b][c].length==0){Language.Prelogues[a][b][c]=ENG.Prelogues[a][b][c]}
		if(Language.Postlogues[a][b][c].length==0){Language.Postlogues[a][b][c]=ENG.Postlogues[a][b][c]}
		if(Language.DefeatInterjections[a][b][c].length==0){Language.DefeatInterjections[a][b][c]=ENG.DefeatInterjections[a][b][c]}
	}}}*/};
function launchDialogueBloc(Bloc, Frame){
	var limit=Bloc.length;
	let Proceed=Resolution;

	document.getElementById("DialogueBox").style.visibility="visible";
	document.getElementById("DialogueSkip").style.visibility="visible";
	document.getElementById("Portrait").src=("Assets/Portraits/"+Bloc[Frame]+"Portrait.PNG")??("Assets/Portraits/DefaultPortrait.PNG");
	document.getElementById("CharacterName").innerHTML=Bloc[Frame];

	//document.getElementById("DialogueInstance").innerHTML=Bloc[Frame+1];
	document.getElementById("DialogueInstance").innerHTML="";
	DialogueBank="";
	if(Frame+2<=Bloc.length){DialogueBank=Bloc[Frame+1]};
	LetterIndex=0;
	TerminusLetter=DialogueBank.length;

	let FlowWriter=setInterval(LetterDot, 5);
	//alert(Frame);
	function LetterDot(){
		let Text="";
		let a=0;
		let b=0;
		let O=0;
		let Op=0;
		if((DialogueBank[LetterIndex]??"")=="~"){O=LetterIndex;
		Op=O;
		while(DialogueBank[Op]!="~"){Op++};
		//alert(DialogueBank.substring(0,O)+"<span style='"+DialogueBank.substring(O+1,O+8)+"'>");


		};

		if((DialogueBank[LetterIndex]??"")=="<"){a=LetterIndex;
		while(DialogueBank[a]!=">"){a++};
		LetterHopPoint=a-LetterIndex;
		Text=document.getElementById("DialogueInstance").innerHTML+(DialogueBank[LetterIndex]??"");
		let X=DialogueBank.substring(LetterIndex,a+1);
		//alert(X);
		Text+="/"+X;
		LetterIndex=a;
		//alert(X);
		}else{Text=document.getElementById("DialogueInstance").innerHTML+(DialogueBank[LetterIndex]??"")};

		if(false){TrueText=DialogueBank.substring(0,O)+"<span style='"+DialogueBank.substring(O+1,O+8)+"'>"+DialogueBank.substring(0,0);}else{TrueText=Text};
		document.getElementById("DialogueInstance").innerHTML=TrueText;
		//document.getElementById("DialogueInstance").innerHTML+=DialogueBank[LetterIndex];
		LetterIndex++;
		//alert(LetterIndex+" "+TerminusLetter);


		if(LetterIndex>=TerminusLetter){document.getElementById("DialogueInstance").innerHTML=Bloc[Frame+1]; clearInterval(FlowWriter)};

	};
	if(Frame+2<=limit){document.getElementById("DialogueBox").onclick=function(){clearInterval(FlowWriter);if(LetterIndex==TerminusLetter){launchDialogueBloc(Bloc, Frame+2);}else{document.getElementById("DialogueInstance").innerHTML=Bloc[Frame+1]; clearInterval(FlowWriter); LetterIndex=TerminusLetter}};
	}else{document.getElementById("DialogueBox").onclick="";document.getElementById("DialogueBox").style.visibility="hidden"; document.getElementById("DialogueSkip").style.visibility="hidden";
	if(Proceed){setTimeout(EndBattle,1000)}};};
function LaunchConstructorPanel(X,Y){
	document.getElementById('BuildingConstructionPanel').style.visibility="visible";
	document.getElementById('BuildingConstructionPanel').style.left=Math.max(Math.min(document.getElementById("UnitMap").scrollLeft+280, Y*56-112),document.getElementById("UnitMap").scrollLeft)+"px";
	document.getElementById('BuildingConstructionPanel').style.top=Math.max(Math.min(document.getElementById("UnitMap").scrollTop+280, X*56-112),document.getElementById("UnitMap").scrollTop)+"px";

	for(let c=1;c<=8;c++){
		document.getElementById("BuildingMontre"+c).src="Assets/Units/Static/"+Units[60+c].shortname+"3.PNG";
		document.getElementById("BuildingMontre"+c).style.filter=Factions[PlayerChoiceFaction].ChromaCode;
		document.getElementById("BuildingMontre"+c).style.top=7+(Units[60+c].StaticOffsetY ?? [0,0,0,0,0])[3]+"px";
		document.getElementById("BuildingMontre"+c).style.left=14+(Units[60+c].StaticOffsetX ?? [0,0,0,0,0])[3]+"px";
		if(!Units[60+c].MLPR??false){document.getElementById("BuildingMesh"+c).style.visibility='inherit';document.getElementById("BuildingMesh"+c).src="Assets/Units/StaticMeshes/"+Units[60+c].shortname+"Mesh3.PNG"}else{document.getElementById("BuildingMesh"+c).style.visibility='hidden'};
		document.getElementById("BuildingPrice"+c).innerHTML="₱"+Units[60+c].Cost;
		CoastalCheck=true;
		if(hasCertainTrait(60+c,"Seabound")){CoastalCheck=false;CanBuildCoastal=false
			if(X>0){if(Terrain[Map[X-1][Y]].DeepSailThrough!=100){CoastalCheck=true;CanBuildCoastal=true}};
			if(X<Map.length-1){if(Terrain[Map[X+1][Y]].DeepSailThrough!=100){CoastalCheck=true;CanBuildCoastal=true}};
			if(Y>0){if(Terrain[Map[X][Y-1]].DeepSailThrough!=100){CoastalCheck=true;CanBuildCoastal=true}};
			if(X<Map[0].length-1){if(Terrain[Map[X][Y+1]].DeepSailThrough!=100){CoastalCheck=true;CanBuildCoastal=true}};

		};
		document.getElementById("BuildingFrame"+c).src="Assets/Miscellaneous/ConstructionUnavailableFrame.PNG";
		if((YourMoney??0)>=Units[60+c].Cost && CoastalCheck){document.getElementById("BuildingFrame"+c).src="Assets/Miscellaneous/ConstructionAvailableFrame.PNG"};

	//alert("Not yet bro, we don't have enough assets")
	};};
function LaunchRecruitmentPanel(IndustrialBranch){
	IndustrialBranchBrowsed=IndustrialBranch;
	document.getElementById("UnitRecruitmentPanel").style.visibility="visible";
	let YourCurrency=(Factions[PlayerChoiceFaction].Currency??0);
	document.getElementById("MoneyIndicator").innerHTML="₤"+YourMoney;
	if((Factions[PlayerChoiceFaction].ExchangeRate??0)!=0){document.getElementById("MoneyIndicator").innerHTML+="("+YourCurrency+YourMoney*Factions[PlayerChoiceFaction].ExchangeRate+")"};

	document.getElementById("UnitMontreBkg").src="Assets/Miscellaneous/UnitMontreBkg"+IndustrialBranch+".PNG";
	document.getElementById("UnitMontre").src="Assets/Units/Static/Barricade1.PNG";
	document.getElementById("UnitMontre").style.filter=Factions[PlayerChoiceFaction].ChromaCode;;
	MontreIndexBasis=IndustrialBranch*10+20;
	if(IndustrialBranch==1){MontreIndexBasis-=30};
	Speciation=0;
	CostFactor=1;
	for(let i=-2; i<3;i++){document.getElementById("MoraleParticulator"+i).src="Assets/Traits/Morale0.PNG"};

	let InfantrySelection=Factions[PlayerChoiceFaction].SpecialInfantry;
	let VehicleSelection=Factions[PlayerChoiceFaction].SpecialVehicles;


	for(let p=1;p<=40;p++){
		
	document.getElementById("UnitMontre"+p).style.filter=Factions[PlayerChoiceFaction].ChromaCode;
	if(p<=10 || IndustrialBranch==1){
		if(!Units[MontreIndexBasis+p].MLPR??false){document.getElementById("UnitMontre"+p+"Mesh").style.visibility='inherit';document.getElementById("UnitMontre"+p+"Mesh").src="Assets/Units/StaticMeshes/"+Units[MontreIndexBasis+p].shortname+"Mesh3.PNG"}else{document.getElementById("UnitMontre"+p+"Mesh").style.visibility='hidden'}

		};
		

	//alert(MontreIndexBasis+p);
	let SpeciatorMontre=Units[Math.min(MontreIndexBasis+p,70)].shortname??false;
	if(!SpeciatorMontre){document.getElementById("Obturator"+p).style.visibility="visible"}else{document.getElementById("Obturator"+p).style.visibility="hidden"};


	if(p<11){
		//document.getElementById('Obturator'+p).style.visibility='hidden';
		document.getElementById('PriceTag'+p).style.visibility='inherit';
		document.getElementById('UnitMontre'+p).style.visibility='inherit';
		document.getElementById('UnitFrame'+p).style.visibility='inherit';
		document.getElementById('UnitUnderlayer'+p).style.visibility='inherit';

		document.getElementById("PriceTag"+p).innerHTML="₤"+Units[MontreIndexBasis+p].Cost;
		document.getElementById("UnitMontre"+p).src="Assets/Units/Static/"+Units[MontreIndexBasis+p].shortname+"3.PNG";
		document.getElementById("UnitMontre"+p).style.left=(Units[MontreIndexBasis+p].StaticOffsetX ?? [0,0,0,0,0])[3]+23+(p-1)*100+"px";
		document.getElementById("UnitMontre"+p).style.top=(Units[MontreIndexBasis+p].StaticOffsetY ?? [0,0,0,0,0])[3]+195+"px";
		if(YourMoney<Units[p+MontreIndexBasis].Cost){document.getElementById("UnitFrame"+p).src="Assets/Miscellaneous/UnitUnavailableFrame.PNG"}else{document.getElementById("UnitFrame"+p).src="Assets/Miscellaneous/UnitAvailableFrame.PNG"}


		
	

	}else{

		document.getElementById("PriceTag"+p).innerHTML="₱"+Units[p].Cost;
		if(YourMoney<Units[p].Cost){document.getElementById("UnitFrame"+p).src="Assets/Miscellaneous/UnitUnavailableFrame.PNG"}else{document.getElementById("UnitFrame"+p).src="Assets/Miscellaneous/UnitAvailableFrame.PNG"};

		//document.getElementById("UnitMontre"+p).style.left="0px";
		document.getElementById("UnitMontre"+p).style.top=(195+130*Math.floor((p-1)/10)+(Units[p].StaticOffsetY ?? [0,0,0,0,0])[3])+"px";


		if(IndustrialBranch!=1){document.getElementById("Obturator"+p).style.visibility="hidden";
		document.getElementById("UnitFrame"+p).style.visibility="hidden";
		document.getElementById("UnitUnderlayer"+p).style.visibility="hidden";
		document.getElementById("UnitMontre"+p).style.visibility="hidden";
		document.getElementById("PriceTag"+p).style.visibility="hidden"};

		if(IndustrialBranch==1){
		document.getElementById("UnitFrame"+p).style.visibility="inherit";
		document.getElementById("UnitUnderlayer"+p).style.visibility="inherit";
		document.getElementById("UnitMontre"+p).style.visibility="inherit";
		document.getElementById("PriceTag"+p).style.visibility="inherit";
		document.getElementById("UnitMontre"+p).src="Assets/Units/Static/"+Units[MontreIndexBasis+p].shortname+"3.PNG";

		}

		
		};



		};

	if(IndustrialBranch==3){document.getElementById("UnitType1").innerHTML=Language.SystemTerms[121];};
	if(IndustrialBranch==2){document.getElementById("Obturator10").style.visibility="visible"; document.getElementById("UnitType1").innerHTML=Language.SystemTerms[120];};
	if(IndustrialBranch==1){for(let j=2;j<=4;j++){document.getElementById("UnitTypeBar"+j).style.visibility="auto";document.getElementById("UnitType"+j).style.visibility="auto"};document.getElementById("UnitType1").innerHTML=Language.SystemTerms[116]};
	if(IndustrialBranch!=1){document.getElementById("Obturator1").style.visibility="visible"; for(let j=2;j<=4;j++){document.getElementById("UnitTypeBar"+j).style.visibility="hidden";document.getElementById("UnitType"+j).style.visibility="hidden"}}else{for(let j=2;j<=4;j++){document.getElementById("UnitTypeBar"+j).style.visibility="inherit";document.getElementById("UnitType"+j).style.visibility="inherit"}};


	if(IndustrialBranch==1){
		/*
		if(!InfantrySelection[0]){document.getElementById("Obturator8").style.visibility="visible"};
		if(!InfantrySelection[1]){document.getElementById("Obturator7").style.visibility="visible"};
		if(!InfantrySelection[2]){document.getElementById("Obturator4").style.visibility="visible"};
		if(!InfantrySelection[3]){document.getElementById("Obturator5").style.visibility="visible"};
		if(!InfantrySelection[4]){document.getElementById("Obturator6").style.visibility="visible"};
		if(!VehicleSelection[0]){document.getElementById("Obturator28").style.visibility="visible"};
		if(!VehicleSelection[1]){document.getElementById("Obturator27").style.visibility="visible"};
		if(!VehicleSelection[2]){document.getElementById("Obturator36").style.visibility="visible"};
		if(!VehicleSelection[3]){document.getElementById("Obturator15").style.visibility="visible"};
		if(!VehicleSelection[4]){document.getElementById("Obturator26").style.visibility="visible"};
		*/

		for(let u=1; u<=40; u++){let FS=Units[u].FactionSpecificity??0;
		if(FS!=0){if(!Factions[PlayerChoiceFaction].SpecialTechnology[Units[u].FactionSpecificity-1]){document.getElementById("Obturator"+u).style.visibility="visible"}};};
		};

	if(IndustrialBranch!=1){
		for(let u=MontreIndexBasis+1; u<=MontreIndexBasis+10; u++){let FS=Units[u].FactionSpecificity??0;

		if(FS!=0){if(!Factions[PlayerChoiceFaction].SpecialTechnology[Units[u].FactionSpecificity-1]){document.getElementById("Obturator"+(u-MontreIndexBasis)).style.visibility="visible"}};};
		document.getElementById("Obturator9").style.visibility="visible";
		document.getElementById("Obturator10").style.visibility="visible";
		};
	if(IndustrialBranch==1){
		for(let p=1; p<=40; p++){
		//This is a stopgap measure to make endgame units unconstructible for this version
		if(p%10==9 || p%10==0){document.getElementById("Obturator"+p).style.visibility="visible"}}};


		};
function LaunchSpecialOptionPanel(x,y){
	//alert(YourMoney>=Units[rostermap[X][Y].unitType].Cost/2);
	IsStork=false;
	IsConvoy=false;
	let isInFriendlyTerritory=false;
	document.getElementById("BuildStructureMask").style.visibility="inherit";

	let X=x;
	let Y=y;
	//alert(document.getElementById("UnitMap").scrollTop);

	UnitIcs=X;
	UnitIgrec=Y;
	document.getElementById("AirTransportPickupMask").src="Assets/Miscellaneous/StorkPickupMask.PNG";
	document.getElementById("NavalTransportPickupMask").src="Assets/Miscellaneous/ConvoyPickupMask.PNG";
	document.getElementById("SpecialActionPanel").style.visibility="visible";
	document.getElementById("SpecialActionPanel").style.left=Math.max(Math.min(-28+y*56,Map[0].length*56-115),0)+"px";
	document.getElementById("SpecialActionPanel").style.top=Math.max(Math.min(-15+x*56,Map.length*56-77),0)+"px";

	if(rostermap[X][Y]!=0 && hasCertainTrait(rostermap[X][Y].unitType, "Air Transport")){ IsStork=true; IsConvoy=false;};
	if(rostermap[X][Y]!=0 && hasCertainTrait(rostermap[X][Y].unitType, "Naval Transport")){ IsStork=false; IsConvoy=true;};
	if(IsStork){document.getElementById("AirTransportPickupMask").src="Assets/Miscellaneous/UnitDisembarkMask.PNG";document.getElementById("AirTransportPickup").src="Assets/Miscellaneous/UnitDisembark.PNG"}
	else{document.getElementById("AirTransportPickupMask").src="Assets/Miscellaneous/StorkPickupMask.PNG";document.getElementById("AirTransportPickup").src="Assets/Miscellaneous/StorkPickup.PNG"};
	if(IsConvoy){document.getElementById("NavalTransportPickupMask").src="Assets/Miscellaneous/UnitDisembarkMask.PNG";document.getElementById("NavalTransportPickup").src="Assets/Miscellaneous/UnitDisembark.PNG"}
	else{document.getElementById("NavalTransportPickupMask").src="Assets/Miscellaneous/ConvoyPickupMask.PNG";document.getElementById("NavalTransportPickup").src="Assets/Miscellaneous/ConvoyPickup.PNG"};

	

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

		if(isInFriendlyTerritory){
		document.getElementById("BuildStructureMask").style.visibility="hidden"}}else{document.getElementById("BuildStructureMask").style.visibility="inherit"};

	//Screw landmines, we ain't implementing them until RetrofitD has been done
		document.getElementById("LayMinesMask").style.visibility="inherit";

	};
function LevelLoader(){};
function LoadData(){
	 let decodedCookie = decodeURIComponent(document.cookie);
	 let Data= decodedCookie.split('|');

	 let LevelData=JSON.parse("["+Data[0]+"]");
	 let SettingsData=JSON.parse("["+Data[1]+"]");
	 for(let i=0;i<35;i++){Campaigns[0][Math.floor(i/5)][i%5].Finished=LevelData[i]};
	 for(let i=35;i<70;i++){Campaigns[1][Math.floor(i/5)-7][i%5].Finished=LevelData[i]};
	 for(let i=70;i<95;i++){Campaigns[2][Math.floor(i/5)-14][i%5].Finished=LevelData[i]};
	 for(let i=95;i<120;i++){Campaigns[3][Math.floor(i/5)-19][i%5].Finished=LevelData[i]};
	 for(let i=120;i<145;i++){Campaigns[4][Math.floor(i/5)-24][i%5].Finished=LevelData[i]};
	 for(let i=145;i<155;i++){Campaigns[5][Math.floor(i/5)-29][i%5].Finished=LevelData[i]};
	 for(let i=155;i<165;i++){Campaigns[6][Math.floor(i/5)-31][i%5].Finished=LevelData[i]};
	 for(let i=165;i<175;i++){Campaigns[7][Math.floor(i/5)-33][i%5].Finished=LevelData[i]};
	 for(let i=175;i<185;i++){Campaigns[8][Math.floor(i/5)-35][i%5].Finished=LevelData[i]};
	 for(let i=185;i<195;i++){Campaigns[9][Math.floor(i/5)-37][i%5].Finished=LevelData[i]};
	 for(let i=195;i<200;i++){Campaigns[10][0][i%5].Finished=LevelData[i]};


	 SoundChoice=SettingsData[0];
	 MusicChoice=SettingsData[1];
	 DialogueChoice=SettingsData[2];
	 IdleAnimChoice=SettingsData[3];
	 MystSettChoice=SettingsData[4];};
function moveOneTile(unit, direction){
	//alert(unit);
	let idem="Entity "+(MapRoster[unit].x-StandardX+1)+"X"+(MapRoster[unit].y-StandardY+1);
	//alert(idem);

	
	let x=(direction-2)*(direction%2);
	let y=(3-direction)*((direction-1)%2);
	let cellX=Units[MapRoster[unit].unitType].boxX ?? 56;
	let cellY=Units[MapRoster[unit].unitType].boxY ?? 56;
	//alert(cellX+" "+cellY)
	let castTime=setInterval(Act,100);
	let frame=0;
	function Act(){
	frame++;
		var top=(frame*cellY)+"px";
		var right=(direction*cellX)+"px";
		var bottom=(frame+1)*cellY+"px";
		var left=(direction-1)*cellX+"px";
		var coord="rect("+top+","+right+","+bottom+","+left+")";
		//document.getElementById(idem).style.visibility="hidden";
		document.getElementById(idem).style.clip=coord;
		document.getElementById(idem).src="Assets/Units/Move/"+Units[MapRoster[unit].unitType].shortname+"Movement.PNG";	
		document.getElementById(idem).style.top= -frame*56 + x*frame*14 + "px";
		document.getElementById(idem).style.left= 56-direction*56+y*frame*14 +"px";
		//document.getElementById(idem).style.visibility="visible";


	if(frame==4){
		//alert(idem);
		//document.getElementById(idem).style.visibility="hidden";
		let newX=MapRoster[unit].x+x;
		let newY=MapRoster[unit].y+y;
		//alert(newX+1-DefaultX);
		//alert(newY+1-DefaultY);

		//rostermap[MapRoster[unit].x+x][MapRoster[unit].y+y]=rostermap[MapRoster[unit].x][MapRoster[unit].y];
		//rostermap[MapRoster[unit].x][MapRoster[unit].y]=0;
		//MapRoster[unit].x=MapRoster[unit].x+x;
		//MapRoster[unit].y=MapRoster[unit].y+y;
		//document.getElementById("Entity "+(MapRoster[unit].x+1-StandardX)+"X"+(MapRoster[unit].y+1-StandardY)).style.visibility="hidden";
		//document.getElementById("Entity "+(MapRoster[unit].x+1-StandardX)+"X"+(MapRoster[unit].y+1-StandardY)).style.top="0px";
		//document.getElementById("Entity "+(MapRoster[unit].x+1-StandardX)+"X"+(MapRoster[unit].y+1-StandardY)).style.left="0px";

		//document.getElementById("Entity "+(newX+1-StandardX)+"X"+(newY+1-StandardY)).style.visibility="visible";
		//document.getElementById("Entity "+(newX+1-StandardX)+"X"+(newY+1-StandardY)).style.filter=Factions[MapRoster[unit].faction].ChromaCode;
		//document.getElementById("Entity "+(newX+1-StandardX)+"X"+(newY+1-StandardY)).src="Assets/Units/Static/"+Units[MapRoster[unit].unitType].shortname+direction+".PNG";
		document.getElementById(idem).style.top=(Units[MapRoster[unit].unitType].StaticOffsetX ?? [0,0,0,0,0])[direction]+"px";
		document.getElementById(idem).style.left=(Units[MapRoster[unit].unitType].StaticOffsetX ?? [0,0,0,0,0])[direction]+"px";	
		document.getElementById(idem).style.clip="auto";
		document.getElementById(idem).src="Assets/Units/Static/"+Units[MapRoster[unit].unitType].shortname+direction+".PNG";
		//document.getElementById(idem).style.visibility="visible";

		//alert("hi!");
		clearInterval(castTime);};
	
	};};
function moveUnit(unit, path){
	let considerX=MapRoster[unit].x;
	let considerY=MapRoster[unit].y;

	if(path.length>0) battalion.soundPlayer.playSound(Units[MapRoster[unit].unitType].shortname + "Move");

	for (let wup=0;wup<path.length;wup++){
		let permission=true;
		let ics=MapRoster[unit].x;
		let igrec=MapRoster[unit].y;
		considerX+=(path[wup]-2)*(path[wup]%2);
		considerY+=(3-path[wup])*((path[wup]-1)%2);
		
		//moveOneTile(unit, path[wup])
		if(wup==0){moveOneTile(unit, path[wup])};
		if(wup>0){setTimeout(moveOneTile, 500, unit, path[wup]);};
		document.getElementById("Entity "+(ics+1-StandardX)+"X"+(igrec+1-StandardY)).style.visibility="hidden";
		};
		//if(rostermap[considerX][considerY]!=0){permission=false};


		let chuchu=rostermap[MapRoster[unit].x][MapRoster[unit].y];
		rostermap[MapRoster[unit].x][MapRoster[unit].y]=0;
		rostermap[considerX][considerY]=chuchu;
		

		document.getElementById("Entity "+(MapRoster[unit].x-StandardX+1)+"X"+(MapRoster[unit].y-StandardY+1)).style.visibility="hidden";
		MapRoster[unit].x=considerX;
		MapRoster[unit].y=considerY;

		let actualX=considerX-StandardX+1;
		let actualY=considerY-StandardY+1;

		//document.getElementById("Entity "+actualX+"X"+actualY).style.visibility="visible";
		//document.getElementById("Entity "+actualX+"X"+actualY).style.filter=Factions[MapRoster[unit].faction].ChromaCode;
		document.getElementById("Entity "+actualX+"X"+actualY).src="Assets/Units/Static/"+Units[MapRoster[unit].unitType].shortname+MapRoster[unit].direction+".PNG";};
function MoveUnit(unit, path){
	//alert(unit+" "+path);
	//if(MapRoster[unit].faction!=PlayerChoiceFaction){BLARG=0;};
	//Constants:

	let CanMove=true;


	if(path.length==0){CanMove=false};

	if(MapRoster[unit].faction==PlayerChoiceFaction){
	if(MapRoster[unit].faction==PlayerChoiceFaction && BLARG.length==1){CanMove=false};
	//if(rostermap[BLARG[BLARG.length-1].X][BLARG[BLARG.length-1].Y].coallition==Factions[PlayerChoiceFaction].faction){CanMove=false};
	if(rostermap[BLARG[BLARG.length-1].X][BLARG[BLARG.length-1].Y]!=0){CanMove=false};
	if(path[0]-1==BLARG[0].X && path[1]-1==BLARG[0].Y){CanMove=false};};
	//if(BLARG[BLARG.length-1].X==BLARG[0].X && BLARG[BLARG.length-1].Y==BLARG[0].Y){alert("Tottenham")};
	//alert(BLARG[BLARG.length-1].X+" "+BLARG[BLARG.length-1].Y);

	if(CanMove){
		let ExtranOrigin=false;
		let ExtranDestination=false;

	if(MapRoster[unit].faction==PlayerChoiceFaction && (LastMove.ID==0 || LastMove.ID!=unit)){
		LastMove.ID=unit;
		LastMove.HP=MapRoster[unit].life;
		LastMove.DIR=MapRoster[unit].direction;
		LastMove.X=MapRoster[unit].x;
		LastMove.Y=MapRoster[unit].y;
		LastMove.cloak=MapRoster[unit].isCloaked??false;
		LastMove.encore=MapRoster[unit].canEncore??false;
		LastMove.hasEngaged=true;

		//alert(LastMove.X+" "+LastMove.Y);
		};

		//if(MapRoster[unit].x<StandardX || MapRoster[unit].y<StandardY || MapRoster[unit].x>StandardX+9 || MapRoster[unit].y>StandardY+9){ExtranOrigin=true};
		let origX=MapRoster[unit].x;
		let origY=MapRoster[unit].y;
		MarkerMap[origX][origY]=0;
		let destX=MapRoster[unit].x;
		let destY=MapRoster[unit].y;

		let Path=[];
		//console.log(BLARG.length);
	if(MapRoster[unit].faction==PlayerChoiceFaction){
		if(BLARG.length==1){RemoveKebabIMeanBlep();};
		for(let b=1;b<BLARG.length;b++){
			if(BLARG[b].X-BLARG[b-1].X==-1){Path[Path.length]=1};
			if(BLARG[b].Y-BLARG[b-1].Y==1){Path[Path.length]=2};		
			if(BLARG[b].X-BLARG[b-1].X==1){Path[Path.length]=3};
			if(BLARG[b].Y-BLARG[b-1].Y==-1){Path[Path.length]=4};	
			};
			//alert(Path);
		if(MapRoster[unit].faction==PlayerChoiceFaction){path=Path};
		};

		for(let i=0;i<path.length;i++){
		destX+=(path[i]-2)*(path[i]%2);
		destY+=(3-path[i])*(path[i]-1)%2;};
		//if(destX==origX && destY==origY){RemoveKebabIMeanBlep(); return 0};
		//This thing is not yet proven to work properly
		rostermap[destX][destY]=rostermap[origX][origY];
		document.getElementById("Entity "+(destX+1)+"X"+(destY+1)).style.visibility="hidden";

		//if(destX<StandardX || destX>StandardX+9 || destY<StandardY || destY>StandardY+9){ExtranDestination=true};

		//if(!Cloak(destX, destY, MapRoster[unit].unitType, Factions[MapRoster[unit].faction].faction)){MapRoster[unit].isCloaked=false; rostermap[destX][destY].isCloaked=false};


		//alert(MapRoster[unit].isCloaked);

		//alert(destX + " " + destY);
		//alert(rostermap[destX][destY]);


		document.getElementById("Cargo "+(origX+1)+"X"+(origY+1)).style.visibility="hidden";
		document.getElementById("Flag "+(origX+1)+"X"+(origY+1)).style.visibility="inherit";
		if(TileFlagMap[origX][origY]==0){document.getElementById("Flag "+(origX+1)+"X"+(origY+1)).style.visibility="hidden";}else if(TileFlagMap[origX][origY]==2){document.getElementById("Flag "+(origX+1)+"X"+(origY+1)).src='Assets/Miscellaneous/DefendFlag.PNG'}else if(TileFlagMap[origX][origY]==2){document.getElementById("Flag "+(origX+1)+"X"+(origY+1)).src='Assets/Miscellaneous/CaptureFlag.PNG'};
		if(rostermap[destX][destY].Defeat??false){document.getElementById("Flag "+(destX+1)+"X"+(destY+1)).style.visibility='inherit';document.getElementById("Flag "+(destX+1)+"X"+(destY+1)).src='Assets/Miscellaneous/DestroyFlag.PNG'};
		if(rostermap[destX][destY].Protect??false){document.getElementById("Flag "+(destX+1)+"X"+(destY+1)).style.visibility='inherit';document.getElementById("Flag "+(destX+1)+"X"+(destY+1)).src='Assets/Miscellaneous/ProtectFlag.PNG'};

		ExtranOrigin=false; ExtranDestination=false;

		//Moving intran

		if(!ExtranOrigin && !ExtranDestination){

			//for(let i=0;i<path.length;i++){};
			//offsetX=(Units[MapRoster[unit].unitType].StaticOffsetX ?? [0,0,0,0,0])[path[i]];
			//offsetY=(Units[MapRoster[unit].unitType].StaticOffsetY ?? [0,0,0,0,0])[path[i]];

			let activeOffsetX=Units[MapRoster[unit].unitType].MovementOffsetX ?? [0,0,0,0,0];
			let activeOffsetY=Units[MapRoster[unit].unitType].MovementOffsetY ?? [0,0,0,0,0];
			//alert(activeOffsetX);
			let offsetX=activeOffsetX[path[0]];
			let offsetY=activeOffsetY[path[0]];

			let castTime=setInterval(Act,100/path.length);
			let frame=0;

			if((MapRoster[unit].unitType == 19 || MapRoster[unit].unitType == 42) && MystSettChoice) {
				battalion.soundPlayer.playSound("HelikopterMove");
			} else {
				battalion.soundPlayer.playSound(Units[MapRoster[unit].unitType].shortname + "Move");
			}

			function Act(){
				//frame=0;
				
				//alert(path.length);
				document.getElementById("Entity "+(destX+1)+"X"+(destY+1)).style.visibility="hidden";


				if(frame%4==0 && frame<path.length*4){
					//alert(frame);
					let dir=path[Math.round(frame/4)];
					ics=(dir-2)*(dir%2);
					igrec=(3-dir)*((dir-1)%2);
					//document.getElementById("Entity "+(destX+1)+"X"+(destY+1)).style.visibility="hidden";

				//document.getElementById("Entity "+(destX+1)+"X"+(destY+1)).style.visibility="hidden";
					
				document.getElementById("EntityCore "+(origX+1)+"X"+(origY+1)).src="Assets/Units/Move/"+Units[MapRoster[unit].unitType].shortname+"Movement"+dir+".GIF";
				if(!Units[MapRoster[unit].unitType].MLPR??false){document.getElementById("EntityMesh "+(origX+1)+"X"+(origY+1)).src="Assets/Units/MoveMeshes/"+Units[MapRoster[unit].unitType].shortname+"MovementMesh"+dir+".GIF"}else{document.getElementById("EntityMesh "+(destX+1)+"X"+(destY+1)).src="Assets/Miscellaneous/Nothing.PNG"};

				};
				offsetX+=(ics*14)??0+(Units[MapRoster[unit].unitType].MovementOffsetY ?? [0,0,0,0,0])[path[path.length-1]];
				offsetY+=(igrec*14)??0+(Units[MapRoster[unit].unitType].MovementOffsetX ?? [0,0,0,0,0])[path[path.length-1]];
				document.getElementById("Entity "+(origX+1)+"X"+(origY+1)).style.top=offsetX+"px";
				document.getElementById("Entity "+(origX+1)+"X"+(origY+1)).style.left=offsetY+"px";




				if(frame>=4*path.length){
					//document.getElementById("Entity "+(destX+1)+"X"+(destY+1)).src="Assets/Units/Static/"+Units[MapRoster[unit].unitType].shortname+path[path.length-1]+".PNG";
					clearInterval(castTime);
					MapRoster[unit].x=destX;
					MapRoster[unit].y=destY;
					rostermap[destX][destY]=rostermap[origX][origY];
					rostermap[origX][origY]=0;

					document.getElementById("Entity "+(origX+1)+"X"+(origY+1)).style.top="0px";
					document.getElementById("Entity "+(origX+1)+"X"+(origY+1)).style.left="0px";
					document.getElementById("Entity "+(destX+1)+"X"+(destY+1)).style.top=(Units[MapRoster[unit].unitType].StaticOffsetY ?? [0,0,0,0,0])[path[path.length-1]]+"px";
					document.getElementById("Entity "+(destX+1)+"X"+(destY+1)).style.left=(Units[MapRoster[unit].unitType].StaticOffsetX ?? [0,0,0,0,0])[path[path.length-1]]+"px";
					

					document.getElementById("Entity "+(origX+1)+"X"+(origY+1)).style.visibility="hidden";
					document.getElementById("EntityCore "+(origX+1)+"X"+(origY+1)).style.filter="";
					document.getElementById("Entity "+(destX+1)+"X"+(destY+1)).style.visibility="visible";
					document.getElementById("EntityCore "+(destX+1)+"X"+(destY+1)).style.visibility="inherit";


					//if(frame>4*path.length){alert(frame +" "+ path[frame/4-1])};
					//if((path[frame/4-1]??0)==0){console.log(path[0])};
					document.getElementById("EntityCore "+(origX+1)+"X"+(origY+1)).src="Assets/Units/Static/"+Units[MapRoster[unit].unitType].shortname+path[Math.max(frame/4-1,0)]+".PNG";
					document.getElementById("EntityCore "+(destX+1)+"X"+(destY+1)).src="Assets/Units/Static/"+Units[MapRoster[unit].unitType].shortname+path[Math.max(frame/4-1,0)]+".PNG";
					document.getElementById("EntityCore "+(destX+1)+"X"+(destY+1)).style.filter=Factions[MapRoster[unit].faction].ChromaCode;
					let OpacString="opacity(0%)";
					if(Factions[MapRoster[unit].faction].faction==Factions[PlayerChoiceFaction].faction){OpacString=" opacity(50%)"};
					if(!Units[MapRoster[unit].unitType].MLPR??false){
						document.getElementById("EntityMesh "+(destX+1)+"X"+(destY+1)).src="Assets/Units/StaticMeshes/"+Units[MapRoster[unit].unitType].shortname+"Mesh"+path[Math.max(frame/4-1,0)]+".PNG";
						document.getElementById("EntityMesh "+(origX+1)+"X"+(origY+1)).src="Assets/Units/StaticMeshes/"+Units[MapRoster[unit].unitType].shortname+"Mesh"+path[Math.max(frame/4-1,0)]+".PNG";
						}else{document.getElementById("EntityMesh "+(destX+1)+"X"+(destY+1)).src="Assets/Miscellaneous/Nothing.PNG";document.getElementById("EntityMesh "+(origX+1)+"X"+(origY+1)).src="Assets/Miscellaneous/Nothing.PNG"};
					//if(MapRoster[unit].isCloaked){document.getElementById("Entity "+(destX+1)+"X"+(destY+1)).style.filter=OpacString};
				};


				frame++;
			};
			
		
		

			};

		//Warping extern(Deprecated)
		if(ExtranOrigin || ExtranDestination){
		MapRoster[unit].x=destX;
		MapRoster[unit].y=destY;
		rostermap[destX][destY]=rostermap[origX][origY];
		rostermap[origX][origY]=0;};

		//Warping extran(Deprecated)

		if(!ExtranOrigin && ExtranDestination){
			//document.getElementById("Entity "+(origX+1)+"X"+(origY+1)).style.visibility="hidden";

			};

		//Warping intran(Deprecated)

		if(!ExtranDestination && ExtranOrigin){
		//document.getElementById("Entity "+(destX+1)+"X"+(destY+1)).style.visibility="visible";
		//document.getElementById("Entity "+(destX+1)+"X"+(destY+1)).src="Assets/Units/Static/"+Units[MapRoster[unit].unitType].shortname+MapRoster[unit].direction+".PNG";
		//document.getElementById("Entity "+(destX+1)+"X"+(destY+1)).style.filter=Factions[MapRoster[unit].faction].ChromaCode;
		};

		//alert(rostermap[destX][destY-1]);
		ScoutVicinity(destX,destY);
		//AdjacentCloakers=[];
		LastMove.Uncloaked=AdjacentCloakers;
		let FadeFrame=0;
		let FadeIn=setInterval(FadeStage,100);

		function FadeStage(){
		FadeFrame++;
		//console.log(FadeFrame);

		if(FadeFrame>5){
			//alert(!rostermap[destX][destY].isCloaked);
			let StealthFactor=false;
			let CloakIndex=FadeFrame/10;
			if(MapRoster[unit].faction==PlayerChoiceFaction){CloakIndex=FadeFrame/5-1};
			if(hasCertainTrait(rostermap[destX][destY].unitType,"Stealth")??false){StealthFactor=true};
			if(hasCertainTrait(rostermap[destX][destY].unitType,"Submerged")??false){StealthFactor=true};
			if(!rostermap[destX][destY].isCloaked && StealthFactor){document.getElementById("EntityCore "+(destX+1)+"X"+(destY+1)).style.filter=Factions[MapRoster[unit].faction].ChromaCode; 
			if(Factions[MapRoster[unit].faction].faction==Factions[PlayerChoiceFaction].faction){document.getElementById("Entity "+(destX+1)+"X"+(destY+1)).style.filter="opacity("+(FadeFrame/10)+")"}else{document.getElementById("Entity "+(destX+1)+"X"+(destY+1)).style.filter="opacity("+(FadeFrame/5-1)+")"};

			};
			for(let c=0;c<AdjacentCloakers.length;c++){
				//console.log(destX);
			if(AdjacentCloakers[c]==1){document.getElementById("EntityCore "+(destX)+"X"+(destY+1)).style.filter=Factions[rostermap[destX-1][destY].faction].ChromaCode;
			document.getElementById("Entity "+(destX)+"X"+(destY+1)).style.filter="opacity("+CloakIndex+")"};
			if(AdjacentCloakers[c]==2){document.getElementById("EntityCore "+(destX+1)+"X"+(destY+2)).style.filter=Factions[rostermap[destX][destY+1].faction].ChromaCode;
			document.getElementById("Entity "+(destX+1)+"X"+(destY+2)).style.filter="opacity("+CloakIndex+")"};
			if(AdjacentCloakers[c]==3){document.getElementById("EntityCore "+(destX+2)+"X"+(destY+1)).style.filter=Factions[rostermap[destX+1][destY].faction].ChromaCode;
			document.getElementById("Entity "+(destX+2)+"X"+(destY+1)).style.filter="opacity("+CloakIndex+")"};
			if(AdjacentCloakers[c]==4){document.getElementById("EntityCore "+(destX+1)+"X"+(destY)).style.filter=Factions[rostermap[destX][destY-1].faction].ChromaCode;
			document.getElementById("Entity "+(destX+1)+"X"+(destY)).style.filter="opacity("+CloakIndex+")"};
			};



			};


		if(FadeFrame==10){

			if(!rostermap[destX][destY].isCloaked){document.getElementById("EntityCore "+(destX+1)+"X"+(destY+1)).style.filter=Factions[MapRoster[unit].faction].ChromaCode;};
			for(let c=0;c<AdjacentCloakers.length;c++){
			if(AdjacentCloakers[c]==1){document.getElementById("EntityCore "+(destX)+"X"+(destY+1)).style.filter=Factions[rostermap[destX-1][destY].faction].ChromaCode; rostermap[destX-1][destY].isCloaked=false};
			if(AdjacentCloakers[c]==2){document.getElementById("EntityCore "+(destX+1)+"X"+(destY+2)).style.filter=Factions[rostermap[destX][destY+1].faction].ChromaCode; rostermap[destX][destY+1].isCloaked=false};
			if(AdjacentCloakers[c]==3){document.getElementById("EntityCore "+(destX+2)+"X"+(destY+1)).style.filter=Factions[rostermap[destX+1][destY].faction].ChromaCode; rostermap[destX+1][destY].isCloaked=false};
			if(AdjacentCloakers[c]==4){document.getElementById("EntityCore "+(destX+1)+"X"+(destY)).style.filter=Factions[rostermap[destX][destY-1].faction].ChromaCode; rostermap[destX][destY-1].isCloaked=false};
			};






			clearInterval(FadeIn);




		};

		};


		
		//LastUnit=rostermap[MapRoster[unit].x][MapRoster[unit].y];
		if(DynamicEvents.length>0){EvaluateDynamicEvent('Locomotion',[destX,destY]);};

		let mustCheck=false;
		for(let l=0; l<Constants.Capture.length; l++){if(destX==Constants.Capture[l].x&&destY==Constants.Capture[l].y){mustCheck=true}};
		for(let l=0; l<Constants.Defend.length; l++){if(destX==Constants.Defend[l].x&&destY==Constants.Defend[l].y){mustCheck=true}};
		if(mustCheck){Inspection(Turn,Constants,Roster)};

			}else{
		if(MapRoster[unit].faction==PlayerChoiceFaction){document.getElementById("Marker "+(MapRoster[unit].x+1)+"X"+(MapRoster[unit].y+1)).style.visibility="visible"};

		};

		//alert(MapRoster[unit].isVized);
	};
function MontreUnit(Class){
	document.getElementById("UnitMontre").src="Assets/Units/Move/"+Units[Class].shortname+"Movement2.GIF";
	document.getElementById("UnitMontre").style.left=Units[Class].MovementOffsetX+"px";
	document.getElementById("UnitMontre").style.top=Units[Class].MovementOffsetY+"px";
	if(!Units[Class].MLPR??false){document.getElementById("UnitMontre"+Class+"Mesh").src="Assets/Units/MoveMeshes/"+Units[Class].shortname+"MovementMesh3.GIF"; document.getElementById("UnitMontreMesh").src="Assets/Units/MoveMeshes/"+Units[Class].shortname+"MovementMesh2.GIF"}else{document.getElementById("UnitMontre"+Class+"Mesh").src="Assets/Miscellaneous/Nothing.PNG";document.getElementById("UnitMontreMesh").src="Assets/Miscellaneous/Nothing.PNG"};
	document.getElementById("MontreArmor").src="Assets/Traits/"+Units[Class].Armor+"Armor.PNG";
	document.getElementById("MontreAttack").src="Assets/Traits/"+Units[Class].Weapon+"Weapon.PNG";
	document.getElementById("MontreLocomotion").src="Assets/Traits/"+Units[Class].Movement+".PNG";
	document.getElementById("MontreArmorText").innerHTML=Units[Class].HP+"/"+Units[Class].HP;
	document.getElementById("MontreAttackText").innerHTML=Units[Class].Attack+"("+Units[Class].MinRange+"-"+Units[Class].MaxRange+")";
	document.getElementById("MontreLocomotionText").innerHTML=Units[Class].Speed;
	document.getElementById("MontreTrait1").src="Assets/Traits/"+Units[Class].tag1+".PNG";
	document.getElementById("MontreTrait2").src="Assets/Traits/"+Units[Class].tag2+".PNG";
	document.getElementById("MontreTrait3").src="Assets/Traits/"+Units[Class].tag3+".PNG";
	document.getElementById("MontreTrait4").src="Assets/Traits/"+Units[Class].tag4+".PNG";
	document.getElementById("MontreName").innerHTML=Language.UnitNames[Class];
	document.getElementById("MontreDescription").innerHTML=Language.UnitDesc[Class];
	HighlightedEntity=Units[Class];

	//there was an attempt
	//let UMTI=Class;
	//if(IndustrialBranchBrowsed==2){UMTI-=40};
	//if(IndustrialBranchBrowsed==3){UMTI-=50};
	//document.getElementById("UnitMontre"+UMTI).style.left=(Units[Class].MovementOffsetX??[0,0,0,0,0])[3]+"px";

	};
function NationDetails(Nation){

	if(Factions[Nation].Access){
	ChosenNation=Nation;
	ChosenChapter=1;
	document.getElementById("NationColor").style.filter=Factions[Nation].ChromaCode;
	document.getElementById("NationDetails").style.visibility="visible";
	document.getElementById("NationNameSpecific").innerHTML=Factions[Nation].name;
	document.getElementById("FactionNameSpecific").innerHTML=Factions[Nation].faction;
	let PR=0;
	if(Factions[Nation].powerRanking=="Major Power"){PR=1};
	if(Factions[Nation].powerRanking=="Regional Power"){PR=2};
	if(Factions[Nation].powerRanking=="Minor Power"){PR=3};
	document.getElementById("NationStatus").innerHTML=Language.SystemTerms[40+PR];
	document.getElementById("NationSynopsisSpecific").innerHTML="";
	let ND=Language.NationDesc[Nation-1];
	for(let I=0; I<ND.length; I++){document.getElementById("NationSynopsisSpecific").innerHTML+=ND[I]+"<br><br>"};
	//document.getElementById("CampaignSelectedText").innerHTML="Proceed";
	}else{alert("Halt! None may see the secret nations until they have unlocked them. Go back to playing the regular campaigns!")};};
function NudgeMap(Direction){
	//alert(MarkerMap[0]);
	Map=ChosenMap;
	let ics=(Direction-2)*(Direction%2);
	let igrec=(3-Direction)*((Direction-1)%2);
	
	checky=false;
	ChosenUnit.definite=false;
	if(StandardX+ics>=0 && StandardX+ics+9<Map.length && StandardY+igrec>=0 && StandardY+igrec+9<Map[0].length){checky=true;};
	//alert(checky);
	if(checky){StandardX+=ics;
		StandardY+=igrec;
		//FillMap(Map);
		//let MarkerMap=[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];

	for(let X=StandardX;X<StandardX+10;X++){
	for(let Y=StandardY;Y<StandardY+10;Y++){
		document.getElementById("Canceler "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.visibility="hidden";
		//alert(rostermap[X][Y]);
		//if(rostermap[X][Y].faction==2){alert("Sonda!")};
		if(MarkerMap[X][Y]){
			//alert((X+1-StandardX) + " " + (Y+1-StandardY));
			if(rostermap[X][Y].life>0){document.getElementById("Marker "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.visibility="visible";}};
		if(rostermap[X][Y]!=0){
		//alert(rostermap[X][Y].faction);
		document.getElementById("Entity "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.top=(Units[rostermap[X][Y].unitType].StaticOffsetY ?? [0,0,0,0,0])[rostermap[X][Y].direction] + "px";
		document.getElementById("Entity "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.left=(Units[rostermap[X][Y].unitType].StaticOffsetX ?? [0,0,0,0,0])[rostermap[X][Y].direction] + "px";
		document.getElementById("Entity "+(X+1-StandardX)+"X"+(Y+1-StandardY)).src="Assets/Units/Static/"+(Units[rostermap[X][Y].unitType].shortname)+rostermap[X][Y].direction+".PNG";
		let Filter=Factions[rostermap[X][Y].faction].ChromaCode;
		//if(rostermap[X][Y].isCloaked){Filter+=" opacity(50%)"};
		//document.getElementById("Entity "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.filter=Filter;
		document.getElementById("Entity "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.visibility="visible";
		};
		//Entity=rostermap[X][Y];
		//if(MarkerMap[X][Y]){document.getElementById("Entity "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.visibility="hidden";
		if(rostermap[X][Y]==0){document.getElementById("Entity "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.visibility="hidden";};
		if(!MarkerMap[X][Y]){
			//alert(rostermap[X][Y]);
			document.getElementById("Marker "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.visibility="hidden";
			//document.getElementById("Entity "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.visibility="hidden";
		};
		/*
		let marka=false;
		
		document.getElementById("Entity "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.visibility="hidden";
		if(document.getElementById("Marker "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.visibility=="visible" || document.getElementById("Canceler "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.visibility=="visible"){
			marka=true;
			markaX=X+1-StandardX-ics;
			markaY=Y+1-StandardY-igrec;*/
			//alert(markaX + " X " + markaY);
			//document.getElementById("Marker "+markaX+"X"+markaY).style.visibility="visible";
			//MarkerMap[markaX][markaY]=true;
			
			};
		//document.getElementById("Marker "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.visibility="hidden";

		//if(document.getElementById("Canceler "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.visibility=="visible"){alert("Hello!")};
		//document.getElementById("Canceler "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.visibility="hidden";


	/*
		if(Entity!=0){
	
	document.getElementById("Entity "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.visibility="visible";
	document.getElementById("Entity "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.top=(Units[Entity.unitType].StaticOffsetY ?? [0,0,0,0,0])[Entity.direction] + "px";
	document.getElementById("Entity "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.left=(Units[Entity.unitType].StaticOffsetX ?? [0,0,0,0,0])[Entity.direction] + "px";
	document.getElementById("Entity "+(X+1-StandardX)+"X"+(Y+1-StandardY)).src="Assets/Units/Static/"+Units[Entity.unitType].shortname+Entity.direction+".PNG";
	document.getElementById("Entity "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.filter=Factions[Entity.faction].ChromaCode;};};
	*/
		};
		/*
		for(let X=0;X<10;X++){
			for(let Y=0;Y<10;Y++){
			if(MarkerMap[X][Y]){document.getElementById("Marker "+X+"X"+Y).style.visibility="visible";};
			if(MarkerMap[X][Y]){document.getElementById("Canceler "+X+"X"+Y).style.visibility="hidden";};
			};};
		*/
		RefreshMap();
	};};
function NudgeMapEditor(X,Y){
	let checker=false;
	let x=X+EditorStandardX;
	let y=Y+EditorStandardY;
	if(x>=0 && x<=EditorMap.length-10 && y>=0 && y<=EditorMap[0].length-10){checker=true};
	//if(!checker){alert("Flubbed!")};
	if(checker){
		/*
		for(let i=0;i<10;i++){for(let j=0;j<10;j++){
			document.getElementById("Tile "+(i+1)+" X "+(j+1)).src="Assets/Tiles/"+Terrain[EditorMap[x+i][y+j]].name+".PNG";

		}};
		*/

		EditorStandardX=x;

		EditorStandardY=y;
		//alert(EditorStandardY);

		RefreshMapEditor();
		} else {
			battalion.soundPlayer.playSound("Clank");
		}
	}
function OpenSpecialBloc(Bloc){
	BlocVizat=Bloc;
	//alert(Bloc[0].Name);
	for(let B=0;B<9;B++){document.getElementById("Special Level "+(B+1)).src="Assets/SpecialLevels/"+(Bloc[B] ?? {Name:""}).Name+".PNG";

	};};
function PickNation(Index){



	};

const PlayBGM = function(playlistIndex) {
	if(playlistIndex >= 0 && playlistIndex < PLAYLIST_MAP.length) {
		const playlistID = PLAYLIST_MAP[playlistIndex];

		battalion.musicPlayer.playPlaylist(playlistID);
	}
}

function PI_Scouter(Unit,Map){

	//Prerequisites
	var Speed=Unit.speed;
	var Type=Unit.movementType;
	var Faction=Unit.faction;
	var Coallition=Unit.coallition;
	var Lat=Unit.x;
	var Long=Unit.y;
	var SPD=Unit.speed;
	var X=Lat;
	var Y=Long;
	let unitIndex=Unit.index;
	let Path=[1];
	BLARG=[{X:Lat,Y:Long}];
	//SBLARG(X,Y);
	Pizdamatii=[];
	TargetList=[];
	//alert(Unit);

	MapClone=JSON.parse(JSON.stringify(Map));
	//alert(MapClone[0][0]);


	//Stepmap and Targetmap initializer. Is this comment still necessary?
	//IDC, leave it here in case players want to explore the script
	//I wonder how many of them there will be
	//I'd say probably 5% of them in the beginning. Then about 20%. Maybe?
	//Shouldn't we prank them or something?
	//Oh hell yes. Any idea?
	//We could say 'Dicks out for Harambe!'
	//We'll get innocent YouTubers demonetized. Better something inocuous
	//Will this game even be played by YouTubers? And besides, they can just put a nice little censor bar over it. Done. Problem solved.
	//Eh, probably some minor YouTuber will. Not the big shots like Pewds. Pewdiepie won't be caught dead playing this game.
	//Let's see if this game doesn't get blammed from the get-go. *cough* SCADP *cough*.
	//Blammed?
	//Yeah, blammed. Are you a zoomer or something?
	//Nothing, just wondering how many will get that reference.
	//I don't think zoomers will play it. Maybe it'll get some age restriction on Steam so only 17+ people can play.
	//Why would they? This game only sporadically uses profanity.
	//WHY WOULD THEY!? I WONDER! It's not like it makes TNO look like MLP when there's a profanity every seven words and an allusion to dark shit every 3 missions.
	//Yeah, but other stuff got the greenlight despite that.
	//Because they got $$. We don't! We're a fucking indie team who's not even a studio, where we have 5 plums between ourselves and probably living off of ramen.
	//I beg to differ. I live off of omelette and Coke Zero.
	//I'm starting to regret making this game free.
	//STFU, we're not a soulless corporation. Let it be free.
	//Yeah... the cost will be having to listen to our brainfarts.
	//Silix, Wisp, Luna! Cut it out and get back to work.
	let mapWidth=Map[0].length;
	let mapHeight=Map.length;
	var Stepmap=JSON.parse(JSON.stringify(Map));
	var Targetmap=JSON.parse(JSON.stringify(Map));	

	AddressMap=[];
	AddressMapLine=[];
	for(let i=0;i<Map[0].length;i++){AddressMapLine[AddressMapLine.length]=0};
	for(let j=0;j<Map.length;j++){AddressMap[AddressMap.length]=AddressMapLine};
	AddressMap=JSON.parse(JSON.stringify(AddressMap));
	Thing=JSON.parse(JSON.stringify(AddressMap));

	
	//Here lies the switch to get the stepmap.	
	switch(Type){
		case "Foot":
		for(let P=0;P<mapHeight;P++){for(Q=0;Q<mapWidth;Q++){Stepmap[P][Q]=Terrain[MapClone[P][Q]].WalkThrough;}};
		break;

		case "Wheeled":
		for(let P=0;P<mapHeight;P++){for(Q=0;Q<mapWidth;Q++){Stepmap[P][Q]=Terrain[MapClone[P][Q]].DriveThrough}};
		break;

		case "Tracked":
		for(let P=0;P<mapHeight;P++){for(Q=0;Q<mapWidth;Q++){Stepmap[P][Q]=Terrain[MapClone[P][Q]].RollThrough}};
		break;

		case "Amphibious":
		for(let P=0;P<mapHeight;P++){for(Q=0;Q<mapWidth;Q++){Stepmap[P][Q]=Terrain[MapClone[P][Q]].WadeThrough}};
		break;

		case "Flight":
		for(let P=0;P<mapHeight;P++){for(Q=0;Q<mapWidth;Q++){Stepmap[P][Q]=Terrain[MapClone[P][Q]].FlyThrough}};
		break;

		case "Rudder":
		for(let P=0;P<mapHeight;P++){for(Q=0;Q<mapWidth;Q++){Stepmap[P][Q]=Terrain[MapClone[P][Q]].SailThrough}};
		break;

		case "Heavy Rudder":
		for(let P=0;P<mapHeight;P++){for(Q=0;Q<mapWidth;Q++){Stepmap[P][Q]=Terrain[MapClone[P][Q]].DeepSailThrough}};
		break;

		};
		

	//Standard-Issue Pathing Loop
	while(Path.length>0){
			CollisionCheck=false;
			let x=(Path[Path.length-1]-2)*(Path[Path.length-1])%2;
			let y=(3-Path[Path.length-1])*(Path[Path.length-1]-1)%2;

		if(X+x<0 || Y+y<0){Path[Path.length-1]+=1};
		if(X+x>=Map.length || Y+y>=Map[0].length){Path[Path.length-1]++;};
		if(X+x<Map.length && X+x>=0 && Y+y<Map[0].length && Y+y>=0){
		if(rostermap[X+x][Y+y]!=0){
			if((rostermap[X+x][Y+y].coallition!=Coallition && !hasCertainTrait(Unit.unitType,"Supply Distribution")) || (rostermap[X+x][Y+y].coallition==Coallition && hasCertainTrait(Unit.unitType,"Supply Distribution"))){
			CollisionCheck=true;
			if(rostermap[X+x][Y+y]!=0 && rostermap[X+x][Y+y].coallition==Coallition){Thing[X+x][Y+y]=1000};
			};
			};};

	//The block that checks whether advancing is possible and advances


		if(SPD>0 && Path[Path.length-1]<5 && X+x<Map.length && Y+y<Map[0].length){
			let x=(Path[Path.length-1]-2)*(Path[Path.length-1])%2;
			let y=(3-Path[Path.length-1])*(Path[Path.length-1]-1)%2;

			//alert(Stepmap[X][Y]);
			if(SPD>=Stepmap[X+x][Y+y] && CollisionCheck==false){
			X=X+x;
			Y=Y+y;
			//alert(Path);
			Pizdamatii[Pizdamatii.length]={x:X-StandardX,y:Y-StandardY,z:[]};
			Path[Path.length]=1;
			for(let p=0;p<Path.length;p++){Pizdamatii[Pizdamatii.length-1].z[p]=Path[p]};
			//Pizdamatii[Pizdamatii.length-1].z=Path;
			
			SPD=SPD-Stepmap[X][Y];}else{Path[Path.length-1]+=1;};
			}
	//The block that checks if backtracking is needed and does so

		else if(SPD==0 || Path[Path.length-1]>=5){
			//alert(Path[Path.length-1]);
			if(Path.length>=2){reverse=Path[Path.length-2];}else{break;};
			SPD=SPD+Stepmap[X][Y];

			X=X-(reverse-2)*(reverse%2);
			Y=Y-(3-reverse)*(reverse-1)%2;

			

			Path.length-=1;
			Path[Path.length-1]+=1;

			
			}
			//else if(Path[Path.length-1]>=5){alert("Please don't fuck up the script")};
		//alert("Path length: "+Path.length+ "; SPD= "+SPD+ "; X= "+X+"; Y= "+Y+"; direction: "+Path[Path.length-1]+" Path: "+Path+ "CollChek: "+ CollisionCheck);
		
		};
	

	//AddressMap=[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];
	
	//Ctepmap=JSON.parse(JSON.stringify(AddressMap));
	

	//This does the ctep pathing

	for(let h=0;h<Pizdamatii.length;h++){
		//alert(Pizdamatii[h].x);
		let canAdd=true;
		if(rostermap[Pizdamatii[h].x][Pizdamatii[h].y]!=0){canAdd=false;AddressMap[Pizdamatii[h].x][Pizdamatii[h].y]=1};
		//if(rostermap[Pizdamatii[h].x+StandardX][Pizdamatii[h].y+StandardY].coallition==Coallition){canAdd=true};
		//if(Pizdamatii[h].x>9 || Pizdamatii[h].x<0 || Pizdamatii[h].y>9 || Pizdamatii[h].y<0){canAdd=false};
		if(canAdd){Thing[Pizdamatii[h].x][Pizdamatii[h].y]=1000;};
		
		if(canAdd){
			if(Thing[Pizdamatii[h].x][Pizdamatii[h].y]==1000){
			pathway=Pizdamatii[h].z;
			alt=AddressMap[Pizdamatii[h].x][Pizdamatii[h].y];
			if(alt!=0 && alt.length<pathway.length){pathway=alt;};
			AddressMap[Pizdamatii[h].x][Pizdamatii[h].y]=pathway;};};
		};
	

	//This draws the bleps
	Thing[Lat][Long]=0;
	//if(rostermap[Lat][Long].coallition!=Coallition){Thing[Lat-StandardX][Long-StandardY]=1000};
	for(let r=Math.max(Unit.x-10,0);r<Math.min(Unit.x+10,Thing.length);r++){
	for(let t=Math.max(Unit.y-10,0);t<Math.min(Unit.y+10,Thing[0].length);t++){
		//if(rostermap[r][t].coallition==Coallition){Thing[r][t]=1000; AddressMap[r][t]=[0,0]};
		let coincidenter=false;
		if(rostermap[r][t].coallition==Coallition){coincidenter=true};
		//if(AddressMap[r][t]==0){coincidenter=false};
		if(r || t){coincidenter=false};
		//if(r>StandardX+9 || t>StandardY+9){coincidenter=false};

		if((Thing[r][t]!=0 || rostermap[r][t].coallition==Coallition) && AddressMap[r][t]!=0){
			//alert(AddressMap[r][t]);
		//if(rostermap[r][t]!=0){alert("Check!")};
	type="Assets/Miscellaneous/Blep.png";
	let newPic=document.createElement("img");
	newPic.src=type;
	newPic.id="Blep-"+r+"-"+t;
	newPic.style.position="absolute";
	newPic.style.visibility="visible";
	//newPic.style.top=Math.min(r,10)*56+"px";
	//newPic.style.left=Math.min(t,10)*56+"px";
	newPic.style.top=r*56+"px";
	newPic.style.left=t*56+"px";
	newPic.style.zIndex=4;

	let pip=AddressMap[r][t]??[0,0];
	//pip.pop();
	//alert(Pizdamatii[Pizdamatii.length-1].z);

	//newPic.addEventListener("click", function(){alert(pip);});
	newPic.addEventListener("mouseover",function(){
		SBLARG(r,t,pip);
		return 0});
	newPic.addEventListener("click", function(){
		if(rostermap[r][t]==0){
			//alert((ChosenUnit.ics-StandardX) + " " + (ChosenUnit.igrec-StandardY));
			
		//MarkerMap[ChosenUnit.ics][ChosenUnit.igrec]=0;
		//alert(pip);
		MoveUnit(unitIndex , pip);
		//alert(ChosenUnit.ics+" "+ChosenUnit.igrec);
		
		document.getElementById("Canceler "+(ChosenUnit.ics)+"X"+(ChosenUnit.igrec)).style.visibility="hidden";
		document.getElementById("Canceler "+(ChosenUnit.ics)+"X"+(ChosenUnit.igrec)).style.filter="";
		
		RemoveKebabIMeanBlep();
		ChosenUnit.definite=false;
		return 0;};
		});
	document.getElementById("UnitMap").appendChild(newPic);
	};

	//this is a bit of a hail-Mary solution
	//WHAT DOES THIS PIECE OF CRAP EVEN DO!?
	if(coincidenter==true && Thing[r][t]==0){
		//alert(AddressMap[r][t]);
		type="Assets/Miscellaneous/Blep.png";
		var newPic=document.createElement("img");
		newPic.src=type;
		newPic.id="Blep-"+(r-StandardX)+"-"+(t-StandardY);
		newPic.style.position="absolute";
		newPic.style.visibility="visible";
		newPic.style.top=r*56+"px";
		newPic.style.left=t*56+"px";
		newPic.style.zIndex=4;
		newPic.addEventListener("mouseover",function(){ SBLARG(r,t); return 0});
		//document.getElementById("UnitMap").appendChild(newPic);

		};




	};
	};

	if(Units[Unit.unitType].MaxRange>1){AttackType='Ranged'}else{AttackType='Melee'};
	//This draws the speps

	

	if(AttackType=="Ranged"){//alert("Fire in the hole!")
		minDist=Units[Unit.unitType].MinRange;
		maxDist=Units[Unit.unitType].MaxRange;
		let TerrainCheck=Terrain[Map[Unit.x][Unit.y]];
		if(TerrainCheck.tag1=="Vantage" || TerrainCheck.tag2=="Vantage" || TerrainCheck.tag3=="Vantage" || TerrainCheck.tag4=="Vantage"){maxDist+=1};
		for(let r=Math.max(0,Unit.x-10);r<Math.min(Map.length,Unit.x+10);r++){for(let t=Math.max(0,Unit.y-10);t<Math.min(Map[0].length,Unit.y+10);t++){
			let checker=false;
			//alert(Unit.x);
			//alert(Unit.y);
			let UnitPythX=Unit.x;
			let UnitPythY=Unit.y;
			PythagoraX=(UnitPythX-r);
			PythagoraY=(UnitPythY-t);
			let dist=(PythagoraX*PythagoraX)+(PythagoraY*PythagoraY);
			//alert(PythagoraX + " " + PythagoraY);
			//alert(dist);
			if(dist>=minDist*minDist && dist<=maxDist*maxDist && rostermap[r][t]!=0){checker=true};
			if(!hasCertainTrait(MapRoster[unitIndex].unitType,"Skysweeper") && rostermap[r][t].movementType=="Flight"){checker=false};
			if(!hasCertainTrait(MapRoster[unitIndex].unitType,"Depth Charge") && hasCertainTrait(rostermap[r][t].unitType??1,"Submerged")){checker=false};
			if(hasCertainTrait(MapRoster[unitIndex].unitType,"Seabound") && (rostermap[r][t].movementType!="Rudder" && rostermap[r][t].movementType!="Heavy Rudder")){checker=false};
			if(rostermap[r][t].coallition==Coallition && !hasCertainTrait(MapRoster[unitIndex].unitType,"Supply Distribution")){checker=false};
			if(hasCertainTrait(Unit.unitType,"Streamblast") && r!=X && t!=Y){checker=false}

			//alert(rostermap[r][t]);
			
			if(checker){
				//alert(PythagoraX+" "+PythagoraY);
				let spep=document.createElement("img");
				//alert(hasCertainTrait(Unit.unitType,"Supply Distribution"));
				if(hasCertainTrait(Unit.unitType,"Supply Distribution")){spep.src="Assets/Miscellaneous/Hlep.png";}else{spep.src="Assets/Miscellaneous/Spep.png";}		
				spep.id="Spep-"+r+"-"+t;
				spep.style.position="absolute";
				spep.style.top=r*56+"px";
				spep.style.left=t*56+"px";
				spep.style.zIndex=5;
				spep.style.cursor="url(Assets/Traits/RangedCursor.png) 25 25,auto";
				if(hasCertainTrait(Unit.unitType,"Dispersion")){spep.style.cursor="url(Assets/Traits/ChemicalCursor.png) 25 25,auto"};
				if(hasCertainTrait(Unit.unitType,"Streamblast")){spep.style.cursor="url(Assets/Traits/LaserCursor.png) 25 25,auto"};
				if(hasCertainTrait(Unit.unitType,"Supply Distribution")){spep.style.cursor="url(Assets/Traits/SupplyCursor.png) 25 25,auto"};
				if(!hasCertainTrait(Unit.unitType,"Supply Distribution")){spep.style.zIndex=5;}else{spep.style.zIndex=5;};
				spep.addEventListener("click", function(){
					canAttack=true;
					if(!rostermap[r][t]){canAttack=false;}

					if(canAttack){if(Factions[rostermap[r][t].faction].faction == Factions[Faction].faction && !hasCertainTrait(Unit.unitType,"Supply Distribution")){canAttack=false}

					};

				if(canAttack){setTimeout(Attack,500,unitIndex,rostermap[r][t].index);
				document.getElementById("Canceler "+ChosenUnit.ics+"X"+ChosenUnit.igrec).style.visibility="hidden";
				RemoveKebabIMeanBlep();
				//alert(ChosenUnit.ics);
				MarkerMap[ChosenUnit.ics-1][ChosenUnit.igrec-1]=false;
				
				ChosenUnit.definite=false;
				};
				});
				document.getElementById("UnitMap").appendChild(spep);
			};

		}};

		};

	//This draws the cteps
	if(AttackType=="Melee"){
		//alert("Pummel the bitches!")
	Thing[X][Y]=1000;

	for(let r=Math.max(Unit.x-10,0);r<Math.min(Unit.x+10,Thing.length);r++){
	for(let t=Math.max(Unit.y-10,0);t<Math.min(Unit.y+10,Thing[0].length);t++){
		let checker=0;
		if(rostermap[r][t]==0){checker=0};
		let cep=[];
		if(Thing[r][t]==0){
			if(r<Thing.length-1){if(Thing[r+1][t]!=0){checker=1; 
				cep=AddressMap[r+1][t];}};
			if(r>0){if(Thing[r-1][t]!=0){checker=1;
				cep=AddressMap[r-1][t];}};
			if(t<Thing[0].length-1){if(Thing[r][t+1]!=0){checker=1; 
				cep=AddressMap[r][t+1];}};
			if(t>0){if(Thing[r][t-1]!=0){checker=1;
				cep=AddressMap[r][t-1];}};

				//if(r>0){if(rostermap[r-1][t]!=0 && ){checker=1;cep=[]}};

			if(r==X-1 && t==Y){checker=1;cep=[]};
			if(r==X+1 && t==Y){checker=1;cep=[]};
			if(r==X && t==Y-1){checker=1;cep=[]};
			if(r==X && t==Y+1){checker=1;cep=[]};
			
			let finalX=ChosenUnit.ics-1;
			let finalY=ChosenUnit.igrec-1;
			//alert(puc);
			for(let pw=0;pw<cep.length;pw++){finalX+=(cep[pw]-2)*(cep[pw]%2); finalY+=(3-cep[pw])*(cep[pw]-1)%2;};
				//if(rostermap[finalX][finalY]!=0 && cep.length>0){checker=0};

			if(rostermap[Math.min(r,Thing.length-1)][Math.min(t,Thing[0].length-1)].coallition==Coallition){checker=0};
			// && rostermap[finalX][finalY].coallition==Coallition
		
			
			//(Path[Path.length-1]-2)*(Path[Path.length-1])%2;
			//(3-Path[Path.length-1])*(Path[Path.length-1]-1)%2;
			//alert(MapRoster[unitIndex].name);
			if(!hasCertainTrait(MapRoster[unitIndex].unitType,"Skysweeper") && rostermap[r][t].movementType=="Flight"){checker=0};
			if(!hasCertainTrait(MapRoster[unitIndex].unitType,"Depth Charge") && hasCertainTrait(rostermap[r][t].unitType??1,"Submerged")){checker=0};
			if(hasCertainTrait(MapRoster[unitIndex].unitType,"Seabound") && (rostermap[r][t].movementType!="Rudder" && rostermap[r][t].movementType!="Heavy Rudder")){checker=0};
			if(rostermap[r][t].coallition == Coallition){checker=0};
			//alert(rostermap[r+StandardX][t+StandardY].movementType);

			if(checker==1){
				//alert(cep);
				let puc=cep;
				let newPic=document.createElement("img");
				if(hasCertainTrait(Unit.unitType,"Supply Distribution")){newPic.src="Assets/Miscellaneous/Hlep.png";}else{newPic.src="Assets/Miscellaneous/Ctep.png";}				
				newPic.id="Ctep-"+r+"-"+t;
				newPic.style.position="absolute";
				newPic.style.visibility="visible";
				newPic.style.top=r*56+"px";
				newPic.style.left=t*56+"px";
				newPic.style.zIndex=5;
				if(rostermap[r][t]==0){newPic.style.filter="saturate(350%)"};
				if(rostermap[r][t]!=0){newPic.style.cursor="url(Assets/Traits/ContactCursor.png) 25 25, auto"};
				if(hasCertainTrait(Unit.unitType,"JUDGEMENT")){newPic.style.cursor="url(Assets/Traits/ALEPHCursor.png) 25 25,auto"};
				if(!hasCertainTrait(Unit.unitType,"Supply Distribution")){newPic.style.zIndex=5;}else{newPic.style.zIndex=4;};

				let churro=document.getElementById("Blep-"+r+"-"+t) ?? 0;
				if(churro!=0){churro.style.visibility="hidden"};

				newPic.addEventListener("mouseover",function(){
					CBLARG(r,t);
					});

				newPic.addEventListener("mouseout",function(){

					let canBlarg=false;
					let xdif=Math.abs(r-BLARG[BLARG.length-1].X);
					let ydif=Math.abs(t-BLARG[BLARG.length-1].Y);
					if(xdif+ydif==1){canBlarg=true};



					if(canBlarg){document.getElementById("Ctep-"+r+"-"+t).src="Assets/Miscellaneous/Ctep.PNG"};
					if(BLARG.length<2){document.getElementById('BLARG '+(BLARG[0].X+1)+"X"+(BLARG[0].Y+1)).src="Assets/BLARG/Singularity.PNG"}else{
						let or=0;



						
					if(BLARG[BLARG.length-2].X>BLARG[BLARG.length-1].X){or=1};
					if(BLARG[BLARG.length-2].Y<BLARG[BLARG.length-1].Y){or=2};
					if(BLARG[BLARG.length-2].X<BLARG[BLARG.length-1].X){or=3};
					if(BLARG[BLARG.length-2].Y>BLARG[BLARG.length-1].Y){or=4};
					if(or==0){BLARG.pop()};
					document.getElementById('BLARG '+(BLARG[BLARG.length-1].X+1)+"X"+(BLARG[BLARG.length-1].Y+1)).src="Assets/BLARG/Target"+or+".PNG";


					};


			});
				newPic.addEventListener("click", function(){//alert(r+" "+t);
				canAttack=true;
				let xdif=Math.abs(r-BLARG[BLARG.length-1].X);
				let ydif=Math.abs(t-BLARG[BLARG.length-1].Y);
				if(rostermap[BLARG[BLARG.length-1].X][BLARG[BLARG.length-1].Y]!=0 && BLARG.length>1){canAttack=false};
				if(rostermap[BLARG[BLARG.length-1].X][BLARG[BLARG.length-1].Y]!=0){document.getElementById("Marker "+(Lat-StandardX+1)+"X"+(Long-StandardY+1)).style.visibility="visible"};
				if(xdif+ydif>1){canAttack=false};
				
				//alert(MapRoster[unitIndex].isCloaked);
				let pip=AddressMap[r][t]??[0,0];
				if(canAttack){
					//alert('tuturuu!');
					//alert("crap");
					MoveUnit(unitIndex , pip);
					//alert(LastMove.X+" "+LastMove.Y);
					//LastMove.ID=Unit.index;
					//LastMove.X=Unit.x;
					//LastMove.Y=Unit.y;
					//alert(LastMove.X+" "+LastMove.Y);
				//alert((r+StandardX)+" "+(t+StandardY));
				//alert(rostermap[finalX][finalY].isCloaked);
					if(finalX<0){finalX=0};
				if(rostermap[r][t+StandardY]){setTimeout(Attack,1000,unitIndex,rostermap[r][t+StandardY].index);}}else{document.getElementById("Marker "+ChosenUnit.ics+"X"+ChosenUnit.igrec).style.visibility="visible";};
				//alert(finalX+" "+finalY);
				//if(!Cloak(Math.max(finalX,0),Math.max(finalY,0),Unit.unitType,Coallition)){MapRoster[unitIndex].isCloaked=false; rostermap[finalX][finalY].isCloaked=false}else{MapRoster[unitIndex].isCloaked=true; rostermap[finalX][finalY].isCloaked=true};
				document.getElementById("Canceler "+ChosenUnit.ics+"X"+ChosenUnit.igrec).style.visibility="hidden";
				RemoveKebabIMeanBlep();

				ChosenUnit.definite=false;
				return 0;});

				document.getElementById("UnitMap").appendChild(newPic);
				

				};


			};


		};};
	};};
function PITurn(Roster,Map,Constants){
	//Map=Campaigns[ChosenNation-1][ChosenChapter-1][ChosenMission-1].Map;
	//alert(Roster.length);
	RemoveKebabIMeanBlep();

			for(let i=0; i<MapRoster.length;i++){
			if(MapRoster[i].unitType==0 && MapRoster[i].faction==PlayerChoiceFaction){
			//alert(i);
			MapRoster[i].constructionTime-=1;
			if(MapRoster[i].constructionTime<1){BuildingComplete(i)};
			};};


	LastMove={ID:0};

	MarkerMap=[];
	let line=[];
	for(let i=0;i<Map[0].length;i++){line[line.length]=false};
	for(let j=0;j<Map.length;j++){MarkerMap[MarkerMap.length]=line};
	MarkerMap=JSON.parse(JSON.stringify(MarkerMap));
	//alert(Roster);

	if(Constants.Commanders??false){Commander=Constants.Commanders[1]};
	for(let x=0;x<Map.length;x++){for(y=0;y<Map[0].length;y++){
		//if((ControlMap??0) !=0 && ControlMap[x][y]==PlayerChoiceFaction){YourMoney+=(Terrain[Map[x][y]].revenue??0)};
		if((ControlMap??0) !=0 && ControlMap[x][y]==PlayerChoiceFaction){YourMoney+=GenerateRevenue(Terrain[Map[x][y]].revenue??0,x,y)};
		if(hasCertainTrait(rostermap[x][y].unitType??0,"Financial Center") && rostermap[x][y].faction==PlayerChoiceFaction){GenerateRevenue(100,x,y)}

		}};

		//alert(Turn);
		setTimeout(function(){

		for(let i=0;i<Map.length;i++){
			for(let j=0;j<Map[0].length;j++){
			//alert(rostermap[i][j].index);

			if(MarkerMap[i][j] && rostermap[i][j].life>0){document.getElementById("Marker "+(i+1)+"X"+(j+1)).style.visibility="visible";};};};



		for(let a=1; a<=GlassPanels; a++){
			let dudeIndex=AttackOrder[(Turn+a-2)%AttackOrder.length];
			document.getElementById("Glassplatecolor"+a).style.background=Factions[dudeIndex].color;
			document.getElementById("Glassplatename"+a).innerHTML=Factions[dudeIndex].name;
			if(document.getElementById("Glassplatecolor"+a).style.background!='black'){document.getElementById("Glassplatename"+a).style.color='black'}else{document.getElementById("Glassplatename"+a).style.color='indigo'};};

		},GlobalDelayerConstant);

	

	for(let i=0;i<Roster.length;i++){let CanAct=true;
		let Stealth=false;
		//alert(Roster[i].unitType);
		if(hasCertainTrait(Roster[i].unitType,"Inertial")){CanAct=false};
		if(CanAct){MarkerMap[Roster[i].x][Roster[i].y]=true}
		//alert(Roster[i].index);
		MapRoster[Roster[i].index].canEncore=false;
		MapRoster[Roster[i].index].willAmbush=false
		MapRoster[Roster[i].index].isVized=true;
		if(hasCertainTrait(Roster[i].unitType,"Bewegungskrieg")){MapRoster[Roster[i].index].canEncore=true};
		if(hasCertainTrait(Roster[i].unitType,"Stealth")){Stealth=true};

		//alert(Roster[i].faction);

		if(Stealth){Stealth=Cloak(Roster[i].x,Roster[i].y,Roster[i].unitType,Factions[Roster[i].faction].faction);};
		//alert(Stealth);
		//document.getElementById("Entity "+(i+1-StandardX)+"X"+(j+1-StandardY)).style.filter="";
		//if(Stealth){document.getElementById("Entity "+(Roster[i].x+1-StandardX)+"X"+(Roster[i].y+1-StandardY)).style.filter+=" opacity(50%)"};

		refreshMap();

		//alert(Turn);

		/*
		if(Roster[i].x>0){
			if(Factions[rostermap[Roster[i].x-1][Roster[i].y].faction??0].faction!=Roster[i].coallition && Factions[rostermap[Roster[i].x-1][Roster[i].y].faction??0].faction!=Factions[0].faction)
				{Stealth=false};
		};
		if(Roster[i].x<Map.length-1){
			if(Factions[rostermap[Roster[i].x+1][Roster[i].y].faction??0].faction!=Roster[i].coallition && Factions[rostermap[Roster[i].x+1][Roster[i].y].faction??0].faction!=Factions[0].faction)
				{Stealth=false};
		};

		if(Roster[i].y>0){
			if(Factions[rostermap[Roster[i].x][Roster[i].y-1].faction??0].faction!=Roster[i].coallition && Factions[rostermap[Roster[i].x][Roster[i].y-1].faction??0].faction!=Factions[0].faction)
				{Stealth=false};
		};
		if(Roster[i].y<Map[0].length-1){
			if(Factions[rostermap[Roster[i].x][Roster[i].y+1].faction??0].faction!=Roster[i].coallition && Factions[rostermap[Roster[i].x][Roster[i].y+1].faction??0].faction!=Factions[0].faction)
				{Stealth=false};
		};
		
		if(Stealth){rostermap[Roster[i].x][Roster[i].y].isCloaked=Stealth;	
		if(Roster[i].x>=StandardX && Roster[i].y>=StandardY && Roster[i].x<StandardX+10 && Roster[i].y<StandardY+10){document.getElementById("Entity "+(Roster[i].x+StandardX+1)+"X"+(Roster[i].y+StandardY+1)).style.filter+=" opacity(50%)"};

		//alert(rostermap[Roster[i].x][Roster[i].y].isCloaked);
		//NudgeMap(2);NudgeMap(4);
		//alert(Stealth);
		};*/


	};

		
		//alert(Roster[i].x+" "+Roster[i].y);
	//alert(MarkerMap[0]);

	/*for(let i=0;i<Roster.length;i++){
		let checker=true;
		if((Roster[i].x+1-StandardY)>10 || (Roster[i].x+1-StandardY)<1 || (Roster[i].y+1-StandardY)>10 || (Roster[i].y+1-StandardY)<1){checker=false;}
		//alert((Roster[i].x+1-StandardY) + " " + (Roster[i].y+1-StandardY));

		if(checker){document.getElementById("Marker "+(Roster[i].x+1-StandardY)+"X"+(Roster[i].y+1-StandardY)).style.visibility="visible"};
	};
	*/
	//alert(StandardX +" "+ StandardY);
	
	
	setTimeout(InterphaseBanner,GlobalDelayerConstant,AttackOrder[CurrentTurn],Turn);
	if(ControlMap??false){setTimeout(CaptureProperty,GlobalDelayerConstant,ControlMap,PlayerChoiceFaction);};
	GlobalDelayerConstant=0;};
function PostDialogueFrame(Portrait, Name, Text){

	document.getElementById("Portrait").id=Portrait;
	document.getElementById("CharacterName").innerHTML=Name;

	//let TextBlock=setInterval(WriteText,10);
	let TextPhase=0;
	let TextTerminus=Text.length;
	alert(TextTerminus);
	document.getElementById("DialogueInstance").innerHTML=Text;
	//function WriteText(){TextPhase++;if(TextPhase==TextTerminus){clearInterval(TextBlock)}};
	document.getElementById("DialogueBox").style.visibility="visible";};
function RazeFaction(Faction){};
function RecruitUnit(Class){
	//alert(ActiveIndustrialNode.X+"X"+ActiveIndustrialNode.Y);
	for(let x=1;x<Map.length;x++){for(let y=1;y<Map[0].length;y++){let crep=document.getElementById("Crep-"+x+"-"+y) ?? 0; if(crep!=0){crep.remove()};}};
	let RecC=document.getElementById("CloseRecruiterX")??0;if(RecC!=0){RecC.remove()};
	if(YourMoney>=Units[Class].Cost*CostFactor){
		document.getElementById("UnitRecruitmentPanel").style.visibility="hidden";
		for(let i=1;i<41;i++){document.getElementById("Obturator"+i).style.visibility="hidden"};


			if(!hasCertainTrait(Class,"Streamlined")){DeploymentIndex=2}else{DeploymentIndex=5};


		for(let i=Math.max(ActiveIndustrialNode.X+1-DeploymentIndex,1);i<=Math.min(ActiveIndustrialNode.X+1+DeploymentIndex,10);i++){
			for(let j=Math.max(ActiveIndustrialNode.Y+1-DeploymentIndex,1);j<=Math.min(ActiveIndustrialNode.Y+1+DeploymentIndex,10);j++){
				let CanDeploy=true;
				//alert(i);
				if(rostermap[i-1+StandardX][j-1+StandardY]!=0){CanDeploy=false};
				if(Terrain[Map[i-1+StandardX][j-1+StandardY]].WalkThrough>=5 && IndustrialBranchBrowsed==1){CanDeploy=false};
				if(Terrain[Map[i-1+StandardX][j-1+StandardY]].FlyThrough>=5 && IndustrialBranchBrowsed==2){CanDeploy=false};
				if(Terrain[Map[i-1+StandardX][j-1+StandardY]].SailThrough>=5 && IndustrialBranchBrowsed==3){CanDeploy=false};
				if((ActiveIndustrialNode.X+1-i)*(ActiveIndustrialNode.X+1-i)+(ActiveIndustrialNode.Y+1-j)*(ActiveIndustrialNode.Y+1-j)<DeploymentIndex*DeploymentIndex && CanDeploy){
				let Crep=document.createElement("img");
				Crep.src="Assets/Miscellaneous/Crep.PNG";
				Crep.id="Crep-"+i+"-"+j;
				Crep.style.position="absolute";
				//Crep.style.top=i*56+"px";
				//Crep.style.left=j*56+"px";
				Crep.style.zIndex=4;
				Crep.addEventListener("click",function(){
					if(YourMoney>=Units[Class].Cost*CostFactor){
					DeployUnit(i,j,Class,PlayerChoiceFaction);
					let pos=document.getElementById("Crep-"+i+"-"+j);
					pos.remove();
					}else{RemoveKebabIMeanBlep();
					let Closer=document.getElementById("CloseRecruiterX");
					Closer.remove();};
				});

				
				//alert(i+"X"+j);
				document.getElementById("Slot "+i+"X"+j).appendChild(Crep);
					};

			};
		};

				let Close=document.createElement("img");
				Close.src="Assets/Miscellaneous/SelectionCanceller.PNG";
				Close.id="CloseRecruiterX";
				Close.style.position="absolute";
				Close.style.zIndex=5;
				Close.style.left="14px";
				Close.style.top="14px";
				Close.style.width="28px";
				Close.style.height="28px";

				Close.addEventListener("click",function(){					
					RemoveKebabIMeanBlep();
					let Closer=document.getElementById("CloseRecruiterX");
					Closer.remove();
				});

				document.getElementById("Slot "+(ActiveIndustrialNode.X+1)+"X"+(ActiveIndustrialNode.Y+1)).appendChild(Close);

	};};
function refreshMap(){

	//if((RT??0)==0){RT=false};
	
	for(let x=1; x<=Map.length; x++){
		for(let y=1; y<=Map[0].length; y++){
			let unit=rostermap[x-1][y-1];
			if((rostermap[x-1][y-1]??0) !=0){
			
			document.getElementById('EntityCore '+x+'X'+y).src="Assets/Units/Static/"+Units[unit.unitType].shortname+unit.direction+".PNG";
			document.getElementById('Entity '+x+'X'+y).style.visibility="visible";
			if(unit.isCloaked??false){let isSameFaction=unit.coallition==Factions[PlayerChoiceFaction].faction;document.getElementById('EntityCore '+x+'X'+y).style.filter=Factions[unit.faction].ChromaCode;
			document.getElementById('Entity '+x+'X'+y).style.filter=(isSameFaction?"opacity(50%)":"opacity(0%)");
			//alert(document.getElementById('Entity '+x+'X'+y).style.filter);
		}else{document.getElementById('EntityCore '+x+'X'+y).style.filter=Factions[unit.faction].ChromaCode};
			document.getElementById('Entity '+x+'X'+y).style.top=(Units[unit.unitType].StaticOffsetY ?? [0,0,0,0,0])[unit.direction]+"px";
			document.getElementById('Entity '+x+'X'+y).style.left=(Units[unit.unitType].StaticOffsetX ?? [0,0,0,0,0])[unit.direction]+"px";

			if((rostermap[x-1][y-1].Defeat??false)){document.getElementById('Flag '+x+'X'+y).src="Assets/Miscellaneous/DestroyFlag.PNG";document.getElementById('Flag '+x+'X'+y).style.visibility='inherit'}else{document.getElementById('Flag '+x+'X'+y).style.visibility='hidden'};
			if((rostermap[x-1][y-1].Protect??false)){document.getElementById('Flag '+x+'X'+y).src="Assets/Miscellaneous/ProtectFlag.PNG";document.getElementById('Flag '+x+'X'+y).style.visibility='inherit'}else if(!(rostermap[x-1][y-1].Defeat??false)){document.getElementById('Flag '+x+'X'+y).style.visibility='hidden'};

			}else{
	
			document.getElementById('EntityCore '+x+'X'+y).style.visibility="inherit";
			document.getElementById('EntityCore '+x+'X'+y).style.filter="";
			document.getElementById('Entity '+x+'X'+y).style.filter="";
			document.getElementById('Entity '+x+'X'+y).style.top="0px";
			document.getElementById('Entity '+x+'X'+y).style.left="0px";


			if(TileFlagMap[x-1][y-1]==0){document.getElementById('Flag '+x+'X'+y).style.visibility='hidden'}else{document.getElementById('Flag '+x+'X'+y).style.visibility='inherit'};
			if(TileFlagMap[x-1][y-1]==1){document.getElementById('Flag '+x+'X'+y).src="Assets/Miscellaneous/CaptureFlag.PNG"};
			if(TileFlagMap[x-1][y-1]==2){document.getElementById('Flag '+x+'X'+y).src="Assets/Miscellaneous/DefendFlag.PNG"};


			};

	};};};
function RefreshMap(){};
//refreshTile() is DEPRECATED
function refreshTile(X,Y){

	//alert(EditorMap[X][Y]);
	if(EditationToggle=='Tile'){document.getElementById("Entity "+X+" X "+Y).src="";
	EditorMap[X+EditorStandardX-1][Y+EditorStandardY-1]=ChosenTerrain;
	EditorEntityMap[X+EditorStandardX-1][Y+EditorStandardY-1]=0;

	//for(let ics=1;ics<=10;ics++){for(let igrec=1;igrec<=10;igrec++){}};

	let Address="Tile "+X+" X "+Y;
	let Strucdress="Structure "+X+" X "+Y;
	document.getElementById(Strucdress).style.visibility="hidden";

	switch(ChosenTerrain){
		case 1:
			var type= Math.ceil(Math.random()*8);
			var offset=0;
			variant= "Assets/Tiles/Plains"+type+".PNG";
			document.getElementById(Address).style.top=offset+"px";
			//document.getElementById(Address).style.filter="hue-rotate(0deg) saturate(100%) brightness(100%)";
			document.getElementById(Address).src=variant;
			break;

		case 2:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			if(type==2){offset=-4};
			if(type==3){offset=-3};
			if(type==4){offset=-12}
			variant= "Assets/Tiles/Forest"+type+".PNG";
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src=variant;
			break;

			case 3:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			if(type==3){offset=-4};
			if(type==4){offset=-5};
			variant= "Assets/Tiles/Hills"+type+".PNG";
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src=variant;
			break;

		case 4:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			if(type==2){offset=-4};
			if(type==3){offset=-9};
			if(type==4){offset=-10};
			variant= "Assets/Tiles/Mountains"+type+".PNG";
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src=variant;
			break;

		case 5:
			var offset=-8;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Volcano.PNG";
			break;

		case 6:
			var offset=0;
			var variant=0;
			//alert(X+" "+Y);
			if(X>1){if(Terrain[EditorMap[X-2][Y-1]].Urbanistics > 0){variant+=1}};
			if(Y<10){if(Terrain[EditorMap[X-1][Y]].Urbanistics>0){variant+=2}};
			if(X<10){if(Terrain[EditorMap[X][Y-1]].Urbanistics>0){variant+=4}};
			if(Y>1){if(Terrain[EditorMap[X-1][Y-2]].Urbanistics > 0){variant+=8}};
			//if(X>0){if((Map[X-1][Y]>5 && Map[X-1][Y]<15) || (Map[X-1][Y]>20 && (Map[X-1][Y]<23))){variant+=1}};
			//if(Y<Map[0].length){if((Map[X][Y+1]>5 && Map[X][Y+1]<15) || (Map[X][Y+1]>20 && (Map[X][Y+1]<23))){variant+=2}};
			//if(X<Map.length){if((Map[X+1][Y]>5 && Map[X+1][Y]<15) || (Map[X+1][Y]>20 && (Map[X+1][Y]<23))){variant+=4}};
			//if(Y>0){if((Map[X][Y-1]>5 && Map[X][Y-1]<15) || (Map[X][Y-1]>20 && (Map[X][Y-1]<23))){variant+=2}};
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src="Assets/Tiles/Road"+variant+".PNG";
			break;

		case 7:
			var offset=-0;
			var type= Math.ceil(Math.random()*2);
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Ruins"+type+".PNG";
			break;

		case 8:
			var offset=-0;
			var type= Math.ceil(Math.random()*3);
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Urban District"+type+".PNG";
			break;

		case 9:
			var offset=-10;
			EditorControlMap[X+EditorStandardX-1][Y+EditorStandardY-1]=EditationColor;
			document.getElementById(Address).src="Assets/Tiles/Plains.PNG";
			document.getElementById(Strucdress).style.visibility="visible";
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src= "Assets/Tiles/Industrial District.PNG";
			document.getElementById(Strucdress).style.filter=Factions[EditationColor].ChromaCode;
			break;

		case 10:
			var offset=-8;
			EditorControlMap[X+EditorStandardX-1][Y+EditorStandardY-1]=EditationColor;
			document.getElementById(Address).src="Assets/Tiles/Plains.PNG";
			document.getElementById(Strucdress).style.visibility="visible";
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src= "Assets/Tiles/Military-Industrial Complex.PNG";
			document.getElementById(Strucdress).style.filter=Factions[EditationColor].ChromaCode;
			break;

		case 11:
			var offset=-14;
			EditorControlMap[X+EditorStandardX-1][Y+EditorStandardY-1]=EditationColor;
			document.getElementById(Address).src="Assets/Tiles/Plains.PNG";
			document.getElementById(Strucdress).style.visibility="visible";
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src= "Assets/Tiles/Aviation Industrial Facility.PNG";
			document.getElementById(Strucdress).style.filter=Factions[EditationColor].ChromaCode;
			break;

		case 12:
			var offset=-14;
			EditorControlMap[X+EditorStandardX-1][Y+EditorStandardY-1]=EditationColor;
			document.getElementById(Address).src="Assets/Tiles/Plains.PNG";
			document.getElementById(Strucdress).style.visibility="visible";
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src= "Assets/Tiles/Shipbuilding Facility.PNG";
			document.getElementById(Strucdress).style.filter=Factions[EditationColor].ChromaCode;
			break;

		case 13:
			var offset=0;
			EditorControlMap[X+EditorStandardX-1][Y+EditorStandardY-1]=EditationColor;
			document.getElementById(Address).src="Assets/Tiles/Plains.PNG";
			document.getElementById(Strucdress).style.visibility="visible";
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src= "Assets/Tiles/Headquarters.PNG";
			document.getElementById(Strucdress).style.filter=Factions[EditationColor].ChromaCode;
			break;

		case 14:
			var offset=-18;
			EditorControlMap[X+EditorStandardX-1][Y+EditorStandardY-1]=EditationColor;
			document.getElementById(Address).src="Assets/Tiles/Plains.PNG";
			document.getElementById(Strucdress).style.visibility="visible";
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src= "Assets/Tiles/Command Center.PNG";
			document.getElementById(Strucdress).style.filter=Factions[EditationColor].ChromaCode;
			break;

		case 15:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			if(type==2){offset=-4};
			if(type==3){offset=-3};
			if(type==4){offset=-12}
			variant= "Assets/Tiles/Taiga"+type+".PNG";
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src=variant;
			break;

		case 16:
			var type= Math.ceil(Math.random()*3);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Desert"+type+".PNG";
			break;

		case 17:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			variant= "Assets/Tiles/Tundra"+type+".PNG";
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src=variant;
			break;

		case 18:
			var type= Math.ceil(Math.random()*3);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Extreme Desert"+type+".PNG";
			break;

		case 19:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Arctic Hellhole"+type+".PNG";
			break;

		case 20:
			var offset=0;
			var axis="V";
			var variant=0;
			if(X>1){if(Terrain[EditorMap[X-2][Y-1]].SailThrough<100){axis="H"}};
			if(Y<10){if(Terrain[EditorMap[X-1][Y]].SailThrough<100){axis="V"}};
			if(X<10){if(Terrain[EditorMap[X][Y-1]].SailThrough<100){axis="H"}};
			if(Y>1){if(Terrain[EditorMap[X-1][Y-2]].SailThrough<100){axis="V"}};
			if(X>1){if(EditorMap[X-2][Y-1]==20 || EditorMap[X-2][Y-1]==21){axis="V"}};
			if(Y<10){if(EditorMap[X-1][Y]==20 || EditorMap[X-1][Y]==21){axis="V"}};
			if(X<10){if(EditorMap[X][Y-1]==20 || EditorMap[X][Y-1]==21){axis="V"}};
			if(Y>1){if(EditorMap[X-1][Y-2]==20 || EditorMap[X-1][Y-2]==21){axis="V"}};

			if(axis=="V"){
			if(X>1){if(Terrain[EditorMap[X-2][Y-1]].WalkThrough<100){variant+=1;}};
			if(X<10){if(Terrain[EditorMap[X][Y-1]].WalkThrough<100){variant+=2;}};};
			if(axis=="H"){if(Y>1){if(Terrain[EditorMap[X-1][Y-2]].WalkThrough<100){variant+=1;}};
			if(Y<10){if(Terrain[EditorMap[X-1][Y]].WalkThrough<100){variant+=2;}};};

			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Bridge"+axis+variant+".PNG";
			break;

		case 21:
			var offset=0;
			var axis="V";
			var variant=0;
			if(X>1){if(Terrain[EditorMap[X-2][Y-1]].SailThrough<100){axis="H"}};
			if(Y<10){if(Terrain[EditorMap[X-1][Y]].SailThrough<100){axis="V"}};
			if(X<10){if(Terrain[EditorMap[X][Y-1]].SailThrough<100){axis="H"}};
			if(Y>1){if(Terrain[EditorMap[X-1][Y-2]].SailThrough<100){axis="V"}};
			if(X>1){if(EditorMap[X-2][Y-1]==20 || EditorMap[X-2][Y-1]==21){axis="V"}};
			if(Y<10){if(EditorMap[X-1][Y]==20 || EditorMap[X-1][Y]==21){axis="V"}};
			if(X<10){if(EditorMap[X][Y-1]==20 || EditorMap[X][Y-1]==21){axis="V"}};
			if(Y>1){if(EditorMap[X-1][Y-2]==20 || EditorMap[X-1][Y-2]==21){axis="V"}};

			if(axis=="V"){
			if(X>1){if(Terrain[EditorMap[X-2][Y-1]].WalkThrough<100){variant+=1;}};
			if(X<10){if(Terrain[EditorMap[X][Y-1]].WalkThrough<100){variant+=2;}};};
			if(axis=="H"){if(Y>1){if(Terrain[EditorMap[X-1][Y-2]].WalkThrough<100){variant+=1;}};
			if(Y<10){if(Terrain[EditorMap[X-1][Y]].WalkThrough<100){variant+=2;}};};

			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/HighBridge"+axis+variant+".PNG";
			break;

		case 22:
			var offset=0;
			var variant=0;

			if(X>1){if(Terrain[EditorMap[X-2][Y-1]].SailThrough<100){variant+=1;}};
			if(Y<10){if(Terrain[EditorMap[X-1][Y]].SailThrough<100){variant+=2;}};
			if(X<10){if(Terrain[EditorMap[X][Y-1]].SailThrough<100){variant+=4;}};
			if(Y>1){if(Terrain[EditorMap[X-1][Y-2]].SailThrough<100){variant+=8;}};

			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/River"+variant+".PNG";
			break;

		case 23:
			var offset=0;
			var variant=0;
			//alert(Y);
			if(X>1){if(Terrain[EditorMap[X-2][Y-1]].SailThrough<100){variant+=1;}};
			if(Y<10){if(Terrain[EditorMap[X-1][Y]].SailThrough<100){variant+=2;}};
			if(X<10){if(Terrain[EditorMap[X][Y-1]].SailThrough<100){variant+=4;}};
			if(Y>1){if(Terrain[EditorMap[X-1][Y-2]].SailThrough<100){variant+=8;}};
			if(X==1){variant+=1};
			if(Y==10){variant+=2};
			if(X==10){variant+=4};
			if(Y==1){variant+=8};

			if(X>1 && Y>1){if(Terrain[EditorMap[X-2][Y-2]].SailThrough==100 && variant==15){document.getElementById("A "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.visibility="visible"}};
			if(X>1 && Y<10){if(Terrain[EditorMap[X-2][Y]].SailThrough==100 && variant==15){document.getElementById("B "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.visibility="visible"}};
			if(X<10 && Y>1){if(Terrain[EditorMap[X][Y-2]].SailThrough==100 && variant==15){document.getElementById("C "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.visibility="visible"}};
			if(X<10 && Y<10){if(Terrain[EditorMap[X][Y]].SailThrough==100 && variant==15){document.getElementById("D "+(X+1-StandardX)+"X"+(Y+1-StandardY)).style.visibility="visible"}};

			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Sea"+variant+".PNG";
			break;

		case 24:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Reef"+type+".PNG";
			break;

		case 25:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Floes"+type+".PNG";
			break;	

		case 26:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Archipelago"+type+".PNG";
			break;	

		case 27:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Rocks"+type+".PNG";
			break;	

		case 28:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Icebergs"+type+".PNG";
			break;	

		case 29:
			var offset=0;
			var variant=0;

			if(X>1){if(Terrain[EditorMap[X-2][Y-1]].SailThrough==100){variant+=1;}};
			if(Y<10){if(Terrain[EditorMap[X-1][Y]].SailThrough==100){variant+=2;}};
			if(X<10){if(Terrain[EditorMap[X][Y-1]].SailThrough==100){variant+=4;}};
			if(Y>1){if(Terrain[EditorMap[X-1][Y-2]].SailThrough==100){variant+=8;}};

			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Shore"+variant+".PNG";
			break;

		case 30:
			//var offset=-9;
			EditorControlMap[X+EditorStandardX-1][Y+EditorStandardY-1]=EditationColor;
			//document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Oil Rig"+".PNG";
			break;

		default:break;
		}
	}else{
	let Chosenunit=ChosenUnit-10+10*EditorUnitClass;
	let choka=Units[Chosenunit].Movement;
	let boka=Terrain[EditorMap[X+EditorStandardX-1][Y+EditorStandardY-1]];
	if(choka=="Foot"){boka=boka.WalkThrough}else if(choka=="Wheeled"){boka=boka.DriveThrough}else if(choka=="Tracked"){boka=boka.RollThrough}else if(choka=="Amphibious"){boka=boka.WadeThrough}else if(choka=="Flight"){boka=boka.FlyThrough}else if(choka=="Rudder"){boka=boka.SailThrough}else if(choka=="Heavy Rudder"){boka=boka.DeepSailThrough}else if(choka=="Stationary"){boka=boka.SailThrough-1}

	if(100>boka){
		if(MemoryX==X && MemoryY==Y){EditationDirection++}else{EditationDirection=1};
		if(EditationDirection>4){EditationDirection-=4};
		MemoryX=X;
		MemoryY=Y;
		document.getElementById("Entity "+X+" X "+Y).src="Assets/Units/Static/"+Units[Chosenunit].shortname+EditationDirection+".PNG";
		//document.getElementById("Entity "+X+" X "+Y).style.filter=Factions[EditationColor].ChromaCode;
		document.getElementById("Entity "+X+" X "+Y).style.left=(Units[Chosenunit].StaticOffsetX ?? [0,0,0,0,0])[EditationDirection]+"px";
		document.getElementById("Entity "+X+" X "+Y).style.top=(Units[Chosenunit].StaticOffsetY ?? [0,0,0,0,0])[EditationDirection]+"px";
		EditorEntityMap[X+EditorStandardX-1][Y+EditorStandardY-1]={id:Chosenunit, faction:EditationColor, direction:EditationDirection, x:X+EditorStandardX-1, y:Y+EditorStandardY-1,hpModifier:0,morale:0};	
	}};};
function RefreshTile(X,Y){

	if(EditationToggle=="Tile"){
		let ics=X;
		let igrec=Y;
		let TileAdress="Tile "+X+" X "+Y;
		let Altdress="Entity "+ics+" X "+igrec;
		let AltCoreDress="EntityCore "+ics+" X "+igrec;
		let Strucdress="Structure "+X+" X "+Y;
		document.getElementById(TileAdress).style.top="0px";
		let unit=EditorEntityMap[ics+EditorStandardX-1][igrec+EditorStandardY-1];
		let Biome=CampaignTerrain[EditorMap[ics-1][igrec-1]].BiomeIndex??EditorBiomeMap[X-1][Y-1];
		if(Biome!=undefined){EditorBiomeMap[X-1][Y-1]=Biome;};
		if(Biome==1){Biome=""};
		if(Biome==2){Biome="Arid"};
		if(Biome==3){Biome="Boreal"};
		if(Biome==4){Biome="Barren"};
		if(Biome==5){Biome="Arctic"};
		if(Biome==6){Biome="Lunar"};
		if(Biome==7){Biome="Martian"};
		if((CampaignTerrain[EditorMap[ics-1][igrec-1]].BiomeIndex??0)!=0){Biome=""};

		document.getElementById(Strucdress).style.visibility="hidden";
		//alert("a "+(X-EditorStandardX)+" X "+(Y-EditorStandardY));
		document.getElementById("a "+(X)+" X "+(Y)).style.visibility="hidden";
		document.getElementById("b "+(X)+" X "+(Y)).style.visibility="hidden";
		document.getElementById("c "+(X)+" X "+(Y)).style.visibility="hidden";
		document.getElementById("d "+(X)+" X "+(Y)).style.visibility="hidden";

		if(EditorEntityMap[ics+EditorStandardX-1][igrec+EditorStandardY-1]!=0){
			document.getElementById(Altdress).style.visibility="inherit";
			document.getElementById(AltCoreDress).style.filter=Factions[EditorEntityMap[ics+EditorStandardX-1][igrec+EditorStandardY-1].faction].ChromaCode;
			document.getElementById(Altdress).style.top=(Units[unit.id].StaticOffsetY ?? [0,0,0,0,0])[unit.direction]+"px";
			document.getElementById(Altdress).style.left=(Units[unit.id].StaticOffsetX ?? [0,0,0,0,0])[unit.direction]+"px";

			document.getElementById(Altdress).src="Assets/Units/Static/"+Units[EditorEntityMap[ics+EditorStandardX-1][igrec+EditorStandardY-1].id].shortname+EditorEntityMap[ics+EditorStandardX-1][igrec+EditorStandardY-1].direction+".PNG";
		}else{document.getElementById(Altdress).style.visibility="hidden";};



		let Class=CampaignTerrain[EditorMap[ics-1][igrec-1]].Class;
		//alert(ics+" "+igrec);
		//let TileAdress="Tile "+(ics+1)+" X "+(igrec+1);
		//let Strucdress="Structure "+(ics+1)+" X "+(igrec+1);
		let a=ics-1;
		let b=igrec-1;
		let D1=0;
		let D2=0;
		let D3=0;
		let D4=0;

		if(a>0){D1=EditorMap[a-1][b]};
		if(b<EditorMap[0].length-1){D2=EditorMap[a][b+1]};
		if(a<EditorMap.length-1){D3=EditorMap[a+1][b]};
		if(b>0){D4=EditorMap[a][b-1]};
		let Map=EditorMap;
		document.getElementById(Strucdress).style.visibility="hidden";

	switch(Class){

		case "LF":
			var type= Math.ceil(Math.random()*Terrain[Map[a][b]].Variants);
			var offset=Terrain[Map[a][b]].Offsets[type-1];
			var variant="Assets/Tiles/"+Terrain[Map[a][b]].name+type+Biome+".PNG";
			document.getElementById(TileAdress).style.top=offset+"px";
			document.getElementById(TileAdress).src=variant;
			break;

		case "LA":
			var type=0;

			if(Terrain[D1].Class=="LA" || Terrain[D1].Class=="MC" || Terrain[D1].Class=="S"){type+=1};
			if(Terrain[D2].Class=="LA" || Terrain[D2].Class=="MC" || Terrain[D2].Class=="S"){type+=2};
			if(Terrain[D3].Class=="LA" || Terrain[D3].Class=="MC" || Terrain[D3].Class=="S"){type+=4};
			if(Terrain[D4].Class=="LA" || Terrain[D4].Class=="MC" || Terrain[D4].Class=="S"){type+=8};

			//console.log(CampaignTerrain[EditorMap[ics-1][igrec-1]].BiomeIndex);
			var Var="Assets/Tiles/"+Terrain[Map[a][b]].name+type+Biome+".PNG";
			document.getElementById(TileAdress).style.top="0px";
			document.getElementById(TileAdress).src=Var;
			break;

		case "WE":
			var type=0;

			if(Terrain[D1].Class=="WF" || Terrain[D1].Class=="WA" || Terrain[D1].Class=="WE" || Terrain[D1].Class=="MC" || Terrain[D1].Class=="B" || Terrain[D1].Class=="WS" || a==0){type+=1};
			if(Terrain[D2].Class=="WF" || Terrain[D2].Class=="WA" || Terrain[D2].Class=="WE" || Terrain[D2].Class=="MC" || Terrain[D2].Class=="B" || Terrain[D2].Class=="WS"|| b==Map[0].length-1){type+=2};
			if(Terrain[D3].Class=="WF" || Terrain[D3].Class=="WA" || Terrain[D3].Class=="WE" || Terrain[D3].Class=="MC" || Terrain[D3].Class=="B" || Terrain[D3].Class=="WS"|| a==Map.length-1){type+=4};
			if(Terrain[D4].Class=="WF" || Terrain[D4].Class=="WA" || Terrain[D4].Class=="WE" || Terrain[D4].Class=="MC" || Terrain[D4].Class=="B" || Terrain[D4].Class=="WS"|| b==0){type+=8};

			if(a>=1 && b>=1){if(Terrain[Map[a-1][b-1]].SailThrough>=100 && Terrain[D4].SailThrough<100 && Terrain[D1].SailThrough<100){document.getElementById("a "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("a "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeA"+BiomeRegistry[EditorBiomeMap[a-1][b-1]].Nominator+".PNG"}};
			if(a>=1 && b<Map[0].length-1){if(Terrain[Map[a-1][b+1]].SailThrough>=100 && Terrain[D1].SailThrough<100 && Terrain[D2].SailThrough<100){document.getElementById("b "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("b "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeB"+BiomeRegistry[EditorBiomeMap[a-1][b+1]].Nominator+".PNG"}};
			if(a<Map.length-1 && b>=1){if(Terrain[Map[a+1][b-1]].SailThrough>=100 && Terrain[D4].SailThrough<100 && Terrain[D3].SailThrough<100){document.getElementById("c "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("c "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeC"+BiomeRegistry[EditorBiomeMap[a+1][b-1]].Nominator+".PNG"}};
			if(a<Map.length-1 && b<Map[0].length-1){if(Terrain[Map[a+1][b+1]].SailThrough>=100 && Terrain[D3].SailThrough<100 && Terrain[D2].SailThrough<100){document.getElementById("d "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("d "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeD"+BiomeRegistry[EditorBiomeMap[a+1][b+1]].Nominator+".PNG"}};

			var Var="Assets/Tiles/"+Terrain[Map[a][b]].name+type+Biome+".PNG";
			document.getElementById(TileAdress).style.top="0px";
			document.getElementById(TileAdress).src=Var;



			break;

		case "WA":
			var type=0;

			if(Terrain[D1].Class=="WA" || Terrain[D1].Class=="MC" || Terrain[D1].Class=="WF" || Terrain[D1].Class=="WE" || Terrain[D1].Class=="B"){type+=1};
			if(Terrain[D2].Class=="WA" || Terrain[D2].Class=="MC" || Terrain[D2].Class=="WF" || Terrain[D2].Class=="WE" || Terrain[D2].Class=="B"){type+=2};
			if(Terrain[D3].Class=="WA" || Terrain[D3].Class=="MC" || Terrain[D3].Class=="WF" || Terrain[D3].Class=="WE" || Terrain[D3].Class=="B"){type+=4};
			if(Terrain[D4].Class=="WA" || Terrain[D4].Class=="MC" || Terrain[D4].Class=="WF" || Terrain[D4].Class=="WE" || Terrain[D4].Class=="B"){type+=8};

			var Var="Assets/Tiles/"+Terrain[Map[a][b]].name+type+Biome+".PNG";
			document.getElementById(TileAdress).style.top="0px";
			document.getElementById(TileAdress).src=Var;

			break;

		case "WF":
			var type= Math.ceil(Math.random()*Terrain[Map[a][b]].Variants);
			var offset=Terrain[Map[a][b]].Offsets[type-1];
			var variant="Assets/Tiles/"+Terrain[Map[a][b]].name+type+".PNG";
			document.getElementById(TileAdress).style.top=offset+"px";
			document.getElementById(TileAdress).src=variant;

			break;

		case "WS":
			var underType=0;
			if(Terrain[D1].SailThrough<100){underType+=1};
			if(Terrain[D2].SailThrough<100){underType+=2};
			if(Terrain[D3].SailThrough<100){underType+=4};
			if(Terrain[D4].SailThrough<100){underType+=8};

			if(a>=1 && b>=1){if(Terrain[Map[a-1][b-1]].SailThrough>=100 && Terrain[D4].SailThrough<100 && Terrain[D1].SailThrough<100){document.getElementById("a "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("a "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeA"+BiomeRegistry[EditorBiomeMap[a-1][b-1]].Nominator+".PNG"}};
			if(a>=1 && b<Map[0].length-1){if(Terrain[Map[a-1][b+1]].SailThrough>=100 && Terrain[D1].SailThrough<100 && Terrain[D2].SailThrough<100){document.getElementById("b "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("b "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeB"+BiomeRegistry[EditorBiomeMap[a-1][b+1]].Nominator+".PNG"}};
			if(a<Map.length-1 && b>=1){if(Terrain[Map[a+1][b-1]].SailThrough>=100 && Terrain[D4].SailThrough<100 && Terrain[D3].SailThrough<100){document.getElementById("c "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("c "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeC"+BiomeRegistry[EditorBiomeMap[a+1][b-1]].Nominator+".PNG"}};
			if(a<Map.length-1 && b<Map[0].length-1){if(Terrain[Map[a+1][b+1]].SailThrough>=100 && Terrain[D3].SailThrough<100 && Terrain[D2].SailThrough<100){document.getElementById("d "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("d "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeD"+BiomeRegistry[EditorBiomeMap[a+1][b+1]].Nominator+".PNG"}};


			//EditorControlMap[a][b]=EditationColor;
			var offset=Terrain[Map[a][b]].Offset;
			var variant="Assets/Tiles/"+Terrain[Map[a][b]].name+".PNG";
			var undervar="Assets/Tiles/Sea"+underType+".PNG";
			document.getElementById(Strucdress).style.visibility="inherit";
			document.getElementById(Strucdress).style.filter=Factions[EditorControlMap[a][b]].ChromaCode;
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src=variant;
			document.getElementById(TileAdress).src=undervar;


			break;

		case "MC":
			var type=0;
			var axis="H";
			var alttype=0;

			if(Terrain[D1].Class=="LA" || Terrain[D1].Class=="LF" || Terrain[D1].Class=="S" || Terrain[D1].Class=="MC"){axis="V"};
			if(Terrain[D2].Class=="LA" || Terrain[D2].Class=="LF" || Terrain[D2].Class=="S" || Terrain[D2].Class=="MC"){axis="H"};
			if(Terrain[D3].Class=="LA" || Terrain[D3].Class=="LF" || Terrain[D3].Class=="S" || Terrain[D3].Class=="MC"){axis="V"};
			if(Terrain[D4].Class=="LA" || Terrain[D4].Class=="LF" || Terrain[D4].Class=="S" || Terrain[D4].Class=="MC"){axis="H"};

			if((Terrain[D2].Class=="LA" || Terrain[D2].Class=="LF" || Terrain[D2].Class=="S")&&(Terrain[D4].Class=="LA" || Terrain[D4].Class=="LF" || Terrain[D4].Class=="S")){axis="H"};
			if((Terrain[D1].Class=="LA" || Terrain[D1].Class=="LF" || Terrain[D1].Class=="S")&&(Terrain[D3].Class=="LA" || Terrain[D3].Class=="LF" || Terrain[D3].Class=="S")){axis="V"};

			if(Terrain[D1].Class=="MC"){axis="V"};
			if(Terrain[D2].Class=="MC"){axis="H"};
			if(Terrain[D3].Class=="MC"){axis="V"};
			if(Terrain[D4].Class=="MC"){axis="H"};

			if(Terrain[D1].Class=="MC"){alttype+=1};
			if(Terrain[D2].Class=="MC"){alttype+=2};
			if(Terrain[D3].Class=="MC"){alttype+=4};
			if(Terrain[D4].Class=="MC"){alttype+=8};
	
			for(let c=0; c<4; c++){if(alttype==15-Math.pow(2,c)){axis="T"}};
			if(alttype==15){axis="O"};

			if(axis=="H"){

			if(Terrain[D4].Class=="LA" || Terrain[D4].Class=="LF" || Terrain[D4].Class=="S"){type+=1};
			if(Terrain[D2].Class=="LA" || Terrain[D2].Class=="LF" || Terrain[D2].Class=="S"){type+=2};
			if(type>0){type+=Biome};


			}else if(axis=="V"){

			if(Terrain[D1].Class=="LA" || Terrain[D1].Class=="LF" || Terrain[D1].Class=="S"){type+=1};
			if(Terrain[D3].Class=="LA" || Terrain[D3].Class=="LF" || Terrain[D3].Class=="S"){type+=2};
			if(type>0){type+=Biome};

			}else if(axis=="T"){
				type="";
				if(alttype==14){type="A"};
				if(alttype==13){type="B"};
				if(alttype==11){type="C"};
				if(alttype==7){type="D"};


			}else if(axis=="O"){
				type="";

			};

			var Var="Assets/Tiles/"+Terrain[Map[a][b]].name+axis+type+".PNG";
			document.getElementById(TileAdress).style.top=Terrain[Map[a][b]].Offset+"px";
			document.getElementById(TileAdress).src=Var;

			break;

		case "B":
			var type=0;
			
			/*if(Terrain[D1].Class=="LF" || Terrain[D1].Class=="LA" || Terrain[D1].Class=="MC" || a==0){type+=1};
			if(Terrain[D2].Class=="LF" || Terrain[D2].Class=="LA" || Terrain[D2].Class=="MC" || b==Map[0].length-1){type+=2};
			if(Terrain[D3].Class=="LF" || Terrain[D3].Class=="LA" || Terrain[D3].Class=="MC" || a==Map.length-1){type+=4};
			if(Terrain[D4].Class=="LF" || Terrain[D4].Class=="LA" || Terrain[D4].Class=="MC" || b==0){type+=8};*/

			if(Terrain[D1].Class=="LF" || Terrain[D1].Class=="LA" || Terrain[D1].Class=="MC" || Terrain[D1].Class=="S"){type+=1};
			if(Terrain[D2].Class=="LF" || Terrain[D2].Class=="LA" || Terrain[D2].Class=="MC" || Terrain[D2].Class=="S"){type+=2};
			if(Terrain[D3].Class=="LF" || Terrain[D3].Class=="LA" || Terrain[D3].Class=="MC" || Terrain[D3].Class=="S"){type+=4};
			if(Terrain[D4].Class=="LF" || Terrain[D4].Class=="LA" || Terrain[D4].Class=="MC" || Terrain[D4].Class=="S"){type+=8};

			if(a>1 && b>1){if(Terrain[Map[a-1][b-1]].SailThrough>=100 && Terrain[D4].SailThrough<100 && Terrain[D1].SailThrough<100){document.getElementById("a "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("a "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeA"+BiomeRegistry[EditorBiomeMap[a-1][b-1]].Nominator+".PNG"}};
			if(a>1 && b<Map[0].length-1){if(Terrain[Map[a-1][b+1]].SailThrough>=100 && Terrain[D1].SailThrough<100 && Terrain[D2].SailThrough<100){document.getElementById("b "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("b "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeB"+BiomeRegistry[EditorBiomeMap[a-1][b+1]].Nominator+".PNG"}};
			if(a<Map.length-1 && b>1){if(Terrain[Map[a+1][b-1]].SailThrough>=100 && Terrain[D2].SailThrough<100 && Terrain[D3].SailThrough<100){document.getElementById("c "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("c "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeC"+BiomeRegistry[EditorBiomeMap[a+1][b-1]].Nominator+".PNG"}};
			if(a<Map.length-1 && b<Map[0].length-1){if(Terrain[Map[a+1][b+1]].SailThrough>=100 && Terrain[D3].SailThrough<100 && Terrain[D4].SailThrough<100){document.getElementById("d "+(a+1)+" X "+(b+1)).style.visibility="inherit";document.getElementById("d "+(a+1)+" X "+(b+1)).src="Assets/Tiles/EdgeD"+BiomeRegistry[EditorBiomeMap[a+1][b+1]].Nominator+".PNG"}};

			var Var="Assets/Tiles/"+Terrain[Map[a][b]].name+type+Biome+".PNG";
			document.getElementById(TileAdress).style.top="0px";
			document.getElementById(TileAdress).src=Var;

			break;

		case "S":
			//To do: Manipulate underlying terrain to be a proper road, not a grass tile
			let undertype=0;
			if(Terrain[D1].Class=="LA" || Terrain[D1].Class=="MC" || Terrain[D1].Class=="S"){undertype+=1};
			if(Terrain[D2].Class=="LA" || Terrain[D2].Class=="MC" || Terrain[D2].Class=="S"){undertype+=2};
			if(Terrain[D3].Class=="LA" || Terrain[D3].Class=="MC" || Terrain[D3].Class=="S"){undertype+=4};
			if(Terrain[D4].Class=="LA" || Terrain[D4].Class=="MC" || Terrain[D4].Class=="S"){undertype+=8};


			//EditorControlMap[a][b]=EditationColor;
			var offset=Terrain[Map[a][b]].Offset;
			var variant="Assets/Tiles/"+Terrain[Map[a][b]].name+".PNG";
			var undervar="Assets/Tiles/Road"+undertype+Biome+".PNG";
			document.getElementById(Strucdress).style.visibility="inherit";
			document.getElementById(Strucdress).style.filter=Factions[EditorControlMap[a][b]].ChromaCode;
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src=variant;
			document.getElementById(TileAdress).src=undervar;

			break;
		}

	}else{};};
function RefreshMapEditor(){

	for(let ics=1;ics<=x;ics++){for(let igrec=1;igrec<=y;igrec++){

		let X=ics;
		let Y=igrec;
		let TileAdress="Tile "+X+" X "+Y;
		let Altdress="Entity "+ics+" X "+igrec;
		let Strucdress="Structure "+X+" X "+Y;
		let unit=EditorEntityMap[ics+EditorStandardX-1][igrec+EditorStandardY-1];

		document.getElementById(Strucdress).style.visibility="hidden";
		//alert("a "+(X-EditorStandardX)+" X "+(Y-EditorStandardY));
		document.getElementById("a "+(X)+" X "+(Y)).style.visibility="hidden";
		document.getElementById("b "+(X)+" X "+(Y)).style.visibility="hidden";
		document.getElementById("c "+(X)+" X "+(Y)).style.visibility="hidden";
		document.getElementById("d "+(X)+" X "+(Y)).style.visibility="hidden";

		if(EditorEntityMap[ics+EditorStandardX-1][igrec+EditorStandardY-1]!=0){
			document.getElementById(Altdress).style.visibility="inherit";
			document.getElementById(Altdress).style.filter=Factions[EditorEntityMap[ics+EditorStandardX-1][igrec+EditorStandardY-1].faction].ChromaCode;
			document.getElementById(Altdress).style.top=(Units[unit.id].StaticOffsetY ?? [0,0,0,0,0])[unit.direction]+"px";
			document.getElementById(Altdress).style.left=(Units[unit.id].StaticOffsetX ?? [0,0,0,0,0])[unit.direction]+"px";

			document.getElementById(Altdress).src="Assets/Units/Static/"+Units[EditorEntityMap[ics+EditorStandardX-1][igrec+EditorStandardY-1].id].shortname+EditorEntityMap[ics+EditorStandardX-1][igrec+EditorStandardY-1].direction+".PNG";
		}else{document.getElementById(Altdress).style.visibility="hidden";};



		let Class=CampaignTerrain[EditorMap[ics-1][igrec-1]].Class;
		//alert(ics+" "+igrec);
		//let TileAdress="Tile "+(ics+1)+" X "+(igrec+1);
		//let Strucdress="Structure "+(ics+1)+" X "+(igrec+1);
		let a=ics-1;
		let b=igrec-1;
		let D1=0;
		let D2=0;
		let D3=0;
		let D4=0;

		let BiomeIndicator=CampaignTerrain[EditorMap[ics-1][igrec-1]].BiomeIndex??1;
		if(BiomeIndicator!=1){EditorBiomeMap[ics-1][igrec-1]=BiomeIndicator};
		let Biome=EditorBiomeMap[ics-1][igrec-1]??1;

		//console.log(Biome);
		//if(Biome!=undefined){EditorBiomeMap[X-1][Y-1]=Biome;};
		if(Biome==1){Biome=""};
		if(Biome==2){Biome="Arid"};
		if(Biome==3){Biome="Boreal"};
		if(Biome==4){Biome="Barren"};
		if(Biome==5){Biome="Arctic"};
		if(Biome==6){Biome="Lunar"};
		if(Biome==7){Biome="Martian"};

		if((CampaignTerrain[EditorMap[ics-1][igrec-1]].BiomeIndex??0)!=0){Biome=""};


		if(a>0){D1=EditorMap[a-1][b]};
		if(b<EditorMap[0].length-1){D2=EditorMap[a][b+1]};
		if(a<EditorMap.length-1){D3=EditorMap[a+1][b]};
		if(b>0){D4=EditorMap[a][b-1]};
		let Map=EditorMap;
	document.getElementById(Strucdress).style.visibility="hidden";

	switch(Class){

		case "LF":
			var type= Math.ceil(Math.random()*Terrain[Map[a][b]].Variants);
			var offset=Terrain[Map[a][b]].Offsets[type-1];
			var variant="Assets/Tiles/"+Terrain[Map[a][b]].name+type+Biome+".PNG";
			document.getElementById(TileAdress).style.top=offset+"px";
			document.getElementById(TileAdress).src=variant;
			break;

		case "LA":
			var type=0;

			if(Terrain[D1].Class=="LA" || Terrain[D1].Class=="MC" || Terrain[D1].Class=="S"){type+=1};
			if(Terrain[D2].Class=="LA" || Terrain[D2].Class=="MC" || Terrain[D2].Class=="S"){type+=2};
			if(Terrain[D3].Class=="LA" || Terrain[D3].Class=="MC" || Terrain[D3].Class=="S"){type+=4};
			if(Terrain[D4].Class=="LA" || Terrain[D4].Class=="MC" || Terrain[D4].Class=="S"){type+=8};

			//console.log(Biome);
			var Var="Assets/Tiles/"+Terrain[Map[a][b]].name+type+Biome+".PNG";
			document.getElementById(TileAdress).style.top="0px";
			document.getElementById(TileAdress).src=Var;
			break;

		case "WE":
			var type=0;

			if(Terrain[D1].Class=="WF" || Terrain[D1].Class=="WA" || Terrain[D1].Class=="WE" || Terrain[D1].Class=="MC" || Terrain[D1].Class=="B" || a==0){type+=1};
			if(Terrain[D2].Class=="WF" || Terrain[D2].Class=="WA" || Terrain[D2].Class=="WE" || Terrain[D2].Class=="MC" || Terrain[D2].Class=="B" || b==Map[0].length-1){type+=2};
			if(Terrain[D3].Class=="WF" || Terrain[D3].Class=="WA" || Terrain[D3].Class=="WE" || Terrain[D3].Class=="MC" || Terrain[D3].Class=="B" || a==Map.length-1){type+=4};
			if(Terrain[D4].Class=="WF" || Terrain[D4].Class=="WA" || Terrain[D4].Class=="WE" || Terrain[D4].Class=="MC" || Terrain[D4].Class=="B" || b==0){type+=8};

			if(a>1 && b>1){if(Terrain[Map[a-1][b-1]].SailThrough>=100 && Terrain[D4].SailThrough<100 && Terrain[D1].SailThrough<100){document.getElementById("a "+(a+1)+" X "+(b+1)).style.visibility="visible"}};
			if(a>1 && b<Map[0].length-1){if(Terrain[Map[a-1][b+1]].SailThrough>=100 && Terrain[D1].SailThrough<100 && Terrain[D2].SailThrough<100){document.getElementById("b "+(a+1)+" X "+(b+1)).style.visibility="visible"}};
			if(a<Map.length-1 && b>1){if(Terrain[Map[a+1][b-1]].SailThrough>=100 && Terrain[D2].SailThrough<100 && Terrain[D3].SailThrough<100){document.getElementById("c "+(a+1)+" X "+(b+1)).style.visibility="visible"}};
			if(a<Map.length-1 && b<Map[0].length-1){if(Terrain[Map[a+1][b+1]].SailThrough>=100 && Terrain[D3].SailThrough<100 && Terrain[D4].SailThrough<100){document.getElementById("d "+(a+1)+" X "+(b+1)).style.visibility="visible"}};

			var Var="Assets/Tiles/"+Terrain[Map[a][b]].name+type+".PNG";
			document.getElementById(TileAdress).style.top="0px";
			document.getElementById(TileAdress).src=Var;



			break;

		case "WA":
			var type=0;

			if(Terrain[D1].Class=="WA" || Terrain[D1].Class=="MC" || Terrain[D1].Class=="WF" || Terrain[D1].Class=="WE"){type+=1};
			if(Terrain[D2].Class=="WA" || Terrain[D2].Class=="MC" || Terrain[D2].Class=="WF" || Terrain[D2].Class=="WE"){type+=2};
			if(Terrain[D3].Class=="WA" || Terrain[D3].Class=="MC" || Terrain[D3].Class=="WF" || Terrain[D3].Class=="WE"){type+=4};
			if(Terrain[D4].Class=="WA" || Terrain[D4].Class=="MC" || Terrain[D4].Class=="WF" || Terrain[D4].Class=="WE"){type+=8};

			var Var="Assets/Tiles/"+Terrain[Map[a][b]].name+type+".PNG";
			document.getElementById(TileAdress).style.top="0px";
			document.getElementById(TileAdress).src=Var;

			break;

		case "WF":
			var type= Math.ceil(Math.random()*Terrain[Map[a][b]].Variants);
			var offset=Terrain[Map[a][b]].Offsets[type-1];
			var variant="Assets/Tiles/"+Terrain[Map[a][b]].name+type+".PNG";
			document.getElementById(TileAdress).style.top=offset+"px";
			document.getElementById(TileAdress).src=variant;

			break;

		case "WS":

			var offset=Terrain[Map[a][b]].Offset;
			var variant="Assets/Tiles/"+Terrain[Map[a][b]].name+".PNG";
			var undervar="Assets/Tiles/Sea15"+undertype+Biome+".PNG";
			document.getElementById(Strucdress).style.visibility="visible";
			document.getElementById(Strucdress).style.filter=Factions[EditorControlMap[a][b]].ChromaCode;
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src=variant;
			document.getElementById(TileAdress).src=undervar;

			break;

		case "MC":
			var type=0;
			var axis="H";
			var alttype=0;

			if(Terrain[D1].Class=="LA" || Terrain[D1].Class=="LF" || Terrain[D1].Class=="S"){axis="V"};
			if(Terrain[D2].Class=="LA" || Terrain[D2].Class=="LF" || Terrain[D2].Class=="S"){axis="H"};
			if(Terrain[D3].Class=="LA" || Terrain[D3].Class=="LF" || Terrain[D3].Class=="S"){axis="V"};
			if(Terrain[D4].Class=="LA" || Terrain[D4].Class=="LF" || Terrain[D4].Class=="S"){axis="H"};

			if((Terrain[D2].Class=="LA" || Terrain[D2].Class=="LF" || Terrain[D2].Class=="S")&&(Terrain[D4].Class=="LA" || Terrain[D4].Class=="LF" || Terrain[D4].Class=="S")){axis="H"};
			if((Terrain[D1].Class=="LA" || Terrain[D1].Class=="LF" || Terrain[D1].Class=="S")&&(Terrain[D3].Class=="LA" || Terrain[D3].Class=="LF" || Terrain[D3].Class=="S")){axis="V"};

			if(Terrain[D1].Class=="MC"){alttype+=1};
			if(Terrain[D2].Class=="MC"){alttype+=2};
			if(Terrain[D3].Class=="MC"){alttype+=4};
			if(Terrain[D4].Class=="MC"){alttype+=8};
	
			for(let c=0; c<4; c++){if(alttype==15-Math.pow(2,c)){axis="T"}};
			if(alttype==15){axis="O"};

			if(axis=="H"){

			if(Terrain[D4].Class=="LA" || Terrain[D4].Class=="LF" || Terrain[D4].Class=="S"){type+=1};
			if(Terrain[D2].Class=="LA" || Terrain[D2].Class=="LF" || Terrain[D2].Class=="S"){type+=2};
			type+=Biome;


			}else if(axis=="V"){

			if(Terrain[D1].Class=="LA" || Terrain[D1].Class=="LF" || Terrain[D1].Class=="S"){type+=1};
			if(Terrain[D3].Class=="LA" || Terrain[D3].Class=="LF" || Terrain[D3].Class=="S"){type+=2};
			type+=Biome

			}else if(axis=="T"){
				type="";
				if(alttype==14){type="A"};
				if(alttype==13){type="B"};
				if(alttype==11){type="C"};
				if(alttype==7){type="D"};


			}else if(axis=="O"){
				type="";

			};

			var Var="Assets/Tiles/"+Terrain[Map[a][b]].name+axis+type+".PNG";
			document.getElementById(TileAdress).style.top=Terrain[Map[a][b]].Offset+"px";
			document.getElementById(TileAdress).src=Var;

			break;

		case "B":
			var type=0;

			if(Terrain[D1].Class=="LF" || Terrain[D1].Class=="LA" || Terrain[D1].Class=="MC" || Terrain[D1].Class=="S" || a==0){type+=1};
			if(Terrain[D2].Class=="LF" || Terrain[D2].Class=="LA" || Terrain[D2].Class=="MC" || Terrain[D2].Class=="S" || b==Map[0].length-1){type+=2};
			if(Terrain[D3].Class=="LF" || Terrain[D3].Class=="LA" || Terrain[D3].Class=="MC" || Terrain[D3].Class=="S" || a==Map.length-1){type+=4};
			if(Terrain[D4].Class=="LF" || Terrain[D4].Class=="LA" || Terrain[D4].Class=="MC" || Terrain[D4].Class=="S" || b==0){type+=8};

			if(a>1 && b>1){if(Terrain[Map[a-1][b-1]].SailThrough>=100 && Terrain[D4].SailThrough<100 && Terrain[D1].SailThrough<100){document.getElementById("a "+(a+1)+" X "+(b+1)).style.visibility="visible"}};
			if(a>1 && b<Map[0].length-1){if(Terrain[Map[a-1][b+1]].SailThrough>=100 && Terrain[D1].SailThrough<100 && Terrain[D2].SailThrough<100){document.getElementById("b "+(a+1)+" X "+(b+1)).style.visibility="visible"}};
			if(a<Map.length-1 && b>1){if(Terrain[Map[a+1][b-1]].SailThrough>=100 && Terrain[D2].SailThrough<100 && Terrain[D3].SailThrough<100){document.getElementById("c "+(a+1)+" X "+(b+1)).style.visibility="visible"}};
			if(a<Map.length-1 && b<Map[0].length-1){if(Terrain[Map[a+1][b+1]].SailThrough>=100 && Terrain[D3].SailThrough<100 && Terrain[D4].SailThrough<100){document.getElementById("d "+(a+1)+" X "+(b+1)).style.visibility="visible"}};

			var Var="Assets/Tiles/"+Terrain[Map[a][b]].name+type+Biome+".PNG";
			document.getElementById(TileAdress).style.top="0px";
			document.getElementById(TileAdress).src=Var;

			break;

		case "S":
			//To do: Manipulate underlying terrain to be a proper road, not a grass tile
			let undertype=0;
			if(Terrain[D1].Class=="LA" || Terrain[D1].Class=="MC" || Terrain[D1].Class=="S"){undertype+=1};
			if(Terrain[D2].Class=="LA" || Terrain[D2].Class=="MC" || Terrain[D2].Class=="S"){undertype+=2};
			if(Terrain[D3].Class=="LA" || Terrain[D3].Class=="MC" || Terrain[D3].Class=="S"){undertype+=4};
			if(Terrain[D4].Class=="LA" || Terrain[D4].Class=="MC" || Terrain[D4].Class=="S"){undertype+=8};



			var offset=Terrain[Map[a][b]].Offset;
			var variant="Assets/Tiles/"+Terrain[Map[a][b]].name+".PNG";
			var undervar="Assets/Tiles/Road"+undertype+Biome+".PNG";
			document.getElementById(Strucdress).style.visibility="visible";
			document.getElementById(Strucdress).style.filter=Factions[EditorControlMap[a][b]].ChromaCode;
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src=variant;
			document.getElementById(TileAdress).src=undervar;

			break;
		}


		/*
		switch(EditorMap[ics-1+EditorStandardX][igrec-1+EditorStandardY]){
		case 1:
			var type= Math.ceil(Math.random()*8);
			var offset=0;
			variant= "Assets/Tiles/Plains"+type+".PNG";
			document.getElementById(Address).style.top=offset+"px";
			//document.getElementById(Address).style.filter="hue-rotate(0deg) saturate(100%) brightness(100%)";
			document.getElementById(Address).src=variant;
			break;

		case 2:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			if(type==2){offset=-4};
			if(type==3){offset=-3};
			if(type==4){offset=-12}
			variant= "Assets/Tiles/Forest"+type+".PNG";
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src=variant;
			break;

			case 3:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			if(type==3){offset=-4};
			if(type==4){offset=-5};
			variant= "Assets/Tiles/Hills"+type+".PNG";
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src=variant;
			break;

		case 4:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			if(type==2){offset=-4};
			if(type==3){offset=-9};
			if(type==4){offset=-10};
			variant= "Assets/Tiles/Mountains"+type+".PNG";
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src=variant;
			break;

		case 5:
			var offset=-8;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Volcano.PNG";
			break;

		case 6:
			var offset=0;
			var variant=0;
			//alert(X+" "+Y);
			if(X>1){if(Terrain[EditorMap[X-2+EditorStandardX][Y-1+EditorStandardY]].Urbanistics > 0){variant+=1}};
			if(Y<10){if(Terrain[EditorMap[X-1+EditorStandardX][Y+EditorStandardY]].Urbanistics>0){variant+=2}};
			if(X<10){if(Terrain[EditorMap[X+EditorStandardX][Y-1+EditorStandardY]].Urbanistics>0){variant+=4}};
			if(Y>1){if(Terrain[EditorMap[X-1+EditorStandardX][Y-2+EditorStandardY]].Urbanistics > 0){variant+=8}};
			//if(X>0){if((Map[X-1][Y]>5 && Map[X-1][Y]<15) || (Map[X-1][Y]>20 && (Map[X-1][Y]<23))){variant+=1}};
			//if(Y<Map[0].length){if((Map[X][Y+1]>5 && Map[X][Y+1]<15) || (Map[X][Y+1]>20 && (Map[X][Y+1]<23))){variant+=2}};
			//if(X<Map.length){if((Map[X+1][Y]>5 && Map[X+1][Y]<15) || (Map[X+1][Y]>20 && (Map[X+1][Y]<23))){variant+=4}};
			//if(Y>0){if((Map[X][Y-1]>5 && Map[X][Y-1]<15) || (Map[X][Y-1]>20 && (Map[X][Y-1]<23))){variant+=2}};
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src="Assets/Tiles/Road"+variant+".PNG";
			break;

		case 7:
			var offset=-14;
			var type= Math.ceil(Math.random()*2);
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Ruins"+type+".PNG";
			break;

		case 8:
			var offset=-14;
			var type= Math.ceil(Math.random()*4);
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Urban District"+type+".PNG";
			break;

		case 9:
			var offset=-10;
			document.getElementById(Address).style.top="0px";
			document.getElementById(Address).src="Assets/Tiles/Plains.PNG";
			document.getElementById(Strucdress).style.visibility="inherit";
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src= "Assets/Tiles/Industrial District.PNG";
			document.getElementById(Strucdress).style.filter=Factions[EditorControlMap[ics+EditorStandardX-1][igrec+EditorStandardY-1]].ChromaCode;
			break;

		case 10:
			var offset=-8;
			document.getElementById(Address).style.top="0px";
			document.getElementById(Address).src="Assets/Tiles/Plains.PNG";
			document.getElementById(Strucdress).style.visibility="inherit";
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src= "Assets/Tiles/Military-Industrial Complex.PNG";
			document.getElementById(Strucdress).style.filter=Factions[EditorControlMap[ics+EditorStandardX-1][igrec+EditorStandardY-1]].ChromaCode;
			break;

		case 11:
			var offset=-14;
			document.getElementById(Address).style.top="0px";
			document.getElementById(Address).src="Assets/Tiles/Plains.PNG";
			document.getElementById(Strucdress).style.visibility="inherit";
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src= "Assets/Tiles/Aviation Industrial Facility.PNG";
			document.getElementById(Strucdress).style.filter=Factions[EditorControlMap[ics+EditorStandardX-1][igrec+EditorStandardY-1]].ChromaCode;
			break;

		case 12:
			var offset=-14;
			document.getElementById(Address).style.top="0px";
			document.getElementById(Address).src="Assets/Tiles/Plains.PNG";
			document.getElementById(Strucdress).style.visibility="inherit";
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src= "Assets/Tiles/Shipbuilding Facility.PNG";
			document.getElementById(Strucdress).style.filter=Factions[EditorControlMap[ics+EditorStandardX-1][igrec+EditorStandardY-1]].ChromaCode;
			break;

		case 13:
			var offset=0;
			document.getElementById(Address).style.top="0px";
			document.getElementById(Address).src="Assets/Tiles/Plains.PNG";
			document.getElementById(Strucdress).style.visibility="inherit";
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src= "Assets/Tiles/Headquarters.PNG";
			//alert(EditorControlMap[ics+EditorStandardX-1][igrec+EditorStandardY-1]);
			document.getElementById(Strucdress).style.filter=Factions[EditorControlMap[ics+EditorStandardX-1][igrec+EditorStandardY-1]].ChromaCode;

			break;

		case 14:
			var offset=-18;
			document.getElementById(Address).style.top="0px";
			document.getElementById(Address).src="Assets/Tiles/Plains.PNG";
			document.getElementById(Strucdress).style.visibility="inherit";
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src= "Assets/Tiles/Command Center.PNG";
			document.getElementById(Strucdress).style.filter=Factions[EditorControlMap[ics+EditorStandardX-1][igrec+EditorStandardY-1]].ChromaCode;
			break;

		case 15:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			if(type==2){offset=-4};
			if(type==3){offset=-3};
			if(type==4){offset=-12}
			variant= "Assets/Tiles/Taiga"+type+".PNG";
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src=variant;
			break;

		case 16:
			var type= Math.ceil(Math.random()*3);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Desert"+type+".PNG";
			break;

		case 17:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			variant= "Assets/Tiles/Tundra"+type+".PNG";
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src=variant;
			break;

		case 18:
			var type= Math.ceil(Math.random()*3);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Extreme Desert"+type+".PNG";
			break;

		case 19:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Arctic Hellhole"+type+".PNG";
			break;

		case 20:
			var offset=0;
			var axis="V";
			var variant=0;
			if(X>1){if(Terrain[EditorMap[X-2+EditorStandardX][Y-1+EditorStandardY]].SailThrough<100){axis="H"}};
			if(Y<10){if(Terrain[EditorMap[X-1+EditorStandardX][Y+EditorStandardY]].SailThrough<100){axis="V"}};
			if(X<10){if(Terrain[EditorMap[X+EditorStandardX][Y-1+EditorStandardY]].SailThrough<100){axis="H"}};
			if(Y>1){if(Terrain[EditorMap[X-1+EditorStandardX][Y-2+EditorStandardY]].SailThrough<100){axis="V"}};
			if(X>1){if(EditorMap[X-2+EditorStandardX][Y-1+EditorStandardY]==20 || EditorMap[X-2+EditorStandardX][Y-1+EditorStandardY]==21){axis="V"}};
			if(Y<10){if(EditorMap[X-1+EditorStandardX][Y+EditorStandardY]==20 || EditorMap[X-1+EditorStandardX][Y+EditorStandardY]==21){axis="H"}};
			if(X<10){if(EditorMap[X+EditorStandardX][Y-1+EditorStandardY]==20 || EditorMap[X+EditorStandardX][Y-1+EditorStandardY]==21){axis="V"}};
			if(Y>1){if(EditorMap[X-1+EditorStandardX][Y-2+EditorStandardY]==20 || EditorMap[X-1+EditorStandardX][Y-2+EditorStandardY]==21){axis="H"}};

			if(axis=="V"){
			if(X>1){if(Terrain[EditorMap[X-2+EditorStandardX][Y-1+EditorStandardY]].WalkThrough<100 && EditorMap[X-2+EditorStandardX][Y-1+EditorStandardY]!=20 && EditorMap[X-2+EditorStandardX][Y-1+EditorStandardY]!=21){variant+=1;}};
			if(X<10){if(Terrain[EditorMap[X+EditorStandardX][Y-1+EditorStandardY]].WalkThrough<100 &&EditorMap[X+EditorStandardX][Y-1+EditorStandardY]!=20&&EditorMap[X+EditorStandardX][Y-1+EditorStandardY]!=21){variant+=2;}};};
			if(axis=="H"){if(Y>1){if(Terrain[EditorMap[X-1+EditorStandardX][Y-2+EditorStandardY]].WalkThrough<100&&EditorMap[X-1+EditorStandardX][Y-2+EditorStandardY]!=20&&EditorMap[X-1+EditorStandardX][Y-2+EditorStandardY]!=21){variant+=1;}};
			if(Y<10){if(Terrain[EditorMap[X-1+EditorStandardX][Y+EditorStandardY]].WalkThrough<100&&EditorMap[X-1+EditorStandardX][Y+EditorStandardY]!=20&&EditorMap[X-1+EditorStandardX][Y+EditorStandardY]!=21){variant+=2;}};};

			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Bridge"+axis+variant+".PNG";
			break;

		case 21:
			var offset=0;
			var axis="V";
			var variant=0;
			if(X>1){if(Terrain[EditorMap[X-2+EditorStandardX][Y-1+EditorStandardY]].SailThrough<100){axis="H"}};
			if(Y<10){if(Terrain[EditorMap[X-1+EditorStandardX][Y+EditorStandardY]].SailThrough<100){axis="V"}};
			if(X<10){if(Terrain[EditorMap[X+EditorStandardX][Y-1+EditorStandardY]].SailThrough<100){axis="H"}};
			if(Y>1){if(Terrain[EditorMap[X-1+EditorStandardX][Y-2+EditorStandardY]].SailThrough<100){axis="V"}};
			if(X>1){if(EditorMap[X-2+EditorStandardX][Y-1+EditorStandardY]==20 || EditorMap[X-2+EditorStandardX][Y-1+EditorStandardY]==21){axis="V"}};
			if(Y<10){if(EditorMap[X-1+EditorStandardX][Y+EditorStandardY]==20 || EditorMap[X-1+EditorStandardX][Y+EditorStandardY]==21){axis="H"}};
			if(X<10){if(EditorMap[X+EditorStandardX][Y-1+EditorStandardY]==20 || EditorMap[X+EditorStandardX][Y-1+EditorStandardY]==21){axis="V"}};
			if(Y>1){if(EditorMap[X-1+EditorStandardX][Y-2+EditorStandardY]==20 || EditorMap[X-1+EditorStandardX][Y-2+EditorStandardY]==21){axis="H"}};

			if(axis=="V"){
			if(X>1){if(Terrain[EditorMap[X-2+EditorStandardX][Y-1+EditorStandardY]].WalkThrough<100 && EditorMap[X-2+EditorStandardX][Y-1+EditorStandardY]!=20 && EditorMap[X-2+EditorStandardX][Y-1+EditorStandardY]!=21){variant+=1;}};
			if(X<10){if(Terrain[EditorMap[X+EditorStandardX][Y-1+EditorStandardY]].WalkThrough<100 &&EditorMap[X+EditorStandardX][Y-1+EditorStandardY]!=20&&EditorMap[X+EditorStandardX][Y-1+EditorStandardY]!=21){variant+=2;}};};
			if(axis=="H"){if(Y>1){if(Terrain[EditorMap[X-1+EditorStandardX][Y-2+EditorStandardY]].WalkThrough<100&&EditorMap[X-1+EditorStandardX][Y-2+EditorStandardY]!=20&&EditorMap[X-1+EditorStandardX][Y-2+EditorStandardY]!=21){variant+=1;}};
			if(Y<10){if(Terrain[EditorMap[X-1+EditorStandardX][Y+EditorStandardY]].WalkThrough<100&&EditorMap[X-1+EditorStandardX][Y+EditorStandardY]!=20&&EditorMap[X-1+EditorStandardX][Y+EditorStandardY]!=21){variant+=2;}};};

			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/HighBridge"+axis+variant+".PNG";
			break;

		case 22:
			var offset=0;
			var variant=0;

			if(X>1){if(Terrain[EditorMap[X-2+EditorStandardX][Y-1+EditorStandardY]].SailThrough<100){variant+=1;}};
			if(Y<10){if(Terrain[EditorMap[X-1+EditorStandardX][Y+EditorStandardY]].SailThrough<100){variant+=2;}};
			if(X<10){if(Terrain[EditorMap[X+EditorStandardX][Y-1+EditorStandardY]].SailThrough<100){variant+=4;}};
			if(Y>1){if(Terrain[EditorMap[X-1+EditorStandardX][Y-2+EditorStandardY]].SailThrough<100){variant+=8;}};

			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/River"+variant+".PNG";
			break;

		case 23:
			var offset=0;
			var variant=0;
			//alert(Y);
			if(X>1){if(Terrain[EditorMap[X-2+EditorStandardX][Y-1+EditorStandardY]].SailThrough<100){variant+=1;}};
			if(Y<10){if(Terrain[EditorMap[X-1+EditorStandardX][Y+EditorStandardY]].SailThrough<100){variant+=2;}};
			if(X<10){if(Terrain[EditorMap[X+EditorStandardX][Y-1+EditorStandardY]].SailThrough<100){variant+=4;}};
			if(Y>1){if(Terrain[EditorMap[X-1+EditorStandardX][Y-2+EditorStandardY]].SailThrough<100){variant+=8;}};
			if(X==1){variant+=1};
			if(Y==10){variant+=2};
			if(X==10){variant+=4};
			if(Y==1){variant+=8};
			//alert(Y-EditorStandardY);
			if(X>1 && Y>1){if(Terrain[EditorMap[X-2+EditorStandardX][Y-2+EditorStandardY]].SailThrough==100 && (variant==15 || variant==9 || variant==11 || variant==13)){document.getElementById("a "+(X)+" X "+(Y)).style.visibility="inherit"}};
			if(X>1 && Y<10){if(Terrain[EditorMap[X-2+EditorStandardX][Y+EditorStandardY]].SailThrough==100 && (variant==15 || variant==3 || variant==7 || variant==11)){document.getElementById("b "+(X)+" X "+(Y)).style.visibility="inherit"}};
			if(X<10 && Y>1){if(Terrain[EditorMap[X+EditorStandardX][Y-2+EditorStandardY]].SailThrough==100 && (variant==15 || variant==12 || variant==13 || variant==14)){document.getElementById("c "+(X)+" X "+(Y)).style.visibility="inherit"}};
			if(X<10 && Y<10){if(Terrain[EditorMap[X+EditorStandardX][Y+EditorStandardY]].SailThrough==100 && (variant==15 || variant==6 || variant==7 || variant==15)){document.getElementById("d "+(X)+" X "+(Y)).style.visibility="inherit"}};

			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Sea"+variant+".PNG";
			break;

		case 24:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Reef"+type+".PNG";
			break;

		case 25:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Floes"+type+".PNG";
			break;	

		case 26:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Archipelago"+type+".PNG";
			break;	

		case 27:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Rocks"+type+".PNG";
			break;	

		case 28:
			var type= Math.ceil(Math.random()*4);
			var offset=0;
			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Icebergs"+type+".PNG";
			break;	

		case 29:
			var offset=0;
			var variant=0;

			if(X+EditorStandardX>1){if(Terrain[EditorMap[X-2+EditorStandardX][Y-1+EditorStandardY]].SailThrough==100){variant+=1;}};
			if(Y+EditorStandardY<EditorMap[0].length){if(Terrain[EditorMap[X-1+EditorStandardX][Y+EditorStandardY]].SailThrough==100){variant+=2;}};
			if(X+EditorStandardX<EditorMap.length){if(Terrain[EditorMap[X+EditorStandardX][Y-1+EditorStandardY]].SailThrough==100){variant+=4;}};
			if(Y+EditorStandardY>1){if(Terrain[EditorMap[X-1+EditorStandardX][Y-2+EditorStandardY]].SailThrough==100){variant+=8;}};

			document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Address).src= "Assets/Tiles/Shore"+variant+".PNG";
			break;

		case 30:
			var offset=-9;
			document.getElementById(Address).src="Assets/Tiles/Sea.PNG";
			//document.getElementById(Address).style.top=offset+"px";
			document.getElementById(Strucdress).style.visibility="inherit";
			document.getElementById(Strucdress).style.top=offset+"px";
			document.getElementById(Strucdress).src= "Assets/Tiles/Oil Rig.PNG";
			document.getElementById(Strucdress).style.filter=Factions[EditorControlMap[ics+EditorStandardX-1][igrec+EditorStandardY-1]].ChromaCode;
			break;




			default:break;
		};*/
		


	}};};
function RegionalizeTile(X,Y){
	//alert(X);
	let adr=EditorMap[Y+EditorStandardX][X+EditorStandardY];
	if(adr==13 || adr==14 || adr==30){SelectedNode=CapitolNodeRegistry[Y+EditorStandardX][X+EditorStandardY]??{Name:"null"};EditorRegionMap[Y+EditorStandardX][X+EditorStandardY]=SelectedNode.Name;}

	else{document.getElementById("regional Color "+X+" "+Y).style.background=(Factions[SelectedNode.Owner]??{color:"Grey"}).color;
	EditorRegionMap[Y+EditorStandardX][X+EditorStandardY]=SelectedNode.Name;


	};

	for(let x=1;x<=10;x++){for(let y=1;y<=10;y++){
		let SpReg=EditorRegionMap[x+EditorStandardX-1][y+EditorStandardY-1];
		//alert(SpReg);
		//alert(EditorRegionMap[Math.max(0,x+EditorStandardX-1)][y+EditorStandardY-1]);
		if(EditorRegionMap[Math.max(0,x+EditorStandardX-2)][y+EditorStandardY-1] != SpReg){document.getElementById('Nborder '+(y-1)+" "+(x-1)).style.visibility="inherit"}else{document.getElementById('Nborder '+(y-1)+" "+(x-1)).style.visibility="hidden"};
		if(EditorRegionMap[x+EditorStandardX-1][Math.max(0,y+EditorStandardY-2)] != SpReg){document.getElementById('Wborder '+(y-1)+" "+(x-1)).style.visibility="inherit"}else{document.getElementById('Wborder '+(y-1)+" "+(x-1)).style.visibility="hidden"};
		if(EditorRegionMap[Math.min(9,x+EditorStandardX)][y+EditorStandardY-1] != SpReg){document.getElementById('Sborder '+(y-1)+" "+(x-1)).style.visibility="inherit"}else{document.getElementById('Sborder '+(y-1)+" "+(x-1)).style.visibility="hidden"};
		if(EditorRegionMap[x+EditorStandardX-1][Math.min(9,y+EditorStandardY)] != SpReg){document.getElementById('Eborder '+(y-1)+" "+(x-1)).style.visibility="inherit"}else{document.getElementById('Eborder '+(y-1)+" "+(x-1)).style.visibility="hidden"};
		}};};
function RemoveKebabIMeanBlep(){
	for(let Me_Go=0;Me_Go<=Map.length;Me_Go++){for(let It_Be=0;It_Be<=Map[0].length;It_Be++){

		thingy=document.getElementById("Blep-"+Me_Go+"-"+It_Be) ?? 0;
		if(thingy!=0){thingy.remove();};
		second_thingy=document.getElementById("Ctep-"+Me_Go+"-"+It_Be) ?? 0;
		if(second_thingy!=0){second_thingy.remove();};
		third_thingy=document.getElementById("Spep-"+Me_Go+"-"+It_Be) ?? 0;
		if(third_thingy!=0){third_thingy.remove();};
		fourth_thingy=document.getElementById("Hlep-"+Me_Go+"-"+It_Be) ?? 0;
		if(fourth_thingy!=0){fourth_thingy.remove();};
		fifth_thingy=document.getElementById("Crep-"+Me_Go+"-"+It_Be) ?? 0;
		if(fifth_thingy!=0){fifth_thingy.remove();};
		let blarg_thingy=document.getElementById("BLARG "+Me_Go+"X"+It_Be) ?? 0;
		if(blarg_thingy!=0){blarg_thingy.src="Assets/Miscellaneous/Nothing.PNG";};}};
	function ToggleTargetMarker(Type){};};
function RemoveMarker(index){
	marker=document.getElementById("Marker"+index);
	marker.remove();};
function RetrieveAllMapData(){
	//console.log("Protocol={");
	let TotalKey="Protocol={\n";

	TotalKey+='Name:"",\n';
	TotalKey+='Desc:"",\n';

	let GeneralsList=[Nobody,WhiteGeneral,BlackGeneral,GreyGeneral,IndigoGeneral,GreenGeneral,GrayGeneral,YellowGeneral,BrownGeneral,RedGeneral,BlueGeneral];
	let GeneralsListAlter=["Nobody","WhiteGeneral","BlackGeneral","GreyGeneral","IndigoGeneral","GreenGeneral","GrayGeneral","YellowGeneral","BrownGeneral","RedGeneral","BlueGeneral"];
	let CommanderList=[Nobody];
	CommanderList[1]=GeneralsList[EditationColor];



	

	let MapKey="Map:[";
	for(let i=0;i<x;i++){MapKey+="["+EditorMap[i]+"]";
	if(i<x-1){MapKey+=",\n";};};
	MapKey+="],\n";
	//console.log(MapKey);

	let RosterKey='Roster:[{index:0, id:"null", faction:"null", direction:"null", x:"null", y:"null", morale:0, hpModifier:0, defaultX:0,defaultY:0}\n';

	for(let i=0; i<x;i++){for(let j=0; j<y;j++){
		if(EditorEntityMap[i][j]!=0){
			UnitEntry=',{id:'+EditorEntityMap[i][j].id+' , faction:'+EditorEntityMap[i][j].faction+' , direction:'+EditorEntityMap[i][j].direction+', x:'+EditorEntityMap[i][j].x+', y:'+EditorEntityMap[i][j].y+', morale:'+Math.min(2,Math.max(-4,EditorEntityMap[i][j].morale??0))+', hpModifier:'+Math.min(4,Math.max(-0.99, EditorEntityMap[i][j].HPI??0));
			//let hek=typeof(JSON.parse(EditorEntityMap[i][j].CustomName));
			//alert(hek);
			let canAdd=true;
			for(let k=1; k<CommanderList.length; k++){if(EditorEntityMap[i][j].faction==CommanderList[k].Allegiance){canAdd=false}};
			if(canAdd){CommanderList[CommanderList.length]=GeneralsList[EditorEntityMap[i][j].faction]};

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
			UnitEntry+='}\n';
			RosterKey+=UnitEntry;
		};
	}};
	//console.log(RosterKey);
	RosterKey+="],\n"
	let ControlKey="ControlMap:[";
	for(let i=0;i<x;i++){ControlKey+="["+EditorControlMap[i]+"]";
	if(i<x-1){ControlKey+=",\n";};};
	ControlKey+="],\n";

	let BiomeKey="BiomeMap:[";
	for(let i=0;i<x;i++){BiomeKey+="["+EditorBiomeMap[i]+"]";
	if(i<x-1){BiomeKey+=",\n";};};
	BiomeKey+="],\n";

	let LocKey="LocKey:[";
	for(let i=0;i<Localization.length;i++){
		let LK="{X:"+(Localization[i].X-1)+",Y:"+(Localization[i].Y-1)+",name:'"+Localization[i].name+"',Description:'"+Localization[i].description+"}, \n";
	LocKey+=LK;
	};
	LocKey+="],";

	let SurviveTimer=parseInt(document.getElementById("SurviveInput").value??77777)??77777;
	let TimeLimit=parseInt(document.getElementById("TimeLimitInput").value??77777)??77777;

	let StringCom="[Nobody";
	for(let d=1; d<CommanderList.length; d++){StringCom+=","+GeneralsListAlter[d]};
	StringCom+="]";
	CommanderList=StringCom;
	//CommanderList=JSON.stringify(CommanderList);
	let ConstantsKey="Constants:{YourFaction:"+EditationColor+",defaultX:0,defaultY:0,Survival:"+SurviveTimer+",TimeLimit:"+TimeLimit+",Capture:[],Defend:[],Defeat:[],Protect:[],Funds:[0,0,0],Commanders:"+CommanderList+"},\n";
	TotalKey+=ConstantsKey;

	TotalKey+=MapKey+RosterKey+ControlKey+BiomeKey;
	if(Localization.length>0){TotalKey+=LocKey};


	TotalKey+="\nFactions:GenericFactions,";
	TotalKey+="\nUnits:CampaignUnits,";
	TotalKey+="\nTerrain:CampaignTerrain";

	TotalKey+="};";

	console.log(TotalKey)};
function RetrieveControlCode(){
	let ControlKey="[";
	for(let i=0;i<x;i++){ControlKey+="["+EditorControlMap[i]+"]";
	if(i<x-1){ControlKey+=",\n";};};
	ControlKey+="]";
	alert(ControlKey);};
function RetrieveLocalization(){
	let LocKey="[";
	for(let i=0;i<Localization.length;i++){
		let LK="{X:"+(Localization[i].X-1)+",Y:"+(Localization[i].Y-1)+",name:'"+Localization[i].name+"',Description:'"+Localization[i].description+"'}, \n";
	LocKey+=LK;
	};
	//LocKey.pop();
	LocKey+="],";
	alert(LocKey);};
function RetrieveMapCode(){
	let MapKey="[";
	for(let i=0;i<x;i++){MapKey+="["+EditorMap[i]+"]";
	if(i<x-1){MapKey+=",\n";};};
	MapKey+="]";
	console.log(MapKey);};
function RetrieveRegionCode(){
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
	alert(NodeKey)};
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
	alert(RosterKey);};
function RollMap(Direction){
	if(Direction==1){document.getElementById('UnitMap').scrollBy(0,-56);document.getElementById('RegionMap').scrollBy(0,-56)};
	if(Direction==2){document.getElementById('UnitMap').scrollBy(56,0);document.getElementById('RegionMap').scrollBy(56,0)};
	if(Direction==3){document.getElementById('UnitMap').scrollBy(0,56);document.getElementById('RegionMap').scrollBy(0,56)};
	if(Direction==4){document.getElementById('UnitMap').scrollBy(-56,0);document.getElementById('RegionMap').scrollBy(-56,0)};};
function RollMapEditor(Direction){
	if(Direction==1){document.getElementById('TileContainer').scrollBy(0,-280)};
	if(Direction==2){document.getElementById('TileContainer').scrollBy(280,0)};
	if(Direction==3){document.getElementById('TileContainer').scrollBy(0,280)};
	if(Direction==4){document.getElementById('TileContainer').scrollBy(-280,0)};};
function RunEvent(Event){

	if(Event.Intralogue!=0){if(DialogueChoice && Event.FactionTarget==PlayerChoiceFaction){launchDialogueBloc(Language.IntraeventTranscripts[Event.Intralogue],0)}};

					if(Event.SummonUnits.length>0){for(let c=0;c<Event.SummonUnits.length;c++){
						let newunit=Event.SummonUnits[c];
						if(rostermap[newunit.x-1][newunit.y-1]!=0){let SpilloverFraction=[];
						if(newunit.x>1 && rostermap[newunit.x-2][newunit.y-1]==0){SpilloverFraction[SpilloverFraction.length]=1};
						if(newunit.x<Map.length && rostermap[newunit.x][newunit.y-1]==0){SpilloverFraction[SpilloverFraction.length]=3};
						if(newunit.y<Map[0].length && rostermap[newunit.x-1][newunit.y]==0){SpilloverFraction[SpilloverFraction.length]=2};
						if(newunit.y>1 && rostermap[newunit.x-1][newunit.y-2]==0){SpilloverFraction[SpilloverFraction.length]=4};
						//alert(SpilloverFraction);
						let RelocationFraction=SpilloverFraction[Math.floor(Math.random()*SpilloverFraction.length)];
						if(RelocationFraction==1){rostermap[newunit.x-2][newunit.y-1]=rostermap[newunit.x-1][newunit.y-1]; rostermap[newunit.x-1][newunit.y-1]=0};
						if(RelocationFraction==2){rostermap[newunit.x-1][newunit.y]=rostermap[newunit.x-1][newunit.y-1]; rostermap[newunit.x-1][newunit.y-1]=0};
						if(RelocationFraction==3){rostermap[newunit.x][newunit.y-1]=rostermap[newunit.x-1][newunit.y-1]; rostermap[newunit.x-1][newunit.y-1]=0};
						if(RelocationFraction==4){rostermap[newunit.x-1][newunit.y-2]=rostermap[newunit.x-1][newunit.y-1]; rostermap[newunit.x-1][newunit.y-1]=0};
						refreshMap();
						//alert(rostermap[newunit.x-1][newunit.y-1].index+" "+[newunit.x-1,newunit.y-1]);

							if(SpilloverFraction.length==0){MapRoster[rostermap[newunit.x-1][newunit.y-1].index].life=0; rostermap[newunit.x-1][newunit.y-1].life=0; UnitLost(rostermap[newunit.x-1][newunit.y-1].index)}};
						DeployUnit(newunit.x,newunit.y,newunit.id,newunit.all,newunit.dir,newunit.hpi,newunit.mor,Language.UnitSpecialNames[newunit.cun??0],newunit.spn,Language.UnitSpecialDesc[newunit.cud??0],newunit.spd);
						for(let d=0;d<AttackOrder.length;d++){if(newunit.all==AttackOrder[d]){Constants.Funds[d+1]+=Units[newunit.id].Cost/2}; YourMoney=Constants.Funds[1]};
						setTimeout(function(){document.getElementById("Entity "+newunit.x+"X"+newunit.y).style.visibility='visible';
							document.getElementById("Entity "+newunit.x+"X"+newunit.y).style.top=(Units[newunit.id].StaticOffsetY??[0,0,0,0,0])[newunit.dir]+"px";
							document.getElementById("Entity "+newunit.x+"X"+newunit.y).style.left=(Units[newunit.id].StaticOffsetX??[0,0,0,0,0])[newunit.dir]+"px";
						document.getElementById("Entity "+newunit.x+"X"+newunit.y).src="Assets/Units/Static/"+Units[newunit.id].shortname+newunit.dir+".PNG";},1050)
						if(Event.SummonUnits[c].all==PlayerChoiceFaction){document.getElementById("Marker "+newunit.x+"X"+newunit.y).style.visibility="inherit"}
						//refreshMap(Map);
						//document.getElementById;

					}}
					if(Event.AlterCredits!=0){let orderindex=0;
					for(let d=0;d<AttackOrder.length;d++){if(Event.FactionTarget==AttackOrder[d]){Constants.Funds[d+1]+=Event.AlterCredits; if(d==0){YourMoney+=Event.AlterCredits}}};
					};

					if(Event.TerrainImpact.length>0){
						for(let e=0;e<Event.TerrainImpact.length;e++){
							Map[Event.TerrainImpact[e].x][Event.TerrainImpact[e].y]=Event.TerrainImpact[e].id;
							if(rostermap[Event.TerrainImpact[e].x][Event.TerrainImpact[e].y]!=0){
								let Key=false;
								let Speed=rostermap[Event.TerrainImpact[e].x][Event.TerrainImpact[e].y].speed;
								let UnitKey=rostermap[Event.TerrainImpact[e].x][Event.TerrainImpact[e].y];
								let TileKey=Terrain[Map[Event.TerrainImpact[e].x][Event.TerrainImpact[e].y]];

								if(UnitKey.movementType=="Foot" && TileKey.WalkThrough>Speed){Key=true};
								if(UnitKey.movementType=="Wheeled" && TileKey.DriveThrough>Speed){Key=true};
								if(UnitKey.movementType=="Tracked" && TileKey.RollThrough>Speed){Key=true};
								if(UnitKey.movementType=="Flight" && TileKey.FlyThrough>Speed){Key=true};
								if(UnitKey.movementType=="Rudder" && TileKey.SailThrough>Speed){Key=true};
								if(UnitKey.movementType=="Heavy Rudder" && TileKey.DeepSailThrough>Speed){Key=true};
								if(UnitKey.movementType=="Amphibious" && TileKey.WadeThrough>Speed){Key=true};

								//Fix this too
								//if(Key){rostermap[Event.TerrainImpact[e].x][Event.TerrainImpact[e].y].life=1; MapRoster[rostermap[Event.TerrainImpact[e].x][Event.TerrainImpact[e].y].index].life=1};
								if(Key){MapRoster[UnitKey.index].life=0;UnitLost(UnitKey.index)};
							};



						};
							//RefreshMap(Map);
					};
					if(Event.Inspire!=null){
						for(let h=0;h<MapRoster.length;h++){if(MapRoster[h].faction==Event.Inspire.fct){MapRoster[h].morale+=Event.Inspire.value}};

						};
					if(Event.Strike.length>0){
						for(let f=0;f<Event.Strike.length;f++){
							let target=Event.Strike[f];
							GhostAttack(target.id??0,target.x??0,target.y??0,target.dmg??0,target.anim??"Standard");
						};
					};
					if(Event.Display!=null){document.getElementById("Illustration").style.visibility='visible';document.getElementById("MidBattleIllustration").src=Event.Display};

					if(Event.Purge!=0){for(let g=0; g<MapRoster.length;g++){if(MapRoster[g].faction==Event.Purge){MapRoster[g].life=0;UnitLost(g)}}};

					if(Event.ChangeTune != null) { 
						battalion.musicPlayer.stop();
						PlayBGM(Event.ChangeTune);
					}
				};
function SaveGame(){
	//let expires="expires= 31 Dec 9999 23:59:59 UTC";


	let LevelData=[[],[],[],[],[],[],[],[],[],[],[]];
	for (let i=0;i<35;i++){LevelData[0][LevelData[0].length]=Campaigns[0][Math.floor(i/5)][i%5].Finished};
	for (let i=0;i<35;i++){LevelData[1][LevelData[1].length]=Campaigns[1][Math.floor(i/5)][i%5].Finished};	
	for (let i=0;i<25;i++){LevelData[2][LevelData[2].length]=Campaigns[2][Math.floor(i/5)][i%5].Finished};
	for (let i=0;i<25;i++){LevelData[3][LevelData[3].length]=Campaigns[3][Math.floor(i/5)][i%5].Finished};
	for (let i=0;i<25;i++){LevelData[4][LevelData[4].length]=Campaigns[4][Math.floor(i/5)][i%5].Finished};
	for (let i=0;i<10;i++){LevelData[5][LevelData[5].length]=Campaigns[5][Math.floor(i/5)][i%5].Finished};
	for (let i=0;i<10;i++){LevelData[6][LevelData[6].length]=Campaigns[6][Math.floor(i/5)][i%5].Finished};
	for (let i=0;i<10;i++){LevelData[7][LevelData[7].length]=Campaigns[7][Math.floor(i/5)][i%5].Finished};
	for (let i=0;i<10;i++){LevelData[8][LevelData[8].length]=Campaigns[8][Math.floor(i/5)][i%5].Finished};
	for (let i=0;i<10;i++){LevelData[9][LevelData[9].length]=Campaigns[9][Math.floor(i/5)][i%5].Finished};
	for (let i=0;i<5;i++){LevelData[10][LevelData[10].length]=Campaigns[10][0][i].Finished};

	let SettingsData=[SoundChoice,MusicChoice,DialogueChoice,IdleAnimChoice,MystSettChoice];

	let Data=LevelData+"|"+SettingsData;

	let d = new Date();
  	d.setTime(d.getTime() + (1000*24*60*60*1000));
 	let expires = "expires="+ d.toUTCString();

	document.cookie=Data+";"+expires+"; path:/; SameSite=Lax";};
function SBLARG(X,Y,pip){
	//alert(X+" "+Y);

	//alert(BLARG.length);
	//console.log(pip);
	
	let Pip=pip??[0,0];
	let ics=X;
	let igrec=Y;
	let ChsSpd=rostermap[BLARG[0].X][BLARG[0].Y].speed;
	let hor=Math.abs(ics-BLARG[BLARG.length-1].X);
	let ver=Math.abs(igrec-BLARG[BLARG.length-1].Y);
	let DeviationFactor=hor+ver;
	//Pip.pop();
	//console.log(Pip);
	//console.log(hor+""+ ver + DeviationFactor);
	//console.log(DeviationFactor);
	
	document.getElementById("BLARG "+(X+1)+"X"+(Y+1)).src="Assets/BLARG/Singularity.PNG";

	if(X==BLARG[BLARG.length-1].X && Y==BLARG[BLARG.length-1].Y){if(BLARG.length>1){


		//document.getElementById("BLARG "+(BLARG[BLARG.length-1].X-StandardX+1)+"X"+(BLARG[BLARG.length-1].Y-StandardY+1)).style.visibility="hidden"
		}
		}else{
			//console.log('sonda confirmata');
			if(DeviationFactor<2 && BLARG.length<=ChsSpd){BLARG[BLARG.length]={X:X,Y:Y};

				}else{//Here is where we must forge the new appendage of the function
					//Segment that empties the current arrow
					for(let B=0; B<BLARG.length; B++){document.getElementById("BLARG "+(BLARG[B].X+1)+"X"+(BLARG[B].Y+1)).src="Assets/Miscellaneous/Nothing.PNG";};
					
					//Segment that resequences the new path
						let DeviatedBLARG=[{X:ChosenUnit.ics-1,Y:ChosenUnit.igrec-1}];
						let ix=ChosenUnit.ics-1;
						let ig=ChosenUnit.igrec-1;

						//for(let C=Pip.length-1;C>=0;C--){
						
						for(let C=0; C<Pip.length;C++){
							if(Pip[C]==1){ix--};
							if(Pip[C]==2){ig++};
							if(Pip[C]==3){ix++};
							if(Pip[C]==4){ig--};
							let AxialPurifier=true;
							if(C>0){if((Pip[C])%2==(Pip[C-1])%2 && Pip[C-1]!=Pip[C]){AxialPurifier=false}};
							if(AxialPurifier){DeviatedBLARG[DeviatedBLARG.length]={X:ix,Y:ig}};};
							//Segment that purifies the deviated arrow from 1-3/2-4 recurrences - ignore, it may be pointless
							//let PurifiedBLARG=[];
							//PurifiedBLARG[0]=DeviatedBLARG[0];
							//for(let P=1;P<DeviatedBLARG.length;P++){};
							BLARG=DeviatedBLARG;
							console.log(BLARG);
					//Segment that redraws arrow

					document.getElementById("BLARG "+(X+1)+"X"+(Y+1)).src="Assets/Miscellaneous/Nothing.PNG";





					};




			};
		//else{document.getElementById("BLARG "+(X+1-StandardX)+"X"+(Y+1-StandardY)).src="Assets/Miscellaneous/Nothing.PNG"};
		//alert(BLARG.length);
	//alert(BLARG.length);
	for(let B=0; B<BLARG.length; B++){
		if(B==0 && BLARG.length>1){
			let Blavar=0;
			//alert(BLARG[0].X+" "+BLARG[1].X+" "+BLARG[0].Y+" "+BLARG[1].Y);
			if(BLARG[0].X>BLARG[1].X){Blavar=1};
			if(BLARG[0].Y<BLARG[1].Y){Blavar=2};
			if(BLARG[0].X<BLARG[1].X){Blavar=3};
			if(BLARG[0].Y>BLARG[1].Y){Blavar=4};
			//alert(BLARG[1].X+" "+BLARG[1].Y);
			document.getElementById("BLARG "+(BLARG[0].X+1)+"X"+(BLARG[0].Y+1)).src="Assets/BLARG/Emission"+Blavar+".PNG";
		}else if(B==BLARG.length-1 && BLARG.length>1){
		//(BLARG.length==1){document.getElementById("BLARG "+(BLARG[0].X+1-StandardX)+"X"+(BLARG[0].Y+1-StandardY)).src="Assets/BLARG/Singularity.PNG";};
			let Blavar=0;
			if(BLARG[BLARG.length-2].X>BLARG[BLARG.length-1].X){Blavar=1};
			if(BLARG[BLARG.length-2].Y<BLARG[BLARG.length-1].Y){Blavar=2};
			if(BLARG[BLARG.length-2].X<BLARG[BLARG.length-1].X){Blavar=3};
			if(BLARG[BLARG.length-2].Y>BLARG[BLARG.length-1].Y){Blavar=4};

			document.getElementById("BLARG "+(BLARG[BLARG.length-1].X+1)+"X"+(BLARG[BLARG.length-1].Y+1)).src="Assets/BLARG/Target"+Blavar+".PNG";
		//}else if(B==BLARG.length-1 && BLARG.length==2){


			//let Blavar=0;
			//if(BLARG[BLARG.length-1].X>X){Blavar=1};
			//if(BLARG[BLARG.length-1].Y<Y){Blavar=2};
			//if(BLARG[BLARG.length-1].X<X){Blavar=3};
			//if(BLARG[BLARG.length-1].Y>Y){Blavar=4};

			//document.getElementById("BLARG "+(BLARG[BLARG.length-1].X)+"X"+(BLARG[BLARG.length].Y+1)).src="Assets/BLARG/Target"+Blavar+".PNG";


		}else if(BLARG.length>2){
			let Blavar=0;
			if(BLARG[B+1].X-BLARG[B].X==BLARG[B].X-BLARG[B-1].X){
				if(BLARG[B+1].X-BLARG[B].X==0){Blavar="StreakH"}else{Blavar="StreakV"};

			}else{
				let ConvX=0;
				let ConvY=0;
				if(BLARG[B+1].X!=BLARG[B].X){ConvX=BLARG[B+1].X};
				if(BLARG[B-1].X!=BLARG[B].X){ConvX=BLARG[B-1].X};
				if(BLARG[B+1].Y!=BLARG[B].Y){ConvY=BLARG[B+1].Y};
				if(BLARG[B-1].Y!=BLARG[B].Y){ConvY=BLARG[B-1].Y};
				if(ConvX<BLARG[B].X && ConvY>BLARG[B].Y){Blavar="ElbowA"};
				if(ConvX>BLARG[B].X && ConvY>BLARG[B].Y){Blavar="ElbowB"};
				if(ConvX>BLARG[B].X && ConvY<BLARG[B].Y){Blavar="ElbowC"};
				if(ConvX<BLARG[B].X && ConvY<BLARG[B].Y){Blavar="ElbowD"};
				//if(BLARG[B+1].X>BLARG[B-1].X && BLARG[B+1].Y>BLARG[B-1].Y){Blavar="ElbowA"};
				//if(BLARG[B+1].X>BLARG[B-1].X && BLARG[B+1].Y<BLARG[B-1].Y){Blavar="ElbowB"};
				//if(BLARG[B+1].X<BLARG[B-1].X && BLARG[B+1].Y<BLARG[B-1].Y){Blavar="ElbowC"};
				//if(BLARG[B+1].X<BLARG[B-1].X && BLARG[B+1].Y>BLARG[B-1].Y){Blavar="ElbowD"};
			};
			//alert(Standard);
			document.getElementById("BLARG "+(BLARG[B].X+1)+"X"+(BLARG[B].Y+1)).src="Assets/BLARG/"+Blavar+".PNG";

		};

	};};
function scrapMap(){
	//This will probably, actually most likely, not be necessary, Silver
	//Keep it around until I order you to scrap it
	//Scrapping a scrapping function XD
	//The irony is not lost on me XD

	//EDIT: no longer useless HAHAHA
	for(let i=X;i<X+10;i++){
		for(let j=Y;j<Y+10;j++){
			document.getElementById("Slot "+(i+1)+" X "+(j+1)).remove();};};};
function ScoutVicinity(X,Y){
	AdjacentCloakers=[];
	if(X>0){if(rostermap[X-1][Y]!=0 && rostermap[X-1][Y].coallition!=Factions[rostermap[X][Y].faction].faction){rostermap[X][Y].isCloaked=false; rostermap[X][Y].willAmbush=true; if(hasCertainTrait(rostermap[X-1][Y].unitType,"Stealth")){if(rostermap[X-1][Y].isCloaked??false){AdjacentCloakers[AdjacentCloakers.length]=1}}}};
	if(X<Map.length-1){if(rostermap[X+1][Y]!=0 && rostermap[X+1][Y].coallition!=Factions[rostermap[X][Y].faction].faction){rostermap[X][Y].isCloaked=false; rostermap[X][Y].willAmbush=true; if(hasCertainTrait(rostermap[X+1][Y].unitType,"Stealth")){if(rostermap[X+1][Y].isCloaked??false){AdjacentCloakers[AdjacentCloakers.length]=3}}}};
	if(Y>0){if(rostermap[X][Y-1]!=0 && rostermap[X][Y-1].coallition!=Factions[rostermap[X][Y].faction].faction){rostermap[X][Y].isCloaked=false; rostermap[X][Y].willAmbush=true; if( hasCertainTrait(rostermap[X][Y-1].unitType,"Stealth")){if(rostermap[X][Y-1].isCloaked){AdjacentCloakers[AdjacentCloakers.length]=4}}}};
	if(Y<Map[0].length-1){if(rostermap[X][Y+1]!=0 && rostermap[X][Y+1].coallition!=Factions[rostermap[X][Y].faction].faction){rostermap[X][Y].isCloaked=false; rostermap[X][Y].willAmbush=true; if(hasCertainTrait(rostermap[X][Y+1].unitType,"Stealth")){if(rostermap[X][Y+1].isCloaked??false){AdjacentCloakers[AdjacentCloakers.length]=2}}}};

	if(AdjacentCloakers.length > 0) battalion.soundPlayer.playSound("Uncloak");
	//console.log(AdjacentCloakers);

	//alert(rostermap[X][Y].isCloaked);
	//document.getElementById("Entity "+(X+1)+"X"+(Y+1)).filter="opacity(100%)";
	
	};
function SelectSpecialLevel(Level){
	//if(Level.typeOf!=undefined){Level={Name:"???????",Description:"This level doesn't exist, you know? Maybe you can give us an idea of what to add here tho"}};
	NivelVizat=Level;
	NivelElectiv=0;
	for(let x=1;x<=14;x++){document.getElementById("NatOp"+x).style.visibility='hidden'};
	document.getElementById("Special Level Name").innerHTML=Level.Name;
	document.getElementById("Special Level Description").innerHTML=Level.Desc??"Idk what to say about this one";
	document.getElementById("NatOpP").style.visibility="hidden";
	if(NivelVizat.Constants.ElectiveNation??false==true){
		document.getElementById("NatOpP").style.visibility="inherit";
		document.getElementById("NatOpP").innerHTML=Language.SystemTerms[30];
		let MaxFactions=NivelVizat.Constants.Commanders.length-1;
		for(let x=1;x<=MaxFactions;x++){document.getElementById("NatOp"+x).style.visibility='inherit';document.getElementById("NatOp"+x).style.filter=NivelVizat.Factions[NivelVizat.Constants.Commanders[x].Allegiance].ChromaCode};


		};


	};
function ShowcaseUnitCategory(Category){
	EditorUnitClass=Category;
	for(let a=1; a<=10; a++){document.getElementById('EditorUnitShowcase'+a).src='Assets/Units/Static/'+Units[Category*10-10+a].shortname+'2.PNG';
	if(!Units[Category*10-10+a].MLPR??false){document.getElementById("EditorUnitMesh"+a).src="Assets/Units/StaticMeshes/"+Units[Category*10-10+a].shortname+"Mesh2.PNG"}else{document.getElementById("EditorUnitMesh"+a).src="Assets/Miscellaneous/Nothing.PNG"}};};
function ShowCharacterBio(){
	document.getElementById("CommanderBio").style.visibility="visible";
	document.getElementById("CommanderBio").style.border="3px solid "+GenericFactions[Commander.Allegiance].color;

	document.getElementById("CommanderName").innerHTML=Commander.Fullname;
	document.getElementById("CommanderNickname").innerHTML=Commander.Nickname;
	//document.getElementById("CommanderNickCommentary").innerHTML=Commander.NicknameCommentary[0];
	document.getElementById("CommanderNickCommentary").innerHTML="";

	let Biography="";
	for(let b=0; b<Commander.Description.length; b++){Biography+=Commander.Description[b]+"<br>"};
	document.getElementById("CommanderBiography").innerHTML=Biography+"<br><br>"+("<span style='color:orange'>"+Commander.NicknameCommentary[0]+"</span>");};
function SplashAttack(Atk,X,Y){

	if(rostermap[X][Y]!=0){
		
		let Def=rostermap[X][Y];
		let DefenderTile=Terrain[Map[Def.x][Def.y]];
		let DamageModifier=Atk.life/Units[Atk.unitType].HP;

		if(hasCertainTrait(Atk.unitType,"Indomitable")){DamageModifier=1;};

		if(Atk.damageType==Def.armor&&Atk.damageType!="Medium"){DamageModifier=DamageModifier*1.5;};
		if(Atk.damageType=="Light"&&Def.armor=="Heavy"){DamageModifier=DamageModifier*0.5;};
		if(Atk.damageType=="Heavy"&&Def.armor=="Light"){DamageModifier=DamageModifier*0.5;};

		DamageModifier=DamageModifier*DefenderTile.protectionFactor;
		DamageModifier*=(5+Atk.morale)/5;
		if(Def.unitType<12 && hasCertainTrait(Atk.unitType,"Anti-Infantry")){DamageModifier*=3};
		let Damage=Math.ceil(Atk.damage*DamageModifier);
		Damage=Math.max(Damage,0);
		//alert(DamageModifier);
		Def.life-=Damage;
		if(Def.life<=0){setTimeout(UnitLost,700,Def.index);};
	};};
function StorkPickup(Unit){
	//alert(IsStork);
	if(IsStork){
		let HPIndex=rostermap[Unit.x][Unit.y].life/30;
		let Cargo=rostermap[Unit.x][Unit.y].cargo;
		MapRoster[Unit.index].id=Cargo;
		rostermap[Unit.x][Unit.y].cargo=0;
		rostermap[Unit.x][Unit.y].unitType=Cargo;
		rostermap[Unit.x][Unit.y].life=Math.round(Units[Cargo].HP*HPIndex);
		rostermap[Unit.x][Unit.y].armor=Units[Cargo].Armor;
		rostermap[Unit.x][Unit.y].damage=Units[Cargo].Attack;
		rostermap[Unit.x][Unit.y].damageType=Units[Cargo].Weapon;
		rostermap[Unit.x][Unit.y].minR=Units[Cargo].MinRange;
		rostermap[Unit.x][Unit.y].maxR=Units[Cargo].MaxRange;
		rostermap[Unit.x][Unit.y].speed=Units[Cargo].Speed;
		rostermap[Unit.x][Unit.y].movementType=Units[Cargo].Movement;
		if((MapRoster[Unit.index].CustomName ?? true) || (MapRoster[Unit.index].SpecialName ?? true)){rostermap[Unit.x][Unit.y].name=Language.UnitNames[Cargo];};
		if((MapRoster[Unit.index].CustomDescription ?? true) || (MapRoster[Unit.index].SpecialDescription ?? true)){rostermap[Unit.x][Unit.y].description=Language.UnitDesc[Cargo];};
		document.getElementById("Entity "+(Unit.x-StandardX+1)+"X"+(Unit.y-StandardY+1)).src="Assets/Units/Static/"+Units[Cargo].shortname+rostermap[Unit.x][Unit.y].direction+".PNG";

	}else{
		YourMoney-=150;
		//alert(Unit.index);
		//alert(rostermap[Unit.x][Unit.y].HP);
		//alert(HPIndex);
		let HPIndex=rostermap[Unit.x][Unit.y].life/Units[rostermap[Unit.x][Unit.y].unitType].HP;
		
		MapRoster[Unit.index].id=41;
		rostermap[Unit.x][Unit.y].cargo=rostermap[Unit.x][Unit.y].unitType;
		rostermap[Unit.x][Unit.y].unitType=41;
		rostermap[Unit.x][Unit.y].armor="Light";
		rostermap[Unit.x][Unit.y].life=Math.round(30*HPIndex);
		rostermap[Unit.x][Unit.y].damage=0;
		rostermap[Unit.x][Unit.y].damageType="None";
		rostermap[Unit.x][Unit.y].minR=1;
		rostermap[Unit.x][Unit.y].maxR=1;
		rostermap[Unit.x][Unit.y].speed=7;
		rostermap[Unit.x][Unit.y].movementType="Flight";
		if((MapRoster[Unit.index].CustomName ?? true) || (MapRoster[Unit.index].SpecialName ?? true)){rostermap[Unit.x][Unit.y].name=Language.UnitNames[41];};
		if((MapRoster[Unit.index].CustomDescription ?? true) || (MapRoster[Unit.index].SpecialDescription ?? true)){rostermap[Unit.x][Unit.y].description=Language.UnitDesc[41];};
		document.getElementById("Entity "+(Unit.x-StandardX+1)+"X"+(Unit.y-StandardY+1)).src="Assets/Units/Static/Stork"+rostermap[Unit.x][Unit.y].direction+".PNG";
		//rostermap[Unit.x][Unit.y].name="";

		//alert(rostermap[Unit.x][Unit.y].unitType);
	};};
function TestMap(){
	//alert(EditorMap[0]);
	//let MapKey="[";
	//for(let i=0;i<x;i++){MapKey+="["+EditorMap[i]+"]";
	//if(i<x-1){MapKey+=",\n";};};
	//MapKey+="]";

	/*
	let RosterKey='[{"index":0, "id":null, "faction":null, "direction":null, "x":null, "y":null, "morale":0, "hpModifier":0, "defaultX":0,"defaultY":0},\n';

	for(let i=0; i<x;i++){for(let j=0; j<y;j++){
		if(EditorEntityMap[i][j]!=0){
			UnitEntry='{"id":'+EditorEntityMap[i][j].id+' , "faction":'+EditorEntityMap[i][j].faction+' , "direction":'+EditorEntityMap[i][j].direction+', "x":'+(EditorEntityMap[i][j].x-1)+', "y":'+(EditorEntityMap[i][j].y-1)+', "morale":0, "hpModifier":0},\n';
			RosterKey+=UnitEntry;
		};
	}};
	RosterKey=RosterKey.slice(0,-2);
	RosterKey+="]";
	*/
	FieldMode="Battle";
	let RosterKey=[{index:0, id:"null", faction:"null", direction:"null", x:"null", y:"null", morale:0, hpModifier:0, defaultX:0,defaultY:0}];
	for(let x=0;x<EditorEntityMap.length;x++){for (let y=0;y<EditorEntityMap[0].length;y++){if(EditorEntityMap[x][y]!=0){RosterKey[RosterKey.length]=EditorEntityMap[x][y]}}};

	//alert(RosterKey);
	let ControlKey="[";
	for(let i=0;i<x;i++){ControlKey+="["+EditorControlMap[i]+"]";
	if(i<x-1){ControlKey+=",\n";};};
	ControlKey+="]";
	MapKey=EditorMap;
	BiomeKey=EditorBiomeMap;
	//alert(RosterKey.length);
	//alert(EditationColor);
	ControlKey=JSON.parse(ControlKey);
	let GeneralsList=[Nobody,WhiteGeneral,BlackGeneral,GreyGeneral,IndigoGeneral,GreenGeneral,GrayGeneral,YellowGeneral,BrownGeneral,RedGeneral,BlueGeneral];
	let CommanderList=[Nobody];
	CommanderList[1]=GeneralsList[EditationColor];

	for(let a=1;a<RosterKey.length;a++){
		let canAdd=true; 

		for(b=1;b<CommanderList.length;b++){
			if(RosterKey[a].faction==CommanderList[b].Allegiance){canAdd=false}}; 
			if(canAdd){CommanderList[CommanderList.length]=GeneralsList[RosterKey[a].faction]}
				//alert(CommanderList.length+" "+b);
		};
	let SurviveTimer=parseInt(document.getElementById("SurviveInput").value??77777)??77777;
	let TimeLimit=parseInt(document.getElementById("TimeLimitInput").value??77777)??77777;
	let ConstantsKey={YourFaction:EditationColor,defaultX:0,defaultY:0,Survival:SurviveTimer,TimeLimit:TimeLimit,Capture:[],Defend:[],Defeat:[],Protect:[],Funds:[0,0,0,0,0,0,0,0,0,0,0],Commanders:CommanderList};
	let RegionKey=EditorRegionMap;
	let NodeKeyT=CapitolNodeRegistry;
	let NodeKey=[];
	for(let N=0;N<NodeKeyT.length;N++){for(let R=0;R<NodeKeyT[0].length;R++){if(NodeKeyT[N][R]!=1){NodeKey[NodeKey.length]=NodeKeyT[N][R]}}};
	//alert(typeof(NodeKeyT[0][0]));

	EditorLevel={Map:MapKey, Roster:RosterKey, Constants:ConstantsKey, ControlMap:ControlKey,BiomeMap:BiomeKey,RegionMap:RegionKey,NodeMap:NodeKey,Factions:GenericFactions,Units:CampaignUnits,Terrain:CampaignTerrain};
	
	let canBattle=true;




	if(canBattle){
	document.getElementById('EditorMap').style.visibility='hidden';
	document.getElementById('FactionChosenIndicator').style.visibility='hidden';

		/*
		for(let i=1;i<10;i++){
		for(let j=1;j<10;j++){
			key=document.getElementById("Slot "+i+" X "+j)??0;
			document.getElementById(key).style.visibility="hidden";
			//alert("Slot "+i+" X "+j);
			//if(key!=0){key.remove()};
		}};*/
		



	for(let x=1;x<=10;x++){for(let y=1;y<=10;y++){document.getElementById("Entity "+x+" X "+y).style.visibility='hidden'; document.getElementById("Tile "+x+" X "+y).style.visibility='hidden';document.getElementById("Structure "+x+" X "+y).style.visibility='hidden';document.getElementById("a "+x+" X "+y).style.visibility='hidden';document.getElementById("b "+x+" X "+y).style.visibility='hidden';document.getElementById("c "+x+" X "+y).style.visibility='hidden';document.getElementById("d "+x+" X "+y).style.visibility='hidden';}};
	initializeSpecialBattle(EditorLevel);


	};};
function ToggleBattleflags(){

	FlagMap=[];
	let FlagCell=[];
	for(let x=0;x<Map[0].length;x++){FlagCell[FlagCell.length]=0};
	for(let y=0;y<Map.length;y++){FlagMap[FlagMap.length]=FlagCell};
	FlagMap=JSON.parse(JSON.stringify(FlagMap));

	for(let a=0;a<Constants.Capture.length;a++){FlagMap[Constants.Capture[a].x][Constants.Capture[a].y]=1};
	for(let a=0;a<Constants.Defend.length;a++){FlagMap[Constants.Defend[a].x][Constants.Defend[a].y]=2};
	for(let a=0;a<Constants.Defeat.length;a++){FlagMap[MapRoster[Constants.Defeat[a]].x][MapRoster[Constants.Defeat[a]].y]=3};
	for(let a=0;a<Constants.Protect.length;a++){FlagMap[MapRoster[Constants.Protect[a]].x][MapRoster[Constants.Protect[a]].y]=4};




	if(!FlagsToggled){
	for(let i=StandardX;i<StandardX+10;i++){for(let j=StandardY;j<StandardY+10;j++){
	if(FlagMap[i+StandardX][j+StandardY]!=0){//alert("Chuchu");
	document.getElementById("Flag "+(i-StandardX+1)+"X"+(j-StandardY+1)).style.visibility='visible';
	if(FlagMap[i][j]==1){document.getElementById("Flag "+(i-StandardX+1)+"X"+(j-StandardY+1)).src="Assets/Miscellaneous/CaptureFlag.PNG"};
	if(FlagMap[i][j]==2){document.getElementById("Flag "+(i-StandardX+1)+"X"+(j-StandardY+1)).src="Assets/Miscellaneous/DefendFlag.PNG"};
	if(FlagMap[i][j]==3){document.getElementById("Flag "+(i-StandardX+1)+"X"+(j-StandardY+1)).src="Assets/Miscellaneous/DestroyFlag.PNG"};
	if(FlagMap[i][j]==4){document.getElementById("Flag "+(i-StandardX+1)+"X"+(j-StandardY+1)).src="Assets/Miscellaneous/ProtectFlag.PNG"};
	}

	}};

	};

	if(FlagsToggled){for(let i=StandardX;i<StandardX+10;i++){for(let j=StandardY;j<StandardY+10;j++){document.getElementById("Flag "+(i-StandardX+1)+"X"+(j-StandardY+1)).style.visibility='hidden';}};};

	if(FlagsToggled){FlagsToggled=false}else{FlagsToggled=true};};
//This function is OBSOLETE
function ToggleMoraleBadges(){

				alert("ma-ta");
	BadgeMap=[];
	let BadgeCell=[];
	for(let x=0;x<Map[0].length;x++){BadgeCell[BadgeCell.length]=0};
	for(let y=0;y<Map.length;y++){BadgeMap[BadgeMap.length]=BadgeCell};
	BadgeMap=JSON.parse(JSON.stringify(BadgeMap));

	for(let a=StandardX;a<StandardX+10;a++){for(let b=StandardY;b<StandardY+10;b++){BadgeMap[a-StandardX][b-StandardY]=rostermap[a][b]}};


	if(!BadgesToggled){for(let i=0;i<10;i++){for(let j=0;j<10;j++){
			if(BadgeMap[i][j]!=0){
				let isBewegungskrieg=false;
				let isStealth=false;
				let isCargo=false;
				if(hasCertainTrait(BadgeMap[i][j].unitType,"Bewegungskrieg")){isBewegungskrieg=true};
				if(hasCertainTrait(BadgeMap[i][j].unitType,"Stealth")){isStealth=true};
				if(hasCertainTrait(BadgeMap[i][j].unitType,"Naval Transport") || hasCertainTrait(BadgeMap[i][j].unitType,"Air Transport")){isCargo=true};
				
			document.getElementById("Badge "+(i+1)+"X"+(j+1)).style.visibility="visible";
			document.getElementById("Badge "+(i+1)+"X"+(j+1)).src="Assets/Traits/Morale"+rostermap[i+StandardX][j+StandardY].morale+".PNG";

			if(isBewegungskrieg && !isStealth && !isCargo){
				let Chuchu=document.createElement("img");
				Chuchu.style.position="absolute";
				Chuchu.style.top="21px";
				Chuchu.style.left="21px";
				Chuchu.style.zIndex=5;
				Chuchu.style.width="35px";
				Chuchu.style.height="35px";
				Chuchu.src="Assets/Traits/Bewegungskrieg.PNG";
				Chuchu.id="CargoChuchu "+i+"X"+j;
				Chuchu.style.filter=Factions[0].ChromaCode;
				document.getElementById("Slot "+(i+1)+"X"+(j+1)).appendChild(Chuchu);
				
			};

			if(isStealth && !isCargo){};

			if(isCargo){
				let Chuchu=document.createElement("img");
				Chuchu.style.position="absolute";
				Chuchu.style.top="21px";
				Chuchu.style.left="21px";
				Chuchu.style.zIndex=5;
				Chuchu.style.width="35px";
				Chuchu.style.height="35px";
				Chuchu.src="Assets/Units/Static/"+Units[BadgeMap[i][j].cargo].shortname+"2.PNG";
				Chuchu.id="CargoChuchu "+i+"X"+j;
				Chuchu.style.filter=Factions[PlayerChoiceFaction].ChromaCode;
				document.getElementById("Slot "+(i+1)+"X"+(j+1)).appendChild(Chuchu);


			};

			}}}};

	if(BadgesToggled){for(let i=StandardX;i<StandardX+10;i++){for(let j=StandardY;j<StandardY+10;j++){document.getElementById("Badge "+(i-StandardX+1)+"X"+(j-StandardY+1)).style.visibility='hidden';let cargo=document.getElementById("CargoChuchu "+(i-StandardX+1)+"X"+(j-StandardY+1)); if(cargo??false){cargo.remove()}}};};

	if(BadgesToggled){BadgesToggled=false}else{BadgesToggled=true};};
function ToggleHealthBars(){

	BarMap=[];
	let BarCell=[];
	for(let x=0;x<Map[0].length;x++){BarCell[BarCell.length]=0};
	for(let y=0;y<Map.length;y++){BarMap[BarMap.length]=BarCell};
	BarMap=JSON.parse(JSON.stringify(BarMap));

	for(let a=StandardX;a<StandardX+10;a++){for(let b=StandardY;b<StandardY+10;b++){BarMap[a-StandardX][b-StandardY]=rostermap[a][b]}};

	if(!BarsToggled){
		for(let i=0;i<10;i++){for(let j=0;j<10;j++){
			if(BarMap[i][j]!=0){
				document.getElementById("HPContainer "+(i+1)+"X"+(j+1)).style.visibility="visible";
				document.getElementById("HPBar "+(i+1)+"X"+(j+1)).style.visibility="visible";
				document.getElementById("HPBar "+(i+1)+"X"+(j+1)).style.height="8px";
				document.getElementById("HPBar "+(i+1)+"X"+(j+1)).style.width=39*(rostermap[i+StandardX][j+StandardY].life/Units[rostermap[i+StandardX][j+StandardY].unitType].HP)+"px";
				document.getElementById("HPBar "+(i+1)+"X"+(j+1)).style.filter="brightness("+rostermap[i+StandardX][j+StandardY].life/Units[rostermap[i+StandardX][j+StandardY].unitType].HP+")";
			};
		};
	};
	};





	if(BarsToggled){for(let i=0;i<10;i++){for(let j=0;j<10;j++){
			document.getElementById("HPContainer "+(i+1)+"X"+(j+1)).style.visibility="hidden";
			document.getElementById("HPBar "+(i+1)+"X"+(j+1)).style.visibility="hidden";

		};};


	};

	if(BarsToggled){BarsToggled=false}else{BarsToggled=true};};
function ToggleHealthBar(X,Y){
		let i=X-1;
		let j=Y-1;
			if(rostermap[i][j]!=0){
				document.getElementById("HPContainer "+(i+1)+"X"+(j+1)).style.visibility="visible";
				document.getElementById("HPBar "+(i+1)+"X"+(j+1)).style.visibility="visible";
				document.getElementById("HPBar "+(i+1)+"X"+(j+1)).style.height="8px";
				document.getElementById("HPBar "+(i+1)+"X"+(j+1)).style.width=39*(rostermap[i][j].life/Units[rostermap[i][j].unitType].HP)+"px";
				document.getElementById("HPBar "+(i+1)+"X"+(j+1)).style.filter="brightness("+rostermap[i][j].life/Units[rostermap[i][j].unitType].HP+")";
			};};
function ToggleMoraleBadge(X,Y){
	let i=X-1;
	let j=Y-1;
	if(rostermap[i][j]!=0){
				let isBewegungskrieg=false;
				let isStealth=false;
				let isCargo=false;
				if(hasCertainTrait(rostermap[i][j].unitType,"Bewegungskrieg") && rostermap[i][j].canEncore){isBewegungskrieg=true};
				if(hasCertainTrait(rostermap[i][j].unitType,"Stealth") && rostermap[i][j].isCloaked){isStealth=true};
				if(hasCertainTrait(rostermap[i][j].unitType,"Naval Transport") || hasCertainTrait(rostermap[i][j].unitType,"Air Transport")){isCargo=true};
			if(rostermap[i][j].morale!=0){document.getElementById("Badge "+(i+1)+"X"+(j+1)).style.visibility="visible"};
			document.getElementById("Badge "+(i+1)+"X"+(j+1)).src="Assets/Traits/Morale"+rostermap[i][j].morale+".PNG";

			if(isBewegungskrieg){
				document.getElementById("Cargo "+(i+1)+"X"+(j+1)).style.visibility='visible';
				document.getElementById("Cargo "+(i+1)+"X"+(j+1)).src="Assets/Traits/Bewegungskrieg.PNG";
				document.getElementById("Cargo "+(i+1)+"X"+(j+1)).style.filter="";
			};

			if(isStealth){
				document.getElementById("Cargo "+(i+1)+"X"+(j+1)).style.visibility='visible';
				document.getElementById("Cargo "+(i+1)+"X"+(j+1)).src="Assets/Traits/Stealth.PNG";
				document.getElementById("Cargo "+(i+1)+"X"+(j+1)).style.filter="";
			};

			if(isCargo){
				document.getElementById("Cargo "+(i+1)+"X"+(j+1)).style.visibility='visible';
				document.getElementById("Cargo "+(i+1)+"X"+(j+1)).src="Assets/Units/Static/"+Units[rostermap[i][j].cargo].shortname+"2.PNG";
				document.getElementById("Cargo "+(i+1)+"X"+(j+1)).style.filter=Factions[rostermap[i][j].faction].ChromaCode;

				/*
				let Chuchu=document.createElement("img");
				Chuchu.style.position="absolute";
				Chuchu.style.top="21px";
				Chuchu.style.left="21px";
				Chuchu.style.zIndex=5;
				Chuchu.style.width="35px";
				Chuchu.style.height="35px";
				Chuchu.src="Assets/Units/Static/"+Units[rostermap[i][j].cargo].shortname+"2.PNG";
				Chuchu.id="CargoChuchu "+i+"X"+j;
				Chuchu.style.filter=Factions[PlayerChoiceFaction].ChromaCode;
				document.getElementById("Slot "+(i+1)+"X"+(j+1)).appendChild(Chuchu);*/


			};

			}};
function ToggleOption(Button){
	switch(Button){
		case "Sound": {
			const state = battalion.soundPlayer.toggleMute();

			switch(state) {
				case SoundPlayer.STATE.NONE: {
					document.getElementById("ToggleSound").src="Assets/Miscellaneous/SoundOn.PNG";
					break;
				}
				case SoundPlayer.STATE.MUTED: {
					document.getElementById("ToggleSound").src="Assets/Miscellaneous/SoundOff.PNG";
					break;
				}
			}
			break;
		}
		case "Music": {
			const state = battalion.musicPlayer.toggleMute();

			switch(state) {
				case MusicPlayer.STATE.NONE: {
					document.getElementById("ToggleMusic").src="Assets/Miscellaneous/MusicOn.PNG";
					break;
				}
				case MusicPlayer.STATE.MUTED: {
					document.getElementById("ToggleMusic").src="Assets/Miscellaneous/MusicOff.PNG";
					break;
				}
			}

			break;
		}
		case "Dialogue":
			DialogueChoice= !DialogueChoice;
			if(DialogueChoice){document.getElementById("ToggleDialogue").src="Assets/Miscellaneous/DialogueOn.PNG"}else{document.getElementById("ToggleDialogue").src="Assets/Miscellaneous/DialogueOff.PNG"
			document.getElementById("DialogueBox").style.visibility="hidden";
		};
			break;
		case "IdleAnim":
			IdleAnimChoice= !IdleAnimChoice;
			if(IdleAnimChoice){document.getElementById("ToggleIdleAnimations").src="Assets/Miscellaneous/IdleAnimOn.PNG"}else{document.getElementById("ToggleIdleAnimations").src="Assets/Miscellaneous/IdleAnimOff.PNG"};
			break;
		case "MystSett":
			MystSettChoice= !MystSettChoice;
			let zappy=0;
			if(MystSettChoice){zappy=5; for(let o=61;o<69;o++){CampaignUnits[o].Speed=zappy};document.getElementById("ToggleMysteriousSetting").src="Assets/Miscellaneous/MysteriousSettingOn.PNG";
			document.getElementById("Diff1Text").style.top="30px";
			document.getElementById("Diff2Text").style.top="67px";
			document.getElementById("Diff3Text").style.top="104px";
			document.getElementById("Diff1Text").innerHTML="Justin Bieber";
			document.getElementById("Diff2Text").innerHTML="Keanu Reeves";
			document.getElementById("Diff3Text").innerHTML="Chuck Norris";





		}else{document.getElementById("ToggleMysteriousSetting").src="Assets/Miscellaneous/MysteriousSettingOff.PNG";
			document.getElementById("Diff1Text").style.top="41px";
			document.getElementById("Diff2Text").style.top="78px";
			document.getElementById("Diff3Text").style.top="115px";
			document.getElementById("Diff1Text").innerHTML=Language.SystemTerms[141];
			document.getElementById("Diff2Text").innerHTML=Language.SystemTerms[142];
			document.getElementById("Diff3Text").innerHTML=Language.SystemTerms[143];




				};
			break;

		};};
function ToggleTileBlock(Block){

	if(Block==1){TerrainLedger=TerrainLedger_Biomes};
	if(Block==2){TerrainLedger=TerrainLedger_LandFeatures};
	if(Block==3){TerrainLedger=TerrainLedger_UrbanFeatures};
	if(Block==4){TerrainLedger=TerrainLedger_WaterFeatures};
	if(Block==5){TerrainLedger=TerrainLedger_Connectors};
	if(Block==6){TerrainLedger=TerrainLedger_Structures};
	if(Block==7){TerrainLedger=TerrainLedger_Other};

	for(let t=1; t<=10; t++){document.getElementById("EditorTile"+t).src="Assets/Miscellaneous/Nothing.PNG"};
	for(let e=0; e<TerrainLedger.length; e++){document.getElementById("EditorTile"+(e+1)).src="Assets/Tiles/"+Terrain[TerrainLedger[e]].name+".PNG"; document.getElementById("EditorTile"+(e+1)).style.top=14+e*61+(Terrain[TerrainLedger[e]].StD??0)+"px"};


	};
function Tooltip(Tooltip){
	
	let TooltipFrame=0;
	let TooltipFloat=setInterval(Float,100);
	function Float(){
		TooltipFrame++;

		if(TooltipFrame==5){document.getElementById("GeneralTooltipText").innerHTML=Language.Tooltips[Tooltip]};

		if(TooltipFrame==10){document.getElementById("GeneralTooltip").style.visibility="inherit";};

		if(TooltipFrame==20){document.getElementById("GeneralTooltip").style.visibility="hidden"; clearInterval(TooltipFloat)};
	}};
	
	
function traitDetail(traitIndex,UnitCase){
	//Bag pula-n curul lui Dincă
	document.getElementById("TraitTooltip").style.visibility="visible";

	//alert(document.getElementById("TraitTooltip").style.visibility);
	if(traitIndex==1){traitIndex=HighlightedEntity.tag1};
	if(traitIndex==2){traitIndex=HighlightedEntity.tag2};
	if(traitIndex==3){traitIndex=HighlightedEntity.tag3};
	if(traitIndex==4){traitIndex=HighlightedEntity.tag4};
	switch(traitIndex){
		case "Uneven":
			trait=1;
			break;
		case "Rugged":
			trait=2;
			break;
		case "Precipitous":
			trait=3;
			break;
		case "Impassable":
			trait=4;
			break;
		case "Tricky Waters":
			trait=5;
			break;
		case "Concealment":
			trait=6;
			break;
		case "Naval Concealment":
			trait=7;
			break;		
		case "Bunker":
			trait=8;
			break;
		case "Shallow":
			trait=9;
			break;
		case "Vantage":
			trait=10;
			break;		
		case "Dangerous":
			trait=11;
			break;
		case "Logistic Challenge":
			trait=12;
			break;
		case "Logistic Nightmare":
			trait=13;
			break;
		case "Financial Center":
			trait=14;
			break;
		case "Fiscal Center":
			trait=15;		
			break;
		case "Fiduciary Center":
			trait=16;
			break;




		case "Conqueror":
			trait=17;
			break;
		case "Skysweeper":
			trait=18;
			break;			
		case "Depth Charge":
			trait=19;
			break;
		case "Sonar":
			trait=20;
			break;
		case "Radar":
			trait=21;
			break;
		case "Anti-Infantry":
			trait=22;
			break;
		case "Anti-Tank":
			trait=23;
			break;			
		case "Anti-Air":
			trait=24;
			break;
		case "Anti-Ship":
			trait=25;
			break;
		case "Anti-Structure":
			trait=26;
			break;
		case "Stealth":
			trait=27;
			break;
		case "Submerged":
			trait=28;
			break;			
		case "Commando":
			trait=29;
			break;
		case "Crab":
			trait=30;
			break;
		case "Steer":
			trait=31;
			break;
		case "Indomitable":
			trait=32;
			break;
		case "Schwerpunkt":
			trait=33;
			break;			
		case "Bewegungskrieg":
			trait=34;
			break;
		case "Mobile Battery":
			trait=35;
			break;
		case "Streamlined":
			trait=36;
			break;
		case "Cemented Steel Armor":
			trait=37;
			break;
		case "Cavitation Explosion":
			trait=38;
			break;			
		case "Seabound":
			trait=39;
			break;
		case "Self-Destruct":
			trait=40;
			break;
		case "Dispersion":
			trait=41;
			break;
		case "JUDGEMENT":
			trait=42;
			break;
		case "Supply Distribution":
			trait=43;
			break;
		case "Inertial":
			trait=44;
			break;
		case "Streamblast":
			trait=45;
			break;
		case "Airborne":
			trait=46;
			break;
		case "Heroic":
			trait=47;
			break;
		case "Tank-Hunter":
			trait=48;
			break;
		case "Naval Transport":
			trait=49;
			break;
		case "Air Transport":
			trait=50;
			break;
		case "Unbuilt":
			trait=51;
			break;
		case "Tank Pooper":
			trait=52;
			break;
		case "Absorber":
			trait=53;
			break;			
		case "Terrifying":
			trait=54;
			break;
		case "Lynchpin":
			trait=55;
			break;
		case "Inflaming":
			trait=56;
			break;
		default:
		trait=0;	
	};
	//document.getElementById("TraitTooltip").style.left="400px"; document.getElementById("TraitTooltip").style.top="0px";
	if(UnitCase=='Details'){document.getElementById("TraitTooltip").style.left="400px"; document.getElementById("TraitTooltip").style.top="-35px"};
	if(UnitCase=='Constructor'){document.getElementById("TraitTooltip").style.left="200px"; document.getElementById("TraitTooltip").style.top="-525px"};
	if(Language.TraitDesc[trait].length>65){document.getElementById("TraitTooltipImage").src="Assets/Miscellaneous/TraitTooltipPlus.PNG"}else{document.getElementById("TraitTooltipImage").src="Assets/Miscellaneous/TraitTooltip.PNG"};
	document.getElementById("TraitName").innerHTML=Language.TraitName[trait];
	document.getElementById("TraitDescription").innerHTML=Language.TraitDesc[trait];};
function UndoMove(){
	if((LastMove.ID ?? 0!=0) && !(KillingUnit??false)){
		//alert(LastMove.DIR);
		let exX=MapRoster[LastMove.ID].x;
		let exY=MapRoster[LastMove.ID].y;
		//alert(exX+" "+exY);
		
		MapRoster[LastMove.ID].x=LastMove.X;
		MapRoster[LastMove.ID].y=LastMove.Y;

		let temp="Entity "+(LastMove.X+1)+"X"+(LastMove.Y+1);
		let tempcore="EntityCore "+(LastMove.X+1)+"X"+(LastMove.Y+1);
		let tempmesh="EntityMesh "+(LastMove.X+1)+"X"+(LastMove.Y+1);;
		//console.log(document.getElementById(temp).style.visibility);
		document.getElementById("Marker "+(LastMove.X+1)+"X"+(LastMove.Y+1)).style.visibility="visible";
		document.getElementById(temp).style.visibility="visible";
		document.getElementById(tempcore).style.filter=Factions[MapRoster[LastMove.ID].faction].ChromaCode;
		if(LastMove.cloak??false){document.getElementById(temp).style.filter="opacity(50%)";MapRoster[LastMove.ID].isCloaked=true};
		if(LastMove.encore??false){MapRoster[LastMove.ID].canEncore=true};
		//alert(rostermap[exX][exY]);
		//alert(AdjacentCloakers);
		if(Units[MapRoster[LastMove.ID].unitType].MaxRange==1 && (LastMove.encore??false)){document.getElementById("Marker "+(exX+1)+"X"+(exY+1)).style.visibility="hidden"};
		for(let a=0;a<AdjacentCloakers.length;a++){
			//the last part of the 1-directional might have something to do with uncloaking allies, but that never happens. Maybe it was once an issue but not anymore?
			if(AdjacentCloakers[a]==1){document.getElementById("Entity "+(exX)+"X"+(exY+1)).style.filter="opacity(0%)"; MapRoster[rostermap[exX-1][exY].index].isCloaked=true; if(rostermap[exX-1][exY].coallition==Factions[PlayerChoiceFaction].faction){document.getElementById("Entity "+(exX)+"X"+(exY+1)).style.filter="opacity(50%)"}};
			if(AdjacentCloakers[a]==2){document.getElementById("Entity "+(exX+1)+"X"+(exY+2)).style.filter="opacity(0%)"; MapRoster[rostermap[exX][exY+1].index].isCloaked=true};
			if(AdjacentCloakers[a]==3){document.getElementById("Entity "+(exX+2)+"X"+(exY+1)).style.filter="opacity(0%)"; MapRoster[rostermap[exX+1][exY].index].isCloaked=true};
			if(AdjacentCloakers[a]==4){document.getElementById("Entity "+(exX+1)+"X"+(exY)).style.filter="opacity(0%)"; MapRoster[rostermap[exX][exY-1].index].isCloaked=true};

		};
		//document.getElementById(temp).src="Assets/Units/Static/"+Units[MapRoster[LastMove.ID].unitType].shortname+MapRoster[LastMove.ID].direction+".PNG";
		//document.getElementById(temp).style.top=(Units[MapRoster[LastMove.ID].unitType].StaticOffsetY ?? [0,0,0,0,0])[MapRoster[LastMove.ID].direction]+"px";
		//document.getElementById(temp).style.left=(Units[MapRoster[LastMove.ID].unitType].StaticOffsetX ?? [0,0,0,0,0])[MapRoster[LastMove.ID].direction]+"px";
		document.getElementById(temp).src="Assets/Units/Static/"+Units[MapRoster[LastMove.ID].unitType].shortname+LastMove.DIR+".PNG";
		document.getElementById(temp).style.top=(Units[MapRoster[LastMove.ID].unitType].StaticOffsetY ?? [0,0,0,0,0])[LastMove.DIR]+"px";
		document.getElementById(temp).style.left=(Units[MapRoster[LastMove.ID].unitType].StaticOffsetX ?? [0,0,0,0,0])[LastMove.DIR]+"px";
		if(!Units[MapRoster[LastMove.ID].unitType].MLPR??false){document.getElementById(tempmesh).src="Assets/Units/StaticMeshes/"+Units[MapRoster[LastMove.ID].unitType].shortname+"Mesh"+LastMove.DIR+".PNG"}else{document.getElementById(tempmesh).style.visibility="hidden";};
		rostermap[LastMove.X][LastMove.Y]=MapRoster[LastMove.ID];
		rostermap[LastMove.X][LastMove.Y].x=LastMove.X;
		rostermap[LastMove.X][LastMove.Y].y=LastMove.Y;
		rostermap[LastMove.X][LastMove.Y].direction=LastMove.DIR;

		//rostermap[LastMove.X][LastMove.Y]=rostermap[exX][exY];
		//console.log(rostermap[LastMove.X][LastMove.Y]);
		//console.log(MapRoster[LastMove.ID]);
		if(LastMove.X!=exX || LastMove.Y!=exY){rostermap[exX][exY]=0;
		document.getElementById("Entity "+(exX+1)+"X"+(exY+1)).style.visibility="hidden";
		};
		
		//alert(MapRoster[LastMove.ID].x+" "+MapRoster[LastMove.ID].y);
		//MapRoster[LastMove.EID].x=LastMove.EX;
		//MapRoster[LastMove.EID].y=LastMove.EY;
		if(LastMove.EID ?? 0!=0){
		rostermap[LastMove.EX][LastMove.EY]=LastMove.GRV;		
		MapRoster[LastMove.ID].life=LastMove.HP;
		MapRoster[LastMove.EID].life=LastMove.EHP;
		if(LastMove.E2ID??0!=0){MapRoster[LastMove.E2ID].life=LastMove.E2HP};
		rostermap[LastMove.EX][LastMove.EY].x=LastMove.EX;
		rostermap[LastMove.EX][LastMove.EY].y=LastMove.EY;
		if(LastMove.E2ID??0!=0){rostermap[LastMove.E2X][LastMove.E2Y]=LastMove.GRV2;rostermap[LastMove.E2X][LastMove.E2Y].x=LastMove.E2X; rostermap[LastMove.E2X][LastMove.E2Y].y=LastMove.E2Y};
		//alert(LastMove.E2ID);
		document.getElementById("EntityCore "+(LastMove.EX+1)+"X"+(LastMove.EY+1)).src="Assets/Units/Static/"+Units[LastMove.GRV.unitType].shortname+LastMove.GRV.direction+".PNG";
		document.getElementById("EntityCore "+(LastMove.EX+1)+"X"+(LastMove.EY+1)).style.visibility="inherit";
		document.getElementById("EntityCore "+(LastMove.EX+1)+"X"+(LastMove.EY+1)).style.top="0px";
		if(!Units[LastMove.GRV.unitType].MLPR??false){document.getElementById("EntityMesh "+(LastMove.EX+1)+"X"+(LastMove.EY+1)).src="Assets/Units/StaticMeshes/"+Units[LastMove.GRV.unitType].shortname+"Mesh"+LastMove.GRV.direction+".PNG"}else{document.getElementById("EntityMesh "+(LastMove.EX+1)+"X"+(LastMove.EY+1)).style.visibility="hidden";};
		document.getElementById("Entity "+(LastMove.EX+1)+"X"+(LastMove.EY+1)).style.top=(Units[LastMove.GRV.unitType].StaticOffsetY ?? [0,0,0,0,0])[LastMove.GRV.direction]+"px";
		document.getElementById("Entity "+(LastMove.EX+1)+"X"+(LastMove.EY+1)).style.left=(Units[LastMove.GRV.unitType].StaticOffsetX ?? [0,0,0,0,0])[LastMove.GRV.direction]+"px";
		document.getElementById("Entity "+(LastMove.EX+1)+"X"+(LastMove.EY+1)).style.visibility="visible"

		if(LastMove.E2ID??0!=0){document.getElementById("EntityCore "+(LastMove.E2X+1)+"X"+(LastMove.E2Y+1)).src="Assets/Units/Static/"+Units[LastMove.GRV2.unitType].shortname+LastMove.GRV2.direction+".PNG";
		document.getElementById("EntityCore "+(LastMove.E2X+1)+"X"+(LastMove.E2Y+1)).style.visibility="inherit";
		document.getElementById("EntityCore "+(LastMove.E2X+1)+"X"+(LastMove.E2Y+1)).style.top="0px";
		if(!Units[LastMove.GRV2.unitType].MLPR??false){document.getElementById("EntityMesh "+(LastMove.E2X+1)+"X"+(LastMove.E2Y+1)).src="Assets/Units/StaticMeshes/"+Units[LastMove.GRV.unitType].shortname+"Mesh"+LastMove.GRV2.direction+".PNG"}else{document.getElementById("EntityMesh "+(LastMove.E2X+1)+"X"+(LastMove.E2Y+1)).style.visibility="hidden";};
		document.getElementById("Entity "+(LastMove.E2X+1)+"X"+(LastMove.E2Y+1)).style.top=(Units[LastMove.GRV2.unitType].StaticOffsetY ?? [0,0,0,0,0])[LastMove.GRV2.direction]+"px";
		document.getElementById("Entity "+(LastMove.E2X+1)+"X"+(LastMove.E2Y+1)).style.left=(Units[LastMove.GRV2.unitType].StaticOffsetX ?? [0,0,0,0,0])[LastMove.GRV2.direction]+"px";
		document.getElementById("Entity "+(LastMove.E2X+1)+"X"+(LastMove.E2Y+1)).style.visibility="visible"
		};};

		LastMove={ID:0, X:0, Y:0, HP:0, MOR:0, EID:0, EX:0, EY:0, EHP:0, EMOR:0, GRV:0, E2ID:0, E2X:0, E2Y:0, E2HP:0, E2MOR:0, GRV2:0, hasEngaged:false};

		
		refreshMap();


	}else{
		let KillMessage="Undo button only records one unit's action";
		if(KillingUnit??false){KillMessage="Cannot undo yet. Wait a bit"};
		alert(KillMessage);


	};};
function UnitLost(index){
	battalion.soundPlayer.playSound("Unit_Lost");

	KillingUnit=true;

	let castTime=setInterval(Act,35);
	let frame=0;
	let animation=true;
	//if(MapRoster[index].x<StandardX || MapRoster[index].y<StandardY || MapRoster[index].x>StandardX+9 || MapRoster[index].y>StandardY+9){animation=false};
	//alert(unit.x);
	//alert(MapRoster[index].x);
	document.getElementById("EntityMesh "+(MapRoster[index].x+1)+"X"+(MapRoster[index].y+1)).style.visibility="hidden";
	let UnitID="EntityCore "+(MapRoster[index].x+1)+"X"+(MapRoster[index].y+1);
	let MarkerID="Marker "+(MapRoster[index].x+1)+"X"+(MapRoster[index].y+1);
	let FlagID="Flag "+(MapRoster[index].x+1)+"X"+(MapRoster[index].y+1);
	rostermap[MapRoster[index].x][MapRoster[index].y]=0;


	function Act(){

	//var top="0px";
	//var right=frame*56+"px";
	//var bottom="96px";
	//var left=(frame-1)*56+"px";
	//var offsetlat=MapRoster[index].x*56-40+"px";
	//var offsetlong=(MapRoster[index].y-frame+1)*56+"px";
	//coord="rect("+top+","+right+","+bottom+","+left+")";
	
	
	
	//document.getElementById(UnitID).style.clip=coord;
	if(frame==0 && animation){
	document.getElementById(UnitID).src="Assets/Units/UnitLost.GIF";
	document.getElementById(UnitID).style.top="-40px";
	document.getElementById(UnitID).style.left="0px";
	document.getElementById(UnitID).style.zIndex=3;};
	
	frame++;

	


	if(frame==13 && animation){clearInterval(castTime);
	document.getElementById(UnitID).src="";
	KillingUnit=false;
	//document.getElementById(UnitID).style.top=MapRoster[index].x*56+"px";	
	//document.getElementById(UnitID).style.left=MapRoster[index].y*56+"px";
	//document.getElementById(UnitID).style.clip="auto";
	document.getElementById(UnitID).style.visibility="hidden";
	document.getElementById(MarkerID).style.visibility="hidden";
	let localFlag=0;
	if(TileFlagMap[MapRoster[index].x][MapRoster[index].y]==1){localFlag=1};
	if(TileFlagMap[MapRoster[index].x][MapRoster[index].y]==2){localFlag=2};
	if(localFlag==0){document.getElementById(FlagID).style.visibility="hidden";};
	if(localFlag==1){document.getElementById(FlagID).src="Assets/Miscellaneous/CaptureFlag.PNG"};
	if(localFlag==2){document.getElementById(FlagID).src="Assets/Miscellaneous/DefendFlag.PNG"};
	//document.getElementById(UnitID).parentNode.removeChild(document.getElementById(UnitID));
	
	//MapRoster.splice(index,1);
	};
	};};
function UnitTarget(UnitType,X,Y){};
function UnmontreUnit(Index){
		document.getElementById('UnitMontre'+Index).src='Assets/Units/Static/'+Units[Index].shortname+'3.PNG'; 
		if(!Units[Index].MLPR??false){document.getElementById('UnitMontre'+Index+'Mesh').src='Assets/Units/StaticMeshes/'+Units[Index].shortname+'Mesh3.PNG'}else{document.getElementById('UnitMontre'+Index+'Mesh').src='Assets/Miscellaneous/Nothing.PNG'};

	};
function WBLARG(X,Y){

	//alert(X+" "+Y);
	//alert(ChosenUnit.ics+" "+ChosenUnit.igrec);
	if(BLARG.length>1){if(BLARG[BLARG.length-2].X==X+StandardX-1 && BLARG[BLARG.length-2].Y==Y+StandardY-1){
		document.getElementById("BLARG "+(BLARG[BLARG.length-1].X-StandardX+1)+"X"+(BLARG[BLARG.length-1].Y-StandardY+1)).src="Assets/Miscellaneous/Nothing.PNG";
		BLARG.pop();
		let type="";
		let axel=BLARG[BLARG.length-1];
		let aXel=BLARG[BLARG.length-2]??null;
		let axelX=axel.X-StandardX+1;
		let axelY=axel.Y-StandardY+1;
		let BLARGlet="";

		//alert(BLARG.length);
		if(BLARG.length>1){
		if(aXel.X>axel.X){type=1};
		if(aXel.Y<axel.Y){type=2};
		if(aXel.X<axel.X){type=3};
		if(aXel.Y>axel.Y){type=4};

		BLARGlet="Target"+type;
			}else{BLARGlet="Singularity"};


		//if(BLARG[BLARG.length-1].X-StandardX+1==ChosenUnit.X && BLARG[BLARG.length-1].Y-StandardY+1==ChosenUnit.Y){BLARGlet="Singularity"};
		document.getElementById("BLARG "+axelX+"X"+axelY).src="Assets/BLARG/"+BLARGlet+".PNG";

	//console.log(BLARG.length);
	}};};
function wipeMap(){
	for(let i=1;i<=Map.length;i++){
		for(let j=1;j<=Map[0].length;j++){
		//document.getElementById("A "+i+ " X " +j).remove();
		//document.getElementById("B "+i+ " X " +j).remove();
		//document.getElementById("C "+i+ " X " +j).remove();
		//document.getElementById("D "+i+ " X " +j).remove();
		//document.getElementById("Tile"+i+"X"+j).src="Assets/Miscellaneous/Nothing.PNG";
		//document.getElementById("Entity"+i+"X"+j).src="Assets/Miscellaneous/Nothing.PNG";
			let Voider=document.getElementById("Slot "+i+"X"+j);
			if(Voider!=null){Voider.remove();};
		}}};

/*function drawMap(Map)
	{

	for(i=0;i<Map.length;i++){
	for(j=0;j<Map.length;j++){

	if(Map[i][j]==1){
		var type= Math.ceil(Math.random()*8);
		variant= "Assets/Tiles/Plains"+type+".png";
		drawTile('Battlemap', variant, i*56, j*56, 1);};

	if(Map[i][j]==2){
		var type= Math.ceil(Math.random()*4);
		var offset=0
		if(type==2){offset = 4;};
		if(type==3){offset = 3;};
		if(type==4){offset = 12;};
		variant= "Assets/Tiles/Forest"+type+".png";
		drawTile('Battlemap', variant, i*56-offset, j*56, 2);}

	if(Map[i][j]==3){
		var type= Math.ceil(Math.random()*4);
		var offset=0
		if(type==3){offset = 4;};
		if(type==4){offset = 5;};
		variant= "Assets/Tiles/Hills"+type+".png";
		drawTile('Battlemap', variant, i*56-offset, j*56, 3);}

	if(Map[i][j]==4){
		var type= Math.ceil(Math.random()*4);
		var offset=0
		if(type==2){offset = 4;};
		if(type==3){offset = 9;};
		if(type==4){offset = 10;};
		variant= "Assets/Tiles/Mountains"+type+".png";
		drawTile('Battlemap', variant, i*56-offset, j*56, 4);}

	if(Map[i][j]==5){
		var offset=8
		drawTile('Battlemap', "Assets/Tiles/Volcano.png", i*56-offset, j*56, 5);}

	if(Map[i][j]==6){};

	if(Map[i][j]==7){
		var index= 0;
		if(Map[i-1][j]==7 || Map[i-1][j]==8 || Map[i-1][j]==9){index+=1};
		if(Map[i][j+1]==7 || Map[i][j+1]==8 || Map[i][j+1]==9){index+=2};
		if(Map[i+1][j]==7 || Map[i+1][j]==8 || Map[i+1][j]==9){index+=4};
		if(Map[i][j-1]==7 || Map[i][j-1]==8 || Map[i][j-1]==9){index+=8};
		var source = "Assets/Tiles/Road"+index+".png";
		drawTile('Battlemap', source , i*56, j*56, 7);};

	if(Map[i][j]==8){
		var stature ="V";
		if(Map[i-1][j]==10 || Map[i-1][j]==16) {if(Map[i+1][j]==10 || Map[i+1][j]==16){stature="H"};};
		var standard=0;
		if(stature=="V"){
		if(Map[i][j-1]==10 || Map[i][j-1]==16){standard+=1};
		if(Map[i][j-1]==10 || Map[i][j-1]==16){standard+=2};
		}else{
		if(Map[i-1][j]==10 || Map[i-1][j]==16){standard+=1};
		if(Map[i+1][j]==10 || Map[i+1][j]==16){standard+=2};
		};
		var source = "Assets/Tiles/Bridge"+stature+standard+".png";
		drawTile('Battlemap', source , i*56, j*56, 8);};

	if(Map[i][j]==9){
		var stature ="V";
		if(Map[i-1][j]==10 || Map[i-1][j]==16) {if(Map[i+1][j]==10 || Map[i+1][j]==16){stature="H"};};
		var standard=0;
		if(stature=="V"){
		if(Map[i][j-1]==10 || Map[i][j-1]==16){standard+=1};
		if(Map[i][j-1]==10 || Map[i][j-1]==16){standard+=2};
		}else{
		if(Map[i-1][j]==10 || Map[i-1][j]==16){standard+=1};
		if(Map[i+1][j]==10 || Map[i+1][j]==16){standard+=2};};

		var source = "Assets/Tiles/HighBridge"+stature+standard+".png";
		drawTile('Battlemap', source , i*56, j*56, 9);};

	if(Map[i][j]==10){
		var index= 0;
		if(Map[i-1][j]>=8){index+=1};
		if(Map[i][j+1]>=8){index+=2};
		if(Map[i+1][j]>=8){index+=4};
		if(Map[i][j-1]>=8){index+=8};
		var source = "Assets/Tiles/River"+index+".png";
		drawTile('Battlemap', source , i*56, j*56, 10);};

	if(Map[i][j]==11){

		minI=Math.max(i,1);
		minJ=Math.max(j,1);
		maxI=Math.min(Map.length-2,i);
		maxJ=Math.min(Map[0].length-2,j);
		var index= 0;


		if(Map[minI-1][j]>=8){index+=1};
		if(Map[i][maxJ+1]>=8){index+=2};
		if(Map[maxI+1][j]>=8){index+=4};
		if(Map[i][minJ-1]>=8){index+=8};

		var source = "Assets/Tiles/Sea"+index+".png";
		drawTile('Battlemap', source , i*56, j*56, 11);
		if(index==3 && Map[minI-1][maxJ+1]<8){drawTile('Battlemap', "Assets/Tiles/EdgeB.png" , i*56, j*56+39);};
		if(index==6 && Map[maxI+1][maxJ+1]<8){drawTile('Battlemap', "Assets/Tiles/EdgeD.png" , i*56+51, j*56+42);};
		if(index==9 && Map[minI-1][minJ-1]<8){drawTile('Battlemap', "Assets/Tiles/EdgeA.png" , i*56, j*56);};
		if(index==12 && Map[maxI+1][minJ-1]<8){drawTile('Battlemap', "Assets/Tiles/EdgeC.png" , i*56+49, j*56);};
		if(index==7 && Map[minI-1][maxJ+1]<8){drawTile('Battlemap', "Assets/Tiles/EdgeB.png" , i*56, j*56+39);};
		if(index==7 && Map[maxI+1][maxJ+1]<8){drawTile('Battlemap', "Assets/Tiles/EdgeD.png" , i*56+51, j*56+42);};
		if(index==11 && Map[minI-1][maxJ+1]<8){drawTile('Battlemap', "Assets/Tiles/EdgeB.png" , i*56, j*56+39);};
		if(index==11 && Map[minI-1][minJ-1]<8){drawTile('Battlemap', "Assets/Tiles/EdgeA.png" , i*56, j*56);};
		if(index==13 && Map[minI-1][minJ-1]<8){drawTile('Battlemap', "Assets/Tiles/EdgeA.png" , i*56, j*56);};
		if(index==13 && Map[maxI+1][minJ-1]<8){drawTile('Battlemap', "Assets/Tiles/EdgeC.png" , i*56+49, j*56);};
		if(index==14 && Map[maxI+1][maxJ+1]<8){drawTile('Battlemap', "Assets/Tiles/EdgeD.png" , i*56+51, j*56+42);};
		if(index==14 && Map[maxI+1][minJ-1]<8){drawTile('Battlemap', "Assets/Tiles/EdgeC.png" , i*56+49, j*56);};
		if(index==15 && Map[minI-1][maxJ+1]<8){drawTile('Battlemap', "Assets/Tiles/EdgeB.png" , i*56, j*56+39);};
		if(index==15 && Map[maxI+1][maxJ+1]<8){drawTile('Battlemap', "Assets/Tiles/EdgeD.png" , i*56+51, j*56+42);};
		if(index==15 && Map[minI-1][minJ-1]<8){drawTile('Battlemap', "Assets/Tiles/EdgeA.png" , i*56, j*56);};
		if(index==15 && Map[maxI+1][minJ-1]<8){drawTile('Battlemap', "Assets/Tiles/EdgeC.png" , i*56+49, j*56);};




		};

	if(Map[i][j]==12){
		var type= Math.ceil(Math.random()*4);
		var offset=0
		variant= "Assets/Tiles/Reef"+type+".png";
		drawTile('Battlemap', variant, i*56-offset, j*56, 12);};

	if(Map[i][j]==13){
		var type= Math.ceil(Math.random()*4);
		var offset=0
		variant= "Assets/Tiles/Archipelago"+type+".png";
		drawTile('Battlemap', variant, i*56-offset, j*56, 13);};

	if(Map[i][j]==14){
		var type= Math.ceil(Math.random()*4);
		var offset=0
		variant= "Assets/Tiles/Rocks"+type+".png";
		drawTile('Battlemap', variant, i*56-offset, j*56, 14);};

	if(Map[i][j]==15){
		var index= 0;
		if(Map[i-1][j]<8){index+=1};
		if(Map[i][j+1]<8){index+=2};
		if(Map[i+1][j]<8){index+=4};
		if(Map[i][j-1]<8){index+=8};
		var source = "Assets/Tiles/Shore"+index+".png";
		drawTile('Battlemap', source , i*56, j*56, 15);};

	if(Map[i][j]==16){
		var index=0;

		if(i==0 || i==Map.length-1){index=5;};
		if(j==0 || j==Map.length-1){index=10;};
		var source = "Assets/Tiles/River"+index+".png";
		drawTile('Battlemap', source , i*56, j*56, 16);};

	if(Map[i][j]==17){};



	};
	};};*/

function ClearEndScreen(){};
function InterfaceFuck(){};
function InterfaceUnfuck(){};

SoundChoice=true;
MusicChoice=true;
DialogueChoice=false;
IdleAnimChoice=false;
MystSettChoice=false;

//CallPreloader();
//GeneralInitializer();

//castMap();


//document.getElementById('EditorP1').oncontextmenu=function(){EditorMap=Kaula;RefreshMapEditor()};
//document.getElementById("Main Menu").style.visibility="hidden";initializeBattle(1,1,1);
//document.getElementById("Main Menu").style.visibility="hidden";initializeSpecialBattle(TutorialLevel3);
//document.getElementById("Main Menu").style.visibility="hidden";initializeSpecialBattle(Samara); 
//MusicChoice=true;PlayBGM(33);

//This protocol shall disable MapEditor paraphernalia and allow the pilfering of a giant(14000*5600) map, later to be shrunk to 1400*560.

/*
Mainscreen=Math.ceil(Math.random()*9);
if(Mainscreen==1){document.getElementById("Main Menu Picture").src="Assets/MainMenuScreens/Relampago.JPG"};
if(Mainscreen==2){document.getElementById("Main Menu Picture").src="Assets/MainMenuScreens/Backdrop ETHA.JPG"};
if(Mainscreen==3){document.getElementById("Main Menu Picture").src="Assets/MainMenuScreens/Vladov's Last Charge.PNG"};
if(Mainscreen==4){document.getElementById("Main Menu Picture").src="Assets/MainMenuScreens/BackdropProvisory.PNG"};
if(Mainscreen==5){document.getElementById("Main Menu Picture").src="Assets/MainMenuScreens/Continental Security League.PNG"};
if(Mainscreen==6){document.getElementById("Main Menu Picture").src="Assets/MainMenuScreens/Battle of Vardar.JPG"};
if(Mainscreen==7){document.getElementById("Main Menu Picture").src="Assets/MainMenuScreens/Battle of Burluk.JPG"};
if(Mainscreen==8){document.getElementById("Main Menu Picture").src="Assets/MainMenuScreens/Stulpikan Pandur.PNG"};
if(Mainscreen==9){document.getElementById("Main Menu Picture").src="Assets/MainMenuScreens/Coloured Tanks.JPG"};*/
document.getElementById("Main Menu Picture").src="Assets/MainMenuScreens/Coloured Tanks.JPG";

//SaveGame();

//Inspection(0,MohConstants,MohRoster);