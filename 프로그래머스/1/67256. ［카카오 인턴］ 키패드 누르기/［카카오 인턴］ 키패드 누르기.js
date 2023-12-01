function solution(numbers, hand) {
    var answer = '';
    
    let leftPos = "*";
    let rightPos = "#";
    const leftNum = [1,4,7];
    const rightNum = [3,6,9];
    
    numbers.forEach(num => {
        if(leftNum.indexOf(num) >= 0) {
            answer += "L";
            leftPos = num;
            return;
        }        
        if (rightNum.indexOf(num) >= 0) {
            answer += "R";
            rightPos = num;
            return;
        }
        
        let leftDist = getDistance(leftPos, num);
        let rightDist = getDistance(rightPos, num);
        if(leftDist === rightDist) {
            if(hand === "right") {
                answer  += "R";
                rightPos = num;
                return;
            } else {
                answer  += "L";
                leftPos = num;
                return;
            }
        }
        
        if(leftDist < rightDist) {
            answer += "L";
            leftPos = num;
        } else {
            answer += "R";
            rightPos = num;
        }
    })    
    return answer;
}

function getDistance(pos, num) {
    const keyPad = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        "*": [3, 0],
        0: [3, 1],
        "#": [3, 2],
    };
    const handPos = keyPad[pos];
    const targetPos = keyPad[num];
    
    let dist = Math.abs(handPos[0] - targetPos[0]) + Math.abs(handPos[1] - targetPos[1]);
    return dist
}