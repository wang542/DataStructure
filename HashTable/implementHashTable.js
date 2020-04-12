class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([key, value]);
    console.log(this.data[index]);
    return this.data;
  }

  get(key) {
    let index = this._hash(key);
    const currentBucket = this.data[index];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          //console.log(currentBucket[i][1]);
          return currentBucket[i][1];
        }
      }
    } else {
      return undefined;
    }
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        //console.log(this.data[i][0][0]);
        keysArray.push(this.data[i][0][0]);
      }
    }
    //console.log("keys", keysArray);
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("banana", 1001);
myHashTable.set("apples", 222);
myHashTable.get("grapes");
myHashTable.keys();

//O(1) if there is no hash collision. O(n) if there is a list in same address (hash collision)
