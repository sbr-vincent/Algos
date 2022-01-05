/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
    const res = [];
    const path = [];
    
    const helper = (s, i, j) =>{
        if(i === s.length){
            res.push([...path]);
            return;
        }
        
        for(let index = j; index <= s.length; ++index){
            if(isPalindrome(s, i, index)){
                path.push(s.slice(i, index));
                helper(s, index, index+1);
                path.pop();
            }
        }
    }
    
    const isPalindrome = (s, i, j) =>{
        while(i < j - 1){
            if(s[i] !== s[j-1]){
                return false;
            }
            ++i;
            --j;
        }
        return true;
    };
    
    helper(s, 0, 1);
    return res;
};