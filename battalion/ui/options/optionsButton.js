const OptionsButton = function(id) {
    this.id = id;
    this.element = document.getElementById(id);

    this.element.onmouseover = () => {
        this.element.style.filter = "brightness(125%)";
    }

    this.element.onmouseout = () => {
        this.element.style.filter = "brightness(100%)";
    }
}

OptionsButton.prototype.setClick = function(onClick) {
    this.element.onclick = (event) => {
        this.element.style.filter = "brightness(75%)";
        onClick(this, event);
    }

    return this;
}

OptionsButton.prototype.setTooltip = function(tooltipID) {
    this.element.oncontextmenu = () => {
        Tooltip(tooltipID);
    }

    this.element.onmouseout = () => {
        document.getElementById("GeneralTooltip").style.visibility = "hidden";
        this.element.style.filter = "brightness(100%)";
    }

    return this;
}