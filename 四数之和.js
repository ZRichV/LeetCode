/* 
给定一个包含 n 个整数的数组 nums 和一个目标值 target，
判断 nums 中是否存在四个元素 a，b，c 和 d ，
使得 a + b + c + d 的值与 target 相等？
找出所有满足条件且不重复的四元组。

给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
let fourSum = (nums, target) => {
    let len = nums.length;
    if (len < 4) {
        return [];
    }
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
        if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue;
        for (let j = i + 1; j < len - 2; j++) {
            let left = j + 1;
            let right = len - 1;
            if (j - 1 > i && nums[j] === nums[j - 1]) continue;
            while (left < right) {
                let tmp = nums[i] + nums[j] + nums[left] + nums[right];
                if (tmp == target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[left] == nums[++left]) {}
                    while (left < right && nums[right] == nums[--right]) {}
                } else {
                    tmp > target ? right-- : left++;
                }
            }
        }
    }
    return res;
};
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));