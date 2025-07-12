const OptionsButton = function(id) {
    GenericButton.call(this, id, null);

    this.activeSrc = null;
    this.inactiveSrc = null;
    this.state = OptionsButton.STATE.ACTIVE;
    this.innerImage = document.createElement("img");
    this.innerImage.classList.add("options_button_image_inner");
    this.element.appendChild(this.innerImage);
    this.setImage("Assets/Miscellaneous/SmallButton.png");
    this.addMainClass("options_button");
    this.init();
}

OptionsButton.STATE = {
    ACTIVE: 0,
    INACTIVE: 1
};

OptionsButton.prototype = Object.create(GenericButton.prototype);
OptionsButton.prototype.constructor = OptionsButton;

OptionsButton.prototype.setSources = function(active, inactive) {
    this.activeSrc = active;
    this.inactiveSrc = inactive;
    this.updateInnerImage();

    return this;
}

OptionsButton.prototype.updateInnerImage = function() {
    switch(this.state) {
        case OptionsButton.STATE.ACTIVE: {
            this.innerImage.src = this.activeSrc;
            break;
        }
        case OptionsButton.STATE.INACTIVE: {
            this.innerImage.src = this.inactiveSrc;
            break;
        }
    }
}

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
    this.addClick(() => {
        this.element.style.filter = "brightness(75%)";
    });

    this.element.onmouseover = () => {
        this.element.style.filter = "brightness(125%)";
    }

    this.element.onmouseout = () => {
        this.element.style.filter = "brightness(100%)";
    }
}

OptionsButton.prototype.enable = function() {
    this.state = OptionsButton.STATE.ACTIVE;
    this.updateInnerImage();

    return this;
}

OptionsButton.prototype.disable = function() {
    this.state = OptionsButton.STATE.INACTIVE;
    this.updateInnerImage();

    return this;
}