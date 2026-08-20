class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        if not nums:
            return []

        # Step 1: Initialize two candidates and their respective counters
        cand1, cand2 = None, None
        count1, count2 = 0,0

        # Step 2: First pass - Find potential candidates
        for num in nums:
            if num == cand1:
                count1 += 1
            elif num == cand2:
                count2 += 1
            elif count1 == 0:
                cand1 = num
                count1 = 1
            elif count2 == 0:
                cand2 = num
                count2 = 1
            else:
                count1 -= 1
                count2 -= 1
        # Step 3: Second pass - Verify if the candidates actually meet the requirement
        result = []
        n = len(nums)

        # Reset counters for exact verification
        count1, count2 = 0, 0
        for num in nums:
            if num == cand1:
                count1 += 1
            elif num == cand2:
                count2 += 1

        if count1 > n // 3:
            result.append(cand1)
        if count2 > n // 3:
            result.append(cand2)

        return result