/* 
给出一个区间的集合，请合并所有重叠的区间。

输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length == 0) {
        return []
    }
    let res = [];
    intervals.sort((a, b) => a[0] - b[0]);
    res.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] > res[res.length - 1][1]) {
            res.push(intervals[i]);
        } else {
            if (intervals[i][1] > res[res.length - 1][1]) {
                res[res.length - 1][1] = intervals[i][1];
            }
        }
    }
    return res;
};
console.log(merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
]));