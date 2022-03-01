/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    let onesArr = [];
    let binConversion = "";
    let counter = 0;
    
    for(let i = 0; i < n + 1; i++){
        binConversion = (i >>> 0).toString(2);
        
        for(let j = 0; j < binConversion.length; j++){
            if(binConversion[j] == 1){
                counter++;
            }
        }
        
        onesArr.push(counter);
        counter = 0;
    }
    
    return onesArr;
};