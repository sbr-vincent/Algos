class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        allow = set(allowed)
        consistent_str_count = 0
        word_count = 0

        for word in words:
            for letter in word:
                if letter not in allow:
                    break
                else:
                    word_count += 1
            
            if word_count == len(word):
                consistent_str_count += 1
            
            word_count = 0
        
        return consistent_str_count