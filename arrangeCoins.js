/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let coins = n;
    let i = 1;
    while(coins >= i){
        coins -= i;
        i++;
    }
    return i - 1;
};