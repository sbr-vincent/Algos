const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  let left = array.slice(0, (Math.floor(array.length/2)));
  let right = array.slice((Math.floor(array.length/2)))

  // Keep splitting the left and right sides until we have multiple arrays with one value
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
    let sortedArry = []
    let i = 0, j = 0;

    // Go through the arrays and push the smaller value into sortedArray. Stop the loop once we reach the end of one of the arrays
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            sortedArry.push(left[i])
            i++
        }else{
            sortedArry.push(right[j])
            j++
        }
    }  

    // Concat is used to attach the remaining value that we didn't get to in the while loop.
    return sortedArry.concat(left.slice(i)).concat(right.slice(j));
}


const answer = mergeSort(numbers);
console.log(answer);