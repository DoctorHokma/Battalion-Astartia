var DialogueChoice = true;
var IdleAnimChoice = true;
var MystSettChoice = false;

const OptionsMenu = function() {
    GenericMenu.call(this, "Options");

    this.closeButton = UIHelpers.createGenericButton("CloseOptionsButton");
}

OptionsMenu.prototype = Object.create(GenericMenu.prototype);
OptionsMenu.prototype.constructor = OptionsMenu;

OptionsMenu.prototype.onLanguageSwitch = function(handler) {
    this.closeButton.setText(handler.get("SYSTEM_BUTTON_CLOSE"));
}

OptionsMenu.prototype.createButton = function(buttonID) {
    const button = new OptionsButton(buttonID);

    this.buttons.push(button);

    return button;
}

OptionsMenu.prototype.init = function(battalion) {
    const { soundPlayer, musicPlayer } = battalion;

    this.createButton("OPTION_LANGUAGE")
    .setSources("Assets/Miscellaneous/LanguageButton.png", null)
    .addClick(() => {
        document.getElementById("LanguageSelectionPanel").style.visibility = "visible";
    });
    
    this.createButton("OPTION_SOUND")
    .setTooltip("TOOLTIP_OPTION_SOUND")
    .setSources("Assets/Miscellaneous/SoundOn.png", "Assets/Miscellaneous/SoundOff.png")
    .addClick((button) => {
        const state = soundPlayer.toggleMute();

        switch(state) {
            case SoundPlayer.STATE.NONE: {
                button.enable();
                break;
            }
            case SoundPlayer.STATE.MUTED: {
                button.disable();
                break;
            }
        }
    });

    this.createButton("OPTION_MUSIC")
    .setTooltip("TOOLTIP_OPTION_MUSIC")
    .setSources("Assets/Miscellaneous/MusicOn.png", "Assets/Miscellaneous/MusicOff.png")
    .addClick((button) => {
        const state = musicPlayer.toggleMute();

        switch(state) {
            case MusicPlayer.STATE.NONE: {
                button.enable();
                break;
            }
            case MusicPlayer.STATE.MUTED: {
                button.disable();
                break;
            }
        }
    });

    this.createButton("OPTION_DIALOGUE")
    .setTooltip("TOOLTIP_OPTION_DIALOGUE")
    .setSources("Assets/Miscellaneous/DialogueOn.png", "Assets/Miscellaneous/DialogueOff.png")
    .addClick((button) => {
		DialogueChoice = !DialogueChoice;
		
        if(DialogueChoice) {
            button.enable();
        } else {
            button.disable();
			document.getElementById("DialogueBox").style.visibility = "hidden";
		}
    });

    this.createButton("OPTION_IDLE")
    .setTooltip("TOOLTIP_OPTION_IDLE_ANIMATIONS")
    .setSources("Assets/Miscellaneous/IdleAnimOn.png", "Assets/Miscellaneous/IdleAnimOff.png")
    .addClick((button) => {
        IdleAnimChoice = !IdleAnimChoice;
		
        if(IdleAnimChoice) {
            button.enable();
        } else {
            button.disable();
        }
    });

    this.createButton("OPTION_MYSTERY")
    .setTooltip("TOOLTIP_OPTION_MYSTERY")
    .setSources("Assets/Miscellaneous/MysteriousSettingOn.png", "Assets/Miscellaneous/MysteriousSettingOff.png")
    .disable()
    .addClick((button) => {
		MystSettChoice = !MystSettChoice;

        if(MystSettChoice) {
            const ZAPPY = 5;

            for(let o = 61; o < 69; o++) {
                Units[o].Speed = ZAPPY;
            }

            button.enable();
            document.getElementById("Diff1Text").style.top = "30px";
            document.getElementById("Diff2Text").style.top = "67px";
            document.getElementById("Diff3Text").style.top = "104px";
            document.getElementById("Diff1Text").innerHTML = "Justin Bieber";
            document.getElementById("Diff2Text").innerHTML = "Keanu Reeves";
            document.getElementById("Diff3Text").innerHTML = "Chuck Norris";
        } else {
            button.disable();
            document.getElementById("Diff1Text").style.top = "41px";
            document.getElementById("Diff2Text").style.top = "78px";
            document.getElementById("Diff3Text").style.top = "115px";
            document.getElementById("Diff1Text").innerHTML = Language.SystemTerms[141];
            document.getElementById("Diff2Text").innerHTML = Language.SystemTerms[142];
            document.getElementById("Diff3Text").innerHTML = Language.SystemTerms[143];
        }
    });

   this.closeButton.addClick(() => {
        this.hide();
    });
}
