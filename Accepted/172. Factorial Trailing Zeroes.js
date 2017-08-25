// 172. Factorial Trailing Zeroes
//
// https://leetcode.com/problems/factorial-trailing-zeroes/description/
//
// Given an integer n, return the number of trailing zeroes in n!.

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let res = 0

  for (let i = n; i >= 1; i--) {
    if (i % 5 === 0) {
      res ++
    }
  }

  return res
};

console.log(trailingZeroes(30))