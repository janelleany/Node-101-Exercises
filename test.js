var assert = require("assert");
var printNumbers = require("./printNumbers");
var printSquare = require("./printSquare");


var testArray = [1, 2, 3];
var testString = "**\n**\n";

assert.deepEqual(printNumbers.doPrintNumbers(1, 3), testArray, "it's not working");
assert.deepEqual(printSquare.doPrintSquare(2), testString, "this isn't working");



