/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    trustingPeople = {}

    // Create a dictionary with the number of people and the value of [0,0] 
    for(let i = 0; i < n; i++){
        trustingPeople[i+1] = [0,0]
    }

    // Go thorugh trust and if they trust someone then add a one to idx 0
    // If someone is being trusted then add a one to idx 1 of the trusted person
    for(bond of trust){
        trustingPeople[bond[0]][0] += 1
        trustingPeople[bond[1]][1] += 1
    }

    // Go through the dictionary and find the judge who is trusted by n-1 and doesn't trust anyone
    for(judge in trustingPeople){
        if(trustingPeople[judge][1] === n-1 && trustingPeople[judge][0] == 0){
            return judge
        }
    }
    
    
    return -1
};