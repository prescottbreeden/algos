function min_swaps(arr) {
	count_to_right = 0
	count_to_left = 0
	for(let i = 0; i < arr.length-1; i++)	{
		if(arr[i] === 1) {
			if(arr[i+1] === 0){
				count_to_right++
			}
		}
	}
	for(let i = arr.length; i >= 1; i--) {
		if(arr[i] === 1) {
			if(arr[i-1] === 0) {
				count_to_left++
			}
		}
	}
	console.log(count_to_right)
	console.log(count_to_left)
}



arr = [1,0,0,1,1,1,0]
min_swaps(arr)

