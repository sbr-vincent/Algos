/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var hashTable = {};
    
    for(let i = 0; i < nums.length; i++){
        if(hashTable[nums[i]] == null){
            hashTable[nums[i]] = 1;
        } else {
            hashTable[nums[i]] +=1;
        }
    }
    
    for(const key in hashTable){
        if(hashTable[key] > 1){
            return true;
        }
    }
    
    return false;
};