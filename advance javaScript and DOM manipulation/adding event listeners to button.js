// Adding event listeners to buttons :
//          Adding event listeners to a button means you’re telling the browser,
//          "When this button is clicked (or hovered, pressed, etc.), run some code I wrote."

// Syntax :

document.getElementById("idName").addEventListener("eventName",nameOfFunction);

// For Example :
function developeRole(){
    alert("Hi is Karthi's Working Space");
}
document.getElementById("karthiWork").addEventListener("click",developeRole);