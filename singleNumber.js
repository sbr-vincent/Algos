/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var numsTable = {};
    
    for(let i = 0; i < nums.length; i++){
        if(numsTable[nums[i]] == null){
            numsTable[nums[i]] = 1;
        }else {
            numsTable[nums[i]] += 1;
        }
    }
    
    for(var num in numsTable){
        if(numsTable[num] == 1){
            return num
        }
    }
};