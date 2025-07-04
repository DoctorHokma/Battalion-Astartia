const MainMenuButton = function(id, textID) {
    this.id = id;
    this.textID = textID;

    this.element = document.getElementById(id);
    this.state = MainMenuButton.STATE.ENABLED;

    this.image = document.createElement("img");
    this.image.src = "Assets/Miscellaneous/GenericButton.png";
    this.image.classList.add("main_menu_button_image");

    this.text = document.createElement("p");
    this.text.innerText = textID;
    this.text.classList.add("main_menu_button_text");

    this.element.classList.add("main_menu_button");
    this.element.appendChild(this.image);
    this.element.appendChild(this.text);
}

MainMenuButton.STATE = {
    ENABLED: 0,
    DISABLED: 1
};

MainMenuButton.prototype.setText = function(text) {
    this.text.innerText = text;

    return this;
}

MainMenuButton.prototype.hide = function() {
    this.element.style.visibility = "hidden";

    return this;
}

MainMenuButton.prototype.show = function() {
    this.element.style.visibility = "visible";

    return this;
}

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

MainMenuButton.prototype.setClick = function(onClick) {
    this.element.onclick = (event) => onClick();
    
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