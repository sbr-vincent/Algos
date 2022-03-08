/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if(head == null){
        return false
    }
    
    let walker = head;
    let runner = head.next
    
    while(walker != runner && runner != null){
        if(runner.next == null){
            return false
        }
        
        runner = runner.next.next
        walker = walker.next
    }
    
    if(runner == null){
        return false
    }else{
        return true
    }
};