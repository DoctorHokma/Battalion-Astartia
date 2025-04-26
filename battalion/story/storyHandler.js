const StoryHandler = function() {
	this.scenarios = new Map();
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

StoryHandler.prototype.selectScenario = function(scenarioID) {
	const scenario = this.scenarios.get(scenarioID);

	if(!scenario) {
		return;
	}

	this.currentScenario = scenario;
	this.currentCampaign = null;
	this.currentChapter = null;
	this.currentMission = null;
}

StoryHandler.prototype.getDataOf = function(type) {
	switch(type) {
		case StoryHandler.TYPE.SCENARIO: {
			if(!this.currentScenario) {
				return null;
			}

			return this.currentScenario.type;
		}
		case StoryHandler.TYPE.CAMPAIGN: {
			if(!this.currentCampaign) {
				return null;
			}

			return this.currentCampaign.type;
		}
		case StoryHandler.TYPE.CHAPTER: {
			if(!this.currentChapter) {
				return null;
			}

			return this.currentChapter.type;
		}
		case StoryHandler.TYPE.MISSION: {
			if(!this.currentMission) {
				return null;
			}

			return this.currentMission.type;
		}
	}
}

StoryHandler.prototype.selectCampaign = function(campaignID) {
	if(!this.currentScenario) {
		return;
	}

	const campaign = this.currentScenario.getCampaign(campaignID);

	if(!campaign) {
		return;
	}

	this.currentCampaign = campaign;
	this.currentChapter = null;
	this.currentMission = null;
}

StoryHandler.prototype.selectChapter = function(chapterIndex) {
	if(!this.currentScenario) {
		return;
	}

	if(!this.currentCampaign) {
		return;
	}

	const chapter = this.currentCampaign.getChapter(chapterIndex);

	if(!chapter) {
		return;
	}

	this.currentChapter = chapter;
	this.currentMission = null;
}

StoryHandler.prototype.selectMission = function(missionIndex) {
	if(!this.currentScenario) {
		return;
	}

	if(!this.currentCampaign) {
		return;
	}

	if(!this.currentChapter) {
		return;
	}

	const mission = this.currentChapter.getMission(missionIndex);

	if(!mission) {
		return;
	}

	this.currentMission = mission;
}

StoryHandler.prototype.load = function() {
	for(const scenarioID in SCENARIOS) {
		const scenario = new Scenario(scenarioID);

		scenario.load(scenarioID);

		this.scenarios.set(scenarioID, scenario);
	}
}
