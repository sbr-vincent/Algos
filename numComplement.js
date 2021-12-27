/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var binNum = num.toString(2);
    var newBinStrg = '';
    for(let i = 0; i < binNum.length; i++){
        if(binNum[i] == '0'){
            newBinStrg += 1;
        }else{
            newBinStrg += 0;
        }
    }
    
    return Number.parseInt(newBinStrg, 2);
};