// Given numRows, generate the first numRows of Pascal's triangle.
//
// For example, given numRows = 5,
//   Return
//
//     [
//        [1],
//       [1,1],
//      [1,2,1],
//     [1,3,3,1],
//    [1,4,6,4,1]
//     ]

// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) {
    return []
  }

  var res = [[1]]
  var lastRow
  for (var i = 2; i <= numRows; i ++) {
    lastRow = res[i - 2]

    var nowRow = []
    nowRow.push(1)
    for (var j = 0; j < lastRow.length - 1; j ++) {
      nowRow.push(lastRow[j] + lastRow[j + 1])
    }
    nowRow.push(1)
    res.push(nowRow)
  }

  return res
};

//time complexity: O(n * n) ;memory complexity: O(n * n) ;

console.time('execute')
console.log(generate(5))
console.timeEnd('execute')