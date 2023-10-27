class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head == null;
  }

  insertAtHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtTail(value) {
    if (this.isEmpty()) {
      this.insertAtHead(value);
      return;
    }
    const newNode = new Node(value);
    let temp = this.head;

    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  search(value) {
    let temp = this.head;
    while (temp) {
      if (temp.data == value) return true;
      temp = temp.next;
    }
    return false;
  }

  deleteAtHead() {
    if (this.isEmpty()) return;
    this.head = this.head.next;
  }

  deleteVal(value) {
    if (this.isEmpty()) return;
    if (!this.search(value)) return;
    if (this.head.data == value) {
      this.head = this.head.next;
      return;
    }
    let temp = this.head;
    while (temp.next.data !== value && temp.next != null) {
      temp = temp.next;
    }
    temp.next = temp.next.next;
  }

  deleteAtTail() {
    if (this.isEmpty()) return;
    if (this.head.next == null) {
      this.head = null;
      return;
    }
    let temp = this.head;

    while (temp.next && temp.next.next) {
      temp = temp.next;
    }
    temp.next = null;
  }

  printList() {
    if (this.isEmpty()) {
      return 'Empty List';
    } else {
      let temp = this.head;
      let listStr = '';
      while (temp != null) {
        listStr += String(temp.data);
        listStr += ' -> ';
        temp = temp.next;
      }
      listStr += 'null';
      return listStr;
    }
  }
}

// Tester

let list = new LinkedList();
list.insertAtHead(2);
list.insertAtHead(4);
list.insertAtHead(5);
list.insertAtHead(7);
list.insertAtHead(1);
console.log(list.printList());
list.deleteAtTail();
console.log(list.printList());
list.deleteAtTail();
console.log(list.printList());
list.deleteAtTail();
console.log(list.printList());
list.deleteAtTail();
console.log(list.printList());
list.deleteAtTail();
console.log(list.printList());
