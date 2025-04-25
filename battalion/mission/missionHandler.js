const MissionHandler = function() {
	this.scenarios = new Map();
	this.currentScenario = null;
}

MissionHandler.prototype.load = function() {
	for(const scenarioID in SCENARIOS) {
		const scenario = new Scenario(scenarioID);

		scenario.load(scenarioID);

		this.scenarios.set(scenarioID, scenario);
	}
}
