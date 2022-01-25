/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    if (arr[0] > arr[1] || arr.length <= 2 || arr[arr.length - 1] > arr[arr.length - 2]) {
        return false;
    }

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == arr[i + 1]) {
            return false;
        }

        if (arr[i + 1] > arr[i]) {
            continue;
        }

        if (arr[i + 1] < arr[i]) {

            if (arr[i + 2] > arr[i + 1]) {
                return false;
            }
            continue;
        }
    }
    return true;
};