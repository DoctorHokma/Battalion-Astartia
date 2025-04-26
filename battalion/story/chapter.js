const Chapter = function(id) {
	this.id = id;
	this.type = null;
	this.missions = [];
}

Chapter.prototype.getMission = function(missionIndex) {
	if(missionIndex < 0 || missionIndex >= this.missions.length) {
		return null;
	}

	return this.missions[missionIndex];
}

Chapter.prototype.load = function(chapterID) {
	const config = CHAPTERS[chapterID];

	if(!config) {
		return;
	}

	this.id = chapterID;
	this.type = config;

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