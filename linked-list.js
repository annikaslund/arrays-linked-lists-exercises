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
      return current.val;
    }

    while (current !== null){
      if (current.next.next === null){
        let prevTail = this.tail;
        this.tail = current;

        current.next = null;
        this.length -= 1;

        return prevTail.val;
      }

      current = current.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    let prevHead = this.head;

    if (this.length === 1){
      this.head = null;
      this.tail = null;

      this.length -= 1;

      return prevHead.val;
    }

    this.head = this.head.next;

    this.length -= 1;

    return prevHead.val;
  }

  /** getAt(idx): get val at idx. */
  // ERROR HANDLING //
  getAt(idx) {
    
    // if (idx > this.length || typeof idx !== "number"){
    //   throw "invalid index";
    // }

    let current = this.head;
    let count = 0;

    while (current !== null){
      if (count === idx){
        return current.val;
      }

      count += 1;
      current = current.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */
  setAt(idx, val) {
    let current = this.head;
    let count = 0;

    if (this.length === 1 || idx === 0){
      current.val = val
      return undefined;
    }

    while (current !== null){
      if (count+1 === idx){
        current.next.val = val;
      }

      current = current.next;
      count += 1;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    let current = this.head;
    let count = 0;

    if (idx === 0) return this.unshift(val);

    if (idx === this.length) return this.push(val);

    while (current !== null){
      if ((count+1) === idx){
        let nextNode = current.next
        current.next = newNode

        newNode.next = nextNode;

        this.length += 1;

        return undefined;
      }

      current = current.next
      count += 1;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // traverse ll 
    // if count+1 is same as idx
    
    let current = this.head;
    let count = 0;

    if (this.length === 1) return this.pop();

    while (current !== null){
      if (count+1 === idx){
        let nextNode = current.next.next
        current.next = nextNode;

        this.length -= 1;
      }

      current = current.next;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    // traverse through each node
    // add vals 
    // divide by length

    let current = this.head;
    let total = 0;
    
    if (this.length === 0) return total;

    while (current !== null){
      total += current.val;

      current = current.next;
    }

    return total / this.length;
  }
}

module.exports = LinkedList;
