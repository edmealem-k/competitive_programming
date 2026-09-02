class Solution:
    def minMaxDifference(self, num: int) -> int:
        s = str(num)
        
        # 1. To maximize: Find the first digit from the left that is NOT '9' 
        # and replace all its occurrences with '9'
        for char in s:
            if char != '9':
                max_val = int(s.replace(char, '9'))
                break
        else:
            # If all digits are already '9'
            max_val = num 
            
        # 2. To minimize: Target the very first digit (s[0]) 
        # and replace all its occurrences with '0'
        min_val = int(s.replace(s[0], '0'))
        
        # 3. Return the difference
        return max_val - min_val
