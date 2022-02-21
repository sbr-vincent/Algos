/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hashTable = {};
    
    for(let i = 0; i < nums.length; i++){
        if(hashTable[nums[i]] == null){
            hashTable[nums[i]] = 1;
        }else {
            hashTable[nums[i]] +=1;
        }
    }
    
    for(const num in hashTable){
        if(hashTable[num] > nums.length/2){
            return num
        }
    }
};