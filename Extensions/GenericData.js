const TERRAIN = [
	{name: "", passThrough: true, flyThrough: true, sailThrough: false, src:"", traverseFactor:1, protectionFactor:1,Variants:8,Offsets:[0,0,0,0,0,0,0,0]}, 

	//1-5

	{name: "Plains", WalkThrough: 1, DriveThrough: 1.2, RollThrough: 1.2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:1, protectionFactor:1,Urbanistics:0,Constructible:true,tag1:"Uneven",tag2:"",tag3:"",tag4:"", Class:"LF",BiomeIndex:1,Variants:8,Offsets:[0,0,0,0,0,0,0,0]},
	{name: "Forest", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:1.5, protectionFactor:0.8,Urbanistics:0,Constructible:true,tag1:"Rugged",tag2:"Concealment",tag3:"",tag4:"", Class:"LF",Variants:4,Offsets:[0,-4,-3,-12],StD:0},
	{name: "Hills", WalkThrough: 1.5, DriveThrough: 1.5, RollThrough: 1.5, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:1.5, protectionFactor:0.8,Urbanistics:0,Constructible:true,tag1:"Rugged",tag2:"Concealment",tag3:"Vantage",tag4:"", Class:"LF",Variants:4,Offsets:[0,0,-4,-5],StD:0},
	{name: "Mountains", WalkThrough: 2, DriveThrough: 3, RollThrough: 5, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:0.6,Urbanistics:0,Constructible:false,tag1:"Precipitous",tag2:"Bunker",tag3:"Vantage",tag4:"", Class:"LF",Variants:4,Offsets:[0,-4,-9,-10],StD:-9},	
	{name: "Megamountains", WalkThrough: 5, DriveThrough: 100, RollThrough: 100, FlyThrough: 100, SailThrough: 100, DeepSailThrough:100, WadeThrough:100, protectionFactor:0.4,Urbanistics:0,Constructible:false,tag1:"Impassable",tag2:"",tag3:"",tag4:"", Class:"LF",Variants:2,Offsets:[-21,-21,-21,-21],StD:-21},

	//6-14

	{name: "Road", WalkThrough: 1, DriveThrough: 1, RollThrough: 1, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:1, protectionFactor:1,Urbanistics:1,Constructible:true,tag1:"",tag2:"",tag3:"",tag4:"", Class:"LA"},
	{name: "Ruins", WalkThrough: 2, DriveThrough: 3, RollThrough: 3, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:0.8,Urbanistics:1,Constructible:true,tag1:"Rugged",tag2:"",tag3:"",tag4:"", Class:"LF",Variants:2,Offsets:[-14,-14,-14,-14],StD:-14},
	{name: "Urban District", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:0.8,Urbanistics:1,Constructible:true,revenue:0,tag1:"Rugged",tag2:"",tag3:"",tag4:"", Class:"LF",Variants:4,Offsets:[-14,-14,-14,-14],StD:-14},
	{name: "Industrial District", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:1,Urbanistics:2,Constructible:true,revenue:200,tag1:"Fiscal Center",tag2:"",tag3:"",tag4:"", Class:"S", StD:-10},
	{name: "Military-Industrial Complex", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:1,Urbanistics:3,Constructible:false,tag1:"",tag2:"",tag3:"",tag4:"", Class:"S", StD:-8},
	{name: "Aviation Industrial Facility", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:1,Urbanistics:3,Constructible:false,tag1:"",tag2:"",tag3:"",tag4:"", Class:"S", StD:-14},
	{name: "Shipbuilding Facility", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:1,Urbanistics:3,Constructible:false,tag1:"",tag2:"",tag3:"",tag4:"", Class:"S", StD:-14},
	{name: "Headquarters", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:0.5,Urbanistics:4,Constructible:true,revenue:100,tag1:"Financial Center",tag2:"",tag3:"",tag4:"", Class:"S", StD:0},
	{name: "Command Center", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:0.5,Urbanistics:5,Constructible:true,revenue:300,tag1:"Fiduciary Center",tag2:"",tag3:"",tag4:"", Class:"S", StD:-18},

	//15-19

	{name: "Taiga", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:0.8,logisticFactor:0.8,Urbanistics:0,Constructible:true,tag1:"Rugged",tag2:"Concealment",tag3:"",tag4:"", Class:"LF",BiomeIndex:3,Variants:4,Offsets:[0,-4,-3,-12]},
	{name: "Desert", WalkThrough: 1, DriveThrough: 1.2, RollThrough: 1.2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:1, protectionFactor:1,logisticFactor:0.8,Urbanistics:0,Constructible:true,tag1:"Uneven",tag2:"",tag3:"",tag4:"", Class:"LF",BiomeIndex:2,Variants:3,Offsets:[0,0,0,0,0,0,0,0]},
	{name: "Tundra", WalkThrough: 1, DriveThrough: 1.2, RollThrough: 1.2, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:1, protectionFactor:0.8,logisticFactor:0.8,Urbanistics:0,Constructible:true,tag1:"Uneven",tag2:"",tag3:"",tag4:"", Class:"LF",BiomeIndex:3,Variants:8,Offsets:[0,0,0,0,0,0,0,0]},
	{name: "Extreme Desert", WalkThrough: 2, DriveThrough: 5, RollThrough: 3, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:5, protectionFactor:1,logisticFactor:0.6,Urbanistics:0,Constructible:true,tag1:"",tag2:"",tag3:"",tag4:"", Class:"LF",BiomeIndex:4,Variants:3,Offsets:[0,0,0,0,0,0,0,0]},
	{name: "Arctic Hellhole", WalkThrough: 2, DriveThrough: 5, RollThrough: 3, FlyThrough: 2, SailThrough: 100, DeepSailThrough:100, WadeThrough:5, protectionFactor:1,logisticFactor:0.6,Urbanistics:0,Constructible:true,tag1:"",tag2:"",tag3:"",tag4:"", Class:"LF",BiomeIndex:5,Variants:8,Offsets:[0,0,0,0,0,0,0,0]},

	//20-21


	{name: "Bridge", WalkThrough: 1, DriveThrough: 1, RollThrough: 1, FlyThrough: 1, SailThrough: 50, DeepSailThrough:50, WadeThrough:1, protectionFactor:1,Urbanistics:1,Constructible:true,tag1:"",tag2:"",tag3:"",tag4:"", Class:"MC"},
	{name: "High Bridge", WalkThrough: 1, DriveThrough: 1, RollThrough: 1, FlyThrough: 1, SailThrough: 1, DeepSailThrough:2, WadeThrough:1, protectionFactor:1,Urbanistics:1,Constructible:true,tag1:"",tag2:"",tag3:"",tag4:"", Class:"MC"},

	//22-30

	{name: "River", WalkThrough: 100, DriveThrough: 100, RollThrough: 100, FlyThrough: 1, SailThrough: 1, DeepSailThrough:100, WadeThrough:3, protectionFactor:1.4,Urbanistics:0,Constructible:false,tag1:"Shallow",tag2:"",tag3:"",tag4:"", Class:"WA"},
	{name: "Sea", WalkThrough: 100, DriveThrough: 100, RollThrough: 100, FlyThrough: 1, SailThrough: 1, DeepSailThrough:1, WadeThrough:100, protectionFactor:1,Urbanistics:0,Constructible:false,tag1:"",tag2:"",tag3:"",tag4:"", Class:"WE"},
	{name: "Reef", WalkThrough: 100, DriveThrough: 100, RollThrough: 100, FlyThrough: 1, SailThrough: 1.2, DeepSailThrough:2, WadeThrough:100, protectionFactor:0.8,Urbanistics:0,Constructible:false,tag1:"Tricky Waters",tag2:"Naval Concealment",tag3:"",tag4:"", Class:"WF",Variants:4,Offsets:[0,0,0,0]},
	{name: "Floes", WalkThrough: 100, DriveThrough: 100, RollThrough: 100, FlyThrough: 1, SailThrough: 2, DeepSailThrough:1.25, WadeThrough:100, protectionFactor:0.8,Urbanistics:0,Constructible:false,tag1:"Tricky Waters",tag2:"Naval Concealment",tag3:"",tag4:"", Class:"WF",Variants:4,Offsets:[0,0,0,0]},
	{name: "Archipelago", WalkThrough: 100, DriveThrough: 100, RollThrough: 100, FlyThrough: 1, SailThrough: 1.5, DeepSailThrough:2, WadeThrough:100, protectionFactor:0.6,Urbanistics:0,Constructible:false,tag1:"Tricky Waters",tag2:"Naval Concealment",tag3:"",tag4:"", Class:"WF",Variants:4,Offsets:[0,0,0,0]},
	{name: "Rocks", WalkThrough: 100, DriveThrough: 100, RollThrough: 100, FlyThrough: 1, SailThrough: 1.5, DeepSailThrough:2, WadeThrough:100, protectionFactor:0.6,Urbanistics:0,Constructible:false,tag1:"Bunker",tag2:"Tricky Waters",tag3:"Dangerous",tag4:"", Class:"WF",Variants:4,Offsets:[0,0,0,0]},
	{name: "Icebergs", WalkThrough: 100, DriveThrough: 100, RollThrough: 100, FlyThrough: 1, SailThrough: 1.5, DeepSailThrough:2, WadeThrough:100, protectionFactor:0.6,Urbanistics:0,Constructible:false,tag1:"Bunker",tag2:"Tricky Waters",tag3:"Dangerous",tag4:"", Class:"WF",Variants:4,Offsets:[0,0,0,0]},
	{name: "Shore", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 2, FlyThrough: 1, SailThrough: 1.5, DeepSailThrough:100, WadeThrough:1.5, protectionFactor:1.2,Urbanistics:0,Constructible:true,tag1:"Shallow",tag2:"Uneven",tag3:"",tag4:"", Class:"B"},
	{name: "Oil Rig", WalkThrough: 100, DriveThrough: 100, RollThrough: 100, FlyThrough: 1, SailThrough: 1, DeepSailThrough:1, WadeThrough:100, protectionFactor:1,Urbanistics:2,Constructible:false,revenue:200,tag1:"Fiscal Center",tag2:"",tag3:"",tag4:"", Class:"WS", StD:-9},

	//31-40
	{name: "Marsh", WalkThrough: 1.5, DriveThrough: 2, RollThrough: 3, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:1.2, protectionFactor:0.8,Urbanistics:0,Constructible:false,tag1:"Rugged",tag2:"Concealment",tag3:"",tag4:"", Class:"LF",Variants:3,Offsets:[0,0,0]},
	{name: "Volcano", WalkThrough: 3, DriveThrough: 4, RollThrough: 5, FlyThrough: 2, SailThrough: 100, DeepSailThrough:100, WadeThrough:3, protectionFactor:0.6,Urbanistics:0,Constructible:false,tag1:"Precipitous",tag2:"Vantage",tag3:"Bunker",tag4:"", Class:"LF",Variants:1,Offsets:[-8],StD:-8},
	{name: "Moon", WalkThrough: 2, DriveThrough: 2, RollThrough: 1.5, FlyThrough: 2, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:0.9,Urbanistics:0,Constructible:true,tag1:"Uneven",tag2:"Rugged",tag3:"",tag4:"", Class:"LF",BiomeIndex:6,Variants:4,Offsets:[0,0,0,0]},
	{name: "Mars", WalkThrough: 2, DriveThrough: 2, RollThrough: 1.5, FlyThrough: 2, SailThrough: 100, DeepSailThrough:100, WadeThrough:2, protectionFactor:0.9,Urbanistics:0,Constructible:true,tag1:"Uneven",tag2:"Rugged",tag3:"",tag4:"", Class:"LF",BiomeIndex:7,Variants:4,Offsets:[0,0,0,0]},
	{name: "Cosmos", WalkThrough: 100, DriveThrough: 100, RollThrough: 100, FlyThrough: 4, SailThrough: 100, DeepSailThrough:100, WadeThrough:100, protectionFactor:1,Urbanistics:0,Constructible:false,tag1:"",tag2:"",tag3:"",tag4:"", Class:"WA",Variants:8,Offsets:[0,0,0,0,0,0,0,0]},
	//{name: "Landmines", WalkThrough: 3, DriveThrough: 4, RollThrough: 5, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:3, protectionFactor:0.6,Urbanistics:0,Constructible:false,tag1:"Rugged",tag2:"Concealment",tag3:"",tag4:"", Class:"LF",Variants:4,Offsets:[0,0,0,0]},
	//{name: "Naval Mines", WalkThrough: 3, DriveThrough: 4, RollThrough: 5, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:3, protectionFactor:0.6,Urbanistics:0,Constructible:false,tag1:"Rugged",tag2:"Concealment",tag3:"",tag4:"", Class:"LF",Variants:4,Offsets:[0,0,0,0]},
	//{name: "Railway", WalkThrough: 0.3, DriveThrough: 0.6, RollThrough: 0.5, FlyThrough: 1, SailThrough: 100, DeepSailThrough:100, WadeThrough:0.4, protectionFactor:1,Urbanistics:1,Constructible:true,tag1:"",tag2:"",tag3:"",tag4:"", Class:"LA"},
	//{name: "Canyon"},
	//{name: ""},
	//{name: "RiverSource", WalkThrough: 100, DriveThrough: 100, RollThrough: 100, FlyThrough: 1, SailThrough: 1, DeepSailThrough:100, WadeThrough:2, protectionFactor:100,Urbanistics:0,tag1:"",tag2:"",tag3:"",tag4:""},
];

