function longestPal(str){
    var pal = "";
    var newPal = "";
    for(var palStart=0; palStart<str.length; palStart++){
        for(var palEnd=str.length-1; palEnd>palStart;palEnd--){
            if(str[palStart] !== str[palEnd]){
                continue;
            }
            else{
                if(isPal(palStart,palEnd,str) === true ){
                    newPal = printPal(palStart,palEnd,str);
                    if (newPal.length > pal.length){
                        pal = newPal
                    }
                }
            }
        }
    }
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
                return false;
        }
        i++;
    }
    return true;
}
 
function printPal(palStart,palEnd,str){
    var pal = ""
    for(var idx=palStart;idx<=palEnd;idx++){
        pal += str[idx];
    }
    return pal
}

// if you wanted to check if the palindrome was only letters
// function isLetter(str) {
//   return str.length === 1 && str.match(/[a-z]/i);
// }