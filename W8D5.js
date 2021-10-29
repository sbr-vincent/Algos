// function twoSum(nums, targetSum) {
//   let returnArr = []
//   for(let i = 0; i < nums.length;i++){
//     for(let j = i+1; j < nums.length;j++){
//       if(nums[i] + nums[j] == targetSum){
//         returnArr.
//         return 
//       }
//     }
//   }
const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums3 = [1, 1, 2, 2, 3, 3];
const k3 = 3;
const expected3 = [1, 2, 3];
/* 
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
*/

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * nums.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
function kMostFrequent(nums, k) {
    var countMap = new Map();
    for (var i = 0; i < nums.length; i++) {
        // if number is already a key
        if (countMap.has(nums[i])) {
            countMap.set(nums[i], countMap.get(nums[i]) + 1);
        } else {
            // if number is not a key yet
            countMap.set(nums[i], 1);
        }
    }

    // Create a list from elements of HashMap
    let list = [...countMap];
    // Sort the list
    list.sort((o1, o2) => {
        if (o1[1] == o2[1])
            return o2[0] - o1[0];
        else
            return o2[1] - o1[1];
    })

    // create an array to push the value
    var result = [];
    for (let i = 0; i < k; i++) {
        result.push(list[i][0]);
    }
    return result;
}

console.log(kMostFrequent(nums1, k1))