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
var diameterOfBinaryTree = function(root) {
    const res = [0]
    findDiameter(root, res)

    return res[0]
};

const findDiameter = (node, res) => {
    // Base Case
    if(!node) return 0;

    // Recursively call the left and right subtrees
    const left= findDiameter(node.left, res)
    const right = findDiameter(node.right, res)

    // Check if the left and right subtrees have a bigger diamter than what we currently have
    res[0] = Math.max(res[0], left + right)

    //Return the max diamter encountered 
    return Math.max(left, right) + 1
}