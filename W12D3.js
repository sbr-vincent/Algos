class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head !== null;
    }

    size() {
        // return length of Stack
        let len = 0;
        let runner = this.head;

        while (runner) {
            len += 1;
            runner = runner.next;
        }
        return len;
    }

    push(newVal) {
        // push newVal to top of stack
        const newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    pop() {
        // remove and return data at top of stack
        if (this.head === null) {
            return null;
        }

        const removed = this.head;
        this.head = this.head.next;

        return removed;
    }

    peek() {
        // return data at top of stack without removing
        return this.head ? this.head.data : null;
    }

    // EXTRA
    contains(value) {
        // return true if SLStack contains value
        // return false if SLStack does not contain value
        let runner = this.head;

        while (runner) {
            if (runner.data === val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // EXTRA
    print() {
        // print out the values of the SLStack
        let runner = this.head;
        let vals = "";

        while (runner) {
            vals += `${runner.data}${runner.next ? ", " : ""}`;
            runner = runner.next;
        }
        console.log(vals);
        return vals;
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
        return this.head === null;
    }

    length() {
        return this.size;
    }

    enqueue(newVal) {
        const newNode = new Node(newVal);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        // pre-increment will modify this.size and THEN return the new size value
        return ++this.size;
    }

    // changed to return entire node
    dequeue() {
        if (this.isEmpty()) return null;

        // grab the node so we can return its data at the end
        const dequeued = this.head;
        // move the head to the right. this removes the original head
        this.head = this.head.next;
        // optional step to set the dequeued node's .next to null.
        // not required but I like to explicitly state this
        dequeued.next = null;

        // if this.head is now equal to null, then there was only one thing in the queue
        // we can then set this.tail to null to make sure tail doesn't point to any node that is dequeued
        if (this.head === null) {
            this.tail = null;
        }

        this.size--;

        return dequeued;
    }

    front() {
        // ternary allows for this to be in one line
        // if this.head is a node, the its truthy. if this.head is null, the its falsy
        return this.head ? this.head.data : null;
    }

    contains(searchVal) {
        let runner = this.head;

        while (runner) {
            if (runner.data === searchVal) return true;

            runner = runner.next;
        }

        return false;
    }

    // this method just allows for seed the queue from an array of values
    // the array.forEach is a functional method which allows us to easily perform an action
    // for each element in the array
    seed(vals) {
        vals.forEach((val) => this.enqueue(val));
    }

    /**
     * Compares this queue to another given queue to see if they are equal.
     * Avoid indexing the queue items directly via bracket notation, use the
     * queue methods instead for practice.
     * Use no extra array or objects.
     * The queues should be returned to their original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Queue} q2 The queue to be compared against this queue.
     * @returns {boolean} Whether all the items of the two queues are equal and
     *    in the same order.
     */
    compareQueues(q2) { 
        if(this.length() != q2.length()){
            return false;
        }

        console.log("Taco", this.head)
        console.log("Banana",q2.head)

        var pointer1 = this.head;
        var pointer2 = q2.head;

        while(pointer1.data == pointer2.data && pointer1.next != null){
            pointer1 = pointer1.next;
            pointer2 = pointer2.next;
        }
        
        if(pointer1.data == pointer2.data){
            return true;
        }

        return false;




    }

    /**
     * Determines if the queue is a palindrome (same items forward and backwards).
     * Avoid indexing queue items directly via bracket notation, instead use the
     * queue methods for practice.
     * Use only 1 stack as additional storage, no other arrays or objects.
     * The queue should be returned to its original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */

    isPalindrome() {
        if(this.isEmpty()) return false;

        let isPalin = true;
        const stack = new Stack();
        const len = this.size();

        // again, need to dequeue and enqueue to access everything and preserve the original order
        // using a stack means that we can then retrieve the nodes in reverse order
        for(let i = 0; i <len; i++) {
    let dequeued = this.dequeue();
    stack.pushNode(dequeued);

    this.enqueue(dequeued);
    }

    for (let i = 0; i < len; i++) {
        let dequeued = this.dequeue();
        let popped = stack.popNode();

        if (popped.data !== dequeued.data) {
            isPalin = false;
        }

        this.enqueue(dequeued);
    }

    return isPalin; 
}
}

let list1 = new Queue();
let list2 = new Queue();

list1.enqueue("r");
list1.enqueue("a");
list1.enqueue("c");
list1.enqueue("e");
list1.enqueue("c");
list1.enqueue("a");
list1.enqueue("r");

list2.enqueue("r");
list2.enqueue("a");
list2.enqueue("c");
list2.enqueue("e");
list2.enqueue("c");
list2.enqueue("a");
list2.enqueue("r");

console.log(list1.compareQueues(list2))
console.log(list1.isPalindrome())