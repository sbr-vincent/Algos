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
// Time O(h**2) Space: O(1)
var countNodes = function(root) {
    if(!root) return 0;

    const height = getTreeHeight(root)

    if(height === 0) return 1;

    const upperCount = Math.pow(2,height) - 1;
    let left = 0;
    let right = upperCount

    // O(h)
    while(left <right){
        let idxToFind = Math.ceil((left + right)/2)
        if(nodeExists(idxToFind, height, root)){
            left = idxToFind
        }else{
            right = idxToFind-1
        }
    }

    return upperCount + left + 1
};

// Time: O(h) height of the tree
const getTreeHeight = function(root){
    let height = 0;

    while(root.left !== null){
        root = root.left
        height++
    }

    return height
}

// O(h)
const nodeExists = function(idxToFind, height, node){
    let left = 0
    let right = Math.pow(2,height) - 1
    let count = 0

    while(count < height){
        let midOfNode = Math.ceil((left + right)/2)
        if(idxToFind >= midOfNode){
            node = node.right
            left = midOfNode
        }else{
            node = node.left
            right = midOfNode - 1
        }

        count++
    }

    return node !== null;
}