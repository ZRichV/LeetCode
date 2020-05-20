/* 
给定一个 m x n 的矩阵，如果一个元素为 0，
将其所在行和列的所有元素都设为 0。请使用原地算法。

输入: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]

*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    if (m === 0) return [];
    const n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                for (let row = 0; row < m; row++) {
                    if (matrix[row][j] != 0) {
                        matrix[row][j] = true;
                    }
                }
                for (let col = 0; col < n; col++) {
                    if (matrix[i][col] != 0) {
                        matrix[i][col] = true;
                    }
                }
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (typeof(matrix[i][j]) == 'boolean') {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
};
console.log(setZeroes([ 
    [1, 1, 1],  
    [1, 0, 1],  
    [1, 1, 1]
]));