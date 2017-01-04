// Given a sorted linked list, delete all duplicates such that each element appear only once.
//
//   For example,
//   Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.

// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  var exists = {};
  var fakeHead = new ListNode(1);
  fakeHead.next = head;
  var point = head;
  var pre = fakeHead;

  while (point) {
    var cur = point.val;
    if (exists[cur]) {
      pre.next = point.next
    } else {
      exists[cur] = true;
      pre = point;
    }
    point = point.next;
  }
  return fakeHead.next;
};

//time complexity: O(n) ;memory complexity: O(n) ;

class ListNode {
  constructor(val, tag, next) {
    this.val = val;
    this.tag = tag;
    this.next = next || null;
  }
}

var list = new ListNode(1, 1);
list.next = new ListNode(1, 2);
list.next.next = new ListNode(1, 3);
console.log(deleteDuplicates(list))