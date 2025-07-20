const DefeatGroup = function() {
    ObjectiveGroup.call(this);
}

DefeatGroup.prototype = Object.create(ObjectiveGroup.prototype);
DefeatGroup.prototype.constructor = DefeatGroup;

DefeatGroup.prototype.getVictoryType = function() {
    let killed = 0;

    for(let i = 0; i < this.objectives.length; i++) {
        const objective = this.objectives[i];

        if(MapRoster[objective].life <= 0) {
            killed++;

            if(killed >= this.objectives.length) {
                return ObjectiveGroup.VICTORY_TYPE.VICTORY;
            }
        }
    }
}