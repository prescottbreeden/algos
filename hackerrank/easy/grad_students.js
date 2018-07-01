// every student receives a grade in the inclusive range from 0 to 100
// any grade less than 40 is a failing grade

// if the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5

// if the value of grade is less than 38, no rounding occurs as the result will still be a failing grade

// take an integer array
// sample input: [73, 67, 38, 33]
// sample output: [75, 67, 40, 33]

function roundgrades(arr) {
	for(let i = 0; i < arr.length; i++) {
		let grade = arr[i];
		if(grade < 38) {
			continue;
		}
		else if((grade+1) % 5 === 0 || (grade+2) % 5 === 0) {
			grade = grade/10;
			grade = (Math.round(grade * 2) / 2).toFixed(1);
			grade *= 10;
		}
		console.log(grade);
		arr[i] = grade;
	}
	return arr;
}

roundgrades([73, 67, 38, 33]);

