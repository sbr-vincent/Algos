/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length === 1) {
        return false;
    }
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
            stack.push(s[i]);
        } else {
            let top = stack.pop();

            if (s[i] == ")" && top == "(") {
                continue;
            } else if (s[i] == "]" && top == "[") {
                continue;
            } else if (s[i] == "}" && top == "{") {
                continue;
            }

            return false;
        }
    }

    return stack.length === 0;
};
