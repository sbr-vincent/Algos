/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let temp = ''
    let front = 0
    let back = s.length-1
    
    while(front < back){
        temp = s[front]
        s[front] = s[back]
        s[back] = temp
        front++
        back--
    }
};