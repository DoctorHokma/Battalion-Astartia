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
    this.state = StoryNode.STATE.FINISHED;
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

StoryNode.prototype.getNextAvailable = function(onCheck) {
	if(this.order.length === 0 || typeof onCheck !== "function") {
        console.warn(`No order for ${this.id}`);
		return null;
	}

    for(let i = 0; i < this.order.length; i++) {
        const childID = this.order[i];
        const isValid = onCheck(childID);

        if(isValid) {
            return childID;
        }
    }

    return null;
}

StoryNode.prototype.isAvailableAsNext = function(orderIndex, onCheck) {
	if(orderIndex < 0 || orderIndex >= this.order.length || typeof onCheck !== "function") {
		return false;
	}

    for(let i = 0; i < orderIndex; i++) {
        const childID = this.order[i];
        const isFinished = onCheck(childID);

        if(!isFinished) {
            return false;
        }
    }

    return true;
}

StoryNode.prototype.init = function(configID, config) {
    console.warn("onLoad is not implemented!");
}