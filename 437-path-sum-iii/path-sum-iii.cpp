/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
    int pathSum_a(TreeNode* root, long long sum) {
        if (root == nullptr) return 0;
        int res = 0;
        if (root->val == sum) res++;
        res += pathSum_a(root->left, sum-root->val);
        res += pathSum_a(root->right, sum-root->val);
        return res;
    }
public:
    int pathSum(TreeNode* root, int targetSum) {
       if (root == nullptr) return 0;
       return pathSum(root->left, targetSum) + pathSum_a(root, targetSum) + pathSum(root->right, targetSum);
    }
};