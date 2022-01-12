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
 * @param {number} val
 * @return {TreeNode}
 */
 var insertIntoBST = function(root, val) {
    if(root == null){
        return new TreeNode(val);
    }
    
    if(root.left === null && val < root.val){
        root.left = new TreeNode(val);
    }else if (root.right === null && val > root.val){
        root.right = new TreeNode(val);
    }else if(val < root.val) {
        insertIntoBST(root.left, val)
    }else {
        insertIntoBST(root.right, val)
    }
    return root;
};