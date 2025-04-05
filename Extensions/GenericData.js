const CampaignTerrain = [
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

const BiomeRegistry = [
	{Name:null, Nominator:"", LogisticIndex:0},
	{Name:"Temperate", Nominator:"", LogisticIndex:1},
	{Name:"Desert", Nominator:"Arid", LogisticIndex:0.75},
	{Name:"Tundra", Nominator:"Boreal", LogisticIndex:0.75},
	{Name:"Extreme Desert", Nominator:"Barren", LogisticIndex:0.5},
	{Name:"Extreme Tundra", Nominator:"Arctic", LogisticIndex:0.5},
	{Name:"Lunar", Nominator:"Lunar", LogisticIndex:0.25},
	{Name:"Martian", Nominator:"Martian", LogisticIndex:0.25},
];

const CampaignUnits = [
	{name: "Construction Site", shortname:"Skele", HP:50, Armor: "Medium", Attack: 0, Weapon: "Medium", Speed:0, Movement: "Foot", MinRange:1, MaxRange:1, Cost:0 ,tag1:"Inertial", tag2:"", tag3:"", tag4:"",StaticOffsetX:[0,0,0,0,0],StaticOffsetY:[0,0,0,0,0],MovementBoxX:0,MovementBoxY:0,MovementOffsetX:[0,0,0,0,0],MovementOffsetY:[0,0,0,0,0],AttackOffsetX:[0,0,0,0,0],AttackOffsetY:[0,0,0,0,0],IdleOffsetX:[0,0,0,0,0],IdleOffsetY:[0,0,0,0,0]},

	{name: Language.UnitNames[1], HP:50, shortname: "LightInf", MLPR:false, Armor: "Light", Attack: 10, Weapon: "Light", Speed:4, Movement: "Foot", MinRange:1, MaxRange:1, Cost:100, TechLevel:1, Power:10, Role:"", tag1:"Conqueror", tag2:"Streamlined", tag3:"", tag4:"",AttackOffsetX:[0,-1,8,-1,-12]},
	{name: Language.UnitNames[2], HP:70, shortname: "Infantry", MLPR:false, Armor: "Light", Attack: 20, Weapon: "Light", Speed:3, Movement: "Foot", MinRange:1, MaxRange:1, Cost:150, TechLevel:1, Power:15, Role:"", tag1:"Conqueror", tag2:"", tag3:"", tag4:"" ,AttackOffsetX:[0,0,9,0,-9]},
	{name: Language.UnitNames[3], shortname: "AssaultInf", MLPR:false, HP:80, Armor:"Light", Attack: 25, Weapon: "Medium", Speed:3, Movement: "Foot", MinRange:1, MaxRange:1, Cost:200, TechLevel:2, Power:25, Role:"", tag1:"Conqueror", tag2:"Schwerpunkt", tag3:"", tag4:"",AttackOffsetX:[0,0,12,0,-12]},
	{name: Language.UnitNames[4], shortname: "Snipers", MLPR:false, HP:70, Armor: "Light", Attack: 30, Weapon: "Light", Speed:4, Movement: "Foot", MinRange:1, MaxRange:1, Cost:250, TechLevel:3, Power:35, Role:"", tag1:"Conqueror", tag2:"Commando", tag3:"", tag4:"", FactionSpecificity:3,AttackOffsetX:[0,-2,8,-2,-12]},
	{name: Language.UnitNames[5], shortname: "Marines", MLPR:false, HP:80, Armor: "Light", Attack: 25, Weapon: "Light", Speed:4, Movement: "Amphibious", MinRange:1, MaxRange:1, Cost:250, TechLevel:3, Power:30, Role:"", tag1:"Conqueror", tag2:"Crab", tag3:"", tag4:"", FactionSpecificity:4,AttackOffsetX:[0,0,13,0,-13]},
	{name: Language.UnitNames[6], shortname: "Stormtroopers", MLPR:false, HP:70, Armor: "Light", Attack: 30, Weapon: "Medium", Speed:3, Movement: "Foot", MinRange:1, MaxRange:3, Cost:250, TechLevel:3, Power:25, Role:"", tag1:"Conqueror", tag2:"", tag3:"", tag4:"", FactionSpecificity:5,AttackOffsetX:[0,0,10,0,-10]},
	{name: Language.UnitNames[7], shortname: "SpecOps", MLPR:false, HP:50, Armor: "Light", Attack: 20, Weapon: "Medium", Speed:4, Movement: "Foot", MinRange:1, MaxRange:1, Cost:300, TechLevel:4, Power:25, Role:"", tag1:"Conqueror", tag2:"Anti-Structure", tag3:"Stealth", tag4:"Airborne", FactionSpecificity:2, AttackOffsetX:[0,0,13,0,-13]},
	{name: Language.UnitNames[8], shortname: "Guards", MLPR:true, HP:105, Armor: "Light", Attack: 35, Weapon: "Medium", Speed:3, Movement: "Foot", MinRange:1, MaxRange:1, Cost:350, TechLevel:5, Power:50, Role:"", tag1:"Conqueror", tag2:"Indomitable", tag3:"", tag4:"", FactionSpecificity:1, AttackOffsetX:[0,0,8,0,-8]},
	{name: Language.UnitNames[9], shortname: "Suicide", MLPR:true, HP:50, Armor: "Light", Attack: 23, Weapon: "Heavy", Speed:3, Movement: "Foot", MinRange:1, MaxRange:1, Cost:250, TechLevel:1, Power:25, Role:"", tag1:"Self-Destruct", tag2:"Indomitable", tag3:"Cavitation Explosion", tag4:"Tank-Hunter", FactionSpecificity:5,AttackOffsetX:[0,0,0,0,0]},
	{name: "White Paladin", shortname:"Paladin", MLPR:true, HP: 140, Armor:"Medium", Attack:50, Weapon:"Medium",Speed:2, Movement:"Foot", MinRange:1, MaxRange:1, Cost:700, TechLevel:6, Power:110, Role:"", tag1: "Conqueror", tag2: "Indomitable", tag3: "Heroic", tag4: "", FactionSpecificity:1},

	{name: "Cavalry", shortname:"Cavalry", MLPR:true, HP:80, Armor: "Light", Attack: 20, Weapon: "Light", Speed:5, Movement: "Foot", MinRange:1, MaxRange:1, Cost:200, TechLevel:1, Power:20, Role:"", tag1:"Conqueror", tag2:"", tag3:"", tag4:"",StaticOffsetX:[0,9,-3,9,-3],StaticOffsetY:[0,1,5,1,5],MovementOffsetX:[0,14,0,14,0],MovementOffsetY:[0,0,8,0,8],AttackOffsetX:[0,10,0,10,0],AttackOffsetY:[0,0,5,0,5]},
	{name: "Motorized Infantry", shortname: "MotorInf", MLPR:true, HP:80, Armor: "Light", Attack: 25, Weapon: "Medium", Speed:6, Movement: "Wheeled", MinRange:1, MaxRange:1, Cost:200, TechLevel:2, Power:30, Role:"", tag1:"Conqueror", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,0,0,0,-14]},
	{name: "Supply Truck", shortname:"Supply", MLPR:true, HP:30, Armor:"Light", Attack:20, Weapon:"None", Speed:6, Movement:"Wheeled", MinRange:1, MaxRange:3, Cost:400, TechLevel:2, Power:10, Role:"", tag1:"Supply Distribution", tag2:"", tag3:"", tag4:""},
	{name: "Flak Tank", shortname: "Flak", MLPR:true, HP:60, Armor: "Medium", Attack: 20, Weapon: "Light", Speed:5, Movement: "Tracked", MinRange:1, MaxRange:3, Cost:485, TechLevel:3, Power:25, Role:"", tag1:"Skysweeper", tag2:"Anti-Air", tag3:"", tag4:"",AttackOffsetX:[0,0,-10,-21,-40],AttackOffsetY:[0,-33,-44,-21,-44]},
	{name: "Crab Tank Battalion", shortname: "Crab", MLPR:true, HP:90, Armor: "Medium", Attack: 30, Weapon: "Light", Speed:6, Movement: "Amphibious", MinRange:1, MaxRange:1, Cost:325, TechLevel:3, Power:35, Role:"" ,tag1:"Crab", tag2:"", tag3:"", tag4:"", FactionSpecificity:4, AttackOffsetX:[0,-16,-15,-15,-15], AttackOffsetY:[0,-19,-13,-17,-13]},
	{name: "SCADP", shortname: "SCADP", MLPR:true, HP:40, Armor: "Light", Attack: 20, Weapon: "Light", Speed:6, Movement: "Wheeled", MinRange:1, MaxRange:3,  Cost:940, TechLevel:5, Power:60, Role:"", tag1:"Anti-Infantry", tag2:"Dispersion", tag3:"", tag4:"",AttackOffsetX:[0,0,0,0,-14],AttackOffsetY:[0,-18,0,-2,0]},	
	{name: "Trosky Warmachine", shortname:"Warmachine", MLPR:true, HP:100, Armor: "Medium", Attack: 25, Weapon: "Medium", Speed:4, Movement: "Tracked", MinRange:2, MaxRange:6, Cost:2000, TechLevel:1, Power:50, Role:"", tag1:"Tank Pooper", tag2:"", tag3:"", tag4:"",StaticOffsetY:[0,-23,-23,-23,-23],MovementOffsetX:[0,-23,-23,-23,-23],MovementBoxY:79,MovementOffsetY:[0,0,0,0,0]},
	{name: "Sisu AIC", shortname:"Sisu", MLPR:true, HP:100, Armor:"Light", Attack:30, Weapon: "Light", Speed:5, Movement:"Wheeled", MinRange:1, MaxRange:1, Cost:640, TechLevel:4, Power:45, Role:"", tag1:"Conqueror", tag2:"Commando", tag3:"", tag4:"", FactionSpecificity:3},
	{name: "Boing SH-11 Megacockter", shortname:"Megacockter", MLPR:true, HP:30, Armor:"Light", Attack: 30, Weapon: "Light", Speed:7, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:500, TechLevel:5, Power:50, Role:"", tag1:"Bewegungskrieg", tag2:"Schwerpunkt", tag3:"", tag4:"", FactionSpecificity:4, AttackOffsetX:[0,0,0,0,-7], AttackOffsetY:[0,-14,0,0,0]},
	{name: "AYIN", shortname:"AYIN", MLPR:true, HP:40, Armor:"Medium", Attack:25, Weapon:"Medium", Speed:5, Movement:"Tracked", MinRange:1, MaxRange:7, Cost:1885, TechLevel:6, Power:50, Role:"", tag1:"Streamblast", tag2:"", tag3:"", tag4:""},

	{name: Language.UnitNames[21], shortname: "Cockroach", MLPR:true, HP:50, Armor:"Light", Attack:15, Weapon:"Light", Speed:8, Movement:"Tracked", MinRange:1, MaxRange:1, Cost:190, TechLevel:1, Power:15, Role:"", tag1:"Streamlined", tag2:"", tag3:"", tag4:""},
	{name: Language.UnitNames[22], shortname: "Bolt", MLPR:true, HP:75, Armor: "Light", Attack: 25, Weapon: "Light", Speed:6, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:340, TechLevel:2, Power:30, Role:"", tag1:"Schwerpunkt", tag2:"", tag3:"", tag4:"", AttackOffsetX:[0,-12,-0,-12,-20], AttackOffsetY:[0,-9,-0, 9,-0]},
	{name: Language.UnitNames[23], shortname: "Asekara", MLPR:false, HP:100, Armor: "Medium", Attack: 35, Weapon: "Medium", Speed:5, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:500, TechLevel:3, Power:40, Role:"", tag1:"Streamlined", tag2:"Schwerpunkt", tag3:"Bewegungskrieg", tag4:"", MovementOffsetY:[0,0,0,0,0], AttackOffsetX:[0,-16,-15,-15,-15], AttackOffsetY:[0,-19,-13,-17,-13]},
	{name: Language.UnitNames[24], shortname: "Gorlitz", MLPR:true, HP:110, Armor: "Heavy", Attack: 50, Weapon: "Heavy", Speed:4, Movement: "Tracked", MinRange:1, MaxRange:1,  Cost:800, TechLevel:4, Power:50, Role:"", tag1:"", tag2:"", tag3:"", tag4:"", StaticOffsetX:[0,0,-7,0,-7], AttackOffsetX:[0,0,-14,0,-14]},
	{name: Language.UnitNames[25], shortname: "Hunter", MLPR:true, HP:100, Armor: "Medium", Attack: 35, Weapon: "Medium", Speed:5, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:425, TechLevel:3, Power:40, Role:"", tag1:"Anti-Tank", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,8,-10,7,-49],AttackOffsetY:[0,-40,-44,0,-2]},
	{name: Language.UnitNames[26], shortname: "AMPAC", MLPR:true, HP:100, Armor: "Medium", Attack: 35, Weapon: "Heavy", Speed:6, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:650, TechLevel:4, Power:60, Role:"" ,tag1:"Anti-Tank", tag2:"Tank-Hunter", tag3:"Streamlined", tag4:"", FactionSpecificity:5,StaticOffsetX:[0,-3,0,-3,-10],AttackOffsetX:[0,-11,-1,-11,-23],AttackOffsetY:[0,-10,-5,5,-5]},
	{name: Language.UnitNames[27], shortname: "Koschei", MLPR:true, HP:120, Armor: "Heavy", Attack: 55, Weapon: "Medium", Speed:5, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:950, TechLevel:5, Power:120, Role:"" ,tag1:"Schwerpunkt", tag2:"Bewegungskrieg", tag3:"", tag4:"", FactionSpecificity:2, AttackOffsetX:[0,-19,-10,-19,-25], AttackOffsetY:[0,-28,-15,0,-15]},
	{name: Language.UnitNames[28], shortname: "Imperterritus", MLPR:true, HP:175, Armor: "Heavy", Attack: 55, Weapon: "Heavy", Speed:3, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:2450, TechLevel:5, Power:200, Role:"" ,tag1:"Cemented Steel Armor", tag2:"Terrifying", tag3:"", tag4:"", FactionSpecificity:1, StaticOffsetX:[0,-22,0,-23,-44], StaticOffsetY:[0,-20,0,-2,0], AttackOffsetX:[0,-31,-3,-33,-59], AttackOffsetY:[0,-25,-5,-5,-5],MovementOffsetX:[0,-20,0,-0,0],MovementOffsetY:[0,-20,0,-20,-44]},
	{name: "Entwicklung Pantser", shortname:"Entwicklung", MLPR:true, HP:170, Armor:"Heavy", Attack:65, Weapon:"Medium", Speed:7, Movement:"Tracked", MinRange:1, MaxRange:1, Cost:1500, TechLevel:6, Power:340, Role:"" ,tag1:"Schwerpunkt", tag2:"Bewegungskrieg", tag3:"Mobile Battery", tag4:"Terrifying", AttackOffsetX:[0,-19,-10,-19,-25], AttackOffsetY:[0,-28,-15,0,-15]},
	{name: "GBC Roland MkIII",shortname:"Roland", MLPR:true, HP:245, Armor:"Heavy", Attack:70, Weapon:"Heavy", Speed:5, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:3500, TechLevel:6, Power:500, Role:"", tag1:"Cemented Steel Armor", tag2:"Schwerpunkt", tag3:"Bewegungskrieg", tag4:"Terrifying", StaticOffsetX:[0,-22,0,-23,-44], StaticOffsetY:[0,-20,0,-2,0], AttackOffsetX:[0,-31,-3,-33,-59], AttackOffsetY:[0,-25,-5,-5,-5],MovementOffsetX:[0,-20,0,-0,0],MovementOffsetY:[0,-20,0,-20,-44]},

	{name: "Howitzer Battery", shortname: "Howitzer", MLPR:true, HP:40, Armor: "Light", Attack: 25, Weapon: "Medium", Speed:3, Movement: "Foot", MinRange:2, MaxRange:5, Cost:375, TechLevel:2, Power:20, Role:"", tag1:"Anti-Structure", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,-9,0,-9,-7], AttackOffsetY:[0,-14,-7,-14,-14]},
	{name: "AA Artillery", shortname:"AA", MLPR:true, HP:40, Armor:"Light", Attack:20, Weapon:"Light", Speed:3, Movement: "Foot", MinRange:1, MaxRange:3, Cost:340, TechLevel:2, Power:20, Role:"", tag1:"Skysweeper",tag2:"Anti-Air",tag3:"",tag4:"",AttackOffsetX:[0,0,7,0,-7],AttackOffsetY:[0,-14,-7,-14,-7]},
	{name: "Anti-Tank Artillery", shortname:"AT", MLPR:true, HP:40, Armor:"Light", Attack:30, Weapon:"Heavy",Speed:3, Movement:"Foot", MinRange:1, MaxRange:3, Cost:420, TechLevel:2, Power:25, Role:"", tag1:"", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,0,0,0,-21],AttackOffsetY:[0,-21,0,-7,0]},
	{name: "Moldan Battery", shortname: "Moldan", MLPR:true, HP:40, Armor: "Light", Attack: 25, Weapon: "Medium", Speed:6, Movement: "Wheeled", MinRange:2, MaxRange:4,  Cost:550, TechLevel:3, Power:35, Role:"", tag1:"Mobile Battery", tag2:"Schwerpunkt", tag3:"", tag4:"",StaticOffsetX:[0,0,-7,0,-7],StaticOffsetY:[0,0,-12,0,-12],AttackOffsetX:[0,0,-7,0,-20],AttackOffsetY:[0,-35,-22,-3,-22]},
	{name: "SPAB", shortname: "SPAB", MLPR:true,HP:60, Armor:"Medium", Attack:30, Weapon:"Medium", Speed:5, Movement:"Tracked", MinRange:2, MaxRange:5, Cost:580, TechLevel:3, Power:40, Role:"", tag1:"Anti-Structure", tag2:"Mobile Battery", tag3:"", tag4:"",AttackOffsetX:[0,0,0,0,-14],AttackOffsetY:[0,-14,0,0,0]},
	{name: "Rocket Tank", shortname:"Rocketank", MLPR:true, HP:60, Armor: "Light", Attack: 30, Weapon: "Light", Speed:4, Movement: "Foot", MinRange:1, MaxRange:4, Cost:500, TechLevel:4, Power:40, Role:"", tag1:"Schwerpunkt", tag2:"Mobile Battery", tag3:"", tag4:"",AttackOffsetX:[0,0,-2,0,-12],AttackOffsetY:[0,-7,-16,0,-16]},
	{name: "400mm Big Bertha", shortname: "Bertha", MLPR:true, HP:80, Armor: "Medium", Attack: 45, Weapon: "Heavy", Speed:2, Movement: "Tracked", MinRange:3, MaxRange:7, Cost:1100, TechLevel:5, Power:150, Role:"" ,tag1:"Anti-Structure", tag2:"", tag3:"", tag4:"", FactionSpecificity:3, StaticOffsetX:[0,0,-5,0,-6], StaticOffsetY:[0,-10,0,-10,0], AttackOffsetX:[0,0,0,0,-11], AttackOffsetY:[0,-39,-26,-10,-26]},
	{name: "Pula SRBMDP", shortname:"Pula", MLPR:true, HP:60, Armor:"Medium", Attack:20, Weapon:"Medium", Speed:5, Movement:"Wheeled", MinRange:3, MaxRange:10, Cost: 1000, TechLevel:5, Power:50, Role:"", tag1:"Anti-Structure", tag2:"", tag3:"", tag4:"", AttackOffsetX:[0,0,-6,0,3], AttackOffsetY:[0,6,-38,-7,-38]},
	{name: "Tugarin ATMB", shortname:"Tugarin", MLPR:true, HP:90, Armor:"Light", Attack:50, Weapon:"Heavy", Speed:5, Movement:"Wheeled", MinRange:2, MaxRange:5, Cost:1500, TechLevel:6, Power:180, Role:"", tag1:"Tank Hunter", tag2:"Anti-Tank", tag3:"Mobile Battery", tag4:"Bewegungskrieg",AttackOffsetX:[0,0,0,0,-14],AttackOffsetY:[0,-18,0,-2,0]},
	{name: "Brimstone Battery", shortname:"Brimstone", MLPR:true, HP:100, Armor:"Light", Attack:70, Weapon:"Medium", Speed:5, Movement:"Wheeled", MinRange:3, MaxRange:7, Cost: 2500, TechLevel:6, Power:350, Role:"", tag1:"Bewegungskrieg", tag2:"Schwerpunkt", tag3:"Mobile Battery", tag4:"", StaticOffsetX:[0,0,-5,0,-6], StaticOffsetY:[0,-10,0,-10,0], AttackOffsetX:[0,0,0,0,-11], AttackOffsetY:[0,-39,-26,-10,-26]},
	
	{name: "Stork Transport", shortname: "Stork", MLPR:true, HP:30, Armor: "Light", Attack:0, Weapon:"None", Speed:7, Movement:"Flight", MinRange:1, MaxRange:1, Cost:150, TechLevel:2, Power:0, Role:"", tag1:"Air Transport",tag2:"",tag3:"",tag4:""},
	{name: "Pelikan Transport Heli", shortname:"Pelikan", MLPR:true, HP:30, Armor: "Light", Attack:30, Weapon:"None", Speed:6, Movement:"Flight", MinRange:1, MaxRange:1, Cost:500, TechLevel:3, Power:15, Role:"", tag1:"Supply Distribution",tag2:"",tag3:"",tag4:""},
	{name: "Raptor Fighter", shortname: "Raptor", MLPR:true, HP:50, Armor: "Light", Attack: 15, Weapon: "Light", Speed:8, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:400, TechLevel:3, Power:20, Role:"", tag1:"Skysweeper", tag2:"", tag3:"", tag4:""},
	{name: "Eagle Striker", shortname: "Eagle", MLPR:true, HP:50, Armor: "Light", Attack: 25, Weapon: "Medium", Speed:7, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:450, TechLevel:3, Power:25, Role:"", tag1:"", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,-2,0,-2,-4]},
	{name: "Condor Bomber", shortname: "Condor", MLPR:true, HP:50, Armor: "Light", Attack: 35, Weapon: "Medium", Speed:6, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:550, TechLevel:4, Power:35, Role:"", tag1:"Cavitation Explosion", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,0,0,0,-56],AttackOffsetY:[0,-56,0,0,0]},
	{name: "Akontio Torpedor", shortname: "Akontio", MLPR:true, HP:50, Armor: "Light", Attack: 50, Weapon: "Medium", Speed:5, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:550, TechLevel:4, Power:50, Role:"", tag1:"Seabound", tag2:"Cavitation Explosion", tag3:"", tag4:""},
	{name: "Zeus Stormlord", shortname: "Zeus", MLPR:true, HP:70, Armor: "Light", Attack: 35, Weapon: "Medium", Speed:10, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:910, TechLevel:5, Power:80, Role:"", tag1:"Skysweeper", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,-2,0,-2,0]},
	{name: "Solovey Superbomber", shortname:"Solovey", MLPR:true, HP:100, Armor:"Light", Attack:40, Weapon:"Heavy", Speed:6, Movement:"Flight",MinRange:1, MaxRange:1, Cost:850, TechLevel:5, Power:80, Role:"", tag1:"Anti-Structure", tag2:"", tag3:"", tag4:"", FactionSpecificity:2,AttackOffsetX:[0,0,0,0,-56],AttackOffsetY:[0,-56,0,0,0]},
	{name: "AVN-1 Stihie", shortname:"Stihie", MLPR:true, HP: 70, Armor:"Light", Attack: 40, Weapon: "Light", Speed:10, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:1400, TechLevel:6, Power:150, Role:"", tag1:"Skysweeper", tag2:"Stealth", tag3:"", tag4:""},
	{name: "ALEPH", shortname: "ALEPH", MLPR:true, HP:50, Armor: "Light", Attack: 5000, Weapon: "Heavy", Speed:6, Movement: "Flight", MinRange:1, MaxRange:1, Cost:5000, TechLevel:7, Power:1000, Role:"" ,tag1:"JUDGEMENT", tag2:"Indomitable", tag3:"Self-Destruct", tag4:"Inertial",AttackOffsetX:[0,0,0,0,-56],AttackOffsetY:[0,-56,0,0,0]},
	
	{name: "Barge Convoy", shortname: "Convoy", MLPR:true, HP:100, Armor: "Medium", Attack:0, Weapon:"None", Speed:5, Movement: "Rudder", MinRange:1, MaxRange:1, Cost:100, TechLevel:1, Power:0, Role:"", tag1:"Naval Transport", tag2:"", tag3:"", tag4:"", StaticOffsetY:[0,-25,-22,-22,-22],MovementOffsetX:[0,-25,-22,-22,-22]},
	{name: "Intrepid", shortname: "Intrepid", MLPR:true, HP:50, Armor: "Light", Attack: 15, Weapon: "Light", Speed:6, Movement: "Rudder", MinRange:1, MaxRange:1, Cost:170, TechLevel:1, Power:10, Role:"" ,tag1:"Conqueror", tag2:"", tag3:"", tag4:"", SpriteOffset:[0,0,0,0,0], AttackOffsetX:[0,0,0,0,-9],AttackOffsetY:[0,-5,2,-5,2]},
	{name: "Submersible", shortname: "Submersible", MLPR:true, HP:50, Armor: "Light", Attack: 50, Weapon: "Medium", Speed:3, Movement: "Heavy Rudder", MinRange:1, MaxRange:1, Cost:500, TechLevel:2, Power:50, Role:"" ,tag1:"Submerged", tag2:"Seabound", tag3:"Stealth", tag4:"", SpriteOffset:[0,0,0,0,0], AttackSpriteOffset:[0,0,0,0,0]},
	{name: "Destroyer", shortname: "Destroyer", MLPR:true, HP:100, Armor: "Medium", Attack: 25, Weapon: "Medium", Speed:6, Movement: "Rudder", MinRange:1, MaxRange:1, Cost:300, TechLevel:2, Power:50, Role:"" ,tag1:"Depth Charge", tag2:"Skysweeper", tag3:"Sonar", tag4:"Steer", AttackOffsetX:[0,0,0,0,-28], AttackOffsetY:[0,-4,-14,0,-14]},
	{name: "Light Cruiser", shortname: "CruiserL", MLPR:true, HP:250, Armor: "Medium", Attack: 30, Weapon: "Medium", Speed:5, Movement: "Rudder", MinRange:1, MaxRange:3, Cost:1000, TechLevel:3, Power:150, Role:"" ,tag1:"Depth Charge", tag2:"Skysweeper", tag3:"Sonar", tag4:"Anti-Air", AttackOffsetX:[0,-44,-44,-44,-44], AttackOffsetY:[0,-37,-37,-35,-37]},
	{name: "Heavy Cruiser", shortname: "CruiserH", MLPR:true, HP:500, Armor: "Heavy", Attack: 60, Weapon: "Heavy", Speed:4, Movement: "Rudder", MinRange:2, MaxRange:5, Cost:2000, TechLevel:3, Power:500, Role:"" ,tag1:"Skysweeper", tag2:"", tag3:"", tag4:"", SpriteOffset:[0,0,0,0,0], AttackOffsetX:[0,10,-6,9.75,-40],AttackOffsetY:[0,-25,-42,-3,-42]},
	{name: "Battleship", shortname: "Battleship", MLPR:true, HP:1500, Armor: "Heavy", Attack: 100, Weapon: "Heavy", Speed:4, Movement: "Heavy Rudder", MinRange:3, MaxRange:7, Cost:5000, TechLevel:4, Power:3000, Role:"" ,tag1:"Skysweeper", tag2:"Cemented Steel Armor", tag3:"", tag4:"", AttackOffsetX:[0,-44,-49,-44,-39], AttackOffsetY:[0,-32,-33,-35,-33]},
	{name: "Aircraft Carrier", shortname: "Carrier", MLPR:true, HP:1050, Armor: "Heavy", Attack: 70, Weapon: "Medium", Speed:4, Movement: "Heavy Rudder", MinRange:3, MaxRange:10, Cost:7000, TechLevel:5, Power:5000, Role:"" ,tag1:"Skysweeper", tag2:"Anti-Ship", tag3:"Mobile Battery", tag4:"Cemented Steel Armor", StaticOffsetX:[0,-10,-20,-10,-31], StaticOffsetY:[0,-20,-20,-20,-20],MovementOffsetX:[0,-20,-20,-10,-20],MovementOffsetY:[0,-10,0,-10,-15], AttackOffsetX:[0,-10,-20,-10,-31], AttackOffsetY:[0,-20,-20,-20,-20]},
	{name: "Superbattleship", shortname: "Superbattleship", MLPR:true, HP:2500, Armor: "Heavy", Attack: 250, Weapon: "Heavy", Speed:4, Movement: "Heavy Rudder", MinRange:4, MaxRange:8, Cost:10000, TechLevel:5, Power:10000, Role:"" ,tag1:"Skysweeper", tag2:"Cemented Steel Armor", tag3:"", tag4:"", AttackOffsetX:[0,-44,-49,-44,-39], AttackOffsetY:[0,-32,-33,-35,-33]},
	{name: "Supercarrier", shortname: "Supercarrier", MLPR:true, HP:2450, Armor: "Heavy", Attack: 200, Weapon: "Medium", Speed:4, Movement: "Heavy Rudder", MinRange:3, MaxRange:10, Cost:15000, TechLevel:6, Power:25000, Role:"" ,tag1:"Skysweeper", tag2:"Anti-Ship", tag3:"Seabound", tag4:"Cemented Steel Armor", StaticOffsetX:[0,-10,-20,-10,-31], StaticOffsetY:[0,-20,-20,-20,-20],MovementOffsetX:[0,-20,-20,-10,-20],MovementOffsetY:[0,-10,0,-10,-15], AttackOffsetX:[0,-10,-20,-10,-31], AttackOffsetY:[0,-20,-20,-20,-20]},
	
	{name: "Barricade", shortname:"Barricade", MLPR:true, HP:100, Armor:"Medium", Attack:0, Weapon:"None", Speed:0, Movement:"Stationary", MinRange:1, MaxRange:1, Cost:200, TechLevel:1, Power:0, Role:"", Timer:1, tag1:"Inertial", tag2:"", tag3:"", tag4:"", SpriteOffset:[0,0,0,0,0], AttackSpriteOffset:[0,0,0,0,0]},
	{name: "Bunker", shortname:"Bunker", MLPR:true,HP:100,Armor:"Medium",Attack:25,Weapon:"Light",Speed:0,Movement:"Stationary",MinRange:1,MaxRange:1,Cost:250, TechLevel:1, Power:20, Role:"", Timer:1, tag1:"", tag2:"", tag3:"", tag4:"", SpriteOffsetY:[0,0,0,0,0], AttackOffsetX:[0,-44,-44,-44,-44],AttackOffsetY:[0,-44,-44,-44,-44]},
	{name: "Turret", shortname:"Turret", MLPR:true,HP:150,Armor:"Medium",Attack:30,Weapon:"Medium",Speed:0,Movement:"Stationary",MinRange:2,MaxRange:5,Cost:350, TechLevel:2, Power:70, Role:"", Timer:1, tag1:"", tag2:"", tag3:"", tag4:"", AttackOffsetX:[0,-45,-44,-44,-44],AttackOffsetY:[0,-34,-34.5,-34.5,-34.5]},
	{name: "Flak Tower", shortname:"FlakTower", MLPR:true,HP:150,Armor:"Medium",Attack:25,Weapon:"Light",Speed:0,Movement:"Stationary",MinRange:2,MaxRange:5,Cost:350, TechLevel:3, Power:90, Role:"", Timer:1, tag1:"Skysweeper", tag2:"Anti-Air", tag3:"", tag4:"", StaticOffsetX:[0,0,0,0,-7], StaticOffsetY:[0,-14,0,0,0], AttackOffsetX:[0,0,0,0,-14],AttackOffsetY:[0,-21,0,0,0]},
	{name: "Coastal Battery", shortname:"Coastal", MLPR:true,HP:500,Armor:"Heavy",Attack:120,Weapon:"Heavy",Speed:0,Movement:"Stationary",MinRange:3,MaxRange:7,Cost:800, TechLevel:3, Power:500, Role:"", Timer:1, tag1:"Seabound", tag2:"Cavitation Explosion", tag3:"", tag4:"", StaticOffsetX:[0,-7,5,0,-20], StaticOffsetY:[0,-25,0,0,0] , AttackOffsetX:[0,-55,-58,-56,-53],AttackOffsetY:[0,-49,-46,-48,-45]},
	{name: "Workshop", shortname:"Workshop", MLPR:true,HP:50,Armor:"Medium",Attack:0,Weapon:"None",Speed:0,Movement:"Stationary",MinRange:1,MaxRange:3,Cost:1000, TechLevel:3, Power:0, Role:"", Timer:2, tag1:"Supply Distribution", tag2:"Financial Center", tag3:"Inertial", tag4:"", AttackOffsetX:[0,0,0,0,0],AttackOffsetY:[0,0,0,0,0]},
	{name: "Missile Battery", shortname:"Missile", MLPR:true,HP:160,Armor:"Medium",Attack:50, Weapon:"Medium",Speed:0,Movement:"Stationary",MinRange:2,MaxRange:7,Cost:1200, TechLevel:5, Power:160, Role:"", Timer:2, tag1:"Skysweeper", tag2:"", tag3:"", tag4:"", StaticOffsetX:[0,0,0,0,0], StaticOffsetY:[0,-21,-14,-21,-14], AttackOffsetX:[0,0,0,0,-14],AttackOffsetY:[0,-51,-14,-14,-14]},
	{name: "Bastion", shortname:"Bastion", MLPR:true, HP:250, Armor:"Heavy",Attack:0, Weapon:"None", Speed:0, Movement:"Stationary",MinRange:1,MaxRange:1, Cost:2000, TechLevel:4, Power:0, Role:"", Timer: 2, tag1:"Inertial", tag2:"", tag3:"", tag4:""},
	{name: "Supply Depot", shortname:"Depot", MLPR:true, HP:100, Armor:"Medium", Attack:35 , Weapon:"None", Speed:0, Movement:"Stationary", MinRange:1, MaxRange:7, Cost:1300, TechLevel:2, Power:75, Role:"", Timer:2, tag1:"Supply Distribution", tag2:"", tag3:"", tag4:""},
	{name: "Fortress", shortname:"Fortress", MLPR:true, HP:1000, Armor:"Heavy",Attack:50, Weapon:"Medium", Speed:0, Movement:"Stationary",MinRange:1,MaxRange:7, Cost:5000, TechLevel:5, Power:1000, Role:"", Timer: 5, tag1:"Skysweeper", tag2:"", tag3:"", tag4:""}
];

