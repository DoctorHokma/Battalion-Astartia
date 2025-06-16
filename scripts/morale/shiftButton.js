const ShiftButton = function(element, config) {
    this.element = element;
    this.config = config;
    this.state = ShiftButton.STATE.NOT_CLICKED;
}

ShiftButton.STATE = {
    NOT_CLICKED: 0,
    CLICKED: 1
};

ShiftButton.prototype.reset = function() {
    this.element.src = MORALE_SHIFT.NEUTRAL.icon;
    this.state = ShiftButton.STATE.NOT_CLICKED;
}

ShiftButton.prototype.onClick = function() {
    this.element.src = this.config.icon;
    this.state = ShiftButton.STATE.CLICKED;
}

ShiftButton.prototype.onMouseIn = function() {
    this.element.src = this.config.icon;
}

ShiftButton.prototype.onMouseOut = function() {
    if(this.state === ShiftButton.STATE.NOT_CLICKED) {
        this.reset();
    }
}

ShiftButton.prototype.getCostFactor = function() {
    return this.config.costFactor;
}

ShiftButton.prototype.getShift = function() {
    return this.config.shift;
}