const fibonacci = function(num) {
    if (num < 0) return "OOPS"
    if (num === 0) return 0
    var first = 1
    var second = 0
    for (i = 2; i <= num; i++){
        var latest = first + second
        second = first
        first = latest
    }
    return first
};

// Do not edit below this line
module.exports = fibonacci;
