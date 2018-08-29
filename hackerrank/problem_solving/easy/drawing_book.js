function pageFlip(n, p) {
	res1 = Math.round(p/2);
	res2 = Math.round(n/2 - p/2);
	console.log('res1: ' + res1);
	console.log('res2: ' + res2);
	if(res1 < res2) { 
		console.log(res1); 
		return res1;	
	} else {
		console.log(res2);
		return res2;
	}
}

pageFlip(6,2)
