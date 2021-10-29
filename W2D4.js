var arr2d = [ [2, 5, 8],
            [3, 6, 1],
            [5, 7, 7] ];
    
// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

function isPresent2d(arr, value) {

    for(var i = 0; i < arr.length; i++) {
        for(var x = 0; x < arr[i].length; x++) {
            if(arr[i][x] == value) {
                return true;
            }
        }
    }
    return false;
}

console.log(isPresent2d(arr2d, 2));

// complete the following function
function flatten(arr) {
    var flat = [];
    // your code here
    for(var i = 0; i < arr.length; i++) {
        for(var x = 0; x < arr[i].length; x++) {
            flat.push(arr[i][x]);
        }
    }
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7], [5,8,4,10,9] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