const BIOMES = [
	{ "name": "", "nominator": "", "logisticIndex": 0, "icon": "Assets/Traits/.png", "edgeA": "Assets/Tiles/EdgeA.png", "edgeB": "Assets/Tiles/EdgeB.png", "edgeC": "Assets/Tiles/EdgeC.png", "edgeD": "Assets/Tiles/EdgeD.png" },
	{ "name": "Temperate", "nominator": "Temperate", "logisticIndex": 1, "icon": "Assets/Traits/Temperate.png", "edgeA": "Assets/Tiles/EdgeA.png", "edgeB": "Assets/Tiles/EdgeB.png", "edgeC": "Assets/Tiles/EdgeC.png", "edgeD": "Assets/Tiles/EdgeD.png" },
	{ "name": "Desert", "nominator": "Arid", "logisticIndex": 0.75, "icon": "Assets/Traits/Arid.png", "edgeA": "Assets/Tiles/EdgeAArid.png", "edgeB": "Assets/Tiles/EdgeBArid.png", "edgeC": "Assets/Tiles/EdgeCArid.png", "edgeD": "Assets/Tiles/EdgeDArid.png" },
	{ "name": "Tundra", "nominator": "Boreal", "logisticIndex": 0.75, "icon": "Assets/Traits/Boreal.png", "edgeA": "Assets/Tiles/EdgeABoreal.png", "edgeB": "Assets/Tiles/EdgeBBoreal.png", "edgeC": "Assets/Tiles/EdgeCBoreal.png", "edgeD": "Assets/Tiles/EdgeDBoreal.png" },
	{ "name": "Extreme Desert", "nominator": "Barren", "logisticIndex": 0.5, "icon": "Assets/Traits/Barren.png", "edgeA": "Assets/Tiles/EdgeABarren.png", "edgeB": "Assets/Tiles/EdgeBBarren.png", "edgeC": "Assets/Tiles/EdgeCBarren.png", "edgeD": "Assets/Tiles/EdgeDBarren.png" },
	{ "name": "Extreme Tundra", "nominator": "Arctic", "logisticIndex": 0.5, "icon": "Assets/Traits/Arctic.png", "edgeA": "Assets/Tiles/EdgeAArctic.png", "edgeB": "Assets/Tiles/EdgeBArctic.png", "edgeC": "Assets/Tiles/EdgeCArctic.png", "edgeD": "Assets/Tiles/EdgeDArctic.png" },
	{ "name": "Lunar", "nominator": "Lunar", "logisticIndex": 0.25, "icon": "Assets/Traits/Lunar.png", "edgeA": "Assets/Tiles/EdgeALunar.png", "edgeB": "Assets/Tiles/EdgeBLunar.png", "edgeC": "Assets/Tiles/EdgeCLunar.png", "edgeD": "Assets/Tiles/EdgeDLunar.png" },
	{ "name": "Martian", "nominator": "Martian", "logisticIndex": 0.25, "icon": "Assets/Traits/Martian.png", "edgeA": "Assets/Tiles/EdgeAMartian.png", "edgeB": "Assets/Tiles/EdgeBMartian.png", "edgeC": "Assets/Tiles/EdgeCMartian.png", "edgeD": "Assets/Tiles/EdgeDMartian.png" },
];

