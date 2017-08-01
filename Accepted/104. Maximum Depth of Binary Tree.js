// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
//
// 104. Maximum Depth of Binary Tree
//
// Given a binary tree, find its maximum depth.
//
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0
  }

  function traverse (root, max) {
    if (!root) {
      return max
    }

    max ++

    return Math.max(traverse(root.left, max), traverse(root.right, max), max)
  }

  return traverse(root, 0)
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
// list.left.left.right = new TreeNode('4r');

console.log(maxDepth(list))