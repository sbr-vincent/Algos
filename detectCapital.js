var detectCapitalUse = function(word) {
    var i = 0;
//    All caps 

    for(i = 0; i < word.length; i++){
        if (word[i] == word[i].toUpperCase()) {
            continue;
        }else{
            break
        }
    }
    
    if (i == word.length){
        return true
    }

    //     First letter
    for (i = 0 ; i < word.length; i++){
        if (word[0] != word[0].toUpperCase()){
            break;
        } 

        if(i > 0){
            if (word[i] == word[i].toLowerCase()) {
            continue;
            } 
            else if(word[i] == word[i].toUpperCase()){
                return false;
            } 
        }
    }
    
    if (i == word.length){
        return true
    } 

    //     All lower
    for(i = 0; i < word.length; i++){
        if (word[i] == word[i].toLowerCase()) {
            continue;
        }else{
            return false
        }
    }
    
    return true
};