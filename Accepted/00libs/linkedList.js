/**
 * @file xxx
 * @author wangnew2013@126.com
 */

// 无头结点
// 新建、插入、删除、遍历、长度、翻转
function ListNode (val) {
  this.val = val
  this.next = null
}

function LinkList () {
  this.head = null
  this.length = 0

  this.insertNode = function (val) {
    var p = this.head
    var n = new ListNode(val)
    this.head = n
    n.next = p
  }

  this.getLength = function() {
    var p = this.head
    var len = 0
    while (p) {
      len++
      p = p.next
    }
    return len
  }

  this.reverse = function () {
    var p = this.head
    while (p.next) {
      var n = p.next
      p.next = null
      n.next = p
    }
  }
}
