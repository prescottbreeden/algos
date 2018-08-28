let n = 6; //size of row
let k = 1; //row number
while(k <= n){
    stairs = '';
    for(let i = n; i > 0; i--) {
        if (i > k) {
            stairs += ' ';
        } else {
            stairs += '#';
        }
    }
    console.log(stairs);
    k++;
}
