/**
 * Created by wangmeng on 2016/3/29.
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  var strArray = x.toString().split("");
  return (strArray.every(headEqlTail));
};
function headEqlTail(ele, idx, arr) {
  var len = arr.length;
  return (ele === arr[len - 1 - idx]);
}

console.log(isPalindrome(4));