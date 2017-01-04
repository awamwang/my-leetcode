/**
 * Filename: 28. Implement strStr()_ver1
 * Created by wangmeng on 2016/5/11 0011 18:27.
 */
//Implement strStr().
//
//  Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//  https://leetcode.com/problems/implement-strstr/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === haystack || needle === "") {
    return 0
  }
  var haystackLen = haystack.length,
    needleLen = needle.length,
    haystackPoint = 0,
    needlePoint = 0
  for (var i = 0; i < haystackLen; i++) {
    haystackPoint = i
    needlePoint = 0
    while (haystack[haystackPoint] === needle[needlePoint]) {
      if (needlePoint === needleLen - 1) {
        return i
      }
      haystackPoint++
      needlePoint++
    }
  }
  return -1
}
//time complexity: O(n) ;memory complexity: O(1) ;
//BF(Brute-Force)算法 超时

console.log(strStr("156asf", "156asf"))
console.log(strStr("156asf", "6a"))

