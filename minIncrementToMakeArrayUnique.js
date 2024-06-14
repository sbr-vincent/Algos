/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    let numsSorted = [...nums].sort((a,b) => a-b)
    let numTracker = 0
    let counter = 0

    for (let num of numsSorted){
        numTracker = Math.max(numTracker, num)
        counter += numTracker - num
        numTracker++
    }

    return counter
};