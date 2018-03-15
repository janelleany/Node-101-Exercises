var printNumbers = function(startNumber, endNumber) {
    var arrayForTesting = [];
    for (var currentNumber = startNumber; currentNumber < endNumber + 1; currentNumber++) {
        arrayForTesting.push(currentNumber);
        console.log(currentNumber);
    }
    return arrayForTesting;
}

exports.doPrintNumbers = printNumbers;
