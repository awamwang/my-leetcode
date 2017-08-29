// 190. Reverse Bits
//
// https://leetcode.com/problems/reverse-bits/description/
//
// Reverse bits of a given 32 bits unsigned integer.
//
// For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192
// (represented in binary as 00111001011110000010100101000000).  Follow up: If this function is called many times, how
// would you optimize it?  Related problem: Reverse Integer

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let res = 0
  let k = 32

  while (k--) {
    let v = (Math.pow(2, k)) & n
    let has = v !== 0

    res += (has ? Math.pow(2, 31 - k) : 0)
  }

  return res
};

// console.log(reverseBits(43261596))
console.log(reverseBits(2147483648))
console.log((2147483648).toString(2))