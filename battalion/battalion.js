const Battalion = function() {
    this.soundPlayer = new SoundPlayer(SOUND);
    this.musicPlayer = new MusicPlayer(MUSIC, PLAYLIST);
    this.client = new Client();
    this.language = new LanguageHandler();
}

Battalion.LANGUAGE = {
    ENGLISH: 0,
    SPANISH: 1,
    PORTUGUESE: 2,
    ROMANIAN: 3,
    TURKISH: 4
};