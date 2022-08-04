function call_loop() { //Defining a function and naming it
    var Digit = ""; //Variable
    var X = 1;      //Variable
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit; //Result into HTML
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //Variable
var Content = ""; //Variable
var Y; //Variable
function for_loop() { //Defining a function and naming it
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("Instruments_list").innerHTML = Content; //Result into HTML
}

function cat_pics() { //Defining a function and naming it
    var cat_picture = []; //Variable
    cat_picture [0] = "sleeping";
    cat_picture [1] = "playing";
    cat_picture [2] = "eating";
    cat_picture [3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + 
        cat_picture[2] + "."; //Result into HTML
} 

function constant_function() { //Defining a function and naming it
    const musical_instrument = {type:"guitar", brand:"Fender", color:"black"};
    musical_instrument.color = "blue";
    musical_instrument.price = "£900";
    document.getElementById("Constant").innerHTML = "The cost of " + //Result into HTML
        musical_instrument.type + " was " + musical_instrument.price; 
}

function let_function() { //Defining a function and naming it
    var X = 82; //Variable
    document.write(X);
    {
        let X = 33;
        document.write("<br>" + X);
    }
    document.write("<br>" + X);
    document.getElementById("let").innerHTML = Var (X); //Result into HTML
}

function let_car() { //Defining a function and naming it
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description(); //Result into HTML
}