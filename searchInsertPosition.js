/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    var low = 0; 
    var high = nums.length-1;
    while(low<=high) {
        var mid=Math.floor((low+high)/2);
        if (nums[mid]==target){
            console.log("boop")
            return mid;
        }  
        else if (nums[mid] > target) {
            high = mid - 1; 
        }else {
            low = mid+1;
        }
    }
    return low;
};