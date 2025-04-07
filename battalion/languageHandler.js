const LanguageHandler = function(template) {
    this.languages = new Map();
    this.template = template;
    this.currentLanguage = null;
    this.currentLanguageID = null;
}

LanguageHandler.STRICT = true;

LanguageHandler.prototype.selectLanguage = function(languageID) {
    const language = this.languages.get(languageID);

    if(!language) {
        return;
    }

    this.currentLanguage = language;
    this.currentLanguageID = languageID;
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
        if(LanguageHandler.STRICT) {
            console.warn("Translation does not exist!", key, this.currentLanguageID);
        }

        return key;
    }

    if(LanguageHandler.STRICT) {
        if(text.length === 0) {
            console.warn("Translation is empty!", key, this.currentLanguageID);

            return key;
        }
    }

    return text;
}

LanguageHandler.prototype.getAllMissingTags = function(keywords = []) {
    const languageMissing = new Map();

    for(const [languageID] of this.languages) {
        const missing = this.getMissingTags(languageID);
        const filtered = new Set();

        languageMissing.set(languageID, {
            "regular": missing,
            "filtered": filtered
        });
    }

    for(let i = 0; i < keywords.length; i++) {
        const keyword = keywords[i];

        languageMissing.forEach(({regular, filtered}) => {
            for(const tagID of regular) {
                if(tagID.includes(keyword)) {
                    filtered.add(tagID);
                }
            }
        });
    }

    return languageMissing;
}

LanguageHandler.prototype.getMissingTags = function(languageID) {
    const missing = new Set();
    const language = this.languages.get(languageID);

    if(!language) {
        return missing;
    }

    for(const tagID in this.template) {
        const tag = language[tagID];

        if(!tag || (tag.length === 0 && LanguageHandler.STRICT)) {
            missing.add(tagID);
        }
    }

    return missing;
}