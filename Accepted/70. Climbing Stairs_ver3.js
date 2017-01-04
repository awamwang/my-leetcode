// You are climbing a stair case. It takes n steps to reach to the top.
//
//   Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  return Number.parseFloat(((Math.sqrt(5) / 5) * (Math.pow((1 + Math.sqrt(5)) / 2, n + 1) - Math.pow((1 - Math.sqrt(5)) / 2, n + 1))).toFixed(0))
};

console.log(climbStairs(6))