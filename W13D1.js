/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class Node {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
        this.data = data;
        /**
         * These properties are how this node is connected to other nodes to form
         * the tree. Similar to .next in a SinglyLinkedList except a BST node can
         * be connected to two other nodes. To start, new nodes will not be
         * connected to any other nodes, these properties will be set after
         * the new node is instantiated.
         */
        this.left = null;
        this.right = null;
    }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
        /**
         * Just like the head of a linked list, this is the start of our tree which
         * branches downward from here.
         */
        this.root = null;
    }

    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }

    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() { 
        return this.root == null;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min(current = this.root) { 
        if(this.isEmpty()) {
            return null;
        }
        while(current.left != null){
            current = current.left;
        }

        return current.data
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    minRecursive(current = this.root) { 
        if(this.isEmpty()) {
            return null;
        }

        if(current.left != null){
            return this.minRecursive(current.left);
        } else {
            return current.data
        }

        // if(current.left == null) {
        //     return current.data
        // }

        // return this.minRecursive(current.left)
        
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) { 
        if(this.isEmpty()) {
            return null;
        }
        while(current.right != null){
            current = current.right;
        }

        return current.data
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    maxRecursive(current = this.root) { 
        if(this.isEmpty()) {
            return null;
        }

        if(current.right != null){
            return this.maxRecursive(current.right);
        } else {
            return current.data
        }

        // if(current.right == null) {
        //     return current.data
        // }

        // return this.minRecursive(current.right)
    }
}

const emptyTree = new BinarySearchTree();

const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new Node(10);

const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new Node(10);
twoLevelTree.root.left = new Node(5);
twoLevelTree.root.left.left = new Node(3);
twoLevelTree.root.left.right = new Node(6);
twoLevelTree.root.right = new Node(15);
twoLevelTree.root.right.left = new Node(13);

/* twoLevelTree
        root
        10
      /    \
    5       15
  /  \     /
3     6   13
*/

  // const fullTree = new BinarySearchTree();
  // fullTree
  //   .insert(25)
  //   .insert(15)
  //   .insert(10)
  //   .insert(22)
  //   .insert(4)
  //   .insert(12)
  //   .insert(18)
  //   .insert(24)
  //   .insert(50)
  //   .insert(35)
  //   .insert(70)
  //   .insert(31)
  //   .insert(44)
  //   .insert(66)
  //   .insert(90);


// console.log(emptyTree.isEmpty())
// console.log(oneNodeTree.isEmpty())

// console.log(emptyTree.min())
// console.log(oneNodeTree.min())
// console.log(twoLevelTree.min())

// console.log(emptyTree.max())
// console.log(oneNodeTree.max())
// console.log(twoLevelTree.max())

// console.log(emptyTree.minRecursive())
// console.log(oneNodeTree.minRecursive())
// console.log(twoLevelTree.minRecursive())

console.log(emptyTree.maxRecursive())
console.log(oneNodeTree.maxRecursive())
console.log(twoLevelTree.maxRecursive())

twoLevelTree.print();