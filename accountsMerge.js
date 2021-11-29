/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    let adjacentList = {};
    let visited = new Set();
        const DFS = (mergedAccount, email) => {
        visited.add(email);
        
        mergedAccount.push(email);
        
        if(!adjacentList.hasOwnProperty(email)){
            return;
        }
        for(let i = 0; i < adjacentList[email].length; i ++){
            if(!visited.has(adjacentList[email][i])){
                DFS(mergedAccount, adjacentList[email][i])
            }
        }
    }
    // build adjacent list
    for(let i = 0; i < accounts.length; i++){
        let firstEmail = accounts[i][1];
        
        for(let j = 2; j < accounts[i].length; j++){
            let accountEmail = accounts[i][j];
            
            if(!adjacentList.hasOwnProperty(firstEmail)){
                adjacentList[firstEmail] = [];
            }
            adjacentList[firstEmail].push(accountEmail);
            
            if (!adjacentList.hasOwnProperty(accountEmail)){
                adjacentList[accountEmail] = [];
            }
            adjacentList[accountEmail].push(firstEmail)
        }
    }
    // Traverse over accounts to store components
    let mergedAccounts = [];
    for(let i = 0; i < accounts.length; i++){
        let accountName = accounts[i][0];
        let accountFirstEmail = accounts[i][1];
        
        if(!visited.has(accountFirstEmail)){
            let mergedAccount = [accountName];
            DFS(mergedAccount, accountFirstEmail);
            let sorted = mergedAccount.slice(1).sort();
            sorted.unshift(accountName)
            mergedAccounts.push(sorted)
        }
    }

    
    return mergedAccounts;
    
    
};