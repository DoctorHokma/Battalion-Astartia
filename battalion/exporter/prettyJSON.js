const PrettyJSON = function(spacing) {
    this.depth = 0;
    this.spacing = spacing;
    this.jsonString = "";
    this.openLists = [];
    this.mainList = new PrettyList(PrettyList.TYPE.OBJECT);
}

PrettyJSON.prototype.pad = function(depth) {
    const whitespace = depth * this.spacing;

    for(let i = 0; i < whitespace; i++) {
        this.jsonString += " ";
    }
}

PrettyJSON.prototype.newLine = function(depth) {
    if(this.openLists.length === 0) {
        this.jsonString += this.mainList.getNewLineStatement();
    } else {
        const list = this.openLists[this.openLists.length - 1];
        this.jsonString += list.getNewLineStatement();
    }

    this.pad(depth);
}

PrettyJSON.prototype.newEmptyLine = function(depth) {
    this.jsonString += "\n";
    this.pad(depth);
}

PrettyJSON.prototype.getJoinString = function() {
    const whitespace = this.depth * this.spacing;
    let join = ",\n";

    for(let i = 0; i < whitespace; i++) {
        join += " ";
    }

    return join;
}

PrettyJSON.prototype.open = function(depth = 0, type, name) {
    this.pad(depth);
    this.depth = depth + 1;
    this.mainList.setType(type);

    if(name) {
        this.jsonString += this.mainList.getOpenStatement(name);
    } else {
        this.jsonString += this.mainList.getOpenStatementUnnamed();
    }

    return this;
}

PrettyJSON.prototype.close = function() {
    while(this.openLists.length !== 0) {
        this.closeList();
    }

    this.depth--;
    this.newEmptyLine(this.depth);
    this.jsonString += this.mainList.getCloseStatement();

    return this;
}

PrettyJSON.prototype.openListUnnamed = function(type = PrettyList.TYPE.OBJECT) {
    const list = new PrettyList(type);

    this.newLine(this.depth);
    this.jsonString += list.getOpenStatementUnnamed();
    this.openLists.push(list);
    this.depth++;

    return this;
}

PrettyJSON.prototype.openList = function(id, type = PrettyList.TYPE.OBJECT) {
    const list = new PrettyList(type);

    this.newLine(this.depth);
    this.jsonString += list.getOpenStatement(id);
    this.openLists.push(list);
    this.depth++;

    return this;
}

PrettyJSON.prototype.closeList = function() {
    if(this.openLists.length === 0) {
        return this;
    }

    const list = this.openLists.pop();

    this.depth--;
    this.newEmptyLine(this.depth);
    this.jsonString += list.getCloseStatement();

    if(this.openLists.length === 0) {
        this.mainList.addWrite();
    } else {
        this.openLists[this.openLists.length - 1].addWrite();
    }

    return this;
}

PrettyJSON.prototype.writeLine = function(id, data) {
    this.newLine(this.depth);
    this.jsonString += `"${id}": ${JSON.stringify(data)}`;

    if(this.openLists.length === 0) {
        this.mainList.addWrite();
    } else {
        this.openLists[this.openLists.length - 1].addWrite();
    }

    return this;
}

PrettyJSON.prototype.writeList = function(id, jsonStrings, type) {
    this.openList(id, type);
    this.pad(this.depth);

    const joinString = this.getJoinString();
    const joined = jsonStrings.join(joinString);

    this.jsonString += joined;
    this.closeList();

    return this;
}

PrettyJSON.prototype.build = function() {
    return this.jsonString;
}

PrettyJSON.prototype.reset = function() {
    this.depth = 0;
    this.openLists = [];
    this.jsonString = "";
    this.mainList.reset();

    return this;
}

PrettyJSON.prototype.download = function(filename) {
    const blob = new Blob([this.jsonString], { type: "text/json" });
    const link = document.createElement("a");
  
    link.download = `${filename}.json`;
    link.href = window.URL.createObjectURL(blob);
    link.dataset.downloadurl = ["text/json", link.download, link.href].join(":");
  
    const evt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
    });
  
    link.dispatchEvent(evt);
    link.remove();

    return this;
}