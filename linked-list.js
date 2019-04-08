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

  insertAt(idx, val) {
    let newNode = new Node(val);
    let current = this.head;
    let count = 0;

    if (idx === 0){
      let nextNode = current.next;
      this.head = newNode;
      newNode.next = nextNode;
    }

    if (this.length === 1){
      this.tail = newNode;
      newNode.next = null;
      return undefined;
    }

    while (current !== null){
      if (count+1 === idx){
        let nextNode = current.next.next;

        current.next = newNode;
        current.next.next = nextNode;
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
      // 
  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
