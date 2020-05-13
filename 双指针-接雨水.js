/* 
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，
计算按此排列的柱子，下雨之后能接多少雨水。
上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，
在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 

 */
/**
 * @param {number[]} height
 * @return {number}
 */
let trap = height => {
    let max = 0,
        len = height.length,
        res = 0,
        leftMax = [],
        rightMax = [];
    for (let i = 0; i < len; i++) {
        leftMax[i] = max = Math.max(height[i], max);
    }
    max = 0;
    for (let i = len - 1; i >= 0; i--) {
        rightMax[i] = max = Math.max(height[i], max);
    }
    for (let i = 0; i < len; i++) {
        res += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return res;
};