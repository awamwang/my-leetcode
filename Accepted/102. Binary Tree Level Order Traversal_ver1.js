// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
//
// For example:
//   Given binary tree [3,9,20,null,null,15,7],
// 3
// / \
// 9  20
// /  \
// 15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// https://leetcode.com/problems/binary-tree-level-order-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  var nodeStack = []

  levelOrderTraversal(tree1, function (node) {
    console.log(node)
  })

  return nodeStack
};

function levelOrderTraversal (root, visit) {
  if (!root) {
    return
  }

  var nodeQueue = [root]
  while (nodeQueue.length > 0) {
    var node = nodeQueue.shift()
    visit(node)
    if (node.left) {
      nodeQueue.push(node.left)
    }
    if (node.right) {
      nodeQueue.push(node.right)
    }
  }
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var tree1 = new TreeNode(1)
var left = new TreeNode(2)
left.left = new TreeNode(4)
var right = new TreeNode(3)
right.left = new TreeNode(5)
right.right = new TreeNode(6)
tree1.left = left
tree1.right = right

console.time('execute')
console.log(levelOrderTraversal(tree1, function (node) {
  console.log(node)
}))
console.timeEnd('execute')