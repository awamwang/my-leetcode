/**
 * Filename: 88. Merge Sorted Array_ver1
 * Created by wangmeng on 2016/4/27 18:45.
 */
//Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
//
//  Note:
//You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
//  https://leetcode.com/problems/merge-sorted-array/
/**
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  var mergeLen = m + n;
  var lastIndex1 = m - 1,
    lastIndex2 = n - 1;
  for (var i = mergeLen - 1; i >= 0, lastIndex1 >= 0, lastIndex2 >= 0; i--) {
    var nowNum1 = nums1[lastIndex1];
    var nowNum2 = nums2[lastIndex2];
    if (nowNum1 > nowNum2) {
      nums1[i] = nowNum1;
      lastIndex1--;
    } else {
      nums1[i] = nowNum2;
      lastIndex2--;
    }
  }
};

//time complexity: O(n) ;memory complexity: O(1) ;

var nums1 = [1, 5, 10];
var nums2 = [2, 3, 9];
nums1 = merge(nums1, 1, nums2, 2);
console.log(nums1);