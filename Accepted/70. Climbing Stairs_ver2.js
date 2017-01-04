// You are climbing a stair case. It takes n steps to reach to the top.
//
//   Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var fib_n = function(curr, next, n) {
    if (n === 0) {
      return curr;
    }
    else {
      return fib_n(next, curr + next, n - 1);
    }
  }
  return fib_n(0, 1, n + 1);
};

console.log(climbStairs(6))