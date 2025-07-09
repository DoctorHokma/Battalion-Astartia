const OptionsButton = function(id) {
    GenericButton.call(this, id, null);

    this.addClick(() => this.element.style.filter = "brightness(75%)");
}

OptionsButton.prototype = Object.create(GenericButton.prototype);
OptionsButton.prototype.constructor = OptionsButton;

OptionsButton.prototype.setTooltip = function(tooltipID) {
    this.element.oncontextmenu = () => {
        Tooltip(tooltipID);
    }

    this.element.onmouseout = () => {
		GeneralTooltip.hide();
        this.element.style.filter = "brightness(100%)";
    }

    return this;
}

OptionsButton.prototype.init = function() {
    this.element.onmouseover = () => {
        this.element.style.filter = "brightness(125%)";
    }

    this.element.onmouseout = () => {
        this.element.style.filter = "brightness(100%)";
    }
}