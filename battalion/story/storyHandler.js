const StoryHandler = function() {
	this.scenarios = new Map();
	this.campaigns = new Map();
	this.chapters = new Map();
	this.missions = new Map();

	this.currentScenario = null;
	this.currentCampaign = null;
	this.currentChapter = null;
	this.currentMission = null;

	this.events = new EventEmitter();
	this.events.listen(StoryHandler.EVENT.MISSION_WON);
	this.events.listen(StoryHandler.EVENT.CHAPTER_WON);
	this.events.listen(StoryHandler.EVENT.CAMPAIGN_WON);
	this.events.listen(StoryHandler.EVENT.SCENARIO_WON);
	this.events.listen(StoryHandler.EVENT.UNLOCK_ALL);
}

StoryHandler.EVENT = {
	MISSION_WON: "MISSION_WON",
	CHAPTER_WON: "CHAPTER_WON",
	CAMPAIGN_WON: "CAMPAIGN_WON",
	SCENARIO_WON: "SCENARIO_WON",
	UNLOCK_ALL: "UNLOCK_ALL"
};

StoryHandler.prototype.getNode = function(type, id) {
	switch(type) {
		case StoryNode.TYPE.SCENARIO: return this.scenarios.get(id);
		case StoryNode.TYPE.CAMPAIGN: return this.campaigns.get(id);
		case StoryNode.TYPE.CHAPTER: return this.chapters.get(id);
		case StoryNode.TYPE.MISSION: return this.missions.get(id);
		default: return null;
	}
}

StoryHandler.prototype.getCurrentNode = function(type) {
	switch(type) {
		case StoryNode.TYPE.SCENARIO: return this.currentScenario;
		case StoryNode.TYPE.CAMPAIGN: return this.currentCampaign;
		case StoryNode.TYPE.CHAPTER: return this.currentChapter;
		case StoryNode.TYPE.MISSION: return this.currentMission;
		default: return null;
	}
}

StoryHandler.prototype.deselectNode = function(type) {
	switch(type) {
		case StoryNode.TYPE.SCENARIO: {
			this.currentScenario = null;
			this.currentCampaign = null;
			this.currentChapter = null;
			this.currentMission = null;
			break;
		}
		case StoryNode.TYPE.CAMPAIGN: {
			this.currentCampaign = null;
			this.currentChapter = null;
			this.currentMission = null;
			break;
		}
		case StoryNode.TYPE.CHAPTER: {
			this.currentChapter = null;
			this.currentMission = null;
			break;
		}
		case StoryNode.TYPE.MISSION: {
			this.currentMission = null;
			break;
		}
	}
}

StoryHandler.prototype.clear = function() {
	this.currentScenario = null;
	this.currentCampaign = null;
	this.currentChapter = null;
	this.currentMission = null;
}

StoryHandler.prototype.unlockAll = function() {
	this.missions.forEach((e) => e.finish());
	this.chapters.forEach((e) => e.finish());
	this.campaigns.forEach((e) => e.finish());
	this.scenarios.forEach((e) => e.finish());
	this.events.emit(StoryHandler.EVENT.UNLOCK_ALL);
}

StoryHandler.prototype.isNodeFinished = function(type, id) {
	const node = this.getNode(type, id);

	return node && node.isFinished();
}

StoryHandler.prototype.isNodeFullyComplete = function(node) {
	for(let i = 0; i < node.order.length; i++) {
		const childID = node.order[i];
        const isComplete = this.isNodeFinished(node.childType, childID);

        if(!isComplete) {
            return false;
        }
    }

	return true;
}

StoryHandler.prototype.getAllOpenNodes = function(node) {
	const available = new Set();

	for(let i = 0; i < node.order.length; i++) {
		const childID = node.order[i];
		const isCurrentFinished = this.isNodeFinished(node.childType, childID);

		available.add(childID);

		if(!isCurrentFinished) {
			return available;
		}
	}

	return available;
}

