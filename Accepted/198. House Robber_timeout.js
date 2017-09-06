// 198. House Robber
//
// https://leetcode.com/problems/house-robber/description/
//
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money
// stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system
// connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount
// of money you can rob tonight without alerting the police.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  function f (n) {
    if (n === 0) {
      return 0
    } else if (n === 1) {
      return nums[0]
    } else if (n === 2) {
      return Math.max(nums[0], nums[1])
    } else {
      return Math.max(f(n - 1), nums[n - 1] + f(n - 2))
    }
  }

  return f(nums.length)
};