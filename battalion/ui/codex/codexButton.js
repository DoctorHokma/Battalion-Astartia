const CodexButton = function(id, textID) {
    GenericButton.call(this, id, null);

    this.textID = textID;
    this.setImage("Assets/Miscellaneous/LongPlaque.png");
    this.setText(textID);
    this.addMainClass("codex_button");
    this.addTextClass("codex_button_text");
}

CodexButton.prototype = Object.create(GenericButton.prototype);
CodexButton.prototype.constructor = CodexButton;