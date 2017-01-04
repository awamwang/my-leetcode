// Given an array of integers, every element appears twice except for one. Find that single one.
//
//   Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

};

// time complexity: O(n * n) ;memory complexity: O(n) ;

console.time('execute')
console.log(singleNumber([6, 3, 5, 3, 6, 4, 4]))
console.log(singleNumber([7, 1, 3, 1 ,3]))
console.timeEnd('execute')