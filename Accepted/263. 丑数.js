// 编写一个程序判断给定的数是否为丑数。

// 丑数就是只包含质因数 2, 3, 5 的正整数。

// 示例 1:

// 输入: 6
// 输出: true
// 解释: 6 = 2 × 3
// 示例 2:

// 输入: 8
// 输出: true
// 解释: 8 = 2 × 2 × 2
// 示例 3:

// 输入: 14
// 输出: false 
// 解释: 14 不是丑数，因为它包含了另外一个质因数 7。
// 说明：

// 1 是丑数。
// 输入不会超过 32 位有符号整数的范围: [−231,  231 − 1]。

// https://leetcode-cn.com/problems/ugly-number/description/

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num < 1) {
    return false
  } else if (num === 1) {
    return true
  } else {
    let canDiv = 0
    function divide (divisor, num) {
      if (num % divisor === 0) {
        num = num / divisor
        canDiv = 1
      }

      return num
    }

    while (num !== 1) {
      num = divide(2, num)
      num = divide(3, num)
      num = divide(5, num)

      if (!canDiv) {
        return false
      } else {
        canDiv = 0
      }
    }

    return true
  }
};

console.log(isUgly(1))
console.log(isUgly(6))
console.log(isUgly(8))
console.log(isUgly(14))