const DISPLAY_TYPE = {
    NONE: "none",
    BLOCK: "block"
}

/*
let ElamFlagVariant=1; for(let j=1;j<5;j++){if(Campaigns[4][j-1][4].Finished??false){ElamFlagVariant=j+1}}; if(!MystSettChoice){ElamFlagVariant=1};
document.getElementById('Elam Flag').src='Assets/Flags/FlagELM'+ElamFlagVariant+'.png'
*/

/*battalion.db.saveProfile(PROFILE_ID, {
	"MISSIONS": {
		"SOMERTIN_C1_M1": 1,
		"SOMERTIN_C1_M2": 1,
		"SOMERTIN_C1_M3": 1,
		"SOMERTIN_C1_M4": 1,
		"SOMERTIN_C1_M5": 1
	},
	"CHAPTERS": {
		"SOMERTIN_C1": 1
	}
});*/

const addStoryEvents = function(battalion) {
    const { db, story, language } = battalion;

    story.events.on(StoryHandler.EVENT.SCENARIO_WON, (scenario, isFirst) =>  {
        console.log(scenario, isFirst, "HAS BEEN WON");

        if(isFirst) {
            db.saveProfile(PROFILE_ID, story.save());
        }
    }, { permanent: true });
    
    story.events.on(StoryHandler.EVENT.CAMPAIGN_WON, (campaign, isFirst) =>  {
        console.log(campaign, isFirst, "HAS BEEN WON");

        if(isFirst) {
            db.saveProfile(PROFILE_ID, story.save());
        }
    }, { permanent: true });
    
    story.events.on(StoryHandler.EVENT.CHAPTER_WON, (chapter, isFirst) =>  {
        console.log(chapter, isFirst, "HAS BEEN WON");
    
        if(isFirst) {
            const { type } = chapter;
            const { interlogueImage, interlogue } = type;
    
            document.getElementById("InterlogueScreen").style.visibility = "visible";
            document.getElementById("InterlogueImage").src = interlogueImage;
            document.getElementById("InterlogueText").innerHTML = language.get(interlogue);
            
            db.saveProfile(PROFILE_ID, story.save());
        }
    }, { permanent: true });
    
    story.events.on(StoryHandler.EVENT.MISSION_WON, (mission, isFirst) =>  {
        console.log(mission, isFirst, "HAS BEEN WON");

        if(isFirst) {
            db.saveProfile(PROFILE_ID, story.save());
        }
    }, { permanent: true });
}

const saveStory = function() {
    const { story } = battalion;
    const saveData = story.save();

    const file = new PrettyJSON(4).open();

    for(const groupID in saveData) {
        file.writeLine(groupID, saveData[groupID]);
    }

    file
    .close()
    .download("progress");
}

const updateScenarioVisibility = function(scenario, displayType) {
    if(!scenario) {
        return;
    }

    const { type } = scenario;

    if(!type) {
        return;
    }

    const { element } = type;
    const div = document.getElementById(element);

    if(!div) {
        return;
    }
    
    div.style.display = displayType;
}

const showNationData = function(battalion, nationID) {
    const { language } = battalion;
    const nation = NATION[nationID];

    if(!nation) {
        return;
    }

    const { name, power, chroma, faction } = nation;

    document.getElementById("NationDetails").style.visibility = "visible";
    document.getElementById("NationNameSpecific").innerHTML = language.get(name);
    document.getElementById("NationColor").style.filter = chroma;

    const factionType = FACTION[faction];

    if(factionType) {
        const { name } = factionType;

        document.getElementById("FactionNameSpecific").innerHTML = language.get(name);
    }

    const powerType = POWER[power];

    if(powerType) {
        const { name } = powerType;

        document.getElementById("NationStatus").innerHTML = language.get(name);
    }
}

const showMissionData = function(battalion, mission, missionIndex) {
    const { language } = battalion;
    const { type } = mission;
    const { name, desc } = type;
    const emblemPosition = missionIndex * 85;

    document.getElementById('MissionName').innerHTML = language.get(name);
    document.getElementById('MissionDescription').innerHTML = language.get(desc);
    document.getElementById('EmblemSlot').style.left = `${emblemPosition}px`;
}

const showChapterData = function(battalion, chapter, chapterIndex) {
    const { language } = battalion;
    const { type } = chapter;
    const { name, illustration } = type;
    const pointerPosition = chapterIndex * 33 - 6;

    document.getElementById("ChapterIllustration").src = illustration;
    document.getElementById('CampaignName').innerHTML = language.get(name);
    document.getElementById("ChapterPanelPointer").style.top = `${pointerPosition}px`;
}

const showCampaignData = function(battalion, campaign) {
    const { language } = battalion;
    const { type } = campaign;
    const { desc, startButton } = type;
    
    document.getElementById("LevelStartButton").innerHTML = language.get(startButton);

    const nationDesc = language.get(desc);
    const nationSynopsis = document.getElementById("NationSynopsisSpecific");
    const nationDescText = Array.isArray(nationDesc) ? nationDesc.join("<br><br>") : nationDesc;

    nationSynopsis.innerHTML = nationDescText;
}

