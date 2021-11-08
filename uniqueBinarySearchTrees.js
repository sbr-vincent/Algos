/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    
    var catalan = [];
    catalan[0] = catalan[1] = 1;
    
    for(var i = 2; i <= n; i++) {
        catalan[i] = 0;
        for(var j = 0; j<i; ++j){
            catalan[i] += catalan[j] * catalan[i-j-1];
        }
    }
    
    return catalan[n];
    
};