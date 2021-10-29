/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    int count = 0
    let subString = ''
    for(int i = 0; i < s.length;i++){
        subString.push(s[i])
        count++
        for(int j= i+1; j < s.length, j++){
            if(!subString.includes(s[j])) {
                subString.push(s[j])
                count++
            }
        }
    }
};

console.log(lengthOfLongestSubstring("abcabcbb"))