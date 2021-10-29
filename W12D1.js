class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLStack {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        // return true if SLStack is empty
        // return false if SLStack is not empty
        if (this.head == null) {
            return true;
        } else {
            return false;
        }
    }

    size() {
        // return length of SLStack
        let counter = 0;
        let runner = this.head;
        if (!this.isEmpty()) {
            counter++;
        }
        while (runner.next != null) {
            runner = runner.next;
            counter++;
        }
        return counter;
    }

    push(newVal) {
        // push newVal to top of stack
        let newNode = new Node(newVal);

        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let runner = this.head;

            while (runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode;
        }

        return this;
    }

    pop() {
        // remove and return data
        if (this.isEmpty()) return null;

        let runner = this.head;

        while (runner.next.next != null) {
            runner = runner.next;
        }

        let removedNode = runner.next;
        runner.next = null;

        return removedNode.data;
    }

    peek() {
        // return data at top of stack without removing
        if (this.isEmpty()) return null;

        let runner = this.head;

        while (runner.next != null) {
            runner = runner.next;
        }

        return runner.data;
    }

    // EXTRA
    contains(value) {
        // return true if SLStack contains value
        // return false if SLStack does not contain value
        if (this.isEmpty()) return null;

        let runner = this.head;

        while (runner !== null) {
            if (runner.data === value) return true;
            runner = runner.next;
        }

        return false;
    }

    // EXTRA
    print() {
        if (this.isEmpty()) return false;

        let runner = this.head;

        while (runner != null) {
            console.log(runner.data);
            runner = runner.next;
        }
        return this;
    }
}

var linkedList = new SLStack();
linkedList.print();
linkedList.push(5);
linkedList.push(2);
linkedList.push(9);
linkedList.print();
console.log("---")
linkedList.pop();
console.log("---");
linkedList.print();
console.log(linkedList.contains(9));
console.log(linkedList.peek());
linkedList.push(4);
console.log(linkedList.size());

  // Alex