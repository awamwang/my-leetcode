// 168. Excel Sheet Column Title
//
// https://leetcode.com/problems/excel-sheet-column-title/description/
//
// Given a positive integer, return its corresponding column title as appear in an Excel sheet.
//
// For example:
//
// 1 -> A
// 2 -> B
// 3 -> C
// ...
// 26 -> Z
// 27 -> AA
// 28 -> AB

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let v = n - 1
  let res = ''

  while (v >= 0) {
    res = getChar(v % 26) + res
    v = Math.floor(v / 26) - 1
  }

  return res
};

function getChar (code) {
  return String.fromCharCode(code + 65)
}

console.log(convertToTitle(1353))