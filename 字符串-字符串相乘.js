/* 
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，
它们的乘积也表示为字符串形式。 

输入: num1 = "2", num2 = "3"
输出: "6"
*/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let multiply = (num1, num2) => {
    if (num1 === '0' || num2 === '0') return '0';
    let len1 = num1.length,
        len2 = num2.length,
        res = new Array(len1 + len2).fill(0);
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            const tmp = num1[i] * num2[j];
            const p1 = i + j,
                p2 = i + j + 1;
            const sum = tmp + res[p2];
            res[p1] += Math.floor(sum / 10);
            res[p2] = sum % 10;
        }
    }
    while (res[0] === 0) res.shift();
    return res.join('');
};
console.log(multiply("2", "3"));