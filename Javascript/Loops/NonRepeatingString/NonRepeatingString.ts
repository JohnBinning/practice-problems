function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let currentStringList: string[] = [];
  const chars = s.split('');
  for (let i = 0; i < chars.length; i++) {
      if (currentStringList.includes(chars[i])) {
          const index = currentStringList.indexOf(chars[i]);
          currentStringList = currentStringList.slice(index + 1, currentStringList.length);
      }
      currentStringList.push(chars[i]);
      max = max > currentStringList.length ? max : currentStringList.length;
  }
  return max;
};

// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.