// 69. Sqrt(x)
//
// Implement int sqrt(int x).
//
// Compute and return the square root of x.

// https://leetcode.com/problems/sqrtx/#/description

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x <= 0) {
    return x
  }

  function sqrt (x, g) {
    if (typeof g === 'undefined') {
      g = x
    }

    if (Math.abs(g * g - x) < 0.1) {
      return g
    } else {
      g = (g + x / g) / 2
      return sqrt(x, g)
    }
  }

  return Number.parseInt(sqrt(x))
};

console.log(mySqrt(4))
console.log(mySqrt(9))