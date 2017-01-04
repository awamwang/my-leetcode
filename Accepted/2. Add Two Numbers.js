/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * 在previous后添加一个值为val的新节点
 *
 * @param {number} value
 * @param {Object} previous
 * @return {null}
 */
function appendNode(value, previous) {
  previous.next = new ListNode(value);
  return null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (l1 === null && l2 === null) {
    return null;
  }
  var listHead = new ListNode(0);
  var nowNode = listHead;
  var nowNodeL1 = l1;
  var nowNodeL2 = l2;

  var hasCarry = false; //是否有进位
  while (nowNodeL1 !== null || nowNodeL2 !== null) {
    var sum = 0;
    if (nowNodeL1 !== null) {
      sum += nowNodeL1.val;
      nowNodeL1 = nowNodeL1.next;
    }
    if (nowNodeL2 !== null) {
      sum += nowNodeL2.val;
      nowNodeL2 = nowNodeL2.next;
    }
    if (hasCarry) {
      sum++;
    }
    appendNode(sum % 10, nowNode);
    hasCarry = (sum >= 10);
    nowNode = nowNode.next;
  }
  //最后一位的进位
  if (hasCarry === true) {
    appendNode(1, nowNode);
  }
  return listHead.next;
};

console.log(addTwoNumbers(new ListNode(0), new ListNode(1)));