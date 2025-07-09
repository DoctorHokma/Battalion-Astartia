var BlocVizat = [];
var NivelVizat = null;

const SpecialLevelsMenu = function() {
    GenericMenu.call(this, "Special Levels");
}

SpecialLevelsMenu.prototype = Object.create(GenericMenu.prototype);
SpecialLevelsMenu.prototype.constructor = SpecialLevelsMenu;

SpecialLevelsMenu.prototype.onLanguageSwitch = function(handler) {
    for(let i = 0; i < this.buttons.length; i++) {
        const button = this.buttons[i];
        const textID = button.getTextID();
        const text = handler.get(textID);

        button.setText(text);
    }
}

SpecialLevelsMenu.prototype.hideLevels = function() {
    for(let i = 0; i < 9; i++) {
        const element = document.getElementById("Special Level " + (i + 1));

        element.style.visibility = "hidden";
    }
}

SpecialLevelsMenu.prototype.clickButton = function(button) {
    this.hideLevels();

    const levels = button.getLevels();
    const size = levels.length > 9 ? 9 : levels.length;

    for(let i = 0; i < size; i++) {
        const element = document.getElementById("Special Level " + (i + 1));

        element.style.visibility = "visible";
        element.src = "Assets/SpecialLevels/" + levels[i].Name + ".png";
    }

    BlocVizat = levels;
}

SpecialLevelsMenu.prototype.createButton = function(buttonID, config) {
    const button = new SpecialLevelsButton(buttonID, config);

    this.buttons.push(button);

    button.addClick(() => this.clickButton(button));

    return button;
}

SpecialLevelsMenu.prototype.open = function() {
    //???
    NivelVizat = Samara;

    this.hideLevels();
    this.show();
}

SpecialLevelsMenu.prototype.close = function() {
    this.hideLevels();
    this.hide();
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
}