class Solution:
    def mergeArrays(self, nums1: List[List[int]], nums2: List[List[int]]) -> List[List[int]]:
        # [[1,2], [2,3], [4,5]]
        # [[1,2], [3,3], [4,5], [5,5], [6,6]]
        result_arr = []
        obj = {}

        for i in range(len(nums1)):
            narr = nums1[i]
            obj[narr[0]] = narr[1]

        print(obj)
        for i in range(len(nums2)):
            narr = nums2[i]
            obj[narr[0]] = (obj.get(narr[0]) or 0) + narr[1]

        print(obj)
        for i,val in sorted(obj.items()):
            result_arr.append([i,val])

        return result_arr

