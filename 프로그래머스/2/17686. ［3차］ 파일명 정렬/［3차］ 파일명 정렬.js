function solution(files) {
  const answer = [];

  for (let file of files) {
    let [fileName, head, number] = file.match(/^(\D+)([0-9]+)(.*)$/);
    answer.push([fileName, head.toLowerCase(), +number]);
  }

  answer.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
    if (a[2] > b[2]) return 1;
    if (a[2] < b[2]) return -1;
  });

  return answer.map((name) => name[0]);
}