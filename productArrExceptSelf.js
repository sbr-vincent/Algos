/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let currentProduct = 1;
    let answer = [];
    
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(j == i){
                continue;
            } else {
                currentProduct *= nums[j];
            }
        }
        
        answer.push(currentProduct);
        currentProduct = 1;
    }
    
    return answer;
};