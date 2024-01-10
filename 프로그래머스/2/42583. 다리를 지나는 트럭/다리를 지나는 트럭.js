function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let passing = [];
    let sumWeight = 0;

    while (passing.length || truck_weights.length) {
        if(sumWeight + truck_weights[0] <= weight && passing.length <= bridge_length) {
            const truck = truck_weights.shift();
            sumWeight += truck; 
            passing.push([truck, answer + bridge_length]) 
            answer++;
        } else {
            const [truck, passedSec] = passing.shift();
            if(answer < passedSec) { 
                answer = passedSec; // 나간 트럭의 초로 변경
            }
            sumWeight -= truck; // 나간 트럭 무게 제외
        }        
    }

    return answer+1;
}
