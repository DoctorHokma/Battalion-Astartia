const TutorialMenu = function() {
    GenericMenu.call(this, "Tutorial Levels");

    this.defaultLevelName = "";
    this.defaultLevelDescription = "";
    this.selectedLevel = null;
}

TutorialMenu.prototype = Object.create(GenericMenu.prototype);
TutorialMenu.prototype.constructor = TutorialMenu;

TutorialMenu.prototype.onLanguageSwitch = function(handler) {
    for(let i = 0; i < this.buttons.length; i++) {
        const button = this.buttons[i];
        const text = handler.get(button.config.info);

        button.setText(text);
    }

    this.updateDefaultText(handler);
}

TutorialMenu.prototype.setText = function(name, desc) {
    document.getElementById("Tutorial Level Name").innerText = name;
    document.getElementById("Tutorial Level Description").innerText = desc;
}

TutorialMenu.prototype.updateDefaultText = function(handler) {
    this.defaultLevelName = handler.get("SYSTEM_TUTORIAL_NAME");
    this.defaultLevelDescription = handler.get("SYSTEM_TUTORIAL_DESC");
    this.setText(this.defaultLevelName, this.defaultLevelDescription);
}

TutorialMenu.prototype.open = function() {
    this.show();
    this.selectedLevel = null;
}

TutorialMenu.prototype.close = function() {
    this.setText(this.defaultLevelName, this.defaultLevelDescription);
    this.hideImage();
    this.hide();
    this.selectedLevel = null;
}

TutorialMenu.prototype.createButton = function(buttonID, config) {
    const button = new TutorialButton(buttonID, config);

    this.buttons.push(button);

    return button;
}

TutorialMenu.prototype.showImage = function() {
    document.getElementById("Tutorial").style.visibility = "visible";
}

TutorialMenu.prototype.hideImage = function() {
    document.getElementById("Tutorial").style.visibility = "hidden";
}

TutorialMenu.prototype.setImage = function(source) {
    document.getElementById("Tutorial").src = source;
}

TutorialMenu.prototype.clickButton = function(battalion, button) {
    const { language } = battalion;
    const { config } = button;
    const { name, desc, level, image } = config;

    this.setText(language.get(name), language.get(desc));
    this.setImage(image);
    this.showImage();
    this.selectedLevel = level;
}

TutorialMenu.prototype.init = function(battalion) {
	const { uiHandler } = battalion;
    const { mainMenu } = uiHandler;

    this.createButton("Tutorial1", TUTORIAL_LEVELS.TUTORIAL_1);
    this.createButton("Tutorial2", TUTORIAL_LEVELS.TUTORIAL_2);
    this.createButton("Tutorial3", TUTORIAL_LEVELS.TUTORIAL_3);
    this.createButton("Tutorial4", TUTORIAL_LEVELS.TUTORIAL_4);
    this.createButton("Tutorial5", TUTORIAL_LEVELS.TUTORIAL_5);
    this.createButton("Tutorial6", TUTORIAL_LEVELS.TUTORIAL_6);
    this.createButton("Tutorial7", TUTORIAL_LEVELS.TUTORIAL_7);
    this.createButton("Tutorial8", TUTORIAL_LEVELS.TUTORIAL_8);
    this.createButton("Tutorial9", TUTORIAL_LEVELS.TUTORIAL_9);
    this.createButton("Tutorial10", TUTORIAL_LEVELS.TUTORIAL_10);

    for(let i = 0; i < this.buttons.length; i++) {
        const button = this.buttons[i];

        button.addClick(() => this.clickButton(battalion, button));
    }

    UIHelpers.createCloseButton("CLOSE_TUTORIAL", () => {
        mainMenu.show();
        this.close();
    });

    UIHelpers.createGenericButton("PlayTutorialLevel", () => {
        if(this.selectedLevel) {
            initializeSpecialBattle(this.selectedLevel);

            this.close();
        }
    });
}