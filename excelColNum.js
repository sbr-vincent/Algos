/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    let columnNumber = 0;
    for(let i = 0; i < columnTitle.length; i++){
        // get the last ith character
        let char = columnTitle[(columnTitle.length - 1) - i];
        
        // subtracting from 64 (not 65, ascii of A) to get the value directly 
        // instead of ascii index
        // ex: A = 1 (65 - 64 = 1)
        columnNumber += Math.pow(26, i) * (char.charCodeAt(0) - 64);
        console.log(char.charCodeAt(0) -64)
    } 
    return columnNumber;
};