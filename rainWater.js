/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let ch = 0;
    let total = 0;
    let maxL = 0;
    let maxR = 0;
    let leftI = 0, rightI = height.length - 1;
    while(leftI < rightI){
        if(height[leftI] <= height[rightI]){
            if(height[leftI] < maxL){
                total += maxL - height[leftI]
            }else{
                maxL = height[leftI];
            }
            leftI++;
        }else{
            if(height[rightI] < maxR){
                total += maxR - height[rightI]
            }else{
                maxR = height[rightI];
            }
            rightI--;
        }
    }
    // for(let i = 0; i < height.length; i++){
    //     ch = height[i];

    //     while(leftI >= 0){
    //         maxL = Math.max(maxL, height[leftI])
    //         leftI--;
    //     }


    //     while(rightI < height.length){
    //         maxR = Math.max(maxR, height[rightI])
    //         rightI++;
    //     }

    //     // console.log("Left: " , maxL, " Right: ", maxR)
    //     let currentWater = Math.min(maxL, maxR) - ch;
    //     // console.log(currentWater)

    //     if(currentWater >= 0){
    //         total += currentWater;
    //     }
    // }

    return total
};