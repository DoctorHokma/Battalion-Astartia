const GenericMenu = function(id) {
    this.element = document.getElementById(id);
    this.buttons = [];
}

GenericMenu.prototype.hide = function() {
    this.element.style.visibility = "hidden";
}

GenericMenu.prototype.show = function() {
    this.element.style.visibility = "visible";
}