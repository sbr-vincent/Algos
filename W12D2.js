class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        // return true if SLStack is empty
        // return false if SLStack is not empty
        return this.head == null;
    }

    length() {
        // return length of SLStack
        return this.size;
    }

    enqueue(newVal) {
        // push newVal to end of Queue
        let newNode = new Node(newVal);

        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return this
        }
        
        this.tail.next = newNode
        this.tail = newNode
        this.size++;

        return this;
    }

    dequeue() {
        // remove and return the data at the front of the queue
        if(this.isEmpty()){
            return null;
        }
        let pointer = this.head;
        this.head = this.head.next;
        pointer.next = null;
        this.size--;

        return pointer.data
    }

    front() {
        // return the data at the front of the queue without removing
        return this.head.data;
    }
}

let list = new Queue();
console.log(list.isEmpty());
console.log(list.length());
list.enqueue(5);
list.enqueue(6);
list.enqueue(7);
list.enqueue(8);
console.log(list.isEmpty());
console.log(list.length());
console.log(list.dequeue());
console.log(list.front());


