/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var convertedNum = 0;
    
    for(let i = 0; i < s.length; i++){
        if(s[i] == "I" && s[i+1] == "V"){
            convertedNum += 4;
            i++;
        }else if(s[i] == "I" && s[i+1] == "X"){
            convertedNum += 9;
            i++;
        }else if(s[i] == "X" && s[i+1] == "L"){
            convertedNum += 40;
            i++;
        }else if(s[i] == "X" && s[i+1] == "C"){
            convertedNum += 90;
            i++;
        }else if(s[i] == "C" && s[i+1] == "D"){
            convertedNum += 400;
            i++;
        }else if(s[i] == "C" && s[i+1] == "M"){
            convertedNum += 900;
            i++;
        }else if(s[i] == "I"){
            convertedNum += 1;
        }else if(s[i] == "V"){
            convertedNum += 5;
        }else if(s[i] == "X"){
            convertedNum += 10;
        }else if(s[i] == "L"){
            convertedNum += 50;
        }else if(s[i] == "C"){
            convertedNum += 100;
        }else if(s[i] == "D"){
            convertedNum += 500;
        }else if(s[i] == "M"){
            convertedNum += 1000;
        }
    }
    
    return convertedNum;
};