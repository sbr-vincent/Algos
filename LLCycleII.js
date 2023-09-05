/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let walker = head 
    let runner = head;

    if(runner === null){
        return null
    }

    while(true){
        walker = walker.next
        runner = runner.next

        if(runner === null || runner.next === null){
            return null
        }else{
            runner = runner.next
        }

        if(walker === runner){
            break
        }
    }

    let pointer = head
    while(pointer !== walker){
        pointer = pointer.next
        walker = walker.next
    }
    return pointer
    
};