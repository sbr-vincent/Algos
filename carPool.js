/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
	// Because from and to is between 0 and 1000. Idea is to store counts in an array of size 1001.
    let lengthOfTrip = Array(1001).fill( 0 );   
	// Update passenger change for each trip
    for( const [trip, i, j] of trips){
        lengthOfTrip[i] += trip; // Increment when passenger is on board
        lengthOfTrip[j] -= trip; // decrement when they depart
    }
    
    let carLoad = 0; 
	// Count total passenger for each bus top
    // we have the count array, we perform a line sweep from 0 to 1000 and track its total
    for( let i = 0 ; i < lengthOfTrip.length ; i++ ){
        carLoad += lengthOfTrip[i];    
        if( carLoad > capacity ){ // Reject when the car is overloaded somewhere
            return false;
        } 
    }
    return true; // Accept only if all trip is safe
};