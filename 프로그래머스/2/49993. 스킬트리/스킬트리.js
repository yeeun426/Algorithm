function solution(skill, skill_trees) {
  var answer = 0;
  skill = skill.split("");

  for (let i = 0; i < skill_trees.length; i++) {
    const orderSkill = [...skill]; 
    let isValid = true;

    for (let j = 0; j < skill_trees[i].length; j++) {
      let tree = skill_trees[i][j];

      if (skill.includes(tree)) {  
        if (orderSkill[0] === tree) { 
          orderSkill.shift();
        } else { 
          isValid = false;
          break; 
        }
      }
    }
    if (isValid) answer++;
  }

  return answer;
}
