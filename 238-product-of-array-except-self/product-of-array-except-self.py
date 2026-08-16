class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # product of array except self
        n = len(nums)
        res = [1] * n

        # calculate the prefix produc (all elements to the left)
        prefix = 1
        for i in range(n):
            res[i] = prefix
            prefix *= nums[i]

        # Multiply by the suffix produc (all elements to the right)
        suffix = 1
        for i in range(n -1, -1, -1):
            res[i] *= suffix # we multiply the prefix and postfix together
            suffix *= nums[i]

        return res