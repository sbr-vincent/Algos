function partition(nums = [], left = 0, right = nums.length - 1) {
    var pivot = Math.floor(nums.length / 2); // leave as this for now since partition looks wild otherwise.
    var i = left - 1;
    var j = right + 1;
    while (true) {
        do {
            i++;
        } while (nums[i] < nums[pivot]);
        do {
            j--;
        } while (nums[j] > nums[pivot]);
        if (i >= j) {
            return j;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
}

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];

const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

const nums3 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const expected3 = [2, 3, 3, 6, 7, 8, 11, 14];

/**
 * Recursively sorts the given array in-place by mutating the array.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */
function quickSort(nums = [], left = 0, right = nums.length - 1) {
    if(nums.length == 1){
        return nums;
    }
    pivot = partition(nums);

    return (quickSort(nums,0, pivot) + quickSort(nums, pivot +1, nums.length-1))
}

console.log(quickSort(nums1));