/**
 * Filename: 88. Merge Sorted Array_ver1.js
 * Created by wangmeng on 2016/4/27 19:10.
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
  var index1 = 0,
    index2 = 0;
  var mergeNums = [];
  for (var i = 0; i < mergeLen, index1 < m, index2 < n; i++) {
    var nowNum1 = nums1[index1];
    var nowNum2 = nums2[index2];
    if (nowNum1 < nowNum2) {
      mergeNums[i] = nowNum1;
      index1++;
    } else {
      mergeNums[i] = nowNum2;
      index2++;
    }
  }
  arrayCopy(nums1, mergeNums);
  return nums1;
};

function arrayCopy(arr1, arr2) {
  for (var i = 0; i < arr2.length; i++) {
    arr1[i] = arr2[i];
  }
}

//time complexity: O(n) ;memory complexity: O(m+n) ;

var nums1 = [0, 2];
var nums2 = [1];
nums1 = merge(nums1, 2, nums2, 1);
console.log(nums1);