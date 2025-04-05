const LanguageHandler = function() {
    this.languages = new Map();
    this.currentLanguage = null;
}

LanguageHandler.prototype.selectLanguage = function(languageID) {
    const language = this.languages.get(languageID);

    if(!language) {
        return;
    }

    this.currentLanguage = language;
}

LanguageHandler.prototype.addLanguage = function(languageID, language) {
    if(this.languages.has(languageID)) {
        return;
    }

    this.languages.set(languageID, language);
}

LanguageHandler.prototype.get = function(key) {
    if(!this.currentLanguage || typeof key !== "string") {
        return key;
    }

    const text = this.currentLanguage[key];

    if(text === undefined) {
        return key;
    }

    return text;
}
