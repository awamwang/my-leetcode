/**
 * Filename: 66. Plus One_ver2.js
 * Created by wangmeng on 2016/4/21 18:15.
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
  var len = digits.length;
  if (len === 0) {
    return [1];
  }
  var lastIndex = len - 1;
  var lastNumber = (digits[lastIndex] + 1) % 10;
  digits[lastIndex] = lastNumber;
  if (lastNumber !== 0) {
    return digits;
  } else {
    var hasCarry = true;
    var bitSum;
    for (var i = lastIndex - 1; i >= 0; i--) {
      bitSum = (digits[i] + (hasCarry ? 1 : 0));
      digits[i] = bitSum % 10;
      hasCarry = bitSum / 10 >= 1;
    }
    if (hasCarry) {
      digits.unshift(1);
    }
  }
  return digits;
};

//time complexity: 2n ;memory complexity: 1 ;
console.log(plusOne([8, 9, 4, 5, 0, 0, 7, 9]));