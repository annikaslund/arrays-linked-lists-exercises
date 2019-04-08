/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head !== null) newNode.next = this.head;

    if (this.tail === null) this.tail = newNode;
    
    this.head = newNode
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;

    if (this.length === 1){
      this.head = null;
      this.tail = null;

      this.length -= 1;
      return current;
    }

    while (current !== null){
      if (current.next.next === null){
        let prevTail = this.tail;
        this.tail = current;

        current.next = null;
        this.length -= 1;

        return prevTail;
      }

      current = current.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    // set head.next to head
    // return prevHead

    let prevHead = this.head;

    if (this.length === 1){
      this.head = null;
      this.tail = null;

      this.length -= 1;
      
      return prevHead;
    }

    this.head = this.head.next;

    this.length -= 1;

    return prevHead;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
