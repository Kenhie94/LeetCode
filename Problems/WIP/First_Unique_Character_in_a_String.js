// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let ans = {};
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    let currentLetter = s[i];

    if (ans[currentLetter] !== undefined) {
      ans[currentLetter]++;
    } else {
      ans[currentLetter] = 1;
    }
  }
  for (const [key, value] of Object.entries(ans)) {
    if (value === 1) {
      console.log(s);
      for (let i = 0; i < s.length; i++) {
        if (key === s[i]) {
          return s[i];
        }
      }
    } else {
      return -1;
    }
  }
};
