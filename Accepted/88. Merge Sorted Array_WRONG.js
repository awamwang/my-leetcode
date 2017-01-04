/**
 * Filename: 88. Merge Sorted Array_ver
 * Created by wangmeng on 2016/4/26 19:35.
 */
//Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
//
//  Note:
//You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
//  https://leetcode.com/problems/merge-sorted-array/
/**
 * 代码简单效率低的办法
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (m === 0 && n !== 0) {
    nums1 = nums2;
  } else if (m !== 0 && n !== 0) {
    nums1 = nums1.concat(nums2);
    nums1 = nums1.sort(function (a, b) {
      return a - b;
    })
  }
};

//time complexity: O(n*log(n)) ;memory complexity: O(n) ;

var nums1 = [0];
var nums2 = [1];
nums1 = merge(nums1, 0, nums2, 1);
console.log(nums1);