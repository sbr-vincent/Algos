function pickingNumbers(a) {
    // Write your code here
    let maxSubArrayLength = 0;
    
    for(let x of a){
        let subArray = []
        
        for(let y of a){
            if(x-y === 1 || x-y === 0){
                subArray.push(y)
            }
        }
        
        maxSubArrayLength = Math.max(maxSubArrayLength, subArray.length)
    }
    
    return maxSubArrayLength;
}