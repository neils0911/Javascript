function Project2() { //Defining a function and naming it
    var string = "This text is red!"; //Defining a variable and giving it a
    var result = string.fontcolor("red"); //string value
    document.getElementById("Red_Text").innerHTML = result; //Putting the value
                                        //of result into HTML element with "Red_Text" id
}  

function myFunction() { //Defining a function and naming it
	var sentence = "I am learning"; //Variable
	sentence += " a lot from this course!"; //+= operator
	document.getElementById("Concatenate") .innerHTML = sentence; //Result into HTML element
}
