const DISPLAY_TYPE = {
    NONE: "none",
    BLOCK: "block"
}

const saveStory = function() {
    const { saveHandler } = battalion;
    const saveData = saveHandler.saveStoryProgress(battalion);

    const file = new PrettyJSON(4).open();

    for(const groupID in saveData) {
        file.writeLine(groupID, saveData[groupID]);
    }

    file
    .close()
    .download("progress");
}

const showNation = function(battalion, nationID) {
    const { language } = battalion;
    const nation = NATION[nationID];

    if(!nation) {
        return;
    }

    const { power, chroma, name, desc, faction } = nation;

    document.getElementById("NationDetails").style.visibility = "visible";
    document.getElementById("NationColor").style.filter = chroma
	document.getElementById("NationNameSpecific").innerHTML = language.get(name);

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

    const nationDesc = language.get(desc);
    const nationSynopsis = document.getElementById("NationSynopsisSpecific");

    switch(typeof nationDesc) {
        case "string": {
            nationSynopsis.innerHTML = nationDesc;
            break;
        }
        case "object": {
            let text = "";

            for(let i = 0; i < nationDesc.length; i++) {
                const line = nationDesc[i] + "<br><br>";

                text += line;
            }

            nationSynopsis.innerHTML = text;
            break;
        }
    }
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

    //Ugly Globals... AFUERA
    ChosenNation = Nation;
	ChosenChapter = 1;

    showNation(battalion, nation);
}

const selectChapter = function(chapterIndex) {
	const { story } = battalion;
    const chapter = story.selectChapter(chapterIndex);

    if(!chapter) {
        return;
    }
}

const selectMission = function(missionIndex) {
	const { story } = battalion;
    const mission = story.selectMission(missionIndex);

    if(!mission) {
        return;
    }
}

const showMissionScreen = function(battalion) {
    const { story, language } = battalion;
    const campaign = story.getNode(StoryHandler.TYPE.CAMPAIGN);

    if(!campaign) {
        return;
    }
}

//has to check if chapterIndex -1 is DONE.
//to do so, add a helper function that checks if the chapter is completed!
//it basically tries to check if all elements down a tree are done!
function ChooseChapter(Chapter){
	let checker=false;

	if(Chapter==1)checker=true;
	if(Chapter > 1 && Campaigns[ChosenNation-1][Chapter-2][4].Finished) checker=true;

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

	    for(let i=0;i<=3;i++) {
	        if(Campaigns[ChosenNation-1][ChosenChapter-1][i].Finished) {
                document.getElementById('Emblem'+ (i+2)).src="Assets/Emblems/Emblem"+Factions[ChosenNation].Preffix+".PNG";
            } else {
                document.getElementById('Emblem'+ (i+2)).src="Assets/Emblems/NONEmblem"+Factions[ChosenNation].Preffix+".PNG";
            }
	    }   
	}
}

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
	}
}

//This selects the campaign/enables the campaign board.
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
	if(Campaigns[ChosenNation-1][ChosenChapter-1][ChosenMission-1].Constants.Defeat.length>0){document.getElementById("CampaignSpecification7").style.visibility="inherit"}else{document.getElementById("CampaignSpecification7").style.visibility="hidden"};
}