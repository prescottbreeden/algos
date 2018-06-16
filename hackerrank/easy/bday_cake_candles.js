// make a cake that must have one candle for each yuear of her total age. when they blow out the candles, they will only blow out the tallest ones

// input format: integer n denoting the number of candles on the cake
// second line is an array of candle hieights i

function candles(arr) {
	let max = arr[0];
	let counter = 0;
	for(let i = 0; i < arr.length; i++){
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] === max) {
			counter++
		}
	}
	console.log(counter);
	return counter;
}

candles([3,1,2,3])
