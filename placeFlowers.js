/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(flowerbed.length == 1 && n == 1 && flowerbed[0] == 0) return true;
    
    var count = 0;
    var tracker = n;
    if(flowerbed[0] == 0 && flowerbed[1] == 0 && tracker != 0){
        flowerbed[0] = 1;
        tracker--;
        count++;
    }
    
    if(flowerbed[flowerbed.length-1] == 0 && flowerbed[flowerbed.length-2] == 0 && tracker != 0){
        flowerbed[flowerbed.length-1] = 1;
        tracker--;
        count++;
    }
    
    for(let i = 0; i < flowerbed.length; i++){
        if(flowerbed[i] == 0 && flowerbed[i+1] == 0 && flowerbed[i+2] == 0 && tracker != 0){
            flowerbed[i+1] = 1;
            tracker--;
            count++;
        }
    }
    
    if(count == n) return true;
    else return false;
};