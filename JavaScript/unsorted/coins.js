//method 1

function coinReturn(num){
    var q = 0
    var d = 0
    var n = 0
    var p = 0
    num *=100;
    while(num>0){
        if(num/25>=1){
            q = Math.floor(num/25);
            num = num - (q*25);
            console.log(num);
        }
        else if (num/10>=1){
            d = Math.floor(num/10);
            num = num - (d*10);
            console.log(num);
        }
        else if (num/5>=1){
            n = Math.floor(num/5);
            num = num - (n*5);
            console.log(num);
        }
        else {
            p = (num/1);  //Math.ceil
            num = num - (p*1);
            console.log(num);
        }
    }
    console.log(num);
    console.log(`Q:${q} D:${d} N:${n} P:${p}`);
}

//method 2

function coinReturn(num){
    num*=100;
    var coins = [25,10,5,1];
    var numCoins = [0,0,0,0];
    for(var i = 0; i < 4; i++){
        numCoins[i]=Math.floor(num/coins[i]);
        num=num%coins[i];
    }
    console.log(numCoins[0],"quarters");
    console.log(numCoins[1],"dimes");
    console.log(numCoins[2],"nickels");
    console.log(numCoins[3],"pennies");
    console.log(num);
}