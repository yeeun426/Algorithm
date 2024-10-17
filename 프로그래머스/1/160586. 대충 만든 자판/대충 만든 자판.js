function solution(keymap, targets) {
  var answer = [];
  keymap = keymap.map((key) => key.split(""));
  targets = targets.map((target) => target.split(""));

  for (let target of targets) {
    let cnt = 0;
    for (let str of target) {
      let min = 100;
      for (let key of keymap) {
        let idx = key.indexOf(str);
        if (idx === -1) continue;
        if (min > idx) min = idx;
      }
      if (min === 100) {
        cnt = -1;
        break;
      }
      cnt += min + 1;
    }
    answer.push(cnt);
  }
  return answer;
}