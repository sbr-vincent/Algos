class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if s == "":
            return True
        elif t == "":
            return False

        i = 0
        j = 0
        pointer1 = s[i]
        pointer2 = t[j]

        while i < len(s) and j < len(t):
            if t[j] == s[i]:
                i += 1
                j += 1
            else:
                j += 1
        
        if i == len(s):
            return True
        else:
            return False