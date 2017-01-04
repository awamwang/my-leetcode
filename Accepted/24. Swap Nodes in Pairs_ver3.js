/**
 * Filename: 24. Swap Nodes in Pairs_ver3.js
 * Created by wangmeng on 2016/4/8 16:13.
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head === null) {
    return head;
  }

  var newHead = new ListNode(0);    //newHead给整个链表提供了一个头结点，消除第一对与后续对的处理差异
  newHead.next = head;
  var beforeTheTwo = newHead, afterTheTwo;
  var point = head;

  while (point && point.next) {
    afterTheTwo = point.next.next;
    beforeTheTwo.next = point.next;
    point.next.next = point;

    if (afterTheTwo && afterTheTwo.next)
      point.next = afterTheTwo.next;
    else {
      point.next = afterTheTwo;
    }

    beforeTheTwo = point;
    point = afterTheTwo;
  }
  return newHead.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var list = new ListNode(1);
list.next = new ListNode(2);
console.log(swapPairs(list));