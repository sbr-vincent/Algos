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

// Revised code
var largestPerimeter2 = function(nums) {
    // Sort smallest to biggest
    nums.sort((a, b) => a - b);

    // Add up the value in the sorted array
    let sum = nums.reduce((acc, val) => acc + val, 0);
    let n = nums.length;

    // loop backwards and exit if we are on the 1st index
    for (let i = n - 1; i >= 2; i--) {
        // Subtract the value we are looking at from the sum
        sum -= nums[i];
        // if the sum is still greater than the value
        // we just subtracted then return the sum plus the value we subtracted earlier
        if (sum > nums[i]) {
            return sum + nums[i];
        }
    }
    return -1;
};