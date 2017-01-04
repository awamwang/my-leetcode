/**
 * Filename: 237. Delete Node in a Linked List_ver2
 * Created by wangmeng on 2016/5/8 0008 11:58.
 */
//Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.
//
//  Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, the linked list should become 1 -> 2 -> 4 after calling your function.
//  https://leetcode.com/problems/delete-node-in-a-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
}
//time complexity: O(1) ;memory complexity: O(1) ;

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

deleteNode(list.next.next)
console.log(list)
