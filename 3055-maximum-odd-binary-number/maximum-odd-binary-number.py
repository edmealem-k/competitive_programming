class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
        zeros = 0
        ones = 0

        for i in range(len(s)):
            if s[i] == "1":
                ones += 1
            else:
                zeros += 1
        
        output = ""

        for i in range(ones-1):
            output += "1"

        for i in range(zeros):
            output += "0"
            
        output += "1"
        
        return output