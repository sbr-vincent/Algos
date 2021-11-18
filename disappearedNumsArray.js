var findDisappearedNumbers = function(nums) {
    var number = []
    for(let i = 0; i < nums.length; i++){
        if(!nums.includes(i+1)){
            number.push(i+1);
        }
    }
    
    return number
};