/* 
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。
找出 nums 中的三个整数，使得它们的和与 target 最接近。
返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = (nums, target) => {
    nums.sort((a, b) => a - b);
    let sum = nums[0] + nums[1] + nums[2];
    const len = nums.length;
    for (let i = 0; i < len - 2; i++) {
        let left = i + 1;
        let right = len - 1;
        while (left < right) {
            let res = nums[i] + nums[left] + nums[right];
            if (Math.abs(sum - target) > Math.abs(res - target)) {
                sum = res;
            } else if (res === target) {
                return sum;
            } else if (res > target) {
                right--;
            } else if (res < target) {
                left++;
            }
        }
    }
    return sum;
};
console.log(threeSumClosest([-1, 2, 1, -4], 1));