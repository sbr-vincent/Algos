/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function(startValue, target) {
    let count = 0;
    
    while(target > startValue){
        count += 1
        if(target % 2){
            target += 1
        }else{
            target = Math.floor(target/2)
        }
    }
    
    return count + startValue - target
};