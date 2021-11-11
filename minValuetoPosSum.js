/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let low = 0, total = 0;
    for(let i = 0; i < nums.length; i++){
        total += nums[i];
        low = Math.min(low, total)
    }
    if(low === 0){
        return 1;
    }
    else {
        return 0 - low + 1;
    }
    
};

console.log(minStartValue([-22,-29,-21,0,-4,-26,10,-11,-14,-11]))