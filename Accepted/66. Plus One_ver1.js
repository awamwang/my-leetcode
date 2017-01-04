/**
 * Filename: 66. Plus One_ver1
 * Created by wangmeng on 2016/4/19 18:34.
 */
//Given a non-negative number represented as an array of digits, plus one to the number.
//
//  The digits are stored such that the most significant digit is at the head of the list.
//  https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  return addTwoBinaryArray(digits, [1]);
};

/**
 * addTwoBinaryArray(aArray, bArray[, base][, isChar])
 * @param {Array} aArray
 * @param {Array} bArray
 * @param {number} base
 * @param {Boolean} isChar
 * @returns {Array}
 */
function addTwoBinaryArray(aArray, bArray, base, isChar) {
  base = base || 10;
  isChar = isChar || false;
  var aLowBitPoint = aArray.length - 1;
  var bLowBitPoint = bArray.length - 1;
  var hasCarry = false;
  var sumArray = [];
  while (aLowBitPoint >= 0 || bLowBitPoint >= 0) {
    var aBit = aArray[aLowBitPoint] || 0;
    var bBit = bArray[bLowBitPoint] || 0;
    if (isChar) {
      aBit = parseInt(aBit);
      bBit = parseInt(bBit);
    }
    var bitSum = aBit + bBit + (hasCarry ? 1 : 0);
    sumArray.unshift(bitSum % base);
    hasCarry = bitSum / base >= 1;
    aLowBitPoint--;
    bLowBitPoint--;
  }
  if (hasCarry) {
    sumArray.unshift(1);
  }
  return sumArray;
}

console.log(plusOne([9, 9, 9]));
//time complexity: 2n ;memory complexity: n ;