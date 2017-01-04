/**
 * Created by Administrator on 2016/4/19.
 */
//Given a singly linked list, determine if it is a palindrome.
//
//  Follow up:
//  Could you do it in O(n) time and O(1) space?
//
//  Subscribe to see which companies asked this question
//  https://leetcode.com/problems/palindrome-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head) {
    return true;
  }
  if (!head.next) {
    return true;
  }
  var len = getListLength(head);
  var midNext = getMidNext(len);
  var halfLen = getHalfFloorLength(len);
  var rightHalf = getNodePoint(head, midNext);
  var reversedRightHalf = listReverse(rightHalf);
  return listIsSame(head, reversedRightHalf, halfLen);
};

var getListLength = function (head) {
  var point = head;
  var len = 0;
  while (point) {
    len++;
    point = point.next;
  }
  return len;
};

var getMidNext = function (len) {
  return Math.ceil(len / 2);
};

var getHalfFloorLength = function (len) {
  return Math.floor(len / 2);
};

var getNodePoint = function (list, index) {
  var point = list;
  var i = 0;
  while (i < index) {
    point = point.next;
    i++;
  }
  return point;
};

var listReverse = function (list) {
  if (!list.next) {
    return list
  }
  var now = list.next,
    pre = list,
    rest;

  rest = now.next;
  now.next = pre;
  pre.next = null;
  pre = now;
  now = rest;
  while (rest) {
    rest = now.next;
    now.next = pre;
    pre = now;
    now = rest;
  }
  return pre;
};

var listIsSame = function (firstList, secondList, n, strict) {
  var firstLen = getListLength(firstList);
  var secondLen = getListLength(secondList);
  if (strict === null) {
    strict = true;
  }
  n = n || Math.max(firstLen, secondLen);
  if (strict === false) {
    n = n || Math.min(firstLen, secondLen);
  }
  var firstPoint = firstList;
  var secondPoint = secondList;
  var i = 0;
  while (i < n) {
    if (firstPoint.val !== secondPoint.val) {
      return false;
    }
    firstPoint = firstPoint.next;
    secondPoint = secondPoint.next;
    i++;
  }
  return true;
};
//time complexity: O(a*n) ;memory complexity: O(1)

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(1);
list.next.next.next.next = new ListNode(2);

console.log(isPalindrome(list));

//time complexity:  ;memory complexity:  ;