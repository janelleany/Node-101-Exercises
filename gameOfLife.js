var seed = [
    [1,1,1],
    [0,0,0],
    [1,1,1]
]

var newWorld = function(seed) {
    var newArray = [];
    seed.forEach(element => {
        newArray.push(element);
    });
    return newArray;
}

exports.doNewWorld = newWorld;