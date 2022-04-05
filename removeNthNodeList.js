/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let walker = head
    let counter = 0
    let count = 0
    
    while(walker != null){
        walker = walker.next 
        counter++
    }

    if(counter == n){
        return head.next
    }
    
    walker = head
    
    while(count != counter - n -1){
        count++
        walker= walker.next 
    }
    
    walker.next = walker.next.next
    return head
    
};