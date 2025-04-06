const LanguageHandler = function() {
    this.languages = new Map();
    this.currentLanguage = null;
}

LanguageHandler.STRICT = true;

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
        console.warn("Error!", key);

        return key;
    }

    const text = this.currentLanguage[key];

    if(text === undefined) {
        console.warn("Translation does not exist!", key);

        return key;
    }

    if(LanguageHandler.STRICT) {
        if(text.length === 0) {
            console.warn("Translation is empty!", key);

            return key;
        }
    }

    return text;
}
