const DOCUMENT_SIZES = [
    "CODEX_DOCUMENT_SIZE_EMPTY",
    "CODEX_DOCUMENT_SIZE_VERY_SHORT",
    "CODEX_DOCUMENT_SIZE_SHORT",
    "CODEX_DOCUMENT_SIZE_NORMAL",
    "CODEX_DOCUMENT_SIZE_LONG",
    "CODEX_DOCUMENT_SIZE_VERY_LONG"
];

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
		text.textContent = language.get(DocInfo);

		language.events.on(LanguageHandler.EVENT.LANGUAGE_SWITCH, () => {
			text.textContent = language.get(DocInfo);
		});

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