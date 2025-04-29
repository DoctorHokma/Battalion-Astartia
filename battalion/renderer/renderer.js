const Renderer = function() {
    this.contexts = [];
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;

	this.display = new Display();
    this.display.fromDocument("RENDERER");

    this.events = new EventEmitter();
    this.events.listen(Renderer.EVENT.SCREEN_RESIZE);
    this.events.listen(Renderer.EVENT.CONTEXT_CREATE);
    this.events.listen(Renderer.EVENT.CONTEXT_DESTROY);

    window.addEventListener("resize", () => this.resizeDisplay(window.innerWidth, window.innerHeight));
}

Renderer.EVENT = {
    SCREEN_RESIZE: "SCREEN_RESIZE",
    CONTEXT_CREATE: "CONTEXT_CREATE",
    CONTEXT_DESTROY: "CONTEXT_DESTROY"
};

Renderer.DEBUG = {
    CONTEXT: 1,
    SPRITES: 1,
    MAP: 1
};

Renderer.FPS_COLOR = {
    BAD: "#ff0000",
    GOOD: "#00ff00"
};

Renderer.prototype.update = function(gameContext) {
    const { timer } = gameContext; 
    const display = this.display.context;

    this.display.clear();

    for(let i = 0; i < this.contexts.length; i++) {
        const context = this.contexts[i];

        display.save();
        context.update(gameContext, display);
        display.restore();
    }

    if(Renderer.DEBUG.CONTEXT) {
        this.drawContextDebug();
    }

    this.drawFPS(display, timer);
}

Renderer.prototype.drawFPS = function(context, timer) {
    const fps = timer.getFPS();
    const text = `FPS: ${Math.round(fps)}`;

    if(fps >= 60) {
        context.fillStyle = Renderer.FPS_COLOR.GOOD;
    } else {
        context.fillStyle = Renderer.FPS_COLOR.BAD;
    }
    
    context.fillText(text, 0, 10);
}

Renderer.prototype.getContext = function(contextID) {
    for(let i = 0; i < this.contexts.length; i++) {
        const context = this.contexts[i];
        const id = context.getID();

        if(id === contextID) {
            return context;
        }
    }

    return null;
}

Renderer.prototype.hasContext = function(contextID) {
    for(let i = 0; i < this.contexts.length; i++) {
        const context = this.contexts[i];
        const id = context.getID();

        if(id === contextID) {
            return true;
        }
    }

    return false;
}

Renderer.prototype.createContext = function(contextID, camera) {
    if(this.hasContext(contextID) || !(camera instanceof Camera)) {
        return null;
    }

    const context = new CameraContext(contextID, camera);

    camera.setViewportSize(this.windowWidth, this.windowHeight);
    context.setWindow(this.windowWidth, this.windowHeight);

    this.contexts.push(context);
    this.events.emit(Renderer.EVENT.CONTEXT_CREATE, contextID, context);

    return context;
}

Renderer.prototype.destroyContext = function(contextID) {
    for(let i = 0; i < this.contexts.length; i++) {
        const context = this.contexts[i];
        const id = context.getID();

        if(id === contextID) {
            this.contexts.splice(i, 1);
            this.events.emit(Renderer.EVENT.CONTEXT_DESTROY, contextID);
            return;
        }
    }
}

Renderer.prototype.drawContextDebug = function() {
    this.display.context.strokeStyle = "#eeeeee";
    this.display.context.lineWidth = 3;

    for(let i = 0; i < this.contexts.length; i++) {
        const context = this.contexts[i];
        const { x, y, w, h } = context.getBounds();

        this.display.context.strokeRect(x, y, w, h);
    }
}

Renderer.prototype.resizeDisplay = function(width, height) {
    this.windowWidth = width;
    this.windowHeight = height;
    this.display.onWindowResize(width, height);

    for(let i = 0; i < this.contexts.length; i++) {
        const context = this.contexts[i];

        context.onWindowResize(this.display.width, this.display.height);
    }

    this.events.emit(Renderer.EVENT.SCREEN_RESIZE, width, height);
}

Renderer.prototype.getWindow = function() {
    return {
        "w": this.windowWidth,
        "h": this.windowHeight
    }
}

Renderer.prototype.getCollidedContext = function(mouseX, mouseY, mouseRange) {
    const collideX = mouseX - this.display.positionX;
    const collideY = mouseY - this.display.positionY;

    for(let i = this.contexts.length - 1; i >= 0; i--) {
        const context = this.contexts[i];
        const { x, y, w, h } = context.getBounds();
        const isColliding = MathHelper.isRectangleRectangleIntersect(
            x, y, w, h,
            collideX, collideY, mouseRange, mouseRange
        );

        if(isColliding) {
            return context;
        }
    }

    return null;
}
