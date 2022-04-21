var MyHashSet = function () {
    this.hashSet = {};
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    if (this.hashSet[key] == null) {
        this.hashSet[key] = 1;
    } else {
        this.hashSet[key] += 1;
    }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    delete this.hashSet[key];
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    if (this.hashSet[key] == null) {
        return false;
    } else {
        return true;
    }
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
