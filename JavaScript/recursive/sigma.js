/* 
 * Recursion is a technique for iterating over an operation by having a function
 * call itself repeatedly until it arrives at a result
 *
 * Most loops can be rewritten in a recursive style, and in some functional languages
 * this approach to looping is the default
 *
 * Most javascript compilers are not optimized for recursing safely
 *
 * Best applied when you need to call the same function repeatedly with different
 * paramaters from within a loop.
 *
 * Most effective for solving problems involving iterative branching
 * - fractal math
 * - sorting
 * - traversing nodes of complex or non-linear data structures
 *
 * Easy to test because they're easy to write in a pure manner
 * - specific and consistent return value given any input
 * - no side effects on external variable states
 *
 *
 *  Order of progression:
 *    (beginner)
 *   - countdown
 *   - sigma
 *   - factorial (pos and neg)
 *   - fibonacci
 *
 *    (intermediate)
 *   - binary search
 *   - floodfill
 *
 *    (advanced)
 *   - queens
 *
 */

// iterative
var factor = function(n) {
  var result = 1;
  var count;
  for (count = number; count > 1; count--) {
    result *= count;
  }
  return result;
}
// recursive
function factorial(n) {
  if (n == 0) return 1;
  if (n < 0) return (n*factorial(n+1));
  if (n > 0) return (n*factorial(n-1));
}

// ------
function Icountdown(n) {
  while (n > 0) {
    console.log(n);
  }
}

function countdown(n, counter=0) {
  counter++;
  console.log("+++ New Stack Frame #", counter);
  if (n > 0 ) {
    console.log("Countdown: ", n);
    countdown(n-1, counter);
  } else {
    console.log("If check failed --- Base Case Hit")
  }

  console.log("--- Dropping Stack #", counter);
}

// non-memoized
// return num>0 ? num+sigmaN(--num) : 0;
function sigmaN(num) {
  if (num > 0) {
    return num + sigmaN(--num)
  }
  return 0;
}

// memoized
// return num === val ? val : val + sigmaM(num, ++val);
function sigmaM(num, val=1) {
  if(num === val) return val;
  return val + sigmaM(num, ++val);
}

function fibonacci(n)  {
    if(n == 0)
        return 0;
    else if(n == 1)
      return 1;
   else
      return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(sigmaM(5));
// console.log(sigmaN(5));
// Icountdown(5);
countdown(5);
// console.log(factorial(6));
// console.log(factorial(-6));
// console.log(factorial(5));
// console.log(factorial(-5));
