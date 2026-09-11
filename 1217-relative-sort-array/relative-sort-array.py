class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        # 1. Count frequencies of elements in arr1
        counts = Counter(arr1)
        res = []
        
        # 2. Add elements in the order of arr2
        for num in arr2:
            if num in counts:
                res.extend([num] * counts[num])
                del counts[num]  # Remove so we know what's left
                
        # 3. Handle remaining elements in sorted order
        remaining = []
        for num, count in counts.items():
            remaining.extend([num] * count)
        remaining.sort()
        
        return res + remaining
