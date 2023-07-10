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

// Optimized Time: O(n+m) Space: O(1)
var backspaceCompare = function(s, t) {
    let sPointer = s.length-1, tPointer = t.length-1
    let count = 0
    while(sPointer >= 0 || tPointer >= 0){
        if(s[sPointer] === '#'){
            count++;
            sPointer--;
            while(count > 0){
                if(s[sPointer] === '#'){
                    count++;
                    sPointer--;
                }else{
                    count--
                    sPointer--;
                }
            }
            
            count = 0
        }else if(t[tPointer] === '#'){
            count++
            tPointer--;
            while(count > 0){
                if(t[tPointer] === '#'){
                    count++;
                    tPointer--;
                }else{
                    count--
                    tPointer--;
                }
            }
            
            count = 0
        }else if(s[sPointer] === t[tPointer]){
            sPointer--;
            tPointer--;
            continue
        }else{
            return false
        }
    }

    return true
};
