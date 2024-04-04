/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count = 0
    let maxNum = 0

    for(let x of s){
        if(x == "("){
            count++
            maxNum = Math.max(count, maxNum)
        }
        else if(x == ")"){
            count--
        }
    }

    return maxNum
};