class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        # Keep track of the number of zeros in our window,and the len of our window
        zero_count = 0
        longest_sub = 0
        left = 0
        right = 0

        #Go through the list until right reaches the end
        while right < len(nums):
            # If we run into a zero in our window then increase zero_count += 1
            if nums[right] == 0:
                zero_count += 1

            # If we run into another zero in our window that is going to put our zero_count to 2 then we want to 
            # get the len of our window and move the left side over one until we push a zero out
            if nums[right] == 0 and zero_count == 2:
                longest_sub = max(longest_sub, (right - left -1))

                while nums[left] != 0:
                    left += 1
                
                zero_count -= 1
                left += 1
            
            right += 1
        
        # If we run into a case where the right reaches the end but we have a valid window that needs to be calculated then do it
        if zero_count < 2:
            longest_sub = max(longest_sub, (right - left -1))

        return longest_sub
