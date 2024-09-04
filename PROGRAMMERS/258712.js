function solution(babbling) {
  var answer = 0;
  const speak = ["hello", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    let word = babbling[i];

    for (let j = 0; j < 4; j++) {
      if (word.includes(speak[j].repeat(2))) break;
      word = word.split(speak[j]).join(" ");
      // replace는 'helloyehello'인 경우 앞에 'hello'만 인식되어 " yehello" 로 str변경
      // split는 앞 뒤 hello 모두 인식되어 " ye "로 변경
      console.log(word);
    }

    if (!word.split(" ").join("").length) answer++;
  }

  return answer;
}

console.log(solution(["hellohellohello"]));
