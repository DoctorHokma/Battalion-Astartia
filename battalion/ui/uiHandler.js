const UIHandler = function() {
    this.mainMenu = new MainMenu();
    this.codex = new Codex();
}

UIHandler.prototype.init = function(battalion) {
    this.mainMenu.init();
    this.codex.init(battalion);
    this.onLanguageSwitch(battalion);
}

UIHandler.prototype.onLanguageSwitch = function(battalion) {
    const { language } = battalion;

    this.mainMenu.onLanguageSwitch(language);
    this.codex.onLanguageSwitch(language);
}