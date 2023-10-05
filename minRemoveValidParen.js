/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let wordArr = s.split("")
    let stack = []
    
    for(let i = 0; i < wordArr.length; i++){
        if(wordArr[i] == "("){
            stack.push(i)
        }else if (wordArr[i] == ")"){
            const bracketPop = stack.pop()

            if(bracketPop == undefined){
                wordArr[i] = null
            }
        }
    }


    for(let j = 0; j < stack.length; j++){

        wordArr[stack[j]] = null
    }
    return wordArr.join("")
};