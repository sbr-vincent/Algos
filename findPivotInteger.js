/**
 * @param {number} n
 * @return {number}
 */

// Brute Force
var pivotInteger = function(n) {
    let left = 0
    let right = 0
    let currentVal = n

    while(currentVal > 0){
        // Add all the values to the left
        for(let i = currentVal; i > 0; i--){
            left += i
        }

        // Add all the values to the right
        for(let j = currentVal; j <= n; j++){
            right += j
        }

        // If they are the same then return the current value
        if(left == right){
            return currentVal
        }

        // Reset the values
        currentVal--
        left = 0
        right = 0
    }

    // We couldn't find a pivot integer
    return -1
};

// Optimized
var pivotInteger = function(n) {
    // Get the square root of this equation and if it is a whole number then we return x floored. 
    let x = Math.sqrt(n * (n + 1) / 2);
    
    if (x % 1 !== 0) {
        return -1;
    } else {
        return Math.floor(x);
    }
};