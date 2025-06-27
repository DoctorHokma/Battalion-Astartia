const DOCUMENT_SIZES = [
    "CODEX_DOCUMENT_SIZE_EMPTY",
    "CODEX_DOCUMENT_SIZE_VERY_SHORT",
    "CODEX_DOCUMENT_SIZE_SHORT",
    "CODEX_DOCUMENT_SIZE_NORMAL",
    "CODEX_DOCUMENT_SIZE_LONG",
    "CODEX_DOCUMENT_SIZE_VERY_LONG"
];

const LORE_LENGTH_ICONS = [
	"LoreLengthIcon1",
	"LoreLengthIcon2",
	"LoreLengthIcon3",
	"LoreLengthIcon4",
	"LoreLengthIcon5"
];

const initCodex = function(battalion) {
	createCodexButton(battalion, "CODEX_JOKES", "JOKES");
	createCodexButton(battalion, "CODEX_SPECIAL_UNITS", "SPECIAL_UNITS");
	createCodexButton(battalion, "CODEX_SPECIAL_ARMOR", "SPECIAL_ARMOR");
	createCodexButton(battalion, "CODEX_SPECIAL_AIRCRAFT", "SPECIAL_AIRCRAFT");
	createCodexButton(battalion, "CODEX_SPECIAL_SHIPS", "SPECIAL_SHIPS");
	createCodexButton(battalion, "CODEX_THIS_WORLD", "THIS_WORLD");
	createCodexButton(battalion, "CODEX_IT_HAPPENED", "IT_HAPPENED");
	createCodexButton(battalion, "CODEX_1", "EMPTY");
	createCodexButton(battalion, "CODEX_2", "EMPTY");
	createCodexButton(battalion, "CODEX_3", "EMPTY");
	createCodexButton(battalion, "CODEX_4", "EMPTY");
	createCodexButton(battalion, "CODEX_5", "EMPTY");
	createCodexButton(battalion, "CODEX_6", "EMPTY");
	createCodexButton(battalion, "CODEX_7", "EMPTY");
	createCodexButton(battalion, "CODEX_8", "EMPTY");
	createCodexButton(battalion, "CODEX_9", "EMPTY");
	createCodexButton(battalion, "CODEX_10", "EMPTY");
	createCodexButton(battalion, "CODEX_11", "EMPTY");
	createCodexButton(battalion, "CODEX_12", "EMPTY");
	createCodexButton(battalion, "CODEX_13", "EMPTY");
	createCodexButton(battalion, "CODEX_OPERATION_TZIMTZUM", "OPERATION_TZIMTZUM");
	createCodexButton(battalion, "CODEX_OPERATION_GOLCHAB", "OPERATION_GOLCHAB");
	createCodexButton(battalion, "CODEX_OPERATION_GHAAG_SHEBLAH", "OPERATION_GHAAG_SHEBLAH");
	createCodexButton(battalion, "CODEX_OPERATION_OHR_EIN_ZOF", "OPERATION_OHR_EIN_ZOF");
	createCodexButton(battalion, "CODEX_OPERATION_SAMSON", "OPERATION_SAMSON");
	createCodexButton(battalion, "CODEX_OPERATION_THAUMIEL", "OPERATION_THAUMIEL");
	createCodexButton(battalion, "CODEX_WAR_PLAN_ARMAGEDDON", "WAR_PLAN_ARMAGEDDON");

	createLengthIcon("LoreLengthIcon1");
	createLengthIcon("LoreLengthIcon2");
	createLengthIcon("LoreLengthIcon3");
	createLengthIcon("LoreLengthIcon4");
	createLengthIcon("LoreLengthIcon5");

	createCodexCloseButton(battalion);
	resetCodex(battalion);
}

const createCodexCloseButton = function(battalion) {
	const element = document.getElementById("CODEX_CLOSE_BUTTON");
	const icon = document.getElementById("CodexCloseButton");

	element.onmouseover = () => {
		icon.src = "Assets/Miscellaneous/GenericButtonHovered.png";
	}

	element.onmouseout = () => {
		icon.src = "Assets/Miscellaneous/GenericButton.png";
	}

	element.onmousedown = () => {
		icon.src = "Assets/Miscellaneous/GenericButtonPressed.png";
	}

	element.onclick = () => {
		resetCodex(battalion);
		document.getElementById("Codex").style.visibility = "hidden";
		document.getElementById("MAIN_MENU").style.visibility = "visible";
	}
}

const resetCodex = function(battalion) {
	const { language } = battalion;
	const loreName = document.getElementById("LoreName");
	const loreDesc = document.getElementById("LoreDesc");
	const loreLength = document.getElementById("LoreLength");
	const lorePanel = document.getElementById("LorePanel");
	const loreClose = document.getElementById("LoreClose");

	loreName.innerHTML = "Name";
	loreDesc.innerHTML = "Description";
	loreLength.innerHTML = "Document";
	lorePanel.innerHTML = "";
	loreClose.innerHTML = "Close";

	for(let i = 0; i < LORE_LENGTH_ICONS.length; i++) {
		const icon = document.getElementById(LORE_LENGTH_ICONS[i]);

		icon.src = "Assets/Miscellaneous/DocShadow.PNG";
	}
}

const createLengthIcon = function(iconID) {
	const element = document.getElementById(iconID);

	if(element) {
		element.oncontextmenu = () => {
			Tooltip("TOOLTIP_DOCUMENT_SIZE");
		}

		element.onmouseout = () => {
			document.getElementById("GeneralTooltip").style.visibility = "hidden";
		}
	}
}

const createCodexButton = function(battalion, buttonID, codexID) {
	const { language } = battalion;
	const element = document.getElementById(buttonID);
	const lore = CODEX[codexID];

	if(element && lore) {
		const { DocInfo } = lore;
		const image = document.createElement("img");
		const text = document.createElement("p");

		image.src = "Assets/Miscellaneous/LongPlaque.png";
		element.classList.add("codex_button");
		text.classList.add("codex_button_text");

		language.hook(DocInfo, (tText) => text.textContent = tText);

		element.appendChild(image);
		element.appendChild(text);

		element.onclick = () => {
			DisplayLore(battalion, lore);
		}
	}
}

const DisplayLore = function(battalion, lore){
	const { language } = battalion;
	const { DocName = "", DocDesc = "", DocText = "", DocSize = 0 } = lore;
	const loreName = document.getElementById("LoreName");
	const loreDesc = document.getElementById("LoreDesc");
	const loreLength = document.getElementById("LoreLength");
	const lorePanel = document.getElementById("LorePanel");

	loreName.innerHTML = language.get(DocName);
	loreDesc.innerHTML = language.get(DocDesc);
	loreLength.innerHTML = "";
	lorePanel.innerHTML = "";

	if(DocSize >= 0 && DocSize < DOCUMENT_SIZES.length) {
		loreLength.innerHTML = language.get(DOCUMENT_SIZES[DocSize]);
	} else {
		loreLength.innerHTML = language.get("CODEX_DOCUMENT_SIZE_EMPTY");
	}

	const text = language.get(DocText);
	const processedText = Array.isArray(text) ? text.join("<br><br>") : text;

	lorePanel.innerHTML = processedText;

	for(let i = 0; i < LORE_LENGTH_ICONS.length; i++) {
		const icon = document.getElementById(LORE_LENGTH_ICONS[i]);

		if(DocSize <= i) {
			icon.src = "Assets/Miscellaneous/DocShadow.PNG";
		} else {
			icon.src = "Assets/Miscellaneous/DocIcon.PNG";
		}
	}
}