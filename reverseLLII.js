/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

// Space O(1) Time O(n)
var reverseBetween = function(head, left, right) {
    if(head == null || head.next == null){
        return head
    }

    let currentPos = 1, currentNode = head, start = head;

    while(currentPos < left){
        start = currentNode;
        currentNode = currentNode.next;
        currentPos++;
    }

    let newList = null, tail = currentNode;

    while(currentPos >= left && currentPos <= right){
        const next = currentNode.next;
        currentNode.next = newList;
        newList = currentNode;
        currentNode = next;
        currentPos++;
    }

    start.next = newList;
    tail.next = currentNode;

    if(left === 1){
        return newList
    }
    
    return head;
};