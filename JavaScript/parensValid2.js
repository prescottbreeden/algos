function parensValid(str){
    checkStr = ''
    check = {
        '(':')',
        '{':'}'
    }
    for(var i = 0; i < str.length; i++) {
        for(k in check){
            if (str[i] == k && checkStr == ''){ 
                checkStr = str[i];
            }
            else if (str[i] == check[k] && check[k] == check[checkStr]) {
                checkStr = '';
            }
            else if (str[i] == k || str[i] == check[k]) {
                return false
            }
        }
    }
    return true
}

