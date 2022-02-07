/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    s = s.split("")
    t = t.split("")
    var count = 0;
    
    s.sort()
    t.sort()
    
    while(count < t.length){
        if(s[count] != t[count]){
            return t[count]
        }
        count++
    }
};