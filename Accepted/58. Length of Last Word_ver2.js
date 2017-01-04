// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last
// word in the string.  If the last word does not exist, return 0.  Note: A word is defined as a character sequence
// consists of non-space characters only.  For example, Given s = "Hello World", return 5.

// https://leetcode.com/problems/length-of-last-word/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim();
  var len = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ' && s[i] !== '') {
      len ++;
    } else {
      return len;
    }
  }
  return len;
};

console.log(lengthOfLastWord("Hello  Worldx "))