function catAndMouse(a, b, c) {
	let A = c-a;
	A = Math.sqrt(A*A);
	let B = c-b;
	B = Math.sqrt(B*B);
	console.log(A);
	console.log(B);
	console.log(c);
	if(A < B) {
		return 'Cat A'
	}
	else if(B < A) {
		return 'Cat B'
	}
	else {
		return 'Mouse C';
	}
}
res = catAndMouse(1, 2, 3);
console.log(res);
res = catAndMouse(1, 3, 2);
console.log(res);
