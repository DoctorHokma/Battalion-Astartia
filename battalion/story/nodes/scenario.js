const Scenario = function(id) {
    StoryNode.call(this, id);

	this.childType = StoryNode.TYPE.CAMPAIGN;
}

Scenario.prototype = Object.create(StoryNode.prototype);
Scenario.prototype.constructor = Scenario;

Scenario.prototype.init = function() {
    const { campaigns } = this.config;

    if(campaigns) {
        this.order = campaigns;
    }
}