const showProgressData = function(battalion) {
    const { story } = battalion;
    const campaign = story.getNode(StoryHandler.TYPE.CAMPAIGN);
    const chapter = story.getNode(StoryHandler.TYPE.CHAPTER);

    if(!campaign || !chapter) {
        return;
    }

    const { type } = campaign;
    const { nation } = type;

    const PLAQUE_IMAGES = ["Chp1plaque", "Chp2plaque", "Chp3plaque", "Chp4plaque", "Chp5plaque", "Chp6plaque", "Chp7plaque"];
    const PLAQUES = ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7"];
    const nextChapters = campaign.getAllAvailableAsNext((chapterID) => {
        const chapter = story.chapters.get(chapterID);

        return chapter && chapter.isFinished();
    });

    for(let i = 0; i < PLAQUES.length; i++) {
        const plaqueID = PLAQUES[i];
        const plaque = document.getElementById(plaqueID);

        if(i >= campaign.order.length) {
            plaque.style.visibility = "hidden";
            continue;
        }

        plaque.style.visibility = "inherit";

        const plaqueImageID = PLAQUE_IMAGES[i];
        const plaqueImage = document.getElementById(plaqueImageID);
        const chapterID = campaign.order[i];

        if(nextChapters.has(chapterID)) {
            plaqueImage.src = "Assets/Miscellaneous/Plaque.png";
        } else {
            plaqueImage.src = "Assets/Miscellaneous/NonPlaque.png";
        }
    }

    const nationType = NATION[nation];

    if(!nationType) {
        return;
    }

    const { emblem, nonEmblem } = nationType;
    const EMBLEMS = ["Emblem1", "Emblem2", "Emblem3", "Emblem4", "Emblem5"];
    const nextMissions = chapter.getAllAvailableAsNext((missionID) => {
        const mission = story.missions.get(missionID);

        return mission && mission.isFinished();
    });

    for(let i = 0; i < EMBLEMS.length; i++) {
        const emblemID = EMBLEMS[i];
        const emblemElement = document.getElementById(emblemID);

        if(i >= chapter.order.length) {
            emblemElement.style.visibility = "hidden";
            continue;
        }

        emblemElement.style.visibility = "inherit";

        const missionID = chapter.order[i];

        if(nextMissions.has(missionID)) {
            emblemElement.src = emblem;
        } else {
            emblemElement.src = nonEmblem;
        }
    }
}

const selectScenario = function(scenarioID) {
	const { story } = battalion;
	const scenario = story.selectScenario(scenarioID);

    if(!scenario) {
        return;
    }

    story.scenarios.forEach(s => updateScenarioVisibility(s, DISPLAY_TYPE.NONE));

    updateScenarioVisibility(scenario, DISPLAY_TYPE.BLOCK);
}

const selectCampaign = function(campaignID, Nation) {
	const { story } = battalion;
	const campaign = story.selectCampaign(campaignID);

    if(!campaign) {
        return;
    }

    const { type } = campaign;
    const { nation, hidden } = type;

    if(hidden) {
        alert("Halt! None may see the secret nations until they have unlocked them. Go back to playing the regular campaigns!");
        return;
    }

    showCampaignData(battalion, campaign);
    showNationData(battalion, nation);

    //Ugly Globals... AFUERA
    ChosenNation = Nation;
    
    const nextChapterIndex = story.getNextChapterIndex();

    selectChapter(nextChapterIndex);
}

const selectChapter = function(chapterIndex) {
	const { story } = battalion;
    const chapter = story.selectChapterIfAvailable(chapterIndex);

    if(!chapter) {
        return;
    }

    //Ugly Globals... AFUERA
    ChosenChapter = chapterIndex + 1;

    const nextMissionIndex = story.getNextMissionIndex();

    selectMission(nextMissionIndex);
    showChapterData(battalion, chapter, chapterIndex);
    showProgressData(battalion);
}

const selectMission = function(missionIndex) {
	const { story } = battalion;
    const mission = story.selectMissionIfAvailable(missionIndex);

    if(!mission) {
        return;
    }

    //Ugly Globals... AFUERA
    ChosenMission = missionIndex + 1;

    showMissionData(battalion, mission, missionIndex);

    document.getElementById("SpecificationText").innerHTML = Language.SystemTerms[91]; //TODO

    const { data } = mission;
    const { Constants } = data;

    if(!Constants) {
        return;
    }

    if(Constants.Funds && Constants.Funds[1] > 0){
        document.getElementById("CampaignSpecification1").style.visibility = "inherit";
    } else {
        document.getElementById("CampaignSpecification1").style.visibility = "hidden";
    }

	if(Constants.Survival < 77777){
        document.getElementById("CampaignSpecification2").style.visibility = "inherit";
    } else {
        document.getElementById("CampaignSpecification2").style.visibility = "hidden";
    }

	if(Constants.TimeLimit < 77777){
        document.getElementById("CampaignSpecification3").style.visibility = "inherit";
    } else {
        document.getElementById("CampaignSpecification3").style.visibility = "hidden";
    }

	if(Constants.Defend.length > 0){
        document.getElementById("CampaignSpecification4").style.visibility = "inherit";
    } else {
        document.getElementById("CampaignSpecification4").style.visibility = "hidden";
    }

	if(Constants.Capture.length > 0){
        document.getElementById("CampaignSpecification5").style.visibility = "inherit";
    } else {
        document.getElementById("CampaignSpecification5").style.visibility = "hidden";
    }

	if(Constants.Protect.length > 0){
        document.getElementById("CampaignSpecification6").style.visibility = "inherit";
    } else {
        document.getElementById("CampaignSpecification6").style.visibility = "hidden";
    }

	if(Constants.Defeat.length > 0){
        document.getElementById("CampaignSpecification7").style.visibility = "inherit";
    } else {
        document.getElementById("CampaignSpecification7").style.visibility = "hidden";
    }
}

function CallCampaignScreen() {
	document.getElementById("CampaignSelectionScreen").style.visibility = "hidden";
	document.getElementById("NationDetails").style.visibility = "hidden";
	document.getElementById("CampaignScreen").style.visibility = "visible";
}