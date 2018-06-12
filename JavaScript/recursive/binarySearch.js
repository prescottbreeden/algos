function binarySearch(val, array, start = 0, end = (array.length-1), counter = 0) {
    counter++;
    var mid = Math.ceil((end-start)/2) + start;
    console.log('inside call ' + counter)
    console.log(`Start: ${start}`);
    console.log(`Mid: ${mid}`);
    console.log(`End: ${end}`);
    console.log(`Val: ${val}`)
    if (counter === 10) {
        console.log('INFINITE LOOP');
        return false;
    }
    if (start > end || end < start){
        console.log('not found')
        return false;
    }
    if (array[mid] === val){
        console.log('FOUND')
        return true;
    }
    if (val < array[mid]){
        end = mid-1;
        console.log('looking left');
        binarySearch(val, array, start, end, counter);
    }
    if (val > array[mid]){
        start = mid+1;
        console.log('looking right');
        binarySearch(val, array, start, end, counter);
    }
    console.log(`stack ${counter} falling off`)
}

binarySearch(4, [1,4,5,7,9,11])
binarySearch(1, [1,4,5,7,9,11])
binarySearch(11, [1,4,5,7,9,11])
binarySearch(6, [1,4,5,7,9,11])
binarySearch(20, [1,4,5,7,9,11,12,13,14,15,16,17,18,19,20])
binarySearch(17, [1,4,5,7,9,11,12,13,14,15,16,18,19,20])
