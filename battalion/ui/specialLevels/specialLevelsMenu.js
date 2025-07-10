var NivelVizat = null;

const SpecialLevelsMenu = function() {
    GenericMenu.call(this, "Special Levels");

    this.currentCategory = [];
    this.defaultLevelName = "";
    this.defaultLevelDescription = "";
}

SpecialLevelsMenu.MAX_LEVELS_PER_PAGE = 9;

SpecialLevelsMenu.prototype = Object.create(GenericMenu.prototype);
SpecialLevelsMenu.prototype.constructor = SpecialLevelsMenu;

SpecialLevelsMenu.prototype.onLanguageSwitch = function(handler) {
    for(let i = 0; i < this.buttons.length; i++) {
        const button = this.buttons[i];
        const textID = button.getTextID();
        const text = handler.get(textID);

        button.setText(text);
    }

    this.updateDefaultText();
}

SpecialLevelsMenu.prototype.resetText = function() {
    document.getElementById("Special Level Name").innerText = this.defaultLevelName;
    document.getElementById("Special Level Description").innerText = this.defaultLevelDescription;
}

SpecialLevelsMenu.prototype.updateDefaultText = function(handler) {
    this.defaultLevelName = handler.get("SYSTEM_SPECIAL_LEVELS_NAME");
    this.defaultLevelDescription = handler.get("SYSTEM_SPECIAL_LEVELS_DESC");
}

SpecialLevelsMenu.prototype.hideLevels = function() {
    for(let i = 0; i < SpecialLevelsMenu.MAX_LEVELS_PER_PAGE; i++) {
        const elementID = `Special Level ${i + 1}`;
        const element = document.getElementById(elementID);

        element.style.visibility = "hidden";
    }
}

SpecialLevelsMenu.prototype.clickButton = function(button) {
    this.resetText();
    this.hideLevels();

    const levels = button.getLevels();
    const size = levels.length > SpecialLevelsMenu.MAX_LEVELS_PER_PAGE ? SpecialLevelsMenu.MAX_LEVELS_PER_PAGE : levels.length;

    for(let i = 0; i < size; i++) {
        const elementID = `Special Level ${i + 1}`;
        const element = document.getElementById(elementID);

        element.style.visibility = "visible";
        element.src = "Assets/SpecialLevels/" + levels[i].Name + ".png";
    }

    this.currentCategory = levels;
}

SpecialLevelsMenu.prototype.open = function() {
    //??? Secret Level :)
    NivelVizat = Samara;

    this.show();
}

SpecialLevelsMenu.prototype.close = function() {
    this.resetText();
    this.hideLevels();
    this.hide();
    this.currentCategory = [];
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

    button.addClick(() => this.clickButton(button));

    return button;
}

SpecialLevelsMenu.prototype.createLevelSelectButtons = function() {
    for(let i = 0; i < SpecialLevelsMenu.MAX_LEVELS_PER_PAGE; i++) {
        const buttonID = `Special Level ${i + 1}`;
        const button = document.getElementById(buttonID);

        button.style.visibility = "hidden";
        button.onclick = () => this.selectLevelByIndex(i);
    }
}

SpecialLevelsMenu.prototype.createCloseButton = function(battalion) {
	const { uiHandler } = battalion;
    const { mainMenu } = uiHandler;
    const element = document.getElementById("CLOSE_SPECIAL_LEVELS");

    element.src = "Assets/Miscellaneous/CloseButton.png";

    element.onmouseover = () => {
        element.src = "Assets/Miscellaneous/CloseButtonHovered.png";
    }

    element.onmouseout = () => {
        element.src = "Assets/Miscellaneous/CloseButton.png";
    }

    element.onclick = () => {
        element.src = "Assets/Miscellaneous/CloseButtonPressed.png";
        
        mainMenu.show();

        this.close();
    }

}

SpecialLevelsMenu.prototype.init = function(battalion) {
    const { language } = battalion;

    this.createButton("BonusL1", SPECIAL_LEVELS.PLOT_EXPANSION);
    this.createButton("BonusL2", SPECIAL_LEVELS.SKIRMISHES);
    this.createButton("BonusL3", SPECIAL_LEVELS.CUTE);
    this.createButton("BonusL4", SPECIAL_LEVELS.HISTORICAL);
    this.createButton("BonusL5", SPECIAL_LEVELS.HONOUR);
    this.createButton("BonusL6", SPECIAL_LEVELS.CHALLENGES);
    this.createButton("BonusL7", SPECIAL_LEVELS.MEME);
    this.createButton("BonusL8", SPECIAL_LEVELS.ANIME);
    this.createButton("BonusL9", SPECIAL_LEVELS.GRAND);

    this.createCloseButton(battalion);
    this.createLevelSelectButtons();
    this.updateDefaultText(language);
    this.resetText();
}