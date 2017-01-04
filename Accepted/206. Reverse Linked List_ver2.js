/**
 * Filename: 206. Reverse Linked List_ver2
 * Created by wangmeng on 2016/4/22 17:16.
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
 * 单独拿出第一个节点，作为一个临时头结点（实际本题没有头结点），将后续节点头插法插入到链表中，最后将第一个节点链到新链表结尾
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  var oldFirst = head;
  var rest = head.next;
  var point = rest;
  var newLastButOne = rest;
  oldFirst.next = null;
  var Second;
  while (point) {
    Second = oldFirst.next;
    rest = rest.next;
    oldFirst.next = point;
    point.next = Second;
    point = rest;
  }
  var newFirst = oldFirst.next;
  newLastButOne.next = oldFirst;
  newLastButOne.next.next = null;
  return newFirst;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);

console.log(reverseList(list));

//time complexity: O(n) ;memory complexity: O(1) ;