/**
 * Filename: 19. Remove Nth Node From End of List_ver1
 * Created on 2016/4/1 18:00.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 删除倒数第n个节点
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  var len = getListLength(head);
  var index = len - n + 1;  //将倒数转序号换为正数序号
  if (index === 1) {
    head = head.next;
  } else {
    var nowNode = head;
    var preNode = head;
    for (var i = 1; i < index; i++) {
      preNode = nowNode;
      nowNode = nowNode.next;
    }
    preNode.next = nowNode.next;    //将nowNode节点删除
  }
  return head;
  /**
   * 计算链表的长度
   * @param {object} list
   * @returns {number}
   */
  function getListLength(list) {
    var nodePoint = list;
    var len = 0;
    while (nodePoint) {
      len++;
      nodePoint = nodePoint.next;
    }
    return len;
  }
};

console.log(removeNthFromEnd({val: 1, next: null}, 1));
