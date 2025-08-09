var randomNumber1 = Math.floor(6*Math.random())+1;
var randomNumber2 = Math.floor(6*Math.random())+1;


function generator1(){
    //var randomNumber1 = Math.floor(6*Math.random())+1;
    var randomImage1 = "dice" + randomNumber1 + ".png";
    var randomSource1 = "images/" + randomImage1;
    return randomSource1;
    }
function generator2(){
    //var randomNumber2 = Math.floor(6*Math.random())+1;
    var randomImage1 = "dice" + randomNumber2 + ".png";
    var randomSource1 = "images/" + randomImage1;
    return randomSource1;
    }
var incident1 = document.querySelector(".img1")
document.querySelector(".img1").setAttribute("src",generator1());
document.querySelector(".img2").setAttribute("src",generator2());

//var randomNumber3 = Math.floor(6*Math.random())+1;
//var randomNumber4 = Math.floor(6*Math.random())+1;

if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins🚩!";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}
