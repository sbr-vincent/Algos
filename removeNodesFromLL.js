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
var removeNodes = function(head) {
    if (!head || !head.next) {
        return head;
    }

    let prev = null;
    let curr = head;
    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    curr = prev.next;
    prev.next = null;
    while (curr !== null) {
        let temp = curr.next;
        if (curr.val >= prev.val) {
            curr.next = prev;
            prev = curr;
        }
        curr = temp;
    }

    return prev;
};