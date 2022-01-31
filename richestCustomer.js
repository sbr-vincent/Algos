/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var richCustomer = 0;
    var wealth = 0;
    for(let i = 0; i < accounts.length; i++){
        for(let j = 0; j < accounts[i].length; j++){
            wealth += accounts[i][j]
        }
        
        if(wealth > richCustomer){
            richCustomer = wealth
        }
        wealth = 0;
    }
    
    return richCustomer;
};