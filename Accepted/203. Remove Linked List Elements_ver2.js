/**
 * Filename: 203. Remove Linked List Elements_ver2
 * Created by wangmeng on 2016/5/6 0006 17:02.
 */
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
  var point = newHead
  while (point.next) {
    if (point.next.val === val) {
      point.next = point.next.next
    } else {
      point = point.next
    }
  }
  return newHead.next
}
//time complexity: O(n) ;memory complexity: O(1) ;

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


console.log(removeElements(list, 1))