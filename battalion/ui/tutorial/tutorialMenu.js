const TutorialMenu = function() {
    GenericMenu.call(this, "Tutorial Levels");

    this.defaultLevelName = "";
    this.defaultLevelDescription = "";
    this.selectedLevel = null;
    this.closeButton = UIHelper.createGenericButton("CLOSE_TUTORIAL");
    this.playButton = UIHelper.createGenericButton("PLAY_TUTORIAL");
}

TutorialMenu.prototype = Object.create(GenericMenu.prototype);
TutorialMenu.prototype.constructor = TutorialMenu;

TutorialMenu.prototype.onLanguageSwitch = function(handler) {
    for(let i = 0; i < this.buttons.length; i++) {
        const button = this.buttons[i];
        const text = handler.get(button.config.info);

        button.setText(text);
    }

    this.defaultLevelName = handler.get("SYSTEM_TUTORIAL_NAME");
    this.defaultLevelDescription = handler.get("SYSTEM_TUTORIAL_DESC");
    this.closeButton.setText(handler.get("SYSTEM_BUTTON_CLOSE"));
    this.playButton.setText(handler.get("SYSTEM_BUTTON_PLAY"));

    this.setText(this.defaultLevelName, this.defaultLevelDescription);
}

TutorialMenu.prototype.setText = function(name, desc) {
    document.getElementById("Tutorial Level Name").innerText = name;
    document.getElementById("Tutorial Level Description").innerText = desc;
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

TutorialMenu.prototype.createButtons = function(battalion) {
    const scrollContainer = document.getElementById("TUTORIAL_SCROLL_CONTAINER");

    for(let i = 0; i < UI_SETTINGS.TUTORIAL_ORDER.length; i++) {
        const levelConfig = TUTORIAL_LEVELS[UI_SETTINGS.TUTORIAL_ORDER[i]];

        if(levelConfig) {
            const button = UIHelper.createTutorialButton(levelConfig);

            button.setText(levelConfig.info);
            button.addClick(() => this.clickButton(battalion, button));
            scrollContainer.appendChild(button.element);

            this.buttons.push(button);
        }
    }

	if(this.buttons.length > 0) {
		this.buttons[0].element.style.marginTop = "10px";
	}
}

TutorialMenu.prototype.init = function(battalion) {
	const { uiHandler } = battalion;
    const { mainMenu } = uiHandler;

    this.createButtons(battalion);

    this.closeButton.addClick(() => {
        mainMenu.show();
        this.close();
    });

    this.playButton.addClick(() => {
        if(this.selectedLevel) {
            initializeSpecialBattle(this.selectedLevel);

            this.close();
        }
    });
}