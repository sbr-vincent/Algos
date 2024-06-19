class Solution:
    def compress(self, chars: List[str]) -> int:
        
        current_char_count = 0
        current_char = chars[0]
        s = ""

        for x in range(len(chars)):
            current_char_count += 1

            if x + 1 < len(chars) and current_char_count == 1:
                if chars[x] != chars[x + 1]:
                    s += (chars[x])
                    current_char = chars[x+1]
                    current_char_count = 0
            elif x + 1 < len(chars):
                if chars[x] != chars[x + 1]:
                    s += current_char + str(current_char_count)
                    current_char = chars[x+1]
                    current_char_count = 0
            else:
                if current_char_count > 1:
                    s += current_char + str(current_char_count)
                else:
                    s += (chars[x])
        
        for x in range(len(s)):
            chars[x] = s[x]
        
        chars = chars[:len(s)]
        
        return len(list(s))