var alphabet = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];

document.addEventListener("keydown", function(event) {
    keyHeld(event);
});

document.addEventListener("keyup", function(event) {
    keyRemove(event);
});

function keyHeld(event) {
    var keyPressed = event.key.toUpperCase();

    if (alphabet.includes(keyPressed)) {

        var htmlKeyPressed = document.querySelector("."+ keyPressed);
        var keyPressedClass = htmlKeyPressed.classList;
        keyPressedClass.add("key-pressed");  
        keyPressedClass.add("key-held");        
        } else {
            console.log(keyPressed);
        }
}

function keyRemove(event) {
    var keyPressed = event.key.toUpperCase();
    if (alphabet.includes(keyPressed)) {
    var htmlKeyPressed = document.querySelector("."+ keyPressed);
    var letterClasses = htmlKeyPressed.classList;
    if (letterClasses.contains("key-held")) {
        letterClasses.remove("key-held");
    }
} else {
    console.log(keyPressed);
}
}