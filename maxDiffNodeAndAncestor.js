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
var maxAncestorDiff = function(root) {
    if(root == null) return 0;
    
    return helper(root, root.val, root.val);
};

var helper = function(node, curMax, curMin){
    if(node == null) return curMax - curMin;
    
    curMax = Math.max(curMax, node.val);
    curMin = Math.min(curMin, node.val);
    var left = helper(node.left, curMax, curMin);
    var right = helper(node.right, curMax, curMin);
    return Math.max(left, right);
};