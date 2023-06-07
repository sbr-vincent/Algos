function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let maxPurchase = -1;
    
    if(keyboards.length === 1 && drives.length === 1 && keyboards[0] + drives[0] > b){
        return maxPurchase
    }
    
    let currentBundlePrice = 0;
    
    
    if(keyboards.length > drives.length){
        
        for(let i = 0; i < keyboards.length; i++){
            for(let j = 0; j < drives.length; j++){
                currentBundlePrice = drives[j] + keyboards[i]
                
                if(currentBundlePrice <= b){
                    maxPurchase = Math.max(currentBundlePrice, maxPurchase)
                }
            }
        }
    }else{
        
        for(let i = 0; i < drives.length; i++){
            for(let j = 0; j < keyboards.length; j++){
                currentBundlePrice = drives[i] + keyboards[j]
                
                if(currentBundlePrice <= b){
                    maxPurchase = Math.max(currentBundlePrice, maxPurchase)
                }
            }
        }
    }
    
    return maxPurchase;

}