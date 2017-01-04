/**
 * Filename: 24. Swap Nodes in Pairs
 * Created by wangmeng on 2016/4/8 15:37.
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
  var beforeTheTwo, firstInTwo, secondInTwo, afterTheTwo;
  if (head === null) {
    return head;
  }
  firstInTwo = head;
  secondInTwo = head.next;
  beforeTheTwo = null;

  while (firstInTwo && secondInTwo) {
    afterTheTwo = secondInTwo.next;
    if (!beforeTheTwo && afterTheTwo) {      //有后无前
      firstInTwo.next = afterTheTwo;
      secondInTwo.next = firstInTwo;
    } else if (beforeTheTwo && !afterTheTwo) {      //有前无后
      secondInTwo.next = firstInTwo;
      beforeTheTwo.next = secondInTwo;
    } else {        //前后都不为空
      firstInTwo.next = afterTheTwo;
      secondInTwo.next = firstInTwo;
      beforeTheTwo.next = secondInTwo;
    }
    beforeTheTwo = secondInTwo;
    firstInTwo = beforeTheTwo.next;
    secondInTwo = firstInTwo.next;
  }
  return head;
};