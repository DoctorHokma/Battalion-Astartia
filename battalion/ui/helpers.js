const UIHelpers = {};

UIHelpers.createCloseButton = function(buttonID, onClick) {
    const element = document.getElementById(buttonID);

    element.src = "Assets/Miscellaneous/CloseButton.png";
    element.onmouseover = () => element.src = "Assets/Miscellaneous/CloseButtonHovered.png";
    element.onmouseout = () => element.src = "Assets/Miscellaneous/CloseButton.png";
    element.onmousedown = () => element.src = "Assets/Miscellaneous/CloseButtonPressed.png";
    element.onclick = () => onClick();
}