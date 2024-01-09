/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    // Create the different arrays for the two different trees
    let arr1 = []
    let arr2 = []

    // Go down each tree.
    findLeaves(root1, arr1)
    findLeaves(root2, arr2)

    // Stringify to make the comparison easier
    return arr1.toString() == arr2.toString() ? true : false
};

var findLeaves = function(node, arr){
    // If we hit a null then just return 
    if(!node) return

    // If we find a leaf, then add it's value to the list
    if(node.left == null && node.right == null){
        arr.push(node.val)
    }

    // Recursive call to find the leaves. THis is Pre-order
    findLeaves(node.left, arr)
    findLeaves(node.right, arr)
}