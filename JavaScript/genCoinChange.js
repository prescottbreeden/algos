alien_ledger = {
    1000: "^",
    100 : "[]",
    17  : "O",
    1   : "*"
}

function genCoinChange(ledger, amt){
    var coins = [1000,100,17,1];
    var numCoins = [0,0,0,0];
    var change = "";
    for(var i = 0; i < 4; i++){
        numCoins[i]=Math.floor(amt/coins[i]);
        amt=amt%coins[i];
        while(numCoins[i]>0){
            change += alien_ledger[coins[i]];
            numCoins[i] -= 1;
        }
    }        
    console.log(numCoins)
    console.log(change)
}

genCoinChange(alien_ledger, 1389)
