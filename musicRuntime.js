/* 
Amazon is developing a new song selection algorithm that will sync with the
duration of your bus ride.

Given a positive integer representing a duration of a bus ride and
an array of positive integers representing song times, find a pair of two songs
where the song pair ends 30 seconds before the bus ride ends.

return an array of the song indexes or [-1, -1] if no pair is found.

If there are multiple song pairs that match, return the pair that contains the
longest song. The order of the returned indexes doesn't matter.
*/

const busDuration1 = 300;
const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];
const expected1 = [4, 6]; // 210, 60
/* Explanation:
There are multiple pairs that add up to 30 seconds before the bus duration.
The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
*/

const busDuration2 = 300;
const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
const expected2 = [3, 6]; // 230, 40
/* Explanation:
This is the pair with the longest song.
*/

const busDuration3 = 300;
const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
const expected3 = [-1, -1]; // not found.

/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} busDuration Seconds.
 * @param {number} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
 *    pair is found.
 */
function musicRuntime(busDuration, songDurations) {
    // your code here
    let shorterTime = busDuration - 30;
    let sortedArr = [...songDurations];
    sortedArr.sort((a, b) => b - a);
    let musicPairs = [];
    let greaterSongLength = [];
    let matchingPair = 0;

    for (let i = 0; i < sortedArr.length; i++) {
        shorterTime -= sortedArr[i];
        matchingPair = sortedArr.indexOf(shorterTime);

        if (matchingPair === -1) {
            shorterTime += sortedArr[i];
            continue;
        } else {
            musicPairs.push([sortedArr[i], sortedArr[matchingPair]]);
            greaterSongLength.push(
                Math.max(sortedArr[i], sortedArr[matchingPair])
            );
        }

        shorterTime += sortedArr[i];
    }

    if (musicPairs.length === 0) {
        return [-1, -1];
    } else {
        return [
            songDurations.indexOf(musicPairs[0][0]),
            songDurations.indexOf(musicPairs[0][1]),
        ];
    }
}

console.log(musicRuntime(busDuration1, songDurations1));
console.log(musicRuntime(busDuration2, songDurations2));
console.log(musicRuntime(busDuration3, songDurations3));
