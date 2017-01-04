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

  var lastRow = getRow(rowIndex - 1)
  var nowRow = [1]
  for (var j = 0; j < lastRow.length - 1; j ++) {
    nowRow.push(lastRow[j] + lastRow[j + 1])
  }
  nowRow.push(1)

  return nowRow
};

//time complexity: O(n * n) ;memory complexity: O(n * n) ;
console.time('execute')
console.log(getRow(100))
console.timeEnd('execute')