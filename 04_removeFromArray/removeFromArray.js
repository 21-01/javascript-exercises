const removeFromArray = function(array, ...value) {
    var newArray = [];
    array.forEach(item => {
        if (!value.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
