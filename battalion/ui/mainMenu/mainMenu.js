const MainMenu = function() {
    GenericMenu.call(this, "MAIN_MENU");

    this.image = document.createElement("img");
    this.image.classList.add("main_menu_image");
    this.image.src = "Assets/MainMenuScreens/Coloured Tanks.jpg";
    this.element.appendChild(this.image);
}

MainMenu.prototype = Object.create(GenericMenu.prototype);
MainMenu.prototype.constructor = MainMenu;

MainMenu.prototype.onLanguageSwitch = function(handler) {
    for(let i = 0; i < this.buttons.length; i++) {
        const button = this.buttons[i];
        const text = handler.get(button.textID);

        button.setText(text);
    }
}

MainMenu.prototype.createButton = function(buttonID, textID) {
    const button = new MainMenuButton(buttonID, textID);

    button.init();

    this.buttons.push(button);

    return button;
}

MainMenu.prototype.init = function(battalion) {
    const { uiHandler } = battalion;
    const { codex, options, specialLevels } = uiHandler;

    this.createButton("BUTTON_CAMPAIGN", "SYSTEM_BUTTON_CAMPAIGN")
    .setTooltip("TOOLTIP_CAMPAIGN")
    .addClick(() => {
        this.hide();
        document.getElementById("CampaignSelectionScreen").style.visibility = "visible";
    });
    
    this.createButton("BUTTON_BOOT_CAMP", "SYSTEM_BUTTON_BOOT_CAMP")
    .setTooltip("TOOLTIP_BOOTCAMP")
    .addClick(() => {
        TutorialLevel = 0;
        this.hide();
        document.getElementById("Tutorial Levels").style.visibility = "visible";
    });

    this.createButton("BUTTON_CONTINUE", "SYSTEM_BUTTON_CONTINUE")
    .setTooltip("TOOLTIP_CONTINUE")
    .disable()
    .addClick(() => {
        //this.hide();
        alert("Work in progress!");
    })

    this.createButton("BUTTON_OPTIONS", "SYSTEM_BUTTON_OPTIONS")
    .setTooltip("TOOLTIP_OPTIONS")
    .addClick(() => {
        options.show();
    })

    this.createButton("BUTTON_CREDITS", "SYSTEM_BUTTON_CREDITS")
    .setTooltip("TOOLTIP_CREDITS")
    .addClick(() => {
        document.getElementById("Credits").style.visibility = "visible";
    });

    this.createButton("BUTTON_BONUS", "SYSTEM_BUTTON_BONUS_MAPS")
    .setTooltip("TOOLTIP_BONUS_LEVELS")
    .addClick(() => {
        this.hide();
        specialLevels.open();
    });

    this.createButton("BUTTON_EDITOR", "SYSTEM_BUTTON_EDITOR")
    .setTooltip("TOOLTIP_MAP_EDITOR")
    .addClick(() => {
        document.getElementById("MapMold").style.visibility = "visible";
    });

    this.createButton("BUTTON_CONQUEST", "SYSTEM_BUTTON_CONQUEST")
    .setTooltip("TOOLTIP_CONQUEST")
    .disable()
    .addClick(() => {
        //this.hide();
        alert("Work in progress!");
    });

    this.createButton("BUTTON_CODEX", "SYSTEM_BUTTON_LORE")
    .setTooltip("TOOLTIP_CODEX")
    .addClick(() => {
        this.hide();
        codex.show();
    });

    this.createButton("BUTTON_MUSIC", "SYSTEM_BUTTON_MUSIC")
    .disable()
    .addClick(() => {
        //this.hide();
        alert("Work in progress!");
    });
}