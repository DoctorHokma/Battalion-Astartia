const BattalionSprite = function(path, frames) {
    this.path = path;
    this.frames = frames;
    this.state = BattalionSprite.STATE.NONE;
    this.imageData = null;
    this.types = new Map();
    this.reservedTypes = new Set();
}

BattalionSprite.STATE = {
    NONE: 0,
    LOADING: 1,
    LOADED: 2
};

BattalionSprite.DEFAULT = {
    BITMAP_ID: "DEFAULT"
};

BattalionSprite.ERROR = {
    NO_PATH: "NO_PATH",
    LOADING: "LOADING",
    LOADED: "LOADED",
    NOT_LOADED: "NOT_LOADED",
    RESERVED: "RESERVED",
    ERROR: "ERROR"
}

BattalionSprite.prototype.autoCalcFrames = function(startX, startY, frameWidth, frameHeight, rows, columns) {
    this.frames = {};
    let id = 1;

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            this.frames[id++] = {
                "x": startX + j * frameWidth,
                "y": startY + i * frameWidth,
                "w": frameWidth,
                "h": frameHeight
            }
        }
    }
}

BattalionSprite.prototype.drawFull = function(context, typeID, renderX, renderY) {
    let bitmap = this.types.get(typeID);

    if(bitmap) {
        context.drawImage(bitmap, 0, 0, this.imageData.width, this.imageData.height, renderX, renderY, this.imageData.width, this.imageData.height);
        return;
    }

    bitmap = this.types.get(BattalionSprite.DEFAULT.BITMAP_ID);

    if(bitmap) {
        context.drawImage(bitmap, 0, 0, this.imageData.width, this.imageData.height, renderX, renderY, this.imageData.width, this.imageData.height);
        return;
    }
}

BattalionSprite.prototype.drawFrame = function(context, frameID, typeID, renderX, renderY) {
    const frame = this.frames[frameID];

    if(!frame) {
        return;
    }

    const { x, y, w, h } = frame;
    let bitmap = this.types.get(typeID);

    if(bitmap) {
        context.drawImage(bitmap, x, y, w, h, renderX, renderY, w, h);
        return;
    }

    bitmap = this.types.get(BattalionSprite.DEFAULT.BITMAP_ID);

    if(bitmap) {
        context.drawImage(bitmap, x, y, w, h, renderX, renderY, w, h);
        return;
    }
}

BattalionSprite.prototype.loadImage = function() {
    if(!this.path || this.state !== BattalionSprite.STATE.NONE) {
        return Promise.reject(BattalionSprite.ERROR.NO_PATH);
    }

    if(this.state === BattalionSprite.STATE.LOADING) {
        return Promise.reject(BattalionSprite.ERROR.LOADING);
    }

    if(this.state === BattalionSprite.STATE.LOADED) {
        return Promise.reject(BattalionSprite.ERROR.LOADED);
    }

    this.state = BattalionSprite.STATE.LOADING;
    
    return new Promise((resolve, reject) => {
        const image = new Image();

        image.src = this.path;

        image.onerror = () => {
            this.state = BattalionSprite.STATE.NONE;
            reject(BattalionSprite.ERROR.ERROR);
        }

        image.onload = () => {
            this.onImageLoad(image);
            resolve(this);
        }
    });
}

BattalionSprite.prototype.onImageLoad = function(image) {
    const { width, height } = image;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0);

    const imageData = ctx.getImageData(0, 0, width, height);

    this.imageData = imageData;
    this.state = BattalionSprite.STATE.LOADED;

    createImageBitmap(this.imageData).then(bitmap => this.types.set(BattalionSprite.DEFAULT.BITMAP_ID, bitmap));
}

BattalionSprite.prototype.addType = function(typeID, colorMap) {
    if(this.state !== BattalionSprite.STATE.LOADED) {
        return Promise.reject(BattalionSprite.ERROR.NOT_LOADED);
    }

    if(this.reservedTypes.has(typeID) || this.types.has(typeID)) {
        return Promise.reject(BattalionSprite.ERROR.RESERVED);
    }

    this.reservedTypes.add(typeID);

    return this.mapColors(colorMap).then(bitmap => {
        this.reservedTypes.delete(typeID);
        this.types.set(typeID, bitmap);
    });
}

BattalionSprite.prototype.mapColors = function(colorMap) {
    if(!this.imageData || !this.frames) {
        return Promise.reject(BattalionSprite.ERROR.ERROR);
    }
    
    const { data, width, height } = this.imageData;
    const copy = new Uint8ClampedArray(data.length);

    copy.set(data);

    for(const frameID in this.frames) {
        const { x, y, w, h } = this.frames[frameID];

        this.mapFrame(copy, width, colorMap, x, y, w, h);
    }

    const mappedData = new ImageData(copy, width, height);

    return createImageBitmap(mappedData);
}

BattalionSprite.prototype.mapFrame = function(buffer, bufferWidth, colorMap, frameX, frameY, frameW, frameH) {
    for(let i = 0; i < frameH; i++) {
        const rowStart = (frameY + i) * bufferWidth + frameX;

        for(let j = 0; j < frameW; j++) {
            const index = (rowStart + j) * 4;

            const r = buffer[index];
            const g = buffer[index + 1];
            const b = buffer[index + 2];
            
            const colorKey = (r << 16) | (g << 8) | b;
            const mappedColor = colorMap[colorKey];

            if(mappedColor) {
                const [nr, ng, nb] = mappedColor;

                buffer[index] = nr;
                buffer[index + 1] = ng;
                buffer[index + 2] = nb;
            }
        }
    }
}