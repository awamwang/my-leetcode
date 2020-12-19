/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (var item1 = 0; item1 < nums.length; item1++) {
    for (var item2 = item1 + 1; item2 < nums.length; item2++) {
      if (nums[item1] + nums[item2] === target) {
        return [item1, item2];
      }
    }
  }
};
// @lc code=end

