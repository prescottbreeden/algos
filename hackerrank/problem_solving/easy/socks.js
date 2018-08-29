/* 

 John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description

Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock

*/

function pairSocks(arr) {
	let socks = {};
	let pairs = 0;

	for(let i = 0; i <= arr.length; i++) {
		if(socks[arr[i]] > 0) {
			socks[arr[i]] += 1;
			if(socks[arr[i]] % 2 == 0) {
				pairs++;
			}
		}
		else {
			socks[arr[i]] = 1;
		}
	}
	console.log(pairs);
}

pairSocks([1,2,3,4,5,1,2,3,4,5,6]);
