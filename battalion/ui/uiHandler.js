const UIHandler = function() {
    this.mainMenu = new MainMenu();
    this.codex = new Codex();
    this.options = new OptionsMenu();
    this.morale = new MoraleHandler();
    this.specialOptions = new SpecialOptions();
    this.specialLevels = new SpecialLevelsMenu();
}

UIHandler.prototype.init = function(battalion) {
    this.mainMenu.init(battalion);
    this.codex.init(battalion);
    this.options.init(battalion);
    this.morale.init(battalion);
    this.specialOptions.init(battalion);
    this.specialLevels.init(battalion);
    this.onLanguageSwitch(battalion);
}

UIHandler.prototype.onLanguageSwitch = function(battalion) {
    const { language } = battalion;

    this.mainMenu.onLanguageSwitch(language);
    this.codex.onLanguageSwitch(language);
    this.specialLevels.onLanguageSwitch(language);
}