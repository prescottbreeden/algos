module.exports = {

    printValues: (start, stop) => {
        for(let i = start; i <= stop; i++) {
            console.log(i)
        }
    },
    
    printIntSums: (start, stop) => {
        let sum = 0;
        for(let i = start; i <= stop; i++) {
            sum += i;
            console.log(i, sum)
        }
    },

    PrintMaxArray: (arr) => {
        let max = arr[0];
        arr.forEach(el => {
            if(el > max) {
                max = el;
            }
        });
        console.log(max);
    },

    PrintOdds: (arr) => {
        arr.forEach(el => {
            if(el % 2 !== 0) {
                console.log(el);
            }
        })
    },

    ReturnArrayCountGreaterY: (arr, y) => {
        let count = 0;
        arr.forEach(el => {
            if(el > y) {
                count += 1;
            }
        })
        return arr;
    },

    SquareArrayValues: (arr) => {
        const squares = arr.map(el => el * el)
        return squares;
    },

    ZeroOutNegNums: (arr, ninja=false) => {
        if(ninja) {
            arr.forEach((el, idx) => {
                if(el < 0) {
                    arr[idx] = 'Ninja';
                }
            })    
        } else {
            arr.forEach((el, idx) => {
                if(el < 0) {
                    arr[idx] = 0;
                }
            })
        }
        return arr;
    },

    ShiftArrayValuesLeft: (arr, zero=false) => {
        if(zero) {
            let val = arr.shift();
            val = 0;
            arr.push(val);
        } else {
            arr.push(arr.shift());
        }
        return arr;
    }
}