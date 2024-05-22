/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let res = [[]];
    for (let num of nums) {
        let n = res.length;
        for (let i = 0; i < n; ++i) {
            let curr = res[i].slice();
            curr.push(num);
            res.push(curr);
        }
    }
    
    let subsetSum = 0
    let xorTotal = 0

    for(let i = 0; i < res.length; i++){
        for(let j = 0; j < res[i].length; j++){
            subsetSum ^= res[i][j]
        }

        xorTotal += subsetSum
        subsetSum = 0
    }

    return xorTotal
};