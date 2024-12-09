// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
	let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
	s = s.split('');
	let first = '';
	let second = '';
	let position = 0
	for (let i = 0; i < s.length; i++) {
			if (s[i] === 'e' || s[i] === 'o') {
					first = s[i]
					for (let j = s.length; j >= 0; j--) {
							if (s[j] === 'e' || s[j] === 'o') {
									second = s[j]
									s.splice(s[i], 1, second);
									console.log(s)
									s.splice(s[j], 1, first);
									console.log(s)
									position = s[j] - 1;
									first = '';
									position == s[j]
							}
					}
			}
	}
	return s.join('')
}