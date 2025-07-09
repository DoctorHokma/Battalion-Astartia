const MainMenuButton = function(id, textID) {
    GenericButton.call(this, id, null);

    this.textID = textID;
    this.state = MainMenuButton.STATE.ENABLED;
    this.setText(textID);
    this.setImage("Assets/Miscellaneous/GenericButton.png");
    this.addTextClass("main_menu_button_text");
    this.addImageClass("main_menu_button_image");
    this.addMainClass("main_menu_button");
}

MainMenuButton.STATE = {
    ENABLED: 0,
    DISABLED: 1
};

MainMenuButton.prototype = Object.create(GenericButton.prototype);
MainMenuButton.prototype.constructor = MainMenuButton;

MainMenuButton.prototype.disable = function() {
    this.state = MainMenuButton.STATE.DISABLED;
    this.image.src = "Assets/Miscellaneous/NonButton.png";

    return this;
}

MainMenuButton.prototype.enable = function() {
    this.state = MainMenuButton.STATE.ENABLED;
    this.image.src = "Assets/Miscellaneous/GenericButton.png";

    return this;
}

MainMenuButton.prototype.setTooltip = function(tooltipID) {
    this.element.onmouseout = () => {
		GeneralTooltip.hide();

        if(this.state === MainMenuButton.STATE.ENABLED) {
            this.image.src = "Assets/Miscellaneous/GenericButton.png"; 
        }
    }

    this.element.oncontextmenu = () => Tooltip(tooltipID);

    return this;
}

MainMenuButton.prototype.init = function() {
    this.element.onmouseover = () => {
        if(this.state === MainMenuButton.STATE.ENABLED) {
            this.image.src = "Assets/Miscellaneous/GenericButtonHovered.png";
        }
    }

    this.element.onmouseout = () => {
        if(this.state === MainMenuButton.STATE.ENABLED) {
            this.image.src = "Assets/Miscellaneous/GenericButton.png"; 
        }
    }

    this.element.onmousedown = () => {
        if(this.state === MainMenuButton.STATE.ENABLED) {
            this.image.src = "Assets/Miscellaneous/GenericButtonPressed.png";
        }
    }
}