const basic = require('./basic13');
const maths = require('./maths');
const stars = require('./starart');
const modulo = require('./modulos');

let result;
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

result = basic.ReturnArrayCountGreaterY(arr, 20);

result = basic.SquareArrayValues(arr);
result = basic.ZeroOutNegNums(arr, true);

result = basic.ShiftArrayValuesLeft(arr);
result = basic.ShiftArrayValuesLeft(arr, true);

result = maths.Sigma(10000);
result = maths.Factorial(3);

// console.log(stars.drawLeftStars(3,30));
// console.log(stars.drawLeftStars(13,30));
// console.log(stars.drawLeftStars(23,30));
// console.log(stars.drawLeftStars(8,30));
// console.log(stars.drawLeftStars(19,30));
// console.log(stars.drawLeftStars(30,30));

// console.log(stars.drawRightStars(10, 30));
// console.log(stars.drawRightStars(5, 30));
// console.log(stars.drawRightStars(13, 30));
// console.log(stars.drawRightStars(20, 30));
// console.log(stars.drawRightStars(30, 30));

// console.log(stars.drawCenteredStars(20, 30));
// console.log(stars.drawCenteredStars(10, 30));
// console.log(stars.drawCenteredStars(12, 30));
// console.log(stars.drawCenteredStars(18, 30));

result = modulo.threesFives(100,4000000);

result = modulo.coinReturn(12.42);

result = modulo.messyMath(4);
result = modulo.messyMath(8);
result = modulo.messyMath(15);















console.log(result);