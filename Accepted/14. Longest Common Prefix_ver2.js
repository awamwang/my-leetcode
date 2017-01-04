/**
 * Created by Administrator on 2016-3-31 0031.
 */
/**
 * 先按照字符串长度排序，优先对短字符串两两进行公共串查找
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
    case 2:
      commonStr = CommonPrefixInTwoStr(strs[0], strs[1]);
      return commonStr;
    default :
      var sortedStrs = strs.sort(function (a, b) {   //先按照字符串长度排序，优先对短字符串两两进行公共串查找
        return a.length - b.length;
      });
      //两两进行公共串查找，如果公共串已经为""，则立即返回
      for (var i = 0; i < sortedStrs.length - 1; i++) {
        commonStr = CommonPrefixInTwoStr(sortedStrs[i], sortedStrs[i + 1]);
        if (commonStr === "") {
          return commonStr;
        }
        sortedStrs[i + 1] = commonStr;
      }
      commonStr = sortedStrs[len - 1];
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
console.log(longestCommonPrefix(["c", "acc", "ccc"]));