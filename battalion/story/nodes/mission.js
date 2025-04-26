const Mission = function(id) {
	StoryNode.call(this, id);

	this.data = {};
}

Mission.prototype = Object.create(StoryNode.prototype);
Mission.prototype.constructor = Mission;

Mission.prototype.load = function(missionID) {
	const config = MISSIONS[missionID];

	if(!config) {
		return;
	}

	this.id = missionID;
	this.type = config;
	
	const { data } = config;
	const missionData = MISSION_DATA[data];

	if(missionData) {
		this.data = missionData;
	}
}
