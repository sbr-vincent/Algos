/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    var evenCnt = 0;
    var oddCnt = 0;
    
    for(let i = 0; i < position.length; i++) {
        if(position[i]%2 == 0) {
            evenCnt++;
        }else{
            oddCnt++;
        }
    }
    
    return Math.min(evenCnt, oddCnt)
};