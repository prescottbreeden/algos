// You are given an array of n integers and a positive integer (k). Find and print the number of (i,j) pairs where i < j and a(i) + a(j) is divisible by k.


function divisibleSumPairs(n, k, ar) {
	let counter = 0;
	for(let i = 0; i < ar.length; i++) {
		for (let j = 0; j < ar.length; j++) {
			if ((i < j) && ((ar[i] + ar[j]) % k == 0)) {
				counter++;
			}
			else {
				//console.log('nope');
			}
		}
	}
	console.log(counter);
	return counter;
}


divisibleSumPairs(6, 3, [1,3,2,6,1,2])
