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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    let firstWrongNode = null,
        secondWrongNode = null,
        adjacentNode = null,
        prevNode = new TreeNode(Number.MIN_SAFE_INTEGER);

    function inOrder(temp) {
        if (!temp) return;

        inOrder(temp.left);

        // If current node value is less than previous node value( then it is placed wrong in bst)
        if (prevNode !== null && temp.val < prevNode.val) {
            // If we found the first node where it is not in it's correct position
            if (firstWrongNode === null) {
                firstWrongNode = prevNode;
                // Store current node, in case nodes to be replaced are adjacent to each other.
                adjacentNode = temp;
            } else {
                // If we found the second node where it is not in it's correct position
                secondWrongNode = temp;
            }
        }
        //   Keeping track of previous node in inorder traversal
        prevNode = temp;
        inOrder(temp.right);
    }
    inOrder(root);
    if (firstWrongNode && secondWrongNode) {
        [firstWrongNode.val, secondWrongNode.val] = [
            secondWrongNode.val,
            firstWrongNode.val,
        ];
    } else if (firstWrongNode && adjacentNode) {
        [firstWrongNode.val, adjacentNode.val] = [
            adjacentNode.val,
            firstWrongNode.val,
        ];
    }
};
