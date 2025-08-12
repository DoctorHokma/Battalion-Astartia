const DefendGroup = function() {
    ObjectiveGroup.call(this);
}

DefendGroup.prototype = Object.create(ObjectiveGroup.prototype);
DefendGroup.prototype.constructor = DefendGroup;

DefendGroup.prototype.getVictoryType = function() {
    for(let i = 0; i < this.objectives.length; i++) {
        const objective = this.objectives[i];

        if(
            rostermap[objective.x][objective.y] != 0 &&
            Factions[rostermap[objective.x][objective.y].faction].faction != Factions[Constants.YourFaction].faction
        ) {
            return ObjectiveGroup.VICTORY_TYPE.FAILURE;
        }
    }

    return ObjectiveGroup.VICTORY_TYPE.NONE;
}