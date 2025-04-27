const Scenario = function() {
    StoryNode.call(this);
}

Scenario.prototype = Object.create(StoryNode.prototype);
Scenario.prototype.constructor = Scenario;

Scenario.prototype.init = function(scenarioID, scenario) {
    this.id = scenarioID;
    this.type = scenario;
    
    const { campaigns } = scenario;

    for(let i = 0; i < campaigns.length; i++) {
        const campaignID = campaigns[i];

        this.children.add(campaignID);
    }
}