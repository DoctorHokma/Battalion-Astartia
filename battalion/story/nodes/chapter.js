const Chapter = function(id) {
	StoryNode.call(this, id);
}

Chapter.prototype = Object.create(StoryNode.prototype);
Chapter.prototype.constructor = Chapter;

Chapter.prototype.init = function() {
	const { missions } = this.config;

	if(missions) {
		this.order = missions;
	}
}