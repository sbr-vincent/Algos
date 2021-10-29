/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
 class MinHeap {
    constructor() {
        /**
         * 0th index not used, so null is a placeholder. Not using 0th index makes
         * calculating the left and right children's index cleaner.
         * This also effectively makes our array start at index 1.
         */
        this.heap = [null];
    }

    /**
     * Retrieves the top (minimum number) in the heap without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {?number} Null if empty.
     */
    top() {
        if(this.heap[1] == null) return null;
        return this.heap[1];
    }

    /**
     * Inserts a new number into the heap and maintains the heaps order.
     * 1. Push new num to back then.
     * 2. Iteratively swap the new num with it's parent while it is smaller than
     *    it's parent.
     * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
     * - Space: O(1) constant.
     * @param {number} num The num to add.
     */
    insert(num) { 
        let parentIdx = Math.floor(this.heap.length/2);
        let numIdx = this.heap.length;
        this.heap.push(num);
        // console.log(parentIdx)
        while(num < this.heap[parentIdx]){
            this.heap[numIdx] = this.heap[parentIdx];
            this.heap[parentIdx] = num;
        }
        return this.heap
    }


    /**
     * Extracts the min num from the heap and then re-orders the heap to
     * maintain order so the next min is ready to be extracted.
     * 1. Save the first node to a temp var.
     * 2. Pop last node off and set idx1 equal to the popped value.
     * 3. Iteratively swap the old last node that is now at idx1 with it's
     *    smallest child IF the smallest child is smaller than it.
     * - Time: O(log n) logarithmic due to shiftDown.
     * - Space: O(1) constant.
     * @returns {?number} The min number or null if empty.
     */
    extract() { 
        let temp = this.heap[1];
        this.heap[1] = this.heap[this.heap.length-1];
        this.heap[this.heap.length-1] = temp;
        let poppedMin = this.heap.pop();
        let node = this.heap[1];
        let idx = 1;
        while(this.heap[idx] > this.heap[idx*2] && this.heap[idx] > this.heap[idx*2+1]){
            var smallestIdx;
            if(this.heap[idx*2] < this.heap[idx*2+1]){
                smallestIdx = idx*2;
                this.heap[idx] = this.heap[smallestIdx];
                this.heap[smallestIdx] = node;
                idx = idx*2;
            } else {
                smallestIdx = idx*2+1;
                this.heap[idx] = this.heap[smallestIdx];
                this.heap[smallestIdx] = node;
                idx = idx*2+1;
            }
        }
        if(this.heap[idx*2+1] == null && this.heap[idx] > this.heap[idx*2]){
            this.heap[idx] = this.heap[idx*2];
            this.heap[idx*2] = node;
        }
        return poppedMin;
    }
}

var mh = new MinHeap();
console.log(mh.top());
mh.insert(1);
mh.insert(2);
mh.insert(4)
mh.insert(7);
mh.insert(5);
mh.insert(9);
mh.insert(3);
mh.insert(10);
mh.insert(8);
mh.insert(13);
mh.insert(19);

console.log(mh.heap)
console.log(mh.extract())
console.log(mh.heap)
console.log(mh.extract())
console.log(mh.heap)
console.log(mh.extract())
console.log(mh.heap)