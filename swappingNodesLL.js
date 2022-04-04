var swapNodes = function(head, k) {
    let pointer = head 
    let counter = 1
    let temp = 0 
    let front = 1
    let temp2 
    
    while(pointer.next != null){
        pointer = pointer.next 
        counter++
    }
    
    if(counter == 2 && k <=2){
        pointer = head
        temp = pointer.val
        pointer.val = pointer.next.val
        pointer.next.val = temp
        return(head)
    }

    pointer = head

    while(front != k){
        pointer = pointer.next
        front++
    }

    temp2 = pointer
    temp = pointer.val
    front = 1
    pointer= head

    while(front != counter-k+1){
        pointer = pointer.next
        front++
    }

    temp2.val = pointer.val
    pointer.val = temp

    return head
};