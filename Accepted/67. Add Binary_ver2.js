/**
 * Filename: 67. Add Binary_ver2.js
 * Created by wangmeng on 2016/4/17 21:25.
 */
//Given two binary strings, return their sum (also a binary string).
//
//For example,
//  a = "11"
//b = "1"
//Return "100".
//  https://leetcode.com/problems/add-binary/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (a === "" && b === "") {
    return "";
  } else if (a !== "" && b === "") {
    return a;
  } else if (b !== "" && a === "") {
    return b;
  }
  var aArray = a.split("");
  var bArray = b.split("");
  var sum = addTwoBinaryArray(aArray, bArray, true);
  return sum.join("");
};
/**
 *
 * @param {Array} aArray
 * @param {Array} bArray
 * @param {Boolean} isChar
 * @returns {Array}
 */
function addTwoBinaryArray(aArray, bArray, isChar) {
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
    sumArray.unshift(bitSum % 2);
    hasCarry = bitSum / 2 >= 1;
    aLowBitPoint--;
    bLowBitPoint--;
  }
  if (hasCarry) {
    sumArray.unshift(1);
  }
  return sumArray;
}

//time complexity: 3n ;memory complexity: 2n
console.log(addBinary("11101", "1110"));