const CampaignFactions = [
	{name:"Null", faction:"Idk, man. Neutrals maybe?", color:"Gray", ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(100%)"},
	{name:"Synarchy of Somertin", powerRanking:"Major Power", faction:"Continental Security League", Access:true , Preffix:"SOM",color:"White",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(250%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[true,false,false,false,false],SpecialTechnology:[true,false,false,false,false],Currency:"Ɬ",ExchangeRate:0.8},
	{name:"Kargit Revolutionary Gosudarstvo", powerRanking:"Major Power", faction:"Glorious Coallition", Access:true , Preffix:"KAR",color:"Black",ChromaCode:"hue-rotate(0deg) saturate(0%) brightness(70%) contrast(125%)",SpecialInfantry:[false,true,false,false,false],SpecialVehicles:[false,true,false,false,false],SpecialTechnology:[false,true,false,false,false],Currency:"Ꞣ",ExchangeRate:1},
	{name:"Commonwealth of Transkal", powerRanking:"Regional Power", faction:"Continental Security League", Access:true , Preffix:"TRK",color:"Grey",ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(125%)",SpecialInfantry:[false,false,true,false,false],SpecialVehicles:[false,false,true,false,false],SpecialTechnology:[false,true,true,false,false],Currency:"₭",ExchangeRate:2},
	{name:"Polasie People's Federation", powerRanking:"Regional Power", faction:"Glorious Coallition", Access:true , Preffix:"POE",color:"DarkBlue",ChromaCode:"hue-rotate(250deg) saturate(125%) brightness(70%)",SpecialInfantry:[false,false,false,true,false],SpecialVehicles:[false,false,false,true,false],SpecialTechnology:[false,true,false,true,false],Currency:"₽",ExchangeRate:10},
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

const IntraeventLedger = [
	//Event Zero, or shall we say the template event
	{Name:"null",Class:"Static", TurnTreshold:3, AlterCredits:0, FactionTarget:1,Intralogue:0, SummonUnits:[], TerrainImpact:[],Inspire:null,Strike:[],Display:null,Purge:0,ChangeTune:null},

	/*
	{Name:"Raising the Vythmik Militias",Class:"Static", TurnTreshold:3, AlterCredits:1000, FactionTarget:1,Intralogue:0, 
	SummonUnits:[{x:1,y:7,id:1,all:1,dir:3,hpi:1,mor:-2,cun:9,spn:null,cud:9,spd:null},{x:2,y:7,id:1,all:1,dir:3,hpi:1,mor:-2,cun:9,spn:null,cud:9,spd:null},{x:6,y:10,id:1,all:1,dir:4,hpi:1,mor:-2,cun:9,spn:null,cud:9,spd:null}], 
	TerrainImpact:[{x:2,y:2,id:22},{x:7,y:3,id:22}],
	Inspire:{fct:1,value:2},
	Strike:[{x:2,y:2,dmg:100},{x:7,y:3,dmg:100}],
	Display:null,
	Purge:0,
	ChangeTune:1

	}*/

	{Name:"Raising the Vythmik Militias",Class:"Static", TurnTreshold:3, AlterCredits:0, FactionTarget:1,Intralogue:1, 
	SummonUnits:[{x:1,y:7,id:1,all:1,dir:3,hpi:1,mor:-2,cun:9,spn:null,cud:9,spd:null},{x:2,y:7,id:1,all:1,dir:3,hpi:1,mor:-2,cun:9,spn:null,cud:9,spd:null},{x:6,y:10,id:1,all:1,dir:4,hpi:1,mor:-2,cun:9,spn:null,cud:9,spd:null}], 
	TerrainImpact:[],
	Inspire:null,
	Strike:[],
	Display:null,
	Purge:0,
	ChangeTune:null},

	{Name:"Blowing the Vythmik Bridges",Class:"Static", TurnTreshold:5, AlterCredits:0, FactionTarget:1,Intralogue:2, SummonUnits:[], TerrainImpact:[{x:2,y:2,id:22},{x:7,y:3,id:22}],Inspire:null,Strike:[{x:2,y:2,dmg:0},{x:7,y:3,dmg:0}],Display:null,Purge:0,ChangeTune:null},

	{Name:"Raising the Iberian Militias",Class:"Static", TurnTreshold:3, AlterCredits:0, FactionTarget:1,Intralogue:3, 
	SummonUnits:[{x:4,y:9,id:1,all:1,dir:4,hpi:1,mor:-2,cun:8,spn:null,cud:8,spd:null},{x:8,y:9,id:1,all:1,dir:4,hpi:1,mor:-2,cun:8,spn:null,cud:8,spd:null},{x:3,y:4,id:4,all:1,dir:4,hpi:1,mor:-2,cun:8,spn:null,cud:8,spd:null},{x:7,y:4,id:4,all:1,dir:4,hpi:1,mor:-2,cun:8,spn:null,cud:8,spd:null}], 
	TerrainImpact:[],Inspire:null,Strike:[],Display:null,Purge:0,ChangeTune:null},

	{Name:"Raising the Hevan Militias",Class:"Static", TurnTreshold:2, AlterCredits:0, FactionTarget:1,Intralogue:4, SummonUnits:[{x:9,y:3,id:1,all:1,dir:1,hpi:1,mor:-2,cun:13,spn:null,cud:13,spd:null},{x:9,y:6,id:1,all:1,dir:1,hpi:1,mor:-2,cun:13,spn:null,cud:13,spd:null}], TerrainImpact:[],Inspire:null,Strike:[],Display:null,Purge:0,ChangeTune:null},

	{Name:"Vladov's Fall",Class:"Static", TurnTreshold:7, AlterCredits:0, FactionTarget:1,Intralogue:6, SummonUnits:[], TerrainImpact:[],Inspire:{fct:1,value:-1},Strike:[],Display:null,Purge:0,ChangeTune:null},

	{Name:"radio silence",Class:"Static", TurnTreshold:13, AlterCredits:0, FactionTarget:1,Intralogue:7, SummonUnits:[], TerrainImpact:[],Inspire:{fct:1,value:-1},Strike:[],Display:null,Purge:0,ChangeTune:null},

	{Name:"The Honour Guard",Class:"Static", TurnTreshold:4, AlterCredits:0, FactionTarget:1,Intralogue:8, 
	SummonUnits:[{x:10,y:14,id:8,all:1,dir:4,hpi:1,mor:0,cun:43,spn:null,cud:43,spd:null},
		{x:10,y:12,id:1,all:1,dir:2,hpi:1,mor:0,cun:17,spn:null,cud:44,spd:null},{x:9,y:13,id:1,all:1,dir:2,hpi:1,mor:0,cun:17,spn:null,cud:44,spd:null},{x:9,y:12,id:1,all:1,dir:2,hpi:1,mor:0,cun:17,spn:null,cud:44,spd:null},{x:9,y:11,id:1,all:1,dir:2,hpi:1,mor:0,cun:17,spn:null,cud:44,spd:null},{x:9,y:10,id:1,all:1,dir:2,hpi:1,mor:0,cun:17,spn:null,cud:44,spd:null},
		{x:20,y:12,id:1,all:1,dir:2,hpi:1,mor:0,cun:17,spn:null,cud:44,spd:null},{x:19,y:12,id:1,all:1,dir:2,hpi:1,mor:0,cun:17,spn:null,cud:44,spd:null},{x:18,y:12,id:1,all:1,dir:2,hpi:1,mor:0,cun:17,spn:null,cud:44,spd:null},{x:17,y:12,id:1,all:1,dir:2,hpi:1,mor:0,cun:17,spn:null,cud:44,spd:null},{x:16,y:12,id:1,all:1,dir:2,hpi:1,mor:0,cun:17,spn:null,cud:44,spd:null}], 
	TerrainImpact:[],Inspire:{fct:1,value:1},Strike:[],Display:null,Purge:0,ChangeTune:null},

	{Name:"Spruce's Hook",Class:"Static", TurnTreshold:8, AlterCredits:0, FactionTarget:1,Intralogue:9, SummonUnits:[

		{x:5,y:5,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:6,y:5,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:7,y:5,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:8,y:5,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:9,y:5,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:10,y:5,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:11,y:5,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:12,y:5,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:13,y:5,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:14,y:5,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},

		{x:5,y:6,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:6,y:6,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:7,y:6,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:8,y:6,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:9,y:6,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:10,y:6,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:11,y:6,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:12,y:6,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:13,y:6,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:14,y:6,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},

		{x:5,y:7,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:6,y:7,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:7,y:7,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:8,y:7,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:9,y:7,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:10,y:7,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:11,y:7,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:12,y:7,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:13,y:7,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},
		{x:14,y:7,id:46,all:1,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},



		], 

	TerrainImpact:[],Inspire:null,Strike:[],Display:null,Purge:0,ChangeTune:null},



	{},{},{},{},{},{},
	{},{},{},{},{},{},{},
	{},{},{},{},{},{},{},
	{},{},{},{},{},{},{},

	//Kargia

	{Name:"Panerian militias forming",Class:"Static", TurnTreshold:2, AlterCredits:0, FactionTarget:2,Intralogue:5, 
	SummonUnits:[{x:6,y:2,id:1,all:1,dir:2,hpi:1,mor:-2,cun:11,spn:null,cud:11,spd:null},{x:7,y:2,id:1,all:1,dir:2,hpi:1,mor:-2,cun:11,spn:null,cud:11,spd:null},{x:9,y:2,id:1,all:1,dir:2,hpi:1,mor:-2,cun:11,spn:null,cud:11,spd:null},{x:10,y:2,id:1,all:1,dir:2,hpi:1,mor:-2,cun:11,spn:null,cud:11,spd:null},{x:7,y:3,id:1,all:1,dir:2,hpi:1,mor:-2,cun:11,spn:null,cud:11,spd:null},{x:9,y:3,id:1,all:1,dir:2,hpi:1,mor:-2,cun:11,spn:null,cud:11,spd:null},], 
	TerrainImpact:[],Inspire:null,Strike:[],Display:null,Purge:0,ChangeTune:null},
	{Name:"Vladov is Captured",Class:"Static", TurnTreshold:7, AlterCredits:0, FactionTarget:2,Intralogue:36, SummonUnits:[], TerrainImpact:[],Inspire:{fct:1,value:-2},Strike:[],Display:null,Purge:0,ChangeTune:null},
	{},
	{},{},{},{},
	{},{},{},{},{},{},{},
	{},{},{},{},{},{},{},
	{},{},{},{},{},{},{},
	{},{},{},{},{},{},{},

	//Transkal

	//Vilho's reinforcements
	{Name:"Vilho reinforces Gustav",Class:"Static", TurnTreshold:2, AlterCredits:0, FactionTarget:3,Intralogue:71, 
	SummonUnits:[{x:6,y:9,id:4,all:3,dir:4,hpi:1,mor:0,cun:117,spn:null,cud:117,spd:null},{x:8,y:9,id:4,all:3,dir:4,hpi:1,mor:0,cun:115,spn:null,cud:115,spd:null},{x:7,y:10,id:22,all:3,dir:4,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null}], 
	TerrainImpact:[],Inspire:null,Strike:[],Display:null,Purge:0,ChangeTune:null},

	//Raising the Nenets
	{Name:"Raising the Altay",Class:"Static", TurnTreshold:3, AlterCredits:0, FactionTarget:3,Intralogue:72, 
	SummonUnits:[{x:1,y:3,id:4,all:3,dir:3,hpi:1,mor:0,cun:111,spn:null,cud:111,spd:null},{x:1,y:4,id:4,all:3,dir:3,hpi:1,mor:0,cun:111,spn:null,cud:111,spd:null}], 
	TerrainImpact:[],Inspire:null,Strike:[],Display:null,Purge:0,ChangeTune:null},

	//Elamite Navy's Withdrawal
	{Name:"Elamite navy Withdraws",Class:"Static", TurnTreshold:5, AlterCredits:0, FactionTarget:3,Intralogue:73, SummonUnits:[], TerrainImpact:[],Inspire:null,Strike:[{id:7,dmg:1000},{id:8,dmg:1500},{id:9,dmg:1000},{id:10,dmg:1500}],Display:null,Purge:0,ChangeTune:null},
	
	//Akontio airwing arriving
	{Name:"The Akontio Airwing",Class:"Static", TurnTreshold:3, AlterCredits:0, FactionTarget:3,Intralogue:74, 
	SummonUnits:[{x:1,y:1,id:46,all:3,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},{x:2,y:2,id:46,all:3,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null},{x:3,y:1,id:46,all:3,dir:2,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null}], 
	TerrainImpact:[],Inspire:null,Strike:[],Display:null,Purge:0,ChangeTune:null},

	//Shmelev's reinforcements
	{Name:"Shmelev Reinforces Krystof",Class:"Static", TurnTreshold:3, AlterCredits:0, FactionTarget:1,Intralogue:75, 
	SummonUnits:[{x:4,y:8,id:4,all:3,dir:3,hpi:1,mor:0,cun:116,spn:null,cud:116,spd:null},{x:4,y:10,id:4,all:3,dir:3,hpi:1,mor:0,cun:116,spn:null,cud:116,spd:null}], 
	TerrainImpact:[],Inspire:null,Strike:[],Display:null,Purge:0,ChangeTune:null},

	//Reginal Guard gets reinforced
	{Name:"Reinforcing the Reginal Guard",Class:"Static", TurnTreshold:3, AlterCredits:100, FactionTarget:5,Intralogue:76, SummonUnits:[{x:5,y:10,id:1,all:3,dir:4,hpi:1,mor:0,cun:null,spn:null,cud:null,spd:null}], TerrainImpact:[],Inspire:null,Strike:[],Display:null,Purge:0,ChangeTune:null},

	{},
	{},{},{},{},{},{},{},
	{},{},{},{},{},{},{},


	//Polasie

	//Hevan militias forming
	{Name:"Hevan militias assembling",Class:"Static", TurnTreshold:3, AlterCredits:0, FactionTarget:4,Intralogue:92, 
	SummonUnits:[{x:7,y:3,id:1,all:1,dir:1,hpi:1,mor:0,cun:13,spn:null,cud:13,spd:null},{x:7,y:6,id:1,all:1,dir:1,hpi:1,mor:0,cun:13,spn:null,cud:13,spd:null}], 
	TerrainImpact:[],Inspire:null,Strike:[],Display:null,Purge:0,ChangeTune:null},

	//Polasian Monologue 1
	{Name:"Polasian monologue 1",Class:"Static", TurnTreshold:3, AlterCredits:0, FactionTarget:4,Intralogue:93, SummonUnits:[], TerrainImpact:[],Inspire:null,Strike:[],Display:null,Purge:0,ChangeTune:null},
	

	{Name:"Golubujan militias assembling",Class:"Static", TurnTreshold:3, AlterCredits:0, FactionTarget:4,Intralogue:94, 
	SummonUnits:[{x:3,y:3,id:1,all:1,dir:2,hpi:1,mor:0,cun:12,spn:null,cud:12,spd:null},{x:9,y:3,id:1,all:1,dir:2,hpi:1,mor:0,cun:12,spn:null,cud:12,spd:null}], 
	TerrainImpact:[],Inspire:null,Strike:[],Display:null,Purge:0,ChangeTune:null},

	{},

	{},{},{},
	{},{},{},{},{},{},{},
	{},{},{},{},{},{},{},


	//Elam

	{Name:"Trnagoran militias forming",Class:"Static", TurnTreshold:3, AlterCredits:0, FactionTarget:5,Intralogue:113, 
	SummonUnits:[{x:5,y:2,id:1,all:1,dir:3,hpi:1,mor:0,cun:15,spn:null,cud:15,spd:null},{x:4,y:9,id:4,all:1,dir:3,hpi:1,mor:0,cun:15,spn:null,cud:15,spd:null},{x:5,y:5,id:1,all:1,dir:3,hpi:1,mor:0,cun:15,spn:null,cud:15,spd:null},{x:4,y:4,id:4,all:1,dir:3,hpi:1,mor:0,cun:15,spn:null,cud:15,spd:null}], 
	TerrainImpact:[],Inspire:null,Strike:[],Display:null,Purge:0,ChangeTune:null},

	{Name:"Blachian militias forming",Class:"Static", TurnTreshold:3, AlterCredits:0, FactionTarget:5,Intralogue:114, 
	SummonUnits:[{x:4,y:10,id:1,all:1,dir:3,hpi:1,mor:0,cun:16,spn:null,cud:16,spd:null},{x:3,y:8,id:1,all:1,dir:3,hpi:1,mor:0,cun:16,spn:null,cud:16,spd:null},{x:2,y:2,id:1,all:1,dir:3,hpi:1,mor:0,cun:16,spn:null,cud:16,spd:null},{x:2,y:4,id:1,all:1,dir:3,hpi:1,mor:0,cun:16,spn:null,cud:16,spd:null},{x:3,y:7,id:1,all:1,dir:3,hpi:1,mor:0,cun:16,spn:null,cud:16,spd:null},{x:3,y:9,id:1,all:1,dir:3,hpi:1,mor:0,cun:16,spn:null,cud:16,spd:null},], 
	TerrainImpact:[],Inspire:null,Strike:[],Display:null,Purge:0,ChangeTune:null},

	{Name:"Shqiperian militias forming",Class:"Static", TurnTreshold:3, AlterCredits:0, FactionTarget:5,Intralogue:115, 
	SummonUnits:[{x:6,y:4,id:1,all:1,dir:3,hpi:1,mor:0,cun:null,spn:"Shqiperian ad-hoc Pandur Militia",cud:null,spd:null},{x:7,y:7,id:1,all:1,dir:3,hpi:1,mor:0,cun:null,spn:"Shqiperian ad-hoc Pandur Militia",cud:null,spd:null}], 
	TerrainImpact:[],Inspire:null,Strike:[],Display:null,Purge:0,ChangeTune:null},
	{},{},{},{},
	{},{},{},{},{},{},{},
	{},{},{},{},{},{},{},


	//UnindexedMain

	{},{},{},{},{},{},{}
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

const ArmyNamesNoon = {
};

const ArmyNamesMidnight = {
};

































CampaignUnitsOldOrder=[
	{name: "null", HP:0, Armor: "Medium", Attack: 0, Weapon: "Medium", Speed:0, Movement: "Foot", MinRange:1, MaxRange:1, Cost:0 ,tag1:"", tag2:"", tag3:"", tag4:"",StaticOffsetX:[0,0,0,0,0],StaticOffsetY:[0,0,0,0,0],MovementBoxX:0,MovementBoxY:0,MovementOffsetX:[0,0,0,0,0],MovementOffsetY:[0,0,0,0,0],AttackOffsetX:[0,0,0,0,0],AttackOffsetY:[0,0,0,0,0],IdleOffsetX:[0,0,0,0,0],IdleOffsetY:[0,0,0,0,0]},
	{name: "Light Infantry", HP:50, shortname: "LightInf", Armor: "Light", Attack: 20, Weapon: "Light", Speed:4, Movement: "Foot", MinRange:1, MaxRange:1, Cost:50, tag1:"Conqueror", tag2:"Streamlined", tag3:"", tag4:""},
	{name: "Infantry", HP:70, shortname: "Infantry", Armor: "Light", Attack: 25, Weapon: "Light", Speed:3, Movement: "Foot", MinRange:1, MaxRange:1, Cost:100, tag1:"Conqueror", tag2:"", tag3:"", tag4:"" ,AttackOffsetX:[0,0,9,0,-9]},
	{name: "Motorized Infantry", shortname: "MotorInf", HP:70, Armor: "Light", Attack: 25, Weapon: "Medium", Speed:6, Movement: "Wheeled", MinRange:1, MaxRange:1, Cost:200, tag1:"Conqueror", tag2:"", tag3:"", tag4:""},
	{name: "White Guards", shortname: "Guards", HP:105, Armor: "Light", Attack: 35, Weapon: "Medium", Speed:3, Movement: "Foot", MinRange:1, MaxRange:1, Cost:250, tag1:"Conqueror", tag2:"Heroic", tag3:"", tag4:"", AttackOffsetX:[0,0,8,0,-8]},
	{name: "Spec-Ops", shortname: "SpecOps", HP:50, Armor: "Light", Attack: 20, Weapon: "Heavy", Speed:4, Movement: "Foot", MinRange:1, MaxRange:1, Cost:250, tag1:"Conqueror", tag2:"Anti-Structure", tag3:"Stealth", tag4:"",AttackOffsetX:[0,0,13,0,-13]},
	{name: "Transkalite Snipers", shortname: "Snipers", HP:70, Armor: "Light", Attack: 30, Weapon: "Light", Speed:4, Movement: "Foot", MinRange:1, MaxRange:1, Cost:250, tag1:"Conqueror", tag2:"Commando", tag3:"", tag4:"",AttackOffsetX:[0,-2,8,-2,-12]},
	{name: "Polesian Marines", shortname: "Marines", HP:70, Armor: "Light", Attack: 30, Weapon: "Light", Speed:3, Movement: "Amphibious", MinRange:1, MaxRange:1, Cost:250, tag1:"Conqueror", tag2:"Crab", tag3:"", tag4:"",AttackOffsetX:[0,0,13,0,-13]},
	{name: "Stormtroopers", shortname: "Stormtroopers", HP:70, Armor: "Light", Attack: 30, Weapon: "Medium", Speed:3, Movement: "Foot", MinRange:1, MaxRange:3, Cost:250, tag1:"Conqueror", tag2:"", tag3:"", tag4:""},
	{name: "Bolt Tank Battalion", shortname: "Bolt", HP:55, Armor: "Light", Attack: 25, Weapon: "Light", Speed:6, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:235, tag1:"Schwerpunkt", tag2:"", tag3:"", tag4:""},
	{name: "Asekara Tank Battalion", shortname: "Asekara", HP:70, Armor: "Medium", Attack: 35, Weapon: "Medium", Speed:5, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:340, tag1:"Streamlined", tag2:"Schwerpunkt", tag3:"", tag4:"", AttackOffsetX:[0,-15,-15,-15,-15], AttackOffsetY:[0,-17,-13,-17,-13]},
	{name: "Gorlitz Tank Battalion", shortname: "Gorlitz", HP:105, Armor: "Heavy", Attack: 50, Weapon: "Heavy", Speed:4, Movement: "Tracked", MinRange:1, MaxRange:1,  Cost:550, tag1:"", tag2:"", tag3:"", tag4:""},
	{name: "Flak Tank", shortname: "Flak", HP:55, Armor: "Light", Attack: 20, Weapon: "Light", Speed:5, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:285, tag1:"Skysweeper", tag2:"Anti-Air", tag3:"", tag4:"",AttackOffsetX:[0,0,-10,-21,-40],AttackOffsetY:[0,-28,-44,-21,-44]},
	{name: "Tank-Hunter", shortname: "Hunter", HP:60, Armor: "Medium", Attack: 35, Weapon: "Medium", Speed:5, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:315, tag1:"Anti-Tank", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,8,-10,7,-49],AttackOffsetY:[0,-40,-44,0,-2]},
	{name: "Imperterritus Tank Battalion", shortname: "Imperterritus", HP:175, Armor: "Heavy", Attack: 55, Weapon: "Heavy", Speed:3, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:1050 ,tag1:"Anti-Tank", tag2:"Cemented Steel Armor", tag3:"", tag4:"", StaticOffsetX:[0,-22,0,-23,-44], StaticOffsetY:[0,-20,0,-2,0], AttackOffsetX:[0,-32,0,-32,-63], AttackOffsetY:[0,-25,-12,0,-12] ,MovementBoxX:100, MovementBoxY:70,MovementOffsetX:[0,-20,0,0,0],MovementOffsetY:[0,-20,0,-20,-44]},
	{name: "Koschei Tank Battalion", shortname: "Koschei", HP:100, Armor: "Heavy", Attack: 55, Weapon: "Medium", Speed:4, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:760 ,tag1:"Schwerpunkt", tag2:"Bewegungskrieg", tag3:"", tag4:"", AttackOffsetX:[0,-19,-10,-19,-23], AttackOffsetY:[0,-23,-13,0,-13]},
	{name: "500mm Big Bertha Battery", shortname: "Thunder", HP:100, Armor: "Medium", Attack: 55, Weapon: "Heavy", Speed:3, Movement: "Tracked", MinRange:3, MaxRange:7, Cost:845 ,tag1:"Anti-Structure", tag2:"", tag3:"", tag4:"", SpriteOffset:[0,0,0,0,0], AttackSpriteOffset:[0,0,0,0,0]},
	{name: "Crab Tank Battalion", shortname: "Crab", HP:65, Armor: "Light", Attack: 30, Weapon: "Medium", Speed:5, Movement: "Amphibious", MinRange:1, MaxRange:1, Cost:325 ,tag1:"Crab", tag2:"", tag3:"", tag4:""},
	{name: "AMPAC", shortname: "AMPAC", HP:75, Armor: "Medium", Attack: 55, Weapon: "Medium", Speed:5, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:425 ,tag1:"Anti-Tank", tag2:"Commando", tag3:"Streamlined", tag4:""},
	{name: "Howitzer Battery", shortname: "Howitzer", HP:40, Armor: "Light", Attack: 30, Weapon: "Heavy", Speed:3, Movement: "Tracked", MinRange:3, MaxRange:5, Cost:375, tag1:"Anti-Structure", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,-9,0,-9,-7], AttackOffsetY:[0,-14,-7,-14,-14]},
	{name: "Hellstorm Battery", shortname: "Hellstorm", HP:40, Armor: "Light", Attack: 40, Weapon: "Medium", Speed:6, Movement: "Wheeled", MinRange:2, MaxRange:4,  Cost:550, tag1:"Mobile Battery", tag2:"", tag3:"", tag4:""},
	{name: "SCADP", shortname: "SCADP", HP:40, Armor: "Light", Attack: 20, Weapon: "Light", Speed:6, Movement: "Wheeled", MinRange:2, MaxRange:4,  Cost:940, tag1:"Anti-Infantry", tag2:"Dispersion", tag3:"", tag4:""},
	{name: "Raptor Fighter Squadron", shortname: "Raptor", HP:50, Armor: "Light", Attack: 25, Weapon: "Light", Speed:8, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:400, tag1:"Skysweeper", tag2:"", tag3:"", tag4:""},
	{name: "Eagle Striker Squadron", shortname: "Eagle", HP:50, Armor: "Light", Attack: 30, Weapon: "Medium", Speed:7, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:450, tag1:"", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,-2,0,-2,0]},
	{name: "Condor Bomber Squadron", shortname: "Condor", HP:50, Armor: "Light", Attack: 35, Weapon: "Heavy", Speed:6, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:550, tag1:"", tag2:"", tag3:"", tag4:""},
	{name: "Akontio Torpedor Squadron", shortname: "Akontio", HP:50, Armor: "Light", Attack: 50, Weapon: "Medium", Speed:6, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:500, tag1:"", tag2:"", tag3:"", tag4:""},
	{name: "Zeus Stormlord", shortname: "Zeus", HP:70, Armor: "Light", Attack: 35, Weapon: "Medium", Speed:10, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:750, tag1:"", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,-2,0,-2,0]},
	{name: "Intrepid", shortname: "Intrepid", HP:50, Armor: "Light", Attack: 15, Weapon: "Light", Speed:6, Movement: "Rudder", MinRange:1, MaxRange:1, Cost:170 ,tag1:"Conqueror", tag2:"", tag3:"", tag4:"", SpriteOffset:[0,0,0,0,0], AttackOffsetX:[0,0,0,0,9]},
	{name: "Submersible", shortname: "Submersible", HP:25, Armor: "Light", Attack: 50, Weapon: "Medium", Speed:3, Movement: "Heavy Rudder", MinRange:1, MaxRange:1, Cost:400 ,tag1:"Submarine", tag2:"", tag3:"", tag4:"", SpriteOffset:[0,0,0,0,0], AttackSpriteOffset:[0,0,0,0,0]},
	{name: "Destroyer", shortname: "Destroyer", HP:50, Armor: "Medium", Attack: 25, Weapon: "Medium", Speed:5, Movement: "Rudder", MinRange:1, MaxRange:2, Cost:300 ,tag1:"Depth Strike", tag2:"Skysweeper", tag3:"Sonar", tag4:"Steer", SpriteOffset:[0,0,0,0,0], AttackSpriteOffset:[0,0,0,0,0]},
	{name: "Light Cruiser", shortname: "CruiserL", HP:70, Armor: "Medium", Attack: 30, Weapon: "Medium", Speed:5, Movement: "Rudder", MinRange:1, MaxRange:3, Cost:500 ,tag1:"Depth Strike", tag2:"Sonar", tag3:"Skysweeper", tag4:"Anti-Air", SpriteOffset:[0,0,0,0,0], AttackSpriteOffset:[0,0,0,0,0]},
	{name: "Heavy Cruiser", shortname: "CruiserH", HP:105, Armor: "Heavy", Attack: 40, Weapon: "Heavy", Speed:4, Movement: "Rudder", MinRange:2, MaxRange:5, Cost:1600 ,tag1:"Skysweeper", tag2:"", tag3:"", tag4:"", SpriteOffset:[0,0,0,0,0], AttackOffsetX:[0,10,-10,10,-43],AttackOffsetY:[0,-25,-42,-3,-42]},
	{name: "Capital Ship", shortname: "Battleship", HP:175, Armor: "Heavy", Attack: 50, Weapon: "Heavy", Speed:4, Movement: "Heavy Rudder", MinRange:3, MaxRange:7, Cost:4000 ,tag1:"Skysweeper", tag2:"", tag3:"", tag4:"", AttackOffsetX:[0,-44,-54,-44,-44], AttackOffsetY:[0,-37,-35,-35,-35]},
	{name: "Aircraft Carrier", shortname: "Carrier", HP:175, Armor: "Heavy", Attack: 35, Weapon: "Medium", Speed:4, Movement: "Heavy Rudder", MinRange:3, MaxRange:10, Cost:5000 ,tag1:"Skysweeper", tag2:"Anti-Ship", tag3:"", tag4:"", StaticOffsetX:[0,-10,-20,-10,-31], StaticOffsetY:[0,-20,-20,-20,-20],MovementOffsetX:[0,-20,-20,-10,-20],MovementOffsetY:[0,-10,0,-10,-15], AttackOffsetX:[0,-10,-17,-10,-31], AttackOffsetY:[0,-20,-20,-20,-20]},
	{name: "Barricade", shortname:"Barricade", HP:100, Armor:"Medium", Attack:0, Weapon:"None", Speed:0, Movement:"Stationary", MinRange:1, MaxRange:1, Cost:200, tag1:"Delay 1", tag2:"", tag3:"", tag4:"", SpriteOffset:[0,0,0,0,0], AttackSpriteOffset:[0,0,0,0,0]},
	{name: "Bunker", shortname:"Bunker",HP:100,Armor:"Medium",Attack:25,Weapon:"Light",Speed:0,Movement:"Stationary",MinRange:1,MaxRange:1,Cost:250, tag1:"Delay 1", tag2:"", tag3:"", tag4:"", SpriteOffset:[0,0,0,0,0], AttackOffsetX:[0,-44,-44,-44,-44],AttackOffsetY:[0,-44,-44,-44,-44]},
	{name: "Turret", shortname:"Turret",HP:140,Armor:"Medium",Attack:35,Weapon:"Medium",Speed:0,Movement:"Stationary",MinRange:2,MaxRange:5,Cost:350, tag1:"Delay 2", tag2:"Skysweeper", tag3:"", tag4:"", SpriteOffset:[0,0,0,0,0], AttackSpriteOffset:[0,0,0,0,0]},
	{name: "Flak Tower", shortname:"FlakTower",HP:70,Armor:"Medium",Attack:20,Weapon:"Light",Speed:0,Movement:"Stationary",MinRange:2,MaxRange:5,Cost:350, tag1:"Delay 2", tag2:"Skysweeper", tag3:"Anti-Air", tag4:"", SpriteOffset:[0,0,0,0,0], AttackSpriteOffset:[0,0,0,0,0]},
	{name: "Coastal Battery", shortname:"Coastal",HP:175,Armor:"Heavy",Attack:70,Weapon:"Heavy",Speed:0,Movement:"Stationary",MinRange:3,MaxRange:7,Cost:500, tag1:"Delay 2", tag2:"Coastal", tag3:"", tag4:"", SpriteOffset:[0,0,0,0,0], AttackSpriteOffset:[0,0,0,0,0]},
	{name: "Radar/Sonar Station", shortname:"Radar",HP:70,Armor:"Medium",Attack:0,Weapon:"None",Speed:0,Movement:"Stationary",MinRange:1,MaxRange:1,Cost:350, tag1:"Delay 2", tag2:"Radar", tag3:"", tag4:"", SpriteOffset:[0,0,0,0,0], AttackSpriteOffset:[0,0,0,0,0]},
	{name: "Missile Silo", shortname:"Silo",HP:25,Armor:"Medium",Attack:50,Weapon:"Medium",Speed:0,Movement:"Stationary",MinRange:3,MaxRange:10,Cost:500, tag1:"Delay 3", tag2:"Dispersion", tag3:"Self-Destruct", tag4:"", SpriteOffset:[0,0,0,0,0], AttackSpriteOffset:[0,0,0,0,0]},
	{name: "SAMSON", shortname: "Samson", HP:50, Armor: "Light", Attack: 500, Weapon: "Heavy", Speed:10, Movement: "Flight", MinRange:1, MaxRange:1, Cost:1000 ,tag1:"JUDGEMENT", tag2:"Heroic", tag3:"", tag4:"", SpriteOffset:[0,0,0,0,0], AttackSpriteOffset:[0,0,0,0,0]}

	];

MemeUnits=[
	{name: "Construction Site", shortname:"Skele", HP:50, Armor: "Medium", Attack: 0, Weapon: "Medium", Speed:0, Movement: "Foot", MinRange:1, MaxRange:1, Cost:0 ,tag1:"Inertial", tag2:"", tag3:"", tag4:"",StaticOffsetX:[0,0,0,0,0],StaticOffsetY:[0,0,0,0,0],MovementBoxX:0,MovementBoxY:0,MovementOffsetX:[0,0,0,0,0],MovementOffsetY:[0,0,0,0,0],AttackOffsetX:[0,0,0,0,0],AttackOffsetY:[0,0,0,0,0],IdleOffsetX:[0,0,0,0,0],IdleOffsetY:[0,0,0,0,0]},

	{name: Language.UnitNames[1], HP:50, shortname: "LightInf", MLPR:true, Armor: "Light", Attack: 10, Weapon: "Light", Speed:4, Movement: "Foot", MinRange:1, MaxRange:1, Cost:100, TechLevel:1, Power:10, Role:"", tag1:"Conqueror", tag2:"Streamlined", tag3:"", tag4:"",AttackOffsetX:[0,-1,8,-1,-12]},
	{name: Language.UnitNames[2], HP:70, shortname: "Infantry", MLPR:true, Armor: "Light", Attack: 20, Weapon: "Light", Speed:3, Movement: "Foot", MinRange:1, MaxRange:1, Cost:150, TechLevel:1, Power:15, Role:"", tag1:"Conqueror", tag2:"", tag3:"", tag4:"" ,AttackOffsetX:[0,0,9,0,-9]},
	{name: Language.UnitNames[3], shortname: "AssaultInf", MLPR:true, HP:80, Armor:"Light", Attack: 25, Weapon: "Medium", Speed:3, Movement: "Foot", MinRange:1, MaxRange:1, Cost:200, TechLevel:2, Power:25, Role:"", tag1:"Conqueror", tag2:"Schwerpunkt", tag3:"", tag4:"",AttackOffsetX:[0,0,12,0,-12]},
	{name: Language.UnitNames[4], shortname: "Snipers", MLPR:true, HP:70, Armor: "Light", Attack: 30, Weapon: "Light", Speed:4, Movement: "Foot", MinRange:1, MaxRange:1, Cost:250, TechLevel:3, Power:35, Role:"", tag1:"Conqueror", tag2:"Commando", tag3:"", tag4:"", FactionSpecificity:3,AttackOffsetX:[0,-2,8,-2,-12]},
	{name: Language.UnitNames[5], shortname: "Marines", MLPR:true, HP:80, Armor: "Light", Attack: 25, Weapon: "Light", Speed:4, Movement: "Amphibious", MinRange:1, MaxRange:1, Cost:250, TechLevel:3, Power:30, Role:"", tag1:"Conqueror", tag2:"Crab", tag3:"", tag4:"", FactionSpecificity:4,AttackOffsetX:[0,0,13,0,-13]},
	{name: Language.UnitNames[6], shortname: "Stormtroopers", MLPR:true, HP:70, Armor: "Light", Attack: 30, Weapon: "Medium", Speed:3, Movement: "Foot", MinRange:1, MaxRange:3, Cost:250, TechLevel:3, Power:25, Role:"", tag1:"Conqueror", tag2:"", tag3:"", tag4:"", FactionSpecificity:5,AttackOffsetX:[0,0,10,0,-10]},
	{name: Language.UnitNames[7], shortname: "SpecOps", MLPR:true, HP:50, Armor: "Light", Attack: 20, Weapon: "Medium", Speed:4, Movement: "Foot", MinRange:1, MaxRange:1, Cost:300, TechLevel:4, Power:25, Role:"", tag1:"Conqueror", tag2:"Anti-Structure", tag3:"Stealth", tag4:"Airborne", FactionSpecificity:2, AttackOffsetX:[0,0,13,0,-13]},
	{name: Language.UnitNames[8], shortname: "Guards", MLPR:true, HP:105, Armor: "Light", Attack: 35, Weapon: "Medium", Speed:3, Movement: "Foot", MinRange:1, MaxRange:1, Cost:350, TechLevel:5, Power:50, Role:"", tag1:"Conqueror", tag2:"Indomitable", tag3:"", tag4:"", FactionSpecificity:1, AttackOffsetX:[0,0,8,0,-8]},
	{name: Language.UnitNames[9], shortname: "Suicide", MLPR:true, HP:50, Armor: "Light", Attack: 23, Weapon: "Heavy", Speed:3, Movement: "Foot", MinRange:1, MaxRange:1, Cost:250, TechLevel:1, Power:25, Role:"", tag1:"Self-Destruct", tag2:"Indomitable", tag3:"Cavitation Explosion", tag4:"Tank-Hunter", FactionSpecificity:5,AttackOffsetX:[0,0,0,0,0]},
	{name: "White Paladin", shortname:"Paladin", MLPR:true, HP: 140, Armor:"Medium", Attack:50, Weapon:"Medium",Speed:2, Movement:"Foot", MinRange:1, MaxRange:1, Cost:700, TechLevel:6, Power:110, Role:"", tag1: "Conqueror", tag2: "Indomitable", tag3: "Heroic", tag4: "", FactionSpecificity:1},

	{name: "Cavalry", shortname:"Cavalry", MLPR:true, HP:80, Armor: "Light", Attack: 20, Weapon: "Light", Speed:5, Movement: "Foot", MinRange:1, MaxRange:1, Cost:200, TechLevel:1, Power:20, Role:"", tag1:"Conqueror", tag2:"", tag3:"", tag4:"",StaticOffsetX:[0,9,-3,9,-3],StaticOffsetY:[0,1,5,1,5],MovementOffsetX:[0,14,0,14,0],MovementOffsetY:[0,0,8,0,8],AttackOffsetX:[0,10,0,10,0],AttackOffsetY:[0,0,5,0,5]},
	{name: "Motorized Infantry", shortname: "MotorInf", MLPR:true, HP:80, Armor: "Light", Attack: 25, Weapon: "Medium", Speed:6, Movement: "Wheeled", MinRange:1, MaxRange:1, Cost:200, TechLevel:2, Power:30, Role:"", tag1:"Conqueror", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,0,0,0,-14]},
	{name: "Supply Truck", shortname:"Supply", MLPR:true, HP:30, Armor:"Light", Attack:20, Weapon:"None", Speed:6, Movement:"Wheeled", MinRange:1, MaxRange:3, Cost:400, TechLevel:2, Power:10, Role:"", tag1:"Supply Distribution", tag2:"", tag3:"", tag4:""},
	{name: "Flak Tank", shortname: "Flak", MLPR:true, HP:60, Armor: "Medium", Attack: 20, Weapon: "Light", Speed:5, Movement: "Tracked", MinRange:1, MaxRange:3, Cost:485, TechLevel:3, Power:25, Role:"", tag1:"Skysweeper", tag2:"Anti-Air", tag3:"", tag4:"",AttackOffsetX:[0,0,-10,-21,-40],AttackOffsetY:[0,-33,-44,-21,-44]},
	{name: "Crab Tank Battalion", shortname: "Crab", MLPR:true, HP:90, Armor: "Medium", Attack: 30, Weapon: "Light", Speed:6, Movement: "Amphibious", MinRange:1, MaxRange:1, Cost:325, TechLevel:3, Power:35, Role:"" ,tag1:"Crab", tag2:"", tag3:"", tag4:"", FactionSpecificity:4, AttackOffsetX:[0,-16,-15,-15,-15], AttackOffsetY:[0,-19,-13,-17,-13]},
	{name: "SCADP", shortname: "SCADP", MLPR:true, HP:40, Armor: "Light", Attack: 20, Weapon: "Light", Speed:6, Movement: "Wheeled", MinRange:1, MaxRange:3,  Cost:940, TechLevel:5, Power:60, Role:"", tag1:"Anti-Infantry", tag2:"Dispersion", tag3:"", tag4:"",AttackOffsetX:[0,0,0,0,-14],AttackOffsetY:[0,-18,0,-2,0]},	
	{name: "Trosky Warmachine", shortname:"Warmachine", MLPR:true, HP:100, Armor: "Medium", Attack: 25, Weapon: "Medium", Speed:4, Movement: "Tracked", MinRange:2, MaxRange:6, Cost:2000, TechLevel:1, Power:50, Role:"", tag1:"Tank Pooper", tag2:"", tag3:"", tag4:"",StaticOffsetY:[0,-23,-23,-23,-23],MovementOffsetX:[0,-23,-23,-23,-23],MovementBoxY:79,MovementOffsetY:[0,0,0,0,0]},
	{name: "Sisu AIC", shortname:"Sisu", MLPR:true, HP:100, Armor:"Light", Attack:30, Weapon: "Light", Speed:5, Movement:"Wheeled", MinRange:1, MaxRange:1, Cost:640, TechLevel:4, Power:45, Role:"", tag1:"Conqueror", tag2:"Commando", tag3:"", tag4:"", FactionSpecificity:3},
	{name: "Boing SH-11 Megacockter", shortname:"Megacockter", MLPR:true, HP:30, Armor:"Light", Attack: 30, Weapon: "Light", Speed:7, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:500, TechLevel:5, Power:50, Role:"", tag1:"Bewegungskrieg", tag2:"Schwerpunkt", tag3:"", tag4:"", FactionSpecificity:4, AttackOffsetX:[0,0,0,0,-7], AttackOffsetY:[0,-14,0,0,0]},
	{name: "AYIN", shortname:"AYIN", MLPR:true, HP:40, Armor:"Medium", Attack:25, Weapon:"Medium", Speed:5, Movement:"Tracked", MinRange:1, MaxRange:7, Cost:1885, TechLevel:6, Power:50, Role:"", tag1:"Streamblast", tag2:"", tag3:"", tag4:""},

	{name: Language.UnitNames[21], shortname: "Cockroach", MLPR:true, HP:50, Armor:"Light", Attack:15, Weapon:"Light", Speed:8, Movement:"Tracked", MinRange:1, MaxRange:1, Cost:190, TechLevel:1, Power:15, Role:"", tag1:"Streamlined", tag2:"", tag3:"", tag4:""},
	{name: Language.UnitNames[22], shortname: "Bolt", MLPR:true, HP:75, Armor: "Light", Attack: 25, Weapon: "Light", Speed:6, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:340, TechLevel:2, Power:30, Role:"", tag1:"Schwerpunkt", tag2:"", tag3:"", tag4:"", AttackOffsetX:[0,-12,-0,-12,-20], AttackOffsetY:[0,-9,-0, 9,-0]},
	{name: Language.UnitNames[23], shortname: "Asekara", MLPR:false, HP:100, Armor: "Medium", Attack: 35, Weapon: "Medium", Speed:5, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:500, TechLevel:3, Power:40, Role:"", tag1:"Streamlined", tag2:"Schwerpunkt", tag3:"Bewegungskrieg", tag4:"", AttackOffsetX:[0,-16,-15,-15,-15], AttackOffsetY:[0,-19,-13,-17,-13]},
	{name: Language.UnitNames[24], shortname: "Gorlitz", MLPR:true, HP:110, Armor: "Heavy", Attack: 50, Weapon: "Heavy", Speed:4, Movement: "Tracked", MinRange:1, MaxRange:1,  Cost:800, TechLevel:4, Power:50, Role:"", tag1:"", tag2:"", tag3:"", tag4:"", StaticOffsetX:[0,0,-7,0,-7], AttackOffsetX:[0,0,-14,0,-14]},
	{name: Language.UnitNames[25], shortname: "Hunter", MLPR:true, HP:100, Armor: "Medium", Attack: 35, Weapon: "Medium", Speed:5, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:425, TechLevel:3, Power:40, Role:"", tag1:"Anti-Tank", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,8,-10,7,-49],AttackOffsetY:[0,-40,-44,0,-2]},
	{name: Language.UnitNames[26], shortname: "AMPAC", MLPR:true, HP:100, Armor: "Medium", Attack: 35, Weapon: "Heavy", Speed:6, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:650, TechLevel:4, Power:60, Role:"" ,tag1:"Anti-Tank", tag2:"Tank-Hunter", tag3:"Streamlined", tag4:"", FactionSpecificity:5,StaticOffsetX:[0,-3,0,-3,-10],AttackOffsetX:[0,-11,-1,-11,-23],AttackOffsetY:[0,-10,-5,5,-5]},
	{name: Language.UnitNames[27], shortname: "Koschei", MLPR:true, HP:120, Armor: "Heavy", Attack: 55, Weapon: "Medium", Speed:5, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:950, TechLevel:5, Power:120, Role:"" ,tag1:"Schwerpunkt", tag2:"Bewegungskrieg", tag3:"", tag4:"", FactionSpecificity:2, AttackOffsetX:[0,-19,-10,-19,-25], AttackOffsetY:[0,-28,-15,0,-15]},
	{name: Language.UnitNames[28], shortname: "Imperterritus", MLPR:true, HP:175, Armor: "Heavy", Attack: 55, Weapon: "Heavy", Speed:3, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:2450, TechLevel:5, Power:200, Role:"" ,tag1:"Cemented Steel Armor", tag2:"Terrifying", tag3:"", tag4:"", FactionSpecificity:1, StaticOffsetX:[0,-22,0,-23,-44], StaticOffsetY:[0,-20,0,-2,0], AttackOffsetX:[0,-31,-3,-33,-59], AttackOffsetY:[0,-25,-5,-5,-5],MovementOffsetX:[0,-20,0,-0,0],MovementOffsetY:[0,-20,0,-20,-44]},
	{name: "Entwicklung Pantser", shortname:"Entwicklung", MLPR:true, HP:170, Armor:"Heavy", Attack:65, Weapon:"Medium", Speed:7, Movement:"Tracked", MinRange:1, MaxRange:1, Cost:1500, TechLevel:6, Power:340, Role:"" ,tag1:"Schwerpunkt", tag2:"Bewegungskrieg", tag3:"Mobile Battery", tag4:"Terrifying", AttackOffsetX:[0,-19,-10,-19,-25], AttackOffsetY:[0,-28,-15,0,-15]},
	{name: "GBC Roland MkIII",shortname:"Roland", MLPR:true, HP:245, Armor:"Heavy", Attack:70, Weapon:"Heavy", Speed:5, Movement: "Tracked", MinRange:1, MaxRange:1, Cost:3500, TechLevel:6, Power:500, Role:"", tag1:"Cemented Steel Armor", tag2:"Schwerpunkt", tag3:"Bewegungskrieg", tag4:"Terrifying", StaticOffsetX:[0,-22,0,-23,-44], StaticOffsetY:[0,-20,0,-2,0], AttackOffsetX:[0,-31,-3,-33,-59], AttackOffsetY:[0,-25,-5,-5,-5],MovementOffsetX:[0,-20,0,-0,0],MovementOffsetY:[0,-20,0,-20,-44]},

	{name: "Howitzer Battery", shortname: "Howitzer", MLPR:true, HP:40, Armor: "Light", Attack: 25, Weapon: "Medium", Speed:3, Movement: "Foot", MinRange:2, MaxRange:5, Cost:375, TechLevel:2, Power:20, Role:"", tag1:"Anti-Structure", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,-9,0,-9,-7], AttackOffsetY:[0,-14,-7,-14,-14]},
	{name: "AA Artillery", shortname:"AA", MLPR:true, HP:40, Armor:"Light", Attack:20, Weapon:"Light", Speed:3, Movement: "Foot", MinRange:1, MaxRange:3, Cost:340, TechLevel:2, Power:20, Role:"", tag1:"Skysweeper",tag2:"Anti-Air",tag3:"",tag4:"",AttackOffsetX:[0,0,7,0,-7],AttackOffsetY:[0,-14,-7,-14,-7]},
	{name: "Anti-Tank Artillery", shortname:"AT", MLPR:true, HP:40, Armor:"Light", Attack:30, Weapon:"Heavy",Speed:3, Movement:"Foot", MinRange:1, MaxRange:3, Cost:420, TechLevel:2, Power:25, Role:"", tag1:"", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,0,0,0,-21],AttackOffsetY:[0,-21,0,-7,0]},
	{name: "Moldan Battery", shortname: "Moldan", MLPR:true, HP:40, Armor: "Light", Attack: 25, Weapon: "Medium", Speed:6, Movement: "Wheeled", MinRange:2, MaxRange:4,  Cost:550, TechLevel:3, Power:35, Role:"", tag1:"Mobile Battery", tag2:"Schwerpunkt", tag3:"", tag4:"",StaticOffsetX:[0,0,-7,0,-7],StaticOffsetY:[0,0,-12,0,-12],AttackOffsetX:[0,0,-7,0,-20],AttackOffsetY:[0,-35,-22,-3,-22]},
	{name: "SPAB", shortname: "SPAB", MLPR:true,HP:60, Armor:"Medium", Attack:30, Weapon:"Medium", Speed:5, Movement:"Tracked", MinRange:2, MaxRange:5, Cost:580, TechLevel:3, Power:40, Role:"", tag1:"Anti-Structure", tag2:"Mobile Battery", tag3:"", tag4:"",AttackOffsetX:[0,0,0,0,-14],AttackOffsetY:[0,-14,0,0,0]},
	{name: "Rocket Tank", shortname:"Rocketank", MLPR:true, HP:60, Armor: "Light", Attack: 30, Weapon: "Light", Speed:4, Movement: "Foot", MinRange:1, MaxRange:4, Cost:500, TechLevel:4, Power:40, Role:"", tag1:"Schwerpunkt", tag2:"Mobile Battery", tag3:"", tag4:"",AttackOffsetX:[0,0,-2,0,-12],AttackOffsetY:[0,-7,-16,0,-16]},
	{name: "400mm Big Bertha", shortname: "Bertha", MLPR:true, HP:80, Armor: "Medium", Attack: 45, Weapon: "Heavy", Speed:2, Movement: "Tracked", MinRange:3, MaxRange:7, Cost:1100, TechLevel:5, Power:150, Role:"" ,tag1:"Anti-Structure", tag2:"", tag3:"", tag4:"", FactionSpecificity:3, StaticOffsetX:[0,0,-5,0,-6], StaticOffsetY:[0,-10,0,-10,0], AttackOffsetX:[0,0,0,0,-11], AttackOffsetY:[0,-39,-26,-10,-26]},
	{name: "Pula SRBMDP", shortname:"Pula", MLPR:true, HP:60, Armor:"Medium", Attack:20, Weapon:"Medium", Speed:5, Movement:"Wheeled", MinRange:3, MaxRange:10, Cost: 1000, TechLevel:5, Power:50, Role:"", tag1:"Anti-Structure", tag2:"", tag3:"", tag4:"", AttackOffsetX:[0,0,-6,0,3], AttackOffsetY:[0,6,-38,-7,-38]},
	{name: "Tugarin ATMB", shortname:"Tugarin", MLPR:true, HP:90, Armor:"Light", Attack:50, Weapon:"Heavy", Speed:5, Movement:"Wheeled", MinRange:2, MaxRange:5, Cost:1500, TechLevel:6, Power:180, Role:"", tag1:"Tank Hunter", tag2:"Anti-Tank", tag3:"Mobile Battery", tag4:"Bewegungskrieg",AttackOffsetX:[0,0,0,0,-14],AttackOffsetY:[0,-18,0,-2,0]},
	{name: "Brimstone Battery", shortname:"Brimstone", MLPR:true, HP:100, Armor:"Light", Attack:70, Weapon:"Medium", Speed:5, Movement:"Wheeled", MinRange:3, MaxRange:7, Cost: 2500, TechLevel:6, Power:350, Role:"", tag1:"Bewegungskrieg", tag2:"Schwerpunkt", tag3:"Mobile Battery", tag4:"", StaticOffsetX:[0,0,-5,0,-6], StaticOffsetY:[0,-10,0,-10,0], AttackOffsetX:[0,0,0,0,-11], AttackOffsetY:[0,-39,-26,-10,-26]},
	
	{name: "Stork Transport", shortname: "Stork", MLPR:true, HP:30, Armor: "Light", Attack:0, Weapon:"None", Speed:7, Movement:"Flight", MinRange:1, MaxRange:1, Cost:150, TechLevel:2, Power:0, Role:"", tag1:"Air Transport",tag2:"",tag3:"",tag4:""},
	{name: "Pelikan Transport Heli", shortname:"Pelikan", MLPR:true, HP:30, Armor: "Light", Attack:30, Weapon:"None", Speed:6, Movement:"Flight", MinRange:1, MaxRange:1, Cost:500, TechLevel:3, Power:15, Role:"", tag1:"Supply Distribution",tag2:"",tag3:"",tag4:""},
	{name: "Raptor Fighter", shortname: "Raptor", MLPR:true, HP:50, Armor: "Light", Attack: 15, Weapon: "Light", Speed:8, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:400, TechLevel:3, Power:20, Role:"", tag1:"Skysweeper", tag2:"", tag3:"", tag4:""},
	{name: "Eagle Striker", shortname: "Eagle", MLPR:true, HP:50, Armor: "Light", Attack: 25, Weapon: "Medium", Speed:7, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:450, TechLevel:3, Power:25, Role:"", tag1:"", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,-2,0,-2,-4]},
	{name: "Condor Bomber", shortname: "Condor", MLPR:true, HP:50, Armor: "Light", Attack: 35, Weapon: "Medium", Speed:6, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:550, TechLevel:4, Power:35, Role:"", tag1:"Cavitation Explosion", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,0,0,0,-56],AttackOffsetY:[0,-56,0,0,0]},
	{name: "Akontio Torpedor", shortname: "Akontio", MLPR:true, HP:50, Armor: "Light", Attack: 50, Weapon: "Medium", Speed:5, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:550, TechLevel:4, Power:50, Role:"", tag1:"Seabound", tag2:"Cavitation Explosion", tag3:"", tag4:""},
	{name: "Zeus Stormlord", shortname: "Zeus", MLPR:true, HP:70, Armor: "Light", Attack: 35, Weapon: "Medium", Speed:10, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:910, TechLevel:5, Power:80, Role:"", tag1:"Skysweeper", tag2:"", tag3:"", tag4:"",AttackOffsetX:[0,-2,0,-2,0]},
	{name: "Solovey Superbomber", shortname:"Solovey", MLPR:true, HP:100, Armor:"Light", Attack:40, Weapon:"Heavy", Speed:6, Movement:"Flight",MinRange:1, MaxRange:1, Cost:850, TechLevel:5, Power:80, Role:"", tag1:"Anti-Structure", tag2:"", tag3:"", tag4:"", FactionSpecificity:2,AttackOffsetX:[0,0,0,0,-56],AttackOffsetY:[0,-56,0,0,0]},
	{name: "AVN-1 Stihie", shortname:"Stihie", MLPR:true, HP: 70, Armor:"Light", Attack: 40, Weapon: "Light", Speed:10, Movement: "Flight", MinRange:1, MaxRange:1,  Cost:1400, TechLevel:6, Power:150, Role:"", tag1:"Skysweeper", tag2:"Stealth", tag3:"", tag4:""},
	{name: "ALEPH", shortname: "ALEPH", MLPR:true, HP:50, Armor: "Light", Attack: 5000, Weapon: "Heavy", Speed:6, Movement: "Flight", MinRange:1, MaxRange:1, Cost:5000, TechLevel:7, Power:1000, Role:"" ,tag1:"JUDGEMENT", tag2:"Indomitable", tag3:"Self-Destruct", tag4:"Inertial",AttackOffsetX:[0,0,0,0,-56],AttackOffsetY:[0,-56,0,0,0]},
	
	{name: "Barge Convoy", shortname: "Convoy", MLPR:true, HP:100, Armor: "Medium", Attack:0, Weapon:"None", Speed:5, Movement: "Rudder", MinRange:1, MaxRange:1, Cost:100, TechLevel:1, Power:0, Role:"", tag1:"Naval Transport", tag2:"", tag3:"", tag4:"", StaticOffsetY:[0,-25,-22,-22,-22],MovementOffsetX:[0,-25,-22,-22,-22]},
	{name: "Intrepid", shortname: "Intrepid", MLPR:true, HP:50, Armor: "Light", Attack: 15, Weapon: "Light", Speed:6, Movement: "Rudder", MinRange:1, MaxRange:1, Cost:170, TechLevel:1, Power:10, Role:"" ,tag1:"Conqueror", tag2:"", tag3:"", tag4:"", SpriteOffset:[0,0,0,0,0], AttackOffsetX:[0,0,0,0,-9],AttackOffsetY:[0,-5,2,-5,2]},
	{name: "Submersible", shortname: "Submersible", MLPR:true, HP:50, Armor: "Light", Attack: 50, Weapon: "Medium", Speed:3, Movement: "Heavy Rudder", MinRange:1, MaxRange:1, Cost:500, TechLevel:2, Power:50, Role:"" ,tag1:"Submerged", tag2:"Seabound", tag3:"Stealth", tag4:"", SpriteOffset:[0,0,0,0,0], AttackSpriteOffset:[0,0,0,0,0]},
	{name: "Destroyer", shortname: "Destroyer", MLPR:true, HP:100, Armor: "Medium", Attack: 25, Weapon: "Medium", Speed:6, Movement: "Rudder", MinRange:1, MaxRange:1, Cost:300, TechLevel:2, Power:50, Role:"" ,tag1:"Depth Charge", tag2:"Skysweeper", tag3:"Sonar", tag4:"Steer", AttackOffsetX:[0,0,0,0,-28], AttackOffsetY:[0,-4,-14,0,-14]},
	{name: "Light Cruiser", shortname: "CruiserL", MLPR:true, HP:250, Armor: "Medium", Attack: 30, Weapon: "Medium", Speed:5, Movement: "Rudder", MinRange:1, MaxRange:3, Cost:1000, TechLevel:3, Power:150, Role:"" ,tag1:"Depth Charge", tag2:"Skysweeper", tag3:"Sonar", tag4:"Anti-Air", AttackOffsetX:[0,-44,-44,-44,-44], AttackOffsetY:[0,-37,-37,-35,-37]},
	{name: "Heavy Cruiser", shortname: "CruiserH", MLPR:true, HP:500, Armor: "Heavy", Attack: 60, Weapon: "Heavy", Speed:4, Movement: "Rudder", MinRange:2, MaxRange:5, Cost:2000, TechLevel:3, Power:500, Role:"" ,tag1:"Skysweeper", tag2:"", tag3:"", tag4:"", SpriteOffset:[0,0,0,0,0], AttackOffsetX:[0,10,-6,9.75,-40],AttackOffsetY:[0,-25,-42,-3,-42]},
	{name: "Battleship", shortname: "Battleship", MLPR:true, HP:1500, Armor: "Heavy", Attack: 100, Weapon: "Heavy", Speed:4, Movement: "Heavy Rudder", MinRange:3, MaxRange:7, Cost:5000, TechLevel:4, Power:3000, Role:"" ,tag1:"Skysweeper", tag2:"Cemented Steel Armor", tag3:"", tag4:"", AttackOffsetX:[0,-44,-49,-44,-39], AttackOffsetY:[0,-32,-33,-35,-33]},
	{name: "Aircraft Carrier", shortname: "Carrier", MLPR:true, HP:1050, Armor: "Heavy", Attack: 70, Weapon: "Medium", Speed:4, Movement: "Heavy Rudder", MinRange:3, MaxRange:10, Cost:7000, TechLevel:5, Power:5000, Role:"" ,tag1:"Skysweeper", tag2:"Anti-Ship", tag3:"Mobile Battery", tag4:"Cemented Steel Armor", StaticOffsetX:[0,-10,-20,-10,-31], StaticOffsetY:[0,-20,-20,-20,-20],MovementOffsetX:[0,-20,-20,-10,-20],MovementOffsetY:[0,-10,0,-10,-15], AttackOffsetX:[0,-10,-20,-10,-31], AttackOffsetY:[0,-20,-20,-20,-20]},
	{name: "Superbattleship", shortname: "Superbattleship", MLPR:true, HP:2500, Armor: "Heavy", Attack: 250, Weapon: "Heavy", Speed:4, Movement: "Heavy Rudder", MinRange:4, MaxRange:8, Cost:10000, TechLevel:5, Power:10000, Role:"" ,tag1:"Skysweeper", tag2:"Cemented Steel Armor", tag3:"", tag4:"", AttackOffsetX:[0,-44,-49,-44,-39], AttackOffsetY:[0,-32,-33,-35,-33]},
	{name: "Supercarrier", shortname: "Supercarrier", MLPR:true, HP:2450, Armor: "Heavy", Attack: 200, Weapon: "Medium", Speed:4, Movement: "Heavy Rudder", MinRange:3, MaxRange:10, Cost:15000, TechLevel:6, Power:25000, Role:"" ,tag1:"Skysweeper", tag2:"Anti-Ship", tag3:"Seabound", tag4:"Cemented Steel Armor", StaticOffsetX:[0,-10,-20,-10,-31], StaticOffsetY:[0,-20,-20,-20,-20],MovementOffsetX:[0,-20,-20,-10,-20],MovementOffsetY:[0,-10,0,-10,-15], AttackOffsetX:[0,-10,-20,-10,-31], AttackOffsetY:[0,-20,-20,-20,-20]},
	
	{name: "Barricade", shortname:"Barricade", MLPR:true, HP:100, Armor:"Medium", Attack:0, Weapon:"None", Speed:0, Movement:"Stationary", MinRange:1, MaxRange:1, Cost:200, TechLevel:1, Power:0, Role:"", Timer:1, tag1:"Inertial", tag2:"", tag3:"", tag4:"", SpriteOffset:[0,0,0,0,0], AttackSpriteOffset:[0,0,0,0,0]},
	{name: "Bunker", shortname:"Bunker", MLPR:true,HP:100,Armor:"Medium",Attack:25,Weapon:"Light",Speed:0,Movement:"Stationary",MinRange:1,MaxRange:1,Cost:250, TechLevel:1, Power:20, Role:"", Timer:1, tag1:"", tag2:"", tag3:"", tag4:"", SpriteOffsetY:[0,0,0,0,0], AttackOffsetX:[0,-44,-44,-44,-44],AttackOffsetY:[0,-44,-44,-44,-44]},
	{name: "Turret", shortname:"Turret", MLPR:true,HP:150,Armor:"Medium",Attack:30,Weapon:"Medium",Speed:0,Movement:"Stationary",MinRange:2,MaxRange:5,Cost:350, TechLevel:2, Power:70, Role:"", Timer:1, tag1:"", tag2:"", tag3:"", tag4:"", AttackOffsetX:[0,-45,-44,-44,-44],AttackOffsetY:[0,-34,-34.5,-34.5,-34.5]},
	{name: "Flak Tower", shortname:"FlakTower", MLPR:true,HP:150,Armor:"Medium",Attack:25,Weapon:"Light",Speed:0,Movement:"Stationary",MinRange:2,MaxRange:5,Cost:350, TechLevel:3, Power:90, Role:"", Timer:1, tag1:"Skysweeper", tag2:"Anti-Air", tag3:"", tag4:"", StaticOffsetX:[0,0,0,0,-7], StaticOffsetY:[0,-14,0,0,0], AttackOffsetX:[0,0,0,0,-14],AttackOffsetY:[0,-21,0,0,0]},
	{name: "Coastal Battery", shortname:"Coastal", MLPR:true,HP:500,Armor:"Heavy",Attack:120,Weapon:"Heavy",Speed:0,Movement:"Stationary",MinRange:3,MaxRange:7,Cost:800, TechLevel:3, Power:500, Role:"", Timer:1, tag1:"Seabound", tag2:"Cavitation Explosion", tag3:"", tag4:"", StaticOffsetX:[0,-7,5,0,-20], StaticOffsetY:[0,-25,0,0,0] , AttackOffsetX:[0,-55,-58,-56,-53],AttackOffsetY:[0,-49,-46,-48,-45]},
	{name: "Workshop", shortname:"Workshop", MLPR:true,HP:50,Armor:"Medium",Attack:0,Weapon:"None",Speed:0,Movement:"Stationary",MinRange:1,MaxRange:3,Cost:1000, TechLevel:3, Power:0, Role:"", Timer:2, tag1:"Supply Distribution", tag2:"Financial Center", tag3:"Inertial", tag4:"", AttackOffsetX:[0,0,0,0,0],AttackOffsetY:[0,0,0,0,0]},
	{name: "Missile Battery", shortname:"Missile", MLPR:true,HP:160,Armor:"Medium",Attack:50, Weapon:"Medium",Speed:0,Movement:"Stationary",MinRange:2,MaxRange:7,Cost:1200, TechLevel:5, Power:160, Role:"", Timer:2, tag1:"Skysweeper", tag2:"", tag3:"", tag4:"", StaticOffsetX:[0,0,0,0,0], StaticOffsetY:[0,-21,-14,-21,-14], AttackOffsetX:[0,0,0,0,-14],AttackOffsetY:[0,-51,-14,-14,-14]},
	{name: "Bastion", shortname:"Bastion", MLPR:true, HP:250, Armor:"Heavy",Attack:0, Weapon:"None", Speed:0, Movement:"Stationary",MinRange:1,MaxRange:1, Cost:2000, TechLevel:4, Power:0, Role:"", Timer: 2, tag1:"Inertial", tag2:"", tag3:"", tag4:""},
	{name: "Supply Depot", shortname:"Depot", MLPR:true, HP:100, Armor:"Medium", Attack:35 , Weapon:"None", Speed:0, Movement:"Stationary", MinRange:1, MaxRange:7, Cost:1300, TechLevel:2, Power:75, Role:"", Timer:2, tag1:"Supply Distribution", tag2:"", tag3:"", tag4:""},
	{name: "Fortress", shortname:"Fortress", MLPR:true, HP:1000, Armor:"Heavy",Attack:50, Weapon:"Medium", Speed:0, Movement:"Stationary",MinRange:1,MaxRange:7, Cost:5000, TechLevel:5, Power:1000, Role:"", Timer: 5, tag1:"Skysweeper", tag2:"", tag3:"", tag4:""},
	
	{name: "Spartans", shortname:"Guards", MLPR:true, HP:220, Armor:"Medium", Attack:90, Weapon:"Medium", Speed:5, Movement:"Foot", MinRange:1, MaxRange:1, Cost:1337, tag1:"Indomitable", tag2:"", tag3:"", tag4:"", AttackOffsetX:[0,0,8,0,-8]}
	];
