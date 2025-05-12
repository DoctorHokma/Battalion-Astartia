const BattalionDB = function() {
    this.database = new ClientDatabase("BATTALION");
    this.database.addStore(BattalionDB.STORE.USER_MAPS);
    this.database.addStore(BattalionDB.STORE.DOWNLOAD_MAPS);
    this.database.addStore(BattalionDB.STORE.SETTINGS);
    this.database.addStore(BattalionDB.STORE.PROFILES);
    this.database.connect();
}

BattalionDB.STORE = {
    USER_MAPS: "UserMaps",
    DOWNLOAD_MAPS: "DownloadMaps",
    SETTINGS: "Settings",
    PROFILES: "Profiles"
};

BattalionDB.prototype.removeAllProfiles = function() {
    this.database.clearStore(BattalionDB.STORE.PROFILES);
}

BattalionDB.prototype.saveProfile = function(profileID, storyData) {
    this.database.writeIfExists(BattalionDB.STORE.PROFILES, profileID, {
        "id": profileID,
        "story": storyData
    });
}

BattalionDB.prototype.resetProfile = function(profileID) {
    this.database.writeIfExists(BattalionDB.STORE.PROFILES, profileID, {
        "id": profileID,
        "story": {}
    });
}

BattalionDB.prototype.createProfile = function(profileID) {
    this.database.add(BattalionDB.STORE.PROFILES, profileID, {
        "id": profileID,
        "story": {}
    });
}

BattalionDB.prototype.getProfile = function(onRead, profileID) {
    if(typeof onRead !== "function") {
        return;
    }

    if(profileID === undefined) {
        this.database.read(BattalionDB.STORE.PROFILES).then(data => onRead(data));
    } else {
        this.database.read(BattalionDB.STORE.PROFILES, profileID).then(data => onRead(data));
    }
}