/**
 * Filename: 14. Longest Common Prefix_ver3.js
 * Created on 2016/4/1 16:36.
 */
/**
 * 先按照字符串长度排序，直接找最长串和最短串的公共串，从而确定可能的最长公共串，然后在其他字符串中查找，缩短公共字符串得到最终公共串
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
      var sortedStrs = strs.sort(function (a, b) {   //先按照字符串长度排序，优先对短字符串两两进行公共串查找
        return a.length - b.length;
      });
      var firstStr = sortedStrs[0];
      var lastStr = sortedStrs[len - 1];
      commonStr = CommonPrefixInTwoStr(firstStr, lastStr);
      var otherStrIndex = 1;
      while (otherStrIndex <= (len - 1) - 1) {
        if (sortedStrs[otherStrIndex].indexOf(commonStr) !== 0) {
          commonStr = commonStr.slice(0, -1);   //如果当前公共串在当前字符串无法无法匹配，则从尾部缩短一位公共串，重新匹配
          otherStrIndex--;
        }
        otherStrIndex++;
      }
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
