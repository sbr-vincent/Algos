/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    enoughSandwiches = true
    let endStudent = 0
    let counter = 0

    while(enoughSandwiches){
        if(sandwiches[0] === students[0]){
            students.shift()
            sandwiches.shift()
            counter = 0
        }
        else{
            if(counter === students.length){
                return students.length
            }

            endStudent = students.shift()
            students.push(endStudent)
            counter++
        }

        if(sandwiches.length === 0){
            enoughSandwiches = false
        }
    }

    return students.length
};