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
var insertionSortList = function(head) {
    var start = new ListNode();
    start.next = head;
    var curr = head;
    var prev = start;
    
    while(curr != null){
        
        if(curr.next != null && (curr.next.val < curr.val)){
            
            //Insertion
            while(prev.next != null && (prev.next.val < curr.next.val)){
                prev = prev.next;
            }
            
            var temp = prev.next;
            prev.next = curr.next;
            curr.next = curr.next.next;
            prev.next.next = temp;
            prev = start;
            
        }else{
            
            curr = curr.next;
            
        }
    }
    
    return start.next;
};