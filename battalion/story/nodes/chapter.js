const Chapter = function(id) {
	StoryNode.call(this, id);

	this.childType = StoryNode.TYPE.MISSION;
}

Chapter.prototype = Object.create(StoryNode.prototype);
Chapter.prototype.constructor = Chapter;

Chapter.prototype.init = function() {
	const { missions } = this.config;

	if(missions) {
		this.order = missions;
	}
}