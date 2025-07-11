const SpecialLevelsButton = function(id, config) {
    GenericButton.call(this, id, config);

    this.setText(config.info);
    this.setImage("Assets/Miscellaneous/LongPlaque.png");
    this.addImageClass("block_button_image");
    this.addTextClass("block_button_text");
    this.addMainClass("block_button");
}

SpecialLevelsButton.prototype = Object.create(GenericButton.prototype);
SpecialLevelsButton.prototype.constructor = SpecialLevelsButton;