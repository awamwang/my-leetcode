/**
 * Filename: 125. Valid Palindrome_ver1
 * Created by wangmeng on 2016/5/10 0010 18:34.
 */
//Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
//
//  For example,
//  "A man, a plan, a canal: Panama" is a palindrome.
//"race a car" is not a palindrome.
//
//  Note:
//Have you consider that the string might be empty? This is a good question to ask during an interview.
//
//  For the purpose of this problem, we define empty string as valid palindrome.
//  https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (!s) {
    return true
  }
  var originStr = s.trim().replace(/[^\w]/g, "").toLowerCase()
  var reverseStr = originStr.split("").reverse().join("")
  return originStr === reverseStr
}
//time complexity: O(n) ;memory complexity: O(n) ;

console.log(isPalindrome("12 Ss211"))
