const ClientDatabase = function(id) {
    this.id = id;
    this.state = ClientDatabase.STATE.CLOSED;
    this.version = 1;
    this.connection = null;
    this.stores = new Set();

    this.events = new EventEmitter();
    this.events.listen(ClientDatabase.EVENT.CONNECT);
    this.events.listen(ClientDatabase.EVENT.DISCONNECT);

    this.ready = new Promise(resolve => this.events.on(ClientDatabase.EVENT.CONNECT, resolve, { once: true }));
}

ClientDatabase.EVENT = {
    CONNECT: "CONNECT",
    DISCONNECT: "DISCONNECT"
};

ClientDatabase.TRANSACTION = {
    READONLY: "readonly",
    READWRITE: "readwrite"
};

ClientDatabase.STATE = {
    CLOSED: 0,
    OPENING: 1,
    OPEN: 2
};

ClientDatabase.prototype.resetReady = function() {
    this.ready = new Promise(resolve => this.events.on(ClientDatabase.EVENT.CONNECT, resolve, { once: true }));
}

ClientDatabase.prototype.cycle = function() {
    this.disconnect();
    this.drop();
    this.connect();
}

ClientDatabase.prototype.addStore = function(storeID) {
    if(!this.stores.has(storeID)) {
        this.stores.add(storeID);
    }
}

ClientDatabase.prototype.getStore = async function(storeID, transactionType) {
    await this.ready;

    if(!this.connection || !this.stores.has(storeID)) {
        return null;
    }

    const transaction = this.connection.transaction(storeID, transactionType);
    const store = transaction.objectStore(storeID);

    return store;
}

ClientDatabase.prototype.clearStore = async function(storeID) {
    const store = await this.getStore(storeID, ClientDatabase.TRANSACTION.READWRITE);

    if(!store) {
        return;
    }

    const request = store.clear();

    request.onsuccess = (event) => {
        console.log(event);
    }

    request.onerror = (event) => {
        console.error(event);
    }
}

ClientDatabase.prototype.delete = async function(storeID, nodeID) {
    const store = await this.getStore(storeID, ClientDatabase.TRANSACTION.READWRITE);

    if(!store) {
        return;
    }

    const request = store.delete(nodeID);

    request.onsuccess = (event) => {
        console.log(event);
    }

    request.onerror = (event) => {
        console.error(event);
    }
}

ClientDatabase.prototype.writeIfExists = async function(storeID, nodeID, data) {
    const store = await this.getStore(storeID, ClientDatabase.TRANSACTION.READONLY);

    if(!store) {
        return;
    }

    const request = store.get(nodeID);

    request.onsuccess = (event) => {
        if(request.result !== undefined) {
            this.write(storeID, nodeID, data);
        }
    }

    request.onerror = (event) => {
        console.error(event);
    }
}

ClientDatabase.prototype.read = async function(storeID, nodeID) {
    return new Promise((resolve, reject) => {
        this.getStore(storeID, ClientDatabase.TRANSACTION.READONLY).then(store => {
            if(!store) {
                return reject("NOT_CONNECTED");
            }

            if(nodeID !== undefined) {
                const request = store.get(nodeID);

                request.onsuccess = () => resolve(request.result);
                request.onerror = (event) => reject(event);
            } else {
                const request = store.getAll();

                request.onsuccess = () => resolve(request.result);
                request.onerror = (event) => reject(event);
            }
        });
    })
}

ClientDatabase.prototype.add = async function(storeID, nodeID, data) {
    const store = await this.getStore(storeID, ClientDatabase.TRANSACTION.READWRITE);

    if(!store) {
        return;
    }

    const request = store.add(data, nodeID);

    request.onsuccess = (event) => {
        console.log(event);
    }

    request.onerror = (event) => {
        console.error(event);
    }
}

ClientDatabase.prototype.write = async function(storeID, nodeID, data) {
    const store = await this.getStore(storeID, ClientDatabase.TRANSACTION.READWRITE);

    if(!store) {
        return;
    }

    const request = store.put(data, nodeID);

    request.onsuccess = (event) => {
        console.log(event);
    }

    request.onerror = (event) => {
        console.error(event);
    }
}

ClientDatabase.prototype.connect = function() {
    if(this.state !== ClientDatabase.STATE.CLOSED) {
        return;
    }

    this.state = ClientDatabase.STATE.OPENING;

    const request = window.indexedDB.open(this.id, this.version);

    request.onerror = (event) => {
        this.state = ClientDatabase.STATE.CLOSED;
        console.error(event);
    }

    request.onsuccess = (event) => {
        this.state = ClientDatabase.STATE.OPEN;
        this.connection = request.result;
        this.events.emit(ClientDatabase.EVENT.CONNECT);
        console.log(event);
    }

    request.onupgradeneeded = (event) => this.onVersionUpdate(event);
}

ClientDatabase.prototype.disconnect = function() {
    if(this.state !== ClientDatabase.STATE.OPEN) {
        return;
    }

    if(!this.connection) {
        return;
    }

    this.connection.close();
    this.connection = null;
    this.state = ClientDatabase.STATE.CLOSED;
    this.resetReady();
    this.events.emit(ClientDatabase.EVENT.DISCONNECT);
}

ClientDatabase.prototype.drop = function() {
    if(this.state !== ClientDatabase.STATE.CLOSED) {
        return;
    }

    const request = window.indexedDB.deleteDatabase(this.id);

    request.onerror = (event) => {
        console.log(event);
    }

    request.onsuccess = (event) => {
        this.state = ClientDatabase.STATE.CLOSED;
        console.log(event);
    }
}

ClientDatabase.prototype.reset = function(db) {
    Array.from(db.objectStoreNames).forEach(name => db.deleteObjectStore(name));
}

ClientDatabase.prototype.onVersionUpdate = function(event) {
    const db = event.target.result;

    this.reset(db);

    console.log("NEW SCHEMA!");

    for(const storeID of this.stores) {
        if(!db.objectStoreNames.contains(storeID)) {
            db.createObjectStore(storeID);
        }
    }

    console.log(db);
}