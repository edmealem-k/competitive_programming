class Solution: 
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}

        # 2,7,11,15 // hashmap = {7:1}
        # diff = 2, 
        for i in range(len(nums)):
            diff = target-nums[i]
            if diff in hashmap:
                return [hashmap.get(diff), i]
            hashmap[nums[i]] = i