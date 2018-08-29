// You will be given two arrays of integers.  You will be asked to determine all integers that satisfy the following conditions:
// 1. The elements of the first array are all factors of the integer being considererd
// 2. The integer being considered is a factor of all elements of the second array


function getTotalX(a, b) {
    let validX = [];

    const minA = Math.min(...a);
    const maxB = Math.max(...b);
    const isFactorOf = (arrItem, x) => x % arrItem === 0;
    const isFactorFor = (arrItem, x) => arrItem % x === 0; 

    for(let x = minA; x <= maxB; x++) {
        if (a.every(av => isFactorOf(av, x))) {
            if(b.every(bv => isFactorFor(bv, x))) {
                validX.push(x);
            }            
        }
    }
    return validX.length;
}
	
