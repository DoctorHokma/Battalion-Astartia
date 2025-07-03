const MoraleButton = function(element, config) {
    this.element = element;
    this.config = config;
    this.state = MoraleButton.STATE.NOT_CLICKED;
}

MoraleButton.STATE = {
    NOT_CLICKED: 0,
    CLICKED: 1
};

MoraleButton.prototype.reset = function() {
    this.element.src = MORALE_SHIFT.NEUTRAL.icon;
    this.state = MoraleButton.STATE.NOT_CLICKED;
}

MoraleButton.prototype.onClick = function() {
    this.element.src = this.config.icon;
    this.state = MoraleButton.STATE.CLICKED;
}

MoraleButton.prototype.onMouseIn = function() {
    this.element.src = this.config.icon;
}

MoraleButton.prototype.onMouseOut = function() {
    if(this.state === MoraleButton.STATE.NOT_CLICKED) {
        this.reset();
    }
}

MoraleButton.prototype.getCostFactor = function() {
    return this.config.costFactor;
}

MoraleButton.prototype.getShift = function() {
    return this.config.shift;
}