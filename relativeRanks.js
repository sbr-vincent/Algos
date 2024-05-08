/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    // Copy the input array
    let sortedArr = [...score]
    // Sort the array from high to low
    sortedArr.sort((a,b) => b-a)
    let ranking = ["Gold Medal", "Silver Medal", "Bronze Medal"]
    let answer = []

    let dict = {}
    let count = 0

    // Loop through the sorted array and start assigning values to a dictionary
    for(x of sortedArr){
        if(count < 3){
            dict[x] = dict[x] ? 0 : ranking[count]
        }else{
            dict[x] = dict[x] ? 0 : `${count + 1}`
        }

        count++
    }

    // Go through the original array and grab values from the dictionary to add to the answer array
    for(x of score){
        answer.push(dict[x])
    }

    return answer
};