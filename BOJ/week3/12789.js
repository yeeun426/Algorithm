let [N, ...input] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

input = input.toString().split(" ").map(Number);
const students = [...input];
const onePeople = [];
let order = 1;

while (students.length > 0 || onePeople.length > 0) {
  console.log(onePeople, students);
  if (students.length == 0 && onePeople[onePeople.length - 1] > order) {
    return console.log("Sad");
  }

  if (onePeople[onePeople.length - 1] == order) {
    order++;
    onePeople.pop();
    continue;
  } else if (students[0] == order) {
    order++;
    students.shift();
    continue;
  }
  onePeople.push(students.shift());
}

console.log("Nice");
