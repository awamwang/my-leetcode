// Write a program to find the node at which the intersection of two singly linked lists begins.
//
//
//   For example, the following two linked lists:
//
//   A:          a1 → a2
//                      ↘
//                      c1 → c2 → c3
//                      ↗
//   B:     b1 → b2 → b3
// begin to intersect at node c1.
//
//
//   Notes:
//
// If the two linked lists have no intersection at all, return null.
//   The linked lists must retain their original structure after the function returns.
// You may assume there are no cycles anywhere in the entire linked structure.
//   Your code should preferably run in O(n) time and use only O(1) memory.

// https://leetcode.com/problems/intersection-of-two-linked-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var list = new ListNode('a1');
list.next = new ListNode('a2');
list.next.next = new ListNode('c1');
list.next.next.next = new ListNode('c2');
list.next.next.next.next = new ListNode('c3');

var list1 = new ListNode('b1');
list.next = new ListNode('b2');
list.next.next = new ListNode('b3');
list.next.next.next = new ListNode('c1');
list.next.next.next.next = new ListNode('c2');
list.next.next.next.next.next = new ListNode('c3');

console.time('execute')
console.log(getIntersectionNode(list, list1))
console.timeEnd('execute')