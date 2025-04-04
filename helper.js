const clampValue = function(value, min, max) {
    if(value < min) {
        return min;
    } else if(value > max) {
        return max;
    }

    return value;
}

const resolvePath = function(directory, source) {
    let path = "";
    
    for(let i = 0; i < directory.length; i++) {
        const folder = directory[i];

        path += folder;
        path += "/";
    }

    path += source;

    return path;
}