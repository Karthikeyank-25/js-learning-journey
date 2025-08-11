// Keyboard event listener :
//          Keyboard event listeners let you detect and respond to key presses or releases from the user’s keyboard.
//              -keypress (when key is produce a character)
//              -keyup    (When key is released)
//              -keydown  (When key is pressed)

// Syntax :

document.addEventListener("keypress",function (event){alert("I'm pressed!!")});

// For Example :

document.addEventListener("keypress",function (event){
        keySound(event.key);
    });