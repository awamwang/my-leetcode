/**
 * Created by Administrator on 2016/4/10.
 */
/**
 * 先按照字典序度排序，直接找最长串和最短串的公共，即为公共串
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var commonStr = "";
  var len = strs.length;
  switch (len) {
    case 0:
      return commonStr;
    case 1:
      return strs[0];
    default :
      var sortedStrs = strs.sort();   //先按照字典序度排序
      var firstStr = sortedStrs[0];
      var lastStr = sortedStrs[len - 1];
      commonStr = CommonPrefixInTwoStr(firstStr, lastStr);
      return commonStr;
  }
};
/**
 * 当字符串长短顺序确定时，返回公共字符串
 *
 * @param {string} shortStr
 * @param {string} longStr
 * @return {string}
 */
function CommonPrefixInTwoStr(shortStr, longStr) {
  var commonStr = "";
  for (var i = 0; i < shortStr.length; i++) {
    commonStr = shortStr.slice(0, i + 1);
    if (longStr.indexOf(commonStr) !== 0) {   //公共串必须从longStr的0位置开始
      commonStr = shortStr.slice(0, i);
      return commonStr;
    }
  }
  return commonStr;
}
console.log(longestCommonPrefix(["abab", "aba", "abc"]));