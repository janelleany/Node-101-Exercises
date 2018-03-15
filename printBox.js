var printBox = function(width, height) {
    var fullRow = "";
    var hollowRow = "";
    var spaces = Array(width - 1).join(" ");
    var square = "";
    

    for (currentAsterix = 0; currentAsterix < width; currentAsterix++) {
        fullRow += "*";
    }

    console.log(fullRow);
    
    for (currentRow = 0; currentRow < (height - 2); currentRow++) {
        hollowRow = "*" + spaces + "*";
        console.log(hollowRow);
    }

    console.log(fullRow);
    return fullRow;
}

exports.doPrintBox = printBox;