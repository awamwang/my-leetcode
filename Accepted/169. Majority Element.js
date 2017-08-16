// 169. Majority Element
//
// https://leetcode.com/problems/majority-element/description/
//
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊
// n/2 ⌋ times.  You may assume that the array is non-empty and the majority element always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let len = nums.length
  let minTime = Math.ceil(len / 2)
  let counters = new Map()

  nums.map((e) => {
    let c = counters.get(e)
    if (c) {
      counters.set(e, ++c)
    } else {
      counters.set(e, 1)
    }
  })
  
  let mapIter = counters.entries();
  let c = mapIter.next()
  while (!c.done) {
    if (c.value[1] >= minTime) {
      return c.value[0]
    }
    c = mapIter.next()
  }
};

console.log(majorityElement([2, 5, 2, 4, 2]))