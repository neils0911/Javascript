function Nan() { //Defining a function and naming it
	document.getElementById("Test1").innerHTML = 0/0 //Result into HTML
}

function DEquals() { //Defining a function and naming it
	document.getElementById("Test2").innerHTML = (10==10); //Result into HTML
}

function TEquals() { //Defining a function and naming it
	X = 10;
	Y = 10;
document.getElementById("Test3").innerHTML = (X === Y); //Result into HTML
}

function AND() { //Defining a function and naming it
	document.getElementById("Test4").innerHTML = (5>2&&10>4); //Result into HTML
}

function AND2() { //Defining a function and naming it
	document.getElementById("Test5").innerHTML = (5<2&&10<4); //Result into HTML
}

function OR() { //Defining a function and naming it
	document.getElementById("Test6").innerHTML = (5>10 || 10>4); //Result into HTML
}

function not_function() { //Defining a function and naming it
	document.getElementbyId("Not").innerHTML = (5>2); //Result into HTML
}

