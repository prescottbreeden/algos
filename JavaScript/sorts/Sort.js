module.exports = {

    bubble: (arr) => {
        // set up
        let i = 0;
        let sorted = false;
        let madeChanges = false;
        let counter = 0;

        while(!sorted) {

            counter++; // counter is purely for understanding time complexity

            // if index reaches the end of array, check for changes
            // if changes were made: reset index and madeChanges bool
            if(i === arr.length-1) {
                if(madeChanges) {
                    i = 0;
                    madeChanges = false;
                }
                else {
                    sorted = true;
                }
            }

            // if next value is greater than current value:
            // make temp swap
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                madeChanges = true;
            }
            i++;
        }
        return arr;
    },

    bubbleSSL: (object) => {
        
        object.runner = object.head;
        let sorted = false;
        let madeChanges = false;
        
        while(!sorted) {
            if(object.runner.next === null) {
                if(madeChanges) {
                    object.runner = object.head;
                    madeChanges = false;
                }
                else {
                    sorted = true;
                }
            }

            // if next value is greater than current value:
            // make temp swap
            if(object.runner.next != null) {
                if (object.runner.val > object.runner.next.val) {
                    let temp = object.runner.val;
                    object.runner.val = object.runner.next.val;
                    object.runner.next.val = temp;
                    madeChanges = true;
                }
            }
            object.runner = object.runner.next;
        }
        return object;
    }
}