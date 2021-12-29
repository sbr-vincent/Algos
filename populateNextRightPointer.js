/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    //base case
    if(root == null) return null;
    //connects the left subtree of same level with right subtree of that same level 
    if(root.left != null) root.left.next = root.right;
    //connect the rightmost node of a level to the leftmost node of the next level.
    if(root.right != null && root.next != null) root.right.next = root.next.left;
    //recursive calls for left and right subtrees.
    connect(root.left);
    connect(root.right);
    return root;
};