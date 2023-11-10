const palindromes = function (string) {
    realString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return realString.split("").reverse().join("") == realString
};

// Do not edit below this line
module.exports = palindromes;

/* 
cari panjang string
loop selama panjang string dengan i berkurang setiap loop
bandingkan setiap huruf pada string dengan huruf terakhir 
*/