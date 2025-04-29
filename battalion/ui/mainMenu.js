const MainMenu = function(elementID) {
    this.element = document.getElementById(elementID);
    this.buttons = new Map();
}

MainMenu.prototype.hide = function() {
    this.element.style.visibility = "hidden";
}

MainMenu.prototype.show = function() {
    this.element.style.visibility = "visible";
}

MainMenu.prototype.addButton = function(button) {
    const { id } = button;

    if(this.buttons.has(id)) {
        return;
    }

    this.buttons.set(id, button);
}

MainMenu.prototype.updateLanguageTags = function(context) {
    const { language } = context;

    this.buttons.get("CAMPAIGN_BUTTON").text.innerText = Language.SystemTerms[6];
    this.buttons.get("BOOT_CAMP_BUTTON").text.innerText = Language.SystemTerms[7];
    this.buttons.get("CONTINUE_BUTTON").text.innerText = Language.SystemTerms[8];
    this.buttons.get("OPTIONS_BUTTON").text.innerText = Language.SystemTerms[9];
    this.buttons.get("CREDITS_BUTTON").text.innerText = Language.SystemTerms[10];
    this.buttons.get("BONUS_BUTTON").text.innerText = Language.SystemTerms[11];
    this.buttons.get("CONQUEST_BUTTON").text.innerText = Language.SystemTerms[12];
    this.buttons.get("EDITOR_BUTTON").text.innerText = Language.SystemTerms[13];
    this.buttons.get("CODEX_BUTTON").text.innerText = Language.SystemTerms[14];
}

MainMenu.prototype.init = function() {
    const campaignButton = new MainMenuButton("CAMPAIGN_BUTTON", "Campaign")
    .init("TOOLTIP_CAMPAIGN")
    .click((button) => {
        this.hide();
        document.getElementById('CampaignSelectionScreen').style.visibility = 'visible';
    });

    const continueButton = new MainMenuButton("CONTINUE_BUTTON", "Continue")
    .init("TOOLTIP_CONTINUE")
    .disable()
    .click((button) => {
        //this.hide();
        alert("Work in progress!");
    });

    const bootCampButton = new MainMenuButton("BOOT_CAMP_BUTTON", "Tutorial")
    .init("TOOLTIP_BOOTCAMP")
    .click((button) => {
        TutorialLevel = 0;
        this.hide();
        document.getElementById('Tutorial Levels').style.visibility = 'visible';
    });

    const creditsButton = new MainMenuButton("CREDITS_BUTTON", "Credits")
    .init("TOOLTIP_CREDITS")
    .click((button) => {
        document.getElementById('Credits').style.visibility = 'visible';
    });

    const optionsButton = new MainMenuButton("OPTIONS_BUTTON", "Options")
    .init("TOOLTIP_OPTIONS")
    .click((button) => {
        document.getElementById('Options').style.visibility = 'visible';
    });

    const bonusButton = new MainMenuButton("BONUS_BUTTON", "Bonus")
    .init("TOOLTIP_BONUS_LEVELS")
    .click((button) => {
        this.hide();
        document.getElementById('Special Levels').style.visibility = 'visible';
        NivelVizat = Samara;
    });

    const editorButton = new MainMenuButton("EDITOR_BUTTON", "Editor")
    .init("TOOLTIP_MAP_EDITOR")
    .click((button) => {
        document.getElementById('MapMold').style.visibility = 'visible';
    });

    const conquestButton = new MainMenuButton("CONQUEST_BUTTON", "Conquest")
    .init("TOOLTIP_CONQUEST")
    .disable()
    .click((button) => {
        //this.hide();
        alert("Work in progress!");
    });

    const codexButton = new MainMenuButton("CODEX_BUTTON", "Lore")
    .init("TOOLTIP_CODEX")
    .click((button) => {
        this.hide();
        document.getElementById('Codex').style.visibility = 'visible';
    });

    this.addButton(campaignButton);
    this.addButton(continueButton);
    this.addButton(bootCampButton);
    this.addButton(creditsButton);
    this.addButton(optionsButton);
    this.addButton(bonusButton);
    this.addButton(editorButton);
    this.addButton(conquestButton);
    this.addButton(codexButton);
}