/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    sorted_arr = nums.sort((a,b) => a-b)

    if(sorted_arr[0] > 0){
        return -1
    }

    let negative = 0
    let positive = sorted_arr.length - 1

    while(negative !== positive){
        if(sorted_arr[positive] === Math.abs(sorted_arr[negative])){
            return sorted_arr[positive]
        }
        else if(sorted_arr[positive] > Math.abs(sorted_arr[negative])){
            positive--
        }
        else{
            negative++
        }
    }

    return -1
};