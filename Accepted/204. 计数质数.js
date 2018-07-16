// 统计所有小于非负整数 n 的质数的数量。

// 示例:

// 输入: 10
// 输出: 4
// 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。

// https://leetcode-cn.com/problems/count-primes/description/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  var isPrime = Array(n + 1).fill(true, 1, n)
  isPrime[1] = false
  var res = 0,
    limit = Math.sqrt(n)
  for (let i = 2; i <= limit; ++i) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  for (let i = 1; i <= n - 1; ++i) {
    if (isPrime[i]) ++res;
  }
  return res;
};

console.log(countPrimes(10))