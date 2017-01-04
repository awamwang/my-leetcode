// Given two binary trees, write a function to check if they are equal or not.
//
//   Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

// https://leetcode.com/problems/same-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (p === null && q === null) {
    return true
  } else if ((p === null || q === null) && (p !== q)) {
    return false
  } else {
    if (p.val !== q.val) {
      return false
    } else {
      return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }
  }
};

//time complexity: O(n) ;memory complexity: O(1) ;

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var tree1 = new TreeNode(1)
tree1.left = new TreeNode(2)
tree1.right = new TreeNode(3)
var tree2 = new TreeNode(1)
tree2.left = new TreeNode(2)
tree2.right = new TreeNode(2)

console.log(isSameTree(tree1, tree2))
