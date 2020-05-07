/* 
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。
给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = nums => {
    let len = nums.length;
    let res = [];
    nums.sort((a, b) => a - b);
    if (nums[0] <= 0 && nums[len - 1] >= 0) { // 优化1: 整个数组同符号，则无解
        for (let i = 0; i < len - 2;) {
            if (nums[i] > 0) break; // 优化2: 最左值为正数则一定无解
            let first = i + 1;
            let last = len - 1;
            while (first < last) {
                if (nums[i] * nums[last] > 0) break; // 三人同符号，则退出
                let result = nums[i] + nums[first] + nums[last];
                if (result == 0) {
                    res.push([nums[i], nums[first], nums[last]]);
                }
                if (result < 0) { // 小的持续右移排除相同
                    while (first < last && nums[first] == nums[++first]) {}
                } else { //大的持续左移排除相同
                    while (first < last && nums[last] == nums[--last]) {}
                }
            }
            while (nums[i] == nums[++i]) {} //排除相同
        }
    }
    return res;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));