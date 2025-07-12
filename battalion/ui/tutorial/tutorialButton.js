const TutorialButton = function(id, config) {
    GenericButton.call(this, id, config);

    this.setText(config.info);
    this.setImage("Assets/Miscellaneous/LongPlaque.png");
    this.addMainClass("block_button");
    this.addImageClass("block_button_image");
    this.addTextClass("block_button_text");

    this.addMainClass("tutorial_button");
    this.addImageClass("tutorial_button_image");
    this.addTextClass("tutorial_button_text");
}

TutorialButton.prototype = Object.create(GenericButton.prototype);
TutorialButton.prototype.constructor = TutorialButton;