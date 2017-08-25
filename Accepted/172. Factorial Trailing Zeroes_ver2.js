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
  while (n) {
    let v = Math.floor(n / 5)
    res += v;
    n = v;
  }
  return res;
};

console.log(trailingZeroes(30))