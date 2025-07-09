const SpecialLevelsButton = function(id, config) {
    GenericButton.call(this, id, config);

    this.setText(config.textID);
    this.setImage("Assets/Miscellaneous/LongPlaque.png");
    this.addTextClass("bonus_button_text");
    this.addImageClass("bonus_button_image");
    this.addMainClass("bonus_button");
}

SpecialLevelsButton.prototype = Object.create(GenericButton.prototype);
SpecialLevelsButton.prototype.constructor = SpecialLevelsButton;

SpecialLevelsButton.prototype.getTextID = function() {
    return this.config.textID;
}

SpecialLevelsButton.prototype.getLevels = function() {
    return this.config.levels;
}