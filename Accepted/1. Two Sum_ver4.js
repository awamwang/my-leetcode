var nums = [2, 2, 11, 15];
var target = 4;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let diffMap = {}
  for (let i = 0, len = nums.length; i < len; i++) {
    let v = nums[i]
    let diff = target - v
    let firstIndex = diffMap[v]
    if (firstIndex !== undefined) {
      return [firstIndex, i]
    }
    diffMap[diff] = i
  }
}

console.log(twoSum(nums, target));
