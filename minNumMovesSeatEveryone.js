/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let sortedSeats = [...seats].sort((a,b) => a-b)
    let sortedStudents = [...students].sort((a,b) => a-b)
    let numSwitches = 0

    for(let i = 0; i < seats.length; i++){
        numSwitches += Math.abs(sortedStudents[i] - sortedSeats[i])
    }

    return numSwitches
};