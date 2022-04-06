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
var inorderTraversal = function(root) {
    let treeArr = []
    let stack = []
    let pointer = root;
    // inorderHelper(root, treeArr)
    
    while(pointer != null || stack.length != 0){
        while(pointer != null){
            stack.push(pointer)
            pointer = pointer.left
        }
        
        pointer = stack.pop()
        treeArr.push(pointer.val)
        pointer = pointer.right
    }
    
    return treeArr 
};

// Recursion helper funtion
// var inorderHelper = function(root, arr) {
//     if(root!=null){
//         inorderHelper(root.left, arr)
//         arr.push(root.val)
//         inorderHelper(root.right, arr)
//     }
// }