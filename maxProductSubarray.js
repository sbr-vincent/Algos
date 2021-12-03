/**
 * @param {number[]} array
 * @return {number}
 */
var maxProduct = function(array) {
    let cmax = array[0]
    let cmin = array[0]
    let result = array[0]
    for (let i = 1; i < array.length; i++){
        let maxTemp = cmax * array[i]
        let minTemp = cmin * array[i]
        
        cmax = Math.max(array[i], maxTemp, minTemp)
        
        cmin = Math.min(array[i], maxTemp, minTemp)
        
        result = Math.max(result, cmax)
    }
    return result;
};
