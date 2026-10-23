class Solution:
    def largestGoodInteger(self, num: str) -> str:
        # Check from the largest digit string ("999") down to ("000")
        for i in range(9, -1, -1):
            sub = str(i) * 3
            if sub in num:
                return sub
        
        # Return an empty string if no 3-same-digit pattern exists
        return ""
