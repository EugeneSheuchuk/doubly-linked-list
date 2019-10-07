const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);
        if(!this._head) {
            this._head = node;
            this._tail = node;
        } else {
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        }
        this.length += 1;
        return this;
    }

    head() {
        return  this._head === null ? null : this._head.data;
    }

    tail() {
        return this._tail === null ? null : this._tail.data;
    }

    at(index) {
        let count = 0;
        let current = this._head;
        while (current) {
            if (count === index) {
                return current.data;
            }
            current = current.next;
            count += 1;
        }
        return false;
    }

    insertAt(index, data) {
        let count = 1;
        let current = this._head;
        const node = new Node(data);
        if (index === 0) {
            if (this.length === 0) {
                this._head = node;
                this._tail = node;
                this.length += 1;
            } else {
                this._head.prev = node;
                node.next = this._head;
                this._head = node;
            }
        } else {
            while (current) {
                current = current.next;
                if (count === index) {
                    node.prev = current.prev;
                    current.prev.next = node;
                    node.next = current;
                    current.prev = node;
                    this.length += 1;
                }
                count += 1;
            }
        }
        return this;
    }

    isEmpty() {
        return this.length < 1;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let current = this._head;
        let count = 1;
        if (index === 0) {
            if (this.length === 1) {
                this._head = null;
                this._tail = null;
                this.length = 0;
            } else {
                this._head = current.next;
                current.next.prev = null;
            }
        } else {
            while (current) {
                if (count === index) {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                current = current.next;
                count +=1;
            }
        }
        return this;
    }

    reverse() {
        let current = this._head;
        let prev = null;
        while( current ){
            let next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }
        this._tail = this._head;
        this._head = prev;
        return this;
    }

    indexOf(data) {
        let current = this._head;
        let count = 0;
        while (current) {
            if (current.data === data) {
                return count;
            }
            current = current.next;
            count += 1;
        }
        return -1;
    }

    display() {
        const result = [];
        let current = this._head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }
}

module.exports = LinkedList;
