/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//Used combinatrics
var uniquePaths = function(m, n) {
    var N = n+m-2; // total steps = n-1 + m-1
    var r = Math.min(n,m) - 1; // will iterate on the minimum for efficiency = 
    //(total) C (Math.min(right,down))
    
    var res = 1;
    
    //compute nCr
    for(let i = 1; i <= r; ++i, N--){
        res = res * (N) / i;
    }
    
    return Math.floor(res);
};