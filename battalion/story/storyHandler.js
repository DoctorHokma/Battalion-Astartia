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

StoryHandler.prototype.selectChapter = function(chapterIndex) {
	if(!this.currentScenario) {
		return null;
	}

	if(!this.currentCampaign) {
		return null
	}

	const chapterID = this.currentCampaign.getChildByIndex(chapterIndex);

	if(!chapterID) {
		return null;
	}

	const chapter = this.chapters.get(chapterID);

	if(!chapter) {
		return null;
	}

	const isAvailable = this.currentCampaign.isAvailableAsNext(chapterIndex, (childID) => {
		const chapter = this.chapters.get(childID);

		return chapter && chapter.isFinished(); 
	});

	if(!isAvailable) {
		return null;
	}

	this.currentChapter = chapter;
	this.currentMission = null;
	
	return chapter;
}

StoryHandler.prototype.selectMission = function(missionIndex) {
	if(!this.currentScenario) {
		return null;
	}

	if(!this.currentCampaign) {
		return null;
	}

	if(!this.currentChapter) {
		return null;
	}

	const mission = this.currentChapter.getChildByIndex(missionIndex);

	if(!mission) {
		return null;
	}

	const isAvailable = this.currentChapter.isAvailableAsNext(missionIndex, (childID) => {
		const mission = this.missions.get(childID);

		return mission && mission.isFinished();
	});

	if(!isAvailable) {
		return null;
	}

	this.currentMission = mission;

	return mission;
}

//TODO: add a postloader that sets states.
StoryHandler.prototype.load = function() {
	for(const missionID in MISSIONS) {
		const mission = new Mission(missionID);

		mission.load(missionID);

		this.missions.set(missionID, mission);
	}

	for(const chapterID in CHAPTERS) {
		const chapter = new Chapter(chapterID);

		chapter.load(chapterID);

		this.chapters.set(chapterID, chapter);
	}

	for(const campaignID in CAMPAIGNS) {
		const campaign = new Campaign(campaignID);

		campaign.load(campaignID);

		this.campaigns.set(campaignID, campaign);
	}
	
	for(const scenarioID in SCENARIOS) {
		const scenario = new Scenario(scenarioID);

		scenario.load(scenarioID);

		this.scenarios.set(scenarioID, scenario);
	}
}

StoryHandler.prototype.save = function() {
	const progress = {
		"MISSIONS": {},
		"CHAPTERS": {},
		"CAMPAIGNS": {},
		"SCENARIOS": {}
	};

	this.missions.forEach(({id, state}) => progress.MISSIONS[id] = state);
	this.chapters.forEach(({id, state}) => progress.CHAPTERS[id] = state);
	this.campaigns.forEach(({id, state}) => progress.CAMPAIGNS[id] = state);
	this.scenarios.forEach(({id, state}) => progress.SCENARIOS[id] = state);

	return progress;
}