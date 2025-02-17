function solution(my_string) {
    let result = "";
    
    for(let str of my_string){
        if(str.charCodeAt() >= 97 ) result += String.fromCharCode(str.charCodeAt() - 32);
        else result += String.fromCharCode(str.charCodeAt() + 32);

    }
    return result
}