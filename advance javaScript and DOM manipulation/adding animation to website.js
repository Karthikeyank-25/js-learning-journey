// Adding animation to websites :
//           By adding propert we make website looks animate.

// Syntax :

setTimeout(functionName,eventTimeout);

// For Example :

function createAnimation(animateValue){
        var startAnimation = document.querySelector("."+animateValue);
        startAnimation.classList.add("pressed");
        setTimeout(function (){
            startAnimation.classList.remove("pressed")
        },100)
    }