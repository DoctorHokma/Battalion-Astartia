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

    this.element.appendChild(this.image);
    this.element.appendChild(this.text);

    this.element.classList.add("main_menu_button");
}

MainMenuButton.STATE = {
    ENABLED: 0,
    DISABLED: 1
};

MainMenuButton.prototype.updateText = function(languageHandler) {
    this.text.innerText = languageHandler.get(this.textID);
}

MainMenuButton.prototype.disable = function() {
    this.state = MainMenuButton.STATE.DISABLED;
    this.image.src = "Assets/Miscellaneous/NonButton.png";
}

MainMenuButton.prototype.enable = function() {
    this.state = MainMenuButton.STATE.ENABLED;
    this.image.src = "Assets/Miscellaneous/GenericButton.png";
}

MainMenuButton.prototype.setClick = function(onClick) {
    this.element.onclick = () => onClick(this);
}

MainMenuButton.prototype.init = function(tooltipID) {
    this.element.onmouseover = () => {
        if(this.state === MainMenuButton.STATE.ENABLED) {
            this.image.src = "Assets/Miscellaneous/GenericButtonHovered.png";
        }
    }

    this.element.onmouseout = () => {
        if(tooltipID) {
            document.getElementById("GeneralTooltip").style.visibility = "hidden";
        }

        if(this.state === MainMenuButton.STATE.ENABLED) {
            this.image.src = "Assets/Miscellaneous/GenericButton.png"; 
        }
    }

    this.element.onmousedown = () => {
        if(this.state === MainMenuButton.STATE.ENABLED) {
            this.image.src = "Assets/Miscellaneous/GenericButtonPressed.png";
        }
    }

    if(tooltipID) {
        this.element.oncontextmenu = () => Tooltip(tooltipID);
    }
}