StoryHandler.prototype.onScenarionWon = function() {
	if(!this.currentScenario) {
		return;
	}

	const isFirst = this.currentScenario.finish();

	this.events.emit(StoryHandler.EVENT.SCENARIO_WON, this.currentScenario, isFirst);
	this.currentScenario = null;
}

StoryHandler.prototype.onCampaignWon = function() {
	if(!this.currentCampaign) {
		return;
	}

	const isFirst = this.currentCampaign.finish();
	const isComplete = this.isNodeFullyComplete(this.currentScenario);

	this.events.emit(StoryHandler.EVENT.CAMPAIGN_WON, this.currentCampaign, isFirst);
	this.currentCampaign = null;

	if(isComplete) {
		this.onScenarionWon();
	}
}

StoryHandler.prototype.onChapterWon = function() {
	if(!this.currentChapter) {
		return;
	}

	const isFirst = this.currentChapter.finish();
	const isComplete = this.isNodeFullyComplete(this.currentCampaign);

	this.events.emit(StoryHandler.EVENT.CHAPTER_WON, this.currentChapter, isFirst);
	this.currentChapter = null;

	if(isComplete) {
		this.onCampaignWon();
	}
}

StoryHandler.prototype.onMissionWon = function() {
	if(!this.currentMission) {
		return;
	}

	const isFirst = this.currentMission.finish();
	const isComplete = this.isNodeFullyComplete(this.currentChapter);

	this.events.emit(StoryHandler.EVENT.MISSION_WON, this.currentMission, isFirst);
	this.currentMission = null;
	
	if(isComplete) {
		this.onChapterWon();
	}
}

StoryHandler.prototype.isNodeAvailableAsNext = function(node, index) {
	if(index < 0 || index >= node.order.length) {
		return false;
	}

	for(let i = 0; i < index; i++) {
		const childID = node.order[i];
		const isPreviousFinished = this.isNodeFinished(node.childType, childID);

		if(!isPreviousFinished) {
			return false;
		}
	}

	return true;
}

StoryHandler.prototype.selectMissionIfAvailable = function(missionIndex) {
	if(!this.currentChapter) {
		return null;
	}

	const isAvailable = this.isNodeAvailableAsNext(this.currentChapter, missionIndex);

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

	const isAvailable = this.isNodeAvailableAsNext(this.currentCampaign, chapterIndex);

	if(!isAvailable) {
		return null;
	}

	const chapterID = this.currentCampaign.getChildByIndex(chapterIndex);
	const chapter = this.selectChapter(chapterID);

	return chapter;
}

StoryHandler.prototype.getNextIndex = function(type) {
	const node = this.getCurrentNode(type);

	if(!node) {
		return -1;
	}

	for(let i = 0; i < node.order.length; i++) {
		const childID = node.order[i];
		const isCurrentFinished = this.isNodeFinished(node.childType, childID);

		if(!isCurrentFinished) {
			return i;
		}
	}

	return node.order.length - 1;
}

StoryHandler.prototype.getNextMissionIndex = function() {
	return this.getNextIndex(StoryNode.TYPE.CHAPTER);
}

StoryHandler.prototype.getNextChapterIndex = function() {
	return this.getNextIndex(StoryNode.TYPE.CAMPAIGN);
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

StoryHandler.prototype.init = function(missions, chapters, campaigns, scenarios) {
	for(const missionID in missions) {
		const mission = new Mission(missionID);
		const config = missions[missionID];

		mission.setConfig(config);
		mission.init();

		this.missions.set(missionID, mission);
	}

	for(const chapterID in chapters) {
		const chapter = new Chapter(chapterID);
		const config = chapters[chapterID];
		
		chapter.setConfig(config);
		chapter.init();

		this.chapters.set(chapterID, chapter);
	}

	for(const campaignID in campaigns) {
		const campaign = new Campaign(campaignID);
		const config = campaigns[campaignID];
		
		campaign.setConfig(config);
		campaign.init();

		this.campaigns.set(campaignID, campaign);
	}

	for(const scenarioID in scenarios) {
		const scenario = new Scenario(scenarioID);
		const config = scenarios[scenarioID];
		
		scenario.setConfig(config);
		scenario.init();

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