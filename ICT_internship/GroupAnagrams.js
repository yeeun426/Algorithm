const words = ['valya', 'lyglb', 'vldoh'];

const sortWord = []

for(let i = 0; i < words.length; i++) {
    sortWord.push(words[i].split("").sort().join(""));
}

const result = sortWord.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
},{});


console.log(Object.keys(result).length);