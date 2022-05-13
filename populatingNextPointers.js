/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    let startOfNextLevel = root;
    let current = null;
    let lastVisited;
    
    while(startOfNextLevel){
        current = startOfNextLevel;
        startOfNextLevel = lastVisited = null;
        
        while(current){
            for(let child of [current.left, current.right]){
                if(child){
                    if(lastVisited){
                        lastVisited.next = child
                    }else{
                        startOfNextLevel = child;
                    }
                    lastVisited = child;
                }
            }
            current = current.next;
        }
    }
    
    return root;
};