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
  let pq = new MinHeap(); // 서버 만료 시간을 관리할 우선순위 큐
  let curServerCnt = 0; // 현재 서버의 개수
  let count = 0; // 증설된 서버 횟수

  for (let i = 0; i < 24; i++) {
    while (!pq.isEmpty() && pq.peek()[0] === i) {
      // 만료된 서버 내리기
      curServerCnt -= pq.pop()[1];
    }
    let needCnt = parseInt(players[i] / m); // 현재 필요한 서버의 개수
    let addCnt = curServerCnt - needCnt; // 부족한 서버 개수 계산

    if (addCnt < 0) {
      addCnt = Math.abs(addCnt);
      curServerCnt += addCnt;
      count += addCnt;
      pq.push([i + k, addCnt]);
    }
  }
  return count;
}
