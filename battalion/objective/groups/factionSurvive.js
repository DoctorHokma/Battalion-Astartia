const FactionSurviveGroup = function() {
    ObjectiveGroup.call(this);
}

FactionSurviveGroup.prototype = Object.create(ObjectiveGroup.prototype);
FactionSurviveGroup.prototype.constructor = FactionSurviveGroup;

FactionSurviveGroup.getAliveFactions = function() {
	let Factiones = [];
	let AliveFactions = [];

    for(let i = 0; i < MapRoster.length; i++) {
		const entityFaction = Factions[MapRoster[i].faction].faction;
		let FactionNotIncluded = true;
	
		for(let j = 0; j < Factiones.length; j++) {
			if(Factiones[j] == entityFaction) {
				FactionNotIncluded = false;
				break;
			}
		}

		if(FactionNotIncluded) {
			Factiones[Factiones.length] = entityFaction;
		}
	}

	for(let i = 0; i < Factiones.length; i++) {
		let FactionIsStillAlive = false;

		for(let j = 0; j < MapRoster.length; j++) {
			if(
				Factions[MapRoster[j].faction].faction == Factiones[i] &&
				MapRoster[j].life > 0 &&
				!hasCertainTrait(MapRoster[j].unitType, "Inertial")
			) {
				FactionIsStillAlive = true;
				break;
			}
		}

		if(FactionIsStillAlive) {
			AliveFactions[AliveFactions.length] = Factiones[i];
		}
	}

	return AliveFactions;
}

FactionSurviveGroup.prototype.getVictoryType = function() {
	const aliveFactions = FactionSurviveGroup.getAliveFactions();

	if(aliveFactions.length < this.objectives.length) {
		return ObjectiveGroup.VICTORY_TYPE.FAILURE;
	}

	for(let i = 0; i < this.objectives.length; i++) {
		const objective = this.objectives[i];
		let isAlive = false;

		for(let j = 0; j < aliveFactions.length; j++) {
			const faction = aliveFactions[i];

			if(faction === objective) {
				isAlive = true;
				break;
			}
		}

		if(!isAlive) {
			return ObjectiveGroup.VICTORY_TYPE.FAILURE;
		}
	}

	return ObjectiveGroup.VICTORY_TYPE.NONE;
}