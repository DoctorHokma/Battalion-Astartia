const CaptureGroup = function() {
    ObjectiveGroup.call(this);
}

CaptureGroup.prototype = Object.create(ObjectiveGroup.prototype);
CaptureGroup.prototype.constructor = CaptureGroup;

CaptureGroup.prototype.getVictoryType = function() {
    for(let i = 0; i < this.objectives.length; i++) {
        const objective = this.objectives[i];

        if(
            rostermap[objective.x][objective.y] != 0 &&
            Factions[rostermap[objective.x][objective.y].faction].faction == Factions[Constants.YourFaction].faction
        ) {
			//BUG: If only one of many is captured it still counts as a win:
			//TOFIX: Reverse conditions => If one is NOT captured break out.
            return ObjectiveGroup.VICTORY_TYPE.VICTORY;
        }
    }
}