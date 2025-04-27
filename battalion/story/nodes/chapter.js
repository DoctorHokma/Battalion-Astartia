const Chapter = function() {
	StoryNode.call(this);
}

Chapter.prototype = Object.create(StoryNode.prototype);
Chapter.prototype.constructor = Chapter;

Chapter.prototype.init = function(chapterID, chapter) {
	this.id = chapterID;
	this.type = chapter;

	const { missions } = chapter;

	if(missions) {
		this.order = missions;

		for(let i = 0; i < missions.length; i++) {
			const missionID = missions[i];

			this.children.add(missionID);
		}
	}
}