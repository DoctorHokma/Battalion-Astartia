const PrettyList = function(type) {
    this.type = type;
    this.writes = 0;
}

PrettyList.TYPE = {
    OBJECT: 0,
    ARRAY: 1
};

PrettyList.prototype.setType = function(type) {
    switch(type) {
        case PrettyList.TYPE.OBJECT: {
            this.type = PrettyList.TYPE.OBJECT;
            break;
        }
        case PrettyList.TYPE.ARRAY: {
            this.type = PrettyList.TYPE.ARRAY;
            break;
        }
        default: {
            this.type = PrettyList.TYPE.OBJECT;
            break;
        }
    }
}

PrettyList.prototype.getNewLineStatement = function() {
    if(this.writes > 0) {
        return ",\n";
    } else {
        return "";
    }
}

PrettyList.prototype.getOpenStatementUnnamed = function() {
    switch(this.type) {
        case PrettyList.TYPE.OBJECT: return "{\n";
        case PrettyList.TYPE.ARRAY: return "[\n";
        default: return "{\n";
    }
}

PrettyList.prototype.getOpenStatement = function(id) {
    switch(this.type) {
        case PrettyList.TYPE.OBJECT: return `"${id}": {\n`;
        case PrettyList.TYPE.ARRAY: return `"${id}": [\n`;
        default: return `"${id}": {\n`;
    }
}

PrettyList.prototype.getCloseStatement = function() {
    switch(this.type) {
        case PrettyList.TYPE.OBJECT: return '}';
        case PrettyList.TYPE.ARRAY: return ']';
        default: return '}';
    }
}

PrettyList.prototype.addWrite = function() {
    this.writes++;
}

PrettyList.prototype.reset = function() {
    this.writes = 0;
}