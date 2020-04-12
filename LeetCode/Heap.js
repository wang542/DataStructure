class MinHeap {
  constructor() {
    // Init the array heap and add dummy element at index 0; index should start at one, fill index 0
    this.heap = [null];
  }

  getMin() {
    //O(1)
    //access the min element, in minheap it should be the first element
    return this.heap[1];
  }

  insert(node) {
    //inset the new node at the end of heap
    this.heap.push(node);

    //find correct position
    if (this.heap.length > 1) {
      let current = this.heap.length - 1;

      //traverse up the parent node until the current node is smaller than the parent node
      while (
        current > 1 &&
        this.heap[Math.floor(current / 2)] > this.heap[current]
      ) {
        //swap the two nodes
        [this.heap[Math.floor(current / 2)], this.heap[current]] = [
          this.heap[current],
          this.heap[Math.floor(current / 2)],
        ];
        current = Math.floor(current / 2);
      }
    }
  }
}
