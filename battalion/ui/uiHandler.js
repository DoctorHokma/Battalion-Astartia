const UIHandler = function() {
    this.mainMenu = new MainMenu("Main Menu");
}

UIHandler.prototype.updateLanguage = function(context) {
    this.mainMenu.updateLanguageTags(context);
}