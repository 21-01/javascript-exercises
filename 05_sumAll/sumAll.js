const sumAll = function(int1, int2) {
    if (int1 < 0 || int2 < 0) return "ERROR"
    if (!Number.isInteger(int1) || !Number.isInteger(int2)) return "ERROR";
    if (int1 > int2){
        let tmp = int1
        int1 = int2
        int2 = tmp
    }

    var totalSum = 0;
    int1--
    for (i = int1; i <= int2; i++) {
        totalSum = totalSum + i
    };
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
