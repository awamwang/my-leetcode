// 171. Excel Sheet Column Number
//
// https://leetcode.com/problems/excel-sheet-column-number/description/
//
// Related to question Excel Sheet Column Title
//
// Given a column title as appear in an Excel sheet, return its corresponding column number.
//
// For example:
//
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let values = s.split('').reverse()

  let index = 0
  let res = 0
  let v = values[index]

  console.log(values)
  while (typeof v !== 'undefined') {
    res += Math.pow(26, index) * getCharNumber(v)
    index ++
    v = values[index]
  }

  return res
};

function getCharNumber (c) {
  return c.charCodeAt(0) - 64
}

console.log(titleToNumber('AZ'))