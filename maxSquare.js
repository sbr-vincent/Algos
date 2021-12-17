/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    var rows = matrix.length
    var cols = rows > 0 ? matrix[0].length : 0;
    var maxsqlen = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] == '1') {
                var sqlen = 1;
                var flag = true;
                while (sqlen + i < rows && sqlen + j < cols && flag) {
                    for (let k = j; k <= sqlen + j; k++) {
                        if (matrix[i + sqlen][k] == '0') {
                            flag = false;
                            break;
                        }
                    }
                    for (let k = i; k <= sqlen + i; k++) {
                        if (matrix[k][j + sqlen] == '0') {
                            flag = false;
                            break;
                        }
                    }
                    if (flag)
                        sqlen++;
                }
                if (maxsqlen < sqlen) {
                    maxsqlen = sqlen;
                }
            }
        }
    }
    return maxsqlen * maxsqlen;
};