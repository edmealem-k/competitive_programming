/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    //  prices [1,3,4,2]
    //  money 3
    //  [1, 2] -> leftover = 0 without going -ve

    //  prices 3, 2, 3
    //  money 3
    //  we can buy two chocolates without going to dubt, so we wont buy
    //  and return the money
    let leftover = 0;
    let bought = false


    // prices = [3,2,3]
    // money = 3
    // expected output = 0
    // i = 2, diff = money - prices[i] = 3 - 3 = 0
    // j = 1, diff >= prices[j]
    for(let i = 0; i < prices.length; i++) {
        const diff = money - prices[i]

        for (let j = i + 1; j < prices.length; j++) {
            if (diff >= prices[j]) {
                leftover = Math.max(leftover, diff - prices[j])
                bought = true
            }
        }
    }

    return bought ? leftover : money
};