const test1NumsA = [1, 2];
const test1NumsB = [2, 1];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const test2NumsA = [1, 2, 3];
const test2NumsB = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const test3NumsA = [4, 1, 2, 3, 4];
const test3NumsB = [1, 2, 3, 5, 5, 2];
const expected3 = [4, 5];
/* 
  Explanation: 1, 2, and 3 are shared so are excluded
    4 and 5 are included because they exist only in 1 array,
    but have duplicates, so only one copy of each is kept.
*/

/**
 * Produces the symmetric differences, aka disjunctive union of two sets.
 * Venn Diagram Visualization:
 * https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
 * - Time: O(?).
 * - Space: O(?).
 * @param  {Array<number>} numsA
 * @param  {Array<number>} numsB
 *    Both given sets are multisets in any order (contain dupes).
 * @returns {Array<number>} The union of the given sets but excluding the shared
 *    values (union without intersection).
 *    i.e., if the element is in one array and NOT the other, it should be
 *    included in the return.
 */
function symmetricDifferences(numsA, numsB) {
    //make a return array
    var returnArray = [];
    //iterate through array A at index i
    for (var i = 0; i < numsA.length; i++) {
        //boolean for match found
        var matchFound = false;
        //compare it to each value of array B at index j which moves "faster"
        for (var j = 0; j < numsB.length; j++) {
            //if array A at i is not found in array B at any j, 
            if (numsA[i] === numsB[i]) {
                return matchFound = true;
            }

        }
        //adding it to the return array 
        if (matchFound === false) {
            //boolean if should be added
            var shouldBeAdded = true;
            //check if our return array already contains it?
            for (var k = 0; k < returnArray.length; k++) {
                if (numsA[i] === returnArray[k]) {
                    return shouldBeAdded = false;
                }
            }
            //if it does, don't push it. if it doesn't, do push it.
            if (shouldBeAdded === true) {
                returnArray.push(numsA[i])
            }
        }
    }
    //then do the same for numsB to numsA for any values numsB has that numsA does not
    return returnArray;
}

console.log(symmetricDifferences(test1NumsA,test1NumsB))