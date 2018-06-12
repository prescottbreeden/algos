function parensValid(str){
    openArr = []
    value = {
        '(' : ')',
        '{' : '}'
    }
    for(var i = 0; i < str.length; i++){
        for(open in value){
            if(str[i] == open) { 
                openArr.push(str[i]);
            }
            if(str[i] == value[open]){ 
                if(value[openArr[openArr.length-1]] != str[i]){ 
                    return false
                }
                else {
                    openArr.pop()
                }
            }
        }
    }
    return openArr.length == 0
}