class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = {"a", "e", "i", "o", "u"}

        vowel_count = 0
        curr_count = 0
        left = 0
        right = 0      

        while right < len(s):
            if s[right] in vowels:
                curr_count += 1 
            
            if right - left + 1 == k:
                vowel_count = max(vowel_count, curr_count)

                if s[left] in vowels:
                    curr_count -= 1
                    
                left += 1
                
            right += 1
        
        return vowel_count