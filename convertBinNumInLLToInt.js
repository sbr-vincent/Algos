/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    if(head === null) return null;
    
    let result = head.val;
    
    let pointer = head;
    
    while(pointer.next != null){
        
        result = result * 2 + pointer.next.val
        
        pointer = pointer.next
    }
    
    return result;
    
};