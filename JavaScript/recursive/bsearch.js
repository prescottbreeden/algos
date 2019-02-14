


function binarySearch(val, array, start=0, end=(array.length-1), counter=0) {
    var mid = Math.ceil((end-start)/2) + start;
    if (start > end || end < start){
        return false;
    }
    if (array[mid] === val){
        return true;
    }
    if (val < array[mid]){
        end = mid-1;
        binarySearch(val, array, start, end);
    }
    if (val > array[mid]){
        start = mid+1;
        binarySearch(val, array, start, end);
    }
}

