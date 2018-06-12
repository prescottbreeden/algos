// implement reverseString(str) that, given string, retuns that string with characters reversed.

reverseString = (str) => {
    newString = '';
    for(let i = str.length-1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString('balls'));