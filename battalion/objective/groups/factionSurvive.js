const FactionSurviveGroup = function() {
    ObjectiveGroup.call(this);
}

FactionSurviveGroup.prototype = Object.create(ObjectiveGroup.prototype);
FactionSurviveGroup.prototype.constructor = FactionSurviveGroup;

FactionSurviveGroup.prototype.getVictoryType = function() {
	let Factiones = [];
	let AliveFactions = [];
	let YourFaction = Factions[Constants.YourFaction].faction;

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

	if(AliveFactions.length === 0) {
		//TODO: Implement - NO_FACTION_ALIVE - ending.
		return ObjectiveGroup.VICTORY_TYPE.FAILURE;
	} else if(AliveFactions.length === 1) {
		if(AliveFactions[0] == YourFaction) {
			return ObjectiveGroup.VICTORY_TYPE.VICTORY;
		} else {
			return ObjectiveGroup.VICTORY_TYPE.FAILURE;
		}
	}
}