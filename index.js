var alphabet = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","SPACE","COMMA"];
var numberOfTimes = 0;
var mouseCPStimes = 0;
var highestCPS = 0;


document.addEventListener("keydown", function(event) {
    var keyPressed = event.key.toUpperCase();
    if (keyPressed === " ") {
        keyPressed = "SPACE";
    } else if (keyPressed ===  ",") {
        keyPressed = "COMMA"
    }
    keyHeld(keyPressed);
});

document.addEventListener("keyup", function(event) {
    var keyPressed = event.key.toUpperCase();
    if (keyPressed === " ") {
        keyPressed = "SPACE";
    } else if (keyPressed ===  ",") {
        keyPressed = "COMMA"
        var fireForce = new Audio("Audio/fireforce.mp3");
        fireForce.play();
    }
    keyRemove(keyPressed);
});

document.querySelector(".reset-button").addEventListener("click", function(event) {
    if (event.pointerId === 1) {
        resetClicks();
    }
});

document.querySelector(".mouse-clicker").addEventListener("click", function(event) {
    if (event.pointerId === 1) {
        mouseCPStimes++;
        document.querySelector(".mouse-clicker").style.backgroundColor = "#2f3235";
        setTimeout(function() {
            document.querySelector(".mouse-clicker").style.backgroundColor = "#26292c";
        }, 100);
    }
})


function keyHeld(keyPressed) {

    if (alphabet.includes(keyPressed)) {

        var htmlKeyPressed = document.querySelector("."+ keyPressed);
        var keyPressedClass = htmlKeyPressed.classList;
        keyPressedClass.add("key-pressed");  
        keyPressedClass.add("key-held");        
        } else {
            console.log(keyPressed);
        }
}

function keyRemove(keyPressed) {

    if (alphabet.includes(keyPressed)) {
    var htmlKeyPressed = document.querySelector("."+ keyPressed);
    var letterClasses = htmlKeyPressed.classList;
    if (letterClasses.contains("key-held")) {
        letterClasses.remove("key-held");
        if (keyPressed === "SPACE") {
            spaceCounter();
        }
    }
} else {
    console.log(keyPressed);
}
}

function spaceCounter() {
    numberOfTimes++;
    var pressed100Times = new Audio("Audio/ding.mp3");

    document.querySelector(".letter-space").textContent = "You have pressed me " + numberOfTimes + " times!"; 

    if (numberOfTimes % 100 === 0 ) {
        pressed100Times.play();
    } 
}

var spacePresses0sec = numberOfTimes;
setInterval(function() {
        var spacePresses1Sec = numberOfTimes;
        var spacePresses = spacePresses1Sec - spacePresses0sec;
        var CPS = spacePresses / 1;
        if (CPS >= 0) {
        document.querySelector(".CPM").innerHTML = "Your CPS is : " + CPS;
        spacePresses0sec = numberOfTimes;
        } else {
            document.querySelector(".CPM").innerHTML = "Your CPS is : 0";
        }
    }, 1000);

function resetClicks() {
    var elementsWithKeyPressed = document.querySelectorAll(".key-pressed");
    
    for (var i = 0; i < elementsWithKeyPressed.length; i++) {
        document.querySelector(".key-pressed").classList.remove("key-pressed");
        
    }

    numberOfTimes = 0;

    document.querySelector(".letter-space").textContent = "Press me!"; 

}

mouseCPStimes0sec = mouseCPStimes;
setInterval(function() {
    mouseCPStimes1sec = mouseCPStimes;
    var mouseCPS = mouseCPStimes1sec - mouseCPStimes0sec;
    document.querySelector(".mouse-CPS").innerHTML = ("Your CPS is : " + mouseCPS);
    mouseCPStimes0sec = mouseCPStimes;
    console.log("hi");

    if (mouseCPS > highestCPS) {
        highestCPS = mouseCPS;
        document.querySelector(".highest-mouse-CPS  ").innerHTML = ("Your highest CPS is : " + highestCPS);
    }
}, 1000);
