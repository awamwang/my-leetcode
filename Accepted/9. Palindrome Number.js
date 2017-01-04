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
  var strArray = x.toString().trim().split("")
  var len = strArray.length

  if (len === 1) {
    return true
  }

  for (var i = 0; i < len / 2; i++) {
    if (strArray[i] != strArray[len - 1 - i]) {   //将正序的第i个数和倒序的第i个数比较
      return false
    }
  }
  return true
}

console.log(isPalindrome(431))