/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let arr = [];
    
    helperFunction("(", 1, 0)

    function helperFunction(parenthesis, openParen, closeParen){
        if(openParen === n && closeParen === n){
            arr.push(parenthesis)
            return
        }

        if(openParen !== n){
            helperFunction(parenthesis + "(", openParen + 1, closeParen)
        }
        
        if(openParen > closeParen){
            helperFunction(parenthesis + ")", openParen, closeParen+1)
        }  
    }

    return arr
};