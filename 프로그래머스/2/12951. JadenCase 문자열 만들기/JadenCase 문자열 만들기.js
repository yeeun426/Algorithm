function solution(s) {
   var answer = '';
   let result = s.split(' ');

   console.log(result)
   let jadenCase = result.map(x=> x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
   console.log(jadenCase)

   answer = jadenCase.join(" ")
    return answer;
}