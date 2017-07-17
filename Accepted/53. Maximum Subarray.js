// 53. Maximum Subarray

// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
//
// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!nums || !nums.length){
    return 0
  }

  let sum = 0, max = null

  for (let i = 0, len = nums.length; i <= len - 1; i ++) {
    sum += nums[i]

    if (max === null) {
      max = sum
    }

    max = Math.max(max, sum)
    sum = Math.max(0, sum)
  }

  return max
};

console.log(maxSubArray([-1]))

// time complexity: O(n) ;memory complexity: O(1) ;