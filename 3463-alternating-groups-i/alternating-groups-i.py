class Solution:
    def numberOfAlternatingGroups(self, colors: List[int]) -> int:
        count, n = 0, len(colors)

        for i in range(n):
            j = (i + 1) % n # if i = n - 1, j would be n and colors[n] would be out of bound so we use the module so that j would point to the first list element 0
            k = (i + 2) % n # we need to have three vars, to check the alternating colors

            # then simply compare them
            if colors[i] != colors[j] and colors[j] != colors[k]:
                count += 1

        return count
        