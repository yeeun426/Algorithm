function solution(nums) {
    var answer = 0;
    const typeMap = new Map();
    let chooseNum = (nums.length)/2;

    for(let i = 0 ; i < nums.length ; i++) {
        const type = nums[i].toString();
        typeMap.set(type, (typeMap.get(type) || 0 ) + 1);
    }
    
    {chooseNum >= typeMap.size ? answer = typeMap.size : answer = chooseNum}
        
    return answer;
}