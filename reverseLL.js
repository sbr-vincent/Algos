/*
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function reverse(llist) {
    // Write your code here
    let reversedList = null
    let current = llist, walker = current.next;
    
    while(walker){
        if(reversedList){
            current = walker
        }
        
        walker = current.next
        current.next = reversedList
        reversedList = current
    }

    return reversedList
}
