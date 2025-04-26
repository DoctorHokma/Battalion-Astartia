const Campaign = function(id) {
	this.id = id;
	this.type = null;
	this.chapters = [];
}

Campaign.prototype.getChapter = function(chapterIndex) {
	if(chapterIndex < 0 || chapterIndex >= this.chapters.length) {
		return null;
	}

	return this.chapters[chapterIndex];
}

Campaign.prototype.load = function(campaignID) {
	const config = CAMPAIGNS[campaignID];

	if(!config) {
		return;
	}

	this.id = campaignID;
	this.type = config;

	const { chapters } = config;

	if(chapters) {
		for(let i = 0; i < chapters.length; i++) {
			const chapterID = chapters[i];
			const chapter = new Chapter(chapterID);
	
			chapter.load(chapterID);
			
			this.chapters.push(chapter);
		}
	}
}