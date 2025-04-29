const MainMenuButton = function(mainID, textID) {
    this.id = mainID;
    this.textID = textID;
    this.element = document.getElementById(mainID);
    this.state = MainMenuButton.STATE.ENABLED;

    this.image = document.createElement('img');
    this.image.style.position = "absolute";
    this.image.src = 'Assets/Miscellaneous/GenericButton.PNG';

    this.text = document.createElement('p');
    this.text.style.position = "relative";
    this.text.style.textAlign = "center";
    this.text.style.marginTop = "19%";
    this.text.style.color = "black";
    this.text.innerText = textID;

    this.element.appendChild(this.image);
    this.element.appendChild(this.text);
}

MainMenuButton.STATE = {
    ENABLED: 0,
    DISABLED: 1,
    DISABLED_UNLICKABLE: 2
};

MainMenuButton.prototype.disable = function() {
    this.state = MainMenuButton.STATE.DISABLED;
    this.image.src = 'Assets/Miscellaneous/NonButton.PNG';

    return this;
}

MainMenuButton.prototype.enable = function() {
    this.state = MainMenuButton.STATE.ENABLED;
    this.image.src = 'Assets/Miscellaneous/GenericButton.PNG';

    return this;
}

MainMenuButton.prototype.click = function(onClick) {
    this.element.onclick = () => {
        if(this.state !== MainMenuButton.STATE.DISABLED_UNLICKABLE) {
            onClick(this);
        }
    }

    return this;
}

MainMenuButton.prototype.init = function(tooltipID) {
    this.element.onmouseover = () => {
        if(this.state === MainMenuButton.STATE.ENABLED) {
            this.image.src = 'Assets/Miscellaneous/GenericButtonHovered.PNG';
        }
    }

    this.element.onmouseout = () => {
        if(tooltipID) {
            document.getElementById('GeneralTooltip').style.visibility = 'hidden';
        }

        if(this.state === MainMenuButton.STATE.ENABLED) {
            this.image.src = 'Assets/Miscellaneous/GenericButton.PNG'; 
        }
    }

    this.element.onmousedown = () => {
        if(this.state === MainMenuButton.STATE.ENABLED) {
            this.image.src = 'Assets/Miscellaneous/GenericButtonPressed.PNG';
        }
    }

    if(tooltipID) {
        this.element.oncontextmenu = () => Tooltip(tooltipID);
    }

    return this;
}