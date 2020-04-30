/* 
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */
/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = s => {
    let res = ""; //当前无重复子串
    let max = 1; //最大长度
    let left = 0; //当前无重复字串的起始下标
    let loop = 0;
    let idx;
    while (loop < s.length && max < s.length - left) {
        idx = res.indexOf(s[loop]);
        if (idx >= 0) {
            //已经存在
            left += idx + 1;
        }
        res = s.slice(left, loop + 1);
        max = Math.max(res.length, max);
        loop++;
    }
    return max;
};
let ans = lengthOfLongestSubstring("asdfghjk");
console.log(ans);