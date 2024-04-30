class Solution:
    def wonderfulSubstrings(self, word: str) -> int:
        mask = 0
        count = defaultdict(int)
        count[0] = 1

        ans = 0
        for c in word:
            index = ord(c) - ord("a")
            mask ^= (1<<index)
            ans += count[mask] # all letters appears an even number of times

            # one letter appears an odd number of times
            for i in range(10):
                preMask = mask ^ (1<<i)
                ans += count[preMask]
            
            count[mask] += 1

        return ans