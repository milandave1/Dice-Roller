// Dice roller program

function clicker() { // This is the function that activates when the "Roll!"" button is pressed"
    function dice() { // This is the function that produces random number and assosicated image src
        let roller = (Math.floor(Math.random() * 6)+ 1);
        return roller;
    }

    //a = document.querySelector("#rollResult").innerHTML = dice();     // This is when we also want the number displayed
    a = dice();

    switch (a) {
        // we do not need a for loop as the number of different outputs is finite and small
        // also, this is a nice example of where to use a switch statement
        case 1:
            picture = "./one.png";
            break;
        case 2:
            picture = "./two.png";
            break;
        case 3:
            picture = "./three.png";
            break;
        case 4:
            picture = "./four.png";
            break;
        case 5:
            picture = "./five.png";
            break;
        case 6:
            picture = "./six.png";
            break;
    }

    document.getElementById("image").src = picture;  
    document.getElementById("h3").innerHTML = "Hey big roller! Your dice landed on: <br><br>"
                                                            // If we want the user to define how many roll results they want
    //var num = prompt("How many players are there? ");
}