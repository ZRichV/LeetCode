/* 
给定一个含有 n 个正整数的数组和一个正整数 s ，
找出该数组中满足其和 ≥ s 的长度最小的连续子数组，并返回其长度。
如果不存在符合条件的连续子数组，返回 0。

输入: s = 7, nums = [2,3,1,2,4,3]
输出: 2
解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
let minSubArrayLen = (s, nums) => {
    let len = nums.length,
        min = Number.MAX_SAFE_INTEGER,
        left = 0,
        tmpAdd = 0;
    for (let i = 0; i < len; i++) {
        tmpAdd += nums[i];
        while (tmpAdd >= s) {
            min = Math.min(min, i - left + 1);
            tmpAdd -= nums[left++];
        }
    }
    return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));