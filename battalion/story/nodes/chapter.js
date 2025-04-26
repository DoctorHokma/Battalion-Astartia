const Chapter = function(id) {
	StoryNode.call(this, id);
}

Chapter.prototype = Object.create(StoryNode.prototype);
Chapter.prototype.constructor = Chapter;

Chapter.prototype.load = function(chapterID) {
	const config = CHAPTERS[chapterID];

	if(!config) {
		return;
	}

	this.id = chapterID;
	this.type = config;

	const { missions } = config;

	if(missions) {
		this.order = missions;

		for(let i = 0; i < missions.length; i++) {
			const missionID = missions[i];

			this.children.add(missionID);
		}
	}
}