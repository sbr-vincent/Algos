/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let obj = {}
    
    for(let x of nums){
        if(obj[x] == null){
            obj[x] = 1;
        }else if(obj[x] == 1){
            return x
        }
    }
};