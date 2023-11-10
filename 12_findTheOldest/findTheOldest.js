var findTheOldest = function(arrays) {
    var tmpObj = {}
    for (let index = 0; index < arrays.length; index++) {
        if (!("yearOfDeath" in arrays[index])) arrays[index].yearOfDeath = 2023
        var name = arrays[index].name
        var age = arrays[index].yearOfDeath - arrays[index].yearOfBirth
        tmpObj[name] = age
    }
    console.log(tmpObj)
    var sorted = []
    for (name in tmpObj){
        sorted.push([name, tmpObj[name]])
    }
    
    sorted.sort(function(a, b) {
        return b[1] - a[1];
    });
    console.log(sorted)
    return sorted[0][0]
};
//findTheOldest(people)

// Do not edit below this line
module.exports = findTheOldest;
