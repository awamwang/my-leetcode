// 189. Rotate Array
//
// https://leetcode.com/problems/rotate-array/description/
//
// otate an array of n elements to the right by k steps.
//
// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
//
// Note:
// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
//
// [show hint]
//
// Related problem: Reverse Words in a String II

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  while (k--) {
    nums.unshift(nums.pop())
  }
};

console.log(rotate([1,2,3,4,5,6,7], 3))