GenericFactions=[	{name:"Null", faction:"Idk, man. Neutrals maybe?", color:"Gray", ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(100%)"},
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
MetacanonicalFactions=[
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
ParacanonicalFactions=[





	];
MemeFactions=[
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

RomaniaFactions=[
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
EuropeFactions=[
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
HistoricalFactions={};
NostalgiaFactions=[
	{name:"Null", faction:"Idk, man. Neutrals maybe?", color:"Gray", ChromaCode:"hue-rotate(175deg) saturate(0%) brightness(100%)"},
	{name:"Northern Federation", faction:"Federation Alliance", color:"Red", Preffix:"NFE", ChromaCode:"hue-rotate(0deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[true,true,false,false,true]},
	{name:"Akkadian Empire", faction:"Akkadian Alliance", color:"Blue", Preffix:"AKK", ChromaCode:"hue-rotate(250deg) saturate(100%) brightness(100%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[true,true,false,false,true]},
	{name:"Dragoon Nation", faction:"Federation Alliance", color:"Green", Preffix:"DRG", ChromaCode:"hue-rotate(150deg) saturate(100%) brightness(120%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[true,true,false,false,true]},
	{name:"Space Marines", faction:"Akkadian Alliance", color:"Green", Preffix:"SPA", ChromaCode:"hue-rotate(150deg) saturate(100%) brightness(120%)",SpecialInfantry:[false,false,false,false,true],SpecialVehicles:[true,true,true,true,true]},
	{name:"Mystery Army", faction:"Federation Alliance", color:"Black", Preffix:"MYS", ChromaCode:"hue-rotate(0deg) saturate(0%) brightness(70%) contrast(125%)",SpecialInfantry:[true,false,false,false,false],SpecialVehicles:[false,false,false,false,false]}];
AnniversaryFactions=[
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