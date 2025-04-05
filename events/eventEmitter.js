const EventEmitter = function() {
    this.listeners = new Map();
}

EventEmitter.SUPER_ID = "#";

EventEmitter.prototype.listen = function(eventType) {
    if(this.listeners.has(eventType)) {
        return;
    }
    
    const listener = new Listener(eventType);

    this.listeners.set(eventType, listener);
}

EventEmitter.prototype.deafen = function(eventType) {
    if(!this.listeners.has(eventType)) {
        return;
    }

    this.listeners.delete(eventType);
}

EventEmitter.prototype.deafenAll = function() {
    this.listeners.clear();
}

EventEmitter.prototype.getID = function(options) {
    if(!options) {
        return Listener.NEXT_ID++;
    }

    const { permanent, id } = options;

    if(permanent) {
        return EventEmitter.SUPER_ID;
    }

    if(id) {
        return id;
    }

    return Listener.NEXT_ID++;
}

EventEmitter.prototype.on = function(eventType, onCall, options) {
    const listener = this.listeners.get(eventType);

    if(!listener) {
        return null;
    }

    const observerType = options && options.once ? Listener.OBSERVER_TYPE.SINGLE : Listener.OBSERVER_TYPE.DEFAULT;
    const id = this.getID(options);

    listener.addObserver(observerType, id, onCall);

    return id;
}

EventEmitter.prototype.unsubscribe = function(eventType, subscriberID) {
    if(subscriberID === EventEmitter.SUPER_ID) {
        return;
    }

    const listener = this.listeners.get(eventType);

    if(!listener) {
        return;
    }

    listener.filterObservers((observer) => observer.subscriber !== subscriberID);
}

EventEmitter.prototype.unsubscribeAll = function(subscriberID) {
    if(subscriberID === EventEmitter.SUPER_ID) {
        return;
    }

    this.listeners.forEach((listener) => {
        listener.filterObservers((observer) => observer.subscriber !== subscriberID);
    });
}

EventEmitter.prototype.mute = function(eventType) {
    const listener = this.listeners.get(eventType);

    if(!listener) {
        return;
    }

    listener.filterObservers((observer) => observer.subscriber === EventEmitter.SUPER_ID);
}

EventEmitter.prototype.muteAll = function() {
    this.listeners.forEach((listener) => {
        listener.filterObservers((observer) => observer.subscriber === EventEmitter.SUPER_ID);
    });
}

EventEmitter.prototype.emit = function(eventType, ...args) {
    const listener = this.listeners.get(eventType);

    if(!listener) {
        return;
    }

    for(let i = 0; i < listener.observers.length; i++) {
        const observer = listener.observers[i];

        observer.onCall(...args);
    }

    for(let i = 0; i < listener.singleObservers.length; i++) {
        const observer = listener.singleObservers[i];

        observer.onCall(...args);
    }

    listener.singleObservers.length = 0;
}