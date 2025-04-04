const Battalion = function() {
    this.soundPlayer = new SoundPlayer(SOUND);
    this.musicPlayer = new MusicPlayer(MUSIC, PLAYLIST);
}