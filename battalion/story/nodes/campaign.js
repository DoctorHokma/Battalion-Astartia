const Campaign = function(id) {
	StoryNode.call(this, id);
}

Campaign.prototype = Object.create(StoryNode.prototype);
Campaign.prototype.constructor = Campaign;

Campaign.prototype.init = function() {
	const { chapters } = this.config;

	if(chapters) {
		this.order = chapters;
	}
}