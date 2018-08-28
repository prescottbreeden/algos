let x = String(465);

const oneHole = [0,4,6,9];
const twoHole = [8];
let holes = 0;

for(let i = 0; i < x.length; i++) {
    oneHole.filter(el => {
        if (el == x[i]) {
            holes++;
        }
    });
    twoHole.filter(el => {
        if (el == x[i]) {
            holes+=2;
        }
    })
}
console.log(x);
console.log('holes', holes);