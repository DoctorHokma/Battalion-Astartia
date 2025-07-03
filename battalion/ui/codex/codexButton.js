const CodexButton = function(id, textID) {
    this.id = id;
    this.textID = textID;

    this.element = document.getElementById(id);
    this.element.classList.add("codex_button");

    this.image = document.createElement("img");
    this.image.src = "Assets/Miscellaneous/LongPlaque.png";

    this.text = document.createElement("p");
    this.text.innerText = textID;
    this.text.classList.add("codex_button_text");

    this.element.appendChild(this.image);
    this.element.appendChild(this.text);
}

CodexButton.prototype.setText = function(text) {
    this.text.innerText = text;
}

CodexButton.prototype.setClick = function(onClick) {
    this.element.onclick = (event) => onClick(this, event);
}