var DialogueChoice = true;
var IdleAnimChoice = true;
var MystSettChoice = false;

const OptionsMenu = function() {
    this.buttons = [];
}

OptionsMenu.prototype.createButton = function(buttonID) {
    const button = new OptionsButton(buttonID);

    this.buttons.push(button);

    return button;
}

OptionsMenu.prototype.createCloseButton = function() {
    const button = document.getElementById("CloseOptionsButton");

    button.onclick = () => {
        document.getElementById("Options").style.visibility = "hidden";
    }

    button.onmouseover = () => {
        button.src = "Assets/Miscellaneous/CloseButtonHovered.png";
    }

    button.onmouseout = () => {
        button.src = "Assets/Miscellaneous/CloseButton.png";
    }

    button.onmousedown = () => {
        button.src = "Assets/Miscellaneous/CloseButtonPressed.png";
    }
}

OptionsMenu.prototype.init = function(battalion) {
    const { soundPlayer, musicPlayer } = battalion;

    this.createCloseButton();
    
    this.createButton("OPTION_LANGUAGE")
    .setClick((button, event) => {
        document.getElementById('LanguageSelectionPanel').style.visibility = "visible";
    });
    
    this.createButton("OPTION_SOUND")
    .setTooltip("TOOLTIP_OPTION_SOUND")
    .setClick((button, event) => {
        const state = soundPlayer.toggleMute();

        switch(state) {
            case SoundPlayer.STATE.NONE: {
                document.getElementById("ToggleSound").src = "Assets/Miscellaneous/SoundOn.png";
                break;
            }
            case SoundPlayer.STATE.MUTED: {
                document.getElementById("ToggleSound").src = "Assets/Miscellaneous/SoundOff.png";
                break;
            }
        }
    });

    this.createButton("OPTION_MUSIC")
    .setTooltip("TOOLTIP_OPTION_MUSIC")
    .setClick((button, event) => {
        const state = musicPlayer.toggleMute();

        switch(state) {
            case MusicPlayer.STATE.NONE: {
                document.getElementById("ToggleMusic").src = "Assets/Miscellaneous/MusicOn.png";
                break;
            }
            case MusicPlayer.STATE.MUTED: {
                document.getElementById("ToggleMusic").src = "Assets/Miscellaneous/MusicOff.png";
                break;
            }
        }
    });

    this.createButton("OPTION_DIALOGUE")
    .setTooltip("TOOLTIP_OPTION_DIALOGUE")
    .setClick((button, event) => {
		DialogueChoice = !DialogueChoice;
		
        if(DialogueChoice) {
            document.getElementById("ToggleDialogue").src = "Assets/Miscellaneous/DialogueOn.png"
        } else {
            document.getElementById("ToggleDialogue").src = "Assets/Miscellaneous/DialogueOff.png"
			document.getElementById("DialogueBox").style.visibility = "hidden";
		}
    });

    this.createButton("OPTION_IDLE")
    .setTooltip("TOOLTIP_OPTION_IDLE_ANIMATIONS")
    .setClick((button, event) => {
        IdleAnimChoice = !IdleAnimChoice;
		
        if(IdleAnimChoice) {
            document.getElementById("ToggleIdleAnimations").src = "Assets/Miscellaneous/IdleAnimOn.png"
        } else {
            document.getElementById("ToggleIdleAnimations").src = "Assets/Miscellaneous/IdleAnimOff.png"
        }
    });

    this.createButton("OPTION_MYSTERY")
    .setTooltip("TOOLTIP_OPTION_MYSTERY")
    .setClick((button, event) => {
		MystSettChoice = !MystSettChoice;

        if(MystSettChoice) {
            const ZAPPY = 5;

            for(let o = 61; o < 69; o++) {
                Units[o].Speed = ZAPPY;
            }

            document.getElementById("ToggleMysteriousSetting").src = "Assets/Miscellaneous/MysteriousSettingOn.png";
            document.getElementById("Diff1Text").style.top = "30px";
            document.getElementById("Diff2Text").style.top = "67px";
            document.getElementById("Diff3Text").style.top = "104px";
            document.getElementById("Diff1Text").innerHTML = "Justin Bieber";
            document.getElementById("Diff2Text").innerHTML = "Keanu Reeves";
            document.getElementById("Diff3Text").innerHTML = "Chuck Norris";
        } else {
            document.getElementById("ToggleMysteriousSetting").src = "Assets/Miscellaneous/MysteriousSettingOff.png";
            document.getElementById("Diff1Text").style.top = "41px";
            document.getElementById("Diff2Text").style.top = "78px";
            document.getElementById("Diff3Text").style.top = "115px";
            document.getElementById("Diff1Text").innerHTML = Language.SystemTerms[141];
            document.getElementById("Diff2Text").innerHTML = Language.SystemTerms[142];
            document.getElementById("Diff3Text").innerHTML = Language.SystemTerms[143];
        }
    });
}
