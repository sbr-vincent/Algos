/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let pointer = list1
    let walker = null
    let count = 0

    // Get the pointer to one before where we start cutting numbers
    while(count < a - 1){
        pointer = pointer.next
        count++
    }

    // Have another pointer look at the spot we cut and then point pointer to the second list
    walker = pointer.next
    pointer.next = list2

    // Get to the end of the second list with pointer
    while(pointer.next != null){
        pointer = pointer.next
    }

    // Have the second pointer get past the last number we are supposed to cut out.
    while(count < b){
        walker = walker.next
        count++
    }

    // Connect the first list with the rest of the list
    pointer.next = walker

    return list1
};