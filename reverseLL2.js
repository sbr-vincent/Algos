/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head == null){
        return head
    }
    
    let reverseLL = head
    head = head.next
    reverseLL.next = null

    let pointer = head

    while(head != null){
        head = head.next
        pointer.next = reverseLL
        reverseLL = pointer

        pointer = head
    }

    return reverseLL
};