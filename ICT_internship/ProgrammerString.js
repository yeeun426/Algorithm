let s = require('fs').readFileSync('예제.txt').toString().trim();

function checkString(alphabet) {
    return (
      alphabet["p"] >= 1 &&
      alphabet["r"] >= 3 &&
      alphabet["o"] >= 1 &&
      alphabet["g"] >= 1 &&
      alphabet["a"] >= 1 &&
      alphabet["m"] >= 2 &&
      alphabet["e"] >= 1
    );
}
  
function programmerStrings(s) {
    let alphabet = {};

    let leftEnd = 0;
    let rightStart = 0;
  
    // 왼쪽 string 검사
    for (let i = 0; i < s.length; i++) {
        const character = s[i];

        if(alphabet[character]) {
            alphabet[character]++;
        } else {
            alphabet[character] = 1;
        }
      
        if (checkString(alphabet)) {
            leftEnd = i;
            break;
        }
    }
  
    // 오른쪽 string 검사
    alphabet = {};
  
    for (let i = s.length - 1; i >= 0; i--) {
        const character = s[i];

        if(alphabet[character]) {
            alphabet[character]++;
        } else {
            alphabet[character] = 1;
        }
    
        if (checkString(alphabet)) {
            rightStart = i;
            break;
        }
    }
  
    return rightStart - leftEnd - 1;
}

console.log(programmerStrings(s));