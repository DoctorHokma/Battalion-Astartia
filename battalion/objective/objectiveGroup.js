const ObjectiveGroup = function() {
    this.objectives = [];
}

ObjectiveGroup.VICTORY_TYPE = {
    NONE: 0,
    FAILURE: 1,
    VICTORY: 2
};

ObjectiveGroup.prototype.getVictoryType = function() {
    return ObjectiveGroup.VICTORY_TYPE.NONE;
}

ObjectiveGroup.prototype.clear = function() {
    this.objectives = [];
}

ObjectiveGroup.prototype.hasObjectives = function() {
    return this.objectives.length !== 0;
}