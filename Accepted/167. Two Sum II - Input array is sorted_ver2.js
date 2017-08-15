// 167. Two Sum II - Input array is sorted
//
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
//
// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a
// specific target number.  The function twoSum should return indices of the two numbers such that they add up to the
// target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are
// not zero-based.  You may assume that each input would have exactly one solution and you may not use the same element
// twice.  Input: numbers={2, 7, 11, 15}, target=9 Output: index1=1, index2=2

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let l = 0, h = numbers.length - 1
  while (l <= h) {
    let lv = numbers[l]
    let hv = numbers[h]
    let sum = lv + hv

    if (sum === target) {
      return [l + 1, h + 1]
    } else if (sum > target) {
      h --
    } else {
      l ++
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9))