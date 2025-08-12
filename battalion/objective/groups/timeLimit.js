const TimeLimitGroup = function() {
    ObjectiveGroup.call(this);
}

TimeLimitGroup.prototype = Object.create(ObjectiveGroup.prototype);
TimeLimitGroup.prototype.constructor = TimeLimitGroup;

TimeLimitGroup.prototype.getVictoryType = function() {
    if(this.objectives.length !== 0) {
        const timeLimit = this.objectives[0];

        if(Turn >= timeLimit) {
            return ObjectiveGroup.VICTORY_TYPE.FAILURE;
        }
    }

    return ObjectiveGroup.VICTORY_TYPE.NONE;
}