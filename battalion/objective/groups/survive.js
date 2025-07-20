const SurviveGroup = function() {
    ObjectiveGroup.call(this);
}

SurviveGroup.prototype = Object.create(ObjectiveGroup.prototype);
SurviveGroup.prototype.constructor = SurviveGroup;

SurviveGroup.prototype.getVictoryType = function() {
    if(this.objectives.length !== 0) {
        const turnsToSurvive = this.objectives[0];

        if(Turn >= turnsToSurvive) {
            return ObjectiveGroup.VICTORY_TYPE.VICTORY;
        }
    }
}