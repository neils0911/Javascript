function full_Sentence()    { //Defining a function and naming it
    var part_1 = "I have "; //Variable
    var part_2 = "made this "; //Variable
    var part_3 = "into a complete "; //Variable
    var part_4 = "sentence."; //Variable
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //Variable
    document.getElementById("Concatenate").innerHTML = whole_sentence; //Result into HTML
}

function slice_method() { //Defining a function and naming it
    var Sentence = "All work and no play makes Johnny a dull boy."; //Variable
    var Section = Sentence.slice(27,33); //Variable
    document.getElementById("Slice").innerHTML = Section; //Result into HTML
}

function toUpperCase() { //Defining a function and naming it
    let text = "Hello World!"; //Variable
    let result = text.toUpperCase(); //Variable
    document.getElementById("Uppercase").innerHTML = result; //Result into HTML
}

function search_method() { //Defining a function and naming it
    let text = "Mr. Blue has a blue house"; //Variable
    let position = text.search("Blue"); //Variable
    document.getElementById("Search").innerHTML = position; //Result into HTML
}

function string_method() { //Defining a function and naming it
    var X = 182; //Variable
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); //Result into HTML
}

function precision_method() { //Defining a function and naming it
    var X = 12938.3012987376112; //Variable
    document.getElementById("Precision").innerHTML = X.toPrecision(10); //Result into HTML
}