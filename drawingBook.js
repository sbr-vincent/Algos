function pageCount(n, p) {
    // Write your code here
let numberOfIndexes = Math.trunc(n/2);
let numberOfRequiredPage = Math.trunc(p/2);

let count1 = numberOfRequiredPage - 0;
let count2 = numberOfIndexes - numberOfRequiredPage;

return (count1>count2) ? count2 : count1;
}