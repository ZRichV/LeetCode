/* 
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

 */
/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = s => {
    let len = s.length;
    if (len % 2 != 0) return false;
    const map = { '(': ')', '{': '}', '[': ']' };
    let old = s.split('');
    let now = [];
    while (old.length) {
        let tmp = old.pop();
        if (map[tmp]) {
            if (map[tmp] != now.pop()) {
                return false
            }
        } else {
            now.push(tmp);
        }
    }
    return true;
};
console.log(isValid("([)]"));