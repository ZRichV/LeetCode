/* 
给定整数数组 A，每次 move 操作将会选择任意 A[i]，并将其递增 1。

返回使 A 中的每个值都是唯一的最少操作次数。

输入：[1,2,2]
输出：1
解释：经过一次 move 操作，数组将变为 [1, 2, 3]。
*/
/**
 * @param {number[]} A
 * @return {number}
 */
let minIncrementForUnique = A => {
    let move = 0;
    A.sort((a, b) => a - b);
    for (let i = 1; i < A.length; i++) {
        if (A[i] <= A[i - 1]) {
            let n = A[i - 1] + 1 - A[i];
            A[i] += n;
            move += n;
        }
    }
    return move;
};
console.log(minIncrementForUnique([1, 2, 2]));