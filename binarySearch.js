/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//! time: O(log(n)) space: O(1)
var searchRange = function(nums, target) {
    if(nums.length === 0) return [-1,-1]

    const firstPos = binarySearch(nums, 0, nums.length-1, target)
    if(firstPos === -1) return [-1,-1]
    let startPos = firstPos, endPos = firstPos, temp1, temp2;

    while(startPos !== -1){
        temp1 = startPos;
        startPos = binarySearch(nums, 0, startPos - 1, target)
    }

    startPos = temp1

    while(endPos !== -1){
        temp2 = endPos;
        endPos = binarySearch(nums, endPos + 1, nums.length-1, target)
    }

    endPos = temp2

    return [startPos, endPos]
};

const binarySearch = function(nums, left, right, target){
    while(left <= right){
        const mid = Math.floor((left + right)/2);
        const foundVal = nums[mid];
        if(foundVal === target){
            return mid;
        }else if ( foundVal < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return -1
}

console.log(searchRange([5,7,7,8,8,10], 8))