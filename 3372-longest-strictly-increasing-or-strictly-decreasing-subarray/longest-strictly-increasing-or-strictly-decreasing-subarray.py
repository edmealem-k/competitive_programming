class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        # Handle edge case for empty array
        if not nums:
            return 0
            
        max_len = 1
        inc_len = 1
        dec_len = 1
        
        # Single pass scanning from the second element
        for i in range(1, len(nums)):
            if nums[i] > nums[i - 1]:
                inc_len += 1
                dec_len = 1  # Reset decreasing counter
            elif nums[i] < nums[i - 1]:
                dec_len += 1
                inc_len = 1  # Reset increasing counter
            else:
                # Elements are equal; reset both counters
                inc_len = 1
                dec_len = 1
                
            # Dynamically track the longest subarray found so far
            max_len = max(max_len, inc_len, dec_len)
            
        return max_len