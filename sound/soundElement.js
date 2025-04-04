const SoundElement = function(id, audio, volume, type) {
    this.id = id;
    this.audio = audio;
    this.volume = volume;
    this.type = type;
}

SoundElement.prototype.playSilent = function() {
    this.audio.volume = 0;
    this.audio.play();
}

SoundElement.prototype.play = function() {
    this.audio.volume = this.volume;
    this.audio.play();
}

SoundElement.prototype.mute = function() {
    this.audio.volume = 0;
}

SoundElement.prototype.unmute = function() {
    this.audio.volume = this.volume;
}