const MainMenu = function(elementID) {
    this.image = document.createElement("img");
    this.element = document.getElementById(elementID);
    this.buttons = new Map();

    this.image.classList.add("main_menu_image");
    this.image.src = "Assets/MainMenuScreens/Coloured Tanks.jpg";
    this.element.appendChild(this.image);
}

MainMenu.prototype.onLanguageSwitch = function(handler) {
    this.buttons.forEach((button) => {
        const text = handler.get(button.textID);

        button.setText(text);
    });
}

MainMenu.prototype.hide = function() {
    this.element.style.visibility = "hidden";
}

MainMenu.prototype.show = function() {
    this.element.style.visibility = "visible";
}

MainMenu.prototype.addClick = function(buttonID, onClick) {
    if(typeof onClick !== "function") {
        return;
    }

    const button = this.buttons.get(buttonID);
    
    if(button) {
        button.setClick(onClick);
    }
}

MainMenu.prototype.createButtons = function(buttonTypes) {
    for(const buttonID in buttonTypes) {
        const config = buttonTypes[buttonID];

        if(this.buttons.has(buttonID)) {
            continue;
        }

        const { tooltip, text, disabled } = config;
        const button = new MainMenuButton(buttonID, text);
        
        button.initEvents(tooltip);
    
        if(disabled) {
            button.disable();
        }

        this.buttons.set(buttonID, button);
    }
}

MainMenu.prototype.init = function() {
    this.createButtons(UI.MAIN_MENU);

    this.addClick("BUTTON_CAMPAIGN", (button, event) => {
        this.hide();
        document.getElementById("CampaignSelectionScreen").style.visibility = "visible";
    });

    this.addClick("BUTTON_CONTINUE", (button, event) => {
        //this.hide();
        alert("Work in progress!");
    });

    this.addClick("BUTTON_BOOT_CAMP", (button, event) => {
        TutorialLevel = 0;
        this.hide();
        document.getElementById("Tutorial Levels").style.visibility = "visible";
    });

    this.addClick("BUTTON_CREDITS", (button, event) => {
        document.getElementById("Credits").style.visibility = "visible";
    });

    this.addClick("BUTTON_OPTIONS", (button, event) => {
        document.getElementById("Options").style.visibility = "visible";
    });

    this.addClick("BUTTON_BONUS", (button, event) => {
        this.hide();
        document.getElementById("Special Levels").style.visibility = "visible";
        NivelVizat = Samara;
    });

    this.addClick("BUTTON_EDITOR", (button, event) => {
        document.getElementById("MapMold").style.visibility = "visible";
    });

    this.addClick("BUTTON_CONQUEST", (button, event) => {
        //this.hide();
        alert("Work in progress!");
    });

    this.addClick("BUTTON_CODEX", (button, event) => {
        this.hide();
        document.getElementById("Codex").style.visibility = "visible";
    });

    this.addClick("BUTTON_MUSIC", (button, event) => {
        //this.hide();
        alert("Work in progress!");
    });
}