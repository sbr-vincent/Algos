/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let res = [];
    intervals.sort((x, y) => x[0] - y[0]);
    let preEnd;
    for (const [start, end] of intervals) {
        if (preEnd != undefined) { // for the second interval till the end
            if (start > preEnd) { // no intersection, add it
                res.push([start, end]);
                preEnd = end;
            } else { // has intersection, merge
                let pre = res.pop();
                let left = Math.min(pre[0], start);
                let right = Math.max(pre[1], end);
                res.push([left, right]);
                preEnd = right;
            }
        } else { // first element directly add
            res.push([start, end]);
            preEnd = end;
        }
    }
    return res;
};