class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
       merged = sorted(nums1 + nums2)
       length = len(merged)

       # [1, 2, 3, 4, 5, 6]

       if length % 2 == 0:
            return (merged[length // 2] + merged[length // 2 - 1]) / 2
       else:
            return merged[length // 2]
          