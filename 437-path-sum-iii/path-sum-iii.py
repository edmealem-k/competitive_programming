# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        
        def pathSum_a(root, sum):
            if root == None: return 0
            res = 0
            if root.val == sum: res += 1
            res += pathSum_a(root.left, sum-root.val)
            res += pathSum_a(root.right, sum-root.val)
            return res
        
        if root == None: return 0
        return self.pathSum(root.left, targetSum) + pathSum_a(root, targetSum) + self.pathSum(root.right, targetSum)