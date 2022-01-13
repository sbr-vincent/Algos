/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 1
    if (s.length === 0) return true
    if (s.length === 1) return false
    if (s.length % 2 !== 0) return false

    const stack = [];
    
    for (const c of s) {
        if (c === '{' || c === '[' || c === '(') stack.push(c);
        
        else {
            
          const p = stack.pop(); // No need to check for empty before popping (returns undefined)
          if ((c === '}' && p !== '{') || (c === ']' && p !== '[') || (c === ')') & (p !== '(')) return false;
            
        }
    }
    
    return stack.length === 0;
}