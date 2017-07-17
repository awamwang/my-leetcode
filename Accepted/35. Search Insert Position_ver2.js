// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it
// would be if it were inserted in order.  You may assume no duplicates in the array.  Here are few examples.
// [1,3,5,6], 5 → 2 [1,3,5,6], 2 → 1 [1,3,5,6], 7 → 4 [1,3,5,6], 0 → 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let len = nums.length
  let low, high, mid

  low = 0
  high = len - 1
  mid = Math.floor((high + low) / 2)

  while (low <= high) {
    if (target === nums[mid]) {
      return mid
    } else if (target < nums[mid]) {
      high = mid - 1
    } else {
      low = mid + 1
    }

    mid = Math.floor((high + low) / 2)
  }

  return mid + 1
};

// [1,3,5,6], 5 → 2
// [1,3,5,6], 2 → 1
// [1,3,5,6], 7 → 4
// [1,3,5,6], 0 → 0
console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 2], 7))
console.log(searchInsert([1, 3, 5, 2], 0))