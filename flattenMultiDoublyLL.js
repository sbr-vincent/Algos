/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

// Space O(1) Time O(n)
var flatten = function(head) {
    let currentNode = head;
    let childNode;

    while(currentNode !== null){
        // If currentNode has a child then go down a level and get to the end of the level
        if(currentNode.child !== null){
            childNode = currentNode.child;

            // Get to the end of the child level
            while(childNode.next != null){
                childNode = childNode.next;
            }
            // If we are flattening on the last node then make the childNode the end of the LL
            if(currentNode.next === null){
                currentNode.next = childNode;
                childNode.next = null;
            }else{
                // Merge the child level into the parent level
                currentNode.next.prev = childNode;
                childNode.next = currentNode.next;
            }
            currentNode.next = currentNode.child;
            currentNode.child.prev = currentNode;
            currentNode.child = null;
        }else{
            // No child for currentNode so move to the next one
            currentNode = currentNode.next;
        }
    }

    return head;
};