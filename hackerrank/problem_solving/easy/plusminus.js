let a = [1,-3,5,-3,-2,0,3]
let positive = 0;
let negative = 0;
let zero = 0;
a.forEach(el => {
    if(el > 0) {
       positive += 1;
    }
    else if (el < 0) {
        negative += 1;
    }
    else {
        zero += 1;
    }
})

positive = positive/a.length;
negative = negative/a.length;
zero = zero/a.length;

console.log(positive);
console.log(negative);
console.log(zero);