class DoublyLinkedLists {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previsou: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
      previous: null
    };
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      previous: null
    };
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
  }
}
