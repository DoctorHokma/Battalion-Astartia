const Scenario = function(id) {
    StoryNode.call(this, id);
}

Scenario.prototype = Object.create(StoryNode.prototype);
Scenario.prototype.constructor = Scenario;

Scenario.prototype.load = function(scenarioID) {
	const config = SCENARIOS[scenarioID];

	if(!config) {
		return;
	}

    this.id = scenarioID;
    this.type = config;
    
    const { campaigns } = config;

    for(let i = 0; i < campaigns.length; i++) {
        const campaignID = campaigns[i];

        this.children.add(campaignID);
    }
}