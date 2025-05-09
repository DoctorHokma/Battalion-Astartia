const ShiftButton = function(element, type) {
    this.element = element;
    this.type = type;
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
    this.element.src = this.type.icon;
    this.state = ShiftButton.STATE.CLICKED;
}

ShiftButton.prototype.onMouseIn = function() {
    this.element.src = this.type.icon;
}

ShiftButton.prototype.onMouseOut = function() {
    if(this.state === ShiftButton.STATE.NOT_CLICKED) {
        this.reset();
    }
}