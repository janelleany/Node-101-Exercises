var printSquare = function(size) {
    var asterix = "";
    var square = "";
    for (currentAsterix = 0; currentAsterix < size; currentAsterix++) {
        asterix += "*";
        }
    for (currentRow = 0; currentRow < size; currentRow++) {
        square += asterix + "\n";
    }
    console.log(square)
    return square;
}

exports.doPrintSquare = printSquare;