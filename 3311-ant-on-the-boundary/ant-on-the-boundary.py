class Solution:
    def returnToBoundaryCount(self, nums: List[int]) -> int:
        steps = 0
        count = 0
        # 2,3,-5
        # num 2, step
        for i in range(len(nums)):
            steps += nums[i]
            if steps == 0:
                count += 1

        return count
