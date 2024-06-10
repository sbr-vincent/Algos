/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let expected = [...heights]
    let count = 0
    expected.sort((a,b) => a-b)

    for(let i = 0; i < heights.length; i++){
        if(expected[i] != heights[i]){
            count++
        }
    }

    return count
};