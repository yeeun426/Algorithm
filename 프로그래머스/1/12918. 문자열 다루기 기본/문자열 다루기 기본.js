function solution(s) {
    let isLength = false;
    if(s.length === 4 | s.length === 6) {
        isLength = true;
    }
    if(s.includes("e")) return false;
    return isLength && !isNaN(s);
}