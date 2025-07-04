const MainMenu = function() {
    this.image = document.createElement("img");
    this.element = document.getElementById("MAIN_MENU");
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

MainMenu.prototype.createButton = function(buttonID, textID) {
    const button = new MainMenuButton(buttonID, textID);

    button.init();

    this.buttons.push(button);

    return button;
}

MainMenu.prototype.init = function(battalion) {
    const { uiHandler } = battalion;
    const { codex } = uiHandler;

    this.createButton("BUTTON_CAMPAIGN", "SYSTEM_BUTTON_CAMPAIGN")
    .setTooltip("TOOLTIP_CAMPAIGN")
    .setClick(() => {
        this.hide();
        document.getElementById("CampaignSelectionScreen").style.visibility = "visible";
    });
    
    this.createButton("BUTTON_BOOT_CAMP", "SYSTEM_BUTTON_BOOT_CAMP")
    .setTooltip("TOOLTIP_BOOTCAMP")
    .setClick(() => {
        TutorialLevel = 0;
        this.hide();
        document.getElementById("Tutorial Levels").style.visibility = "visible";
    });

    this.createButton("BUTTON_CONTINUE", "SYSTEM_BUTTON_CONTINUE")
    .setTooltip("TOOLTIP_CONTINUE")
    .disable()
    .setClick(() => {
        //this.hide();
        alert("Work in progress!");
    })

    this.createButton("BUTTON_OPTIONS", "SYSTEM_BUTTON_OPTIONS")
    .setTooltip("TOOLTIP_OPTIONS")
    .setClick(() => {
        document.getElementById("Options").style.visibility = "visible";
    })

    this.createButton("BUTTON_CREDITS", "SYSTEM_BUTTON_CREDITS")
    .setTooltip("TOOLTIP_CREDITS")
    .setClick(() => {
        document.getElementById("Credits").style.visibility = "visible";
    });

    this.createButton("BUTTON_BONUS", "SYSTEM_BUTTON_BONUS_MAPS")
    .setTooltip("TOOLTIP_BONUS_LEVELS")
    .setClick(() => {
        this.hide();
        document.getElementById("Special Levels").style.visibility = "visible";
        NivelVizat = Samara;
    });

    this.createButton("BUTTON_EDITOR", "SYSTEM_BUTTON_EDITOR")
    .setTooltip("TOOLTIP_MAP_EDITOR")
    .setClick(() => {
        document.getElementById("MapMold").style.visibility = "visible";
    });

    this.createButton("BUTTON_CONQUEST", "SYSTEM_BUTTON_CONQUEST")
    .setTooltip("TOOLTIP_CONQUEST")
    .disable()
    .setClick(() => {
        //this.hide();
        alert("Work in progress!");
    });

    this.createButton("BUTTON_CODEX", "SYSTEM_BUTTON_LORE")
    .setTooltip("TOOLTIP_CODEX")
    .setClick(() => {
        this.hide();
        codex.show();
    });

    this.createButton("BUTTON_MUSIC", "SYSTEM_BUTTON_MUSIC")
    .disable()
    .setClick(() => {
        //this.hide();
        alert("Work in progress!");
    });
}