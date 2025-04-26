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

StoryHandler.prototype.selectChapter = function(chapterIndex) {
	if(!this.currentScenario) {
		return null;
	}

	if(!this.currentCampaign) {
		return null
	}

	const chapterID = this.currentCampaign.getChildByIndex(chapterIndex);

	if(!chapterID) {
		console.warn(`Chapter ${chapterIndex} does not exist for campaign`, this.currentCampaign);
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
		console.warn(`Chapter ${chapterIndex} is not available for campaign`, this.currentCampaign);
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
		console.warn(`Mission ${missionIndex} does not exist for chapter`, this.currentChapter);
		return null;
	}

	const isAvailable = this.currentChapter.isAvailableAsNext(missionIndex, (childID) => {
		const mission = this.missions.get(childID);

		return mission && mission.isFinished();
	});

	if(!isAvailable) {
		console.warn(`Mission ${missionIndex} is not available for chapter`, this.currentChapter);
		return null;
	}

	this.currentMission = mission;

	return mission;
}

StoryHandler.prototype.load = function(progress = {}) {
	const missionProgress = progress["MISSIONS"] ?? {};

	for(const missionID in MISSIONS) {
		const mission = new Mission(missionID);
		const progress = missionProgress[missionID];

		mission.load(missionID);
		mission.loadState(progress);

		this.missions.set(missionID, mission);
	}

	const chapterProgress = progress["CHAPTERS"] ?? {};

	for(const chapterID in CHAPTERS) {
		const chapter = new Chapter(chapterID);
		const progress = chapterProgress[chapterID];

		chapter.load(chapterID);
		chapter.loadState(progress);

		this.chapters.set(chapterID, chapter);
	}

	const campaignProgress = progress["CAMPAIGNS"] ?? {};

	for(const campaignID in CAMPAIGNS) {
		const campaign = new Campaign(campaignID);
		const progress = campaignProgress[campaignID];

		campaign.load(campaignID);
		campaign.loadState(progress);
		this.campaigns.set(campaignID, campaign);
	}
	
	const scenarioProgress = progress["SCENARIOS"] ?? {};

	for(const scenarioID in SCENARIOS) {
		const scenario = new Scenario(scenarioID);
		const progress = scenarioProgress[scenarioID];

		scenario.load(scenarioID);
		scenario.loadState(progress);

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