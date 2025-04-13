const Battalion = function() {
    this.soundPlayer = new SoundPlayer(SOUND);
    this.musicPlayer = new MusicPlayer(MUSIC, PLAYLIST);
    this.client = new Client();
    this.language = new LanguageHandler();
    this.timer = new Timer();
    this.state = Battalion.GAME_STATE.NONE;

    this.timer.input = () => {
        this.client.update();
    }

    this.timer.update = () => {}

    this.timer.render = () => {}
}

Battalion.LANGUAGE = {
    ENGLISH: "ENGLISH",
    SPANISH: "SPANISH",
    PORTUGUESE: "PORTUGUESE",
    ROMANIAN: "ROMANIAN",
    TURKISH: "TURKISH",
    FRENCH: "FRENCH"
};

Battalion.GAME_STATE = {
    NONE: 0,
    MAP_EDITOR: 1,
    BATTLE: 2
};

Battalion.DIRECTION = {
    NONE: 0,
    NORTH: 1,
    WEST: 2,
    SOUTH: 3,
    EAST: 4
};

Battalion.DIRECTION_FLIP = {
    [Battalion.DIRECTION.NONE]: Battalion.DIRECTION.NONE,
    [Battalion.DIRECTION.NORTH]: Battalion.DIRECTION.SOUTH,
    [Battalion.DIRECTION.WEST]: Battalion.DIRECTION.EAST,
    [Battalion.DIRECTION.SOUTH]: Battalion.DIRECTION.NORTH,
    [Battalion.DIRECTION.EAST]: Battalion.DIRECTION.WEST
}

/**
 * neyn 11.04.2025
 * 
 * Creates, returns and downloads a list of all missing
 * language tags.
 * 
 * @returns {Map}
 */
Battalion.prototype.getMissingLanguageTags = function() {
	const file = new InefficientJSONExporter(4);
	const missing = this.language.getAllMissingTags(LANGUAGE_TEMPLATE);

	file.open();

	for(const [languageID, obj] of missing) {
		const { regular } = obj;
		
		file.openList(languageID, 1);

		for(const id of regular) {
			file.writeLine(id, 2, "");
		}

		file.closeList();
	}

	file.close();
	file.download("missing_tags");

    return missing;
}

Battalion.prototype.setState = function(stateID) {
    if(Battalion.GAME_STATE[stateID] === undefined) {
        return;
    }

    //Exit behavior
    switch(this.state) {
        default: {
            break;
        }
    }

    //Entry behavior
    switch(stateID) {
        case Battalion.GAME_STATE.BATTLE: {

            break;
        }
        default: {
            break;
        }
    }

    this.state = stateID;
}