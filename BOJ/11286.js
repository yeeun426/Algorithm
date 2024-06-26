let [N, ...X] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
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
    if (this.size() === 0) return 0;
    this._swap(0, this.size() - 1);
    const poppedValue = this.heap.pop();
    this._siftDown();
    return poppedValue;
  }

  size() {
    return this.heap.length;
  }

  _greater(a, b) {
    const absA = Math.abs(a),
      absB = Math.abs(b);
    if (absA === absB) return a > b;
    return absA > absB;
  }

  _swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  _siftUp() {
    let node = this.size() - 1;
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
      (node * 2 + 1 < this.size() &&
        this._greater(this.heap[node], this.heap[node * 2 + 1])) ||
      (node * 2 + 2 < this.size() &&
        this._greater(this.heap[node], this.heap[node * 2 + 2]))
    ) {
      let minChild =
        node * 2 + 2 < this.size() &&
        this._greater(this.heap[node * 2 + 1], this.heap[node * 2 + 2])
          ? node * 2 + 2
          : node * 2 + 1;
      this._swap(node, minChild);
      node = minChild;
    }
  }
}

const pq = new MinHeap();
let result = [];

for (let i = 0; i < N; i++) {
  const n = X[i];
  if (n !== 0) {
    pq.push(n);
  } else {
    result.push(pq.pop());
  }
}

console.log(result.join("\n"));
