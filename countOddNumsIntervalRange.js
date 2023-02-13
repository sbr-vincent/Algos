/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    if(high - low === 1){
        return 1
    }
    
    if(low % 2 === 1 && high % 2 === 1){
        return (Math.ceil(((high + 1) - low)/2))
    }
    else{
        return (Math.floor(((high + 1) - low)/2))
    }

    // Used a for loop to loop through the interval range
    // for(let i = low; i < high + 1; i++){
    //     if(i % 2 === 1){
    //         numOfOdds++
    //     }
    // }

    // return numOfOdds
};