/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let j = 0;
    let newArray = []
    
    for(let i = 0; i < pushed.length;i++){
        newArray.push(pushed[i])
        
        while(newArray && j < popped.length && newArray[newArray.length - 1] == popped[j] ){
            newArray.pop()
            j++
        }
    }
    
    return j == popped.length
};