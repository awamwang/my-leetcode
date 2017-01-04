// Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.
//
//   The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
//
//
//   A partially filled sudoku which is valid.
//
//   Note:
// A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  var matrix = board;
  for (let i = 0; i < 9; i++) {
    let array = [];
    for (let j = 0; j < 9; j++) {
      array.push(matrix[i][j]);
    }
    if (!validate(array)) {
      return false;
    }
  }

  for (let i = 0; i < 9; i++) {
    let array = [];
    for (let j = 0; j < 9; j++) {
      array.push(matrix[j][i]);
    }
    if (!validate(array)) {
      return false;
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let array = [];
      for (let x = i * 3; x < (i + 1) * 3; x++) {
        for (let y = j * 3; y < (j + 1) * 3; y++) {
          // console.log(x, y)
          array.push(matrix[x][y]);
        }
      }
      if (!validate(array)) {
        return false;
      }
    }
  }
  return true;
};

function validate (array) {
  let len = array.length;
  if (len !== 9) {
    return false;
  }

  for (let i = len - 1; i >= 0; i--) {
    let n = array[i];
    if (/\d/.test(n)) {
      if (n === 0) {
        return false;
      }
      if (array.slice(i + 1, len).findIndex(function (ele) {
          return (ele === n)
        }) !== -1) {
        return false;
      }
    }
  }
  return true;
}

//time complexity: O(3^2*9^2) ;memory complexity: O(9^2) ;

var board = [[".","8","7","6","5","4","3","2","1"],["2",".",".",".",".",".",".",".","."],["3",".",".",".",".",".",".",".","."],["4",".",".",".",".",".",".",".","."],["5",".",".",".",".",".",".",".","."],["6",".",".",".",".",".",".",".","."],["7",".",".",".",".",".",".",".","."],["8",".",".",".",".",".",".",".","."],["9",".",".",".",".",".","9",".","."]]
console.log(isValidSudoku(board));
