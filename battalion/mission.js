const Mission = function() {
    this.map = [];
    this.roster = [];
    this.constants = [];
    this.localization = [];
    this.state = Mission.STATE.UNFINISHED;
}

Mission.STATE = {
    UNFINISHED: 0,
    FINISHED: 1
};

Mission.prototype.wipe = function() {
    this.map = [];
    this.roster = [];
    this.constants = [];
    this.localization = [];
    this.state = Mission.STATE.UNFINISHED;
}

Mission.prototype.init = function(config) {
    const { Map, Roster, Constants, Finished, Localization } = config;

    if(Map) {
        this.map = Map;
    }

    if(Roster) {
        this.roster = Roster;
    }

    if(Constants) {
        this.constants = Constants;
    }

    if(Finished) {
        this.state = Mission.STATE.FINISHED;
    }

    if(Localization) {
        this.localization = Localization;
    }
}