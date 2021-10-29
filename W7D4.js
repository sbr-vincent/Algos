function partition(nums = [], left = 0, right = nums.length - 1) {
    //middle index as a middle value (round up or down) 
    //everything is compared to this middle value
    let midVal = Math.floor(nums.length / 2);
    console.log("midVal "+ midVal)
    while (right > left) {
        //continue to increment left until we find a value greater than mid
        while (nums[left] < nums[midVal]) {
            left++;
        }
        //continue to decrement right until we find a value smaller than mid
        while (nums[right] > nums[midVal]) {
            right--;
        }

        if(right == midVal && right > left){
            return nums;
        }
        //now we have a left greater than mid and a right smaller than mid & we can swap them
        // [a,b] = [b,a]; is the shorthand to swap without temp variable
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}

module.exports = { partition };

//TEST CASES
// const nums1 = [11, 8, 14, 3, 6, 2, 7];
// console.log("1 BEFORE:\n", nums1);
// console.log("1 AFTER:\n", partition(nums1));

const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
console.log("2 BEFORE:\n", nums2);
console.log("2 AFTER:\n", partition(nums2));

const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
console.log("3 BEFORE:\n", nums3);
console.log("3 AFTER:\n", partition(nums3));