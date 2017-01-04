// Given an array of integers, every element appears twice except for one. Find that single one.
//
//   Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// https://leetcode.com/problems/single-number/

// 寻找单身狗，将遍历到的单身狗都关到笼子里，当有另一只和笼中的单身狗配对后，将这只单身狗放出笼子，最后剩在笼子中的为究极单身狗

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var singleList = []
  for (let i = nums.length - 1; i >= 0; i--) {
    let n = nums[i]
    let index = singleList.findIndex(function (ele) {
        return ele === n
      })
    if (index > -1) {
      singleList.splice(index, 1)
    } else {
      singleList.push(n)
    }
  }
  return singleList[0]
};

// time complexity: O(n * n) ;memory complexity: O(n) ;

console.time('execute')
console.log(singleNumber([6, 3, 5, 3, 6, 4, 4]))
console.log(singleNumber([7, 1, 3, 1 ,3]))
console.timeEnd('execute')