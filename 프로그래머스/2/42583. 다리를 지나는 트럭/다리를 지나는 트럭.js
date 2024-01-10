function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let passing = [];
    let currentWeight = 0;
    let truckIndex = 0;

    while (passing.length || truckIndex < truck_weights.length) {
        answer++;
        if (passing.length > 0) {
            const front = passing[0];
            if (answer - front.startTime === bridge_length) {
                currentWeight -= front.weight;
                passing.shift();
            }
        }

        if (truckIndex < truck_weights.length && currentWeight+truck_weights[truckIndex] <= weight) {
            const newTruck = {
                weight: truck_weights[truckIndex],
                startTime: answer
            };
            passing.push(newTruck);
            currentWeight += newTruck.weight;
            truckIndex++;
        }
    }

    return answer;
}
