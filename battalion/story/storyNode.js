const StoryNode = function(id) {
    this.id = id;
    this.config = null;
    this.state = StoryNode.STATE.UNFINISHED;
    this.order = [];
}

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

StoryNode.prototype.getNextAvailableIndex = function(onCheck) {
	if(this.order.length === 0 || typeof onCheck !== "function") {
        console.warn(`No order for ${this.id}`);
		return -1;
	}

    for(let i = 0; i < this.order.length; i++) {
        const childID = this.order[i];
        const isCurrentFinished = onCheck(childID);

        if(!isCurrentFinished) {
            return i;
        }
    }

    return this.order.length - 1;
}

StoryNode.prototype.isComplete = function(onCheck) {
    if(typeof onCheck !== "function") {
        return false;
    }

    for(let i = 0; i < this.order.length; i++) {
        const isComplete = onCheck(this.order[i]);

        if(!isComplete) {
            return false;
        }
    }

    return true;
}

StoryNode.prototype.getAllAvailableChildren = function(onCheck) {
    const available = new Set();

    for(let i = 0; i < this.order.length; i++) {
        const childID = this.order[i];
        const isCurrentFinished = onCheck(childID);

        if(!isCurrentFinished) {
            available.add(childID);
            
            return available;
        }

        available.add(childID);
    }

    return available;
}

StoryNode.prototype.isChildAvailableAsNext = function(orderIndex, onCheck) {
	if(orderIndex < 0 || orderIndex >= this.order.length || typeof onCheck !== "function") {
		return false;
	}

    for(let i = 0; i < orderIndex; i++) {
        const childID = this.order[i];
        const isPreviousFinished = onCheck(childID);

        if(!isPreviousFinished) {
            return false;
        }
    }

    return true;
}

StoryNode.prototype.init = function(configID, config) {
    console.warn("onLoad is not implemented!");
}