const Mission = function(id) {
	this.id = id;
	this.type = null;
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

	this.id = missionID;
	this.type = config;
	
	const { data } = config;
	const missionData = MISSION_DATA[data];

	if(missionData) {
		this.data = missionData;
	}
}
