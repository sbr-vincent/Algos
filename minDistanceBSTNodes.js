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
var minDiffInBST = function(root) {
    let visited = []
    let current = root;

    let traverse = node => {
        if(node.left) traverse(node.left)
        visited.push(node.val)
        if(node.right) traverse(node.right)
    }

    traverse(current)

    let min = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < visited.length; i++){
        for(let j = i + 1; j < visited.length; j++){
            min = Math.min(min, (Math.abs(visited[j] - visited[i])))
        }
    }

    return min
};