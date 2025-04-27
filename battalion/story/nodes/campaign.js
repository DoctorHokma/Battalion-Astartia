const Campaign = function() {
	StoryNode.call(this);
}

Campaign.prototype = Object.create(StoryNode.prototype);
Campaign.prototype.constructor = Campaign;

Campaign.prototype.init = function(campaignID, campaign) {
	this.id = campaignID;
	this.type = campaign;

	const { chapters } = campaign;

	if(chapters) {
		this.order = chapters;

		for(let i = 0; i < chapters.length; i++) {
			const chapterID = chapters[i];

			this.children.add(chapterID);
		}
	}
}