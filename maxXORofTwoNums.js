var findMaximumXOR = function (nums) {
    let trie = new Trie();
    let root = trie.root;

    // build a bitwise trie using all the numbers in nums
    for (let num of nums) {
        trie.insert(num);
    }

    let ans = 0;
    let INTEGER_MAX = Math.pow(2, 31) - 1;
    for (let num of nums) {
        let target = num ^ INTEGER_MAX;
        let found = trie.search(target);
        ans = Math.max(ans, num ^ found);
    }
    return ans;
};

class Trie {
    root = new Map();

    // inserts binary representation of a number
    insert(number) {
        // for a 32 bit signed integer, there will be 31 bits.
        // So we start at 30 and go down to 0. (from MSB to LSB)
        let index = 30;
        let node = this.root;
        while (index >= 0) {
            // create a mask, for index 30, it'll be Math.pow(2, 30)
            let mask = 1 << index;
            // get the bit value at current position, Bitwise AND will
            // be positive if the bit is set, and 0 if it is unset.
            let bit = (number & mask) > 0 ? 1 : 0;
            if (!node.has(bit)) {
                node.set(bit, new Map());
            }
            node = node.get(bit);
            index--;
        }
    }

    // tries to find number in Trie, if not, then the closest
    // possible
    search(number) {
        let ans = 0;
        let index = 30;
        let node = this.root;
        while (index >= 0) {
            let mask = 1 << index;
            let bit = (number & mask) > 0 ? 1 : 0;
            // found bit in Trie, proceed further
            if (node.has(bit)) {
                node = node.get(bit);

                // bit is not present in Trie, proceed with
                // what is present there then
            } else {
                bit = bit === 0 ? 1 : 0
                node = node.get(bit);
            }

            if (bit === 1) {
                ans = ans + mask;
            }
            index--;
        }
        return ans;
    }
}