class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.heapSortUp();
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    getMin() { // Math.min
        if (this.isEmpty()) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapSortDown();
        return min;
    }

    heapSortUp() { // 오름차순
        let curIndex = this.heap.length - 1;
        while (curIndex > 0) {
            const parentIndex = Math.floor((curIndex - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[curIndex]) {
                break;
            }
            this.swap(curIndex, parentIndex);
            curIndex = parentIndex;
        }
    }

    heapSortDown() { // 내림차순
        let currentIndex = 0;
        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let smallestChildIndex = currentIndex;

            if (
                leftChildIndex < this.heap.length &&
                this.heap[leftChildIndex] < this.heap[smallestChildIndex]
            ) {
                smallestChildIndex = leftChildIndex;
            }

            if (
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex] < this.heap[smallestChildIndex]
            ) {
                smallestChildIndex = rightChildIndex;
            }

            if (currentIndex === smallestChildIndex) {
                break;
            }

            this.swap(currentIndex, smallestChildIndex);
            currentIndex = smallestChildIndex;
        }
    }
}

function solution(scoville, K) {
    const heap = new MinHeap();
    scoville.forEach(value => heap.push(value));
    let answer = 0;

    while (heap.heap.length > 1 && heap.heap[0] < K) {
        const first = heap.getMin();
        const second = heap.getMin();
        const newScoville = first + second * 2;
        heap.push(newScoville);
        answer++;
    }

    return heap.heap[0] >= K ? answer : -1;
}
