/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    // Sort the array from biggest to smallest
    sortedArr = nums.sort((a,b) => b-a)

    largestPerimeterSide = 0;
    polygon = []
    otherSides = 0

    for(let i = 0; i < sortedArr.length; i++){
        largestPerimeterSide = sortedArr[i]
        polygon.push(largestPerimeterSide)

        // grab all of the values to the right of the current largestPerimeterSide
        for(let j = i + 1; j < sortedArr.length; j++){
            otherSides += sortedArr[j]
            polygon.push(sortedArr[j])
        }

        // If the other values to the right of largestPerimeterSide are greater in value
        // and the polygon is at least 3 in length then reduce the values and return the perimeter
        if(largestPerimeterSide < otherSides && polygon.length >= 3){
            return polygon.reduce((accumulator, currentVal) => accumulator + currentVal, 0)
        }
        
        polygon = []
        otherSides = 0
    }

    // Return -1 if we can't find a polygon
    return -1
};