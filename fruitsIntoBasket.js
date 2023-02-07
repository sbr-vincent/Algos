/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let fruitCounter = 1
    let max = 0

    for(let i = 0; i < fruits.length; i++){
        if(fruits[i] === fruits[i+1]){
            fruitCounter++
            continue
        }
        for(let j =i+1; j < fruits.length; j++){
            if(fruits[j] === fruits[i] || fruits[j] === fruits[i+1]){
                fruitCounter++
            }else{
                break
            }
        }

        max = Math.max(max, fruitCounter)
        fruitCounter = 1
    }

    return max
};