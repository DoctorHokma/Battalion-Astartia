const BattalionCamera = function() {
    Camera2D.call(this);

    this.image = new BattalionSprite("test.png");
    this.image.autoCalcFrames(1, 1, 56, 56, 4, 6);
    this.image.loadImage()
    .then(() => {
        this.image.addType("BLUE", SCHEMAS.BLUE);
        this.image.addType("GREEN", SCHEMAS.GREEN);
        this.image.addType("YELLOW", SCHEMAS.YELLOW);
        this.image.addType("DARK_RED", SCHEMAS.DARK_RED);
    });
}

BattalionCamera.prototype = Object.create(Camera2D.prototype);
BattalionCamera.prototype.constructor = BattalionCamera;

BattalionCamera.prototype.update = function(gameContext, renderContext) {
    this.image.drawFrame(renderContext, "1", "DEFAULT", 0, 0);
    this.image.drawFrame(renderContext, "2", "BLUE", 0, 56);
    this.image.drawFrame(renderContext, "3", "GREEN", 0, 56 * 2);
    this.image.drawFrame(renderContext, "4", "YELLOW", 0, 56 * 3);
    this.image.drawFrame(renderContext, "5", "DARK_RED", 0, 56 * 4);

    this.image.drawFull(renderContext, "DARK_RED", 0, 56 * 5);
}