/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var minElement = nums[0];
    
    for(let i = 0; i < nums.length; i++){
        minElement = Math.min(nums[i], minElement)
    }
    
    return minElement;
};