/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n === 0){
        return 0
    }else if(n === 1){
        return 1
    }
    
    let fibArr = [0,1]
    let i = 0, j = 1
    let count = 1
    
    while(count < n){
        fibArr.push(fibArr[i]+fibArr[j])
        i++
        j++
        count++
    }

    return fibArr[n]
};