const UIHandler = function() {
    this.mainMenu = new MainMenu("MAIN_MENU");
}

UIHandler.prototype.updateLanguage = function(context) {
    this.mainMenu.updateLanguageTags(context);
}