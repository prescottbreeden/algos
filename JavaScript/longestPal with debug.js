function longestPal(str){
    var pal = "";
    var newPal ="";
    for(var palStart=0; palStart<str.length; palStart++){
        console.log("increment start: " + str[palStart]);
        for(var palEnd=str.length-1; palEnd>palStart;palEnd--){
            console.log("increment end: " + str[palEnd]);
            if(str[palStart] !== str[palEnd]){
                console.log("continued");
                continue;
            }
            else{
                console.log("start and end match, invoke isPal")
                if(isPal(palStart,palEnd,str) === "True" ){
                    console.log("isPal invoked");
                    newPal = printPal(palStart,palEnd,str);
                    if (newPal.length > pal.length){
                        pal = newPal
                    }
                }
            }
        }
    }
    console.log("the longest palendrome found was " + pal)
    return pal
}
 
function isPal(palStart,palEnd,str){
    var i = 0;
    while (palEnd-i>palStart+i){
        if(str[palStart+i]==str[palEnd-i]){
            i++;
            continue;
        }
        else {
                console.log("isPal ended False");
                return "False";
        }
        i++;
    }
    console.log("isPal ended True");
    return "True";
}
 
function printPal(palStart,palEnd,str){
    var pal = ""
    for(var idx=palStart;idx<=palEnd;idx++){
        pal += str[idx];
    }
    console.log("the longest palendrome is " + pal)
    return pal
}