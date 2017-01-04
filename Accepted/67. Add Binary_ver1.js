/**
 * Filename: 67. Add Binary_ver1
 * Created by wangmeng on 2016/4/17 20:51.
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
  var aLowBitPoint = a.length - 1;
  var bLowBitPoint = b.length - 1;
  var hasCarry = false;
  var sumArray = [];
  while (aLowBitPoint >= 0 || bLowBitPoint >= 0) {
    var aBit = parseInt(a.charAt(aLowBitPoint)) || 0;
    var bBit = parseInt(b.charAt(bLowBitPoint)) || 0;
    var bitSum = aBit + bBit + (hasCarry ? 1 : 0);
    sumArray.unshift(bitSum % 2);
    hasCarry = bitSum / 2 >= 1;
    aLowBitPoint--;
    bLowBitPoint--;
  }
  if (hasCarry) {
    sumArray.unshift(1);
  }
  return sumArray.join("");
};

//time complexity: n ;memory complexity: n
console.log(addBinary("11101", "1110"));