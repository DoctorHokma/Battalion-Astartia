const CodexButton = function(id, textID) {
    GenericButton.call(this, id, null);

    this.textID = textID;
    this.setImage("Assets/Miscellaneous/LongPlaque.png");
    this.setText(textID);
    this.addMainClass("block_button");
    this.addImageClass("block_button_image");
    this.addTextClass("block_button_text");

    this.addMainClass("codex_button");
    this.addImageClass("codex_button_image");
    this.addTextClass("codex_button_text");
}

CodexButton.prototype = Object.create(GenericButton.prototype);
CodexButton.prototype.constructor = CodexButton;