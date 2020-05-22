/* 
给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。

输入: "(()"
输出: 2
解释: 最长有效括号子串为 "()"
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let len = s.length,
        stack = [-1],
        ans = 0;
    for (let i = 0; i < len; i++) {
        if (s[i] === '(') {
            stack.push(i)
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                ans = Math.max(ans, i - stack[stack.length - 1]);
            }
        }
    }
    return ans;
};
console.log(longestValidParentheses("(()"))