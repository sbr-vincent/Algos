// Bruteforce O(n+m) Space and Time
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let sArray = buildString(s), tArray = buildString(t);


    if(sArray.length !== tArray.length){
        return false
    }

    for(let x = 0; x < sArray.length; x++){
        if(sArray[x] !== tArray[x]){
            return false
        }
    }

    return true;
};

var buildString = function(string){
    let newArray = []
    for(let i = 0; i < string.length; i++){
        if(string[i] === '#'){
            newArray.pop();
        }else{
            newArray.push(string[i])
        }
    }

    return newArray
}

// Optimized
