# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        if not root: 
            return 0

        height = self.getTreeHeight(root)

        if height == 0:
            return 1

        upper_count = (2**height) - 1
        left = 0
        right = upper_count

        while left < right:
            idx_to_find = math.ceil((left + right) / 2)

            if self.nodeExists(idx_to_find, height, root):
                left = idx_to_find
            else:
                right = idx_to_find - 1
        
        return upper_count + left + 1
    
    def getTreeHeight(self, root):
        height = 0

        while root.left != None:
            height += 1
            root = root.left
        
        return height
    
    def nodeExists(self, idx_to_find, height, node):
        left = 0
        right = (2 ** height) - 1
        count = 0

        while count < height:
            mid_node = math.ceil((left + right) / 2)

            if idx_to_find >= mid_node:
                node = node.right
                left = mid_node
            else:
                node = node.left
                right = mid_node - 1
            
            count += 1
        
        return node != None
