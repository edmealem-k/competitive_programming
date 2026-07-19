class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        res = "" 

        for i in range(len(strs[0])): 
            for s in strs:
                if i == len(s) or s[i] != strs[0][i]:
                    return res
            res += strs[0][i]

        return res

# we dont care about the length of each str since we have added an out of bound check on the if clause