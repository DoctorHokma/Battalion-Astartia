const MainMenu = function(elementID) {
    this.image = document.createElement("img");
    this.element = document.getElementById(elementID);
    this.buttons = [];

    this.image.classList.add("main_menu_image");
    this.image.src = "Assets/MainMenuScreens/Coloured Tanks.jpg";
    this.element.appendChild(this.image);
}

MainMenu.prototype.onLanguageSwitch = function(handler) {
    for(let i = 0; i < this.buttons.length; i++) {
        const button = this.buttons[i];
        const text = handler.get(button.textID);

        button.setText(text);
    }
}

MainMenu.prototype.hide = function() {
    this.element.style.visibility = "hidden";
}

MainMenu.prototype.show = function() {
    this.element.style.visibility = "visible";
}

MainMenu.prototype.createButton = function(buttonID, textID, tooltipID) {
    const button = new MainMenuButton(buttonID, textID);

    button.initEvents(tooltipID);

    this.buttons.push(button);

    return button;
}

MainMenu.prototype.init = function() {
    this.createButton("BUTTON_CAMPAIGN", "SYSTEM_BUTTON_CAMPAIGN", "TOOLTIP_CAMPAIGN")
    .setClick((button, event) => {
        this.hide();
        document.getElementById("CampaignSelectionScreen").style.visibility = "visible";
    });
    
    this.createButton("BUTTON_BOOT_CAMP", "SYSTEM_BUTTON_BOOT_CAMP", "TOOLTIP_BOOTCAMP")
    .setClick((button, event) => {
        TutorialLevel = 0;
        this.hide();
        document.getElementById("Tutorial Levels").style.visibility = "visible";
    });

    this.createButton("BUTTON_CONTINUE", "SYSTEM_BUTTON_CONTINUE", "TOOLTIP_CONTINUE")
    .disable()
    .setClick((button, event) => {
        //this.hide();
        alert("Work in progress!");
    })

    this.createButton("BUTTON_OPTIONS", "SYSTEM_BUTTON_OPTIONS", "TOOLTIP_OPTIONS")
    .setClick((button, event) => {
        document.getElementById("Options").style.visibility = "visible";
    })

    this.createButton("BUTTON_CREDITS", "SYSTEM_BUTTON_CREDITS", "TOOLTIP_CREDITS")
    .setClick((button, event) => {
        document.getElementById("Credits").style.visibility = "visible";
    });

    this.createButton("BUTTON_BONUS", "SYSTEM_BUTTON_BONUS_MAPS", "TOOLTIP_BONUS_LEVELS")
    .setClick((button, event) => {
        this.hide();
        document.getElementById("Special Levels").style.visibility = "visible";
        NivelVizat = Samara;
    });

    this.createButton("BUTTON_EDITOR", "SYSTEM_BUTTON_EDITOR", "TOOLTIP_MAP_EDITOR")
    .setClick((button, event) => {
        document.getElementById("MapMold").style.visibility = "visible";
    });

    this.createButton("BUTTON_CONQUEST", "SYSTEM_BUTTON_CONQUEST", "TOOLTIP_CONQUEST")
    .disable()
    .setClick((button, event) => {
        //this.hide();
        alert("Work in progress!");
    });

    this.createButton("BUTTON_CODEX", "SYSTEM_BUTTON_LORE", "TOOLTIP_CODEX")
    .setClick((button, event) => {
        this.hide();
        document.getElementById("Codex").style.visibility = "visible";
    });

    this.createButton("BUTTON_MUSIC", "SYSTEM_BUTTON_MUSIC", null)
    .disable()
    .setClick((button, event) => {
        //this.hide();
        alert("Work in progress!");
    });
}