function addition_Function() { //Defining a function and naming it
	var addition = 2+2; //Variable
	document.getElementById("Add").innerHTML = "2 + 2 = " + addition; //Result into HTML
}

function subtraction_Function() { //Defining a function and naming it
	var Subtraction = 5-2; //Variable
	document.getElementById("Sub").innerHTML = "5 - 2 = " + Subtraction; //Result into HTML
}

function multiplication() { //Defining a function and naming it
	var simple_math = 6*8; //Variable
	document.getElementById("Mlt").innerHTML = "6 * 8 = " + simple_math; //Result into HTML
}

function division() { //Defining a function and naming it
	var simple_math = 48/6; //Variable
	document.getElementById("Div").innerHTML = "48 / 6 = " + simple_math; //Result into HTML
}

function random() { //Defining a function/variable and naming it
	document.getElementById("Ran").innerHTML = Math.random(); //Result into HTML
}

function modulus_operator() { //Defining a function and naming it
	var simple_math = 25 % 6; //Variable
	document.getElementById("Mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math;//Result into HTML
}

function IncrementButton() { //Defining a function and naming it
    var element = document.getElementById("IncrementText"); //Variable
    var value = element.innerHTML;

    ++value;

    console.log(value);
    document.getElementById("IncrementText").innerHTML = value; //Result into HTML
}

function DecrementButton() { //Defining a function and naming it
    var element = document.getElementById("DecrementText"); //Variable element
    var value = element.innerHTML; //Variable value

    --value;

    console.log(value);
    document.getElementById("DecrementText").innerHTML = value; //Result into HTML
}