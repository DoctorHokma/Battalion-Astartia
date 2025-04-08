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
    WEST: 1,
    SOUTH: 2,
    EAST: 3,
    NORTH: 4
}