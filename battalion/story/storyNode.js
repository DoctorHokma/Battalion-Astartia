const StoryNode = function(id) {
    this.id = id;
    this.config = null;
    this.state = StoryNode.STATE.UNFINISHED;
    this.childType = StoryNode.TYPE.NONE;
    this.order = [];
}

StoryNode.TYPE = {
    NONE: 0,
    SCENARIO: 1,
	CAMPAIGN: 2,
	CHAPTER: 3,
	MISSION: 4
};

StoryNode.STATE = {
	UNFINISHED: 0,
	FINISHED: 1
};

StoryNode.prototype.setConfig = function(config) {
    this.config = config;
}

StoryNode.prototype.loadState = function(state) {
    switch(state) {
        case StoryNode.STATE.FINISHED: {
            this.state = StoryNode.STATE.FINISHED;
            break;
        }
        case StoryNode.STATE.UNFINISHED: {
            this.state = StoryNode.STATE.UNFINISHED;
            break;
        }
        default: {
            console.warn(`State ${state} is invalid for node ${this.id}!`);
            this.state = StoryNode.STATE.UNFINISHED;
            break;
        }
    }
}

StoryNode.prototype.finish = function() {
    if(this.state === StoryNode.STATE.FINISHED) {
        return false;
    }

    this.state = StoryNode.STATE.FINISHED;
    
    return true;
}

StoryNode.prototype.isFinished = function() {
    return this.state === StoryNode.STATE.FINISHED;
}

StoryNode.prototype.hasChild = function(childID) {
    for(let i = 0; i < this.order.length; i++) {
        if(childID === this.order[i]) {
            return true;
        }
    }

    return false;
}

StoryNode.prototype.getChildByIndex = function(childIndex) {
    if(childIndex < 0 || childIndex >= this.order.length) {
        return null;
    }

    return this.order[childIndex];
}

StoryNode.prototype.init = function(configID, config) {
    console.warn("onLoad is not implemented!");
}