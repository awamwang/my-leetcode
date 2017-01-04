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
};

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

console.time('execute')
console.log(isSameTree(tree1, tree2))
console.timeEnd('execute')
