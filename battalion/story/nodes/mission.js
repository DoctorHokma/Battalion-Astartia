const Mission = function() {
	StoryNode.call(this);

	this.data = {};
}

Mission.prototype = Object.create(StoryNode.prototype);
Mission.prototype.constructor = Mission;

Mission.prototype.init = function(missionID, mission) {
	this.id = missionID;
	this.type = mission;
	
	const { data } = mission;
	const missionData = MISSION_DATA[data];

	if(missionData) {
		this.data = missionData;
	}
}
