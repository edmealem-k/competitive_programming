class Solution:
    def count(self, word):
        frequency = [0] * 26
        for char in word:
            frequency[ord(char) - ord('a')] += 1
        return frequency

    def intersection(self, freq1, freq2):
        return [min(f1, f2) for f1, f2 in zip(freq1, freq2)]

    def commonChars(self, words: List[str]) -> List[str]:
        last = self.count(words[0])

        for word in words[1:]:
            last = self.intersection(last, self.count(word))
        
        result = []
        for i in range(26):
            result.extend([chr(i + ord('a'))] * last[i])
        
        return result