var deleteNode = function(root, key) {
    // if root is empty
    if(root == null){
        return null;
    }
    
    
    if(key < root.val){
        root.left = deleteNode(root.left, key);
    }
    else if (key > root.val){
        root.right = deleteNode(root.right, key);
    } else {
        // if no children return null
        if(root.left == null && root.right == null){
            return null;
        }
        // if one child return the child
        else if(root.left == null){
            return root.right;
        } 
        else if (root.right == null){
            return root.left;
        }
        
        // if two children
        // set roots val to the min of the right
        root.val = minVal(root.right);
        // delete the min val you found down the right tree
        root.right = deleteNode(root.right, root.val)
    }
    
    return root;
}
const minVal = (root) => {
    let min = root.val;
    
    while(root.left != null){
        min = root.left.val;
        root = root.left;
    }
    return min;
}