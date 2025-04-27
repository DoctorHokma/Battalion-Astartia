const SaveHandler = function() {}

SaveHandler.prototype.loadStoryProgress = function(battalion, progress) {
    const { story } = battalion;

    if(!progress) {
        return;
    }

    story.load(progress);
}

SaveHandler.prototype.saveStoryProgress = function(battalion) {
    const { story } = battalion;
    const storyData = story.save();

    return storyData;
}