var assert = require("assert");
var printNumbers = require("./printNumbers");
var printSquare = require("./printSquare");
var printBox = require("./printBox");


var testArray = [1, 2, 3];
var squareTestString = "**\n**\n";
var fullRowTestString = "******";
var hollowRowTestString = "*    *";

assert.deepEqual(printNumbers.doPrintNumbers(1, 3), testArray, "it's not working");
assert.deepEqual(printSquare.doPrintSquare(2), squareTestString, "this isn't working");
assert.deepEqual(printBox.doPrintBox(6, 4), fullRowTestString, "this isn't working");