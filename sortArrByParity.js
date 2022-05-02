/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    return [...nums.filter(x => x % 2 == 0), ...nums.filter(x => x % 2 == 1)]
};