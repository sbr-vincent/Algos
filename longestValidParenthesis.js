/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    if(s.length < 2) return 0;
    
    const stack = [-1];
    let max = 0;
    
    for(let char in s){
        console.log(stack[stack.length-1])
        if(s[char] === "("){
            stack.push(char);
        } else{
            stack.pop()
            if(stack.length === 0){
                stack.push(char)
            }else{
                max = Math.max(max, char - (stack[stack.length-1]))
            }
        }
    }

    return max;
};