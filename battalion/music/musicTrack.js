const MusicTrack = function(audio, volume, isLooping) {
    this.audio = audio;
    this.volume = volume ?? MusicTrack.DEFAULT_VOLUME;
    this.isLooping = isLooping ?? false;
    this.state = MusicTrack.STATE.PAUSED;
}

MusicTrack.DEFAULT_VOLUME = 0.5;

MusicTrack.STATE = {
    PAUSED: 0,
    PLAYING: 1
};

MusicTrack.prototype.playSilent = function() {
    if(this.state === MusicTrack.STATE.PLAYING) {
        return;
    }

    this.state = MusicTrack.STATE.PLAYING;
    this.audio.volume = 0;
    this.audio.play();
}

MusicTrack.prototype.play = function(scale) {
    if(this.state === MusicTrack.STATE.PLAYING) {
        return;
    }

    this.state = MusicTrack.STATE.PLAYING;
    this.setAudioVolume(scale);
    this.audio.play();
}

MusicTrack.prototype.pause = function() {
    if(this.state === MusicTrack.STATE.PAUSED) {
        return;
    }

    this.state = MusicTrack.STATE.PAUSED;
    this.audio.pause();
}

MusicTrack.prototype.reset = function() {
    this.state = MusicTrack.STATE.PAUSED;
    this.audio.currentTime = 0;
    this.audio.pause();
}

MusicTrack.prototype.mute = function() {
    if(this.state !== MusicTrack.STATE.PLAYING) {
        return;
    }

    this.audio.volume = 0;
}

MusicTrack.prototype.unmute = function(scale) {
    if(this.state !== MusicTrack.STATE.PLAYING) {
        return;
    }

    this.setAudioVolume(scale);
}

MusicTrack.prototype.setAudioVolume = function(scale) {
    const volume = clampValue(this.volume * scale, 0, 1);

    this.audio.volume = volume;
}