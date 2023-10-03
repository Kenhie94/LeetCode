// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

// Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.
 
// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.
// 1 <= k <= s.length

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
let maxVowels = function(s, k) {
    let word = [...s];
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    let totalCount = 0
    let l = k
    let newWord = word.slice(0, k)
    for (let j = 0; j < newWord.length; j++) {
        if (vowels.includes(newWord[j])) {
            count += 1
        }
        if (count > totalCount) {
            totalCount = count
        }   
    } 
    for (let i = 1; i < (word.length - l) + 1; i++) {
        k += 1;
        if (vowels.includes(word[i - 1])) {
            count -= 1;
        }
        if (vowels.includes(word[i + l - 1])) {
            count += 1;
        } 
        if (count > totalCount) {
            totalCount = count
        }
    }
    return totalCount;
};