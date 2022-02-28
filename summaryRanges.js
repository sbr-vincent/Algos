/**
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
    if(nums.length == 0){
        return [];
    }
    
    let start = nums[0];
    let rangeArr = [];
    
    for(let i = 0; i < nums.length; i++){
        if(i === nums.length-1){
            if(start == nums[i]){
                rangeArr.push(`${start}`);
            }else{
                rangeArr.push(`${start}->${nums[i]}`);
            }
        }else if(nums[i]+1 == nums[i+1]){
            continue;
        }else{
            if(start == nums[i]){
                rangeArr.push(`${start}`);
                start = nums[i+1];
            }else{
                rangeArr.push(`${start}->${nums[i]}`);
                start = nums[i+1];
            }
        }
    }
    
    return rangeArr;
};