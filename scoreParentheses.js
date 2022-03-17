var scoreOfParentheses = function(s) {
    let stack = [0]
    for(let x of s){
        if(x == '('){
            stack.push(0)
        }else{
            let v = stack.pop()
            stack[stack.length-1] += Math.max(2 * v, 1)
        }
    }
    
    return stack.pop()
};