const reverseString = function(string) {
    let result = '';
    let reverted = string.split('');
    reverted = reverted.reverse();
    for(i of reverted){
        result += i
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
