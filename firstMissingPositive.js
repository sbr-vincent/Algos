/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let set = new Set()

    for(let x of nums){
        if(x > 0){
            set.add(x)
        }
    }

    let missingNum = 1

    while(set.has(missingNum)){
        missingNum++
    }

    return missingNum
};