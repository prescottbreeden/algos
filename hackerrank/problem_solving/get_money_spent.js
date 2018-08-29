function getMoneySpent(keyboards, drives, b) {
	let total_spent = -1;
	for(let i = 0; i < keyboards.length; i++) {
		for(let j = 0; j < drives.length; j++) {
			let current = keyboards[i] + drives[j];
			console.log(current);
			if(current > total_spent && current <= b) {
				total_spent = current;
			}
		}
	}
	return total_spent;
}

let res = getMoneySpent([3,1], [5,2,8], 10);
console.log(res);
