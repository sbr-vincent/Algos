/**
 * @param {number} n
 * @return {number}
 */
 var bitwiseComplement = function(n) {
    let binaryN = n.toString(2);
  for(let i = 0; i < binaryN.length; i++){
    binaryN = binaryN.slice(0,i) +(+!+binaryN[i])+binaryN.slice(i+1);
  }
  return parseInt(binaryN,2);
};