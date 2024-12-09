// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

// Example 1:

// Input: n = 16
// Output: true
// Example 2:

// Input: n = 5
// Output: false
// Example 3:

// Input: n = 1
// Output: true

// Constraints:

// -231 <= n <= 231 - 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  let ans = 0
  for(let i = 0; i < 32; i++) {
      if(n == 4 ** i) {
          ans ++
      }
  }
  if(ans === 0) {
      return false
  } else if (ans === 1) {
      return true
  }
};