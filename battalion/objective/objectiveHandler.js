const ObjectiveHandler = function() {
    this.groups = [];
    this.groups[ObjectiveHandler.TYPE.TIME_LIMIT] = new TimeLimitGroup();
    this.groups[ObjectiveHandler.TYPE.SURVIVE] = new SurviveGroup();
    this.groups[ObjectiveHandler.TYPE.FACTION_SURVIVE] = new FactionSurviveGroup();
    this.groups[ObjectiveHandler.TYPE.CAPTURE] = new CaptureGroup();
    this.groups[ObjectiveHandler.TYPE.DEFEND] = new DefendGroup();
    this.groups[ObjectiveHandler.TYPE.DEFEAT] = new DefeatGroup();
    this.groups[ObjectiveHandler.TYPE.PROTECT] = new ProtectGroup();
}

ObjectiveHandler.TYPE = {
    TIME_LIMIT: 0,
    SURVIVE: 1,
    FACTION_SURVIVE: 2,
    CAPTURE: 3,
    DEFEND: 4,
    DEFEAT: 5,
    PROTECT: 6
};

ObjectiveHandler.prototype.getVictoryType = function() {
    let victoryType = ObjectiveGroup.VICTORY_TYPE.NONE;

    for(let i = 0; i < this.groups.length; i++) {
        const groupType = this.groups[i].getVictoryType();

        switch(groupType) {
            case ObjectiveGroup.VICTORY_TYPE.FAILURE: {
                //Stops looking if an objective failed.
                return ObjectiveGroup.VICTORY_TYPE.FAILURE;
            }
            case ObjectiveGroup.VICTORY_TYPE.VICTORY: {
                victoryType = ObjectiveGroup.VICTORY_TYPE.VICTORY;
                break;
            }
        }
    }
    
    return victoryType;
}

ObjectiveHandler.prototype.getGroup = function(type) {
    if(type < 0 || type >= this.groups.length) {
        return null;
    } 

    return this.groups[type];
}

ObjectiveHandler.prototype.clear = function() {
    for(let i = 0; i < this.groups.length; i++) {
        this.groups[i].clear();
    }
}

ObjectiveHandler.prototype.load = function(constants) {
    const {
        Capture = [],
        Defend = [],
        Defeat = [],
        Protect = [],
        Survival,
        TimeLimit,
        YourFaction
    } = constants;

    if(YourFaction) {
        const faction = Factions[YourFaction].faction;

        this.groups[ObjectiveHandler.TYPE.FACTION_SURVIVE].objectives = [faction];
    }

    if(TimeLimit) {
        this.groups[ObjectiveHandler.TYPE.TIME_LIMIT].objectives = [TimeLimit];
    }

    if(Survival) {
        this.groups[ObjectiveHandler.TYPE.SURVIVE].objectives = [Survival];
    }

    this.groups[ObjectiveHandler.TYPE.CAPTURE].objectives = Capture;
    this.groups[ObjectiveHandler.TYPE.DEFEND].objectives = Defend;
    this.groups[ObjectiveHandler.TYPE.DEFEAT].objectives = Defeat;
    this.groups[ObjectiveHandler.TYPE.PROTECT].objectives = Protect;
}