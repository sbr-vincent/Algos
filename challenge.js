//do in place without making a copy of array
// move zeros to the end while maintaining relative order of non 0 element

// const moveZeros = function(array) {
//     let length = array.length;
//     let count = 0;

//     for (const iterator of array) {
//         if(iterator === 0){
//             count++
//         }
//     }

//     let i = 0;
//     while(i < count) {
//         for (let j = 0; j < length; j++) {
//             if (array[j] < array[j + 1]) {
//                 let temp = array[j + 1];
//                 array[j + 1] = array[j];
//                 array[j] = temp;
//             }
//         }
//         i++
//     }

//     return array
// };

const moveZeros = function (nums) {
    let left = 0;
    let right = 0;
    while (right < nums.length) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
        right++;
    }
    return nums;
};

console.log(moveZeros([0, 1, 0, 3, 12])); // output [1,3,12,0,0]
