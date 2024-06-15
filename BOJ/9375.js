let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
let i = 0;

while (i < input.length) {
  let clothesMap = new Map();
  let combination = 1;
  let answer = 0;
  let num_clothes = +input[i];

  for (let j = 0; j < num_clothes; j++) {
    let [name, type] = input[j + i + 1].split(" ");
    clothesMap.set(type, (clothesMap.get(type) || 0) + 1);
  }

  clothesMap.forEach((cnt, type) => {
    combination *= cnt + 1;
  });

  if (clothesMap.size > 1) {
    answer += combination - 1;
  } else {
    answer += num_clothes;
  }

  console.log(answer);
  i += num_clothes + 1;
}
