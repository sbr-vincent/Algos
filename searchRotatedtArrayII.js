/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    
    function findPivot(low, high) {
        if(high - low === 1 && nums[high] < nums[low]) return high;
        if(high - low <= 1) return 0;
        
        const mid = Math.floor((low + high) / 2);
        
        if(nums[mid] > nums[high]) return findPivot(mid, high);
        if(nums[mid] < nums[low]) return findPivot(low, mid);
        return Math.max(findPivot(low, mid), findPivot(mid, high));
    }
    
    function binarySearch(start, end) {
        while(start <= end) {
            const mid = Math.floor((start + end) / 2);
            
            if(nums[mid] === target) return true;
            if(nums[mid] > target) end = mid - 1;
            else start = mid + 1;
        }
        return false;
    }
    
    const minIdx = findPivot(0, nums.length-1)
    return binarySearch(0, minIdx-1) || binarySearch(minIdx, nums.length-1)
};