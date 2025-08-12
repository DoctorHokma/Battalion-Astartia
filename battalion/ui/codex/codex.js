const Codex = function() {
	GenericMenu.call(this, "Codex");

	this.closeButton = UIHelper.createGenericButton("CLOSE_CODEX_BUTTON");
}

Codex.DOCUMENT_SIZES = [
    "CODEX_DOCUMENT_SIZE_EMPTY",
    "CODEX_DOCUMENT_SIZE_VERY_SHORT",
    "CODEX_DOCUMENT_SIZE_SHORT",
    "CODEX_DOCUMENT_SIZE_NORMAL",
    "CODEX_DOCUMENT_SIZE_LONG",
    "CODEX_DOCUMENT_SIZE_VERY_LONG"
];

Codex.LORE_LENGTH_ICONS = [
	"LoreLengthIcon1",
	"LoreLengthIcon2",
	"LoreLengthIcon3",
	"LoreLengthIcon4",
	"LoreLengthIcon5"
];

Codex.prototype = Object.create(GenericMenu.prototype);
Codex.prototype.constructor = Codex;

Codex.prototype.onLanguageSwitch = function(handler) {
    for(let i = 0; i < this.buttons.length; i++) {
        const button = this.buttons[i];
        const text = handler.get(button.config.DocInfo);

        button.setText(text);
    }

	this.resetInfo(handler);
}

Codex.prototype.displayLore = function(battalion, lore) {
	const { language } = battalion;
	const { DocName = "", DocDesc = "", DocText = "", DocSize = 0 } = lore;
	const loreName = document.getElementById("LoreName");
	const loreDesc = document.getElementById("LoreDesc");
	const loreLength = document.getElementById("LoreLength");
	const lorePanel = document.getElementById("LorePanel");

	loreName.innerHTML = language.get(DocName);
	loreDesc.innerHTML = language.get(DocDesc);

    if(DocSize < 0 || DocSize >= Codex.DOCUMENT_SIZES.length) {
		loreLength.innerHTML = language.get("CODEX_DOCUMENT_SIZE_EMPTY");
    } else {
        loreLength.innerHTML = language.get(Codex.DOCUMENT_SIZES[DocSize]);
    }

	const text = language.get(DocText);
	const processedText = Array.isArray(text) ? text.join("<br><br>") : text;

	lorePanel.innerHTML = processedText;

	for(let i = 0; i < Codex.LORE_LENGTH_ICONS.length; i++) {
		const icon = document.getElementById(Codex.LORE_LENGTH_ICONS[i]);

		if(DocSize <= i) {
			icon.src = "Assets/Miscellaneous/DocShadow.PNG";
		} else {
			icon.src = "Assets/Miscellaneous/DocIcon.PNG";
		}
	}
}

Codex.prototype.resetIcons = function() {
	for(let i = 0; i < Codex.LORE_LENGTH_ICONS.length; i++) {
		const icon = document.getElementById(Codex.LORE_LENGTH_ICONS[i]);

		icon.src = "Assets/Miscellaneous/DocShadow.PNG";
	}
}

Codex.prototype.resetInfo = function(handler) {
	const loreName = document.getElementById("LoreName");
	const loreDesc = document.getElementById("LoreDesc");
	const loreLength = document.getElementById("LoreLength");
	const lorePanel = document.getElementById("LorePanel");

	loreName.innerHTML = handler.get("CODEX_INFO_NAME");
	loreDesc.innerHTML = handler.get("CODEX_INFO_DESC");
	loreLength.innerHTML = handler.get("CODEX_INFO_LENGTH");
	lorePanel.innerHTML = "";

	this.closeButton.setText(handler.get("SYSTEM_BUTTON_CLOSE"));
}

Codex.prototype.createLengthIcon = function(iconID) {
	const element = document.getElementById(iconID);

	if(element) {
		element.oncontextmenu = () => {
			Tooltip("TOOLTIP_DOCUMENT_SIZE");
		}

		element.onmouseout = () => {
			GeneralTooltip.hide();
		}
	}
}

Codex.prototype.createButtons = function(battalion) {
	const scrollContainer = document.getElementById("CODEX_SCROLL_CONTAINER");

	for(let i = 0; i < UI_SETTINGS.CODEX_ORDER.length; i++) {
		const lore = CODEX[UI_SETTINGS.CODEX_ORDER[i]];

		if(lore) {
			const button = UIHelper.createCodexButton(lore);

			button.setText(lore.DocInfo);
			button.addClick(() => this.displayLore(battalion, lore));
			scrollContainer.appendChild(button.element);

			this.buttons.push(button);
		}
	}

	if(this.buttons.length > 0) {
		this.buttons[0].element.style.marginTop = UI_SETTINGS.FIRST_MARGIN_CODEX;
	}
}

Codex.prototype.init = function(battalion) {
	const { language, uiHandler } = battalion;
	const { mainMenu } = uiHandler;

	this.createButtons(battalion);

	this.createLengthIcon("LoreLengthIcon1");
	this.createLengthIcon("LoreLengthIcon2");
	this.createLengthIcon("LoreLengthIcon3");
	this.createLengthIcon("LoreLengthIcon4");
	this.createLengthIcon("LoreLengthIcon5");

	this.resetIcons();
	this.resetInfo(language);

	this.closeButton.addClick(() => {
		this.resetIcons();
		this.resetInfo(language);
		this.hide();
		mainMenu.show();
	});
}