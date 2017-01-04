/**
 * Filename: 26. Remove Duplicates from Sorted Array
 * Created by wangmeng on 2016/4/13 20:37.
 */
/*Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 Do not allocate extra space for another array, you must do this in place with constant memory.
 For example,
 Given input array nums = [1,1,2],
 Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var isDuplicated = false
  var nowNumber
  var preSameNumberIndex
  var newLength = nums.length
  for (var i = 0; i < nums.length; i++) {
    nowNumber = nums[i]
    preSameNumberIndex = nums.indexOf(nowNumber)
    isDuplicated = ( preSameNumberIndex >= 0 && preSameNumberIndex < i)
    if (isDuplicated) {
      newLength--
    }
  }
  return newLength
}

console.log(removeDuplicates([2, 1, 2, 2, 3]))