/* 
字符串 S 由小写字母组成。
我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。
返回一个表示每个字符串片段的长度的列表。

输入: S = "ababcbacadefegdehijhklij"
输出: [9,7,8]
解释:
划分结果为 "ababcbaca", "defegde", "hijhklij"。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。

 */

/**
 * @param {string} S
 * @return {number[]}
 */
let partitionLabels = S => {
    let map = new Map(),
        last = first = now = 0,
        res = [];
    for (let i = 0; i < S.length; i++) {
        map[S[i]] = i;
    }
    while (last < S.length) {
        first = map[S[now]];
        while (now <= first) {
            first = Math.max(first, map[S[now]]);
            now++;
        }
        res.push(first - last + 1);
        last = now;
    }
    return res;
};
console.log(partitionLabels("ababcbacadefegdehijhklij"));