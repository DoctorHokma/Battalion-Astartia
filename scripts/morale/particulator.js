const Particulator = function(element, type) {
    this.element = element;
    this.type = type;
    this.state = Particulator.STATE.NOT_CLICKED;
}

Particulator.STATE = {
    NOT_CLICKED: 0,
    CLICKED: 1
};

Particulator.prototype.reset = function() {
    this.element.src = MORALE_SHIFT.NEUTRAL.icon;
    this.state = Particulator.STATE.NOT_CLICKED;
}

Particulator.prototype.onClick = function() {
    this.element.src = this.type.icon;
    this.state = Particulator.STATE.CLICKED;
}

Particulator.prototype.onMouseIn = function() {
    this.element.src = this.type.icon;
}

Particulator.prototype.onMouseOut = function() {
    if(this.state === Particulator.STATE.NOT_CLICKED) {
        this.reset();
    }
}