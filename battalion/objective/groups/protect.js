const ProtectGroup = function() {
    ObjectiveGroup.call(this);
}

ProtectGroup.prototype = Object.create(ObjectiveGroup.prototype);
ProtectGroup.prototype.constructor = ProtectGroup;

ProtectGroup.prototype.getVictoryType = function() {
    for(let i = 0; i < this.objectives.length; i++) {
        const objective = this.objectives[i];

        if(MapRoster[objective].life <= 0) {
            return ObjectiveGroup.VICTORY_TYPE.FAILURE;
        }
    }

    return ObjectiveGroup.VICTORY_TYPE.NONE;
}