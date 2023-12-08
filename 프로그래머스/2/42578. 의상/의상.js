function solution(clothes) {
    var answer = 0;
    let clothesMap = new Map();
    let combination = 1;
    
    for(let i = 0 ; i < clothes.length ; i++) {
        let [name, type] = clothes[i];
        clothesMap.set(type, (clothesMap.get(type) || 0 ) + 1);
    }
    clothesMap.forEach((cnt, type) => {
        combination *= (cnt+1);
    })
    
    if(clothesMap.size > 1) {
        answer += (combination-1);
    } else {
        answer += clothes.length
    }
    return answer;
}