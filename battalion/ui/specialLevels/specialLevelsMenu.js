var NivelVizat = null;

const SpecialLevelsMenu = function() {
    GenericMenu.call(this, "Special Levels");

    this.currentCategory = [];
    this.defaultLevelName = "";
    this.defaultLevelDescription = "";
    this.closeButton = UIHelper.createGenericButton("CLOSE_SPECIAL_LEVELS");
    this.playButton = UIHelper.createGenericButton("PLAY_SPECIAL_LEVELS");
}

SpecialLevelsMenu.MAX_LEVELS_PER_PAGE = 9;

SpecialLevelsMenu.prototype = Object.create(GenericMenu.prototype);
SpecialLevelsMenu.prototype.constructor = SpecialLevelsMenu;

SpecialLevelsMenu.prototype.onLanguageSwitch = function(handler) {
    for(let i = 0; i < this.buttons.length; i++) {
        const button = this.buttons[i];
        const text = handler.get(button.config.info);

        button.setText(text);
    }

    this.defaultLevelName = handler.get("SYSTEM_SPECIAL_LEVELS_NAME");
    this.defaultLevelDescription = handler.get("SYSTEM_SPECIAL_LEVELS_DESC");
    this.closeButton.setText(handler.get("SYSTEM_BUTTON_CLOSE"));
    this.playButton.setText(handler.get("SYSTEM_BUTTON_PLAY"));

    this.setText(this.defaultLevelName, this.defaultLevelDescription);
}

SpecialLevelsMenu.prototype.setText = function(name, desc) {
    document.getElementById("Special Level Name").innerText = name;
    document.getElementById("Special Level Description").innerText = desc;
}

SpecialLevelsMenu.prototype.getLevelSelectButton = function(index) {
    const buttonID = `Special Level ${index + 1}`;
    const button = document.getElementById(buttonID);

    return button;
}

SpecialLevelsMenu.prototype.hideLevels = function() {
    for(let i = 0; i < SpecialLevelsMenu.MAX_LEVELS_PER_PAGE; i++) {
        const button = this.getLevelSelectButton(i);

        button.style.visibility = "hidden";
    }
}

SpecialLevelsMenu.prototype.clickButton = function(battalion, button) {
    const { language } = battalion;
    const { config } = button;
    const { levels, name, desc } = config;
    const shownLevels = levels.length > SpecialLevelsMenu.MAX_LEVELS_PER_PAGE ? SpecialLevelsMenu.MAX_LEVELS_PER_PAGE : levels.length;
    const hiddenLevels = SpecialLevelsMenu.MAX_LEVELS_PER_PAGE - shownLevels;

    for(let i = 0; i < shownLevels; i++) {
        const button = this.getLevelSelectButton(i);

        button.style.visibility = "visible";
        button.src = "Assets/SpecialLevels/" + levels[i].Name + ".png";
    }

    for(let i = 0; i < hiddenLevels; i++) {
        const button = this.getLevelSelectButton(SpecialLevelsMenu.MAX_LEVELS_PER_PAGE - i - 1);

        button.style.visibility = "hidden";
    }

    this.setText(language.get(name), language.get(desc));
    this.currentCategory = levels;

    NivelVizat = null;
}

SpecialLevelsMenu.prototype.open = function() {
    //??? Secret Level :)
    NivelVizat = Samara;

    this.show();
}

SpecialLevelsMenu.prototype.close = function() {
    this.setText(this.defaultLevelName, this.defaultLevelDescription);
    this.hideLevels();
    this.hide();
    this.currentCategory = [];

    NivelVizat = null;
}

SpecialLevelsMenu.prototype.selectLevelByIndex = function(index) {
    if(index < 0 || this.index >= this.currentCategory.length) {
        return;
    }

    SelectSpecialLevel(this.currentCategory[index]);
}

SpecialLevelsMenu.prototype.createButton = function(buttonID, config) {
    const button = new SpecialLevelsButton(buttonID, config);

    this.buttons.push(button);

    return button;
}

SpecialLevelsMenu.prototype.createLevelSelectButtons = function() {
    for(let i = 0; i < SpecialLevelsMenu.MAX_LEVELS_PER_PAGE; i++) {
        const button = this.getLevelSelectButton(i);

        button.style.visibility = "hidden";
        button.onclick = () => this.selectLevelByIndex(i);
    }
}

SpecialLevelsMenu.prototype.init = function(battalion) {
	const { uiHandler } = battalion;
    const { mainMenu } = uiHandler;

    this.createButton("BonusL1", SPECIAL_LEVELS.PLOT_EXPANSION);
    this.createButton("BonusL2", SPECIAL_LEVELS.SKIRMISHES);
    this.createButton("BonusL3", SPECIAL_LEVELS.CUTE);
    this.createButton("BonusL4", SPECIAL_LEVELS.HISTORICAL);
    this.createButton("BonusL5", SPECIAL_LEVELS.HONOUR);
    this.createButton("BonusL6", SPECIAL_LEVELS.CHALLENGES);
    this.createButton("BonusL7", SPECIAL_LEVELS.MEME);
    this.createButton("BonusL8", SPECIAL_LEVELS.ANIME);
    this.createButton("BonusL9", SPECIAL_LEVELS.GRAND);

    for(let i = 0; i < this.buttons.length; i++) {
        const button = this.buttons[i];

        button.addClick(() => this.clickButton(battalion, button));
    }

    this.createLevelSelectButtons();

    this.closeButton.addClick(() => {
        mainMenu.show();
        this.close();
    });

    this.playButton.addClick(() => {
        if(NivelVizat !== null) {
            initializeSpecialBattle(NivelVizat);

            this.close();
        }
    });
}