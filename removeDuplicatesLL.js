const deleteDuplicates = (head) => {
    const dummy = { next: head };
    let prev = dummy;
    let cur = head;
    let next = head?.next;
    while (next) {
        if (cur.val !== next.val) {
            prev = cur;
            cur = next;
            next = next.next;
        } else {
            const val = cur.val;
            while (next && next.val === val) {
                next = next.next;
            }
            cur = next;
            next = next?.next;
            prev.next = cur;
        }
    }
    return dummy.next;
};
