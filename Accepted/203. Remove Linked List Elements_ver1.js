/**
 * Filename: 203. Remove Linked List Elements_ver1
 * Created by Administrator on 2016/5/4 21:22.
 */
//Remove all elements from a linked list of integers that have value val.
//
//  Example
//Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
//Return: 1 --> 2 --> 3 --> 4 --> 5
//  https://leetcode.com/problems/remove-linked-list-elements/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  var newHead = new ListNode(0)
  newHead.next = head
  var pre = newHead
  var point = newHead.next
  while (point) {
    if (point.val === val) {
      pre.next = point.next
    } else {
      pre = point
    }
    point = point.next
  }
  return newHead.next
}

function ListNode(val) {
  this.val = val
  this.next = null
}

var list = new ListNode(1)
list.next = new ListNode(1)
list.next.next = new ListNode(2)
list.next.next.next = new ListNode(1)
list.next.next.next.next = new ListNode(2)
list.next.next.next.next.next = new ListNode(3)

//time complexity: O(n) ;memory complexity: O(1) ;

console.log(removeElements(list, 1))