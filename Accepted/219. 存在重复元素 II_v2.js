// 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。

// 示例 1:

// 输入: nums = [1,2,3,1], k = 3
// 输出: true
// 示例 2:

// 输入: nums = [1,0,1,1], k = 1
// 输出: true
// 示例 3:

// 输入: nums = [1,2,3,1,2,3], k = 2
// 输出: false

// https://leetcode-cn.com/problems/contains-duplicate-ii/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  if ((new Set(nums).size !== nums.length)) {
    let num
    let index
    let len = nums.length

    for (let i = 0; i < len - 1; i ++) {
      num = nums.shift()
      index = nums.indexOf(num)
      if (index > -1 && index < k) {
        return true
      }
    }
  }

  return false
};

console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,0,1,1], 1))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))
console.log(containsNearbyDuplicate([1,2,3,4,3], 2))
console.log(containsNearbyDuplicate([99, 99], 2))