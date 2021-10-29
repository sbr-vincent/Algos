/* 
    Acronyms
    Create a function that, given a string, returns the string’s acronym 
    (first letter of each word capitalized). 
    Do it with .split first if you need to, then try to do it without
    SPLIT EXAMPLE:
    var str = "Hello world"
    str.split(" ") => ["Hello", "world"]


    var str1 = " there's no free lunch - gotta pay yer way. ";
    var expected1 = "TNFL-GPYW";
    
    var str2 = "Live from New York, it's Saturday Night Live!";
    var expected2 = "LFNYISNL";

    HINT:
    .toUpperCase()

    * Turns the given str into an acronym.
    * - Time: O(?).
    * - Space: O(?).
    * @param {string} str A string to be turned into an acronym.
    * @returns {string} The given str converted into an acronym.
*/

var str1 = " there's no free lunch - gotta pay yer way. ";
var str2 = "Live from New York, it's Saturday Night Live!";

function acronym(str) {
    var acr = '';
    if(str[0] != ' '){
        acr += str[0];
    }

    for( var x = 0; x < str.length; x++){
        if(str[x] === ' ' && x+1 < str.length){
            acr+= str[x+1].toUpperCase();
        }
    }
    return acr;
}

console.log(acronym(str1));
console.log(acronym(str2));

/* 
    String: Reverse
    Given a string,
    return a new string that is the given string reversed

    var str1 = "creature";
    var expected1 = "erutaerc";

    var str2 = "dog";
    var expected2 = "god";


    * Reverses the given str.
    * - Time: O(?).
    * - Space: O(?).
    * @param {string} str String to be reversed.
    * @returns {string} The given str reversed.
*/

var str1 = "creature";
var str2 = "dog";

function reverseString(str) {
    var reverse = '';
    for(var i = str.length-1; i >= 0; i--){
        reverse += str[i];
    }
    return reverse;
}

console.log(reverseString(str1));
console.log(reverseString(str2));
