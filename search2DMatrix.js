/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++){
        if(target <= matrix[i][matrix[i].length-1]){
            for(let j = 0; j < matrix[i].length; j++){
                if(target == matrix[i][j]){
                    return true
                }
            }
            return false
        }
    }
    return false
};