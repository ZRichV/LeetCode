/* 
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
你可以假设 nums1 和 nums2 不会同时为空。
nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
 */
let findMedianSortedArrays = (nums1, nums2) => {
    let res = [];
    res = nums1.concat(nums2);
    res.sort((a, b) => a - b);
    if (res.length == 1) {
        return res[0];
    }
    if (res.length % 2 != 0) {
        return res[Math.floor(res.length / 2)];
    }
    let ans = res[res.length / 2 - 1] + res[res.length / 2]
    return ans / 2;
}
let ans = findMedianSortedArrays([1, 3], [2]);
console.log(ans);