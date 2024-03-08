/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let currentFrequency = 1
    let frequencyMap = {}
    let maxFrequency = 0

    // Loop through the array and keep track of each numbers occurence in an object
    for(x of nums){
        if(frequencyMap[x] == undefined){
            frequencyMap[x] = 1
        }else{
            frequencyMap[x] += 1
            // Only change the currentFrequency if a number has a higher occurence
            currentFrequency = Math.max(currentFrequency, frequencyMap[x])
        }
    }

    // Loop through the dictionary and add up all of the occurance that match the currentFrequency
    for(count in frequencyMap){
        if(frequencyMap[count] == currentFrequency){
            maxFrequency += frequencyMap[count]
        }
    }

    return maxFrequency
};