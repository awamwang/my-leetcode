/**
 * Filename: 14. Longest Common Prefix_ver1
 * Created on 2016/3/31 19:03.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var commonStr = "";
  var len = strs.length;
  if (len === 0) {
    return commonStr;
  } else if (len === 1) {
    return strs[0];
  } else if (len === 2) {
    commonStr = CommonPrefixInTwoStr(strs[0], strs[1]);
    return commonStr;
  } else {
    for (var i = 0; i < strs.length - 1; i++) {
      commonStr = CommonPrefixInTwoStr(strs[i], strs[i + 1]);
      if (commonStr === "") {
        return commonStr;
      }
      strs[i + 1] = commonStr;
    }
    commonStr = strs[len - 1];
    return commonStr;
  }
};
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function CommonPrefixInTwoStr(str1, str2) {
  var commonStr = "";
  for (var i = 0; i < Math.max(str1.length, str2.length); i++) {
    if (str1[i] != str2[i]) {
      return commonStr = str1.substr(0, i);
    }
  }
  return str1;
}

console.log(longestCommonPrefix(["ca", "ca1243", "ca"]));