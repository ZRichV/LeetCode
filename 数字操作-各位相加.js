/* 
给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。

输入: 38
输出: 2 
解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。

解题思路
假设一个三位数整数n=100a+10b+c,变化后addn=a+b+c；
两者的差值n-addn=99a+9b，差值可以被9整除，说明每次缩小9的倍数
那么我们可以对res=num%9，若不为0则返回res，为0则返回9

*/

/**
 * @param {number} num
 * @return {number}
 */
let addDigits = num => {
    if (num < 10) return num;
    return num % 9 || 9;
};
console.log(addDigits(38));