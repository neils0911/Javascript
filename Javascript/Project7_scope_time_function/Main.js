function get_Date() { //Defining a function and naming it
    if (new Date().getHours() < 18) { //Conditional Statement
        document.getElementById("Greeting").innerHTML = "How are you today?"; //Result into HTML
    }
    }
}

function Age_Function() { //Defining a function and naming it
    Age = document.getElementById("Age").value; //Conditional Statement
    if (Age >= 18) {
        Vote = "You are old enough to vote!"
    }
    else {
        Vote = "You are not old enough to vote!"
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote; //Result into HTML
}
}

function Time_function ()   { //Defining a function and naming it
    var Time = new Date().getHours(); //Conditional Statement
    var Reply;
    if (Time < 12 == Time > 0)  {
        Reply = "It is morning time";
    }
    else if (Time > 12 == Time < 18)    {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is eveing time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //Result into HTML
}
}