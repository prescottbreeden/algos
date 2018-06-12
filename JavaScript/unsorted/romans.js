function romanNumerals(num){
    fakedict = [
        [1000,'M'],
        [500,'D'],
        [100,'C'],
        [50,'L'],
        [10,'X'],
        [5,'V'],
        [1,'I']
    ]
    var result = ""
    var romans = [1000,500,100,50,10,5,1];
    var numRomans = [0,0,0,0,0,0,0];
    for(var i = 0; i < romans.length; i++){
        numRomans[i]=Math.floor(num/romans[i]);
        num=num%romans[i];
        result += fakedict[i][1]*numRomans[i]
    }
    console.log(result)
}