const CampaignFactions = [
	{name:"Null", faction:"Idk, man. Neutrals maybe?", color:"Gray", ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(100%)"},
	{name:"Synarchy of Somertin", powerRanking:"Major Power", faction:"Continental Security League", Access:true , Preffix:"SOM",color:"White",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(250%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false],SpecialTechnology:[true,false,false,false,false],Currency:"Ɬ",ExchangeRate:0.8},
	{name:"Kargit Revolutionary Gosudarstvo", powerRanking:"Major Power", faction:"Glorious Coallition", Access:true , Preffix:"KAR",color:"Black",ChromaCode:"hue-rotate(0deg) saturate(0%) brightness(70%) contrast(125%)",SpecialInfantry:[false,true,false,false,false],SpecialVehicles:[false,true,false,false,false],SpecialTechnology:[false,true,false,false,false],Currency:"Ꞣ",ExchangeRate:1},
	{name:"Commonwealth of Transkal", powerRanking:"Regional Power", faction:"Continental Security League", Access:true , Preffix:"TRK",color:"Grey",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(125%)", SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,true,false,false],SpecialTechnology:[false,true,true,false,false],Currency:"₭",ExchangeRate:2},
	{name:"Polasie People's Federation", powerRanking:"Regional Power", faction:"Glorious Coallition", Access:true , Preffix:"POE",color:"DarkBlue",ChromaCode:"hue-rotate(250deg) saturate(125%) brightness(70%)", SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false],SpecialTechnology:[false,true,false,true,false],Currency:"₽",ExchangeRate:10},
	{name:"Sublime Caliphate of Elam", powerRanking:"Regional Power", faction:"Glorious Coallition", Access:true , Preffix:"ELM",color:"Green",ChromaCode:"hue-rotate(150deg) saturate(100%) brightness(120%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[false,false,false,false,true],SpecialTechnology:[false,true,false,false,true],Currency:"﷼",ExchangeRate:5},
	{name:"Commandment of Somertin Cohorts", faction:"Vladovite Redemptionary Front", Access:false , Preffix:"VLD",color:"Darkslategray",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(70%)",SpecialInfantry:[true,true,false,false,false],SpecialVehicles:[true,true,false,false,false],Currency:"Ꞣ",ExchangeRate:1},
	{name:"United Liberation Front", faction:"Continental Security League", Access:false , Preffix:"SLR",color:"Chartreuse",ChromaCode:"hue-rotate(100deg) saturate(140%) brightness(250%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false],Currency:"Ɬ",ExchangeRate:0.8},
	{name:"Arhus Structuralist Junta", faction:"Glorious Coallition", Access:false,Preffix:"ARH",color:"Brown",ChromaCode:"hue-rotate(50deg) saturate(70%) brightness(100%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,true,false,false],Currency:"₭",ExchangeRate:2},
	{name:"Free Syndicates of Polasie", faction:"L'Internationale", Access:false , Preffix:"SOC",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false],Currency:"₽",ExchangeRate:10},
	{name:"United States of Eagleland", faction:"Continental Security League", Access:false , Preffix:"USE",color:"Blue",ChromaCode:"hue-rotate(250deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[false,false,false,false,true],Currency:"$",ExchangeRate:0.8},
	{name:"Synarchy of Maharlika", powerRanking:"Extracontinental Power", faction:"Continental Security League", Access:false , Preffix:"MAH",color:"Pink",ChromaCode:"hue-rotate(325deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false],Currency:"Ɬ",ExchangeRate:0.8},
	{name:"Albion Empire", powerRanking:"Extracontinental Power", faction:"Albion Commonwealth", Access:false , Preffix:"ALB",color:"Purple",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(250%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false],Currency:"Ɬ",ExchangeRate:0.8},
	{name:"Gyros Republic", powerRanking:"Extracontinental Power", faction:"Continental Security League", Access:false , Preffix:"GYR",color:"Cyan",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(250%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false],Currency:"Ɬ",ExchangeRate:0.8},
	{name:"LKSA", powerRanking:"Extracontinental Power", faction:"Greater East Assyian Co-Prosperity Sphere", Access:false , Preffix:"LKSA",color:"Orange",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(250%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false],Currency:"Ɬ",ExchangeRate:0.8},
	{name:"Akkadian Mahdist Jihadi Front", powerRanking:"Extracontinental Power", faction:"Glorious Coallition", Access:false , Preffix:"JIH",color:"Maroon",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(250%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false],Currency:"Ɬ",ExchangeRate:0.8},
	{name:"Astartian Continental Reclamation Front", faction:"Continental Avengance League", Access:false , Preffix:"ACSF",color:"White", ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(700%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false],Currency:"Z",ExchangeRate:1},
	{name:"Greater Kargian Hegemony"},
	{name:"National Continentalist Unification Army"},
	{name:"Socialist Revolutionary Front"},
	{name:"Generalgouvernement Mazowien"},
	{name:"Polasian Redemptionary Military Governorate"},
	{name:"Transkal Loyalist Liberation Front"},
	{name:"Shallah's Sacrosanct Jihadi Front"},
	{name:"Rayon Unichtozheniya Skalistykhgor"},
	{name:"Pulanskiy Morskoy Consortium"}
];

const ConquestRegions = [
	{name:"null", X:0, Y:0, DeJureOwner:0, DeFactoOwner:0, Population:0, Infrastructure:0, Economy:[], FortificationLevel:0, TechLevel:0, AgriculturalProduce:0, CivilianGoods:0, Hydrocarbons:0, Steel:0, Bauxite:0, RareMetals:0, FissileMaterials:0, Armies:[], Terrain:{Plains:0, Tundra:0, Desert:0, Arctic:0, Hellhole:0, Forests:0, Taiga:0, Hills:0, Mountains:0, Supermountains:0, Urban:0, River:0, RiverAxis:"H", Swamp:0, Sea:0, ArcticWater:0, Islets:0}},
	{name:"null", X:0, Y:0, DeJureOwner:0, DeFactoOwner:0, Population:0, Infrastructure:0, Economy:[], FortificationLevel:0, TechLevel:0, AgriculturalProduce:0, CivilianGoods:0, Hydrocarbons:0, Steel:0, Bauxite:0, RareMetals:0, FissileMaterials:0, Armies:[]},
	{name:"null", X:0, Y:0, DeJureOwner:0, DeFactoOwner:0, Population:0, Infrastructure:0, Economy:[], FortificationLevel:0, TechLevel:0, AgriculturalProduce:0, CivilianGoods:0, Hydrocarbons:0, Steel:0, Bauxite:0, RareMetals:0, FissileMaterials:0, Armies:[]},
	{name:"null", X:0, Y:0, DeJureOwner:0, DeFactoOwner:0, Population:0, Infrastructure:0, Economy:[], FortificationLevel:0, TechLevel:0, AgriculturalProduce:0, CivilianGoods:0, Hydrocarbons:0, Steel:0, Bauxite:0, RareMetals:0, FissileMaterials:0, Armies:[]},
	{name:"null", X:0, Y:0, DeJureOwner:0, DeFactoOwner:0, Population:0, Infrastructure:0, Economy:[], FortificationLevel:0, TechLevel:0, AgriculturalProduce:0, CivilianGoods:0, Hydrocarbons:0, Steel:0, Bauxite:0, RareMetals:0, FissileMaterials:0, Armies:[]},
];

const CommanderTraitDatabase = [
	[{DoctrineName:"", OffensiveImpact:0, DefensiveImpact:0, LogisticalImpact:0, CommandImpact:0},{}],
	[{SpecialisationName:0, AdministrationImpact:0}],
	[{PoliticalAffiliation:"Rebellious",PoliticalImpact:-20},{PoliticalAffiliation:"Divergent",PoliticalImpact:-10},{PoliticalAffiliation:"Apolitical",PoliticalImpact:0},{PoliticalAffiliation:"Loyal",PoliticalImpact:10},{PoliticalAffiliation:"Sycophant",PoliticalImpact:20}],
	[{OffensiveTrait:"Idiot",OffensiveImpact:-5},{OffensiveTrait:"Haphazard",OffensiveImpact:-3},{OffensiveTrait:"Craven",OffensiveImpact:-2},{OffensiveTrait:"Indecisive",OffensiveImpact:-1},{OffensiveTrait:"Temperate",OffensiveImpact:0},{OffensiveTrait:"Brash",OffensiveImpact:1},{OffensiveTrait:"Aggressive",OffensiveImpact:2},{OffensiveTrait:"Manic",OffensiveImpact:3},{OffensiveTrait:"Offensive Genius",OffensiveImpact:5}],
	[{DefensiveTrait:"Imbecile",DefensiveImpact:-5},{DefensiveTrait:"Cowardly",DefensiveImpact:-3},{DefensiveTrait:"Dull-witted",DefensiveImpact:-2},{DefensiveTrait:"Forgetful",DefensiveImpact:-1},{DefensiveTrait:"Average",DefensiveImpact:0},{DefensiveTrait:"Cautious",DefensiveImpact:1},{DefensiveTrait:"Sharp-witted",DefensiveImpact:2},{DefensiveTrait:"Eidetic",DefensiveImpact:3},{DefensiveTrait:"Defensive Genius",DefensiveImpact:5}],
	[{LogisticalTrait:"Stupid",LogisticalImpact:-5},{LogisticalTrait:"Wasteful",LogisticalImpact:-3},{LogisticalTrait:"Insecure",LogisticalImpact:-2},{LogisticalTrait:"Indifferent",LogisticalImpact:-1},{LogisticalTrait:"Measured",LogisticalImpact:0},{LogisticalTrait:"Frugal",LogisticalImpact:1},{LogisticalTrait:"Thrifty",LogisticalImpact:2},{LogisticalTrait:"Rigourous",LogisticalImpact:3},{LogisticalTrait:"Logistical Genius",LogisticalImpact:5}],
	[{CommandTrait:"Retarded",CommandImpact:-10},{CommandTrait:"Chaotic",CommandImpact:-7},{CommandTrait:"Abrasive",CommandImpact:-5},{CommandTrait:"Introverted",CommandImpact:-3},{CommandTrait:"Ambiverted",CommandImpact:0},{CommandTrait:"Extroverted",CommandImpact:3},{CommandTrait:"Charismatic",CommandImpact:5},{CommandTrait:"Organized",CommandImpact:7},{CommandTrait:"Command Genius",CommandImpact:10}]
];

var ArmyNamesNoon = {};

var ArmyNamesMidnight = {};

var TNOFactions=[
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
	{name:"Kazembek's Secret Lair in Yurlinsky", faction:"HARDCORE", color:"Dark Blue", ChromaCode:""}
];

var GenericFactions = [
	{name:"Null", faction:"Idk, man. Neutrals maybe?", color:"Gray", ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(100%)"},
	{name:"White", powerRanking:"Major Power", faction:"White", Access:true , Preffix:"SOM",color:"White",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(250%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false]},
	{name:"Black", powerRanking:"Major Power", faction:"Black", Access:true , Preffix:"KAR",color:"Black",ChromaCode:"hue-rotate(0deg) saturate(0%) brightness(70%) contrast(125%)",SpecialInfantry:[false,true,false,false,false],SpecialVehicles:[false,true,false,false,false]},
	{name:"Grey", powerRanking:"Regional Power", faction:"Grey", Access:true , Preffix:"TRK",color:"Grey",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(125%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,true,false,false]},
	{name:"Indigo", powerRanking:"Regional Power", faction:"Indigo", Access:true , Preffix:"POE",color:"DarkBlue",ChromaCode:"hue-rotate(250deg) saturate(125%) brightness(70%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false]},
	{name:"Green", powerRanking:"Regional Power", faction:"Green", Access:true , Preffix:"ELM",color:"Green",ChromaCode:"hue-rotate(150deg) saturate(100%) brightness(120%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[false,false,false,false,true]},
	{name:"Dark Grey", faction:"Dark Grey", Access:false , Preffix:"VLD",color:"Darkslategray",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(70%)",SpecialInfantry:[true,true,false,false,false],SpecialVehicles:[true,true,false,false,false]},
	{name:"Light Green", faction:"Light Green", Access:false , Preffix:"SLR",color:"Chartreuse",ChromaCode:"hue-rotate(100deg) saturate(140%) brightness(250%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false]},
	{name:"Brown", faction:"Brown", Access:false,Preffix:"TRS",color:"Brown",ChromaCode:"hue-rotate(50deg) saturate(70%) brightness(100%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,true,false,false]},
	{name:"Red", faction:"Red", Access:false , Preffix:"SOV",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false]},
	{name:"Blue", faction:"Blue", Access:false , Preffix:"ELA",color:"Blue",ChromaCode:"hue-rotate(250deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[false,false,false,false,true]},
];

var MetacanonicalFactions = [
	{name:"Null", faction:"Idk, man. Neutrals maybe?", color:"Gray", ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(100%)"},
	{name:"Somertin Federation", powerRanking:"Major Power", faction:"Continental Security League", Access:true , Preffix:"SOM",color:"White",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(250%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false]},
	{name:"Kargit Order State", powerRanking:"Major Power", faction:"Glorious Coallition", Access:true , Preffix:"KAR",color:"Black",ChromaCode:"hue-rotate(0deg) saturate(0%) brightness(70%) contrast(125%)",SpecialInfantry:[false,true,false,false,false],SpecialVehicles:[false,true,false,false,false]},
	{name:"Commonwealth of Transkal", powerRanking:"Regional Power", faction:"Continental Security League", Access:true , Preffix:"TRK",color:"Grey",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(125%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,true,false,false]},
	{name:"Polasie Federation", powerRanking:"Regional Power", faction:"Glorious Coallition", Access:true , Preffix:"POE",color:"DarkBlue",ChromaCode:"hue-rotate(250deg) saturate(125%) brightness(70%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false]},
	{name:"Elamite Empire", powerRanking:"Regional Power", faction:"Glorious Coallition", Access:true , Preffix:"ELM",color:"Green",ChromaCode:"hue-rotate(150deg) saturate(100%) brightness(120%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[false,false,false,false,true]},
	{name:"Republic of Cobrastan", faction:"Pula Gulf League", Access:false, Preffix:"COB", color:"Orange",ChromaCode:"hue-rotate(100deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Penistan Phallocracy", faction:"Pula Gulf League", Access:false, Preffix:"DICK", color:"Beige",ChromaCode:"hue-rotate(100deg) saturate(35%) brightness(200%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Gyros Federal Republic", faction:"Continental Security League", Access:false, Preffix:"GYR", color:"Cyan",ChromaCode:"hue-rotate(100deg) saturate(35%) brightness(200%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
];

var ParacanonicalFactions = [];

var MemeFactions = [
	{name:"Neutral", faction:"Neutral", color:"Gray"},
	{name:"Militarbezirsk Ohienstaat", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Republic of Kentucky", faction:"Anti-Ohio Bulwark", Access:true , Preffix:"KEN",color:"DarkBlue",ChromaCode:"hue-rotate(250deg) saturate(150%) brightness(50%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Free Legion of West Virginia", faction:"Anti-Ohio Bulwark", Access:true , Preffix:"WEV",color:"Blue",ChromaCode:"hue-rotate(250deg) saturate(100%) brightness(140%)",SpecialInfantry:[true,true,true,false,true],SpecialVehicles:[true,true,true,false,true]},
	{name:"Philadelphia Regional Administration", faction:"Anti-Ohio Bulwark", Access:true , Preffix:"PHL",color:"Black",ChromaCode:"hue-rotate(0deg) saturate(0%) brightness(70%) contrast(125%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Indiana MegaCornCorp", faction:"Anti-Ohio Bulwark", Access:true , Preffix:"IDN",color:"Green",ChromaCode:"hue-rotate(150deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Zombie Horde", faction:"BRAAAAAINZZZZZ", Access:true , Preffix:"ZOM",color:"Green",ChromaCode:"hue-rotate(150deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Survivors", faction:"Con Artist Gang", Access:true , Preffix:"ZSU",color:"Grey",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(100%)",SpecialInfantry:[false,false,true,true,true],SpecialVehicles:[false,false,false,false,false]},
	{name:"Task Force Tucker", faction:"Task Force Tucker",Access:true,Preffix:"TFT",color:"White",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(300%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Cockroach Horde", faction:"Cockroach Coallition",Access:true,Preffix:"COK",color:"Brown",ChromaCode:"hue-rotate(50deg) saturate(70%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Kanye West's Junta", faction:"Kanye West",Access:true,Preffix:"KAN",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"New York Defense Force", faction:"USA",Access:true,Preffix:"USA",color:"Indigo",ChromaCode:"hue-rotate(250deg) saturate(125%) brightness(70%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]}			
];

var RomaniaFactions = [
	{name:"Muntenia", faction:"Muntenia", Access:true , Preffix:"OHI",color:"Indigo",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Moldova", faction:"Moldova", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Transilvania", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Basarabia", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Banat", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Oltenia", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Crisana", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Dobrogea", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Maramures", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Tara Secuiasca", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Bugeac", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Bucovina", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Banatul de Vest", faction:"OHIO", Access:true , Preffix:"OHI",color:"Red",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
];

var EuropeFactions = [
	{name:"Neutral", faction:"Neutral", color:"Gray",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(100%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Romania", faction:"Romania", color:"Yellow",ChromaCode:"hue-rotate(100deg) saturate(140%) brightness(250%)",SpecialInfantry:[false,true,true,false,false],SpecialVehicles:[false,true,false,true,true]},
	{name:"Hungary", faction:"Hungary", color:"LimeGreen",ChromaCode:"hue-rotate(100deg) saturate(100%) brightness(200%)",SpecialInfantry:[false,true,false,false,false],SpecialVehicles:[false,true,false,false,false]},
	{name:"Bulgaria", faction:"Bulgaria", color:"Olive",ChromaCode:"hue-rotate(100deg) saturate(100%) brightness(150%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,true]},
	{name:"Serbia", faction:"Serbia", color:"Magenta",ChromaCode:"hue-rotate(300deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,true,false,false,false]},
	{name:"Greece", faction:"Greece", color:"LightSkyBlue",ChromaCode:"hue-rotate(200deg) saturate(100%) brightness(200%)",SpecialInfantry:[false,false,true,true,false],SpecialVehicles:[false,true,false,true,true]},
	{name:"Croatia", faction:"Croatia", color:"#F56FA1",ChromaCode:"hue-rotate(300deg) saturate(100%) brightness(150%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Albania", faction:"Albania", color:"Crimson",ChromaCode:"hue-rotate(0deg) saturate(140%) brightness(70%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,false,false,true]},
	{name:"Bosnia", faction:"Bosnia", color:"DarkMagenta",ChromaCode:"hue-rotate(300deg) saturate(100%) brightness(60%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[false,false,true,false,true]},
	{name:"Montenegro", faction:"Montenegro", color:"#A00000",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(70%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,false,false,true]},
	{name:"Slovakia",faction:"Slovakia", color:"#2916F5",ChromaCode:"hue-rotate(250deg) saturate(100%) brightness(80%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,false,false,true]},
	{name:"Kosovo", faction:"Kosovo", color:"Maroon",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(50%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Slovenia", faction:"Slovenia", color:"DeepPink",ChromaCode:"hue-rotate(300deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Macedonia", faction:"Macedonia", color:"#FFA600",ChromaCode:"hue-rotate(45deg) saturate(100%) brightness(150%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	

	{name:"Czechia",faction:"Czechia", color:"DarkBlue",ChromaCode:"hue-rotate(250deg) saturate(100%) brightness(50%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,false,false,true]},
	{name:"Poland",faction:"Poland", color:"E41B17",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(200%)",SpecialInfantry:[false,true,true,false,false],SpecialVehicles:[false,true,false,false,true]},
	{name:"Ukraine",faction:"Ukraine", color:"Chartreuse",ChromaCode:"hue-rotate(100deg) saturate(100%) brightness(350%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,true,false,false,false]},
	{name:"Belarus",faction:"Belarus", color:"#7E3817",ChromaCode:"hue-rotate(100deg) saturate(50%) brightness(100%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,false,true,false]},
	{name:"Lithuania",faction:"Lithuania", color:"#8B4513",ChromaCode:"hue-rotate(100deg) saturate(70%) brightness(100%)",SpecialInfantry:[false,false,true,false,true],SpecialVehicles:[false,false,false,false,true]},
	{name:"Latvia",faction:"Latvia", color:"#C11B17",ChromaCode:"hue-rotate(0deg) saturate(70%) brightness(100%)",SpecialInfantry:[false,false,false,true,true],SpecialVehicles:[false,false,false,true,true]},
	{name:"Estonia",faction:"Estonia",color:"Indigo",ChromaCode:"hue-rotate(300deg) saturate(100%) brightness(50%)",SpecialInfantry:[false,false,true,false,true],SpecialVehicles:[false,false,false,false,true]},
	{name:"Russia",faction:"Russia", color:"#FF2400",ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,true,true,true,true],SpecialVehicles:[true,true,false,false,true]},
	{name:"Turkey",faction:"Turkey", color:"#B22222",ChromaCode:"hue-rotate(0deg) saturate(80%) brightness(100%)",SpecialInfantry:[false,false,true,false,true],SpecialVehicles:[false,true,false,false,true]},

	{name:"Finland",faction:"Finland", color:"Azure",ChromaCode:"hue-rotate(224deg) saturate(100%) brightness(350%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,true,false,true]},
	{name:"Sweden",faction:"Sweden", color:"#FFDB58",ChromaCode:"hue-rotate(100deg) saturate(60%) brightness(250%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,true,false,false,true]},
	{name:"Norway",faction:"Norway", color:"#C24641",ChromaCode:"hue-rotate(0deg) saturate(80%) brightness(200%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,false,false,true]},
	{name:"Denmark",faction:"Denmark", color:"Tomato",ChromaCode:"hue-rotate(10deg) saturate(60%) brightness(200%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false]},
	{name:"Iceland",faction:"Iceland", color:"Azure",ChromaCode:"hue-rotate(250deg) saturate(80%) brightness(250%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false]},

	{name:"Germany",faction:"Germany", color:"Gold",ChromaCode:"hue-rotate(100deg) saturate(90%) brightness(250%)",SpecialInfantry:[false,true,true,false,false],SpecialVehicles:[true,true,false,false,true]},
	{name:"Austria",faction:"Austria", color:"Brown",ChromaCode:"hue-rotate(0deg) saturate(35%) brightness(150%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,false,false,true]},
	{name:"Switzerland",faction:"Switzerland", color:"Chocolate",ChromaCode:"hue-rotate(0deg) saturate(60%) brightness(150%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,true,false,true]},
	{name:"Italy",faction:"Italy", color:"Green",ChromaCode:"hue-rotate(100deg) saturate(100%) brightness(140%)",SpecialInfantry:[false,true,false,false,false],SpecialVehicles:[false,true,false,false,true]},
	{name:"Netherlands",faction:"Netherlands", color:"Orange",ChromaCode:"hue-rotate(30deg) saturate(100%) brightness(250%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false]},
	{name:"Belgium",faction:"Belgium", color:"Black",ChromaCode:"hue-rotate(0deg) saturate(0%) brightness(70%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},

	{name:"France",faction:"France", color:"Blue",ChromaCode:"hue-rotate(250deg) saturate(100%) brightness(150%)",SpecialInfantry:[false,true,false,true,true],SpecialVehicles:[false,true,false,true,true]},
	{name:"Spain",faction:"Spain", color:"#8B8000",ChromaCode:"hue-rotate(100deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,true,false,false,true],SpecialVehicles:[false,true,false,false,true]},
	{name:"Portugal",faction:"Portugal",color:"DarkGreen",ChromaCode:"hue-rotate(30deg) saturate(100%) brightness(150%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false]},
	{name:"Britain",faction:"Britain",color:"Purple",ChromaCode:"hue-rotate(300deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,true,false,true,false],SpecialVehicles:[false,true,false,true,false]},
	{name:"Ireland",faction:"Ireland",color:"#5FFB17",ChromaCode:"hue-rotate(100deg) saturate(100%) brightness(175%)",SpecialInfantry:[false,false,true,false,true],SpecialVehicles:[false,false,false,true,false]},

	{name:"Transnistria",faction:"Transnistria",color:"#004225",ChromaCode:"hue-rotate(0deg) saturate(35%) brightness(100%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Freeland",faction:"Freeland",color:"Azure",ChromaCode:"hue-rotate(250deg) saturate(50%) brightness(250%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},	
	{name:"San Marino",faction:"San Marino",color:"Turquoise",ChromaCode:"hue-rotate(175deg) saturate(100%) brightness(150%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Vatican",faction:"Vatican", color:"White",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(315%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false]},
	{name:"Malta",faction:"Malta", color:"Aquamarine",ChromaCode:"hue-rotate(175deg) saturate(100%) brightness(224%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false]},
	{name:"Luxembourg",faction:"Luxembourg",color:"LightSkyBlue",ChromaCode:"hue-rotate(200deg) saturate(140%) brightness(200%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},{name:"Liechtenstein",faction:"Liechtenstein", color:"Purple",ChromaCode:"hue-rotate(300deg) saturate(100%) brightness(120%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Liechtenstein",faction:"Liechtenstein", color:"Purple",ChromaCode:"hue-rotate(300deg) saturate(100%) brightness(120%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Monaco",faction:"Monaco",color:"Purple",ChromaCode:"hue-rotate(335deg) saturate(100%) brightness(120%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Andorra",faction:"Andorra",color:"Blue-Orange",ChromaCode:"hue-rotate(30deg) saturate(100%) brightness(130%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{name:"Sealand",faction:"Sealand",color:"LightSkyBlue",ChromaCode:"hue-rotate(250deg) saturate(70%) brightness(150%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false]},
	{name:"Georgia",faction:"Georgia",color:"#7E3817",ChromaCode:"hue-rotate(100deg) saturate(50%) brightness(140%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,false,false,true]},
	{name:"Israel",faction:"Israel",color:"LightSkyBlue",ChromaCode:"hue-rotate(225deg) saturate(100%) brightness(350%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,true,false,false,true]},
];

var HistoricalFactions = {};

var NostalgiaFactions = [
	{name:"Null", faction:"Idk, man. Neutrals maybe?", color:"Gray", ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(100%)"},
	{name:"Northern Federation", faction:"Federation Alliance", color:"Red", Preffix:"NFE", ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[true,true,false,false,true]},
	{name:"Akkadian Empire", faction:"Akkadian Alliance", color:"Blue", Preffix:"AKK", ChromaCode:"hue-rotate(250deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[true,true,false,false,true]},
	{name:"Dragoon Nation", faction:"Federation Alliance", color:"Green", Preffix:"DRG", ChromaCode:"hue-rotate(150deg) saturate(100%) brightness(120%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[true,true,false,false,true]},
	{name:"Space Marines", faction:"Akkadian Alliance", color:"Green", Preffix:"SPA", ChromaCode:"hue-rotate(150deg) saturate(100%) brightness(120%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Mystery Army", faction:"Federation Alliance", color:"Black", Preffix:"MYS", ChromaCode:"hue-rotate(0deg) saturate(0%) brightness(70%) contrast(125%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[false,false,false,false,false]}
];

var AnniversaryFactions = [
	{name:"Null", faction:"Idk, man. Neutrals maybe?", color:"Gray", ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(100%)"},
	{},
	{},
	{name:"Us and mings", faction:"Us", color:"Grey",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(125%)",SpecialInfantry:[true,true,true,true,true],SpecialVehicles:[true,true,true,true,true]},
	{},
	{},
	{},
	{},
	{name:"Beri many okok", faction:"Okok", color:"Brown",ChromaCode:"hue-rotate(50deg) saturate(70%) brightness(100%)",SpecialInfantry:[false,false,false,false,false],SpecialVehicles:[false,false,false,false,false]},
	{},
	{}
];