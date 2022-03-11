var rotateRight = function(head, k) {
    let dummy = new ListNode()
    let slow = dummy
    let fast = dummy
    let length = 0
    dummy.next = head
    while(fast.next != null){
        fast = fast.next
        length++
    }
    k = k % length
    for (var i = 1; i <= length - k; i++) {
        slow = slow.next
    }
    fast.next = dummy.next
    dummy.next = slow.next
    slow.next = null
    return dummy.next
};