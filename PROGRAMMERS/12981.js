function solution(n, words) {
  var answer = [];
  let cnt = 1;
  let index = 0;
  const eng_words = [words[0]];

  while (index + 1 < words.length) {
    cnt++;

    let last = words[index].split("").pop();
    let first = words[index + 1][0];

    if (last !== first) break;
    if (eng_words.includes(words[index + 1])) break;

    eng_words.push(words[index + 1]);
    if (eng_words.length === words.length) return [0, 0];
    index++;
  }

  answer.push(cnt % n !== 0 ? cnt % n : n);
  answer.push(Math.ceil(cnt / n));
  return answer;
}

console.log(
  solution(3, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ]),
);
