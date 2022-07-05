var longestConsecutive = function(nums) {
    nums.sort((a,b) => (a-b))
    let counter = 1 
    let max = 0 
    console.log(nums)
    
    for(let i=0; i<nums.length; i++){
        if((nums[i]+1) == nums[i+1]){
            counter++
        }else if(nums[i] == nums[i+1]){
            continue 
        }
        else{
            max = Math.max(counter, max)
            counter = 1
        }
    } return max
    
};