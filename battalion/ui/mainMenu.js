const MainMenu = function(elementID) {
    this.image = document.createElement('img');
    this.element = document.getElementById(elementID);
    this.buttons = new Map();

    this.image.classList.add("main_menu_image");
    this.image.src="Assets/MainMenuScreens/Coloured Tanks.jpg";
    this.element.appendChild(this.image);
}

MainMenu.prototype.hide = function() {
    this.element.style.visibility = "hidden";
}

MainMenu.prototype.show = function() {
    this.element.style.visibility = "visible";
}

MainMenu.prototype.updateLanguageTags = function(context) {
    this.buttons.forEach(button => button.updateText(context));
}

MainMenu.prototype.addClick = function(buttonID, onClick) {
    if(typeof onClick !== "function") {
        return;
    }

    const button = this.buttons.get(buttonID);
    
    button.setClick(onClick);
}

MainMenu.prototype.createButtons = function(buttonTypes) {
    for(const buttonID in buttonTypes) {
        const config = buttonTypes[buttonID];

        if(this.buttons.has(buttonID)) {
            continue;
        }

        const { tooltip, text, disabled } = config;
        const button = new MainMenuButton(buttonID, text);
        
        button.init(tooltip);

        if(disabled) {
            button.disable();
        }

        this.buttons.set(buttonID, button);
    }
}

MainMenu.prototype.init = function(battalion) {
    this.createButtons(UI.MAIN_MENU);

    this.addClick("BUTTON_CAMPAIGN", (button) => {
        this.hide();
        document.getElementById('CampaignSelectionScreen').style.visibility = 'visible';
    });

    this.addClick("BUTTON_CONTINUE", (button) => {
        //this.hide();
        alert("Work in progress!");
    });

    this.addClick("BUTTON_BOOT_CAMP", (button) => {
        TutorialLevel = 0;
        this.hide();
        document.getElementById('Tutorial Levels').style.visibility = 'visible';
    });

    this.addClick("BUTTON_CREDITS", (button) => {
        document.getElementById('Credits').style.visibility = 'visible';
    });

    this.addClick("BUTTON_OPTIONS", (button) => {
        document.getElementById('Options').style.visibility = 'visible';
    });

    this.addClick("BUTTON_BONUS", (button) => {
        this.hide();
        document.getElementById('Special Levels').style.visibility = 'visible';
        NivelVizat = Samara;
    });

    this.addClick("BUTTON_EDITOR", (button) => {
        document.getElementById('MapMold').style.visibility = 'visible';
    });

    this.addClick("BUTTON_CONQUEST", (button) => {
        //this.hide();
        alert("Work in progress!");
    });

    this.addClick("BUTTON_CODEX", (button) => {
        this.hide();
        document.getElementById('Codex').style.visibility = 'visible';
    });

    this.addClick("BUTTON_MUSIC", (button) => {
        //this.hide();
        alert("Work in progress!");
    });
}