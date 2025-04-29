const SCENARIOS = {
	"GREAT_WAR": {
		"name": "SCENARIO_NAME_GREAT_WAR",
		"desc": "SCENARIO_DESC_GREAT_WAR",
		"element": "SCENARIO_GREAT_WAR",
		"campaigns": ["SOMERTIN", "KARGIT", "TRANSKAL", "POLASIE", "ELAM"]
	},
	"TORMENTED_SOULS": {
		"name": "SCENARIO_NAME_TORMENTED_SOULS",
		"desc": "SCENARIO_DESC_TORMENTED_SOULS",
		"element": "",
		"campaigns": []
	},
	"INFLEXION_POINT": {
		"name": "SCENARIO_NAME_INFLEXION_POINT",
		"desc": "SCENARIO_DESC_INFLEXION_POINT",
		"element": "",
		"campaigns": []
	},
	"PEARLY_ORIENT": {
		"name": "SCENARIO_NAME_PEARLY_ORIENT",
		"desc": "SCENARIO_DESC_PEARLY_ORIENT",
		"element": "",
		"campaigns": []
	},
	"STARLESS_MIDNIGHT": {
		"name": "SCENARIO_NAME_STARLESS_MIDNIGHT",
		"desc": "SCENARIO_DESC_STARLESS_MIDNIGHT",
		"element": "",
		"campaigns": []
	}
}

const CAMPAIGNS = {
	"SOMERTIN": {
		"name": "CAMPAIGN_NAME_SOMERTIN",
		"desc": "CAMPAIGN_DESC_SOMERTIN",
		"startButton": "CAMPAIGN_START_BUTTON_SOMERTIN",
		"nation": "SOMERTIN",
		"hidden": false,
		"chapters": ["SOMERTIN_C1", "SOMERTIN_C2", "SOMERTIN_C3", "SOMERTIN_C4", "SOMERTIN_C5", "SOMERTIN_C6", "SOMERTIN_C7"]
	},
	"KARGIT": {
		"name": "CAMPAIGN_NAME_KARGIT",
		"desc": "CAMPAIGN_DESC_KARGIT",
		"startButton": "CAMPAIGN_START_BUTTON_KARGIT",
		"nation": "KARGIT",
		"hidden": false,
		"chapters": ["KARGIT_C1", "KARGIT_C2", "KARGIT_C3", "KARGIT_C4", "KARGIT_C5", "KARGIT_C6", "KARGIT_C7"]
	},
	"TRANSKAL": {
		"name": "CAMPAIGN_NAME_TRANSKAL",
		"desc": "CAMPAIGN_DESC_TRANSKAL",
		"startButton": "CAMPAIGN_START_BUTTON_TRANSKAL",
		"nation": "TRANSKAL",
		"hidden": false,
		"chapters": ["TRANSKAL_C1", "TRANSKAL_C2", "TRANSKAL_C3", "TRANSKAL_C4", "TRANSKAL_C5"]
	},
	"POLASIE": {
		"name": "CAMPAIGN_NAME_POLASIE",
		"desc": "CAMPAIGN_DESC_POLASIE",
		"startButton": "CAMPAIGN_START_BUTTON_POLASIE",
		"nation": "POLASIE",
		"hidden": false,
		"chapters": ["POLASIE_C1", "POLASIE_C2", "POLASIE_C3", "POLASIE_C4", "POLASIE_C5"]
	},
	"ELAM": {
		"name": "CAMPAIGN_NAME_ELAM",
		"desc": "CAMPAIGN_DESC_ELAM",
		"startButton": "CAMPAIGN_START_BUTTON_ELAM",
		"nation": "ELAM",
		"hidden": false,
		"chapters": ["ELAM_C1", "ELAM_C2", "ELAM_C3", "ELAM_C4", "ELAM_C5"]
	}
};

