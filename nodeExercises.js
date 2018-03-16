var assert = require("assert");
// var printNumbers = require("./printNumbers");
// var printSquare = require("./printSquare");
// var printBox = require("./printBox");


// var testArray = [1, 2, 3];
// var squareTestString = "**\n**\n";
// var fullRowTestString = "******";
// var hollowRowTestString = "*    *";

// assert.deepEqual(printNumbers.doPrintNumbers(1, 3), testArray, "it's not working");
// assert.deepEqual(printSquare.doPrintSquare(2), squareTestString, "this isn't working");
// assert.deepEqual(printBox.doPrintBox(6, 4), fullRowTestString, "this isn't working");


var fs = require("fs");
var rl = require("readline");

var prefix = "Heeyyyyy> ";

var i = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: prefix
});

i.prompt();

// i.on("line", function(input) {
//     console.log("Received " + input);
//     i.close();
// });

var fileOutput = function(error, text) {
    if (error) { console.log(error.message) }
    else {
    var inWords = text.toString();
    var inUpperCase = inWords.toUpperCase();
    console.log(inUpperCase);
    } 
}


// i.question("Filename: ", function(answer) {
//     fs.readFile(answer, fileOutput);
//     i.close();
// });



var dns = require("dns");

var getAddress = function(error, address) {
    if (error) { console.log (error.message) }
    else {
        console.log("IP Address: " + address);
    }
}

i.question("Domain Name: ", function(answer) {
    dns.resolve4(answer, getAddress);
    i.close();
});

