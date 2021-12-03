/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var palindrome = true;
    var palNum = x.toString();
    var i = 0;
    var j = palNum.length -1;
    console.log(j)
    while(i < j){
        if(palNum[i] != palNum[j]){
            palindrome = false;
            return palindrome;
        }
        
        i++;
        j--;
    }
    
    return palindrome
};