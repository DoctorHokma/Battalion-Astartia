const SoundElement = function(path, volume) {
    this.currentID = 0;
    this.path = path;
    this.volume = volume ?? SoundElement.DEFAULT_VOLUME;
    this.instances = [];
}

SoundElement.DEFAULT_VOLUME = 0.5;

SoundElement.prototype.removeActiveInstance = function(instanceID) {
    for(let i = 0; i < this.instances.length; i++) {
        const { id, audio } = this.instances[i];

        if(instanceID === id) {
            audio.src = null;
            this.instances[i] = this.instances[this.instances.length - 1];
            this.instances.pop();
            break;
        }
    }
}

SoundElement.prototype.createInstance = function() {
    const audio = new Audio(this.path);
    const id = this.currentID++;

    audio.onended = () => this.removeActiveInstance(id);

    this.instances.push({
        "id": id,
        "audio": audio
    });

    return audio;
}

SoundElement.prototype.playSilent = function() {
    const instance = this.createInstance();

    instance.volume = 0;
    instance.play();
}

SoundElement.prototype.play = function(scale) {
    const instance = this.createInstance();

    instance.volume = clampValue(this.volume * scale, 0, 1);
    instance.play();
}

SoundElement.prototype.mute = function() {
    for(let i = 0; i < this.instances.length; i++) {
        this.instances[i].audio.volume = 0;
    }
}

SoundElement.prototype.unmute = function(scale) {
    for(let i = 0; i < this.instances.length; i++) {
        this.instances[i].audio.volume = clampValue(this.volume * scale, 0, 1);
    }
}