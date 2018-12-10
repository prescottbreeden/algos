function pickingNumbers(arr) {
  let longestArr;
  let min = arr[0];
  let values = { };
  let arrays = { };
  arr.map(ele => {
    if (ele < min) { min = ele }
  })
  arr[min] = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (Math.abs(arr[i] - min) <= 1) {
  //    arrays[min].push(arr[i]);
  //   }
  // }
  console.log(arrays[min]);
  console.log(arrays);
}


test = [ 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5 ];
pickingNumbers(test);
