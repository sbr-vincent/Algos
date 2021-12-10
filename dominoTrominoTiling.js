/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    var MOD = 1_000_000_007;
    if (n <= 2) {
        return n;
    }
    var fPrevious = 1;
    var fCurrent = 2;
    var pCurrent = 1;
    for (let k = 3; k < n + 1; ++k) {
        var tmp = fCurrent;
        fCurrent = (fCurrent + fPrevious + 2 * pCurrent) % MOD;
        pCurrent = (pCurrent + fPrevious) % MOD;
        fPrevious = tmp;
    }
    return fCurrent;
};