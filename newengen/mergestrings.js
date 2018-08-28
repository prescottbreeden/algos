function mergeStrings(a, b) {
    let newString = '';
    let counter = 0;
    while(counter < a.length || counter < b.length) {
        if (a[counter] != null) {
            newString += a[counter];
            console.log(newString);
            console.log(a);
            console.log(b);
        }
        if (b[counter] != null) {
            newString += b[counter];
        }
        counter++;
    }
    console.log(newString);

}

mergeStrings('hello', 'okiedokie');