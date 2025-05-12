const MainMenuButton = function(mainID, textID) {
    GenericButton.call(this, mainID);
    this.textID = textID;

    this.image = document.createElement('img');
    this.image.src = 'Assets/Miscellaneous/GenericButton.png';
    this.image.classList.add("main_menu_button_image");

    this.text = document.createElement('p');
    this.text.innerText = textID;
    this.text.classList.add("main_menu_button_text");

    this.element.appendChild(this.image);
    this.element.appendChild(this.text);
}

MainMenuButton.prototype = Object.create(GenericButton.prototype);
MainMenuButton.prototype.constructor = MainMenuButton;

MainMenuButton.prototype.updateText = function(context) {
    const { language } = context;

    this.text.innerText = language.get(this.textID);
}

MainMenuButton.prototype.onDisable = function() {
    this.image.src = 'Assets/Miscellaneous/NonButton.png';
}

MainMenuButton.prototype.onEnable = function() {
    this.image.src = 'Assets/Miscellaneous/GenericButton.png';
}

MainMenuButton.prototype.init = function(tooltipID) {
    this.element.onmouseover = () => {
        if(this.state === GenericButton.STATE.ENABLED) {
            this.image.src = 'Assets/Miscellaneous/GenericButtonHovered.png';
        }
    }

    this.element.onmouseout = () => {
        if(tooltipID) {
            document.getElementById('GeneralTooltip').style.visibility = 'hidden';
        }

        if(this.state === GenericButton.STATE.ENABLED) {
            this.image.src = 'Assets/Miscellaneous/GenericButton.png'; 
        }
    }

    this.element.onmousedown = () => {
        if(this.state === GenericButton.STATE.ENABLED) {
            this.image.src = 'Assets/Miscellaneous/GenericButtonPressed.png';
        }
    }

    if(tooltipID) {
        this.element.oncontextmenu = () => Tooltip(tooltipID);
    }

    return this;
}