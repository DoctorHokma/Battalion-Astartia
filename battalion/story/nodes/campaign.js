const Campaign = function(id) {
	StoryNode.call(this, id);
}

Campaign.prototype = Object.create(StoryNode.prototype);
Campaign.prototype.constructor = Campaign;

Campaign.prototype.load = function(campaignID) {
	const config = CAMPAIGNS[campaignID];

	if(!config) {
		return;
	}

	this.id = campaignID;
	this.type = config;

	const { chapters } = config;

	if(chapters) {
		this.order = chapters;

		for(let i = 0; i < chapters.length; i++) {
			const chapterID = chapters[i];

			this.children.add(chapterID);
		}
	}
}