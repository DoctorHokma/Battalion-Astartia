const Codex = function() {
	GenericMenu.call(this, "Codex");

	this.closeButton = UIHelpers.createGenericButton("CLOSE_CODEX_BUTTON");
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
        const text = handler.get(button.textID);

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

Codex.prototype.createButton = function(battalion, buttonID, codexID) {
	const element = document.getElementById(buttonID);
	const lore = CODEX[codexID];

	if(element && lore) {
		const { DocInfo } = lore;
        const button = new CodexButton(buttonID, DocInfo);

        button.addClick(() => this.displayLore(battalion, lore));

        this.buttons.push(button);
	}
}

Codex.prototype.init = function(battalion) {
	const { language, uiHandler } = battalion;
	const { mainMenu } = uiHandler;

	this.createButton(battalion, "CODEX_JOKES", "JOKES");
	this.createButton(battalion, "CODEX_SPECIAL_UNITS", "SPECIAL_UNITS");
	this.createButton(battalion, "CODEX_SPECIAL_ARMOR", "SPECIAL_ARMOR");
	this.createButton(battalion, "CODEX_SPECIAL_AIRCRAFT", "SPECIAL_AIRCRAFT");
	this.createButton(battalion, "CODEX_SPECIAL_SHIPS", "SPECIAL_SHIPS");
	this.createButton(battalion, "CODEX_THIS_WORLD", "THIS_WORLD");
	this.createButton(battalion, "CODEX_IT_HAPPENED", "IT_HAPPENED");
	this.createButton(battalion, "CODEX_1", "EMPTY");
	this.createButton(battalion, "CODEX_2", "EMPTY");
	this.createButton(battalion, "CODEX_3", "EMPTY");
	this.createButton(battalion, "CODEX_4", "EMPTY");
	this.createButton(battalion, "CODEX_5", "EMPTY");
	this.createButton(battalion, "CODEX_6", "EMPTY");
	this.createButton(battalion, "CODEX_7", "EMPTY");
	this.createButton(battalion, "CODEX_8", "EMPTY");
	this.createButton(battalion, "CODEX_9", "EMPTY");
	this.createButton(battalion, "CODEX_10", "EMPTY");
	this.createButton(battalion, "CODEX_11", "EMPTY");
	this.createButton(battalion, "CODEX_12", "EMPTY");
	this.createButton(battalion, "CODEX_13", "EMPTY");
	this.createButton(battalion, "CODEX_OPERATION_TZIMTZUM", "OPERATION_TZIMTZUM");
	this.createButton(battalion, "CODEX_OPERATION_GOLCHAB", "OPERATION_GOLCHAB");
	this.createButton(battalion, "CODEX_OPERATION_GHAAG_SHEBLAH", "OPERATION_GHAAG_SHEBLAH");
	this.createButton(battalion, "CODEX_OPERATION_OHR_EIN_ZOF", "OPERATION_OHR_EIN_ZOF");
	this.createButton(battalion, "CODEX_OPERATION_SAMSON", "OPERATION_SAMSON");
	this.createButton(battalion, "CODEX_OPERATION_THAUMIEL", "OPERATION_THAUMIEL");
	this.createButton(battalion, "CODEX_WAR_PLAN_ARMAGEDDON", "WAR_PLAN_ARMAGEDDON");

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