/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    var remainder = 0;
    for (let x = 1; x <= k; x++) {
        remainder = (remainder * 10 + 1) % k;
        if (remainder == 0) {
            return x;
        }
    }
    return -1;
};