const CHAPTERS = {
	"SOMERTIN_C1": { "name": "CHAPTER_NAME_SOMERTIN_C1", "desc": "CHAPTER_DESC_SOMERTIN_C1", "interlogue": "CHAPTER_INTERLOGUE_SOMERTIN_C1", "interlogueImage": "Assets/Paralogues/1X1.jpg", "illustration": "Assets/Paralogues/1-1.jpg", "missions": ["SOMERTIN_C1_M1", "SOMERTIN_C1_M2", "SOMERTIN_C1_M3", "SOMERTIN_C1_M4", "SOMERTIN_C1_M5"] },
	"SOMERTIN_C2": { "name": "CHAPTER_NAME_SOMERTIN_C2", "desc": "CHAPTER_DESC_SOMERTIN_C2", "interlogue": "CHAPTER_INTERLOGUE_SOMERTIN_C2", "interlogueImage": "Assets/Paralogues/1X2.jpg", "illustration": "Assets/Paralogues/1-2.jpg", "missions": ["SOMERTIN_C2_M1", "SOMERTIN_C2_M2", "SOMERTIN_C2_M3", "SOMERTIN_C2_M4", "SOMERTIN_C2_M5"] },
	"SOMERTIN_C3": { "name": "CHAPTER_NAME_SOMERTIN_C3", "desc": "CHAPTER_DESC_SOMERTIN_C3", "interlogue": "CHAPTER_INTERLOGUE_SOMERTIN_C3", "interlogueImage": "Assets/Paralogues/1X3.jpg", "illustration": "Assets/Paralogues/1-3.jpg", "missions": ["SOMERTIN_C3_M1", "SOMERTIN_C3_M2", "SOMERTIN_C3_M3", "SOMERTIN_C3_M4", "SOMERTIN_C3_M5"] },
	"SOMERTIN_C4": { "name": "CHAPTER_NAME_SOMERTIN_C4", "desc": "CHAPTER_DESC_SOMERTIN_C4", "interlogue": "CHAPTER_INTERLOGUE_SOMERTIN_C4", "interlogueImage": "Assets/Paralogues/1X1.jpg", "illustration": "Assets/Paralogues/1-1.jpg", "missions": ["SOMERTIN_C4_M1", "SOMERTIN_C4_M2", "SOMERTIN_C4_M3", "SOMERTIN_C4_M4", "SOMERTIN_C4_M5"] },
	"SOMERTIN_C5": { "name": "CHAPTER_NAME_SOMERTIN_C5", "desc": "CHAPTER_DESC_SOMERTIN_C5", "interlogue": "CHAPTER_INTERLOGUE_SOMERTIN_C5", "interlogueImage": "Assets/Paralogues/1X1.jpg", "illustration": "Assets/Paralogues/1-1.jpg", "missions": ["SOMERTIN_C5_M1", "SOMERTIN_C5_M2", "SOMERTIN_C5_M3", "SOMERTIN_C5_M4", "SOMERTIN_C5_M5"] },
	"SOMERTIN_C6": { "name": "CHAPTER_NAME_SOMERTIN_C6", "desc": "CHAPTER_DESC_SOMERTIN_C6", "interlogue": "CHAPTER_INTERLOGUE_SOMERTIN_C6", "interlogueImage": "Assets/Paralogues/1X1.jpg", "illustration": "Assets/Paralogues/1-1.jpg", "missions": ["SOMERTIN_C6_M1", "SOMERTIN_C6_M2", "SOMERTIN_C6_M3", "SOMERTIN_C6_M4", "SOMERTIN_C6_M5"] },
	"SOMERTIN_C7": { "name": "CHAPTER_NAME_SOMERTIN_C7", "desc": "CHAPTER_DESC_SOMERTIN_C7", "interlogue": "CHAPTER_INTERLOGUE_SOMERTIN_C7", "interlogueImage": "Assets/Paralogues/1X1.jpg", "illustration": "Assets/Paralogues/1-1.jpg", "missions": ["SOMERTIN_C7_M1", "SOMERTIN_C7_M2", "SOMERTIN_C7_M3", "SOMERTIN_C7_M4", "SOMERTIN_C7_M5"] },

	"KARGIT_C1": { "name": "CHAPTER_NAME_KARGIT_C1", "desc": "CHAPTER_DESC_KARGIT_C1", "interlogue": "CHAPTER_INTERLOGUE_KARGIT_C1", "interlogueImage": "Assets/Paralogues/2X1.jpg", "illustration": "Assets/Paralogues/2-1.jpg", "missions": ["KARGIT_C1_M1", "KARGIT_C1_M2", "KARGIT_C1_M3", "KARGIT_C1_M4", "KARGIT_C1_M5"] },
	"KARGIT_C2": { "name": "CHAPTER_NAME_KARGIT_C2", "desc": "CHAPTER_DESC_KARGIT_C2", "interlogue": "CHAPTER_INTERLOGUE_KARGIT_C2", "interlogueImage": "Assets/Paralogues/2X2.jpg", "illustration": "Assets/Paralogues/2-2.jpg", "missions": ["KARGIT_C2_M1", "KARGIT_C2_M2", "KARGIT_C2_M3", "KARGIT_C2_M4", "KARGIT_C2_M5"] },
	"KARGIT_C3": { "name": "CHAPTER_NAME_KARGIT_C3", "desc": "CHAPTER_DESC_KARGIT_C3", "interlogue": "CHAPTER_INTERLOGUE_KARGIT_C3", "interlogueImage": "Assets/Paralogues/2X3.jpg", "illustration": "Assets/Paralogues/2-3.jpg", "missions": ["KARGIT_C3_M1", "KARGIT_C3_M2", "KARGIT_C3_M3", "KARGIT_C3_M4", "KARGIT_C3_M5"] },
	"KARGIT_C4": { "name": "CHAPTER_NAME_KARGIT_C4", "desc": "CHAPTER_DESC_KARGIT_C4", "interlogue": "CHAPTER_INTERLOGUE_KARGIT_C4", "interlogueImage": "Assets/Paralogues/2X1.jpg", "illustration": "Assets/Paralogues/2-4.jpg", "missions": ["KARGIT_C4_M1", "KARGIT_C4_M2", "KARGIT_C4_M3", "KARGIT_C4_M4", "KARGIT_C4_M5"] },
	"KARGIT_C5": { "name": "CHAPTER_NAME_KARGIT_C5", "desc": "CHAPTER_DESC_KARGIT_C5", "interlogue": "CHAPTER_INTERLOGUE_KARGIT_C5", "interlogueImage": "Assets/Paralogues/2X1.jpg", "illustration": "Assets/Paralogues/2-5.jpg", "missions": ["KARGIT_C5_M1", "KARGIT_C5_M2", "KARGIT_C5_M3", "KARGIT_C5_M4", "KARGIT_C5_M5"] },
	"KARGIT_C6": { "name": "CHAPTER_NAME_KARGIT_C6", "desc": "CHAPTER_DESC_KARGIT_C6", "interlogue": "CHAPTER_INTERLOGUE_KARGIT_C6", "interlogueImage": "Assets/Paralogues/2X1.jpg", "illustration": "Assets/Paralogues/2-6.jpg", "missions": ["KARGIT_C6_M1", "KARGIT_C6_M2", "KARGIT_C6_M3", "KARGIT_C6_M4", "KARGIT_C6_M5"] },
	"KARGIT_C7": { "name": "CHAPTER_NAME_KARGIT_C7", "desc": "CHAPTER_DESC_KARGIT_C7", "interlogue": "CHAPTER_INTERLOGUE_KARGIT_C7", "interlogueImage": "Assets/Paralogues/2X1.jpg", "illustration": "Assets/Paralogues/2-7.jpg", "missions": ["KARGIT_C7_M1", "KARGIT_C7_M2", "KARGIT_C7_M3", "KARGIT_C7_M4", "KARGIT_C7_M5"] },

	"TRANSKAL_C1": { "name": "CHAPTER_NAME_TRANSKAL_C1", "desc": "CHAPTER_DESC_TRANSKAL_C1", "interlogue": "CHAPTER_INTERLOGUE_TRANSKAL_C1", "interlogueImage": "Assets/Paralogues/3X1.jpg", "illustration": "Assets/Paralogues/3-1.jpg", "missions": ["TRANSKAL_C1_M1", "TRANSKAL_C1_M2", "TRANSKAL_C1_M3", "TRANSKAL_C1_M4", "TRANSKAL_C1_M5"] },
	"TRANSKAL_C2": { "name": "CHAPTER_NAME_TRANSKAL_C2", "desc": "CHAPTER_DESC_TRANSKAL_C2", "interlogue": "CHAPTER_INTERLOGUE_TRANSKAL_C2", "interlogueImage": "Assets/Paralogues/3X2.jpg", "illustration": "Assets/Paralogues/3-2.jpg", "missions": ["TRANSKAL_C2_M1", "TRANSKAL_C2_M2", "TRANSKAL_C2_M3", "TRANSKAL_C2_M4", "TRANSKAL_C2_M5"] },
	"TRANSKAL_C3": { "name": "CHAPTER_NAME_TRANSKAL_C3", "desc": "CHAPTER_DESC_TRANSKAL_C3", "interlogue": "CHAPTER_INTERLOGUE_TRANSKAL_C3", "interlogueImage": "Assets/Paralogues/3X3.jpg", "illustration": "Assets/Paralogues/3-3.jpg", "missions": ["TRANSKAL_C3_M1", "TRANSKAL_C3_M2", "TRANSKAL_C3_M3", "TRANSKAL_C3_M4", "TRANSKAL_C3_M5"] },
	"TRANSKAL_C4": { "name": "CHAPTER_NAME_TRANSKAL_C4", "desc": "CHAPTER_DESC_TRANSKAL_C4", "interlogue": "CHAPTER_INTERLOGUE_TRANSKAL_C4", "interlogueImage": "Assets/Paralogues/3X1.jpg", "illustration": "Assets/Paralogues/3-4.jpg", "missions": ["TRANSKAL_C4_M1", "TRANSKAL_C4_M2", "TRANSKAL_C4_M3", "TRANSKAL_C4_M4", "TRANSKAL_C4_M5"] },
	"TRANSKAL_C5": { "name": "CHAPTER_NAME_TRANSKAL_C5", "desc": "CHAPTER_DESC_TRANSKAL_C5", "interlogue": "CHAPTER_INTERLOGUE_TRANSKAL_C5", "interlogueImage": "Assets/Paralogues/3X1.jpg", "illustration": "Assets/Paralogues/3-1.jpg", "missions": ["TRANSKAL_C5_M1", "TRANSKAL_C5_M2", "TRANSKAL_C5_M3", "TRANSKAL_C5_M4", "TRANSKAL_C5_M5"] },
	"TRANSKAL_C6": { "name": "CHAPTER_NAME_TRANSKAL_C6", "desc": "CHAPTER_DESC_TRANSKAL_C6", "interlogue": "CHAPTER_INTERLOGUE_TRANSKAL_C6", "interlogueImage": "Assets/Paralogues/3X1.jpg", "illustration": "Assets/Paralogues/3-1.jpg", "missions": ["TRANSKAL_C6_M1", "TRANSKAL_C6_M2", "TRANSKAL_C6_M3", "TRANSKAL_C6_M4", "TRANSKAL_C6_M5"] },
	"TRANSKAL_C7": { "name": "CHAPTER_NAME_TRANSKAL_C7", "desc": "CHAPTER_DESC_TRANSKAL_C7", "interlogue": "CHAPTER_INTERLOGUE_TRANSKAL_C7", "interlogueImage": "Assets/Paralogues/3X1.jpg", "illustration": "Assets/Paralogues/3-1.jpg", "missions": ["TRANSKAL_C7_M1", "TRANSKAL_C7_M2", "TRANSKAL_C7_M3", "TRANSKAL_C7_M4", "TRANSKAL_C7_M5"] },

	"POLASIE_C1": { "name": "CHAPTER_NAME_POLASIE_C1", "desc": "CHAPTER_DESC_POLASIE_C1", "interlogue": "CHAPTER_INTERLOGUE_POLASIE_C1", "interlogueImage": "Assets/Paralogues/4X1.jpg", "illustration": "Assets/Paralogues/4-1.jpg", "missions": ["POLASIE_C1_M1", "POLASIE_C1_M2", "POLASIE_C1_M3", "POLASIE_C1_M4", "POLASIE_C1_M5"] },
	"POLASIE_C2": { "name": "CHAPTER_NAME_POLASIE_C2", "desc": "CHAPTER_DESC_POLASIE_C2", "interlogue": "CHAPTER_INTERLOGUE_POLASIE_C2", "interlogueImage": "Assets/Paralogues/4X2.webp", "illustration": "Assets/Paralogues/4-2.jpg", "missions": ["POLASIE_C2_M1", "POLASIE_C2_M2", "POLASIE_C2_M3", "POLASIE_C2_M4", "POLASIE_C2_M5"] },
	"POLASIE_C3": { "name": "CHAPTER_NAME_POLASIE_C3", "desc": "CHAPTER_DESC_POLASIE_C3", "interlogue": "CHAPTER_INTERLOGUE_POLASIE_C3", "interlogueImage": "Assets/Paralogues/4X3.jpg", "illustration": "Assets/Paralogues/4-3.jpg", "missions": ["POLASIE_C3_M1", "POLASIE_C3_M2", "POLASIE_C3_M3", "POLASIE_C3_M4", "POLASIE_C3_M5"] },
	"POLASIE_C4": { "name": "CHAPTER_NAME_POLASIE_C4", "desc": "CHAPTER_DESC_POLASIE_C4", "interlogue": "CHAPTER_INTERLOGUE_POLASIE_C4", "interlogueImage": "Assets/Paralogues/4X1.jpg", "illustration": "Assets/Paralogues/4-4.jpg", "missions": ["POLASIE_C4_M1", "POLASIE_C4_M2", "POLASIE_C4_M3", "POLASIE_C4_M4", "POLASIE_C4_M5"] },
	"POLASIE_C5": { "name": "CHAPTER_NAME_POLASIE_C5", "desc": "CHAPTER_DESC_POLASIE_C5", "interlogue": "CHAPTER_INTERLOGUE_POLASIE_C5", "interlogueImage": "Assets/Paralogues/4X1.jpg", "illustration": "Assets/Paralogues/4-1.jpg", "missions": ["POLASIE_C5_M1", "POLASIE_C5_M2", "POLASIE_C5_M3", "POLASIE_C5_M4", "POLASIE_C5_M5"] },
	"POLASIE_C6": { "name": "CHAPTER_NAME_POLASIE_C6", "desc": "CHAPTER_DESC_POLASIE_C6", "interlogue": "CHAPTER_INTERLOGUE_POLASIE_C6", "interlogueImage": "Assets/Paralogues/4X1.jpg", "illustration": "Assets/Paralogues/4-1.jpg", "missions": ["POLASIE_C6_M1", "POLASIE_C6_M2", "POLASIE_C6_M3", "POLASIE_C6_M4", "POLASIE_C6_M5"] },
	"POLASIE_C7": { "name": "CHAPTER_NAME_POLASIE_C7", "desc": "CHAPTER_DESC_POLASIE_C7", "interlogue": "CHAPTER_INTERLOGUE_POLASIE_C7", "interlogueImage": "Assets/Paralogues/4X1.jpg", "illustration": "Assets/Paralogues/4-1.jpg", "missions": ["POLASIE_C7_M1", "POLASIE_C7_M2", "POLASIE_C7_M3", "POLASIE_C7_M4", "POLASIE_C7_M5"] },

	"ELAM_C1": { "name": "CHAPTER_NAME_ELAM_C1", "desc": "CHAPTER_DESC_ELAM_C1", "interlogue": "CHAPTER_INTERLOGUE_ELAM_C1", "interlogueImage": "Assets/Paralogues/5X1.jpg", "illustration": "Assets/Paralogues/5-1.jpg", "missions": ["ELAM_C1_M1", "ELAM_C1_M2", "ELAM_C1_M3", "ELAM_C1_M4", "ELAM_C1_M5"] },
	"ELAM_C2": { "name": "CHAPTER_NAME_ELAM_C2", "desc": "CHAPTER_DESC_ELAM_C2", "interlogue": "CHAPTER_INTERLOGUE_ELAM_C2", "interlogueImage": "Assets/Paralogues/5X2.jpg", "illustration": "Assets/Paralogues/5-2.jpg", "missions": ["ELAM_C2_M1", "ELAM_C2_M2", "ELAM_C2_M3", "ELAM_C2_M4", "ELAM_C2_M5"] },
	"ELAM_C3": { "name": "CHAPTER_NAME_ELAM_C3", "desc": "CHAPTER_DESC_ELAM_C3", "interlogue": "CHAPTER_INTERLOGUE_ELAM_C3", "interlogueImage": "Assets/Paralogues/5X3.jpg", "illustration": "Assets/Paralogues/5-3.jpg", "missions": ["ELAM_C3_M1", "ELAM_C3_M2", "ELAM_C3_M3", "ELAM_C3_M4", "ELAM_C3_M5"] },
	"ELAM_C4": { "name": "CHAPTER_NAME_ELAM_C4", "desc": "CHAPTER_DESC_ELAM_C4", "interlogue": "CHAPTER_INTERLOGUE_ELAM_C4", "interlogueImage": "Assets/Paralogues/5X1.jpg", "illustration": "Assets/Paralogues/5-1.jpg", "missions": ["ELAM_C4_M1", "ELAM_C4_M2", "ELAM_C4_M3", "ELAM_C4_M4", "ELAM_C4_M5"] },
	"ELAM_C5": { "name": "CHAPTER_NAME_ELAM_C5", "desc": "CHAPTER_DESC_ELAM_C5", "interlogue": "CHAPTER_INTERLOGUE_ELAM_C5", "interlogueImage": "Assets/Paralogues/5X1.jpg", "illustration": "Assets/Paralogues/5-1.jpg", "missions": ["ELAM_C5_M1", "ELAM_C5_M2", "ELAM_C5_M3", "ELAM_C5_M4", "ELAM_C5_M5"] },
	"ELAM_C6": { "name": "CHAPTER_NAME_ELAM_C6", "desc": "CHAPTER_DESC_ELAM_C6", "interlogue": "CHAPTER_INTERLOGUE_ELAM_C6", "interlogueImage": "Assets/Paralogues/5X1.jpg", "illustration": "Assets/Paralogues/5-1.jpg", "missions": ["ELAM_C6_M1", "ELAM_C6_M2", "ELAM_C6_M3", "ELAM_C6_M4", "ELAM_C6_M5"] },
	"ELAM_C7": { "name": "CHAPTER_NAME_ELAM_C7", "desc": "CHAPTER_DESC_ELAM_C7", "interlogue": "CHAPTER_INTERLOGUE_ELAM_C7", "interlogueImage": "Assets/Paralogues/5X1.jpg", "illustration": "Assets/Paralogues/5-1.jpg", "missions": ["ELAM_C7_M1", "ELAM_C7_M2", "ELAM_C7_M3", "ELAM_C7_M4", "ELAM_C7_M5"] },
};

