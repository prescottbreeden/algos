function minMoves(avg) {
    // determine which way to sort students
    let leftCounter = 0;
    let rightCounter = 0;
    
    // sort 0s to the left
    let sorted = false;
    let runner = 0;
    let madeChanges = false;
    let x = new Array;
    let y = new Array;
    for(let i = 0; i < avg.length; i++) {
        x.push(avg[i]);
        y.push(avg[i]);
    }

    console.log(x);

    while(!sorted) {
        // console.log('runner: ' + runner);
        // console.log('runner+1: ' + (runner + 1));
        // console.log(counter);
        if (runner === x.length) {
            if(madeChanges) {
                runner = 0;
                madeChanges = false;
            }
            else {
                sorted = true;
            }
        }
        if (x[runner] > x[runner + 1]) {
            // console.log('triggered sort');
            let temp = x[runner];
            x[runner] = x[runner + 1];
            x[runner + 1] = temp;
            madeChanges = true;
            leftCounter++;
            runner++;
        }
        else {
            runner++;
        }

    }

    // sort 0s to the right
    sorted = false;
    runner = 0;
    madeChanges = false;
    console.log(y);

    while(!sorted) {
        // console.log('runner: ' + runner);
        // console.log('runner+1: ' + (runner + 1));
        // console.log(counter);
        if (runner === y.length) {
            if(madeChanges) {
                runner = 0;
                madeChanges = false;
            }
            else {
                sorted = true;
            }
        }
        if (y[runner] < y[runner + 1]) {
            // console.log('triggered sort');
            let temp = y[runner];
            y[runner] = y[runner + 1];
            y[runner + 1] = temp;
            madeChanges = true;
            rightCounter++;
            runner++;
        }
        else {
            runner++;
        }

    }    
    console.log(rightCounter);
    console.log(leftCounter);
    if (rightCounter < leftCounter) {
        console.log(rightCounter);
        return rightCounter;
    }
    else {
        console.log(leftCounter);
        return leftCounter;
    }
}



minMoves([1,1,1,1,0,0,0,0]);

