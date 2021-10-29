/**
 * Class to represent a Node for a DoublyLinkedList.
 */
class Node {
    /**
     * Executed when the new keyword is used to construct a new node instance.
     * @param {any} data The data the new node will store.
     */
    constructor(data) {
        this.data = data;
        /**
         * By default a new node instance will not be connected to any other nodes,
         * these properties will be set after instantiation to connect the node to
         * a list. However, the head prev should remain null.
         */
        this.prev = null;
        this.next = null;
    }
}

/**
 * Class to represent a doubly linked list. Nodes can be linked together
 * WITHOUT this class to form a list, but the class is helpful to give all
 * doubly linked lists access to the same helpful methods for consistency
 * and to always keep track of the head and the tail nodes.
 *
 * Unlike a singly linked list, a doubly linked list allows you to traverse
 * backwards as well.
 */
class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
        // The list is empty to start.
        this.head = null;
        this.tail = null;
    }

    /**
     * Determines if this list is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this list is empty.
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Converts this list to an array of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, array grows as list length increases.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray() {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }

    /**
     * Adds all the given items to the back of this list.
     * @param {Array<any>} items Items to be added to the back of this list.
     * @returns {DoublyLinkedList} This list.
     */
    seedFromArr(items = []) {
        items.forEach((item) => this.insertAtBack(item));
        return this;
    }

    insertAtFront(data) {
        let newNode = new Node(data);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;

        return this;
    }

    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack(data) {
        let newNode = new Node(data);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    // EXTRA
    /**
     * Removes the middle node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the removed node.
     */
    removeMiddleNode() {
        let fwdrunner = this.head;
        let backrunner = this.tail;

        while (fwdrunner != null && backrunner != fwdrunner) {
            fwdrunner = fwdrunner.next;
            backrunner = backrunner.prev;
        }
        if (fwdrunner == null) {
            return null;
        }
        if (fwdrunner == this.head) {
            let data = fwdrunner.data;
            this.head = null;
            this.tail = null;
            return data;
        }
        let data = fwdrunner.data;
        fwdrunner.prev.next = fwdrunner.next;
        fwdrunner.next.prev = fwdrunner.prev;

        return data;
    }

    /**
     * Inserts a new node with the given newVal after the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertAfter(targetVal, newVal) {
        let newNode = new Node(newVal)

        if (this.isEmpty()) {
            return false
        }

        let runner = this.head

        while (runner != null) {
            if (runner.data == targetVal && runner.next == null) {
                    newNode.prev = runner
                    runner.next = newNode
                    this.tail = newNode
                    return true
                }

            if (runner.data == targetVal) {
                newNode.next = runner.next
                newNode.prev = runner
                runner.next = newNode
                newNode.next.prev = newNode

                return true
            }
            
            runner = runner.next

        }
        
        return false
    }

    /**
     * Inserts a new node with the given newVal before the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertBefore(targetVal, newVal) { 
        let newNode = new Node(newVal)

        if (this.isEmpty()) {
            return false
        }

        let runner = this.head
        if(runner.data == targetVal) {
            newNode.next = runner
            runner.prev = newNode
            this.head = newNode

            return true
        }

        while (runner != null) {

            if (runner.next != null && runner.next.data == targetVal) {
                newNode.next = runner.next
                newNode.prev = runner
                runner.next = newNode
                newNode.next.prev = newNode

                return true
            }
            
            runner = runner.next
        }
        
        return false
    }
}

const emptyList = new DoublyLinkedList();
/**************** Uncomment these test lists after insertAtBack is created. ****************/
const singleNodeList = new DoublyLinkedList().insertAtBack(1);
const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
const firstThreeList = new DoublyLinkedList().seedFromArr([1, 2, 3]);
const secondThreeList = new DoublyLinkedList().seedFromArr([4, 5, 6]);
const unorderedList = new DoublyLinkedList().seedFromArr([
    -5, -10, 4, -3, 6, 1, -7, -2,
]);

// console.log(singleNodeList.insertAfter(1,5))
// console.log(singleNodeList.toArray())
// console.log(singleNodeList.insertAfter(2,3))
// console.log(singleNodeList.toArray())

console.log(secondThreeList.insertBefore(6,7))
console.log(secondThreeList.toArray())
console.log(secondThreeList.insertBefore(5,9))
console.log(secondThreeList.toArray())
console.log(secondThreeList.insertBefore(4,1))
console.log(secondThreeList.toArray())
console.log(secondThreeList.insertBefore(10,8))
console.log(secondThreeList.toArray())


