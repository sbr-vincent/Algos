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
 * @return {number[][]}
 */
//  BFS is an Iterative solution
// Time: O(n) Space: O(n)
var levelOrder = function(root) {
    if(!root) return []
    
    // Declare the array to contain all of the arrays and the queue that will get the nodes level by level
    const allLevels = [];
    let queue = [root]

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
            level.push(node.val)

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

        // Push an array of all of the nodes found at a particular level
        allLevels.push(level)
    }

    return allLevels;
};