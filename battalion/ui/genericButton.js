const GenericButton = function(mainID) {
    this.id = mainID;
    this.element = document.getElementById(mainID);
    this.state = GenericButton.STATE.ENABLED;
}

GenericButton.STATE = {
    ENABLED: 0,
    DISABLED: 1,
    DISABLED_UNLICKABLE: 2
};

GenericButton.prototype.onDisable = function() {}

GenericButton.prototype.onEnable = function() {}

GenericButton.prototype.disable = function() {
    this.state = GenericButton.STATE.DISABLED;
    this.onDisable();
}

GenericButton.prototype.enable = function() {
    this.state = GenericButton.STATE.ENABLED;
    this.onEnable();
}

GenericButton.prototype.setClick = function(onClick) {
    this.element.onclick = () => {
        if(this.state !== GenericButton.STATE.DISABLED_UNLICKABLE) {
            onClick(this);
        }
    }
}