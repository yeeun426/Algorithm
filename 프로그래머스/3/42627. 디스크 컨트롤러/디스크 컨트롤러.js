class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i) {
    return i * 2 + 1;
  }
  getRightChildIndex(i) {
    return i * 2 + 2;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = this.getParentIndex(index);
      if (this.heap[parent][1] <= this.heap[index][1]) break; // job[1] 기준 (작업 시간)
      this.swap(parent, index);
      index = parent;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    while (this.getLeftChildIndex(index) < length) {
      let smallerChild = this.getLeftChildIndex(index);
      const right = this.getRightChildIndex(index);
      if (right < length && this.heap[right][1] < this.heap[smallerChild][1]) {
        smallerChild = right;
      }
      if (this.heap[index][1] <= this.heap[smallerChild][1]) break;
      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function solution(jobs) {
  jobs.sort((a, b) => a[0] - b[0]); // 요청 시점 기준 정렬

  const heap = new MinHeap();
  let time = 0;
  let total = 0;
  let index = 0;
  const length = jobs.length;

  while (index < length || !heap.isEmpty()) {
    // 현재 시점 이전에 들어온 작업들을 힙에 넣기
    while (index < length && jobs[index][0] <= time) {
      heap.push(jobs[index]);
      index++;
    }

    if (!heap.isEmpty()) {
      const [start, duration] = heap.pop();
      time += duration;
      total += time - start; // 대기 + 실행 시간
    } else {
      // 아직 요청이 들어오지 않은 경우
      time = jobs[index][0];
    }
  }

  return Math.floor(total / length);
}
