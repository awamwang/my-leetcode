// 107. Binary Tree Level Order Traversal II
//
// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
//
// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
// 3
// / \
//   9  20
// /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]

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
var levelOrderBottom = function(root) {
  if (!root) {
    return []
  }

  let res = []

  function traverse (root, level) {
    if (!root) {
      return
    }

    if (!res[level]) {
      res[level] = []
    }

    res[level].push(root.val)

    traverse(root.left, level + 1)
    traverse(root.right, level + 1)
  }

  traverse(root, 0)

  return res.reverse()
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var list = new TreeNode(1);
list.left = new TreeNode('2l');
list.right = new TreeNode('2r');
list.left.left = new TreeNode('3l');
list.left.right = new TreeNode('3r');

console.log(levelOrderBottom(list))