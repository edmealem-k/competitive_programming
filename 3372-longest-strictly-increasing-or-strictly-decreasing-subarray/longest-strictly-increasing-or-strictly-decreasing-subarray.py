class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        if len(nums) <= 1:
            return len(nums)

        max_count = 1
        count = 1

        # Set baseline direction for the first pair
        direction = 1 if nums[1] > nums[0] else (-1 if nums[1] < nums[0] else 0)
        if direction != 0:
            count = 2
            max_count = 2

        for i in range(1, len(nums) - 1):
            next_num =  nums[i+1]
            num = nums[i]

            current_dir = 1 if next_num > num else (-1 if next_num < num else 0)

            if current_dir == 0:
                count = 1
            elif current_dir == direction:
                count += 1
            else:
                count = 2

            direction = current_dir
            max_count = max(max_count, count)

        return max_count