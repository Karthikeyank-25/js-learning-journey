// 99 Bottles of Beer songs :

// Solution :

function songMaking(){
    let n = 99;
    while(n >= 0){
        if(n >= 1){
        let stateMent = n + " bottles of beer on the wall, "+ n +" bottles of beer.Take one down and pass it around, "+(n-1)+" bottles of beer on the wall.";
        console.log(stateMent);
    }
    else{
        let stateMent1 = "No more bottles of beer on the wall,No more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.";
        console.log(stateMent1);
    }
        n--;
    }
}
