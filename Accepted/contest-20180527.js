// 3 x 3 的幻方是一个填充有从 1 到 9 的不同数字的 3 x 3 矩阵，其中每行，每列以及两条对角线上的各数之和都相等。

// 给定一个由整数组成的 N × N 矩阵，其中有多少个 3 × 3 的 “幻方” 子矩阵？（每个子矩阵都是连续的）。



// 示例 1:

// 输入: [[4,3,8,4],
//       [9,5,1,9],
//       [2,7,6,2]]
// 输出: 1
// 解释: 
// 下面的子矩阵是一个 3 x 3 的幻方：
// 438
// 951
// 276

// 而这一个不是：
// 384
// 519
// 762

// 总的来说，在本示例所给定的矩阵中只有一个 3 x 3 的幻方子矩阵。

// 提示:

// 1 <= grid.length = grid[0].length <= 10
// 0 <= grid[i][j] <= 15

// https://leetcode-cn.com/contest/weekly-contest-86/problems/magic-squares-in-grid/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
	let N = grid.length;
	if ((N <= 3) && (grid[0].length <= 3)) {
		return 0;
	}
	let count = 0;

	for (let i = 0; i < N - 2; i++) {
		for (let j = 0; j < N - 2; j++) {
			let sonGrid = [];
			sonGrid.push(grid[i].slice(j, j + 3));
			sonGrid.push(grid[i + 1].slice(j, j + 3));
			sonGrid.push(grid[i + 2].slice(j, j + 3));

			if (isMagicGrid(sonGrid)) {
				count ++;
			}
		}
	}

	return count;
};

let isMagicGrid = function (grid) {
	let sum = grid[0][0] + grid[0][1] + grid[0][2]
	
	if ((
		sum !== (grid[1][0] + grid[1][1] + grid[1][2])
	) 
	|| (
		sum !== (grid[2][0] + grid[2][1] + grid[2][2])
	)) {
		return false;
	}

	if ((sum !== (grid[0][0] + grid[1][0] + grid[2][0])) 
	||	(
		(grid[0][0] + grid[1][0] + grid[2][0]) !== (grid[0][1] + grid[1][1] + grid[2][1])
	) 
	|| (
		(grid[0][0] + grid[1][0] + grid[2][0]) !== (grid[0][2] + grid[1][2] + grid[2][2])
	)) {
		return false;
	}

	if ((sum !== (grid[0][0] + grid[1][1] + grid[2][2])) 
	|| (grid[0][0] + grid[1][1] + grid[2][2]) !== (grid[0][2] + grid[1][1] + grid[2][0])
	) {
		return false;
	}

	return true;
};

// console.log(numMagicSquaresInside([[4,3,8,4],
// 	[9,5,1,9],
// 	[2,7,6,2],
// 	[1,7,6,2]]));

console.log(numMagicSquaresInside([[10,3,5],[1,6,11],[7,9,2]]))