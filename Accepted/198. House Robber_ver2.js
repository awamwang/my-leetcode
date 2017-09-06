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
    } else {
      let pre = 0, cur = 0, temp = -1
      for (let i = 0, len = nums.length; i < len; i++) {
        temp = cur
        cur = Math.max(nums[i] + pre, cur)
        pre = temp
      }
      return cur
    }
  }

  return f(nums.length)
};