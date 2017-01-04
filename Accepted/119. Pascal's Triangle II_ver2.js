// Given an index k, return the kth row of the Pascal's triangle.
//
// For example, given k = 3,
//   Return [1,3,3,1].

// https://leetcode.com/problems/pascals-triangle-ii/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) {
    return [1]
  }
  var nowRow = []
  for (var i = 0; i <= rowIndex; i ++) {
    nowRow.push(collocate(rowIndex, i))
  }

  return nowRow
};

function collocate (n, a) {
  return factorial(n) / (factorial(a) * factorial(n - a))
}

function factorial (num) {
  if (num < 0) {
    return -1;
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
}

//time complexity: O(n * n) ;memory complexity: O(n * n) ;
console.time('execute')
console.log(getRow(100))
console.timeEnd('execute')