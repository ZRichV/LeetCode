/* 
给定一个包含 m x n 个元素的矩阵（m 行, n 列），
请按照顺时针螺旋顺序，返回矩阵中的所有元素。

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
*/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = matrix => {
    const m = matrix.length - 1;
    let res = [];
    if (m < 0) return res;
    const n = matrix[0].length - 1;
    let i = 0,
        j = 0,
        turn = n == 0 ? 'd' : 'r',
        // 边界
        bu = 0,
        br = n,
        bd = m,
        bl = 0;
    for (let a = 0; a < (m + 1) * (n + 1); a++) {
        res.push(matrix[i][j]);
        if (turn == 'r') {
            j++;
            if (j == br) {
                bu++;
                turn = 'd';
            }
        } else if (turn == 'd') {
            i++;
            if (i == bd) {
                br--;
                turn = 'l';
            }
        } else if (turn == 'l') {
            j--;
            if (j == bl) {
                bd--;
                turn = 'u';
            }
        } else if (turn == 'u') {
            i--;
            if (i == bu) {
                bl++;
                turn = 'r'
            }
        }
    }
    return res;
};
console.log(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));