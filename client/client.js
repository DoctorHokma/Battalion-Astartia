const Client = function() {
    this.router = new InputRouter();
    this.keyboard = new Keyboard();
    this.cursor = new Cursor();

    this.createKeyboardListener(Keyboard.EVENT.KEY_PRESSED, InputRouter.PREFIX.DOWN);
    this.createKeyboardListener(Keyboard.EVENT.KEY_RELEASED, InputRouter.PREFIX.UP);
    this.createMouseListener(Cursor.EVENT.BUTTON_DOWN, InputRouter.PREFIX.DOWN);
    this.createMouseListener(Cursor.EVENT.BUTTON_CLICK, InputRouter.PREFIX.UP);
}

Client.BUTTON_MAP = {
    [Cursor.BUTTON.LEFT]: InputRouter.CURSOR_INPUT.M1,
    [Cursor.BUTTON.MIDDLE]: InputRouter.CURSOR_INPUT.M3,
    [Cursor.BUTTON.RIGHT]: InputRouter.CURSOR_INPUT.M2
};

Client.prototype.createKeyboardListener = function(eventID, prefixID) {    
    this.keyboard.events.on(eventID, (keyID) => {
        this.router.handleInput(prefixID, keyID);
    }, { permanent: true });
}

Client.prototype.createMouseListener = function(eventID, prefixID) {
    this.cursor.events.on(eventID, (buttonID) => {
        const inputID = Client.BUTTON_MAP[buttonID];

        if(inputID !== undefined) {
            this.router.handleInput(prefixID, inputID);
        }
    }, { permanent: true });
}

Client.prototype.update = function() {
    this.keyboard.update();
    this.cursor.update();
}