module.exports = {

    Sigma: (num) => {
        let sum = 0;
        while(num > 0) {
            sum += num;
            num--;
        }
        return sum;
    },

    Factorial: (num) => {
        let fac = 1;
        while(num > 0) {
            fac *= num;
            num--;
        }
        return fac;
    }
    
}