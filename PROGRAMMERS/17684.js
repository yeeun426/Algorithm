function solution(msg) {
  var answer = [];
  const index = [];

  for (let i = 0; i < 26; i++) {
    index.push(String.fromCharCode(i + 65));
  }

  for (let i = 0; i < msg.length; i++) {
    let [w, c] = [msg[i], msg[i + 1]];

    while (index.includes(w)) {
      let message = w + c;
      if (index.includes(message)) {
        w += c;
        c = msg[++i + 1];
      } else {
        answer.push(index.indexOf(w) + 1);
        index.push(w + c);
        break;
      }
    }
  }

  return answer;
}

console.log(solution("KAKAO"));

// 알파벳 주입 방법
// 좀 더 시간 복잡도 줄이는 방법
