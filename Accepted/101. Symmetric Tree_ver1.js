// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).//// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:////   1//   / \// 2   2// / \ / \// 3  4 4  3// But the following [1,2,2,null,3,null,3] is not://   1//   / \// 2   2// \   \// 3    3// Note://   Bonus points if you could solve it both recursively and iteratively.//// https://leetcode.com/problems/symmetric-tree//** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } *//** * @param {TreeNode} root * @return {boolean} */var isSymmetric = function(root) {  if (root === null) {    return true  } else {    return isMirror(root.left, root.right)  }};var isMirror = function (tree1 ,tree2) {  if (tree1 === null && tree2 === null) {    return true  } else if ((tree1 === null || tree2 === null) && (tree1 !== tree2)) {    return false  } else if (tree1.val !== tree2.val) {    return false  } else {    return isMirror(tree1.left, tree2.right) && isMirror(tree2.left, tree1.right)  }}function TreeNode(val) {  this.val = val;  this.left = this.right = null;}var tree = new TreeNode(1)tree.left = new TreeNode(2)tree.right = new TreeNode(3)console.time('execute')console.log(isSymmetric(tree))console.timeEnd('execute')