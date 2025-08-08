// Love calculator exercise :
//          In this exercise we get user name through prompt and after that calculate the love percent between of them using random number.
//          Then show their love percent to user by alert pop on their windows.

// Solution :

function loveCalculator(){
    let firstPartner = prompt("What's your name ?");
    let secondPartner = prompt("What's your partner's name ?");
    let loveIndicator = 100 * Math.random();
    loveIndicator = Math.round(loveIndicator);
    return alert("Both of yours love percentage is "+loveIndicator);
}
