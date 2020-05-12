/* 
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

输入: ["flower","flow","flight"]
输出: "fl"
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = strs => {
    if (strs.length == 0) return '';
    let ans = strs[0];
    for (let str of strs) {
        let j = 0;
        for (; j < ans.length && j < str.length; j++) {
            if (ans[j] != str[j]) break;
        }
        // for (let i = 1; i < strs.length; i++) {
        //     let j = 0;
        //     for (; j < ans.length && j < strs[i].length; j++) {
        //         if (ans[j] != strs[i][j])
        //             break;
        //     }
        ans = ans.substring(0, j);
        if (ans === '') return ans;
    }
    return ans;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));