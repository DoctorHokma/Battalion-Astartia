const UIHelpers = {};

UIHelpers.createCloseButton = function(buttonID, onClick) {
    const element = document.getElementById(buttonID);

    element.src = "Assets/Miscellaneous/CloseButton.png";
    element.onmouseover = () => element.src = "Assets/Miscellaneous/CloseButtonHovered.png";
    element.onmouseout = () => element.src = "Assets/Miscellaneous/CloseButton.png";
    element.onmousedown = () => element.src = "Assets/Miscellaneous/CloseButtonPressed.png";
    element.onclick = () => onClick();
}

UIHelpers.createGenericButton = function(buttonID, onClick) {
    const element = document.getElementById(buttonID);

    element.src = "Assets/Miscellaneous/GenericButton.png";
    element.onmouseover = () => element.src = "Assets/Miscellaneous/GenericButtonHovered.png";
    element.onmouseout = () => element.src = "Assets/Miscellaneous/GenericButton.png";
    element.onmousedown = () => element.src = "Assets/Miscellaneous/GenericButtonPressed.png";
    element.onclick = () => onClick();
}