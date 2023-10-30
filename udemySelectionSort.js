const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(arr) {
  
  
  
  for(let i = 0; i < arr.length; i++){
    let min = arr[i]
    let index = i;
    
    for(let j = i+1; j < arr.length; j++){
      
      if(arr[j] < min){
        min = arr[j]
        index = j
      }
      
    }
    
    let temp = arr[index]
    arr[index] = arr[i]
    arr[i] = temp
    
  }

  return arr
}

console.log(selectionSort(numbers));