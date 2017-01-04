/**
 * Filename: 19. Remove Nth Node From End of List_ver2.js
 * Created by wangmeng on 2016/4/7 17:01.
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
  var len = 0;
  var linkListMap = linkListToMap(head);
  var index = len - n + 1;  //将倒数转序号换为正数序号
  if (index === 1) {
    head = head.next;
  } else {
    var pre = linkListMap.get(index - 1);
    var now = linkListMap.get(index);
    pre.next = now.next;
  }

  return head;
  /**
   * 生成链表节点序号与链表节点指针的Map
   * @param {object} list
   * @returns {Map}
   */
  function linkListToMap(list) {
    var linkListMap = new Map();
    var i = 1;
    while (list) {
      linkListMap.set(i, list);
      list = list.next;
      i++;
    }
    len = i - 1;
    return linkListMap;
  }
};

console.log(removeNthFromEnd({val: 1, next: null}, 1));
