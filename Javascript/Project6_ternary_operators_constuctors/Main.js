function Ride_Function() { //Defining a function and naming it
	var Height, can_ride; //Variable
	Height = document.getElementById("Height").value;
	Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
	document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //Result into HTML
}

function Vehicle (Make, Model, Year, Color) { //Defining a function and naming it
	this.Vehicle_Make = Make;
	this.Vehicle_Model = Model;
	this.Vehicle_Year = Year;
	this.Vehicle_Color = Color;
}
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red"); //Variable
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black"); //Variable
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard"); //Variable
	function MyFunction() { //Defining a function and naming it
	document.getElementById("Keywords_and_Constructors").innerHTML = //Result into HTML
	"Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
	" manufactured in " + Erik.Vehicle_Year;
}

function count_Function () { //Defining a function and naming it
	document.getElementById("Counting").innerHTML = Count(); //Result into HTML
	function Count() {
		var Starting_point = 9;
		function Plus_one() {Starting_point += 1;}
		Plus_one();
		return Starting_point;
	}
}


