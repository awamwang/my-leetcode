/**
 * Filename: 28. Implement strStr()_ver2
 * Created by wangmeng on 2016/5/11 0011 18:35.
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
  return haystack.indexOf(needle)
}
console.log(strStr("duck", "d"))
