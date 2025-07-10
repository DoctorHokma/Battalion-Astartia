const SpecialLevelsButton = function(id, config) {
    GenericButton.call(this, id, config);

    this.setText(config.info);
    this.setImage("Assets/Miscellaneous/LongPlaque.png");
    this.addTextClass("bonus_button_text");
    this.addImageClass("bonus_button_image");
    this.addMainClass("bonus_button");
}

SpecialLevelsButton.prototype = Object.create(GenericButton.prototype);
SpecialLevelsButton.prototype.constructor = SpecialLevelsButton;

SpecialLevelsButton.prototype.getName = function() {
    return this.config.name ?? "";
}

SpecialLevelsButton.prototype.getDesc = function() {
    return this.config.desc ?? "";
}

SpecialLevelsButton.prototype.getInfo = function() {
    return this.config.info ?? "";
}

SpecialLevelsButton.prototype.getLevels = function() {
    return this.config.levels ?? [];
}