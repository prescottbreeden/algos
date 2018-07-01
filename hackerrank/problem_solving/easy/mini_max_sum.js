// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective min and max values as a single line of 2 space-seperated long integers

// sample input: 1 2 3 4 5
// sample output: 10 14

function minmaxsum(arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] < min) {
			min = arr[i];
		}
		if(arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
	}
	
	let max_sum = sum-min;
	let min_sum = sum-max;
	console.log(min_sum, max_sum);
}

minmaxsum([1,2,3,4,5])
