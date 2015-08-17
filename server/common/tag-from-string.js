module.exports = getTagsFromString = function(tags) {
    var result = tags.split(',');
    result = result.map(function(word) {
        return word.trim().replace('#', '');
    });
    return result;
};
