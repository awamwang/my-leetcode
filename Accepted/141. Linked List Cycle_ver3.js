// Given a linked list, determine if it has a cycle in it.
//
//   Follow up:
//   Can you solve it without using extra space?

// https://leetcode.com/problems/linked-list-cycle/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var list = new ListNode(1);
list.next = list
// list.next = new ListNode(2);
// list.next.next = new ListNode(3);
// list.next.next.next = list.next;

console.time('execute')
console.log(hasCycle(list))
console.timeEnd('execute')
