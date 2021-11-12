/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head == null) {
        return head;
    }

    var runner = head;
    var pointer = runner;

    while (runner != null) {
        if (head.val == val) {
            head = head.next;
        } else if (runner.next !== null && runner.next.val === val) {
            pointer = runner;
            while (pointer.next !== null && pointer.next.val === val) {
                pointer = pointer.next
            }
            pointer = pointer.next
            runner.next = pointer
        }

        runner = runner.next;
    }

    return head;
};

console.log(removeElements([1, 2, 6, 3, 4, 5, 6], 6))