document.addEventListener("keydown", function(event) {
    
    var keyPressed = event.key.toUpperCase();
    var alphabet = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
    for (var i = 0; i < alphabet.length; i++) {
        if (keyPressed === alphabet[i]) {
            var htmlKeyPressed = document.querySelector("."+ alphabet[i])
            console.log(htmlKeyPressed);
            var keyPressedClass = htmlKeyPressed.classList;
            keyPressedClass.add("key-pressed");  
            keyPressedClass.add("key-held");
        }
    }

    document.addEventListener("keyup", function() {
        keyPressedClass.remove("key-held");
    });

});