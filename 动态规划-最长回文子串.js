/* 
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
动态规划

Array.from(arrayLike[, mapFn[, thisArg]])

arrayLike：想要转换成数组的伪数组对象或可迭代对象。
mapFn 可选：如果指定了该参数，新数组中的每个元素会执行该回调函数。
thisArg 可选：执行回调函数 mapFn 时 this 对象。
 */
//动态规划
let longestPalindrome1 = s => {
    let len = s.length;
    let res = '';
    let dp = Array.from(new Array(len), () => new Array(len).fill(0));
    for (let i = len - 1; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]);
            if (dp[i][j] && j - i + 1 > res.length) {
                res = s.substring(i, j + 1);
            }
        }
    }
    return res;
}

//中心扩展
let longestPalindrome2 = s => {
    if (!s || s.length < 2) {
        return s;
    }
    let len = s.length;
    let start = 0,
        end = 0;
    let centerExpand = (left, right) => {
        while (s[left] == s[right] && left >= 0 && right < len) {
            left--;
            right++;
        }
        return right - left - 1;
    }
    for (let i = 0; i < len; i++) {
        let len1 = centerExpand(i, i);
        let len2 = centerExpand(i, i + 1);
        let max = Math.max(len1, len2);
        if (max > end - start) {
            start = i - ((max - 1) >> 1);
            end = i + (max >> 1);
        }
    }
    return s.substring(start, end + 1);
}
let ans = longestPalindrome2('asddsa');
console.log(ans);