const MISSIONS = {
	"SOMERTIN_C1_M1": { "name": "MISSION_NAME_SOMERTIN_C1_M1", "desc": "MISSION_DESC_SOMERTIN_C1_M1", "playlist": "LAMENTOSO", "data": "STORY_SOMERTIN_C1_M1" },
	"SOMERTIN_C1_M2": { "name": "MISSION_NAME_SOMERTIN_C1_M2", "desc": "MISSION_DESC_SOMERTIN_C1_M2", "playlist": "LAMENTOSO", "data": "STORY_SOMERTIN_C1_M2" },
	"SOMERTIN_C1_M3": { "name": "MISSION_NAME_SOMERTIN_C1_M3", "desc": "MISSION_DESC_SOMERTIN_C1_M3", "playlist": "LAMENTOSO", "data": "STORY_SOMERTIN_C1_M3" },
	"SOMERTIN_C1_M4": { "name": "MISSION_NAME_SOMERTIN_C1_M4", "desc": "MISSION_DESC_SOMERTIN_C1_M4", "playlist": "LAMENTOSO", "data": "STORY_SOMERTIN_C1_M4" },
	"SOMERTIN_C1_M5": { "name": "MISSION_NAME_SOMERTIN_C1_M5", "desc": "MISSION_DESC_SOMERTIN_C1_M5", "playlist": "FORTISSIMO", "data": "STORY_SOMERTIN_C1_M5" },

	"SOMERTIN_C2_M1": { "name": "MISSION_NAME_SOMERTIN_C2_M1", "desc": "MISSION_DESC_SOMERTIN_C2_M1", "playlist": "LAMENTOSO", "data": "STORY_SOMERTIN_C2_M1" },
	"SOMERTIN_C2_M2": { "name": "MISSION_NAME_SOMERTIN_C2_M2", "desc": "MISSION_DESC_SOMERTIN_C2_M2", "playlist": "LAMENTOSO", "data": "STORY_SOMERTIN_C2_M2" },
	"SOMERTIN_C2_M3": { "name": "MISSION_NAME_SOMERTIN_C2_M3", "desc": "MISSION_DESC_SOMERTIN_C2_M3", "playlist": "LAMENTOSO", "data": "STORY_SOMERTIN_C2_M3" },
	"SOMERTIN_C2_M4": { "name": "MISSION_NAME_SOMERTIN_C2_M4", "desc": "MISSION_DESC_SOMERTIN_C2_M4", "playlist": "LAMENTOSO", "data": "STORY_SOMERTIN_C2_M4" },
	"SOMERTIN_C2_M5": { "name": "MISSION_NAME_SOMERTIN_C2_M5", "desc": "MISSION_DESC_SOMERTIN_C2_M5", "playlist": "FORTISSIMO", "data": "STORY_SOMERTIN_C2_M5" },

	"SOMERTIN_C3_M1": { "name": "MISSION_NAME_SOMERTIN_C3_M1", "desc": "MISSION_DESC_SOMERTIN_C3_M1", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C3_M1" },
	"SOMERTIN_C3_M2": { "name": "MISSION_NAME_SOMERTIN_C3_M2", "desc": "MISSION_DESC_SOMERTIN_C3_M2", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C3_M2" },
	"SOMERTIN_C3_M3": { "name": "MISSION_NAME_SOMERTIN_C3_M3", "desc": "MISSION_DESC_SOMERTIN_C3_M3", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C3_M3" },
	"SOMERTIN_C3_M4": { "name": "MISSION_NAME_SOMERTIN_C3_M4", "desc": "MISSION_DESC_SOMERTIN_C3_M4", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C3_M4" },
	"SOMERTIN_C3_M5": { "name": "MISSION_NAME_SOMERTIN_C3_M5", "desc": "MISSION_DESC_SOMERTIN_C3_M5", "playlist": "EPIC_NAVAL", "data": "STORY_SOMERTIN_C3_M5" },

	"SOMERTIN_C4_M1": { "name": "MISSION_NAME_SOMERTIN_C4_M1", "desc": "MISSION_DESC_SOMERTIN_C4_M1", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C4_M1" },
	"SOMERTIN_C4_M2": { "name": "MISSION_NAME_SOMERTIN_C4_M2", "desc": "MISSION_DESC_SOMERTIN_C4_M2", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C4_M2" },
	"SOMERTIN_C4_M3": { "name": "MISSION_NAME_SOMERTIN_C4_M3", "desc": "MISSION_DESC_SOMERTIN_C4_M3", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C4_M3" },
	"SOMERTIN_C4_M4": { "name": "MISSION_NAME_SOMERTIN_C4_M4", "desc": "MISSION_DESC_SOMERTIN_C4_M4", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C4_M4" },
	"SOMERTIN_C4_M5": { "name": "MISSION_NAME_SOMERTIN_C4_M5", "desc": "MISSION_DESC_SOMERTIN_C4_M5", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C4_M5" },

	"SOMERTIN_C5_M1": { "name": "MISSION_NAME_SOMERTIN_C5_M1", "desc": "MISSION_DESC_SOMERTIN_C5_M1", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C5_M1" },
	"SOMERTIN_C5_M2": { "name": "MISSION_NAME_SOMERTIN_C5_M2", "desc": "MISSION_DESC_SOMERTIN_C5_M2", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C5_M2" },
	"SOMERTIN_C5_M3": { "name": "MISSION_NAME_SOMERTIN_C5_M3", "desc": "MISSION_DESC_SOMERTIN_C5_M3", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C5_M3" },
	"SOMERTIN_C5_M4": { "name": "MISSION_NAME_SOMERTIN_C5_M4", "desc": "MISSION_DESC_SOMERTIN_C5_M4", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C5_M4" },
	"SOMERTIN_C5_M5": { "name": "MISSION_NAME_SOMERTIN_C5_M5", "desc": "MISSION_DESC_SOMERTIN_C5_M5", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C5_M5" },

	"SOMERTIN_C6_M1": { "name": "MISSION_NAME_SOMERTIN_C6_M1", "desc": "MISSION_DESC_SOMERTIN_C6_M1", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C6_M1" },
	"SOMERTIN_C6_M2": { "name": "MISSION_NAME_SOMERTIN_C6_M2", "desc": "MISSION_DESC_SOMERTIN_C6_M2", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C6_M2" },
	"SOMERTIN_C6_M3": { "name": "MISSION_NAME_SOMERTIN_C6_M3", "desc": "MISSION_DESC_SOMERTIN_C6_M3", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C6_M3" },
	"SOMERTIN_C6_M4": { "name": "MISSION_NAME_SOMERTIN_C6_M4", "desc": "MISSION_DESC_SOMERTIN_C6_M4", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C6_M4" },
	"SOMERTIN_C6_M5": { "name": "MISSION_NAME_SOMERTIN_C6_M5", "desc": "MISSION_DESC_SOMERTIN_C6_M5", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C6_M5" },

	"SOMERTIN_C7_M1": { "name": "MISSION_NAME_SOMERTIN_C7_M1", "desc": "MISSION_DESC_SOMERTIN_C7_M1", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C7_M1" },
	"SOMERTIN_C7_M2": { "name": "MISSION_NAME_SOMERTIN_C7_M2", "desc": "MISSION_DESC_SOMERTIN_C7_M2", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C7_M2" },
	"SOMERTIN_C7_M3": { "name": "MISSION_NAME_SOMERTIN_C7_M3", "desc": "MISSION_DESC_SOMERTIN_C7_M3", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C7_M3" },
	"SOMERTIN_C7_M4": { "name": "MISSION_NAME_SOMERTIN_C7_M4", "desc": "MISSION_DESC_SOMERTIN_C7_M4", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C7_M4" },
	"SOMERTIN_C7_M5": { "name": "MISSION_NAME_SOMERTIN_C7_M5", "desc": "MISSION_DESC_SOMERTIN_C7_M5", "playlist": "CRUSADE", "data": "STORY_SOMERTIN_C7_M5" },

	"KARGIT_C1_M1": { "name": "MISSION_NAME_KARGIT_C1_M1", "desc": "MISSION_DESC_KARGIT_C1_M1", "playlist": "PANZER", "data": "STORY_KARGIT_C1_M1" },
	"KARGIT_C1_M2": { "name": "MISSION_NAME_KARGIT_C1_M2", "desc": "MISSION_DESC_KARGIT_C1_M2", "playlist": "PANZER", "data": "STORY_KARGIT_C1_M2" },
	"KARGIT_C1_M3": { "name": "MISSION_NAME_KARGIT_C1_M3", "desc": "MISSION_DESC_KARGIT_C1_M3", "playlist": "PANZER", "data": "STORY_KARGIT_C1_M3" },
	"KARGIT_C1_M4": { "name": "MISSION_NAME_KARGIT_C1_M4", "desc": "MISSION_DESC_KARGIT_C1_M4", "playlist": "PANZER", "data": "STORY_KARGIT_C1_M4" },
	"KARGIT_C1_M5": { "name": "MISSION_NAME_KARGIT_C1_M5", "desc": "MISSION_DESC_KARGIT_C1_M5", "playlist": "UNSTOPPABLE_PANZER", "data": "STORY_KARGIT_C1_M5" },

	"KARGIT_C2_M1": { "name": "MISSION_NAME_KARGIT_C2_M1", "desc": "MISSION_DESC_KARGIT_C2_M1", "playlist": "PANZER", "data": "STORY_KARGIT_C2_M1" },
	"KARGIT_C2_M2": { "name": "MISSION_NAME_KARGIT_C2_M2", "desc": "MISSION_DESC_KARGIT_C2_M2", "playlist": "PANZER", "data": "STORY_KARGIT_C2_M2" },
	"KARGIT_C2_M3": { "name": "MISSION_NAME_KARGIT_C2_M3", "desc": "MISSION_DESC_KARGIT_C2_M3", "playlist": "PANZER", "data": "STORY_KARGIT_C2_M3" },
	"KARGIT_C2_M4": { "name": "MISSION_NAME_KARGIT_C2_M4", "desc": "MISSION_DESC_KARGIT_C2_M4", "playlist": "PANZER", "data": "STORY_KARGIT_C2_M4" },
	"KARGIT_C2_M5": { "name": "MISSION_NAME_KARGIT_C2_M5", "desc": "MISSION_DESC_KARGIT_C2_M5", "playlist": "UNSTOPPABLE_PANZER", "data": "STORY_KARGIT_C2_M5" },

	"KARGIT_C3_M1": { "name": "MISSION_NAME_KARGIT_C3_M1", "desc": "MISSION_DESC_KARGIT_C3_M1", "playlist": "PANZER", "data": "STORY_KARGIT_C3_M1" },
	"KARGIT_C3_M2": { "name": "MISSION_NAME_KARGIT_C3_M2", "desc": "MISSION_DESC_KARGIT_C3_M2", "playlist": "PANZER", "data": "STORY_KARGIT_C3_M2" },
	"KARGIT_C3_M3": { "name": "MISSION_NAME_KARGIT_C3_M3", "desc": "MISSION_DESC_KARGIT_C3_M3", "playlist": "PANZER", "data": "STORY_KARGIT_C3_M3" },
	"KARGIT_C3_M4": { "name": "MISSION_NAME_KARGIT_C3_M4", "desc": "MISSION_DESC_KARGIT_C3_M4", "playlist": "PANZER", "data": "STORY_KARGIT_C3_M4" },
	"KARGIT_C3_M5": { "name": "MISSION_NAME_KARGIT_C3_M5", "desc": "MISSION_DESC_KARGIT_C3_M5", "playlist": "UNSTOPPABLE_PANZER", "data": "STORY_KARGIT_C3_M5" },

	"KARGIT_C4_M1": { "name": "MISSION_NAME_KARGIT_C4_M1", "desc": "MISSION_DESC_KARGIT_C4_M1", "playlist": "PANZER", "data": "STORY_KARGIT_C4_M1" },
	"KARGIT_C4_M2": { "name": "MISSION_NAME_KARGIT_C4_M2", "desc": "MISSION_DESC_KARGIT_C4_M2", "playlist": "PANZER", "data": "STORY_KARGIT_C4_M2" },
	"KARGIT_C4_M3": { "name": "MISSION_NAME_KARGIT_C4_M3", "desc": "MISSION_DESC_KARGIT_C4_M3", "playlist": "PANZER", "data": "STORY_KARGIT_C4_M3" },
	"KARGIT_C4_M4": { "name": "MISSION_NAME_KARGIT_C4_M4", "desc": "MISSION_DESC_KARGIT_C4_M4", "playlist": "PANZER", "data": "STORY_KARGIT_C4_M4" },
	"KARGIT_C4_M5": { "name": "MISSION_NAME_KARGIT_C4_M5", "desc": "MISSION_DESC_KARGIT_C4_M5", "playlist": "UNSTOPPABLE_PANZER", "data": "STORY_KARGIT_C4_M5" },

	"KARGIT_C5_M1": { "name": "MISSION_NAME_KARGIT_C5_M1", "desc": "MISSION_DESC_KARGIT_C5_M1", "playlist": "PANZER", "data": "STORY_KARGIT_C5_M1" },
	"KARGIT_C5_M2": { "name": "MISSION_NAME_KARGIT_C5_M2", "desc": "MISSION_DESC_KARGIT_C5_M2", "playlist": "PANZER", "data": "STORY_KARGIT_C5_M2" },
	"KARGIT_C5_M3": { "name": "MISSION_NAME_KARGIT_C5_M3", "desc": "MISSION_DESC_KARGIT_C5_M3", "playlist": "PANZER", "data": "STORY_KARGIT_C5_M3" },
	"KARGIT_C5_M4": { "name": "MISSION_NAME_KARGIT_C5_M4", "desc": "MISSION_DESC_KARGIT_C5_M4", "playlist": "PANZER", "data": "STORY_KARGIT_C5_M4" },
	"KARGIT_C5_M5": { "name": "MISSION_NAME_KARGIT_C5_M5", "desc": "MISSION_DESC_KARGIT_C5_M5", "playlist": "UNSTOPPABLE_PANZER", "data": "STORY_KARGIT_C5_M5" },

	"KARGIT_C6_M1": { "name": "MISSION_NAME_KARGIT_C6_M1", "desc": "MISSION_DESC_KARGIT_C6_M1", "playlist": "PANZER", "data": "STORY_KARGIT_C6_M1" },
	"KARGIT_C6_M2": { "name": "MISSION_NAME_KARGIT_C6_M2", "desc": "MISSION_DESC_KARGIT_C6_M2", "playlist": "PANZER", "data": "STORY_KARGIT_C6_M2" },
	"KARGIT_C6_M3": { "name": "MISSION_NAME_KARGIT_C6_M3", "desc": "MISSION_DESC_KARGIT_C6_M3", "playlist": "PANZER", "data": "STORY_KARGIT_C6_M3" },
	"KARGIT_C6_M4": { "name": "MISSION_NAME_KARGIT_C6_M4", "desc": "MISSION_DESC_KARGIT_C6_M4", "playlist": "PANZER", "data": "STORY_KARGIT_C6_M4" },
	"KARGIT_C6_M5": { "name": "MISSION_NAME_KARGIT_C6_M5", "desc": "MISSION_DESC_KARGIT_C6_M5", "playlist": "UNSTOPPABLE_PANZER", "data": "STORY_KARGIT_C6_M5" },

	"KARGIT_C7_M1": { "name": "MISSION_NAME_KARGIT_C7_M1", "desc": "MISSION_DESC_KARGIT_C7_M1", "playlist": "PANZER", "data": "STORY_KARGIT_C7_M1" },
	"KARGIT_C7_M2": { "name": "MISSION_NAME_KARGIT_C7_M2", "desc": "MISSION_DESC_KARGIT_C7_M2", "playlist": "PANZER", "data": "STORY_KARGIT_C7_M2" },
	"KARGIT_C7_M3": { "name": "MISSION_NAME_KARGIT_C7_M3", "desc": "MISSION_DESC_KARGIT_C7_M3", "playlist": "PANZER", "data": "STORY_KARGIT_C7_M3" },
	"KARGIT_C7_M4": { "name": "MISSION_NAME_KARGIT_C7_M4", "desc": "MISSION_DESC_KARGIT_C7_M4", "playlist": "PANZER", "data": "STORY_KARGIT_C7_M4" },
	"KARGIT_C7_M5": { "name": "MISSION_NAME_KARGIT_C7_M5", "desc": "MISSION_DESC_KARGIT_C7_M5", "playlist": "UNSTOPPABLE_PANZER", "data": "STORY_KARGIT_C7_M5" },

	"TRANSKAL_C1_M1": { "name": "MISSION_NAME_TRANSKAL_C1_M1", "desc": "MISSION_DESC_TRANSKAL_C1_M1", "playlist": "TAIGA", "data": "STORY_TRANSKAL_C1_M1" },
	"TRANSKAL_C1_M2": { "name": "MISSION_NAME_TRANSKAL_C1_M2", "desc": "MISSION_DESC_TRANSKAL_C1_M2", "playlist": "TAIGA", "data": "STORY_TRANSKAL_C1_M2" },
	"TRANSKAL_C1_M3": { "name": "MISSION_NAME_TRANSKAL_C1_M3", "desc": "MISSION_DESC_TRANSKAL_C1_M3", "playlist": "TAIGA", "data": "STORY_TRANSKAL_C1_M3" },
	"TRANSKAL_C1_M4": { "name": "MISSION_NAME_TRANSKAL_C1_M4", "desc": "MISSION_DESC_TRANSKAL_C1_M4", "playlist": "TAIGA", "data": "STORY_TRANSKAL_C1_M4" },
	"TRANSKAL_C1_M5": { "name": "MISSION_NAME_TRANSKAL_C1_M5", "desc": "MISSION_DESC_TRANSKAL_C1_M5", "playlist": "BLIZZARD", "data": "STORY_TRANSKAL_C1_M5" },

	"TRANSKAL_C2_M1": { "name": "MISSION_NAME_TRANSKAL_C2_M1", "desc": "MISSION_DESC_TRANSKAL_C2_M1", "playlist": "CHILL", "data": "STORY_TRANSKAL_C2_M1" },
	"TRANSKAL_C2_M2": { "name": "MISSION_NAME_TRANSKAL_C2_M2", "desc": "MISSION_DESC_TRANSKAL_C2_M2", "playlist": "CHILL", "data": "STORY_TRANSKAL_C2_M2" },
	"TRANSKAL_C2_M3": { "name": "MISSION_NAME_TRANSKAL_C2_M3", "desc": "MISSION_DESC_TRANSKAL_C2_M3", "playlist": "CHILL", "data": "STORY_TRANSKAL_C2_M3" },
	"TRANSKAL_C2_M4": { "name": "MISSION_NAME_TRANSKAL_C2_M4", "desc": "MISSION_DESC_TRANSKAL_C2_M4", "playlist": "CHILL", "data": "STORY_TRANSKAL_C2_M4" },
	"TRANSKAL_C2_M5": { "name": "MISSION_NAME_TRANSKAL_C2_M5", "desc": "MISSION_DESC_TRANSKAL_C2_M5", "playlist": "BLIZZARD", "data": "STORY_TRANSKAL_C2_M5" },

	"TRANSKAL_C3_M1": { "name": "MISSION_NAME_TRANSKAL_C3_M1", "desc": "MISSION_DESC_TRANSKAL_C3_M1", "playlist": "CHILL", "data": "STORY_TRANSKAL_C3_M1" },
	"TRANSKAL_C3_M2": { "name": "MISSION_NAME_TRANSKAL_C3_M2", "desc": "MISSION_DESC_TRANSKAL_C3_M2", "playlist": "CHILL", "data": "STORY_TRANSKAL_C3_M2" },
	"TRANSKAL_C3_M3": { "name": "MISSION_NAME_TRANSKAL_C3_M3", "desc": "MISSION_DESC_TRANSKAL_C3_M3", "playlist": "CHILL", "data": "STORY_TRANSKAL_C3_M3" },
	"TRANSKAL_C3_M4": { "name": "MISSION_NAME_TRANSKAL_C3_M4", "desc": "MISSION_DESC_TRANSKAL_C3_M4", "playlist": "CHILL", "data": "STORY_TRANSKAL_C3_M4" },
	"TRANSKAL_C3_M5": { "name": "MISSION_NAME_TRANSKAL_C3_M5", "desc": "MISSION_DESC_TRANSKAL_C3_M5", "playlist": "BLIZZARD", "data": "STORY_TRANSKAL_C3_M5" },

	"TRANSKAL_C4_M1": { "name": "MISSION_NAME_TRANSKAL_C4_M1", "desc": "MISSION_DESC_TRANSKAL_C4_M1", "playlist": "CHILL", "data": "STORY_TRANSKAL_C4_M1" },
	"TRANSKAL_C4_M2": { "name": "MISSION_NAME_TRANSKAL_C4_M2", "desc": "MISSION_DESC_TRANSKAL_C4_M2", "playlist": "CHILL", "data": "STORY_TRANSKAL_C4_M2" },
	"TRANSKAL_C4_M3": { "name": "MISSION_NAME_TRANSKAL_C4_M3", "desc": "MISSION_DESC_TRANSKAL_C4_M3", "playlist": "CHILL", "data": "STORY_TRANSKAL_C4_M3" },
	"TRANSKAL_C4_M4": { "name": "MISSION_NAME_TRANSKAL_C4_M4", "desc": "MISSION_DESC_TRANSKAL_C4_M4", "playlist": "CHILL", "data": "STORY_TRANSKAL_C4_M4" },
	"TRANSKAL_C4_M5": { "name": "MISSION_NAME_TRANSKAL_C4_M5", "desc": "MISSION_DESC_TRANSKAL_C4_M5", "playlist": "BLIZZARD", "data": "STORY_TRANSKAL_C4_M5" },

	"TRANSKAL_C5_M1": { "name": "MISSION_NAME_TRANSKAL_C5_M1", "desc": "MISSION_DESC_TRANSKAL_C5_M1", "playlist": "CHILL", "data": "STORY_TRANSKAL_C5_M1" },
	"TRANSKAL_C5_M2": { "name": "MISSION_NAME_TRANSKAL_C5_M2", "desc": "MISSION_DESC_TRANSKAL_C5_M2", "playlist": "CHILL", "data": "STORY_TRANSKAL_C5_M2" },
	"TRANSKAL_C5_M3": { "name": "MISSION_NAME_TRANSKAL_C5_M3", "desc": "MISSION_DESC_TRANSKAL_C5_M3", "playlist": "CHILL", "data": "STORY_TRANSKAL_C5_M3" },
	"TRANSKAL_C5_M4": { "name": "MISSION_NAME_TRANSKAL_C5_M4", "desc": "MISSION_DESC_TRANSKAL_C5_M4", "playlist": "CHILL", "data": "STORY_TRANSKAL_C5_M4" },
	"TRANSKAL_C5_M5": { "name": "MISSION_NAME_TRANSKAL_C5_M5", "desc": "MISSION_DESC_TRANSKAL_C5_M5", "playlist": "BLIZZARD", "data": "STORY_TRANSKAL_C5_M5" },

	"TRANSKAL_C6_M1": { "name": "MISSION_NAME_TRANSKAL_C6_M1", "desc": "MISSION_DESC_TRANSKAL_C6_M1", "playlist": "CHILL", "data": "STORY_TRANSKAL_C6_M1" },
	"TRANSKAL_C6_M2": { "name": "MISSION_NAME_TRANSKAL_C6_M2", "desc": "MISSION_DESC_TRANSKAL_C6_M2", "playlist": "CHILL", "data": "STORY_TRANSKAL_C6_M2" },
	"TRANSKAL_C6_M3": { "name": "MISSION_NAME_TRANSKAL_C6_M3", "desc": "MISSION_DESC_TRANSKAL_C6_M3", "playlist": "CHILL", "data": "STORY_TRANSKAL_C6_M3" },
	"TRANSKAL_C6_M4": { "name": "MISSION_NAME_TRANSKAL_C6_M4", "desc": "MISSION_DESC_TRANSKAL_C6_M4", "playlist": "CHILL", "data": "STORY_TRANSKAL_C6_M4" },
	"TRANSKAL_C6_M5": { "name": "MISSION_NAME_TRANSKAL_C6_M5", "desc": "MISSION_DESC_TRANSKAL_C6_M5", "playlist": "BLIZZARD", "data": "STORY_TRANSKAL_C6_M5" },

	"TRANSKAL_C7_M1": { "name": "MISSION_NAME_TRANSKAL_C7_M1", "desc": "MISSION_DESC_TRANSKAL_C7_M1", "playlist": "CHILL", "data": "STORY_TRANSKAL_C7_M1" },
	"TRANSKAL_C7_M2": { "name": "MISSION_NAME_TRANSKAL_C7_M2", "desc": "MISSION_DESC_TRANSKAL_C7_M2", "playlist": "CHILL", "data": "STORY_TRANSKAL_C7_M2" },
	"TRANSKAL_C7_M3": { "name": "MISSION_NAME_TRANSKAL_C7_M3", "desc": "MISSION_DESC_TRANSKAL_C7_M3", "playlist": "CHILL", "data": "STORY_TRANSKAL_C7_M3" },
	"TRANSKAL_C7_M4": { "name": "MISSION_NAME_TRANSKAL_C7_M4", "desc": "MISSION_DESC_TRANSKAL_C7_M4", "playlist": "CHILL", "data": "STORY_TRANSKAL_C7_M4" },
	"TRANSKAL_C7_M5": { "name": "MISSION_NAME_TRANSKAL_C7_M5", "desc": "MISSION_DESC_TRANSKAL_C7_M5", "playlist": "BLIZZARD", "data": "STORY_TRANSKAL_C7_M5" },

	"POLASIE_C1_M1": { "name": "MISSION_NAME_POLASIE_C1_M1", "desc": "MISSION_DESC_POLASIE_C1_M1", "playlist": "FREEDOM", "data": "STORY_POLASIE_C1_M1" },
	"POLASIE_C1_M2": { "name": "MISSION_NAME_POLASIE_C1_M2", "desc": "MISSION_DESC_POLASIE_C1_M2", "playlist": "FREEDOM", "data": "STORY_POLASIE_C1_M2" },
	"POLASIE_C1_M3": { "name": "MISSION_NAME_POLASIE_C1_M3", "desc": "MISSION_DESC_POLASIE_C1_M3", "playlist": "FREEDOM", "data": "STORY_POLASIE_C1_M3" },
	"POLASIE_C1_M4": { "name": "MISSION_NAME_POLASIE_C1_M4", "desc": "MISSION_DESC_POLASIE_C1_M4", "playlist": "FREEDOM", "data": "STORY_POLASIE_C1_M4" },
	"POLASIE_C1_M5": { "name": "MISSION_NAME_POLASIE_C1_M5", "desc": "MISSION_DESC_POLASIE_C1_M5", "playlist": "FREEDOM", "data": "STORY_POLASIE_C1_M5" },

	"POLASIE_C2_M1": { "name": "MISSION_NAME_POLASIE_C2_M1", "desc": "MISSION_DESC_POLASIE_C2_M1", "playlist": "WISTFUL", "data": "STORY_POLASIE_C2_M1" },
	"POLASIE_C2_M2": { "name": "MISSION_NAME_POLASIE_C2_M2", "desc": "MISSION_DESC_POLASIE_C2_M2", "playlist": "WISTFUL", "data": "STORY_POLASIE_C2_M2" },
	"POLASIE_C2_M3": { "name": "MISSION_NAME_POLASIE_C2_M3", "desc": "MISSION_DESC_POLASIE_C2_M3", "playlist": "WISTFUL", "data": "STORY_POLASIE_C2_M3" },
	"POLASIE_C2_M4": { "name": "MISSION_NAME_POLASIE_C2_M4", "desc": "MISSION_DESC_POLASIE_C2_M4", "playlist": "WISTFUL", "data": "STORY_POLASIE_C2_M4" },
	"POLASIE_C2_M5": { "name": "MISSION_NAME_POLASIE_C2_M5", "desc": "MISSION_DESC_POLASIE_C2_M5", "playlist": "WISTFUL", "data": "STORY_POLASIE_C2_M5" },

	"POLASIE_C3_M1": { "name": "MISSION_NAME_POLASIE_C3_M1", "desc": "MISSION_DESC_POLASIE_C3_M1", "playlist": "WISTFUL", "data": "STORY_POLASIE_C3_M1" },
	"POLASIE_C3_M2": { "name": "MISSION_NAME_POLASIE_C3_M2", "desc": "MISSION_DESC_POLASIE_C3_M2", "playlist": "WISTFUL", "data": "STORY_POLASIE_C3_M2" },
	"POLASIE_C3_M3": { "name": "MISSION_NAME_POLASIE_C3_M3", "desc": "MISSION_DESC_POLASIE_C3_M3", "playlist": "WISTFUL", "data": "STORY_POLASIE_C3_M3" },
	"POLASIE_C3_M4": { "name": "MISSION_NAME_POLASIE_C3_M4", "desc": "MISSION_DESC_POLASIE_C3_M4", "playlist": "WISTFUL", "data": "STORY_POLASIE_C3_M4" },
	"POLASIE_C3_M5": { "name": "MISSION_NAME_POLASIE_C3_M5", "desc": "MISSION_DESC_POLASIE_C3_M5", "playlist": "TERMINUS", "data": "STORY_POLASIE_C3_M5" },

	"POLASIE_C4_M1": { "name": "MISSION_NAME_POLASIE_C4_M1", "desc": "MISSION_DESC_POLASIE_C4_M1", "playlist": "DECAY", "data": "STORY_POLASIE_C4_M1" },
	"POLASIE_C4_M2": { "name": "MISSION_NAME_POLASIE_C4_M2", "desc": "MISSION_DESC_POLASIE_C4_M2", "playlist": "DECAY", "data": "STORY_POLASIE_C4_M2" },
	"POLASIE_C4_M3": { "name": "MISSION_NAME_POLASIE_C4_M3", "desc": "MISSION_DESC_POLASIE_C4_M3", "playlist": "DECAY", "data": "STORY_POLASIE_C4_M3" },
	"POLASIE_C4_M4": { "name": "MISSION_NAME_POLASIE_C4_M4", "desc": "MISSION_DESC_POLASIE_C4_M4", "playlist": "DECAY", "data": "STORY_POLASIE_C4_M4" },
	"POLASIE_C4_M5": { "name": "MISSION_NAME_POLASIE_C4_M5", "desc": "MISSION_DESC_POLASIE_C4_M5", "playlist": "EMPTY", "data": "STORY_POLASIE_C4_M5" },

	"POLASIE_C5_M1": { "name": "MISSION_NAME_POLASIE_C5_M1", "desc": "MISSION_DESC_POLASIE_C5_M1", "playlist": "DECAY", "data": "STORY_POLASIE_C5_M1" },
	"POLASIE_C5_M2": { "name": "MISSION_NAME_POLASIE_C5_M2", "desc": "MISSION_DESC_POLASIE_C5_M2", "playlist": "DECAY", "data": "STORY_POLASIE_C5_M2" },
	"POLASIE_C5_M3": { "name": "MISSION_NAME_POLASIE_C5_M3", "desc": "MISSION_DESC_POLASIE_C5_M3", "playlist": "DECAY", "data": "STORY_POLASIE_C5_M3" },
	"POLASIE_C5_M4": { "name": "MISSION_NAME_POLASIE_C5_M4", "desc": "MISSION_DESC_POLASIE_C5_M4", "playlist": "DECAY", "data": "STORY_POLASIE_C5_M4" },
	"POLASIE_C5_M5": { "name": "MISSION_NAME_POLASIE_C5_M5", "desc": "MISSION_DESC_POLASIE_C5_M5", "playlist": "EMPTY", "data": "STORY_POLASIE_C5_M5" },

	"POLASIE_C6_M1": { "name": "MISSION_NAME_POLASIE_C6_M1", "desc": "MISSION_DESC_POLASIE_C6_M1", "playlist": "DECAY", "data": "STORY_POLASIE_C6_M1" },
	"POLASIE_C6_M2": { "name": "MISSION_NAME_POLASIE_C6_M2", "desc": "MISSION_DESC_POLASIE_C6_M2", "playlist": "DECAY", "data": "STORY_POLASIE_C6_M2" },
	"POLASIE_C6_M3": { "name": "MISSION_NAME_POLASIE_C6_M3", "desc": "MISSION_DESC_POLASIE_C6_M3", "playlist": "DECAY", "data": "STORY_POLASIE_C6_M3" },
	"POLASIE_C6_M4": { "name": "MISSION_NAME_POLASIE_C6_M4", "desc": "MISSION_DESC_POLASIE_C6_M4", "playlist": "DECAY", "data": "STORY_POLASIE_C6_M4" },
	"POLASIE_C6_M5": { "name": "MISSION_NAME_POLASIE_C6_M5", "desc": "MISSION_DESC_POLASIE_C6_M5", "playlist": "DECAY", "data": "STORY_POLASIE_C6_M5" },

	"POLASIE_C7_M1": { "name": "MISSION_NAME_POLASIE_C7_M1", "desc": "MISSION_DESC_POLASIE_C7_M1", "playlist": "DECAY", "data": "STORY_POLASIE_C7_M1" },
	"POLASIE_C7_M2": { "name": "MISSION_NAME_POLASIE_C7_M2", "desc": "MISSION_DESC_POLASIE_C7_M2", "playlist": "DECAY", "data": "STORY_POLASIE_C7_M2" },
	"POLASIE_C7_M3": { "name": "MISSION_NAME_POLASIE_C7_M3", "desc": "MISSION_DESC_POLASIE_C7_M3", "playlist": "DECAY", "data": "STORY_POLASIE_C7_M3" },
	"POLASIE_C7_M4": { "name": "MISSION_NAME_POLASIE_C7_M4", "desc": "MISSION_DESC_POLASIE_C7_M4", "playlist": "DECAY", "data": "STORY_POLASIE_C7_M4" },
	"POLASIE_C7_M5": { "name": "MISSION_NAME_POLASIE_C7_M5", "desc": "MISSION_DESC_POLASIE_C7_M5", "playlist": "DECAY", "data": "STORY_POLASIE_C7_M5" },

	"ELAM_C1_M1": { "name": "MISSION_NAME_ELAM_C1_M1", "desc": "MISSION_DESC_ELAM_C1_M1", "playlist": "NASHEED", "data": "STORY_ELAM_C1_M1" },
	"ELAM_C1_M2": { "name": "MISSION_NAME_ELAM_C1_M2", "desc": "MISSION_DESC_ELAM_C1_M2", "playlist": "NASHEED", "data": "STORY_ELAM_C1_M2" },
	"ELAM_C1_M3": { "name": "MISSION_NAME_ELAM_C1_M3", "desc": "MISSION_DESC_ELAM_C1_M3", "playlist": "NASHEED", "data": "STORY_ELAM_C1_M3" },
	"ELAM_C1_M4": { "name": "MISSION_NAME_ELAM_C1_M4", "desc": "MISSION_DESC_ELAM_C1_M4", "playlist": "NASHEED", "data": "STORY_ELAM_C1_M4" },
	"ELAM_C1_M5": { "name": "MISSION_NAME_ELAM_C1_M5", "desc": "MISSION_DESC_ELAM_C1_M5", "playlist": "NASHEED", "data": "STORY_ELAM_C1_M5" },

	"ELAM_C2_M1": { "name": "MISSION_NAME_ELAM_C2_M1", "desc": "MISSION_DESC_ELAM_C2_M1", "playlist": "NASHEED", "data": "STORY_ELAM_C2_M1" },
	"ELAM_C2_M2": { "name": "MISSION_NAME_ELAM_C2_M2", "desc": "MISSION_DESC_ELAM_C2_M2", "playlist": "NASHEED", "data": "STORY_ELAM_C2_M2" },
	"ELAM_C2_M3": { "name": "MISSION_NAME_ELAM_C2_M3", "desc": "MISSION_DESC_ELAM_C2_M3", "playlist": "NASHEED", "data": "STORY_ELAM_C2_M3" },
	"ELAM_C2_M4": { "name": "MISSION_NAME_ELAM_C2_M4", "desc": "MISSION_DESC_ELAM_C2_M4", "playlist": "NASHEED", "data": "STORY_ELAM_C2_M4" },
	"ELAM_C2_M5": { "name": "MISSION_NAME_ELAM_C2_M5", "desc": "MISSION_DESC_ELAM_C2_M5", "playlist": "NASHEED", "data": "STORY_ELAM_C2_M5" },

	"ELAM_C3_M1": { "name": "MISSION_NAME_ELAM_C3_M1", "desc": "MISSION_DESC_ELAM_C3_M1", "playlist": "TAFSAK", "data": "STORY_ELAM_C3_M1" },
	"ELAM_C3_M2": { "name": "MISSION_NAME_ELAM_C3_M2", "desc": "MISSION_DESC_ELAM_C3_M2", "playlist": "TAFSAK", "data": "STORY_ELAM_C3_M2" },
	"ELAM_C3_M3": { "name": "MISSION_NAME_ELAM_C3_M3", "desc": "MISSION_DESC_ELAM_C3_M3", "playlist": "TAFSAK", "data": "STORY_ELAM_C3_M3" },
	"ELAM_C3_M4": { "name": "MISSION_NAME_ELAM_C3_M4", "desc": "MISSION_DESC_ELAM_C3_M4", "playlist": "TAFSAK", "data": "STORY_ELAM_C3_M4" },
	"ELAM_C3_M5": { "name": "MISSION_NAME_ELAM_C3_M5", "desc": "MISSION_DESC_ELAM_C3_M5", "playlist": "MALHAMAT", "data": "STORY_ELAM_C3_M5" },

	"ELAM_C4_M1": { "name": "MISSION_NAME_ELAM_C4_M1", "desc": "MISSION_DESC_ELAM_C4_M1", "playlist": "TAFSAK", "data": "STORY_ELAM_C4_M1" },
	"ELAM_C4_M2": { "name": "MISSION_NAME_ELAM_C4_M2", "desc": "MISSION_DESC_ELAM_C4_M2", "playlist": "TAFSAK", "data": "STORY_ELAM_C4_M2" },
	"ELAM_C4_M3": { "name": "MISSION_NAME_ELAM_C4_M3", "desc": "MISSION_DESC_ELAM_C4_M3", "playlist": "TAFSAK", "data": "STORY_ELAM_C4_M3" },
	"ELAM_C4_M4": { "name": "MISSION_NAME_ELAM_C4_M4", "desc": "MISSION_DESC_ELAM_C4_M4", "playlist": "TAFSAK", "data": "STORY_ELAM_C4_M4" },
	"ELAM_C4_M5": { "name": "MISSION_NAME_ELAM_C4_M5", "desc": "MISSION_DESC_ELAM_C4_M5", "playlist": "MALHAMAT", "data": "STORY_ELAM_C4_M5" },

	"ELAM_C5_M1": { "name": "MISSION_NAME_ELAM_C5_M1", "desc": "MISSION_DESC_ELAM_C5_M1", "playlist": "JIHAD", "data": "STORY_ELAM_C5_M1" },
	"ELAM_C5_M2": { "name": "MISSION_NAME_ELAM_C5_M2", "desc": "MISSION_DESC_ELAM_C5_M2", "playlist": "JIHAD", "data": "STORY_ELAM_C5_M2" },
	"ELAM_C5_M3": { "name": "MISSION_NAME_ELAM_C5_M3", "desc": "MISSION_DESC_ELAM_C5_M3", "playlist": "JIHAD", "data": "STORY_ELAM_C5_M3" },
	"ELAM_C5_M4": { "name": "MISSION_NAME_ELAM_C5_M4", "desc": "MISSION_DESC_ELAM_C5_M4", "playlist": "JIHAD", "data": "STORY_ELAM_C5_M4" },
	"ELAM_C5_M5": { "name": "MISSION_NAME_ELAM_C5_M5", "desc": "MISSION_DESC_ELAM_C5_M5", "playlist": "AL_KUBRA", "data": "STORY_ELAM_C5_M5" },

	"ELAM_C6_M1": { "name": "MISSION_NAME_ELAM_C6_M1", "desc": "MISSION_DESC_ELAM_C6_M1", "playlist": "TAFSAK", "data": "STORY_ELAM_C6_M1" },
	"ELAM_C6_M2": { "name": "MISSION_NAME_ELAM_C6_M2", "desc": "MISSION_DESC_ELAM_C6_M2", "playlist": "TAFSAK", "data": "STORY_ELAM_C6_M2" },
	"ELAM_C6_M3": { "name": "MISSION_NAME_ELAM_C6_M3", "desc": "MISSION_DESC_ELAM_C6_M3", "playlist": "TAFSAK", "data": "STORY_ELAM_C6_M3" },
	"ELAM_C6_M4": { "name": "MISSION_NAME_ELAM_C6_M4", "desc": "MISSION_DESC_ELAM_C6_M4", "playlist": "TAFSAK", "data": "STORY_ELAM_C6_M4" },
	"ELAM_C6_M5": { "name": "MISSION_NAME_ELAM_C6_M5", "desc": "MISSION_DESC_ELAM_C6_M5", "playlist": "MALHAMAT", "data": "STORY_ELAM_C6_M5" },

	"ELAM_C7_M1": { "name": "MISSION_NAME_ELAM_C7_M1", "desc": "MISSION_DESC_ELAM_C7_M1", "playlist": "TAFSAK", "data": "STORY_ELAM_C7_M1" },
	"ELAM_C7_M2": { "name": "MISSION_NAME_ELAM_C7_M2", "desc": "MISSION_DESC_ELAM_C7_M2", "playlist": "TAFSAK", "data": "STORY_ELAM_C7_M2" },
	"ELAM_C7_M3": { "name": "MISSION_NAME_ELAM_C7_M3", "desc": "MISSION_DESC_ELAM_C7_M3", "playlist": "TAFSAK", "data": "STORY_ELAM_C7_M3" },
	"ELAM_C7_M4": { "name": "MISSION_NAME_ELAM_C7_M4", "desc": "MISSION_DESC_ELAM_C7_M4", "playlist": "TAFSAK", "data": "STORY_ELAM_C7_M4" },
	"ELAM_C7_M5": { "name": "MISSION_NAME_ELAM_C7_M5", "desc": "MISSION_DESC_ELAM_C7_M5", "playlist": "MALHAMAT", "data": "STORY_ELAM_C7_M5" }
};