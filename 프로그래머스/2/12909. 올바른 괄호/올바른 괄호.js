function solution(s){
    const array = s.split("");
    const stack = [];
    
    if(array[0] === ")") return false;
    
    for(let str of array) {
        if(stack[stack.length - 1] === "(" && str === ")") {
            stack.pop();
        } else {
            stack.push(str);
        }
    }

    return stack.length === 0;
}