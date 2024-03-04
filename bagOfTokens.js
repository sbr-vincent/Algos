/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    // if there are no tokens then return 0
    if(tokens.length == 0){
        return 0
    }
    // If the token array only has one then check if we can play a token face-up or not
    else if(tokens.length == 1){
        if(power >= tokens[0]){
            return 1
        }else{
            return 0
        }
    }

    let left = 0
    let right = tokens.length - 1
    let maxScore = 0
    let side = true
    // Sort the array from low to high
    const sortedArr = tokens.sort((a,b) => a-b)
    
    // If the lowest value is greater than the initial power then we can't play the game. Return 0
    if(power < sortedArr[0]){
        return 0
    }

    // Move through the sorted array until our two pointers meet
    while(left != right){
        if(side == true){
            if(sortedArr[left] <= power){
                power -= sortedArr[left]
                maxScore += 1
                left++
            }
        }
        else{
            power += sortedArr[right]
            maxScore -= 1
            right--
        }

        // This helps us determine if we need to be looking at the left or right pointer.
        (power - sortedArr[left] >= 0) ? side = true : side = false
    }

    // We do this because we haven't looked at the token where the left and right meet yet.
    if(sortedArr[left] <= power){
        power -= sortedArr[left]
        maxScore += 1
    }

    return maxScore
};