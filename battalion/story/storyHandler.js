const StoryHandler = function() {
	this.scenarios = new Map();
	this.campaigns = new Map();
	this.chapters = new Map();
	this.missions = new Map();

	this.currentScenario = null;
	this.currentCampaign = null;
	this.currentChapter = null;
	this.currentMission = null;
}

StoryHandler.TYPE = {
	SCENARIO: 0,
	CAMPAIGN: 1,
	CHAPTER: 2,
	MISSION: 3
};

StoryHandler.prototype.onMissionWon = function(missionID) {
	//Gets called in EndBattle, if the user was victorious.
}

StoryHandler.prototype.unlockAll = function() {
	this.missions.forEach((e) => e.finish());
	this.chapters.forEach((e) => e.finish());
	this.campaigns.forEach((e) => e.finish());
	this.scenarios.forEach((e) => e.finish());
}

StoryHandler.prototype.selectMissionIfAvailable = function(missionIndex) {
	if(!this.currentChapter) {
		return null;
	}

	const isAvailable = this.currentChapter.isAvailableAsNext(missionIndex, (childID) => {
		const mission = this.missions.get(childID);

		return mission && mission.isFinished(); 
	});

	if(!isAvailable) {
		return null;
	}

	const missionID = this.currentChapter.getChildByIndex(missionIndex);
	const mission = this.selectMission(missionID);

	return mission;
}

StoryHandler.prototype.selectChapterIfAvailable = function(chapterIndex) {
	if(!this.currentCampaign) {
		return null;
	}

	const isAvailable = this.currentCampaign.isAvailableAsNext(chapterIndex, (childID) => {
		const chapter = this.chapters.get(childID);

		return chapter && chapter.isFinished(); 
	});

	if(!isAvailable) {
		return null;
	}

	const chapterID = this.currentCampaign.getChildByIndex(chapterIndex);
	const chapter = this.selectChapter(chapterID);

	return chapter;
}

StoryHandler.prototype.getNextMissionIndex = function() {
	if(!this.currentChapter) {
		return -1;
	}

	const index = this.currentChapter.getNextAvailableIndex((missionID) => {
		const mission = this.missions.get(missionID);

		return mission && mission.isFinished();
	});

	return index;
}

StoryHandler.prototype.getNextChapterIndex = function() {
	if(!this.currentCampaign) {
		return -1;
	}

	const index = this.currentCampaign.getNextAvailableIndex((chapterID) => {
		const chapter = this.chapters.get(chapterID);

		return chapter && chapter.isFinished();
	});

	return index;
}

StoryHandler.prototype.getNode = function(type) {
	switch(type) {
		case StoryHandler.TYPE.SCENARIO: return this.currentScenario;
		case StoryHandler.TYPE.CAMPAIGN: return this.currentCampaign;
		case StoryHandler.TYPE.CHAPTER: return this.currentChapter;
		case StoryHandler.TYPE.MISSION: return this.currentMission;
		default: return null;
	}
}

StoryHandler.prototype.deselect = function(type) {
	switch(type) {
		case StoryHandler.TYPE.SCENARIO: {
			this.currentScenario = null;
			this.currentCampaign = null;
			this.currentChapter = null;
			this.currentMission = null;
			break;
		}
		case StoryHandler.TYPE.CAMPAIGN: {
			this.currentCampaign = null;
			this.currentChapter = null;
			this.currentMission = null;
			break;
		}
		case StoryHandler.TYPE.CHAPTER: {
			this.currentChapter = null;
			this.currentMission = null;
			break;
		}
		case StoryHandler.TYPE.MISSION: {
			this.currentMission = null;
			break;
		}
	}
}

StoryHandler.prototype.selectScenario = function(scenarioID) {
	const scenario = this.scenarios.get(scenarioID);

	if(!scenario) {
		console.warn(`Scenario ${scenarioID} does not exist!`);
		return null;
	}

	this.currentScenario = scenario;
	this.currentCampaign = null;
	this.currentChapter = null;
	this.currentMission = null;

	return scenario;
}

