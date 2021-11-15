/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    var answer = [];
    var days = 0;

    for (let i = 0; i < temperatures.length; i++) {
        for (let j = i + 1; j < temperatures.length; j++) {
            if(temperatures[j] <= temperatures[i] && j == temperatures.length-1){
                console.log("boop")
                days = 0;
            }else if (temperatures[j] <= temperatures[i]) {
                days++
            } else {
                days++
                break;
            }
        }
        answer.push(days);
        days = 0;
    }

    return answer;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))
