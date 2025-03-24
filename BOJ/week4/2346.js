// 메모리 제한이 무려 4mb
// 이렇게 메모리 제한이 극도로 작은 문제에서는 사실상 메모리 초과
let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const balloons = input[1].split(" ").map(Number);

// 풍선 번호와 적힌 숫자를 함께 저장하는 덱을 만든다.
// 풍선 터뜨리면 제거해서 덱을 줄여나감
// 이 과정을 반복하여 순서를 저장한다.

const deque = balloons.map((num, idx) => [idx + 1, num]);
const answer = [];
let curIdx = 0; // 현재 가리키는 위치 (삭제 위치)

while (deque.length) {
  const [idx, move] = deque[curIdx]; // 현재 풍선
  answer.push(idx); // 풍선 터뜨림 (idx : 출력 위치)
  deque.splice(curIdx, 1); // 현재 풍선 제거

  if (deque.length === 0) break;

  if (move > 0) {
    curIdx = (curIdx + move - 1) % deque.length;
  } else {
    curIdx = (curIdx + move) % deque.length;
    if (curIdx < 0) curIdx += deque.length;
  }
}

console.log(answer.join(" "));
