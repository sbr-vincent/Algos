/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    let fractionArr = []

    // O(n^2)
    for(let i = 0; i < arr.length;i++){
        for(let j = i + 1; j < arr.length; j++){
            // Push all the combination to a new array
            fractionArr.push([arr[i], arr[j]])
        }
    }

    // Sort the array from smallest fraction to largest O(n)
    fractionArr.sort((a,b) => {
        return (a[0]/a[1] - b[0]/b[1])
    })

    // Return the k-th - 1 smallest
    return fractionArr[k-1]
};