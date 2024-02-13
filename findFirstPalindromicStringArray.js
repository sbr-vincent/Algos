/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    // If the list is empty then return ""
    if(words.length == 0){
        return ""
    }

    for(word of words){
        // Use two pointers
        let left = 0
        let right = word.length - 1
        for(left; left < word.length / 2; left++){
            // If we run into a word that is not palindronic then stop the current iteration of the loop and go to the next iteration
            if(word[left] != word[right]){
                break
            }

            right--
        }
        // If the pointers pass each other then a have a palindrome
        if(left >= right){
            return word
        }

    }

    // If we get to this point then there are no palindromic words
    return ""
};