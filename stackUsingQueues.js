
var MyStack = function() {
    let stack = []
    
    /** 
     * @param {number} x
     * @return {void}
     */
    MyStack.prototype.push = function(x) {
        stack.push(x)
    };

    /**
     * @return {number}
     */
    MyStack.prototype.pop = function() {
        return stack.pop()
    };

    /**
     * @return {number}
     */
    MyStack.prototype.top = function() {
        return stack[stack.length - 1]
    };

    /**
     * @return {boolean}
     */
    MyStack.prototype.empty = function() {
        if(stack.length != 0){
            return false
        }else{
            return true
        }
    };
};