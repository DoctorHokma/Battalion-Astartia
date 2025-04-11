const Battalion = function() {
    this.soundPlayer = new SoundPlayer(SOUND);
    this.musicPlayer = new MusicPlayer(MUSIC, PLAYLIST);
    this.client = new Client();
    this.language = new LanguageHandler(LANGUAGE_TEMPLATE);
}

Battalion.LANGUAGE = {
    ENGLISH: "ENGLISH",
    SPANISH: "SPANISH",
    PORTUGUESE: "PORTUGUESE",
    ROMANIAN: "ROMANIAN",
    TURKISH: "TURKISH",
    FRENCH: "FRENCH"
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