module.exports = {
    
    threesFives: (start, stop) => {
        let sum = 0;
        for (let i = start; i <= stop; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;
    },

    coinReturn: (num) => {
        num *= 100;
        const coins = [25,10,5,1];
        let numCoins = [0,0,0,0];

        for(let i = 0; i < numCoins.length; i++){
            numCoins[i] = Math.floor(num/coins[i]);
            num = num % coins[i];
        }
        return numCoins;
    },

    messyMath: (num) => {
        let sum = 0;
        for (let i = 0; i <= num; i++) {
            if (i % 3 === 0) {
                continue;
            } 
            else if (i % 7 === 0) {
                sum += (2*i);
            } 
            else {
                sum += i;
            }
            // martin did not think this one through...
            // if (num % 3 === i) {
            //     return -1
            // }
        }
        return sum;
    },

    twelveBarBlues: () => {
        for(let i = 1; i <= 12; i++) {
            console.log(i, 'chick', 'boom');
        }
    },

    fib: function fib(n) {
        if (n <= 1) {
            return n;
        }
        return fib(n-1) + fib(n-2)

    },

    extractDigit: (num, digitNum) => {
        // function that given a number and a digit number, returns the numerical value of that digit
        // 0 is 1s, 1 is 10s, 2 is 100s, etc.
        digit = Math.floor(num/Math.pow(10,digitNum)) % 10;
        return digit
    }
}