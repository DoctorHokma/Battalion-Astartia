const SoundPlayer = function(soundList) {
    this.volume = 1;
    this.soundList = soundList;
    this.activeSounds = [];
    this.state = SoundPlayer.STATE.NONE;
}

SoundPlayer.STATE = {
    NONE: 0,
    MUTED: 1
};

SoundPlayer.SOUND_ID = 0;

SoundPlayer.prototype.playSound = function(audioID) {
    const sound = this.loadAudio(audioID);

    if(!sound) {
        return;
    }

    switch(this.state) {
        case SoundPlayer.STATE.NONE: {
            this.activeSounds.push(sound);
            sound.play();
            break;
        }
        case SoundPlayer.STATE.MUTED: {
            this.activeSounds.push(sound);
            sound.playSilent();
            break;
        }
    }

    console.log(`Playing ${audioID}`);
}

SoundPlayer.prototype.removeActiveAudio = function(audioID) {
    for(let i = 0; i < this.activeSounds.length; i++) {
        const { id, audio } = this.activeSounds[i];

        if(audioID === id) {
            audio.src = null;
            this.activeSounds[i] = this.activeSounds[this.activeSounds.length - 1];
            this.activeSounds.pop();
            break;
        }
    }
}

SoundPlayer.prototype.loadAudio = function(audioID) {
    const meta = this.soundList[audioID];

    if(!meta) {
        console.warn(`Sound ${audioID} does not exist!`);
        return null;
    }

    const { directory, source, volume = this.volume } = meta;
    const path = resolvePath(directory, source);
    const audio = new Audio(path);
    const soundID = SoundPlayer.SOUND_ID++;
    const sound = new SoundElement(soundID, audio, volume, audioID);

    audio.onended = () => this.removeActiveAudio(soundID);

    return sound;
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
    for(let i = 0; i < this.activeSounds.length; i++) {
        const sound = this.activeSounds[i];

        sound.unmute();
    }

    this.state = SoundPlayer.STATE.NONE;
}

SoundPlayer.prototype.mute = function() {
    for(let i = 0; i < this.activeSounds.length; i++) {
        const sound = this.activeSounds[i];

        sound.mute();
    }

    this.state = SoundPlayer.STATE.MUTED;
}