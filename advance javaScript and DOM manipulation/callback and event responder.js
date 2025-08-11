// Callbacks and Respond to events :
//          A callback is just a function passed as an argument to another function, which is later called (executed) inside that function.
//          When we attach an event listener in JS, we give it a callback function.
//          The browser will call that function automatically when the event occurs.

// For Example :

document.addEventListener("keypress",function (event){
        keySound(event.key);
    });
function keySound(key){
        switch (key) {
            case "w":
                var sound1 =new Audio("sounds/tom-1.mp3");
                sound1.play();
                break;
            case "a":
                var sound1 =new Audio("sounds/tom-2.mp3");
                sound1.play();
                break;
            case "s":
                var sound2 =new Audio("sounds/tom-3.mp3");
                sound2.play();
                break;
            case "d":
                var sound3 =new Audio("sounds/tom-4.mp3");
                sound3.play();
                break;
            case "j":
                var sound4 =new Audio("sounds/snare.mp3");
                sound4.play();
                break;
            case "k":
                var sound5 =new Audio("sounds/crash.mp3");
                sound5.play();
                break;
            case "l":
                var sound6 =new Audio("sounds/kick-bass.mp3");
                sound6.play();
                break;
        
            default:
                alert("I'm Busy now !!!")
                break;
        }
}