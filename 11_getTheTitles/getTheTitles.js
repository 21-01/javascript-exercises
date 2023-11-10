const getTheTitles = function(arrays) {
    var results = []
    for (let index = 0; index < arrays.length; index++) {
        results[index] = arrays[index].title
    }
    return results
};

// Do not edit below this line
module.exports = getTheTitles;
