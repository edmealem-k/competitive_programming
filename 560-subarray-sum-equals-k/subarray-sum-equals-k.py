class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        # Map to store the frequency of prefix sums
        # Initialize with {0: 1} to handle subarrays starting from index 0
        prefix_sums = {0: 1}

        curr_sum = 0
        total_subarrays = 0

        for num in nums:
            # Update the running cumulative sum
            curr_sum += num

            # Check if the complement (curr_sum - k) exists in our history
            complement = curr_sum - k
            if complement in prefix_sums:
                total_subarrays += prefix_sums[complement]

            # Record the current prefix sum in the hash map
            prefix_sums[curr_sum] = prefix_sums.get(curr_sum, 0) + 1

        return total_subarrays