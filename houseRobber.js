/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length == 0) return 0;
    
    var prev1 = 0;
    var prev2 = 0;
    
    nums.forEach((num) => {
        var temp = prev1;
        prev1 = Math.max(num + prev2, prev1);
        prev2 = temp;
    })
    
    return prev1;
};



