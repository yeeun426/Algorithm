function solution(new_id) {
  // 1단계
  new_id = new_id.toLowerCase();

  // 2단계
  new_id = new_id.replace(/[^a-z0-9-_.]/g, "");

  // 3단계
  new_id = new_id.replace(/\.{2,}/g, ".");

  // 4단계
  if (new_id[0] == ".") {
    new_id = new_id.slice(1);
  }
  if (new_id[new_id.length - 1] == ".") {
    new_id = new_id.slice(0, -1);
  }

  // 5단계
  if (new_id.length == 0) new_id = "a";

  //6, 7단계
  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);
    new_id = new_id.replace(/\.$/, "");
  } else if (new_id.length <= 2) {
    new_id += new_id[new_id.length - 1].repeat(3 - new_id.length); // * 는 반복 능력 없음 -> repeat로 대체
  }
  return new_id;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