StoryHandler.prototype.selectCampaign = function(campaignID) {
	if(!this.currentScenario) {
		return null;
	}

	const hasCampaign = this.currentScenario.hasChild(campaignID);

	if(!hasCampaign) {
		console.warn(`Campaign ${campaignID} does not exist for scenario`, this.currentScenario);
		return null;
	}

	const campaign = this.campaigns.get(campaignID);

	if(!campaign) {
		return null;
	}

	this.currentCampaign = campaign;
	this.currentChapter = null;
	this.currentMission = null;

	return campaign;
}

StoryHandler.prototype.selectChapter = function(chapterID) {
	if(!this.currentCampaign) {
		return null
	}

	const hasChapter = this.currentCampaign.hasChild(chapterID);

	if(!hasChapter) {
		console.warn(`Chapter ${chapterID} does not exist for campaign`, this.currentCampaign);
		return null;
	}

	const chapter = this.chapters.get(chapterID);

	if(!chapter) {
		return null;
	}

	this.currentChapter = chapter;
	this.currentMission = null;
	
	return chapter;
}

StoryHandler.prototype.selectMission = function(missionID) {
	if(!this.currentChapter) {
		return null;
	}

	const hasMission = this.currentChapter.hasChild(missionID);

	if(!hasMission) {
		console.warn(`Mission ${missionID} does not exist for chapter`, this.currentChapter);
		return null;
	}

	const mission = this.missions.get(missionID);

	if(!mission) {
		return null;
	}

	this.currentMission = mission;

	return mission;
}

StoryHandler.prototype.init = function() {
	for(const missionID in MISSIONS) {
		const mission = new Mission();
		const config = MISSIONS[missionID];

		mission.init(missionID, config);

		this.missions.set(missionID, mission);
	}

	for(const chapterID in CHAPTERS) {
		const chapter = new Chapter();
		const config = CHAPTERS[chapterID];

		chapter.init(chapterID, config);

		this.chapters.set(chapterID, chapter);
	}


	for(const campaignID in CAMPAIGNS) {
		const campaign = new Campaign();
		const config = CAMPAIGNS[campaignID];

		campaign.init(campaignID, config);

		this.campaigns.set(campaignID, campaign);
	}
	

	for(const scenarioID in SCENARIOS) {
		const scenario = new Scenario();
		const config = SCENARIOS[scenarioID];

		scenario.init(scenarioID, config);

		this.scenarios.set(scenarioID, scenario);
	}
}

StoryHandler.prototype.load = function(data) {
	const { MISSIONS, CHAPTERS, CAMPAIGNS, SCENARIOS } = data;

	for(const missionID in MISSIONS) {
		const mission = this.missions.get(missionID);

		if(mission) {
			mission.loadState(MISSIONS[missionID]);
		}
	}

	for(const chapterID in CHAPTERS) {
		const chapter = this.chapters.get(chapterID);

		if(chapter) {
			chapter.loadState(CHAPTERS[chapterID]);
		}
	}

	for(const campaignID in CAMPAIGNS) {
		const campaign = this.campaigns.get(campaignID);

		if(campaign) {
			campaign.loadState(CAMPAIGNS[campaignID]);
		}
	}

	for(const scenarioID in SCENARIOS) {
		const scenario = this.scenarios.get(scenarioID);

		if(scenario) {
			scenario.loadState(SCENARIOS[scenarioID]);
		}
	}
}

StoryHandler.prototype.save = function() {
	const data = {
		"MISSIONS": {},
		"CHAPTERS": {},
		"CAMPAIGNS": {},
		"SCENARIOS": {}
	};

	this.missions.forEach(({id, state}) => data.MISSIONS[id] = state);
	this.chapters.forEach(({id, state}) => data.CHAPTERS[id] = state);
	this.campaigns.forEach(({id, state}) => data.CAMPAIGNS[id] = state);
	this.scenarios.forEach(({id, state}) => data.SCENARIOS[id] = state);

	return data;
}