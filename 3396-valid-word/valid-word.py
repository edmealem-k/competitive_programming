class Solution:
    def isValid(self, word: str) -> bool:
        n = len(word)

        if n < 3:
            return False 

        vowels = set("aeiouAEIOU")
        has_vowel = False
        has_consonant = False

        for i in range(n):
            char = word[i]

            if ("0" <= char <= "9") or ("a" <= char <= "z") or ("A" <= char <= "Z"):
                if char.isalpha():
                    if char in vowels:
                        has_vowel = True
                    else:
                        has_consonant = True
                continue
            else:
                return False
        
        if not has_vowel or not has_consonant:
            return False

        return True