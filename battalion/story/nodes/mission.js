const Mission = function(id) {
	StoryNode.call(this, id);

	this.data = {};
}

Mission.prototype = Object.create(StoryNode.prototype);
Mission.prototype.constructor = Mission;

Mission.prototype.init = function() {	
	const { data } = this.config;
	const missionData = MISSION_DATA[data];

	if(missionData) {
		this.data = missionData;
	}
}
