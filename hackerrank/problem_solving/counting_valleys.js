function countValleys(ar) {
	elevation = 0;
	valley = 0;
	for(let i = 0; i < ar.length; i++) {
		if(ar[i]== 'D') {
			elevation--;
			if(elevation === -2) { valley++ }
		}
		if(ar[i] == 'U') {
			elevation++;
		}
	}
	return valley;
}

res = countValleys('DDUUUUDD')
console.log(res);
