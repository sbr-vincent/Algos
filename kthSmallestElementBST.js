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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let vals = [];
    (function dfs(node) {
        if (vals.length != k) {
            //no need to keep going after reach k-th number
            if (node.left) dfs(node.left); //go left first
            vals.push(node.val); //finished going left, now start adding values
            if (node.right) dfs(node.right); //if have right, go there and repeat process
        }
    })(root); // IFFE Immediately Invoking Function Expression, starting from root.
    return vals[k - 1]; //return element
};
