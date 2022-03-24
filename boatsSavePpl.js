/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let sortedArr = people.sort(function(a, b){return a-b})
    
    let i = 0, j = people.length -1;
    let count = 0;
    
    while(i <= j){
        count++
        if(sortedArr[i] + sortedArr[j] <= limit){
            i++
        }
        
        j--
    }
    
    return count
};