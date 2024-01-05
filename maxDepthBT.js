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
 * @return {number}
 */
var maxDepth = function(root) {
    // // Base case and if we have an empty tree
    // if(root == null){
    //     return 0;
    // }

    // // Go to the lowest level of the left side of the tree
    // let leftDepth = maxDepth(root.left);
    // // Go to the lowest level of the right side of the tree
    // let rightDepth = maxDepth(root.right);

    // // Compare the left and right depth and return the deepest depth
    // if(leftDepth > rightDepth){
    //     return leftDepth + 1;
    // }else{
    //     return rightDepth + 1;
    // }
    let count = 0;

    return maxHelper(root, count)
    
};

//BEST Time: O(n) Space: BEST O(log(n)) WORST O(n) if all the nodes are on one side.
const maxHelper = function(root, currentDepth) {
    if(!root){
        return currentDepth;
    }
    currentDepth++;

    return Math.max(maxHelper(root.left, currentDepth), maxHelper(root.right, currentDepth))
}