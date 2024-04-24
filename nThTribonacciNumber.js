/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n < 2){
        return n;
    }

    let triplet = [0,1,1]

    for(let i = 3; i <= n; ++i){
        let next = triplet[0] + triplet[1] + triplet[2]
        triplet[0] = triplet[1]
        triplet[1] = triplet[2]
        triplet[2] = next
    }

    return triplet[2]
};