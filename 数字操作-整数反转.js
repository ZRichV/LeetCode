/* 
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。
请根据这个假设，如果反转后整数溢出那么就返回 0。
*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = x => {
    let rev = Math.abs(x).toString().split('').reverse().join('');
    if (x < 0) {
        return rev <= Math.pow(2, 31) ? -rev : 0;
    } else {
        return rev < Math.pow(2, 31) ? rev : 0;
    }
};
console.log(reverse(-123));