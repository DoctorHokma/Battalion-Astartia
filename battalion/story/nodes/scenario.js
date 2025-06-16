const Scenario = function(id) {
    StoryNode.call(this, id);
}

Scenario.prototype = Object.create(StoryNode.prototype);
Scenario.prototype.constructor = Scenario;

Scenario.prototype.init = function() {
    const { campaigns } = this.config;

    if(campaigns) {
        this.order = campaigns;
    }
}