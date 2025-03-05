class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(val) {
    this.heap.push(val);
    this.heap.sort((a, b) => a[0] - b[0]);
  }
  pop() {
    return this.heap.shift();
  }
  peek() {
    return this.heap[0];
  }
  isEmpty() {
    return this.heap.length === 0;
  }
}

function solution(players, m, k) {
  let pq = new MinHeap();
  let size = 0; // 현재 서버의 개수
  let count = 0; // 증설된 서버 횟수

  for (let i = 0; i < 24; i++) {
    // 만료된 서버 내리기
    while (!pq.isEmpty() && pq.peek()[0] === i) {
      size -= pq.pop()[1];
    }
    let need = parseInt(players[i] / m); // 현재 필요한 서버의 개수
    let more = size - need; // - 서버 증설 개수

    if (more < 0) {
      more = -more;
      size += more;
      count += more;
      pq.push([i + k, more]);
    }
  }

  return count;
}