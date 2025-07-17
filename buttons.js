(() => {
	const button = document.getElementById("GenerateEditorMap");

	button.onclick = () => {
		battalion.setState(Battalion.STATE.MAP_EDITOR);

		for(let i = 1; i <= 10; i++) {
			for(let j = 1; j <= 10; j++) {
				key = document.getElementById("Slot " + i + " X " + j);
				
				if(key) {
					key.remove();
				}
			}
		}
		
		castMapMaker();
	}
})();

(() => {
	const button = document.getElementById("EndBattleCloseButton");

	button.onclick = () => {
		battalion.setState(Battalion.STATE.MAIN_MENU);
		battalion.musicPlayer.playTrack(OPENING_TRACK);

		selectScenario("GREAT_WAR");

		button.src="Assets/Miscellaneous/CloseButtonPressed.png";
		
		for(let a = 1; a < Constants.Commanders.length; a++) {
			let elem = document.getElementById("AnalysisBlock" + Factions[Constants.Commanders[a].Allegiance].Preffix);

			elem.remove();
		}
		
		for(let b = 0; b < Coallitions.length; b++) {
			let elem = document.getElementById("CoallitionTitle" + Coallitions[b]);

			elem.remove();
		}
		
		Factions = CampaignFactions;
		document.getElementById("EndBattleScreen").style.visibility = "hidden";
		
		//Victory gets set to false on endbattle
		if(ChosenMission !== 5 || !Victory) {
			battalion.uiHandler.mainMenu.show();
		}
	}
})();

(() => {
	const button = document.getElementById("DialogueSkip");

	button.onclick = () => {
		button.style.visibility = "hidden";
		document.getElementById("DialogueBox").style.visibility = "hidden";
		
		if(Resolution) {
			EndBattle();
		}
	}
})();

(() => {
	const button = document.getElementById("Illustration");

	button.onclick = () => {
		button.style.visibility = "hidden";
	}
})();

(() => {
	const undoBtn = document.getElementById("UndoBtn");

	undoBtn.onmouseover = () => {
		document.getElementById("BtnSuperscript").innerHTML = Language.SystemTerms[49];
		undoBtn.src= "Assets/Miscellaneous/UndoBtnL.png";
	}

	undoBtn.onmouseout = () => {
		document.getElementById("BtnSuperscript").innerHTML = "";
		undoBtn.src = "Assets/Miscellaneous/UndoBtnS.png";
	}

	undoBtn.onmousedown = () => {
		undoBtn.src = "Assets/Miscellaneous/UndoBtnP.png";
		UndoMove();
	}

	undoBtn.onmouseup = () => {
		undoBtn.src = "Assets/Miscellaneous/UndoBtnS.png"; 
	}
})();

(() => {
	const quitBtn = document.getElementById("QuitBtn");

	quitBtn.onmouseover = () => {
		document.getElementById("BtnSuperscript").innerHTML = Language.SystemTerms[51];
		quitBtn.src= "Assets/Miscellaneous/QuitBtnL.png";
	}

	quitBtn.onmouseout = () => {
		document.getElementById("BtnSuperscript").innerHTML = "";
		quitBtn.src = "Assets/Miscellaneous/QuitBtnS.png";
	}

	quitBtn.onmousedown = () => {
		quitBtn.src = "Assets/Miscellaneous/QuitBtnP.png";
		Battle_Lost();
	}

	quitBtn.onmouseup = () => {
		quitBtn.src = "Assets/Miscellaneous/QuitBtnS.png"; 
	}
})();

(() => {
	const menuBtn = document.getElementById("MenuBtn");

	menuBtn.onmouseover = () => {
		document.getElementById("BtnSuperscript").innerHTML = Language.SystemTerms[50];
		menuBtn.src= "Assets/Miscellaneous/MenuBtnL.png";
	}

	menuBtn.onmouseout = () => {
		document.getElementById("BtnSuperscript").innerHTML = "";
		menuBtn.src = "Assets/Miscellaneous/MenuBtnS.png";
	}

	menuBtn.onmousedown = () => {
		menuBtn.src = "Assets/Miscellaneous/MenuBtnP.png";
		document.getElementById("Options").style.visibility = "visible";
	}

	menuBtn.onmouseup = () => {
		menuBtn.src = "Assets/Miscellaneous/MenuBtnS.png"; 
	}
})();

(() => {
	const glassplates = ["Glassplate1", "Glassplate2", "Glassplate3", "Glassplate4"];

	for(let i = 0; i < glassplates.length; i++) {
		const glassplate = document.getElementById(glassplates[i]);

		glassplate.onclick = () => {
			FactionInformations(i + 1);
		}

		glassplate.onmouseout = () => {
			document.getElementById("FactionDetails").style.visibility = "hidden";
		}
	}
})();

(() => {
	const endTurnButton = document.getElementById("EndTurnButton");

	endTurnButton.onmouseover = () => {
		endTurnButton.src = "Assets/Miscellaneous/EndTurnButtonHovered.png";
	}

	endTurnButton.onmouseout = () => {
		endTurnButton.src = "Assets/Miscellaneous/EndTurnButton.png";
	}

	endTurnButton.onmousedown = () => {
		endTurnButton.src = "Assets/Miscellaneous/EndTurnButtonPressed.png";
	}

	endTurnButton.onclick = () => {
		if(!isAITurn) {
			EndTurn(SubRosters, Map, Constants, MapRoster);
		}
	}
})();

(() => {
	const commanderCollider = document.getElementById("CommanderCollider");

	commanderCollider.onmouseover = () => {
		ShowCharacterBio();
	}

	commanderCollider.onmouseout = () => {
		document.getElementById("CommanderBio").style.visibility = "hidden";
	}
})();

(() => {
	document.getElementById("LANGUAGE_CLOSE_BUTTON").onclick = () => document.getElementById("LanguageSelectionPanel").style.visibility = "hidden";

	document.getElementById("LANGUAGE_ENGLISH").onclick = () => selectLanguage(battalion, Battalion.LANGUAGE.ENGLISH);
	document.getElementById("LANGUAGE_SPANISH").onclick = () => selectLanguage(battalion, Battalion.LANGUAGE.SPANISH);
	document.getElementById("LANGUAGE_PORTUGUESE").onclick = () => selectLanguage(battalion, Battalion.LANGUAGE.PORTUGUESE);
	document.getElementById("LANGUAGE_ROMANIAN").onclick = () => selectLanguage(battalion, Battalion.LANGUAGE.ROMANIAN);
	document.getElementById("LANGUAGE_TURKISH").onclick = () => selectLanguage(battalion, Battalion.LANGUAGE.TURKISH);

	document.getElementById("LANGUAGE_SHORT_ENGLISH").onclick = () => selectLanguage(battalion, Battalion.LANGUAGE.ENGLISH);
	document.getElementById("LANGUAGE_SHORT_SPANISH").onclick = () => selectLanguage(battalion, Battalion.LANGUAGE.SPANISH);
	document.getElementById("LANGUAGE_SHORT_PORTUGUESE").onclick = () => selectLanguage(battalion, Battalion.LANGUAGE.PORTUGUESE);
	document.getElementById("LANGUAGE_SHORT_ROMANIAN").onclick = () => selectLanguage(battalion, Battalion.LANGUAGE.ROMANIAN);
	document.getElementById("LANGUAGE_SHORT_TURKISH").onclick = () => selectLanguage(battalion, Battalion.LANGUAGE.TURKISH);
})();