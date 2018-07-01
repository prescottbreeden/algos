function breakingRecords(scores) {
	let minScore = scores[0];
	let maxScore = scores[0];
	let recordMin = 0;
	let recordMax = 0;
	let result = [];

	for(let i = 1; i < scores.length; i++) {
		if (scores[i] < minScore) {
			minScore = scores[i];
			recordMin++;
		}
		if (scores[i] > maxScore) {
			maxScore = scores[i];
			recordMax++;
		}
	}
	console.log('Max records: ' + recordMax);
	console.log('Min records: ' + recordMin);
	result.push(recordMax);
	result.push(recordMin);
	return result;
}

breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])
