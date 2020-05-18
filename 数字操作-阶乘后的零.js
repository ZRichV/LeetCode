/* 
给定一个整数 n，返回 n! 结果尾数中零的数量。

输入: 3
输出: 0
解释: 3! = 6, 尾数中没有零。
*/
/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = n => {
    let total = 0;
    while (n >= 5) {
        n = Math.floor(n / 5);
        total += n;
    }
    return total;
};