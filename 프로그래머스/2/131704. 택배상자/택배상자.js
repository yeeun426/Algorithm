function solution(order) {
  var answer = 0;
  const assistQueue = [];

  let orderIdx = 0;
  let curOrder = 1;

  while (orderIdx < order.length) {
    let curBelt = order[orderIdx];

    if (curBelt === curOrder) {
      answer++;
      orderIdx++;
      curOrder++;
      continue;
    }

    let assistQueueLen = assistQueue.length;
    if (assistQueueLen > 0 && curBelt == assistQueue[assistQueueLen - 1]) {
      assistQueue.pop();
      answer++;
      orderIdx++;
      continue;
    } else {
      assistQueue.push(curOrder);
      curOrder++;
    }

    if (curOrder > order.length) break;
  }
  return answer;
}