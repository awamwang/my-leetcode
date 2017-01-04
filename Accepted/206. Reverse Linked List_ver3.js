/**
 * Filename: 206. Reverse Linked List_ver3.js
 * Created by wangmeng on 2016/4/26 19:06.
 */
//Reverse a singly linked head.
// https://leetcode.com/problems/reverse-linked-head/
/**
 * Definition for singly-linked head.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 分前半段和剩余段，递归处理剩余段，进行reverse
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  var first = head;
  var rest = head.next;
  var newRest = reverseList(rest);
  first.next = null;
  rest.next = first;
  return newRest;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var list = new ListNode(1);
list.next = new ListNode(2);
//list.next.next = new ListNode(2);
//list.next.next.next = new ListNode(4);

console.log(reverseList(list));

//time complexity: O(n) ;memory complexity: O(3n) ;