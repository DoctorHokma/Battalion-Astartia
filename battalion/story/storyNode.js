const StoryNode = function() {
    this.id = null;
    this.type = null;
    this.state = StoryNode.STATE.UNFINISHED;
    this.children = new Set();
    this.order = [];
}

StoryNode.STATE = {
	UNFINISHED: 0,
	FINISHED: 1
};

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
    const oldState = this.state;

    this.state = StoryNode.STATE.FINISHED;
    
    return oldState === StoryNode.STATE.UNFINISHED;
}

StoryNode.prototype.isFinished = function() {
    return this.state === StoryNode.STATE.FINISHED;
}

StoryNode.prototype.hasChild = function(childID) {
    return this.children.has(childID);
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

    for(const childID of this.children) {
        const isComplete = onCheck(childID);

        if(!isComplete) {
            return false;
        }
    }

    return true;
}

StoryNode.prototype.getAllAvailableAsNext = function(onCheck) {
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

StoryNode.prototype.isAvailableAsNext = function(orderIndex, onCheck) {
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