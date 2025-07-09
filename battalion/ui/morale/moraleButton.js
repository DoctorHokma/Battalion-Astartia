const MoraleButton = function(id, config) {
    GenericButton.call(this, id, config);

    this.state = MoraleButton.STATE.NOT_CLICKED;
}

MoraleButton.STATE = {
    NOT_CLICKED: 0,
    CLICKED: 1
};

MoraleButton.prototype = Object.create(GenericButton.prototype);
MoraleButton.prototype.constructor = MoraleButton;

MoraleButton.prototype.highlight = function() {
    this.element.src = this.config.icon;
    this.state = MoraleButton.STATE.CLICKED;
}

MoraleButton.prototype.reset = function() {
    this.element.src = MORALE_SHIFT.NEUTRAL.icon;
    this.state = MoraleButton.STATE.NOT_CLICKED;
}

MoraleButton.prototype.init = function() {
    this.element.src = MORALE_SHIFT.NEUTRAL.icon;

    this.element.onmouseout = () => {
        if(this.state === MoraleButton.STATE.NOT_CLICKED) {
            this.reset();
        }
    }

    this.element.onmouseover = () => {
        this.element.src = this.config.icon;
    }
}