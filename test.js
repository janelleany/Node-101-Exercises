var assert = require("assert");

var game = require("./gameOfLife");

var testSeed = [
    [1, 1, 1],
    [0, 0, 0],
    [1, 1, 1]
]

var newTestSeed = [
    
]

assert.deepEqual(game.doNewWorld(testSeed), testSeed, "nope doesn't work");
// assert.deepEqual(game.doNewWorld(testSeed), testSeed, "nope doesn't work");
// assert.deepEqual(game.doNewWorld(testSeed), testNewWorld, "nope doesn't work");