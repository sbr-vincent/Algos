/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort(function(a, b) {
    return a - b;
    })

    while(stones.length > 1){
        if(stones[stones.length-1] == stones[stones.length-2]){
            stones.pop()
            stones.pop()
        }else{
            stones[stones.length-2] = stones[stones.length-1] - stones[stones.length-2]
            stones.pop()
        }
        stones.sort(function(a, b) {
        return a - b;
        })
    }
    
    return stones
};