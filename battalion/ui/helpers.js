const UIHelpers = {};

UIHelpers.createCloseButton = function(buttonID, onClick) {
    const element = document.getElementById(buttonID);

    element.src = "Assets/Miscellaneous/CloseButton.png";
    element.onmouseover = () => element.src = "Assets/Miscellaneous/CloseButtonHovered.png";
    element.onmouseout = () => element.src = "Assets/Miscellaneous/CloseButton.png";
    element.onmousedown = () => element.src = "Assets/Miscellaneous/CloseButtonPressed.png";
    element.onclick = () => onClick();
}

UIHelpers.makeGenericButton = function(buttonID, onClick) {
    const element = document.getElementById(buttonID);

    element.src = "Assets/Miscellaneous/GenericButton.png";
    element.onmouseover = () => element.src = "Assets/Miscellaneous/GenericButtonHovered.png";
    element.onmouseout = () => element.src = "Assets/Miscellaneous/GenericButton.png";
    element.onmousedown = () => element.src = "Assets/Miscellaneous/GenericButtonPressed.png";
    element.onclick = () => onClick();
}

UIHelpers.createGenericButton = function(elementID) {
    const button = new GenericButton(elementID, null);

    button.image.src = "Assets/Miscellaneous/GenericButton.png";
    button.image.onmouseover = () => button.image.src = "Assets/Miscellaneous/GenericButtonHovered.png";
    button.image.onmouseout = () => button.image.src = "Assets/Miscellaneous/GenericButton.png";
    button.image.onmousedown = () => button.image.src = "Assets/Miscellaneous/GenericButtonPressed.png";

    button.addMainClass("generic_button");
    button.addImageClass("generic_button_image");
    button.addTextClass("generic_button_text");
    button.setText("GENERIC_BUTTON");

    return button;
}