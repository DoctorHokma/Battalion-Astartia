const Mission = function(id) {
	this.id = id;
	this.data = {};
	this.state = Mission.STATE.UNFINISHED;
}

Mission.STATE = {
	UNFINISHED: 0,
	FINISHED: 1
};

Mission.prototype.finish = function() {
	this.state = Mission.STATE.FINISHED;
}

Mission.prototype.load = function(missionID) {
	const config = MISSIONS[missionID];

	if(!config) {
		return;
	}

	const { data } = config;
	const missionData = MISSION_DATA[data];

	if(missionData) {
		this.data = missionData;
	}
}
