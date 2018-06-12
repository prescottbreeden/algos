const basic = require('./basic13');
const maths = require('./maths');
const stars = require('./starart');

function createArray(arr, start, stop) {
    for(let i = start; i <= stop; i++) {
        arr.push(i);
    }
}
var arr = new Array();
createArray(arr, -10, 15);

// basic.printValues(1,10);
// basic.printIntSums(0,255);
// basic.PrintMaxArray([1,2,3,4,55,3]);
// basic.PrintOdds(arr);
// basic.ReturnArrayCountGreaterY(arr, 20);
// console.log(basic.SquareArrayValues(arr));
// console.log(basic.ZeroOutNegNums(arr, true));

// console.log(basic.ShiftArrayValuesLeft(arr));
// console.log(basic.ShiftArrayValuesLeft(arr, true));

console.log(maths.Sigma(10000));
console.log(maths.Factorial(3));

console.log(stars.drawLeftStars(10, 30));
console.log(stars.drawLeftStars(5, 30));
console.log(stars.drawLeftStars(13, 30));
console.log(stars.drawLeftStars(20, 30));