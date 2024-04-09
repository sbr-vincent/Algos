/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let time = 0
    let i = 0
    
    while(tickets[k] != 0){
        if(tickets[i] > 0){
            tickets[i] -= 1
            time++
        }

        i++

        if(i === tickets.length){
            i = 0
        }
        
    }

    return tickets[k] + time
};