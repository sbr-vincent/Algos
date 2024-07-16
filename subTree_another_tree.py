# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:   
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        queue = [root]
        isRelated = False

        while queue:
            node = queue.pop(0)

            if node.val == subRoot.val:
                isRelated = self.subTreeHelper(node, subRoot)

                if isRelated:
                    return True

            if node.left:
                queue.append(node.left)
            
            if node.right:
                queue.append(node.right)

        return isRelated
    
    def subTreeHelper(self, node, sub):
        if not node and not sub:
            return True
        if node and sub and node.val == sub.val:
            return self.subTreeHelper(node.left, sub.left) and self.subTreeHelper(node.right, sub.right)
        else:
            return False