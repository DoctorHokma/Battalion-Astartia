const UIHandler = function() {
    this.mainMenu = new MainMenu("MAIN_MENU");
}

UIHandler.prototype.init = function(battalion) {
    this.mainMenu.init();
    this.onLanguageSwitch(battalion);
}

UIHandler.prototype.onLanguageSwitch = function(battalion) {
    const { language } = battalion;

    this.mainMenu.onLanguageSwitch(language);
}