const UIHelper = {
    createCloseButton: (elementID) => {
        const button = new GenericButton(elementID, null);

        button.image.src = "Assets/Miscellaneous/CloseButton.png";
        button.image.onmouseover = () => button.image.src = "Assets/Miscellaneous/CloseButtonHovered.png";
        button.image.onmouseout = () => button.image.src = "Assets/Miscellaneous/CloseButton.png";
        button.image.onmousedown = () => button.image.src = "Assets/Miscellaneous/CloseButtonPressed.png";

        return button;
    },
    createGenericButton: (elementID) => {
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
    },
    createCodexButton: (config) => {
        const button = new GenericButton(null, config);

        button.setImage("Assets/Miscellaneous/LongPlaque.png");
        button.addMainClass("block_button");
        button.addImageClass("block_button_image");
        button.addTextClass("block_button_text");

        button.addMainClass("codex_button");
        button.addImageClass("codex_button_image");
        button.addTextClass("codex_button_text");

        return button;
    },
    createSpecialButton: (config) => {
        const button = new GenericButton(null, config);

        button.setImage("Assets/Miscellaneous/LongPlaque.png");
        button.addMainClass("block_button");
        button.addImageClass("block_button_image");
        button.addTextClass("block_button_text");

        button.addMainClass("bonus_button");
        button.addImageClass("bonus_button_image");
        button.addTextClass("bonus_button_text");

        return button;
    },
    createTutorialButton: (config) => {
        const button = new GenericButton(null, config);

        button.setImage("Assets/Miscellaneous/LongPlaque.png");
        button.addMainClass("block_button");
        button.addImageClass("block_button_image");
        button.addTextClass("block_button_text");

        button.addMainClass("tutorial_button");
        button.addImageClass("tutorial_button_image");
        button.addTextClass("tutorial_button_text");

        return button;
    }
};