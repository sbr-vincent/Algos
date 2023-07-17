/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;
    
    // Brute Force
    // let j = 0;
    // let subString = {}
    // let longestSubString = 0
    
    // for(let i = 0; i < s.length;i++){
    //     subString[s[i]] = s[i]
        
    //     j = i + 1;
    //     while(j < s.length && subString[s[j]] === undefined){
    //         subString[s[j]] = s[j]
    //         j++
    //     }     
        
    //     longestSubString = Math.max(longestSubString, Object.keys(subString).length)
    //     subString = {}
    // }

    // Optimized
    let subString = {}
    let longestSubString = 0
    let leftPointer = 0;

    for(let right = 0; right < s.length; right++){
        if(subString[s[right]] >= leftPointer){
            leftPointer = subString[s[right]] + 1
            
        }

        subString[s[right]] = right;
        longestSubString = Math.max(longestSubString, right - leftPointer + 1)
    }


    
    return longestSubString
};