/**
 * Filename: 9. Palindrome Number_ver4.js
 * Created on 2016/4/1 17:29.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  var originNum = x;
  var reverseNum = 0;
  var remainder; // 耗时操作只计算一次
  while (x > 0) {
    remainder = x % 10;
    reverseNum = reverseNum * 10 + remainder;
    x = (x - remainder) / 10;
  }
  return reverseNum == originNum;
};

console.log(isPalindrome(1121));