/**
 * Created by Administrator on 2016/4/19.
 */
//Given a singly linked list, determine if it is a palindrome.
//
//  Follow up:
//  Could you do it in O(n) time and O(1) space?
//
//  Subscribe to see which companies asked this question
//  https://leetcode.com/problems/palindrome-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  var number = listToNumber(head);
  if (number < 0) {
    return false;
  }
  var originNum = number;
  var reverseNum = 0;
  var remainder; // 耗时操作只计算一次
  while (number > 0) {
    remainder = number % 10;
    reverseNum = reverseNum * 10 + remainder;
    number = (number - remainder) / 10;
  }
  return reverseNum == originNum;
};

function listToNumber(list) {
  var number = 0;
  var power = 1;
  var realNumber;
  while (list) {
    realNumber = list.val * power;
    number += realNumber;
    power *= 10;
    list = list.next;
  }
  return number;
}

//time complexity: 2n ;memory complexity: 1

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var list = new ListNode(1);
list.next = new ListNode(2);
list.next = new ListNode(1);

console.log(isPalindrome(list));