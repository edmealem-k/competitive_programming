class Solution:
    def findTheArrayConcVal(self, nums: List[int]) -> int:
        ans = 0
        left, right = 0, len(nums) - 1
        
        while left <= right:
            if left < right:
                # Concatenate first and last elements as strings
                concat_val = int(str(nums[left]) + str(nums[right]))
                ans += concat_val
            else:
                # If only one element is left in the middle
                ans += nums[left]
            
            left += 1
            right -= 1
            
        return ans