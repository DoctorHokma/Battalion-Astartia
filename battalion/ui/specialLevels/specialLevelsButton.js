const SpecialLevelsButton = function(id, config) {
    GenericButton.call(this, id, config);

    this.setText(config.info);
    this.setImage("Assets/Miscellaneous/LongPlaque.png");
    this.addImageClass("bonus_button_image");
    this.addTextClass("bonus_button_text");
    this.addMainClass("bonus_button");
}

SpecialLevelsButton.prototype = Object.create(GenericButton.prototype);
SpecialLevelsButton.prototype.constructor = SpecialLevelsButton;