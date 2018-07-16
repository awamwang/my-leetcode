// 给定一个整数数组，判断是否存在重复元素。

// 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

// 示例 1:

// 输入: [1,2,3,1]
// 输出: true
// 示例 2:

// 输入: [1,2,3,4]
// 输出: false
// 示例 3:

// 输入: [1,1,1,3,3,4,3,2,4,2]
// 输出: true

// https://leetcode-cn.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let newNums = [...new Set(nums)]

  return newNums.length !== nums.length
};

// time complexity: O(1) ;memory complexity: O(n) ;

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))