/*
Write a function that takes in an array and a number of steps to shift the values to the **right** by. 
Then wrap-around any values to that shift off array's end to the other side so that no data is lost.

Example Function Call: rotateArray(arr, 2)
Before: [1,2,3,4] 2      [4,1,2,3] 
Expected Output: [3, 4, 1, 2]

*/

const arr = [1, 2, 3, 4];

function rotateArray(arr, shiftBy) {
    let newArr = [];
    let count = 0;
    let i = arr.length - 1;
    while(count < shiftBy){
        while(i >= 0){
            
        }
    }
    // Code Here ＼(ﾟｰﾟ＼)

    return newArr; // Can also do this in place and return arr if you want an additional challenge!
}

console.log(rotateArray(arr, 2))


// Bonus Challenge: Allow the ShiftBy to be a negative value to shift left, or a positive value to shift right.
[2,3,4,1]  -1

// ------ ****** Part 2 ******--------

/* 
  Given an array and an index,
  remove the item at that index.
  return the removed item

  If index is out of range, return null and don't alter the array
  
  No built-in array methods except pop().
*/

const arr1 = ["a", "b", "c", "d", "e"];
const removeIdx1 = 1;
const expected1 = "b";
// after function call, arr1 should be:
const arr1Expected = ["a", "c", "d", "e"];

const arr2 = ["a", "b", "c"];
const removeIdx2 = 3;
const expected2 = null;
const arr2Expected = ["a", "b", "c"];

const arr3 = ["a", "b", "c"];
const removeIdx3 = -3;
const expected3 = null;
const arr3Expected = ["a", "b", "c"];

const arr4 = ["cake", "pie", "cookies", "vegetables", "candy"];
const removeIdx4 = 3;
const expected4 = "vegetables";
const arr4Expected =  ["cake", "pie", "cookies", "candy"];