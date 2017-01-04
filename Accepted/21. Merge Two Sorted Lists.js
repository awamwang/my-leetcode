/**
 * Filename: 21. Merge Two Sorted Lists
 * Created by wangmeng on 2016/4/7 18:24.
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  var mergedList = new ListNode(0);
  var point = mergedList;

  while (l1 || l2) {
    if (!l2 || (l1 && l1.val <= l2.val)) {    //l2已经没有节点（这种情况下l1必然有节点），或者l1、l2都有节点，但是l1节点的val小于l2节点
      point.next = l1;
      point = point.next;
      l1 = l1.next;
    } else {
      point.next = l2;
      point = point.next;
      l2 = l2.next;
    }
  }
  return mergedList.next;
};

console.log(mergeTwoLists(null, {val: 1, next: null}));

