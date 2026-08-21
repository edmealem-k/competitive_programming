class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        n = len(nums)

        # Step 1: Cycle sort / place elements at their correct index
        for i in range(n):
            # keep swapping until nums[i] is out of bounds [1, n]
            # OR nums[i] is already at its correct index (nums[i] == nums[nums[i] - 1])
            while 1 <= nums[i] <= n and nums[i] != nums[nums[i] - 1]:
                # Swap nums[i] to its target position nums[nums[i] - 1]
                correct_idx = nums[i] - 1
                nums[i], nums[correct_idx] = nums[correct_idx], nums[i]

        # Step 2: Scan the array to find the first mismatch
        for i in range(n):
            if nums[i] != i + 1:
                return i + 1

        # Step 3: If 1 to n are all present, the missing number is n + 1
        return n + 1