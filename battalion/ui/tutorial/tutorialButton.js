const TutorialButton = function(id, config) {
    GenericButton.call(this, id, config);

    this.setText(config.info);
    this.setImage("Assets/Miscellaneous/LongPlaque.png");
    this.addTextClass("bonus_button_text");
    this.addImageClass("bonus_button_image");
    this.addMainClass("bonus_button");
}

TutorialButton.prototype = Object.create(GenericButton.prototype);
TutorialButton.prototype.constructor = TutorialButton;