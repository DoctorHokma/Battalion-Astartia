const Chapter = function(id) {
	this.id = id;
	this.missions = [];
	this.currentMission = null;
}

Chapter.prototype.load = function(chapterID) {
	const config = CHAPTERS[chapterID];

	if(!config) {
		return;
	}

	const { missions } = config;

	if(missions) {
		for(let i = 0; i < missions.length; i++) {
			const missionID = missions[i];
			const mission = new Mission(missionID);

			mission.load(missionID);

			this.missions.push(mission);
		}
	}
}