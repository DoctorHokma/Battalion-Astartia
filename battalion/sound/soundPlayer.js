const SoundPlayer = function(soundList) {
    this.volumeScale = 1;
    this.soundList = soundList;
    this.loadedSounds = new Map();
    this.state = SoundPlayer.STATE.NONE;
    this.createSounds(soundList);
}

SoundPlayer.STATE = {
    NONE: 0,
    MUTED: 1
};

SoundPlayer.prototype.createSounds = function(soundList) {
    for(const soundID in soundList) {
        const meta = soundList[soundID];
        const { directory, source, volume } = meta;
        const path = resolvePath(directory, source);
        const sound = new SoundElement(path, volume);

        this.loadedSounds.set(soundID, sound);
    }
}

SoundPlayer.prototype.getSound = function(audioID) {
    const sound = this.loadedSounds.get(audioID);

    if(!sound) {
        return null;
    }

    return sound;
}

SoundPlayer.prototype.setVolumeScale = function(scale) {
    const clampedScale = clampValue(scale, 0, 2);

    this.volumeScale = clampedScale;
}

SoundPlayer.prototype.playSound = function(audioID) {
    const sound = this.getSound(audioID);

    if(!sound) {
        return;
    }

    switch(this.state) {
        case SoundPlayer.STATE.NONE: {
            sound.play(this.volumeScale);
            break;
        }
        case SoundPlayer.STATE.MUTED: {
            sound.playSilent();
            break;
        }
    }

    console.log(`Playing ${audioID}`);
}

SoundPlayer.prototype.toggleMute = function() {
    switch(this.state) {
        case SoundPlayer.STATE.NONE: {
            this.mute();
            break;
        }
        case SoundPlayer.STATE.MUTED: {
            this.unmute();
            break;
        }
    }

    return this.state;
}

SoundPlayer.prototype.unmute = function() {
    this.loadedSounds.forEach((sound) => sound.unmute(this.volumeScale));
    this.state = SoundPlayer.STATE.NONE;
}

SoundPlayer.prototype.mute = function() {
    this.loadedSounds.forEach((sound) => sound.mute());
    this.state = SoundPlayer.STATE.MUTED;
}