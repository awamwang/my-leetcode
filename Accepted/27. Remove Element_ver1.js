/**
 * Filename: 27. Remove Element_ver1
 * Created by wangmeng on 2016/4/17 20:00.
 */
//Given an array and a value, remove all instances of that value in place and return the new length.
//  Do not allocate extra space for another array, you must do this in place with constant memory.
//  The order of elements can be changed. It doesn't matter what you leave beyond the new length.
//Example:
//  Given input array nums = [3,2,2,3], val = 3
//Your function should return length = 2, with the first two elements of nums being 2.
//https://leetcode.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var len = nums.length;
  if (len === 0) {
    return 0;
  }
  var index = 0;
  var tailIndex = len - 1;
  while (index < tailIndex) {
    if (nums[index] === val) {
      nums[index] = nums[tailIndex];
      tailIndex--;
    } else {
      index++;
    }
  }
  var tranIndexToLength = function (index) {
    return index + 1
  };
  return (nums[tailIndex] !== val) ? tranIndexToLength(tailIndex) : tranIndexToLength(tailIndex - 1);
};

//time complexity: n ;memery complexity: 1

console.log(removeElement([3, 2, 2, 3], 2));