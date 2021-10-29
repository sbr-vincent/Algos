const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
  left to right diagonal: 1  15
  right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
  absolute difference = 0
*/

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {
    let left = 0;
    let right = 0;
    for (let i = 0; i < sqrMatrix.length; i++) {
        left += sqrMatrix[i][i];
        right += sqrMatrix[i][sqrMatrix.length - 1 - i];
    }
    console.log(left);
    console.log(right);
    return Math.abs(left - right);



}

console.log(diagonalDifference(squareMatrix2));

console.log(diagonalDifference(squareMatrix2));


/* 
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurrences from one array.
  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const numsA2 = [1, 2, 2, 2, 7, 10, 15, 20];
const numsB2 = [2, 2, 6, 6, 7];
const expected2 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
function orderedMultisetUnion(sortedA, sortedB) {
    let a = 0;
    let b = 0;
    let arr = [];
    while (a < sortedA.length && b < sortedB.length) {
        if (sortedA[a] < sortedB[b]) {
            arr.push(sortedA[a]);
            a++;
        } else if (sortedA[a] == sortedB[b]) {
            arr.push(sortedA[a]);
            a++;
            b++;
        } else {
            arr.push(sortedB[b]);
            b++;
        }
    }

    while (a < sortedA.length) {
        arr.push(sortedA[a]);
        a++;
    }

    while (b < sortedB.length) {
        arr.push(sortedB[b]);
        b++;
    }
    return arr;
}

console.log(orderedMultisetUnion(numsA2,numsB2));