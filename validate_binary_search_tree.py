# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True
        
        if root.left == None and root.right == None:
            return True

        return self.validHelper(root, float("-inf"), float("inf"))

    def validHelper(self, node, minNum, maxNum):
        if node.val <= minNum or node.val >= maxNum:
            return False
        
        if node.left:
            if not self.validHelper(node.left, minNum, node.val):
                return False
        
        if node.right:
            if not self.validHelper(node.right, node.val, maxNum):
                return False
        
        return True