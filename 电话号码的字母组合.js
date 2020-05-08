/* 

给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = digits => {
    if (!digits) return [];
    let len = digits.length;
    let map = new Map();
    map.set('2', 'abc');
    map.set('3', 'def');
    map.set('4', 'ghi');
    map.set('5', 'jkl');
    map.set('6', 'mno');
    map.set('7', 'pqrs');
    map.set('8', 'tuv');
    map.set('9', 'wxyz');
    let res = [];

    function _gen(i, str) {
        if (i == len) {
            res.push(str);
            return;
        }
        let tmp = map.get(digits[i]);
        for (let j = 0; j < tmp.length; j++) {
            _gen(i + 1, str + tmp[j]);
        }
    }
    _gen(0, '');
    return res;
};
console.log(letterCombinations("23"));