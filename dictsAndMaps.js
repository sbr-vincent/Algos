function processData(input) {
    //Enter your code here
    let inputArr=input.split("\n");
    const dictLength = Number(inputArr[0]);
    let dict = inputArr.slice(1,dictLength + 1);
    let queries = inputArr.slice(dictLength + 1);
    
    let phoneBook = {};
    
    for(let i = 0; i < dict.length; i++){
        const items = dict[i].split(" ");
        phoneBook[items[0]] = items[1];
    }
    
    for(let i = 0; i < queries.length; i++){
        if(queries[i] in phoneBook){
            console.log(`${queries[i]}=${phoneBook[queries[i]]}`)
        } else {
            console.info("Not found")
        }
    }
    
} 