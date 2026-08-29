class Solution:
    def addedInteger(self, nums1: List[int], nums2: List[int]) -> int:
        n = len(nums1)
        output = 0
        sum1 = 0
        sum2 = 0

        for i in range(n):
            sum1 += nums1[i]
            sum2 += nums2[i]

        output = (sum1 - sum2) // n

        return -output
