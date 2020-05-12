/* 
判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 */

/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = x => {
    //return x.toString() == x.toString().split('').reverse().join('');
    if (x < 0) return false;
    if (x < 10) return true;
    let left = 1;
    let right = 0;
    let num = x;
    while (num >= 1) {
        num /= 10;
        right++;
    }
    let getNum = (_x, n) => {
        return Math.floor(_x % Math.pow(10, n) / Math.pow(10, n - 1));
    }
    while (right > left) {
        if (getNum(x, left) != getNum(x, right)) return false;
        left++;
        right--;
    }
    return true;
};
console.log(isPalindrome(123));