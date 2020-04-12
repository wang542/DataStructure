class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (newNode.value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        }
      }
    }
  }
  lookup(value) {
    if (this.root === null) {
      return false;
    }
    let currentNode = this.root;
    while (true) {
      if (currentNode.value === value) {
        return currentNode;
      } else if (value > currentNode.value) {
        if (currentNode.right === null) {
          return false;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        if (currentNode.left === null) {
          return false;
        }
        currentNode = currentNode.left;
      }
    }
  }

  remove(value) {}
}

const tree = new BinarySearchTree();
tree.insert(2);
tree.insert(5);
tree.insert(1);
tree.insert(7);
tree.insert(9);
