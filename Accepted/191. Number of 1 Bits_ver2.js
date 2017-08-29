// 191. Number of 1 Bits
//
// https://leetcode.com/problems/number-of-1-bits/description/
//
// Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).
//
// For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.
//
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let res = 0
  let i = 31

  while (i >= 0) {
    if (n & (Math.pow(2, i))) {
      res ++
    }
    i --
  }

  return res
};

console.log(hammingWeight(11))