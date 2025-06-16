const UIHandler = function() {
    this.mainMenu = new MainMenu("MAIN_MENU");
}

UIHandler.prototype.updateLanguage = function(context) {
    const { language } = context;

    this.mainMenu.updateLanguageTags(language);
}