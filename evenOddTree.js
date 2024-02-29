/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    if(!root) return []
    
    let queue = [root]
    let currentLevel = 0

    // While there are nodes in the queue we keep going down a level
    while(queue.length){
        // These two variables will be used to see where we are at in the level
        let count = 0;
        let levelCount = queue.length
        // Empty array to hold each node found at the current level
        const level = []

        while(count < levelCount){
            // Grab a node from the queue and add it to the level array
            let node = queue.shift();
            if(currentLevel % 2 == 0){
                if(node.val % 2 != 1){
                    return false
                }
                level.push(node.val)
                if(level.length > 1){
                    if(level[level.length -1] <= level[level.length -2]){
                        return false
                    }
                }
            }
            else if(currentLevel % 2 == 1){
                if(node.val % 2 != 0){
                    return false
                }
                level.push(node.val)
                if(level.length > 1){
                    if(level[level.length -1] >= level[level.length -2]){
                        return false
                    }
                }
            }

            // If it has any children then add them to the queue
            if(node.left !== null){
                queue.push(node.left)
            }

            if(node.right !== null){
                queue.push(node.right)
            }
            // increment so that we can keep track of which node we are on in the level
            count++
        }

        currentLevel++
    }

    return true;
};