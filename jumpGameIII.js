/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    if (arr.length === 0) return false;
    return recursive(arr, start);
};

const recursive = (arr, idx) => {
    // depth first search or breadth first search ??????????????????
    if (arr[idx] === 0) {
        return true;
    }
    if (arr[idx] < 0 || arr[idx] === undefined) {
        return false;
    }
    let jump = arr[idx];
    arr[idx] = -1; // mark as visited
    return recursive(arr, idx-jump) || recursive(arr, idx+jump);
}