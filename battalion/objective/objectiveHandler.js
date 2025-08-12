const ObjectiveHandler = function() {
    this.groups = [];
    this.groups[ObjectiveHandler.GROUP_TYPE.TIME_LIMIT] = new TimeLimitGroup();
    this.groups[ObjectiveHandler.GROUP_TYPE.SURVIVE] = new SurviveGroup();
    this.groups[ObjectiveHandler.GROUP_TYPE.FACTION_SURVIVE] = new FactionSurviveGroup();
    this.groups[ObjectiveHandler.GROUP_TYPE.CAPTURE] = new CaptureGroup();
    this.groups[ObjectiveHandler.GROUP_TYPE.DEFEND] = new DefendGroup();
    this.groups[ObjectiveHandler.GROUP_TYPE.DEFEAT] = new DefeatGroup();
    this.groups[ObjectiveHandler.GROUP_TYPE.PROTECT] = new ProtectGroup();
}

ObjectiveHandler.GROUP_TYPE = {
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
                //Stops looking if any objective failed.
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

ObjectiveHandler.prototype.getAllVictoryTypes = function() {
    const victories = [];

    for(let i = 0; i < this.groups.length; i++) {
        victories[i] = this.groups[i].getVictoryType();
    }

    return victories;
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

        this.groups[ObjectiveHandler.GROUP_TYPE.FACTION_SURVIVE].objectives = [faction];
    }

    if(TimeLimit) {
        this.groups[ObjectiveHandler.GROUP_TYPE.TIME_LIMIT].objectives = [TimeLimit];
    }

    if(Survival) {
        this.groups[ObjectiveHandler.GROUP_TYPE.SURVIVE].objectives = [Survival];
    }

    this.groups[ObjectiveHandler.GROUP_TYPE.CAPTURE].objectives = Capture;
    this.groups[ObjectiveHandler.GROUP_TYPE.DEFEND].objectives = Defend;
    this.groups[ObjectiveHandler.GROUP_TYPE.DEFEAT].objectives = Defeat;
    this.groups[ObjectiveHandler.GROUP_TYPE.PROTECT].objectives = Protect;
}