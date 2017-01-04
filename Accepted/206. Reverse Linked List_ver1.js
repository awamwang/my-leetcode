/**
 * Filename: 206. Reverse Linked List_ver1
 * Created by wangmeng on 2016/4/22 17:11.
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
 * 操作三个节点，每组操作后，pre节点next指向新链表后续节点，now节点next指向pre节点；前两个节点特殊处理
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  var now = head.next,
    pre = head,
    rest;

  rest = now.next;
  now.next = pre;
  pre.next = null;
  pre = now;
  now = rest;
  while (rest) {
    rest = now.next;
    now.next = pre;
    pre = now;
    now = rest;
  }
  return pre;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
// list.next.next.next = new ListNode(4);

console.log(listReverse(list));

// time complexity: O(n) ;memory complexity: O(1) ;
