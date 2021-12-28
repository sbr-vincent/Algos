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
var middleNode = function(head) {
    if(head == null){
        return null;
    } else if(head.next == null){
        return head;
    }
    
    var checker = head;
    var count = 1;
    
    while(checker.next != null){
        checker = checker.next;
        count++;
    }
    
    if(count == 2){
        return head.next;
    }
    else if(count%2 == 0){
        var total = (count/2) + 1;  
    }
    else {
        var total = Math.ceil(count/2);
    }
    
    checker = head;
    count = 1;
    var newList;
    
    while(checker.next != null){
        if(count == total){
            newList = checker
        }
        
        checker = checker.next;
        count++;
    }
    
    return newList
};