/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let counter = 0
    let firstHalf = ""

    while(counter !== word.length){
        // Keep adding letters to the front of the string
        firstHalf = word[counter] + firstHalf

        // If we have reached the desired letter then we can add the firstHalf that we
        // have been reversing and then slice the remaining part of the word to the firstHalf
        if(word[counter] === ch){
            return firstHalf + word.slice(counter+1)
        }

        counter++
    }

    // If we exit the loop then we couldn't find the ch in the word and just return the word
    return word
};