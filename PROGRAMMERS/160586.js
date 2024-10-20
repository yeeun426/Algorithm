//sol 2.
function solution(keymap, targets) {
  const answer = [];
  const map = new Map();

  for (const key of keymap) {
    for (let i = 0; i < key.length; i++) {
      if (!map.has(key[i]) || i + 1 < map.get(key[i])) map.set(key[i], i + 1);
    }
  }

  for (let target of targets) {
    let cnt = 0;
    for (let i = 0; i < target.length; i++) {
      cnt += map.get(target[i]);
    }
    answer.push(cnt || -1);
  }
  return answer;
}
console.log(solution(["AB", "AC"], ["BBA"]));

// sol 2.
// function solution(keymap, targets) {
//   var answer = [];
//   keymap = keymap.map((key) => key.split(""));
//   targets = targets.map((target) => target.split(""));

//   for (let target of targets) {
//     let cnt = 0;
//     for (let str of target) {
//       let min = 100;
//       for (let key of keymap) {
//         let idx = key.indexOf(str);
//         if (idx === -1) continue;
//         if (min > idx) min = idx;
//       }
//       if (min === 100) {
//         cnt = -1;
//         break;
//       }
//       cnt += min + 1;
//     }
//     answer.push(cnt);
//   }
//   return answer;
// }

// 내코드 왜 틀령
// function solution(keymap, targets) {
//   var answer = [];
//   keymap = keymap.map((key) => key.split(""));
//   targets = targets.map((target) => target.split(""));

//   for (let target of targets) {
//     let cnt = 0;
//     for (let str of target) {
//       let min = 100;
//       for (let key of keymap) {
//         let idx = key.indexOf(str);
//         if (idx === -1) continue;
//         if (min > idx) min = idx;
//       }
//       console.log(cnt);
//       cnt += min + 1;
//     }
//     answer.push(cnt > 100 ? -1 : cnt);
//   }
//   return answer;
// }

// console.log(solution(["AB", "AC"], ["BBA"]));
