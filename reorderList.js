/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let len = 0;
    let tmp = head;
    
    while (tmp){
        len++;
        tmp=tmp.next;
    }
    
    if(len<3) return head;
    
    let i=0;
    tmp = head;
    
    while (i!=Math.floor(len/2)){
        tmp = tmp.next;i++;
    }
    
    let p = null
    
    while (tmp){
        
        let tmp2 = tmp.next;
        tmp.next = p
        p = tmp
        tmp = tmp2
        
    }
    
    tmp = head
    let [tmpl,tmpr] = [tmp.next,p.next];
    
    while(tmp){
        
        tmpl = tmp.next
        if(p) tmpr = p.next
        tmp.next = p
        if(p) p.next = tmpl
        tmp = tmpl
        if(p) p = tmpr
        
    }  
    
    return head;
};