function parensValid(str){
    counter = 0
    for(var i = 0; i < str.length; i++){
        if(str[i]=="("){
            counter++
        }
        if(str[i]==")"){
            counter--
        }
        if (counter < 0){
            return false
        }
    }
    if(counter != 0){
        return false
    }
    return true
}