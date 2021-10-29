const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given array in-place.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */

const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(nums) {
    for (i = 1; i < nums.length; i++) {
        temp = nums[i - 1];
        nums[i - 1] = nums[i];
        nums[i] = temp;
        console.log("Temp:", temp);

        console.log(nums[i-1]);
        console.log(nums[i]);
        console.log("&&&&&&&")

    // if (nums[i - 1] > nums[i]) {
    //     for (j = i - 1; j > 0; j--) {
    //     nums[i - 1] = nums[i];
    //     nums[i] = temp;
    //     }
    // }
    }
    return console.log(nums);
}
insertionSort(numsRandomOrder);