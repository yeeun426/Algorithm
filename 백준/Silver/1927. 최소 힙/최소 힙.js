let [N, ...X] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this._siftUp();
  }

  pop() {
    if (this._size() === 0) return 0;
    this._swap(0, this._size() - 1);
    const poppedValue = this.heap.pop();
    this._siftDown();
    return poppedValue;
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  _size() {
    return this.heap.length;
  }

  _greater(a, b) {
    return a > b;
  }

  _siftUp() {
    let node = this._size() - 1;
    while (
      node > 0 &&
      this._greater(this.heap[Math.floor((node - 1) / 2)], this.heap[node])
    ) {
      this._swap(node, Math.floor((node - 1) / 2));
      node = Math.floor((node - 1) / 2);
    }
  }

  _siftDown() {
    let node = 0;
    while (
      (node * 2 + 1 < this._size() &&
        this._greater(this.heap[node], this.heap[node * 2 + 1])) ||
      (node * 2 + 2 < this._size() &&
        this._greater(this.heap[node], this.heap[node * 2 + 2]))
    ) {
      let minChild =
        node * 2 + 2 < this._size() &&
        this._greater(this.heap[node * 2 + 1], this.heap[node * 2 + 2])
          ? node * 2 + 2
          : node * 2 + 1;
      this._swap(node, minChild);
      node = minChild;
    }
  }
}

// 2 4 5 7 3
const numArr = new MinHeap();
let result = [];

for (let i = 0; i < N; i++) {
  const x = X[i];
  if (x !== 0) {
    numArr.push(x);
  } else {
    result.push(numArr.pop());
  }
}

console.log(result.join("\n"));
