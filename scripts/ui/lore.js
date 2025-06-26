const DOCUMENT_SIZES = [
    "CODEX_DOCUMENT_SIZE_EMPTY",
    "CODEX_DOCUMENT_SIZE_VERY_SHORT",
    "CODEX_DOCUMENT_SIZE_SHORT",
    "CODEX_DOCUMENT_SIZE_NORMAL",
    "CODEX_DOCUMENT_SIZE_LONG",
    "CODEX_DOCUMENT_SIZE_VERY_LONG"
];

const initCodex = function(battalion) {
	const { language } = battalion;
	//initializes the codex and adds hooks to the language handler

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
}

const resetCodex = function() {
	//When closing the codex, it gets reset to its original state!
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

const DisplayLoreLength = function(DocSize) {
	const FIRST_ICON_ID = 1;
	const LAST_ICON_ID = 5;

	for(let i = FIRST_ICON_ID; i <= LAST_ICON_ID; i++) {
		const lengthIconID = "LoreLengthIcon" + i;
		const lengthIcon = document.getElementById(lengthIconID);

		if(DocSize < i) {
			lengthIcon.src = "Assets/Miscellaneous/DocShadow.PNG";
		} else {
			lengthIcon.src = "Assets/Miscellaneous/DocIcon.PNG";
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

	DisplayLoreLength(DocSize);
}