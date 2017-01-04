/**
 * Created by wangmeng on 2016/3/29.
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  var originStr = x.toString()
  var reverseStr = originStr.split("").reverse().join("")
  return originStr === reverseStr
}

console.log(isPalindrome(431))