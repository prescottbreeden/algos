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
		count_to_right = 0
		count_to_left = 0
		count_to_right1 = 0
    console.log(x);

		for(let i = 0; i < x.length-1; i++)	{
			if(x[i] === 0) {
				if(x[i+1] === 1){
					count_to_right1++
				}
			}
			if(x[i] === 1) {
				if(x[i+1] === 0){
					count_to_right++
				}
			}
		}
    while(!sorted) {
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
		console.log("0s on right", count_to_right)
		console.log("1s on right", count_to_right1)
    console.log("sort 0s to right Counter", rightCounter);
    console.log("sort 0s to left Counter", leftCounter);
    if (rightCounter < leftCounter) {
        return rightCounter;
    }
    else {
        return leftCounter;
    }
}



minMoves([1,0,1,1,0,1,1,0]);

