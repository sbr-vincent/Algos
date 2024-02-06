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
 * @return {number[]}
 */

// Breadth First Search solution
var BreadthFirstrightSideView = function(root) {
    // If there is nothing in the root then return []
    if(!root) return []
    
    const allLevels = [];
    let queue = [root]

    // Keep looping while there are things in the queue
    while(queue.length){
        let count = 0;
        let levelCount = queue.length

        while(count < levelCount){
            // Take the first node in the queue
            let node = queue.shift();

            // Add its left child to the queue
            if(node.left !== null){
                queue.push(node.left)
            }

            // Add its right child to the queue
            if(node.right !== null){
                queue.push(node.right)
            }

            count++

            // if count and levelCount are the same then we have reached the end of one of the levels
            // therefore we add it to the allLevels array
            if(count === levelCount){
                allLevels.push(node.val)
            }
        }

    }

    return allLevels;
};

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
 * @return {number[]}
 */
var DepthFirstrightSideView = function(node) {
    if(!node) return []
    
    let count = 0;
    const allLevels = [];

    // Call recursive helper
    recursiveHelper(node, count, allLevels)

    return allLevels;

};

var recursiveHelper = function(node, count, allLevels){
    // if we hit a leaf node then return nothing
    if(!node) return

    // if the count is greater than or equal then push it to the allLevels array as that is the node
    // furthest to the right and the first node we hit each level
    if(count >= allLevels.length){
        allLevels.push(node.val)
    }

    if(node.right){
        recursiveHelper(node.right, count + 1, allLevels)
    }
    
    if(node.left){
        recursiveHelper(node.left, count + 1, allLevels)
    }
}