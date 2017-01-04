// You are climbing a stair case. It takes n steps to reach to the top.
//
//   Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var pre = 2
  var prePre = 1
  var cur = 0

  if (n === 1) {
    return 1
  }

  if (n === 2) {
    return 2
  }

  for (var i = 3; i <= n; i ++) {
    cur = pre + prePre
    prePre = pre
    pre = cur
  }

  return cur
};

console.log(climbStairs(6))