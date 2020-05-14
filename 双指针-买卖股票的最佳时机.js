/* 
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），
设计一个算法来计算你所能获取的最大利润。

输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，
最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6,
      因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

 */
/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = prices => {
    let min = Number.MAX_SAFE_INTEGER,
        max = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else {
            max = Math.max(max, prices[i] - min);
        }
    }
    return max;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));