/**
 * Filename: 24. Swap Nodes in Pairs_ver2.js
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
  if (head === null || head.next === null) {
    return head;
  }
  var nextPair = head.next.next;
  var point = head;
  head = point.next;    //将head指向这对pair的第二个节点
  point.next.next = point;
  point.next = swapPairs(nextPair);
  return head;

};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var list = new ListNode(1);
list.next = new ListNode(2);
console.log(swapPairs(list));